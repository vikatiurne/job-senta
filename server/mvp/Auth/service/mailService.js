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
    const htmlContent = `<!DOCTYPE html>  
      <html lang="en">  
      <head>  
        <meta charset="UTF-8">  
        <meta name="viewport" content="width=device-width, initial-scale=1.0">  
        <title>Forgot Password</title>  
        <style>  
          body {  
            font-family: Arial, sans-serif;  
            margin: 0;  
            padding: 0;  
            background-color: #f4f4f4;  
          }  
          .container {  
            width: 100%;  
            max-width: 600px;  
            margin: 20px auto;  
            background-color: #ffffff;  
            border-radius: 8px;  
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);  
            overflow: hidden;  
          }  
          .header {
            background-color: #C8B18D;
            padding: 40px; 
            margin-top: 100px;  
            text-align: center;  
          }  
          .header img {
            width: 100px;  
          }
          .content {  
            padding: 20px;  
            text-align: center;  
          }  
          .content h1 {  
            margin: 0;  
            font-size: 24px;  
          }  
          .content h2 {  
            font-size: 18px;  
            margin: 10px 0;  
            color: #666;  
          }  
          .content p {  
            font-size: 16px;  
            color: #333;  
          }  
          .button {  
            background-color: #AF2121;  
            color: white;  
            padding: 10px 20px;  
            text-decoration: none;  
            border-radius: 5px;  
            font-weight: bold;  
            display: inline-block;  
            margin-top: 20px;  
          }  
          .footer {  
            background-color: #f4f4f4;  
            text-align: center;  
            padding: 10px;  
            font-size: 12px;  
            color: #666;  
          }  
        </style>  
      </head>  
      <body>  
        <div class="container">  
          <div class="header">  
            <img src= "cid:loock" alt="Lock Icon" "> 
            </div>  
            <div class="content">  
            <h1>FORGOT</h1>  
            <h2>YOUR PASSWORD?</h2>  
            <p>Not to worry, we got you! Let’s get you a new password.</p>  
            <a href="${link}" class="button">Reset password</a>  
          </div>  
          <div class="footer">  
            <p>Thank you for using our service!</p>  
          </div>  
        </div>  
      </body>  
      </html>
      `;

    const mailOptions = {
      from: process.env.SMTP_USER,
      to,
      subject: "Changing the password on Jobsenta",
      html: htmlContent,
      attachments: [
        {
          filename: "shield.png",
          path: "static/shield.png",
          cid: "loock",
        },
      ],
    };

    try {
      await this.transporter.sendMail(mailOptions);
      console.log("Email sent successfully");
    } catch (error) {
      console.error("Error sending email:", error);
      throw new Error("Failed to send email");
    }
  }
};
