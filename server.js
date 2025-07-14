require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Configure your SMTP credentials here
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST, // e.g., smtp.gmail.com
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
  auth: {
    user: process.env.SMTP_USER, // your SMTP username
    pass: process.env.SMTP_PASS // your SMTP password or app password
  }
});

const sendMail = async (subject, html) => {
  await transporter.sendMail({
    from: 'admin@vectorviewsoftware.com',
    to: 'pervaizfahad7@gmail.com',
    subject,
    html
  });
};

app.post('/api/quote', async (req, res) => {
  const { name, phone, email, subject, description } = req.body;
  if (!name || !email || !subject || !description) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  try {
    await sendMail(
      'New Quote Request',
      `<b>Name:</b> ${name}<br><b>Phone:</b> ${phone || ''}<br><b>Email:</b> ${email}<br><b>Subject:</b> ${subject}<br><b>Description:</b> ${description}`
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields.' });
  }
  try {
    await sendMail(
      'New Contact Message',
      `<b>Name:</b> ${name}<br><b>Phone:</b> ${phone || ''}<br><b>Email:</b> ${email}<br><b>Message:</b> ${message}`
    );
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send email.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 