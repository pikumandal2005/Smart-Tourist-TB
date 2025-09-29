const nodemailer = require('nodemailer');
const config = require('./config.json');

let transporter;

async function getTransporter() {
  if (transporter) return transporter;

  // Use Gmail if configured
  if (config.GMAIL_USER && config.GMAIL_APP_PASSWORD) {
    console.log('Creating transporter with Gmail from config.json');
    transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: config.GMAIL_USER,
        pass: config.GMAIL_APP_PASSWORD,
      },
    });
    return transporter;
  }

  // This part of the code will now be ignored because the config.json file is present
  // Dev fallback: use Ethereal test account with preview URL
  const testAccount = await nodemailer.createTestAccount();
  transporter = nodemailer.createTransport({
    host: 'smtp.ethereal.email',
    port: 587,
    secure: false,
    auth: { user: testAccount.user, pass: testAccount.pass },
  });
  console.log('[EMAIL] Using Ethereal test account for preview emails');
  return transporter;
}

async function sendMail(to, subject, html) {
  const t = await getTransporter();
  const info = await t.sendMail({
    from: config.EMAIL_FROM,
    to,
    subject,
    html,
  });
}

module.exports = { sendMail };