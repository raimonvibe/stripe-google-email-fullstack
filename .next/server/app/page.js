(()=>{var a={};a.id=974,a.ids=[974],a.modules={261:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/app-paths")},3295:a=>{"use strict";a.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},4780:(a,b,c)=>{"use strict";c.d(b,{cn:()=>f});var d=c(49384),e=c(82348);function f(...a){return(0,e.QP)((0,d.$)(a))}},5336:(a,b,c)=>{"use strict";c.d(b,{A:()=>d});let d=(0,c(62688).A)("circle-check-big",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]])},6383:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>M});var d=c(60687),e=c(43210),f=c(82136),g=c(44493),h=c(29523),i=c(62688);let j=(0,i.A)("chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);function k(){return(0,d.jsxs)(h.$,{onClick:()=>(0,f.signIn)("google",{callbackUrl:"/"}),variant:"outline",className:"w-full",children:[(0,d.jsx)(j,{className:"mr-2 h-4 w-4"}),"Sign in with Google"]})}let l=(0,i.A)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]),m=(0,i.A)("credit-card",[["rect",{width:"20",height:"14",x:"2",y:"5",rx:"2",key:"ynyp8z"}],["line",{x1:"2",x2:"22",y1:"10",y2:"10",key:"1b3vmo"}]]);function n({priceId:a,amount:b,description:c}){let[f,g]=(0,e.useState)(!1),i=async()=>{g(!0);try{let b=await fetch("/api/stripe/checkout",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({priceId:a})}),c=await b.json();if(c.url)window.location.href=c.url;else throw Error("No checkout URL received")}catch(a){console.error("Checkout error:",a),alert("Failed to start checkout process. Please try again.")}finally{g(!1)}};return(0,d.jsxs)(h.$,{onClick:i,disabled:f,className:"w-full",children:[f?(0,d.jsx)(l,{className:"mr-2 h-4 w-4 animate-spin"}):(0,d.jsx)(m,{className:"mr-2 h-4 w-4"}),f?"Processing...":`Pay ${b} - ${c}`]})}let o=(0,i.A)("sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]),p=(0,i.A)("moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]);var q=c(10218);function r(){let{setTheme:a,theme:b}=(0,q.D)();return(0,d.jsxs)(h.$,{variant:"outline",size:"icon",onClick:()=>a("light"===b?"dark":"light"),className:"relative",children:[(0,d.jsx)(o,{className:"h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"}),(0,d.jsx)(p,{className:"absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"}),(0,d.jsx)("span",{className:"sr-only",children:"Toggle theme"})]})}function s(){return(0,d.jsx)("footer",{className:"footer-raimon mt-16 py-12 bg-gradient-to-br from-orange-100 to-amber-200 dark:from-gray-900 dark:to-orange-900/30 border-t border-orange-200 dark:border-orange-800/50",children:(0,d.jsx)("div",{className:"container mx-auto px-4",children:(0,d.jsxs)("div",{className:"footer-raimon-content text-center",children:[(0,d.jsx)("h3",{className:"footer-raimon-title text-2xl font-bold mb-8 bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-gray-100 bg-clip-text text-transparent",children:"Connect with Raimon"}),(0,d.jsxs)("ul",{className:"social-grid grid grid-cols-4 md:grid-cols-8 gap-6 max-w-2xl mx-auto mb-8",children:[(0,d.jsx)("li",{children:(0,d.jsxs)("a",{href:"https://x.com/raimonvibe/",target:"_blank",rel:"noopener noreferrer",className:"social-link social-twitter group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-blue-400 hover:to-blue-600 dark:hover:from-blue-500 dark:hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl",children:[(0,d.jsx)("i",{className:"fa-brands fa-x-twitter text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"}),(0,d.jsx)("span",{className:"sr-only",children:"X"})]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{href:"https://www.youtube.com/channel/UCDGDNuYb2b2Ets9CYCNVbuA/videos/",target:"_blank",rel:"noopener noreferrer",className:"social-link social-youtube group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-red-500 hover:to-red-600 dark:hover:from-red-500 dark:hover:to-red-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl",children:[(0,d.jsx)("i",{className:"fab fa-youtube text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"}),(0,d.jsx)("span",{className:"sr-only",children:"YouTube"})]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{href:"https://www.tiktok.com/@raimonvibe/",target:"_blank",rel:"noopener noreferrer",className:"social-link social-tiktok group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-pink-500 hover:to-purple-600 dark:hover:from-pink-500 dark:hover:to-purple-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl",children:[(0,d.jsx)("i",{className:"fab fa-tiktok text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"}),(0,d.jsx)("span",{className:"sr-only",children:"TikTok"})]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{href:"https://www.instagram.com/raimonvibe/",target:"_blank",rel:"noopener noreferrer",className:"social-link social-instagram group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-pink-400 hover:to-purple-500 dark:hover:from-pink-500 dark:hover:to-purple-600 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl",children:[(0,d.jsx)("i",{className:"fab fa-instagram text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"}),(0,d.jsx)("span",{className:"sr-only",children:"Instagram"})]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{href:"https://medium.com/@raimonvibe/",target:"_blank",rel:"noopener noreferrer",className:"social-link social-medium group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-green-500 hover:to-green-600 dark:hover:from-green-500 dark:hover:to-green-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl",children:[(0,d.jsx)("i",{className:"fab fa-medium text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"}),(0,d.jsx)("span",{className:"sr-only",children:"Medium"})]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{href:"https://github.com/raimonvibe/",target:"_blank",rel:"noopener noreferrer",className:"social-link social-github group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-gray-700 hover:to-gray-900 dark:hover:from-gray-600 dark:hover:to-gray-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl",children:[(0,d.jsx)("i",{className:"fab fa-github text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"}),(0,d.jsx)("span",{className:"sr-only",children:"GitHub"})]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{href:"https://www.linkedin.com/in/raimonvibe/",target:"_blank",rel:"noopener noreferrer",className:"social-link social-linkedin group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-blue-600 hover:to-blue-700 dark:hover:from-blue-600 dark:hover:to-blue-800 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl",children:[(0,d.jsx)("i",{className:"fab fa-linkedin-in text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"}),(0,d.jsx)("span",{className:"sr-only",children:"LinkedIn"})]})}),(0,d.jsx)("li",{children:(0,d.jsxs)("a",{href:"https://www.facebook.com/profile.php?id=61563450007849",target:"_blank",rel:"noopener noreferrer",className:"social-link social-facebook group flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 dark:from-gray-800 dark:to-gray-700 hover:from-blue-500 hover:to-blue-600 dark:hover:from-blue-500 dark:hover:to-blue-700 transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-xl",children:[(0,d.jsx)("i",{className:"fab fa-facebook-f text-xl text-gray-700 dark:text-gray-300 group-hover:text-white transition-colors duration-300"}),(0,d.jsx)("span",{className:"sr-only",children:"Facebook"})]})})]}),(0,d.jsx)("div",{className:"footer-copyright",children:(0,d.jsxs)("p",{className:"text-gray-600 dark:text-gray-400 text-sm",children:["Built with ❤️ for learning • ",(0,d.jsx)("a",{href:"https://github.com/raimonvibe/stripe-google-email-fullstack",target:"_blank",className:"text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors duration-200 underline",children:"View on GitHub"})]})})]})})})}let t=[{id:"welcome",title:"Welcome to NextStack Pro",description:"Learn fullstack development with Next.js, authentication, payments, and email",icon:"\uD83D\uDE80",content:{overview:"This interactive tutorial teaches you how to build a complete fullstack application using modern technologies like Next.js, NextAuth.js, Stripe, and Prisma. You'll learn industry best practices for building scalable, secure, and maintainable web applications that can handle real-world production workloads.",codeExample:`// Complete Project Structure
├── src/
│   ├── app/                     # Next.js 14 App Router
│   │   ├── api/                 # Backend API routes
│   │   │   ├── auth/
│   │   │   │   └── [...nextauth]/
│   │   │   │       └── route.ts # NextAuth.js API handler
│   │   │   ├── stripe/
│   │   │   │   ├── checkout/
│   │   │   │   │   └── route.ts # Stripe checkout session creation
│   │   │   │   └── webhook/
│   │   │   │       └── route.ts # Stripe webhook handler
│   │   │   ├── send-email/
│   │   │   │   └── route.ts     # Email sending API
│   │   │   └── tutorial/
│   │   │       └── progress/
│   │   │           └── route.ts # Tutorial progress tracking
│   │   ├── auth/
│   │   │   ├── signin/
│   │   │   │   └── page.tsx     # Custom sign-in page
│   │   │   └── error/
│   │   │       └── page.tsx     # Auth error page
│   │   ├── payment/
│   │   │   ├── success/
│   │   │   │   └── page.tsx     # Payment success page
│   │   │   └── cancel/
│   │   │       └── page.tsx     # Payment cancel page
│   │   ├── globals.css          # Global styles
│   │   ├── layout.tsx           # Root layout component
│   │   └── page.tsx             # Main tutorial dashboard
│   ├── components/              # Reusable UI components
│   │   ├── auth/
│   │   │   └── google-signin.tsx # Google OAuth sign-in button
│   │   ├── stripe/
│   │   │   └── checkout-button.tsx # Stripe payment button
│   │   ├── ui/                  # shadcn/ui components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   ├── providers.tsx        # Context providers wrapper
│   │   └── theme-toggle.tsx     # Dark mode toggle
│   └── lib/                     # Utility libraries
│       ├── auth.ts              # NextAuth.js configuration
│       ├── prisma.ts            # Prisma client setup
│       ├── stripe.ts            # Stripe client configuration
│       ├── email.ts             # Email service functions
│       ├── tutorial.ts          # Tutorial step definitions
│       └── utils.ts             # Utility functions
├── prisma/                      # Database schema & migrations
│   ├── schema.prisma            # Database schema definition
│   ├── migrations/              # Database migration files
│   └── seed.ts                  # Database seeding script
├── public/                      # Static assets
│   ├── images/
│   └── favicon.ico
├── .env.example                 # Environment variables template
├── .env.local                   # Local environment variables
├── package.json                 # Dependencies and scripts
├── tailwind.config.js           # Tailwind CSS configuration
├── next.config.js               # Next.js configuration
└── tsconfig.json                # TypeScript configuration`,keyPoints:["Next.js 14 with App Router for modern React development and server-side rendering","TypeScript for type-safe development and better developer experience","Tailwind CSS with shadcn/ui for beautiful, responsive design systems","Prisma ORM for type-safe database operations and schema management","NextAuth.js for secure authentication flows with multiple providers","Stripe for PCI-compliant payment processing and subscription management","Nodemailer for transactional email automation and user notifications","SQLite for development with easy migration to PostgreSQL/MySQL for production"],nextAction:"Start exploring the authentication system and OAuth flows"}},{id:"authentication",title:"Authentication System",description:"Understand Google OAuth flows and session management",icon:"\uD83D\uDD10",content:{overview:"Learn how modern authentication works with OAuth providers like Google, including session management, JWT tokens, and security best practices. This section covers the complete authentication flow from user login to session persistence and security considerations for production applications.",codeExample:`// File: src/lib/auth.ts
// NextAuth.js configuration with security best practices
import { NextAuthOptions } from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import { prisma } from "./prisma"

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code"
        }
      }
    }),
  ],
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
    maxAge: 30 * 24 * 60 * 60, // 30 days
  },
  callbacks: {
    jwt: async ({ token, user, account }) => {
      if (user) {
        token.id = user.id
      }
      return token
    },
    session: async ({ session, token }) => {
      if (session?.user && token.sub) {
        session.user.id = token.sub
      }
      return session
    },
  },
  pages: {
    signIn: "/auth/signin",
    error: "/auth/error",
  },
}

// File: src/app/api/auth/[...nextauth]/route.ts
// NextAuth.js API route handler
import NextAuth from "next-auth"
import { authOptions } from "@/lib/auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }

// File: src/components/auth/google-signin.tsx
// Google OAuth sign-in component
"use client"

import React from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Chrome } from "lucide-react"

export function GoogleSignIn() {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      variant="outline"
      className="w-full"
    >
      <Chrome className="mr-2 h-4 w-4" />
      Sign in with Google
    </Button>
  )
}`,keyPoints:["OAuth 2.0 authorization code flow with PKCE for enhanced security","JWT tokens for stateless session management with configurable expiration","Secure callback handling with CSRF protection and state validation","User data persistence with Prisma adapter for automatic database sync","Client-side session hooks with useSession for reactive authentication state","Custom sign-in pages for branded user experience","Error handling for authentication failures and edge cases","Session refresh and token rotation for long-lived sessions"],nextAction:"Explore payment integration with Stripe and webhook security"}},{id:"payments",title:"Payment Integration",description:"Stripe checkout sessions and webhook handling",icon:"\uD83D\uDCB3",content:{overview:"Discover how to integrate Stripe for secure payment processing, including checkout sessions, webhooks, and payment confirmation flows. Learn about PCI compliance, webhook security, and handling various payment scenarios including failures and refunds.",codeExample:'// File: src/lib/stripe.ts\n// Stripe client configuration\nimport Stripe from "stripe"\n\nexport const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {\n  apiVersion: "2023-10-16",\n  typescript: true,\n})\n\n// File: src/app/api/stripe/checkout/route.ts\n// Creating a secure Stripe checkout session\nimport { NextRequest, NextResponse } from "next/server"\nimport { getServerSession } from "next-auth"\nimport { authOptions } from "@/lib/auth"\nimport { stripe } from "@/lib/stripe"\nimport { prisma } from "@/lib/prisma"\n\nexport async function POST(req: NextRequest) {\n  try {\n    const session = await getServerSession(authOptions)\n    const { priceId, amount, description } = await req.json()\n\n    if (!session?.user?.email) {\n      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })\n    }\n\n    const checkoutSession = await stripe.checkout.sessions.create({\n      mode: "payment",\n      payment_method_types: ["card"],\n      line_items: [{\n        price: priceId,\n        quantity: 1,\n      }],\n      success_url: `${process.env.NEXTAUTH_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}`,\n      cancel_url: `${process.env.NEXTAUTH_URL}/payment/cancel`,\n      customer_email: session.user.email,\n      metadata: {\n        userId: session.user.id,\n        productType: "premium_access",\n      },\n      expires_at: Math.floor(Date.now() / 1000) + (30 * 60), // 30 minutes\n    })\n\n    return NextResponse.json({ url: checkoutSession.url })\n  } catch (error) {\n    console.error("Stripe checkout error:", error)\n    return NextResponse.json({ error: "Payment failed" }, { status: 500 })\n  }\n}\n\n// File: src/app/api/stripe/webhook/route.ts\n// Webhook handler for payment confirmation\nimport { NextRequest, NextResponse } from "next/server"\nimport { stripe } from "@/lib/stripe"\nimport { prisma } from "@/lib/prisma"\nimport Stripe from "stripe"\n\nexport async function POST(req: NextRequest) {\n  const body = await req.text()\n  const sig = req.headers.get("stripe-signature")!\n  \n  let event: Stripe.Event\n  try {\n    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)\n  } catch (err) {\n    console.error("Webhook signature verification failed:", err)\n    return new Response("Webhook signature verification failed", { status: 400 })\n  }\n  \n  if (event.type === "checkout.session.completed") {\n    const session = event.data.object as Stripe.Checkout.Session\n    await handleSuccessfulPayment(session)\n  }\n  \n  return new Response("OK", { status: 200 })\n}\n\nasync function handleSuccessfulPayment(session: Stripe.Checkout.Session) {\n  try {\n    await prisma.payment.create({\n      data: {\n        stripePaymentId: session.id,\n        userId: session.metadata?.userId!,\n        amount: session.amount_total!,\n        currency: session.currency!,\n        status: "COMPLETED",\n        description: session.metadata?.productType || "Premium Access",\n      },\n    })\n    \n    console.log(`Payment completed for session: ${session.id}`)\n  } catch (error) {\n    console.error("Error saving payment:", error)\n  }\n}\n\n// File: src/components/stripe/checkout-button.tsx\n// Stripe payment button component\n"use client"\n\nimport React, { useState } from "react"\nimport { Button } from "@/components/ui/button"\nimport { CreditCard, Loader2 } from "lucide-react"\n\ninterface CheckoutButtonProps {\n  priceId: string\n  amount: string\n  description: string\n}\n\nexport function CheckoutButton({ priceId, amount, description }: CheckoutButtonProps) {\n  const [loading, setLoading] = useState(false)\n\n  const handleCheckout = async () => {\n    setLoading(true)\n    \n    try {\n      const response = await fetch("/api/stripe/checkout", {\n        method: "POST",\n        headers: { "Content-Type": "application/json" },\n        body: JSON.stringify({ priceId }),\n      })\n\n      const data = await response.json()\n      if (data.url) {\n        window.location.href = data.url\n      }\n    } catch (error) {\n      console.error("Checkout error:", error)\n      alert("Payment failed. Please try again.")\n    } finally {\n      setLoading(false)\n    }\n  }\n\n  return (\n    <Button onClick={handleCheckout} disabled={loading} className="w-full">\n      {loading ? (\n        <Loader2 className="mr-2 h-4 w-4 animate-spin" />\n      ) : (\n        <CreditCard className="mr-2 h-4 w-4" />\n      )}\n      {loading ? "Processing..." : `Pay ${amount} - ${description}`}\n    </Button>\n  )\n}',keyPoints:["PCI DSS compliant payment processing with Stripe's secure infrastructure","Checkout sessions with configurable expiration and metadata tracking","Webhook endpoints with signature verification for security","Database integration for payment records and user account updates","Comprehensive error handling for payment failures and edge cases","Customer data protection and GDPR compliance considerations","Testing with Stripe's test mode and webhook testing tools","Handling refunds, disputes, and subscription management"],nextAction:"Learn about email automation and transactional messaging"}},{id:"email",title:"Email System",description:"Automated email notifications with Nodemailer",icon:"\uD83D\uDCE7",content:{overview:"Build automated email systems for user notifications, welcome emails, and transactional messages using SMTP and HTML templates. Learn about email deliverability, template design, and integration with various email service providers for production-ready email automation.",codeExample:`// File: src/lib/email.ts
// Comprehensive email service with error handling
import nodemailer from "nodemailer"

const transporter = nodemailer.createTransporter({
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

    console.log("Email sent successfully:", info.messageId)
    return { success: true, messageId: info.messageId }
  } catch (error) {
    console.error("Email sending failed:", error)
    return { success: false, error: error instanceof Error ? error.message : String(error) }
  }
}

export async function sendWelcomeEmail(userEmail: string, userName: string) {
  const html = \`
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to NextStack Pro</title>
    </head>
    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">
      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #f97316; margin: 0;">Welcome \${userName}!</h1>
        </div>
        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
          <p>Thank you for joining NextStack Pro! You now have access to:</p>
          <ul style="color: #333;">
            <li>🔐 Secure Google OAuth authentication</li>
            <li>💳 Stripe payment integration</li>
            <li>📧 Email automation system</li>
            <li>🗄️ Prisma database management</li>
          </ul>
        </div>
        <div style="text-align: center; margin-top: 30px;">
          <a href="\${process.env.NEXTAUTH_URL}" 
             style="background: #f97316; color: white; padding: 12px 24px; 
                    text-decoration: none; border-radius: 6px; display: inline-block;">
            Get Started
          </a>
        </div>
      </div>
    </body>
    </html>
  \`
  
  try {
    const result = await sendEmail({
      to: userEmail,
      subject: "Welcome to NextStack Pro! 🚀",
      html,
    })
    
    if (result.success) {
      console.log(\`Welcome email sent to \${userEmail}\`)
    }
    
    return result
  } catch (error) {
    console.error("Failed to send welcome email:", error)
    throw new Error("Email delivery failed")
  }
}

// File: src/app/api/send-email/route.ts
// Email sending API endpoint
import { NextRequest, NextResponse } from "next/server"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { sendWelcomeEmail } from "@/lib/email"

export async function POST(req: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    const { type } = await req.json()

    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

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
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}`,keyPoints:["SMTP configuration with multiple provider support (Gmail, SendGrid, Mailgun)","Responsive HTML email templates with inline CSS for maximum compatibility","Transactional emails triggered by user actions and system events","Comprehensive error handling with retry logic and fallback mechanisms","Email service provider integration with rate limiting and queue management","Deliverability optimization with SPF, DKIM, and DMARC configuration","Email analytics and tracking for open rates and click-through rates","Template management system for easy email content updates"],nextAction:"Explore the database schema and data modeling"}},{id:"database",title:"Database Schema",description:"Prisma ORM and SQLite database design",icon:"\uD83D\uDDC4️",content:{overview:"Understand modern database design with Prisma ORM, including relationships, migrations, and type-safe queries. Learn about data modeling best practices, performance optimization, and scaling strategies for production databases.",codeExample:`// File: prisma/schema.prisma
// Complete Prisma schema with relationships and constraints
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}

model Account {
  id                String  @id @default(cuid())
  userId            String
  type              String
  provider          String
  providerAccountId String
  refresh_token     String?
  access_token      String?
  expires_at        Int?
  token_type        String?
  scope             String?
  id_token          String?
  session_state     String?

  user User @relation(fields: [userId], references: [id], onDelete: Cascade)

  @@unique([provider, providerAccountId])
}

model Session {
  id           String   @id @default(cuid())
  sessionToken String   @unique
  userId       String
  expires      DateTime
  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)
}

model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  emailVerified DateTime?
  image         String?
  role          UserRole  @default(USER)
  accounts      Account[]
  sessions      Session[]
  payments      Payment[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model VerificationToken {
  identifier String
  token      String   @unique
  expires    DateTime

  @@unique([identifier, token])
}

model Payment {
  id              String        @id @default(cuid())
  userId          String
  user            User          @relation(fields: [userId], references: [id], onDelete: Cascade)
  stripePaymentId String        @unique
  amount          Int           // Amount in cents
  currency        String        @default("usd")
  status          PaymentStatus @default(PENDING)
  description     String?
  createdAt       DateTime      @default(now())
  updatedAt       DateTime      @updatedAt
}

enum UserRole {
  USER
  ADMIN
  PREMIUM
}

enum PaymentStatus {
  PENDING
  COMPLETED
  FAILED
  REFUNDED
}

// File: src/lib/prisma.ts
// Prisma client setup with connection pooling
import { PrismaClient } from "@prisma/client"

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ??
  new PrismaClient({
    log: ["query"],
  })

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma

// Example of type-safe queries
const userWithPayments = await prisma.user.findUnique({
  where: { email: "user@example.com" },
  include: {
    payments: {
      where: { status: "COMPLETED" },
      orderBy: { createdAt: "desc" },
      take: 10
    }
  }
})

// Database operations examples
export async function createPayment(data: {
  userId: string
  stripePaymentId: string
  amount: number
  currency: string
  status: PaymentStatus
  description?: string
}) {
  return await prisma.payment.create({ data })
}

export async function getUserPayments(userId: string) {
  return await prisma.payment.findMany({
    where: { userId },
    orderBy: { createdAt: "desc" },
  })
}

export async function updatePaymentStatus(
  stripePaymentId: string,
  status: PaymentStatus
) {
  return await prisma.payment.update({
    where: { stripePaymentId },
    data: { status },
  })
}`,keyPoints:["Type-safe database queries with full TypeScript integration and autocompletion","Relational data modeling with foreign keys, cascading deletes, and referential integrity","Automatic migrations with version control and rollback capabilities","Database indexing strategies for query performance optimization","Connection pooling and query optimization for production workloads","Database seeding and testing strategies with isolated test environments","Schema validation and constraint enforcement at the database level","Multi-database support with easy migration between SQLite, PostgreSQL, and MySQL"],nextAction:"Learn about testing strategies and quality assurance"}},{id:"testing",title:"Testing & Quality Assurance",description:"Unit tests, integration tests, and end-to-end testing strategies",icon:"\uD83E\uDDEA",content:{overview:"Learn comprehensive testing strategies for fullstack applications, including unit tests for components and API routes, integration tests for database operations, and end-to-end tests for complete user workflows.",codeExample:`// Unit test for authentication API route
import { POST } from "@/app/api/auth/signin/route"
import { NextRequest } from "next/server"

describe("/api/auth/signin", () => {
  it("should handle valid Google OAuth callback", async () => {
    const request = new NextRequest("http://localhost:3000/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({
        provider: "google",
        code: "valid_auth_code"
      })
    })
    
    const response = await POST(request)
    const data = await response.json()
    
    expect(response.status).toBe(200)
    expect(data.user).toBeDefined()
    expect(data.user.email).toMatch(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)
  })
})

// Integration test for payment processing
import { prisma } from "@/lib/prisma"
import { stripe } from "@/lib/stripe"

describe("Payment Integration", () => {
  beforeEach(async () => {
    await prisma.payment.deleteMany()
  })
  
  it("should create payment record after successful Stripe payment", async () => {
    const mockSession = {
      id: "cs_test_123",
      payment_status: "paid",
      amount_total: 2999,
      customer_email: "test@example.com"
    }
    
    await handleSuccessfulPayment(mockSession)
    
    const payment = await prisma.payment.findFirst({
      where: { stripePaymentId: "cs_test_123" }
    })
    
    expect(payment).toBeTruthy()
    expect(payment?.amount).toBe(2999)
    expect(payment?.status).toBe("COMPLETED")
  })
})`,keyPoints:["Unit testing for React components with Jest and React Testing Library","API route testing with mocked dependencies and database operations","Integration testing for database operations and external service calls","End-to-end testing with Playwright for complete user workflows","Test environment setup with isolated databases and mock services","Continuous integration with automated test runs on pull requests","Code coverage reporting and quality gates for deployment","Performance testing and load testing for production readiness"],nextAction:"Explore deployment strategies and production considerations"}},{id:"deployment",title:"Production Deployment",description:"Deployment strategies, monitoring, and production best practices",icon:"\uD83C\uDF10",content:{overview:"Deploy your fullstack application to production with proper environment configuration, database setup, monitoring, and security considerations. Learn about scaling strategies, performance optimization, and maintaining production applications.",codeExample:'// Production environment configuration\n// vercel.json\n{\n  "framework": "nextjs",\n  "buildCommand": "npm run build",\n  "devCommand": "npm run dev",\n  "installCommand": "npm install",\n  "env": {\n    "DATABASE_URL": "@database-url",\n    "NEXTAUTH_SECRET": "@nextauth-secret",\n    "STRIPE_SECRET_KEY": "@stripe-secret",\n    "EMAIL_HOST": "@email-host"\n  },\n  "functions": {\n    "src/app/api/**/*.ts": {\n      "maxDuration": 30\n    }\n  },\n  "headers": [\n    {\n      "source": "/api/(.*)",\n      "headers": [\n        {\n          "key": "Access-Control-Allow-Origin",\n          "value": "https://yourdomain.com"\n        },\n        {\n          "key": "X-Content-Type-Options",\n          "value": "nosniff"\n        }\n      ]\n    }\n  ]\n}\n\n// Database migration for production\nnpx prisma migrate deploy\nnpx prisma generate\n\n// Health check endpoint\nexport async function GET() {\n  try {\n    await prisma.$queryRaw`SELECT 1`\n    return Response.json({ status: "healthy", timestamp: new Date().toISOString() })\n  } catch (error) {\n    return Response.json({ status: "unhealthy", error: error.message }, { status: 500 })\n  }\n}',keyPoints:["Vercel deployment with optimized build configuration and edge functions","Environment variable management with secure secret storage","Database deployment strategies with connection pooling and read replicas","Domain configuration with custom domains and SSL certificate management","Performance monitoring with Core Web Vitals and real user metrics","Error tracking and logging with Sentry or similar monitoring tools","CI/CD pipeline setup with automated testing and deployment workflows","Security hardening with CSP headers, rate limiting, and vulnerability scanning","Scaling strategies including CDN configuration and caching layers","Backup and disaster recovery procedures for production data"],nextAction:"Congratulations! You've completed the comprehensive NextStack Pro tutorial"}}];function u(){let a={currentStep:0,completedSteps:[],startedAt:new Date().toISOString(),lastUpdated:new Date().toISOString()};return t.map(b=>({...b,completed:a.completedSteps.includes(b.id)}))}let v=(0,i.A)("crown",[["path",{d:"M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z",key:"1vdc57"}],["path",{d:"M5 21h14",key:"11awu3"}]]),w=(0,i.A)("book-open",[["path",{d:"M12 7v14",key:"1akyts"}],["path",{d:"M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",key:"ruj8y"}]]),x=(0,i.A)("target",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"6",key:"1vlfrh"}],["circle",{cx:"12",cy:"12",r:"2",key:"1c9p78"}]]),y=(0,i.A)("star",[["path",{d:"M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z",key:"r04s7s"}]]);var z=c(5336);let A=(0,i.A)("play",[["polygon",{points:"6 3 20 12 6 21 6 3",key:"1oa8hb"}]]),B=(0,i.A)("mail",[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]]),C=(0,i.A)("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]),D=(0,i.A)("chevron-right",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]),E=(0,i.A)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]),F=(0,i.A)("code",[["path",{d:"m16 18 6-6-6-6",key:"eg8j8"}],["path",{d:"m8 6-6 6 6 6",key:"ppft3o"}]]),G=(0,i.A)("rocket",[["path",{d:"M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z",key:"m3kijz"}],["path",{d:"m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z",key:"1fmvmk"}],["path",{d:"M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0",key:"1f8sc4"}],["path",{d:"M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5",key:"qeys4"}]]),H=(0,i.A)("lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]),I=(0,i.A)("database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]),J=(0,i.A)("users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["path",{d:"M16 3.128a4 4 0 0 1 0 7.744",key:"16gr8j"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}]]),K=(0,i.A)("trending-up",[["path",{d:"M16 7h6v6",key:"box55l"}],["path",{d:"m22 7-8.5 8.5-5-5L2 17",key:"1t1m79"}]]),L=(0,i.A)("activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);function M(){let{data:a,status:b}=(0,f.useSession)(),[c,i]=(0,e.useState)(0),[j,l]=(0,e.useState)(u()),[o]=(0,e.useState)({totalUsers:1247,activeToday:89,paymentsProcessed:342,emailsSent:1856}),[p,q]=(0,e.useState)(""),[M,N]=(0,e.useState)(!1),O=async()=>{N(!0),q("");try{let a=await fetch("/api/send-email",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({type:"welcome"})}),b=await a.json();q(b.message||"Email sent successfully!")}catch{q("Failed to send email")}finally{N(!1)}},P=t[c],Q=j.filter(a=>a.completed).length;return"loading"===b?(0,d.jsx)("div",{className:"min-h-screen bg-gradient-to-br from-amber-100 to-orange-300 dark:from-black dark:to-orange-600 flex items-center justify-center",children:(0,d.jsx)("div",{className:"animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"})}):(0,d.jsxs)("div",{className:"min-h-screen bg-gradient-to-br from-amber-100 to-orange-300 dark:from-black dark:to-orange-600",children:[(0,d.jsxs)("div",{className:"container mx-auto px-4 py-8",children:[(0,d.jsxs)("header",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8 space-y-4 sm:space-y-0",children:[(0,d.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,d.jsx)("div",{className:"p-2 bg-gradient-to-r from-orange-500 to-amber-300 dark:from-orange-600 dark:to-black rounded-lg",children:(0,d.jsx)(v,{className:"h-8 w-8 text-white"})}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{className:"text-2xl font-bold bg-gradient-to-r from-orange-600 to-amber-500 dark:from-orange-400 dark:to-gray-100 bg-clip-text text-transparent",children:"NextStack Pro"}),(0,d.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:"Interactive Fullstack Tutorial"})]})]}),(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto",children:[(0,d.jsx)(r,{}),(0,d.jsx)("div",{className:"w-full sm:w-auto",children:(0,d.jsx)(k,{})}),a&&(0,d.jsx)(h.$,{onClick:()=>(0,f.signOut)(),variant:"outline",size:"sm",className:"flex items-center space-x-2 w-full sm:w-auto",children:(0,d.jsx)("span",{children:"Sign Out"})})]})]}),(0,d.jsxs)("div",{className:"space-y-8",children:[(0,d.jsx)(g.Zp,{className:"bg-gradient-to-r from-orange-500 via-amber-400 to-orange-300 dark:from-orange-600 dark:via-black dark:to-orange-800 text-white border-0 shadow-2xl",children:(0,d.jsxs)(g.aR,{className:"text-center pb-8",children:[(0,d.jsx)("div",{className:"mx-auto mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm",children:(0,d.jsx)(w,{className:"h-12 w-12"})}),(0,d.jsxs)(g.ZB,{className:"text-4xl font-bold mb-2",children:[a?`Welcome back, ${a.user?.name?.split(" ")[0]}!`:"Welcome to NextStack Pro!"," \uD83D\uDE80"]}),(0,d.jsx)(g.BT,{className:"text-white/90 text-lg",children:"Learn fullstack development step by step"}),(0,d.jsx)("div",{className:"mt-4",children:(0,d.jsxs)("div",{className:"flex items-center justify-center space-x-4 text-sm",children:[(0,d.jsxs)("div",{className:"flex items-center space-x-2",children:[(0,d.jsx)(x,{className:"h-4 w-4"}),(0,d.jsxs)("span",{children:["Progress: ",Q,"/",t.length," steps"]})]}),(0,d.jsx)("div",{className:"w-32 bg-white/20 rounded-full h-2",children:(0,d.jsx)("div",{className:"bg-white rounded-full h-2 transition-all duration-300",style:{width:`${Q/t.length*100}%`}})})]})})]})}),(0,d.jsx)("div",{className:"flex justify-center space-x-2 mb-6",children:t.map((a,b)=>(0,d.jsx)("button",{onClick:()=>i(b),className:`w-3 h-3 rounded-full transition-all duration-200 ${b===c?"bg-orange-500 scale-125":j[b]?.completed?"bg-green-500":"bg-gray-300 dark:bg-gray-600"}`,title:a.title},a.id))}),(0,d.jsxs)(g.Zp,{className:"shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",children:[(0,d.jsx)(g.aR,{children:(0,d.jsxs)("div",{className:"flex items-center justify-between",children:[(0,d.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,d.jsx)("div",{className:"text-4xl",children:P.icon}),(0,d.jsxs)("div",{children:[(0,d.jsx)(g.ZB,{className:"text-2xl",children:P.title}),(0,d.jsx)(g.BT,{className:"text-lg",children:P.description})]})]}),(0,d.jsxs)("div",{className:"px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm",children:["Step ",c+1," of ",t.length]})]})}),(0,d.jsxs)(g.Wu,{className:"space-y-6",children:[(0,d.jsx)("div",{className:"prose dark:prose-invert max-w-none",children:(0,d.jsx)("p",{className:"text-lg leading-relaxed",children:P.content.overview})}),P.content.codeExample&&(0,d.jsx)("div",{className:"bg-gray-900 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto",children:(0,d.jsx)("pre",{className:"text-green-400 text-sm",children:(0,d.jsx)("code",{children:P.content.codeExample})})}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("h4",{className:"font-semibold text-lg mb-3 flex items-center",children:[(0,d.jsx)(y,{className:"h-5 w-5 mr-2 text-yellow-500"}),"Key Learning Points"]}),(0,d.jsx)("ul",{className:"space-y-2",children:P.content.keyPoints.map((a,b)=>(0,d.jsxs)("li",{className:"flex items-start space-x-2",children:[(0,d.jsx)(z.A,{className:"h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"}),(0,d.jsx)("span",{children:a})]},b))})]}),"payments"===P.id&&(0,d.jsxs)("div",{className:"bg-gradient-to-r from-amber-50 to-orange-100 dark:from-orange-900/20 dark:to-black/20 p-6 rounded-lg",children:[(0,d.jsxs)("h4",{className:"font-semibold text-lg mb-3 flex items-center",children:[(0,d.jsx)(A,{className:"h-5 w-5 mr-2 text-green-600"}),"Interactive Demo: Payment Processing"]}),(0,d.jsx)("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"Try our payment integration demo. This will show you how Stripe checkout works."}),(0,d.jsx)(n,{priceId:"price_demo",amount:"2999",description:"NextStack Pro Tutorial Demo"})]}),"email"===P.id&&(0,d.jsxs)("div",{className:"bg-gradient-to-r from-amber-50 to-orange-100 dark:from-orange-900/20 dark:to-black/20 p-6 rounded-lg",children:[(0,d.jsxs)("h4",{className:"font-semibold text-lg mb-3 flex items-center",children:[(0,d.jsx)(A,{className:"h-5 w-5 mr-2 text-blue-600"}),"Interactive Demo: Email System"]}),(0,d.jsx)("p",{className:"mb-4 text-gray-600 dark:text-gray-300",children:"Test our email automation system. This demonstrates how transactional emails work."}),(0,d.jsxs)("div",{className:"space-y-2",children:[(0,d.jsxs)(h.$,{onClick:O,disabled:M,className:"bg-gradient-to-r from-orange-500 to-amber-300 hover:from-orange-600 hover:to-amber-400 dark:from-orange-600 dark:to-black dark:hover:from-orange-700 dark:hover:to-gray-900",children:[M?(0,d.jsx)("div",{className:"animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"}):(0,d.jsx)(B,{className:"h-4 w-4 mr-2"}),"Send Demo Email"]}),p&&(0,d.jsx)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:p})]})]}),"authentication"===P.id&&a&&(0,d.jsxs)("div",{className:"bg-gradient-to-r from-amber-50 to-orange-100 dark:from-orange-900/20 dark:to-black/20 p-6 rounded-lg",children:[(0,d.jsxs)("h4",{className:"font-semibold text-lg mb-3 flex items-center",children:[(0,d.jsx)(z.A,{className:"h-5 w-5 mr-2 text-green-600"}),"Authentication Success!"]}),(0,d.jsx)("p",{className:"text-gray-600 dark:text-gray-300",children:"Great! You're already authenticated with Google OAuth. You can see your session data and experience the full authentication flow."}),(0,d.jsxs)("div",{className:"mt-3 p-3 bg-white dark:bg-gray-800 rounded border",children:[(0,d.jsxs)("p",{className:"text-sm",children:[(0,d.jsx)("strong",{children:"Name:"})," ",a.user?.name]}),(0,d.jsxs)("p",{className:"text-sm",children:[(0,d.jsx)("strong",{children:"Email:"})," ",a.user?.email]})]})]}),(0,d.jsxs)("div",{className:"flex flex-col sm:flex-row sm:justify-between sm:items-center pt-6 border-t space-y-4 sm:space-y-0",children:[(0,d.jsxs)(h.$,{onClick:()=>{c>0&&i(c-1)},disabled:0===c,variant:"outline",className:"flex items-center justify-center space-x-2 w-full sm:w-auto",children:[(0,d.jsx)(C,{className:"h-4 w-4"}),(0,d.jsx)("span",{children:"Previous"})]}),(0,d.jsx)(h.$,{onClick:()=>(P.id,void l(u())),className:"bg-gradient-to-r from-orange-500 to-amber-300 hover:from-orange-600 hover:to-amber-400 dark:from-orange-600 dark:to-black dark:hover:from-orange-700 dark:hover:to-gray-900 w-full sm:w-auto order-first sm:order-none",disabled:j[c]?.completed,children:j[c]?.completed?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(z.A,{className:"h-4 w-4 mr-2"}),"Completed"]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(x,{className:"h-4 w-4 mr-2"}),"Mark Complete"]})}),(0,d.jsxs)(h.$,{onClick:()=>{c<t.length-1&&i(c+1)},disabled:c===t.length-1,className:"flex items-center justify-center space-x-2 w-full sm:w-auto",children:[(0,d.jsx)("span",{children:"Next"}),(0,d.jsx)(D,{className:"h-4 w-4"})]})]}),P.content.nextAction&&(0,d.jsx)("div",{className:"bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg",children:(0,d.jsxs)("p",{className:"text-orange-800 dark:text-orange-200 flex items-center",children:[(0,d.jsx)(E,{className:"h-4 w-4 mr-2"}),(0,d.jsx)("strong",{children:"Next:"})," ",P.content.nextAction]})})]})]}),(0,d.jsxs)(g.Zp,{className:"shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm",children:[(0,d.jsx)(g.aR,{children:(0,d.jsxs)("div",{className:"flex items-center space-x-3",children:[(0,d.jsx)("div",{className:"p-2 bg-gradient-to-r from-orange-500 to-amber-300 dark:from-orange-600 dark:to-black rounded-lg",children:(0,d.jsx)(F,{className:"h-6 w-6 text-white"})}),(0,d.jsxs)("div",{children:[(0,d.jsx)(g.ZB,{className:"text-xl",children:"Technology Stack"}),(0,d.jsx)(g.BT,{children:"Modern fullstack development tools"})]})]})}),(0,d.jsx)(g.Wu,{children:(0,d.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-4",children:[(0,d.jsxs)("div",{className:"text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg",children:[(0,d.jsx)(G,{className:"h-8 w-8 mx-auto mb-2 text-black dark:text-white"}),(0,d.jsx)("p",{className:"font-semibold",children:"Next.js 14"}),(0,d.jsx)("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"React Framework"})]}),(0,d.jsxs)("div",{className:"text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg",children:[(0,d.jsx)(H,{className:"h-8 w-8 mx-auto mb-2 text-green-600"}),(0,d.jsx)("p",{className:"font-semibold",children:"NextAuth.js"}),(0,d.jsx)("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Authentication"})]}),(0,d.jsxs)("div",{className:"text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg",children:[(0,d.jsx)(m,{className:"h-8 w-8 mx-auto mb-2 text-purple-600"}),(0,d.jsx)("p",{className:"font-semibold",children:"Stripe"}),(0,d.jsx)("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Payments"})]}),(0,d.jsxs)("div",{className:"text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg",children:[(0,d.jsx)(I,{className:"h-8 w-8 mx-auto mb-2 text-blue-600"}),(0,d.jsx)("p",{className:"font-semibold",children:"Prisma"}),(0,d.jsx)("p",{className:"text-xs text-gray-600 dark:text-gray-400",children:"Database ORM"})]})]})})]}),a&&(0,d.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",children:[(0,d.jsx)(g.Zp,{className:"bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow",children:(0,d.jsxs)(g.Wu,{className:"p-6",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-blue-100 text-sm font-medium",children:"Total Users"}),(0,d.jsx)("p",{className:"text-3xl font-bold",children:o.totalUsers.toLocaleString()})]}),(0,d.jsx)(J,{className:"h-8 w-8 text-blue-200"})]}),(0,d.jsxs)("div",{className:"flex items-center mt-2",children:[(0,d.jsx)(K,{className:"h-4 w-4 text-green-300 mr-1"}),(0,d.jsx)("span",{className:"text-green-300 text-sm",children:"+12% from last month"})]})]})}),(0,d.jsx)(g.Zp,{className:"bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow",children:(0,d.jsxs)(g.Wu,{className:"p-6",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-green-100 text-sm font-medium",children:"Active Today"}),(0,d.jsx)("p",{className:"text-3xl font-bold",children:o.activeToday})]}),(0,d.jsx)(L,{className:"h-8 w-8 text-green-200"})]}),(0,d.jsxs)("div",{className:"flex items-center mt-2",children:[(0,d.jsx)(K,{className:"h-4 w-4 text-green-300 mr-1"}),(0,d.jsx)("span",{className:"text-green-300 text-sm",children:"+5% from yesterday"})]})]})}),(0,d.jsx)(g.Zp,{className:"bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow",children:(0,d.jsxs)(g.Wu,{className:"p-6",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-purple-100 text-sm font-medium",children:"Payments"}),(0,d.jsx)("p",{className:"text-3xl font-bold",children:o.paymentsProcessed})]}),(0,d.jsx)(m,{className:"h-8 w-8 text-purple-200"})]}),(0,d.jsxs)("div",{className:"flex items-center mt-2",children:[(0,d.jsx)(K,{className:"h-4 w-4 text-green-300 mr-1"}),(0,d.jsx)("span",{className:"text-green-300 text-sm",children:"+8% from last week"})]})]})}),(0,d.jsx)(g.Zp,{className:"bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow",children:(0,d.jsxs)(g.Wu,{className:"p-6",children:[(0,d.jsxs)("div",{className:"flex items-center justify-between",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("p",{className:"text-orange-100 text-sm font-medium",children:"Emails Sent"}),(0,d.jsx)("p",{className:"text-3xl font-bold",children:o.emailsSent.toLocaleString()})]}),(0,d.jsx)(B,{className:"h-8 w-8 text-orange-200"})]}),(0,d.jsxs)("div",{className:"flex items-center mt-2",children:[(0,d.jsx)(K,{className:"h-4 w-4 text-green-300 mr-1"}),(0,d.jsx)("span",{className:"text-green-300 text-sm",children:"+15% from last week"})]})]})})]})]})]}),(0,d.jsx)(s,{})]})}},10846:a=>{"use strict";a.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},11282:(a,b,c)=>{Promise.resolve().then(c.bind(c,15888))},15888:(a,b,c)=>{"use strict";c.d(b,{Providers:()=>g});var d=c(60687),e=c(82136),f=c(10218);function g({children:a}){return(0,d.jsx)(e.SessionProvider,{children:(0,d.jsx)(f.N,{attribute:"class",defaultTheme:"system",enableSystem:!0,children:a})})}},19121:a=>{"use strict";a.exports=require("next/dist/server/app-render/action-async-storage.external.js")},19231:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,25227,23)),Promise.resolve().then(c.t.bind(c,86346,23)),Promise.resolve().then(c.t.bind(c,27924,23)),Promise.resolve().then(c.t.bind(c,40099,23)),Promise.resolve().then(c.t.bind(c,38243,23)),Promise.resolve().then(c.t.bind(c,28827,23)),Promise.resolve().then(c.t.bind(c,62763,23)),Promise.resolve().then(c.t.bind(c,97173,23)),Promise.resolve().then(c.bind(c,25587))},21204:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>d});let d=(0,c(61369).registerClientReference)(function(){throw Error("Attempted to call the default export of \"/workspaces/stripe-google-email-fullstack/src/app/page.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/workspaces/stripe-google-email-fullstack/src/app/page.tsx","default")},25996:(a,b,c)=>{"use strict";c.r(b),c.d(b,{GlobalError:()=>C.a,__next_app__:()=>I,handler:()=>K,pages:()=>H,routeModule:()=>J,tree:()=>G});var d=c(65239),e=c(48088),f=c(47220),g=c(81289),h=c(26191),i=c(14823),j=c(71998),k=c(92603),l=c(54649),m=c(32781),n=c(82602),o=c(61268),p=c(4853),q=c(261),r=c(5052),s=c(9977),t=c(26713),u=c(43365),v=c(71454),w=c(67778),x=c(46143),y=c(39105),z=c(38171),A=c(86439),B=c(16133),C=c.n(B),D=c(30893),E=c(52836),F={};for(let a in D)0>["default","tree","pages","GlobalError","__next_app__","routeModule","handler"].indexOf(a)&&(F[a]=()=>D[a]);c.d(b,F);let G={children:["",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(c.bind(c,21204)),"/workspaces/stripe-google-email-fullstack/src/app/page.tsx"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,70440))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(c.bind(c,94431)),"/workspaces/stripe-google-email-fullstack/src/app/layout.tsx"],"global-error":[()=>Promise.resolve().then(c.t.bind(c,16133,23)),"next/dist/client/components/builtin/global-error.js"],"not-found":[()=>Promise.resolve().then(c.t.bind(c,80849,23)),"next/dist/client/components/builtin/not-found.js"],forbidden:[()=>Promise.resolve().then(c.t.bind(c,29868,23)),"next/dist/client/components/builtin/forbidden.js"],unauthorized:[()=>Promise.resolve().then(c.t.bind(c,79615,23)),"next/dist/client/components/builtin/unauthorized.js"],metadata:{icon:[async a=>(await Promise.resolve().then(c.bind(c,70440))).default(a)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]}.children,H=["/workspaces/stripe-google-email-fullstack/src/app/page.tsx"],I={require:c,loadChunk:()=>Promise.resolve()},J=new d.AppPageRouteModule({definition:{kind:e.RouteKind.APP_PAGE,page:"/page",pathname:"/",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:G},distDir:".next",projectDir:""});async function K(a,b,c){var d;let B="/page";"/index"===B&&(B="/");let F="false",L=(0,h.getRequestMeta)(a,"postponed"),M=(0,h.getRequestMeta)(a,"minimalMode"),N=await J.prepare(a,b,{srcPage:B,multiZoneDraftMode:F});if(!N)return b.statusCode=400,b.end("Bad Request"),null==c.waitUntil||c.waitUntil.call(c,Promise.resolve()),null;let{buildId:O,query:P,params:Q,parsedUrl:R,pageIsDynamic:S,buildManifest:T,nextFontManifest:U,reactLoadableManifest:V,serverActionsManifest:W,clientReferenceManifest:X,subresourceIntegrityManifest:Y,prerenderManifest:Z,isDraftMode:$,resolvedPathname:_,revalidateOnlyGenerated:aa,routerServerContext:ab,nextConfig:ac}=N,ad=R.pathname||"/",ae=(0,q.normalizeAppPath)(B),{isOnDemandRevalidate:af}=N,ag=Z.dynamicRoutes[ae],ah=Z.routes[_],ai=!!(ag||ah||Z.routes[ae]),aj=a.headers["user-agent"]||"",ak=(0,t.getBotType)(aj),al=(0,o.isHtmlBotRequest)(a),am=(0,h.getRequestMeta)(a,"isPrefetchRSCRequest")??!!a.headers[s.NEXT_ROUTER_PREFETCH_HEADER],an=(0,h.getRequestMeta)(a,"isRSCRequest")??!!a.headers[s.RSC_HEADER],ao=(0,r.getIsPossibleServerAction)(a),ap=(0,l.checkIsAppPPREnabled)(ac.experimental.ppr)&&(null==(d=Z.routes[ae]??Z.dynamicRoutes[ae])?void 0:d.renderingMode)==="PARTIALLY_STATIC",aq=!1,ar=!1,as=ap?L:void 0,at=ap&&an&&!am,au=(0,h.getRequestMeta)(a,"segmentPrefetchRSCRequest"),av=!aj||(0,o.shouldServeStreamingMetadata)(aj,ac.htmlLimitedBots);al&&ap&&(ai=!1,av=!1);let aw=!0===J.isDev||!ai||"string"==typeof L||at,ax=al&&ap,ay=null;$||!ai||aw||ao||as||at||(ay=_);let az=ay;!az&&J.isDev&&(az=_);let aA={...D,tree:G,pages:H,GlobalError:C(),handler:K,routeModule:J,__next_app__:I};W&&X&&(0,n.setReferenceManifestsSingleton)({page:B,clientReferenceManifest:X,serverActionsManifest:W,serverModuleMap:(0,p.createServerModuleMap)({serverActionsManifest:W})});let aB=a.method||"GET",aC=(0,g.getTracer)(),aD=aC.getActiveScopeSpan();try{let d=async(c,d)=>{let e=new k.NodeNextRequest(a),f=new k.NodeNextResponse(b);return J.render(e,f,d).finally(()=>{if(!c)return;c.setAttributes({"http.status_code":b.statusCode,"next.rsc":!1});let d=aC.getRootSpanAttributes();if(!d)return;if(d.get("next.span_type")!==i.BaseServerSpan.handleRequest)return void console.warn(`Unexpected root span type '${d.get("next.span_type")}'. Please report this Next.js issue https://github.com/vercel/next.js`);let e=d.get("next.route");if(e){let a=`${aB} ${e}`;c.setAttributes({"next.route":e,"http.route":e,"next.span_name":a}),c.updateName(a)}else c.updateName(`${aB} ${a.url}`)})},f=async({span:e,postponed:f,fallbackRouteParams:g})=>{let i={query:P,params:Q,page:ae,sharedContext:{buildId:O},serverComponentsHmrCache:(0,h.getRequestMeta)(a,"serverComponentsHmrCache"),fallbackRouteParams:g,renderOpts:{App:()=>null,Document:()=>null,pageConfig:{},ComponentMod:aA,Component:(0,j.T)(aA),params:Q,routeModule:J,page:B,postponed:f,shouldWaitOnAllReady:ax,serveStreamingMetadata:av,supportsDynamicResponse:"string"==typeof f||aw,buildManifest:T,nextFontManifest:U,reactLoadableManifest:V,subresourceIntegrityManifest:Y,serverActionsManifest:W,clientReferenceManifest:X,setIsrStatus:null==ab?void 0:ab.setIsrStatus,dir:J.projectDir,isDraftMode:$,isRevalidate:ai&&!f&&!at,botType:ak,isOnDemandRevalidate:af,isPossibleServerAction:ao,assetPrefix:ac.assetPrefix,nextConfigOutput:ac.output,crossOrigin:ac.crossOrigin,trailingSlash:ac.trailingSlash,previewProps:Z.preview,deploymentId:ac.deploymentId,enableTainting:ac.experimental.taint,htmlLimitedBots:ac.htmlLimitedBots,devtoolSegmentExplorer:ac.experimental.devtoolSegmentExplorer,reactMaxHeadersLength:ac.reactMaxHeadersLength,multiZoneDraftMode:F,incrementalCache:(0,h.getRequestMeta)(a,"incrementalCache"),cacheLifeProfiles:ac.experimental.cacheLife,basePath:ac.basePath,serverActions:ac.experimental.serverActions,...aq?{nextExport:!0,supportsDynamicResponse:!1,isStaticGeneration:!0,isRevalidate:!0,isDebugDynamicAccesses:aq}:{},experimental:{isRoutePPREnabled:ap,expireTime:ac.expireTime,staleTimes:ac.experimental.staleTimes,dynamicIO:!!ac.experimental.dynamicIO,clientSegmentCache:!!ac.experimental.clientSegmentCache,dynamicOnHover:!!ac.experimental.dynamicOnHover,inlineCss:!!ac.experimental.inlineCss,authInterrupts:!!ac.experimental.authInterrupts,clientTraceMetadata:ac.experimental.clientTraceMetadata||[]},waitUntil:c.waitUntil,onClose:a=>{b.on("close",a)},onAfterTaskError:()=>{},onInstrumentationRequestError:(b,c,d)=>J.onRequestError(a,b,d,ab),err:(0,h.getRequestMeta)(a,"invokeError"),dev:J.isDev}},k=await d(e,i),{metadata:l}=k,{cacheControl:m,headers:n={},fetchTags:o}=l;if(o&&(n[x.NEXT_CACHE_TAGS_HEADER]=o),a.fetchMetrics=l.fetchMetrics,ai&&(null==m?void 0:m.revalidate)===0&&!J.isDev&&!ap){let a=l.staticBailoutInfo,b=Object.defineProperty(Error(`Page changed from static to dynamic at runtime ${_}${(null==a?void 0:a.description)?`, reason: ${a.description}`:""}
see more here https://nextjs.org/docs/messages/app-static-to-dynamic-error`),"__NEXT_ERROR_CODE",{value:"E132",enumerable:!1,configurable:!0});if(null==a?void 0:a.stack){let c=a.stack;b.stack=b.message+c.substring(c.indexOf("\n"))}throw b}return{value:{kind:u.CachedRouteKind.APP_PAGE,html:k,headers:n,rscData:l.flightData,postponed:l.postponed,status:l.statusCode,segmentData:l.segmentData},cacheControl:m}},l=async({hasResolved:d,previousCacheEntry:g,isRevalidating:i,span:j})=>{let k,l=!1===J.isDev,n=d||b.writableEnded;if(af&&aa&&!g&&!M)return(null==ab?void 0:ab.render404)?await ab.render404(a,b):(b.statusCode=404,b.end("This page could not be found")),null;if(ag&&(k=(0,v.parseFallbackField)(ag.fallback)),k===v.FallbackMode.PRERENDER&&(0,t.isBot)(aj)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),(null==g?void 0:g.isStale)===-1&&(af=!0),af&&(k!==v.FallbackMode.NOT_FOUND||g)&&(k=v.FallbackMode.BLOCKING_STATIC_RENDER),!M&&k!==v.FallbackMode.BLOCKING_STATIC_RENDER&&az&&!n&&!$&&S&&(l||!ah)){let b;if((l||ag)&&k===v.FallbackMode.NOT_FOUND)throw new A.NoFallbackError;if(ap&&!an){if(b=await J.handleResponse({cacheKey:l?ae:null,req:a,nextConfig:ac,routeKind:e.RouteKind.APP_PAGE,isFallback:!0,prerenderManifest:Z,isRoutePPREnabled:ap,responseGenerator:async()=>f({span:j,postponed:void 0,fallbackRouteParams:l||ar?(0,m.u)(ae):null}),waitUntil:c.waitUntil}),null===b)return null;if(b)return delete b.cacheControl,b}}let o=af||i||!as?void 0:as;if(aq&&void 0!==o)return{cacheControl:{revalidate:1,expire:void 0},value:{kind:u.CachedRouteKind.PAGES,html:w.default.fromStatic(""),pageData:{},headers:void 0,status:void 0}};let p=S&&ap&&((0,h.getRequestMeta)(a,"renderFallbackShell")||ar)?(0,m.u)(ad):null;return f({span:j,postponed:o,fallbackRouteParams:p})},n=async d=>{var g,i,j,k,m;let n,o=await J.handleResponse({cacheKey:ay,responseGenerator:a=>l({span:d,...a}),routeKind:e.RouteKind.APP_PAGE,isOnDemandRevalidate:af,isRoutePPREnabled:ap,req:a,nextConfig:ac,prerenderManifest:Z,waitUntil:c.waitUntil});if($&&b.setHeader("Cache-Control","private, no-cache, no-store, max-age=0, must-revalidate"),J.isDev&&b.setHeader("Cache-Control","no-store, must-revalidate"),!o){if(ay)throw Object.defineProperty(Error("invariant: cache entry required but not generated"),"__NEXT_ERROR_CODE",{value:"E62",enumerable:!1,configurable:!0});return null}if((null==(g=o.value)?void 0:g.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant app-page handler received invalid cache entry ${null==(j=o.value)?void 0:j.kind}`),"__NEXT_ERROR_CODE",{value:"E707",enumerable:!1,configurable:!0});let p="string"==typeof o.value.postponed;ai&&!at&&(!p||am)&&(M||b.setHeader("x-nextjs-cache",af?"REVALIDATED":o.isMiss?"MISS":o.isStale?"STALE":"HIT"),b.setHeader(s.NEXT_IS_PRERENDER_HEADER,"1"));let{value:q}=o;if(as)n={revalidate:0,expire:void 0};else if(M&&an&&!am&&ap)n={revalidate:0,expire:void 0};else if(!J.isDev)if($)n={revalidate:0,expire:void 0};else if(ai){if(o.cacheControl)if("number"==typeof o.cacheControl.revalidate){if(o.cacheControl.revalidate<1)throw Object.defineProperty(Error(`Invalid revalidate configuration provided: ${o.cacheControl.revalidate} < 1`),"__NEXT_ERROR_CODE",{value:"E22",enumerable:!1,configurable:!0});n={revalidate:o.cacheControl.revalidate,expire:(null==(k=o.cacheControl)?void 0:k.expire)??ac.expireTime}}else n={revalidate:x.CACHE_ONE_YEAR,expire:void 0}}else b.getHeader("Cache-Control")||(n={revalidate:0,expire:void 0});if(o.cacheControl=n,"string"==typeof au&&(null==q?void 0:q.kind)===u.CachedRouteKind.APP_PAGE&&q.segmentData){b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"2");let c=null==(m=q.headers)?void 0:m[x.NEXT_CACHE_TAGS_HEADER];M&&ai&&c&&"string"==typeof c&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,c);let d=q.segmentData.get(au);return void 0!==d?(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(d),cacheControl:o.cacheControl}):(b.statusCode=204,(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(""),cacheControl:o.cacheControl}))}let r=(0,h.getRequestMeta)(a,"onCacheEntry");if(r&&await r({...o,value:{...o.value,kind:"PAGE"}},{url:(0,h.getRequestMeta)(a,"initURL")}))return null;if(p&&as)throw Object.defineProperty(Error("Invariant: postponed state should not be present on a resume request"),"__NEXT_ERROR_CODE",{value:"E396",enumerable:!1,configurable:!0});if(q.headers){let a={...q.headers};for(let[c,d]of(M&&ai||delete a[x.NEXT_CACHE_TAGS_HEADER],Object.entries(a)))if(void 0!==d)if(Array.isArray(d))for(let a of d)b.appendHeader(c,a);else"number"==typeof d&&(d=d.toString()),b.appendHeader(c,d)}let t=null==(i=q.headers)?void 0:i[x.NEXT_CACHE_TAGS_HEADER];if(M&&ai&&t&&"string"==typeof t&&b.setHeader(x.NEXT_CACHE_TAGS_HEADER,t),!q.status||an&&ap||(b.statusCode=q.status),!M&&q.status&&E.RedirectStatusCode[q.status]&&an&&(b.statusCode=200),p&&b.setHeader(s.NEXT_DID_POSTPONE_HEADER,"1"),an&&!$){if(void 0===q.rscData){if(q.postponed)throw Object.defineProperty(Error("Invariant: Expected postponed to be undefined"),"__NEXT_ERROR_CODE",{value:"E372",enumerable:!1,configurable:!0});return(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:q.html,cacheControl:at?{revalidate:0,expire:void 0}:o.cacheControl})}return(0,z.sendRenderResult)({req:a,res:b,type:"rsc",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:w.default.fromStatic(q.rscData),cacheControl:o.cacheControl})}let v=q.html;if(!p||M)return(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:o.cacheControl});if(aq)return v.chain(new ReadableStream({start(a){a.enqueue(y.ENCODED_TAGS.CLOSED.BODY_AND_HTML),a.close()}})),(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}});let A=new TransformStream;return v.chain(A.readable),f({span:d,postponed:q.postponed,fallbackRouteParams:null}).then(async a=>{var b,c;if(!a)throw Object.defineProperty(Error("Invariant: expected a result to be returned"),"__NEXT_ERROR_CODE",{value:"E463",enumerable:!1,configurable:!0});if((null==(b=a.value)?void 0:b.kind)!==u.CachedRouteKind.APP_PAGE)throw Object.defineProperty(Error(`Invariant: expected a page response, got ${null==(c=a.value)?void 0:c.kind}`),"__NEXT_ERROR_CODE",{value:"E305",enumerable:!1,configurable:!0});await a.value.html.pipeTo(A.writable)}).catch(a=>{A.writable.abort(a).catch(a=>{console.error("couldn't abort transformer",a)})}),(0,z.sendRenderResult)({req:a,res:b,type:"html",generateEtags:ac.generateEtags,poweredByHeader:ac.poweredByHeader,result:v,cacheControl:{revalidate:0,expire:void 0}})};if(!aD)return await aC.withPropagatedContext(a.headers,()=>aC.trace(i.BaseServerSpan.handleRequest,{spanName:`${aB} ${a.url}`,kind:g.SpanKind.SERVER,attributes:{"http.method":aB,"http.target":a.url}},n));await n(aD)}catch(b){throw aD||await J.onRequestError(a,b,{routerKind:"App Router",routePath:B,routeType:"render",revalidateReason:(0,f.c)({isRevalidate:ai,isOnDemandRevalidate:af})},ab),b}}},26713:a=>{"use strict";a.exports=require("next/dist/shared/lib/router/utils/is-bot")},28354:a=>{"use strict";a.exports=require("util")},29294:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-async-storage.external.js")},29523:(a,b,c)=>{"use strict";c.d(b,{$:()=>j});var d=c(60687),e=c(43210),f=c(81391),g=c(24224),h=c(4780);let i=(0,g.F)("inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),j=e.forwardRef(({className:a,variant:b,size:c,asChild:e=!1,...g},j)=>{let k=e?f.DX:"button";return(0,d.jsx)(k,{className:(0,h.cn)(i({variant:b,size:c,className:a})),ref:j,...g})});j.displayName="Button"},33873:a=>{"use strict";a.exports=require("path")},41025:a=>{"use strict";a.exports=require("next/dist/server/app-render/dynamic-access-async-storage.external.js")},44493:(a,b,c)=>{"use strict";c.d(b,{BT:()=>j,Wu:()=>k,ZB:()=>i,Zp:()=>g,aR:()=>h});var d=c(60687),e=c(43210),f=c(4780);let g=e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("div",{ref:c,className:(0,f.cn)("rounded-lg border bg-card text-card-foreground shadow-sm",a),...b}));g.displayName="Card";let h=e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("div",{ref:c,className:(0,f.cn)("flex flex-col space-y-1.5 p-6",a),...b}));h.displayName="CardHeader";let i=e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("h3",{ref:c,className:(0,f.cn)("text-2xl font-semibold leading-none tracking-tight",a),...b}));i.displayName="CardTitle";let j=e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("p",{ref:c,className:(0,f.cn)("text-sm text-muted-foreground",a),...b}));j.displayName="CardDescription";let k=e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("div",{ref:c,className:(0,f.cn)("p-6 pt-0",a),...b}));k.displayName="CardContent",e.forwardRef(({className:a,...b},c)=>(0,d.jsx)("div",{ref:c,className:(0,f.cn)("flex items-center p-6 pt-0",a),...b})).displayName="CardFooter"},48150:(a,b,c)=>{"use strict";c.d(b,{Providers:()=>d});let d=(0,c(61369).registerClientReference)(function(){throw Error("Attempted to call Providers() from the server but Providers is on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"/workspaces/stripe-google-email-fullstack/src/components/providers.tsx","Providers")},48234:(a,b,c)=>{Promise.resolve().then(c.bind(c,48150))},61135:()=>{},63033:a=>{"use strict";a.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},70440:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>e});var d=c(31658);let e=async a=>[{type:"image/x-icon",sizes:"16x16",url:(0,d.fillMetadataSegment)(".",await a.params,"favicon.ico")+""}]},86439:a=>{"use strict";a.exports=require("next/dist/shared/lib/no-fallback-error.external")},88967:(a,b,c)=>{Promise.resolve().then(c.t.bind(c,16133,23)),Promise.resolve().then(c.t.bind(c,16444,23)),Promise.resolve().then(c.t.bind(c,16042,23)),Promise.resolve().then(c.t.bind(c,49477,23)),Promise.resolve().then(c.t.bind(c,29345,23)),Promise.resolve().then(c.t.bind(c,12089,23)),Promise.resolve().then(c.t.bind(c,46577,23)),Promise.resolve().then(c.t.bind(c,31307,23)),Promise.resolve().then(c.t.bind(c,14817,23))},89976:(a,b,c)=>{Promise.resolve().then(c.bind(c,21204))},94431:(a,b,c)=>{"use strict";c.r(b),c.d(b,{default:()=>k,metadata:()=>j});var d=c(37413),e=c(2202),f=c.n(e),g=c(64988),h=c.n(g);c(61135);var i=c(48150);let j={title:"Fullstack Next.js App",description:"A fullstack app with Google OAuth, Stripe payments, and more"};function k({children:a}){return(0,d.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,d.jsx)("head",{children:(0,d.jsx)("link",{href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css",rel:"stylesheet"})}),(0,d.jsx)("body",{className:`${f().variable} ${h().variable} antialiased min-h-screen bg-gradient-to-br from-amber-100 to-orange-300 dark:from-black dark:to-orange-600`,children:(0,d.jsx)(i.Providers,{children:a})})]})}},99704:(a,b,c)=>{Promise.resolve().then(c.bind(c,6383))}};var b=require("../webpack-runtime.js");b.C(a);var c=b.X(0,[73,882,108],()=>b(b.s=25996));module.exports=c})();