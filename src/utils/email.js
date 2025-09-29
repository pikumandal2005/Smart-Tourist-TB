const nodemailer = require('nodemailer');

let transporter;
let useEthereal = false;

async function getTransporter() {
  if (transporter) return transporter;
  if (process.env.MAILGUN_USER && process.env.MAILGUN_PASS) {
    console.log('Creating transporter with Mailgun');
    transporter = nodemailer.createTransport({
      host: 'smtp.mailgun.org',
      port: 587,
      secure: false,
      auth: { user: process.env.MAILGUN_USER, pass: process.env.MAILGUN_PASS },
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
    from: process.env.EMAIL_FROM, // Must be a verified sender on SendGrid
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