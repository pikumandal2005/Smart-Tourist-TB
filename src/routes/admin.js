const express = require('express');
const { prisma } = require('../prisma');
const { generateEFIR } = require('../utils/pdf');

const router = express.Router();

function authMiddleware(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  const jwt = require('jsonwebtoken');
  if (!token) return res.status(401).json({ error: 'Missing token' });
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.role !== 'ADMIN') return res.status(403).json({ error: 'Forbidden' });
    req.adminId = payload.sub;
    next();
  } catch (e) {
    return res.status(401).json({ error: 'Invalid token' });
  }
}

router.use(authMiddleware);

router.get('/tourists', async (req, res) => {
  const tourists = await prisma.tourist.findMany({
    include: { tourPlans: true, alerts: true },
    orderBy: { createdAt: 'desc' },
  });
  res.json(tourists);
});

router.get('/tourist/:id/track', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const pings = await prisma.locationPing.findMany({ where: { touristId: id }, orderBy: { createdAt: 'desc' } });
  res.json(pings);
});

router.get('/alerts', async (req, res) => {
  const alerts = await prisma.alert.findMany({ orderBy: { createdAt: 'desc' }, take: 100 });
  res.json(alerts);
});

router.get('/efir/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  const tourist = await prisma.tourist.findUnique({ where: { id } });
  const last = await prisma.locationPing.findFirst({ where: { touristId: id }, orderBy: { createdAt: 'desc' } });
  const alerts = await prisma.alert.findMany({ where: { touristId: id }, orderBy: { createdAt: 'desc' }, take: 20 });
  const pdf = await generateEFIR({ tourist, lastLocation: last, alerts });
  res.setHeader('Content-Type', 'application/pdf');
  res.send(pdf);
});

// Delete a tourist and cascade delete related records
router.delete('/tourist/:id', async (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isNaN(id)) return res.status(400).json({ error: 'Invalid id' });
  try {
    const exists = await prisma.tourist.findUnique({ where: { id } });
    if (!exists) return res.status(404).json({ error: 'Tourist not found' });
    await prisma.$transaction([
      prisma.alert.deleteMany({ where: { touristId: id } }),
      prisma.expenditure.deleteMany({ where: { touristId: id } }),
      prisma.safetyScore.deleteMany({ where: { touristId: id } }),
      prisma.locationPing.deleteMany({ where: { touristId: id } }),
      prisma.tourPlan.deleteMany({ where: { touristId: id } }),
      prisma.tourist.delete({ where: { id } }),
    ]);
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;