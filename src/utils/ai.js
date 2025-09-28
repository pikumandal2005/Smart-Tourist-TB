const { prisma } = require('../prisma');

function computeSpeedKmh(prev, curr) {
  if (!prev) return null;
  const R = 6371; // km
  const toRad = (v) => (v * Math.PI) / 180;
  const dLat = toRad(curr.latitude - prev.latitude);
  const dLon = toRad(curr.longitude - prev.longitude);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(prev.latitude)) *
      Math.cos(toRad(curr.latitude)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distanceKm = R * c;
  const dtHours = (curr.createdAt - prev.createdAt) / 3600000; // ms to hours
  if (dtHours <= 0) return null;
  return distanceKm / dtHours;
}

async function analyzePing(touristId, currentPing, plan) {
  const prev = await prisma.locationPing.findFirst({
    where: { touristId },
    orderBy: { createdAt: 'desc' },
    skip: 1,
  });
  let speedKmh = null;
  if (prev) {
    speedKmh = computeSpeedKmh(prev, currentPing);
    if (speedKmh) {
      await prisma.locationPing.update({
        where: { id: currentPing.id },
        data: { speedKmh },
      });
    }
  }

  let anomalies = [];
  if (speedKmh && speedKmh > 120) {
    anomalies.push('Unusual speed detected');
  }
  if (plan) {
    const { latitude, longitude, geofenceRadiusMeters } = plan;
    const { isInsideGeofence } = require('./geofence');
    const inside = isInsideGeofence(
      currentPing.latitude,
      currentPing.longitude,
      latitude,
      longitude,
      geofenceRadiusMeters
    );
    if (!inside) anomalies.push('Outside geofence');
  }

  if (anomalies.length) {
    await prisma.alert.create({
      data: {
        touristId,
        type: 'ANOMALY',
        message: anomalies.join('; '),
      },
    });
  }

  const scoreBase = 100;
  let penalty = 0;
  if (speedKmh && speedKmh > 120) penalty += 30;
  if (anomalies.includes('Outside geofence')) penalty += 40;
  const score = Math.max(0, scoreBase - penalty);
  await prisma.safetyScore.create({
    data: { touristId, score, reason: anomalies.join('; ') || 'Normal' },
  });
}

module.exports = { analyzePing };