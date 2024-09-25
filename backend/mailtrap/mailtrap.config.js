// import { MailtrapClient } from "mailtrap";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

// export const mailtrapClient = new MailtrapClient({
// 	endpoint: process.env.MAILTRAP_ENDPOINT,
// 	token: process.env.MAILTRAP_TOKEN,
// });

// export const sender = {
// 	email: "mailtrap@demomailtrap.com",
// 	name: "Dishank",
// };

export const transporter = nodemailer.createTransport({
	service: "gmail", // or use another SMTP service provider
	auth: {
	  user: process.env.EMAIL_USER, // Your email (Gmail or other SMTP provider)
	  pass: process.env.EMAIL_PASSWORD, // App password or regular password
	},
  });
