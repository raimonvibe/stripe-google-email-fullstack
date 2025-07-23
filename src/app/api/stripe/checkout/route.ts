import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const { priceId, amount, description } = await req.json()

    if (!session?.user?.email) {
      return NextResponse.json({ 
        message: "Demo mode: Payment processing requires authentication. This demonstrates how Stripe checkout sessions work with authenticated users.",
        demo: true,
        explanation: "In a real app, this would create a Stripe checkout session and redirect to payment. Configure STRIPE_SECRET_KEY in your .env file for production use.",
        demoData: {
          priceId: priceId || "price_demo",
          amount: amount || 1000,
          description: description || "Tutorial Demo Payment",
          currency: "usd"
        }
      })
    }

    const stripeConfigured = process.env.STRIPE_SECRET_KEY && process.env.STRIPE_SECRET_KEY !== "sk_test_your-stripe-secret-key"

    if (!stripeConfigured) {
      return NextResponse.json({
        message: "Demo: Stripe checkout session would be created here. Configure Stripe keys in .env file for production.",
        demo: true,
        explanation: "This endpoint demonstrates how payment processing works. In production, this would create a Stripe checkout session and redirect the user to complete payment.",
        demoData: {
          priceId: priceId || "price_demo",
          amount: amount || 1000,
          description: description || "Tutorial Demo Payment",
          currency: "usd",
          customerEmail: session.user.email
        }
      })
    }

    const { stripe } = await import("@/lib/stripe")

    const checkoutSession = await stripe.checkout.sessions.create({
      mode: "payment",
      payment_method_types: ["card"],
      line_items: priceId ? [
        {
          price: priceId,
          quantity: 1,
        }
      ] : [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: description || "NextStack Pro Payment",
            },
            unit_amount: amount,
          },
          quantity: 1,
        }
      ],
      success_url: `${process.env.NEXTAUTH_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXTAUTH_URL}/payment/cancel`,
      customer_email: session.user.email,
      metadata: {
        userId: session.user.id || session.user.email,
      },
    })

    return NextResponse.json({ url: checkoutSession.url })
  } catch (error) {
    console.error("Stripe checkout error:", error)
    return NextResponse.json({
      message: "Demo: This shows how payment processing works. Configure Stripe settings in your .env file for production.",
      demo: true,
      explanation: "In production, this would handle Stripe checkout session creation and payment processing.",
      error: "Stripe configuration required"
    })
  }
}
