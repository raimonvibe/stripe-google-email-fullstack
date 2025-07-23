/**
 * Stripe Webhook Handler API Route
 * 
 * This API endpoint handles webhook events from Stripe to process payment confirmations
 * and other payment-related events securely on the server side.
 * 
 * Tutorial: This demonstrates how to handle Stripe webhooks for reliable payment processing
 * and how to store payment records in your database.
 */
import { NextRequest, NextResponse } from "next/server"
import { headers } from "next/headers"
import Stripe from "stripe"
import { prisma } from "@/lib/prisma"

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: NextRequest) {
  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
      apiVersion: "2025-06-30.basil",
    })
    
    const body = await req.text()
    const headersList = await headers()
    const signature = headersList.get("stripe-signature")!

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret)
    } catch (err) {
      console.error("Webhook signature verification failed:", err)
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
    }

    switch (event.type) {
      case "checkout.session.completed":
        const session = event.data.object as Stripe.Checkout.Session
        
        await prisma.payment.create({
          data: {
            userId: session.metadata?.userId || "", // Link to user from metadata
            stripePaymentId: session.id, // Stripe session ID for reference
            amount: session.amount_total || 0, // Amount in cents
            currency: session.currency || "usd", // Currency code
            status: "completed", // Payment status
            description: "Premium Features Purchase", // Description for records
          },
        })
        
        console.log("Payment recorded successfully:", session.id)
        break

      case "payment_intent.succeeded":
        const paymentIntent = event.data.object as Stripe.PaymentIntent
        console.log("Payment intent succeeded:", paymentIntent.id)
        break

      default:
        console.log(`Unhandled event type: ${event.type}`)
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
