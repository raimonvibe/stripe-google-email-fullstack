/**
 * Email Service Configuration
 * 
 * This module sets up email functionality using Nodemailer with SMTP.
 * It supports various email providers (Gmail, SendGrid, etc.) through SMTP configuration.
 * 
 * Tutorial: This demonstrates how to implement email automation in a fullstack app
 * for user notifications, welcome emails, and marketing communications.
 */
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST, // SMTP server (e.g., smtp.gmail.com)
  port: parseInt(process.env.EMAIL_PORT || "587"), // SMTP port (587 for TLS)
  secure: process.env.EMAIL_SECURE === "true", // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER, // SMTP username (your email)
    pass: process.env.EMAIL_PASS, // SMTP password (app password for Gmail)
  },
})

export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

/**
 * Send Email Function
 * 
 * Sends an email using the configured SMTP transporter.
 * Supports both HTML and plain text content.
 * 
 * @param to - Recipient email address
 * @param subject - Email subject line
 * @param html - HTML content of the email
 * @param text - Optional plain text version (auto-generated if not provided)
 * @returns Promise with success status and message ID or error
 */
export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM, // Sender address
      to, // Recipient address
      subject, // Subject line
      html, // HTML body content
      text: text || html.replace(/<[^>]*>/g, ""), // Plain text fallback
    })

    console.log("Email sent successfully:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error: error instanceof Error ? error.message : String(error) }
  }
}

/**
 * Send Welcome Email
 * 
 * Sends a welcome email to new users after they sign up.
 * Uses HTML template with inline styles for better email client compatibility.
 * 
 * @param userEmail - User's email address
 * @param userName - User's display name
 * @returns Promise with email sending result
 */
export async function sendWelcomeEmail(userEmail: string, userName: string) {
  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #f97316;">Welcome to Fullstack Next.js App!</h1>
      <p>Hi ${userName},</p>
      <p>Thank you for signing up! We're excited to have you on board.</p>
      <p>You can now access all the features of our application:</p>
      <ul>
        <li>✅ Google OAuth Authentication</li>
        <li>💳 Stripe Payment Integration</li>
        <li>📧 Email Notifications</li>
        <li>🌙 Dark Mode Toggle</li>
      </ul>
      <p>If you have any questions, feel free to reach out to our support team.</p>
      <p>Best regards,<br>The Fullstack Next.js App Team</p>
    </div>
  `

  return sendEmail({
    to: userEmail,
    subject: "Welcome to Fullstack Next.js App!",
    html,
  })
}

/**
 * Send Payment Confirmation Email
 * 
 * Sends a payment confirmation email after successful Stripe payment.
 * Includes formatted payment details and professional styling.
 * 
 * @param userEmail - User's email address
 * @param userName - User's display name
 * @param amount - Payment amount in cents
 * @param currency - Currency code (e.g., 'usd')
 * @returns Promise with email sending result
 */
export async function sendPaymentConfirmationEmail(
  userEmail: string,
  userName: string,
  amount: number,
  currency: string
) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100) // Convert from cents to dollars

  const html = `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h1 style="color: #f97316;">Payment Confirmation</h1>
      <p>Hi ${userName},</p>
      <p>Your payment has been successfully processed!</p>
      <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <h3>Payment Details:</h3>
        <p><strong>Amount:</strong> ${formattedAmount}</p>
        <p><strong>Status:</strong> Completed</p>
        <p><strong>Date:</strong> ${new Date().toLocaleDateString()}</p>
      </div>
      <p>Thank you for your purchase!</p>
      <p>Best regards,<br>The Fullstack Next.js App Team</p>
    </div>
  `

  return sendEmail({
    to: userEmail,
    subject: "Payment Confirmation",
    html,
  })
}
