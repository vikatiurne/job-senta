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

  static async sendResetPasswordMail(to, link) {
    try {
      await this.transporter.sendMail({
        from: process.env.SMTP_USER,
        to,
        subject: `Зміна паролю на ${process.env.CLIENT_URL}`,
        text: "",
        html: `<div>
                  <h1>Натисніть на посилання для збросу пароля</h1>
                  <a href="${link}">${link}</a>
                </div>`,
      });
    } catch (error) {
      console.error("Error sending email:", error.message);
      throw new Error("Failed to send email");
    }
  }
};

