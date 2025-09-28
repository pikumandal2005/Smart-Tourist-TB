const express = require('express');
const { prisma } = require('../prisma');
const { z } = require('zod');
const { addBlock } = require('../utils/ledger');

const router = express.Router();

function authMiddleware(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  const jwt = require('jsonwebtoken');
  if (!token) return res.status(401).json({ error: 'Missing token' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.role !== 'TOURIST') return res.status(403).json({ error: 'Forbidden' });
    req.userId = payload.sub;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

router.use(authMiddleware);

router.get('/me', async (req, res) => {
  const tourist = await prisma.tourist.findUnique({ where: { id: req.userId } });
  res.json(tourist);
});

const planSchema = z.object({
  startDate: z.string(),
  endDate: z.string(),
  locationName: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  geofenceRadiusMeters: z.number().int().min(100).max(50000).default(1000),
});

router.post('/plan', async (req, res) => {
  try {
    const data = planSchema.parse(req.body);
    const plan = await prisma.tourPlan.create({
      data: {
        touristId: req.userId,
        startDate: new Date(data.startDate),
        endDate: new Date(data.endDate),
        locationName: data.locationName,
        latitude: data.latitude,
        longitude: data.longitude,
        geofenceRadiusMeters: data.geofenceRadiusMeters,
      },
    });
    await addBlock({ type: 'PLAN_CREATE', touristId: req.userId, plan });
    res.json(plan);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get('/plan', async (req, res) => {
  const plan = await prisma.tourPlan.findFirst({
    where: { touristId: req.userId },
    orderBy: { createdAt: 'desc' },
  });
  res.json(plan);
});

const expSchema = z.object({ item: z.string(), amount: z.number().min(0) });
router.post('/expenditure', async (req, res) => {
  try {
    const { item, amount } = expSchema.parse(req.body);
    const exp = await prisma.expenditure.create({
      data: { touristId: req.userId, item, amount },
    });
    res.json(exp);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

router.get('/expenditure', async (req, res) => {
  const exps = await prisma.expenditure.findMany({
    where: { touristId: req.userId },
    orderBy: { createdAt: 'desc' },
  });
  const total = exps.reduce((s, e) => s + e.amount, 0);
  res.json({ items: exps, total });
});

const alertSchema = z.object({ type: z.enum(['SOS', 'WOMEN_HELP']), message: z.string().optional() });
router.post('/alert', async (req, res) => {
  try {
    const { type, message } = alertSchema.parse(req.body);
    const alert = await prisma.alert.create({
      data: { touristId: req.userId, type, message },
    });
    res.json(alert);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;