const express = require('express');
const { prisma } = require('../prisma');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { z } = require('zod');
const { sendMail } = require('../utils/email');

const router = express.Router();

function genUniqueId() {
  return 'TB-' + Math.random().toString(36).slice(2, 10).toUpperCase();
}
function genPassword() {
  return Math.random().toString(36).slice(2, 10);
}

const registerSchema = z.object({
  email: z.string().email(),
  mobile: z.string().optional(),
  fullName: z.string(),
  aadhaarNumber: z.string().optional(),
  emergencyDetails: z.any().optional(),
  companionsCount: z.number().int().min(0).default(0),
  gender: z.string().optional(),
  language: z.string().optional(),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

router.post('/tourist/register', async (req, res) => {
  try {
    const data = registerSchema.parse(req.body);
    const existingTourist = await prisma.tourist.findUnique({ where: { email: data.email } });
    if (existingTourist) return res.status(409).json({ error: 'Email already registered' });
    const uniqueId = genUniqueId();
    const passwordHash = await bcrypt.hash(data.password, 10);
    const tourist = await prisma.tourist.create({
      data: { email: data.email, mobile: data.mobile, fullName: data.fullName, aadhaarNumber: data.aadhaarNumber, emergencyDetails: data.emergencyDetails, companionsCount: data.companionsCount, gender: data.gender, language: data.language, uniqueId, passwordHash },
    });
    await sendMail(
      data.email,
      'Your Tourist Buddy Credentials',
      `<p>Your Unique ID: <b>${uniqueId}</b></p><p>Password: <b>${data.password}</b></p>`
    );
    res.json({ ok: true, uniqueId });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

const loginSchema = z.object({ id: z.string(), password: z.string() });
router.post('/tourist/login', async (req, res) => {
  try {
    const { id, password } = loginSchema.parse(req.body);
    const tourist = await prisma.tourist.findUnique({ where: { uniqueId: id } });
    if (!tourist) return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, tourist.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ sub: tourist.id, role: 'TOURIST' }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    res.json({ token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

// Forgot password: request reset link by email or unique ID
const forgotSchema = z
  .object({ email: z.string().email().optional(), id: z.string().optional() })
  .refine((v) => v.email || v.id, { message: 'Email or ID is required' });

router.post('/tourist/forgot', async (req, res) => {
  console.log('Received forgot password request with body:', req.body);
  try {
    const { email, id } = forgotSchema.parse(req.body);
    const tourist = email
      ? await prisma.tourist.findUnique({ where: { email } })
      : await prisma.tourist.findUnique({ where: { uniqueId: id } });
    if (!tourist) return res.status(404).json({ error: 'Tourist not found' });
    const token = jwt.sign({ sub: tourist.id, role: 'TOURIST', purpose: 'RESET' }, process.env.JWT_SECRET, {
      expiresIn: '15m',
    });
    const resetUrl = `http://localhost:5173/tourist/reset?token=${encodeURIComponent(token)}`;
    await sendMail(
      tourist.email,
      'Tourist Buddy Password Reset',
      `<p>Use the link below to reset your password (valid 15 minutes):</p><p><a href="${resetUrl}">${resetUrl}</a></p>`
    );
    res.json({ ok: true });
  } catch (e) {
    console.error('Error in forgot password endpoint:', e);
    res.status(400).json({ error: e.message });
  }
});

// Reset password: apply new password using reset token
const resetSchema = z.object({ token: z.string(), password: z.string().min(6) });
router.post('/tourist/reset', async (req, res) => {
  try {
    const { token, password } = resetSchema.parse(req.body);
    const payload = jwt.verify(token, process.env.JWT_SECRET);
    if (payload.role !== 'TOURIST' || payload.purpose !== 'RESET') {
      return res.status(400).json({ error: 'Invalid reset token' });
    }
    const passwordHash = await bcrypt.hash(password, 10);
    await prisma.tourist.update({ where: { id: payload.sub }, data: { passwordHash } });
    res.json({ ok: true });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

const adminLoginSchema = z.object({ email: z.string().email(), password: z.string() });
router.post('/admin/login', async (req, res) => {
  try {
    const { email, password } = adminLoginSchema.parse(req.body);
    const admin = await prisma.admin.findUnique({ where: { email } });
    if (!admin) return res.status(401).json({ error: 'Invalid credentials' });
    const ok = await bcrypt.compare(password, admin.passwordHash);
    if (!ok) return res.status(401).json({ error: 'Invalid credentials' });
    const token = jwt.sign({ sub: admin.id, role: 'ADMIN' }, process.env.JWT_SECRET, {
      expiresIn: '7d',
    });
    res.json({ token });
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
});

module.exports = router;