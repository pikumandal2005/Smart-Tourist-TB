const nodemailer = require('nodemailer');

let transporter;
let useEthereal = false;

async function getTransporter() {
  if (transporter) return transporter;
  const hasCreds = !!(process.env.EMAIL_USER && process.env.EMAIL_PASS);
  if (hasCreds) {
    transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });
    return transporter;
  }
  // Dev fallback: use Ethereal test account with preview URL
  const testAccount = await nodemailer.createTestAccount();
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });
  useEthereal = true;
  console.log('[EMAIL] Using Ethereal test account for preview emails');
  return transporter;
}

async function sendMail(to, subject, html) {
  const t = await getTransporter();
  const info = await t.sendMail({
    from: process.env.EMAIL_FROM || 'Tourist Buddy <noreply@touristbuddy.local>',
    to,
    subject,
    html,
  });
  if (useEthereal) {
    const preview = nodemailer.getTestMessageUrl(info);
    console.log('[EMAIL:PREVIEW]', { to, subject, preview });
  }
}

module.exports = { sendMail };