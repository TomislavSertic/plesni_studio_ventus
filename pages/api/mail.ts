import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = req.body;
    if (!data.name || !data.message) {
      if (data.wantedResponse === "email" && data.email === "") {
        return res
          .status(400)
          .json({ message: "Invalid input data", success: false });
      }
      if (
        (data.wantedResponse === "phone" ||
          data.wantedResponse === "whatsup") &&
        data.phoneNumber === ""
      ) {
        return res
          .status(400)
          .json({ message: "Invalid input data", success: false });
      }
    }

    try {
      const { name, email, phoneNumber, wantedResponse, message, formType } =
        data;

      const transporter = nodemailer.createTransport({
        host: "live.smtp.mailtrap.io",
        port: 587,
        auth: {
          user: process.env.MAILTRAP_USER,
          pass: process.env.MAILTRAP_PASS,
        },
      });
      let emailHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 20px;
            color: #333;
        }
        .email-container {
            max-width: 600px;
            margin: auto;
            padding: 20px;
            border: 1px solid #ddd;
            border-radius: 5px;
        }
        .email-header {
            font-size: 20px;
            margin-bottom: 20px;
        }
        .email-body {
            margin-bottom: 20px;
        }
        .email-footer {
            font-size: 16px;
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">You've got a new message!</div>
        <div class="email-body">
            <p><strong>Od:</strong> ${email}</p>
            <p><strong>Želim da mi odgovorite:</strong> ${wantedResponse}</p>
            <p><strong>Broj Telefona:</strong> ${phoneNumber}</p>
            <p><strong>Ime:</strong> ${name}</p>
        </div>
        <div class="email-message">
            <p><strong>Poruka:</strong></p>
            <p>${message}</p>
        </div>
        
    </div>
</body>
</html>
`;
      const mailOption = {
        from: process.env.SEND_FROM_EMAIL,
        to: process.env.SEND_TO_EMAIL,
        subject: `${formType} poruka od ${name} - ${
          email ? email : phoneNumber
        }`,
        html: emailHTML,
      };
      await transporter.sendMail(mailOption);
      return res.status(200).json({ success: true, message: "Mail Sent." });
    } catch (error) {
      return res
        .status(500)
        .json({ success: false, message: "Mail Didn't send" });
    }
  }
  if (req.method !== "POST") {
    res.status(400).json({ success: false, message: "Bad Request" });
  }
}
