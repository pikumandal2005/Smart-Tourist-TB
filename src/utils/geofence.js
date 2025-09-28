function isInsideGeofence(lat, lon, centerLat, centerLon, radiusMeters) {
  const R = 6371000; // meters
  const toRad = (v) => (v * Math.PI) / 180;
  const dLat = toRad(lat - centerLat);
  const dLon = toRad(lon - centerLon);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRad(centerLat)) *
      Math.cos(toRad(lat)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance <= (radiusMeters || 1000);
}

module.exports = { isInsideGeofence };