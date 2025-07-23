import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { sendWelcomeEmail } from "@/lib/email"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const { type } = await req.json()

    if (!session?.user?.email) {
      return NextResponse.json({ 
        message: "Demo mode: Email functionality requires authentication. In a real app, this would send an email to " + (session?.user?.email || "the user") + ".",
        demo: true,
        explanation: "This endpoint demonstrates how email automation works with authenticated users. Configure SMTP settings in your .env file for production use."
      })
    }

    if (type === "welcome") {
      const result = await sendWelcomeEmail(
        session.user.email,
        session.user.name || "User"
      )
      
      if (result.success) {
        return NextResponse.json({ message: "Welcome email sent successfully" })
      } else {
        return NextResponse.json({ 
          message: "Demo: Email would be sent in production. Configure email settings in .env file.",
          demo: true 
        })
      }
    }

    return NextResponse.json({ error: "Invalid email type" }, { status: 400 })
  } catch (error) {
    console.error("Email API error:", error)
    return NextResponse.json({
      message: "Demo: This shows how email automation works. Configure email settings in your .env file for production.",
      demo: true,
      explanation: "In production, this would send transactional emails using your configured SMTP provider."
    })
  }
}
