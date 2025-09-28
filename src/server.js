require('dotenv').config();
const express = require('express');
const cors = require('cors');
const http = require('http');
const { Server } = require('socket.io');
const { prisma } = require('./prisma');
const { addBlock } = require('./utils/ledger');
const { analyzePing } = require('./utils/ai');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', service: 'Tourist Buddy API' });
});

app.use('/auth', require('./routes/auth'));
app.use('/tourist', require('./routes/tourist'));
app.use('/admin', require('./routes/admin'));

const server = http.createServer(app);
const io = new Server(server, { cors: { origin: '*' } });

io.on('connection', (socket) => {
  socket.on('tourist:location', async (payload) => {
    try {
      const { touristId, latitude, longitude } = payload;
      const ping = await prisma.locationPing.create({
        data: { touristId, latitude, longitude },
      });
      await addBlock({ type: 'PING', touristId, ping });
      const plan = await prisma.tourPlan.findFirst({ where: { touristId }, orderBy: { createdAt: 'desc' } });
      await analyzePing(touristId, ping, plan);
      io.emit('admin:location', { touristId, latitude, longitude, createdAt: ping.createdAt });
    } catch (e) {
      console.error('Location event error', e);
    }
  });
  socket.on('disconnect', () => {});
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, async () => {
  console.log(`API server listening on http://localhost:${PORT}`);
  // Ensure admin account exists
  const adminEmail = 'admin@touristbuddy.local';
  const existing = await prisma.admin.findUnique({ where: { email: adminEmail } });
  if (!existing) {
    const bcrypt = require('bcryptjs');
    await prisma.admin.create({
      data: {
        email: adminEmail,
        passwordHash: await bcrypt.hash('Admin@123', 10),
        name: 'System Admin',
      },
    });
    console.log('Seeded admin account: admin@touristbuddy.local / Admin@123');
  }
});