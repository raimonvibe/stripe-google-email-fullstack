import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { sendWelcomeEmail } from "@/lib/email"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { type } = await req.json()

    if (type === "welcome") {
      const result = await sendWelcomeEmail(
        session.user.email,
        session.user.name || "User"
      )
      
      if (result.success) {
        return NextResponse.json({ message: "Welcome email sent successfully" })
      } else {
        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })
      }
    }

    return NextResponse.json({ error: "Invalid email type" }, { status: 400 })
  } catch (error) {
    console.error("Email API error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
