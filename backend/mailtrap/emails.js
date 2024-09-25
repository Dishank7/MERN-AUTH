import {
	PASSWORD_RESET_REQUEST_TEMPLATE,
	PASSWORD_RESET_SUCCESS_TEMPLATE,
	VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
// import { mailtrapClient, sender } from "./mailtrap.config.js";
import { transporter } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verificationToken) => {
	const mailOptions = {
	  from: `"Dishank" <${process.env.EMAIL_USER}>`, // sender address
	  to: email, // recipient's email address
	  subject: "Verify your email", // Subject line
	  html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken), // HTML body with token
	};
  
	try {
	  const info = await transporter.sendMail(mailOptions);
	  console.log("Email sent successfully: ", info.response);
	} catch (error) {
	  console.error(`Error sending verification: `, error);
	  throw new Error(`Error sending verification email: ${error}`);
	}
  };

// export const sendVerificationEmail = async (email, verificationToken) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Verify your email",
// 			html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationToken),
// 			category: "Email Verification",
// 		});

// 		console.log("Email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending verification`, error);

// 		throw new Error(`Error sending verification email: ${error}`);
// 	}
// };

export const sendWelcomeEmail = async (email, name) => {
	const mailOptions = {
	  from: `"Auth Company" <${process.env.EMAIL_USER}>`, // sender address
	  to: email, // recipient's email address
	  subject: "Welcome to Auth Company!", // Subject line
	  html: `
		<h1>Welcome, ${name}!</h1>
		<p>Thank you for joining Auth Company. We are excited to have you on board!</p>
		<p>Best Regards,</p>
		<p>The Auth Company Team</p>
	  `, // HTML body content
	};
  
	try {
	  const info = await transporter.sendMail(mailOptions);
	  console.log("Welcome email sent successfully: ", info.response);
	} catch (error) {
	  console.error(`Error sending welcome email: `, error);
	  throw new Error(`Error sending welcome email: ${error}`);
	}
  };



// export const sendWelcomeEmail = async (email, name) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			template_uuid: "e65925d1-a9d1-4a40-ae7c-d92b37d593df",
// 			template_variables: {
// 				company_info_name: "Auth Company",
// 				name: name,
// 			},
// 		});

// 		console.log("Welcome email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending welcome email`, error);

// 		throw new Error(`Error sending welcome email: ${error}`);
// 	}
// };


export const sendPasswordResetEmail = async (email, resetURL) => {
	const mailOptions = {
	  from: `"Auth Company" <${process.env.EMAIL_USER}>`, // sender address
	  to: email, // recipient's email address
	  subject: "Reset your password", // Subject line
	  html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL), // HTML body with reset URL
	};
  
	try {
	  const info = await transporter.sendMail(mailOptions);
	  console.log("Password reset email sent successfully: ", info.response);
	} catch (error) {
	  console.error(`Error sending password reset email: `, error);
	  throw new Error(`Error sending password reset email: ${error}`);
	}
  };

// export const sendPasswordResetEmail = async (email, resetURL) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Reset your password",
// 			html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
// 			category: "Password Reset",
// 		});
// 	} catch (error) {
// 		console.error(`Error sending password reset email`, error);

// 		throw new Error(`Error sending password reset email: ${error}`);
// 	}
// };


export const sendResetSuccessEmail = async (email) => {
	const mailOptions = {
	  from: `"Auth Company" <${process.env.EMAIL_USER}>`, // sender address
	  to: email, // recipient's email address
	  subject: "Password Reset Successful", // Subject line
	  html: PASSWORD_RESET_SUCCESS_TEMPLATE, // HTML body content
	};
  
	try {
	  const info = await transporter.sendMail(mailOptions);
	  console.log("Password reset email sent successfully: ", info.response);
	} catch (error) {
	  console.error(`Error sending password reset success email: `, error);
	  throw new Error(`Error sending password reset success email: ${error}`);
	}
  };

// export const sendResetSuccessEmail = async (email) => {
// 	const recipient = [{ email }];

// 	try {
// 		const response = await mailtrapClient.send({
// 			from: sender,
// 			to: recipient,
// 			subject: "Password Reset Successful",
// 			html: PASSWORD_RESET_SUCCESS_TEMPLATE,
// 			category: "Password Reset",
// 		});

// 		console.log("Password reset email sent successfully", response);
// 	} catch (error) {
// 		console.error(`Error sending password reset success email`, error);

// 		throw new Error(`Error sending password reset success email: ${error}`);
// 	}
// };
