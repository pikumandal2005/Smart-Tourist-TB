const PDFDocument = require('pdfkit');

function generateEFIR({ tourist, lastLocation, alerts }) {
  const doc = new PDFDocument();
  const chunks = [];
  doc.on('data', (c) => chunks.push(c));
  return new Promise((resolve) => {
    doc.on('end', () => resolve(Buffer.concat(chunks)));
    doc.fontSize(18).text('Automated e-FIR - Tourist Buddy', { align: 'center' });
    doc.moveDown();
    doc.fontSize(12).text(`Tourist: ${tourist.fullName} (${tourist.uniqueId})`);
    doc.text(`Email: ${tourist.email}`);
    doc.text(`Mobile: ${tourist.mobile || 'N/A'}`);
    doc.text(`Aadhaar: ${tourist.aadhaarNumber || 'N/A'}`);
    doc.moveDown();
    if (lastLocation) {
      doc.text(`Last Known Location: lat=${lastLocation.latitude}, lon=${lastLocation.longitude}`);
      doc.text(`Timestamp: ${new Date(lastLocation.createdAt).toLocaleString()}`);
    }
    doc.moveDown();
    doc.text('Alerts:');
    alerts.forEach((a) => {
      doc.text(`- ${a.type} at ${new Date(a.createdAt).toLocaleString()}: ${a.message || ''}`);
    });
    doc.end();
  });
}

module.exports = { generateEFIR };