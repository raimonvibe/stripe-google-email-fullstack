import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import Stripe from "stripe"

/**
 * Stripe Checkout Session Creation API Route
 * 
 * This API endpoint creates a Stripe Checkout session for processing payments.
 * It handles user authentication, validates input, and creates a secure payment session.
 * 
 * Tutorial: This demonstrates how to integrate Stripe payments in a Next.js app
 * with proper authentication and error handling.
 */
export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2025-06-30.basil",
    })
    
    const session = await getServerSession(authOptions)
    
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    const { priceId, quantity = 1 } = await req.json()

    if (!priceId) {
      return NextResponse.json({ error: "Price ID is required" }, { status: 400 })
    }

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment", // One-time payment (vs subscription)
      payment_method_types: ["card"], // Accept card payments
      
      line_items: [
        {
          price: priceId, // Stripe Price ID (created in Stripe Dashboard)
          quantity,
        },
      ],
      
      success_url: `${process.env.NEXTAUTH_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/payment/cancel`,
      
      customer_email: session.user.email,
      
      metadata: {
        userId: session.user.email, // Link payment to user
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Stripe checkout error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
