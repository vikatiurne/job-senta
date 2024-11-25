const nodemailer = require("nodemailer");

module.exports = class MailService {
    static transporter = nodemailer.createTransport({
        service: 'gmail',
        host: process.env.SMTP_HOST,
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD
        } 

  });

  static async sendResetPasswordMail(to, link) {
    await this.transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject: `Зміна паролю на ${process.env.API_URL}`,
      text: "",
      html: ` <div>
                    <h1>Натисніть на посилання для збросу пароля</h1>
                    <a href="${link}">${link}</a>
                </div>`,
    });
  }
};
