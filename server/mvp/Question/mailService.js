const nodemailer = require("nodemailer");
const authService = require("./authService");

module.exports = class MailService {
  static transporter = nodemailer.createTransport({
    service: "gmail",
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  static async sendQuestionMail(to, link) {
  
    const mailOptions = {
      from: email,
      to: 'recipient-email@example.com', // Email получателя  
      subject: `Question from ${name}`,
      text: question,
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      res.status(500).send('Error sending email: ' + error.message);
    }
  }
}