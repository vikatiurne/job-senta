const nodemailer = require('nodemailer');

module.exports = class QuestionMailService {
  static transporter = nodemailer.createTransport({
    service: 'gmail',
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  static async sendQuestionMail(name, email, question) {
    const htmlContent = `<h4>New Question from Website</h4><p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Question:</strong> ${question}</p>`;

    const mailOptions = {
      from: email,
      to:process.env.SMTP_USER,
      subject: 'New Question from website Jobsenta',
      html: htmlContent,
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }
};
