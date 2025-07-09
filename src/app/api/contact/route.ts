

import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function POST(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user:"",
      pass:"",
    },
  });

  const mailOptions = {
    from: email,
    to: "hamza.coder.794@gmail.com",          // 🔁 Replace this (your inbox)
    subject: `Portfolio Contact: ${subject}`,
    text: `From: ${name} <${email}>\n\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Mail send error:", error);
    return res
      .status(500)
      .json({ success: false, message: "Internal server error" });
  }
}
