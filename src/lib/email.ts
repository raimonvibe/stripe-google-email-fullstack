import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT || "587"),
  secure: process.env.EMAIL_SECURE === "true",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
}

export async function sendEmail({ to, subject, html, text }: EmailOptions) {
  try {
    const info = await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ""),
    })

    console.log("Email sent:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Email error:", error)
    return { success: false, error: error instanceof Error ? error.message : String(error) }
  }
}

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

export async function sendPaymentConfirmationEmail(
  userEmail: string,
  userName: string,
  amount: number,
  currency: string
) {
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: currency.toUpperCase(),
  }).format(amount / 100)

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
