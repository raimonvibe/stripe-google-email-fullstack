export interface TutorialStep {
  id: string
  title: string
  description: string
  icon: string
  completed: boolean
  content: {
    overview: string
    codeExample?: string
    keyPoints: string[]
    nextAction?: string
  }
}

export interface TutorialProgress {
  currentStep: number
  completedSteps: string[]
  startedAt: string
  lastUpdated: string
}

export const TUTORIAL_STEPS: Omit<TutorialStep, 'completed'>[] = [
  {
    id: 'welcome',
    title: 'Welcome to NextStack Pro',
    description: 'Learn fullstack development with Next.js, authentication, payments, and email',
    icon: '🚀',
    content: {
      overview: 'This interactive tutorial teaches you how to build a complete fullstack application using modern technologies like Next.js, NextAuth.js, Stripe, and Prisma. You\'ll learn industry best practices for building scalable, secure, and maintainable web applications that can handle real-world production workloads.',
      codeExample: `// Complete Project Structure\n├── src/\n│   ├── app/                     # Next.js 14 App Router\n│   │   ├── api/                 # Backend API routes\n│   │   │   ├── auth/\n│   │   │   │   └── [...nextauth]/\n│   │   │   │       └── route.ts # NextAuth.js API handler\n│   │   │   ├── stripe/\n│   │   │   │   ├── checkout/\n│   │   │   │   │   └── route.ts # Stripe checkout session creation\n│   │   │   │   └── webhook/\n│   │   │   │       └── route.ts # Stripe webhook handler\n│   │   │   ├── send-email/\n│   │   │   │   └── route.ts     # Email sending API\n│   │   │   └── tutorial/\n│   │   │       └── progress/\n│   │   │           └── route.ts # Tutorial progress tracking\n│   │   ├── auth/\n│   │   │   ├── signin/\n│   │   │   │   └── page.tsx     # Custom sign-in page\n│   │   │   └── error/\n│   │   │       └── page.tsx     # Auth error page\n│   │   ├── payment/\n│   │   │   ├── success/\n│   │   │   │   └── page.tsx     # Payment success page\n│   │   │   └── cancel/\n│   │   │       └── page.tsx     # Payment cancel page\n│   │   ├── globals.css          # Global styles\n│   │   ├── layout.tsx           # Root layout component\n│   │   └── page.tsx             # Main tutorial dashboard\n│   ├── components/              # Reusable UI components\n│   │   ├── auth/\n│   │   │   └── google-signin.tsx # Google OAuth sign-in button\n│   │   ├── stripe/\n│   │   │   └── checkout-button.tsx # Stripe payment button\n│   │   ├── ui/                  # shadcn/ui components\n│   │   │   ├── button.tsx\n│   │   │   ├── card.tsx\n│   │   │   ├── badge.tsx\n│   │   │   └── ...\n│   │   ├── providers.tsx        # Context providers wrapper\n│   │   └── theme-toggle.tsx     # Dark mode toggle\n│   └── lib/                     # Utility libraries\n│       ├── auth.ts              # NextAuth.js configuration\n│       ├── prisma.ts            # Prisma client setup\n│       ├── stripe.ts            # Stripe client configuration\n│       ├── email.ts             # Email service functions\n│       ├── tutorial.ts          # Tutorial step definitions\n│       └── utils.ts             # Utility functions\n├── prisma/                      # Database schema & migrations\n│   ├── schema.prisma            # Database schema definition\n│   ├── migrations/              # Database migration files\n│   └── seed.ts                  # Database seeding script\n├── public/                      # Static assets\n│   ├── images/\n│   └── favicon.ico\n├── .env.example                 # Environment variables template\n├── .env.local                   # Local environment variables\n├── package.json                 # Dependencies and scripts\n├── tailwind.config.js           # Tailwind CSS configuration\n├── next.config.js               # Next.js configuration\n└── tsconfig.json                # TypeScript configuration`,
      keyPoints: [
        'Next.js 14 with App Router for modern React development and server-side rendering',
        'TypeScript for type-safe development and better developer experience',
        'Tailwind CSS with shadcn/ui for beautiful, responsive design systems',
        'Prisma ORM for type-safe database operations and schema management',
        'NextAuth.js for secure authentication flows with multiple providers',
        'Stripe for PCI-compliant payment processing and subscription management',
        'Nodemailer for transactional email automation and user notifications',
        'SQLite for development with easy migration to PostgreSQL/MySQL for production'
      ],
      nextAction: 'Start exploring the authentication system and OAuth flows'
    }
  },
  {
    id: 'authentication',
    title: 'Authentication System',
    description: 'Understand Google OAuth flows and session management',
    icon: '🔐',
    content: {
      overview: 'Learn how modern authentication works with OAuth providers like Google, including session management, JWT tokens, and security best practices. This section covers the complete authentication flow from user login to session persistence and security considerations for production applications.',
      codeExample: `// File: src/lib/auth.ts\n// NextAuth.js configuration with security best practices\nimport { NextAuthOptions } from "next-auth"\nimport GoogleProvider from "next-auth/providers/google"\nimport { PrismaAdapter } from "@next-auth/prisma-adapter"\nimport { prisma } from "./prisma"\n\nexport const authOptions: NextAuthOptions = {\n  providers: [\n    GoogleProvider({\n      clientId: process.env.GOOGLE_CLIENT_ID!,\n      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,\n      authorization: {\n        params: {\n          prompt: "consent",\n          access_type: "offline",\n          response_type: "code"\n        }\n      }\n    }),\n  ],\n  adapter: PrismaAdapter(prisma),\n  session: {\n    strategy: "jwt",\n    maxAge: 30 * 24 * 60 * 60, // 30 days\n  },\n  callbacks: {\n    jwt: async ({ token, user, account }) => {\n      if (user) {\n        token.id = user.id\n      }\n      return token\n    },\n    session: async ({ session, token }) => {\n      if (session?.user && token.sub) {\n        session.user.id = token.sub\n      }\n      return session\n    },\n  },\n  pages: {\n    signIn: "/auth/signin",\n    error: "/auth/error",\n  },\n}\n\n// File: src/app/api/auth/[...nextauth]/route.ts\n// NextAuth.js API route handler\nimport NextAuth from "next-auth"\nimport { authOptions } from "@/lib/auth"\n\nconst handler = NextAuth(authOptions)\n\nexport { handler as GET, handler as POST }\n\n// File: src/components/auth/google-signin.tsx\n// Google OAuth sign-in component\n"use client"\n\nimport React from "react"\nimport { signIn } from "next-auth/react"\nimport { Button } from "@/components/ui/button"\nimport { Chrome } from "lucide-react"\n\nexport function GoogleSignIn() {\n  return (\n    <Button\n      onClick={() => signIn("google", { callbackUrl: "/" })}\n      variant="outline"\n      className="w-full"\n    >\n      <Chrome className="mr-2 h-4 w-4" />\n      Sign in with Google\n    </Button>\n  )\n}`,
      keyPoints: [
        'OAuth 2.0 authorization code flow with PKCE for enhanced security',
        'JWT tokens for stateless session management with configurable expiration',
        'Secure callback handling with CSRF protection and state validation',
        'User data persistence with Prisma adapter for automatic database sync',
        'Client-side session hooks with useSession for reactive authentication state',
        'Custom sign-in pages for branded user experience',
        'Error handling for authentication failures and edge cases',
        'Session refresh and token rotation for long-lived sessions'
      ],
      nextAction: 'Explore payment integration with Stripe and webhook security'
    }
  },
  {
    id: 'payments',
    title: 'Payment Integration',
    description: 'Stripe checkout sessions and webhook handling',
    icon: '💳',
    content: {
      overview: 'Discover how to integrate Stripe for secure payment processing, including checkout sessions, webhooks, and payment confirmation flows. Learn about PCI compliance, webhook security, and handling various payment scenarios including failures and refunds.',
      codeExample: `// File: src/lib/stripe.ts\n// Stripe client configuration\nimport Stripe from "stripe"\n\nexport const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {\n  apiVersion: "2023-10-16",\n  typescript: true,\n})\n\n// File: src/app/api/stripe/checkout/route.ts\n// Creating a secure Stripe checkout session\nimport { NextRequest, NextResponse } from "next/server"\nimport { getServerSession } from "next-auth"\nimport { authOptions } from "@/lib/auth"\nimport { stripe } from "@/lib/stripe"\nimport { prisma } from "@/lib/prisma"\n\nexport async function POST(req: NextRequest) {\n  try {\n    const session = await getServerSession(authOptions)\n    const { priceId, amount, description } = await req.json()\n\n    if (!session?.user?.email) {\n      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })\n    }\n\n    const checkoutSession = await stripe.checkout.sessions.create({\n      mode: "payment",\n      payment_method_types: ["card"],\n      line_items: [{\n        price: priceId,\n        quantity: 1,\n      }],\n      success_url: \`\${process.env.NEXTAUTH_URL}/payment/success?session_id={CHECKOUT_SESSION_ID}\`,\n      cancel_url: \`\${process.env.NEXTAUTH_URL}/payment/cancel\`,\n      customer_email: session.user.email,\n      metadata: {\n        userId: session.user.id,\n        productType: "premium_access",\n      },\n      expires_at: Math.floor(Date.now() / 1000) + (30 * 60), // 30 minutes\n    })\n\n    return NextResponse.json({ url: checkoutSession.url })\n  } catch (error) {\n    console.error("Stripe checkout error:", error)\n    return NextResponse.json({ error: "Payment failed" }, { status: 500 })\n  }\n}\n\n// File: src/app/api/stripe/webhook/route.ts\n// Webhook handler for payment confirmation\nimport { NextRequest, NextResponse } from "next/server"\nimport { stripe } from "@/lib/stripe"\nimport { prisma } from "@/lib/prisma"\nimport Stripe from "stripe"\n\nexport async function POST(req: NextRequest) {\n  const body = await req.text()\n  const sig = req.headers.get("stripe-signature")!\n  \n  let event: Stripe.Event\n  try {\n    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET!)\n  } catch (err) {\n    console.error("Webhook signature verification failed:", err)\n    return new Response("Webhook signature verification failed", { status: 400 })\n  }\n  \n  if (event.type === "checkout.session.completed") {\n    const session = event.data.object as Stripe.Checkout.Session\n    await handleSuccessfulPayment(session)\n  }\n  \n  return new Response("OK", { status: 200 })\n}\n\nasync function handleSuccessfulPayment(session: Stripe.Checkout.Session) {\n  try {\n    await prisma.payment.create({\n      data: {\n        stripePaymentId: session.id,\n        userId: session.metadata?.userId!,\n        amount: session.amount_total!,\n        currency: session.currency!,\n        status: "COMPLETED",\n        description: session.metadata?.productType || "Premium Access",\n      },\n    })\n    \n    console.log(\`Payment completed for session: \${session.id}\`)\n  } catch (error) {\n    console.error("Error saving payment:", error)\n  }\n}\n\n// File: src/components/stripe/checkout-button.tsx\n// Stripe payment button component\n"use client"\n\nimport React, { useState } from "react"\nimport { Button } from "@/components/ui/button"\nimport { CreditCard, Loader2 } from "lucide-react"\n\ninterface CheckoutButtonProps {\n  priceId: string\n  amount: string\n  description: string\n}\n\nexport function CheckoutButton({ priceId, amount, description }: CheckoutButtonProps) {\n  const [loading, setLoading] = useState(false)\n\n  const handleCheckout = async () => {\n    setLoading(true)\n    \n    try {\n      const response = await fetch("/api/stripe/checkout", {\n        method: "POST",\n        headers: { "Content-Type": "application/json" },\n        body: JSON.stringify({ priceId }),\n      })\n\n      const data = await response.json()\n      if (data.url) {\n        window.location.href = data.url\n      }\n    } catch (error) {\n      console.error("Checkout error:", error)\n      alert("Payment failed. Please try again.")\n    } finally {\n      setLoading(false)\n    }\n  }\n\n  return (\n    <Button onClick={handleCheckout} disabled={loading} className="w-full">\n      {loading ? (\n        <Loader2 className="mr-2 h-4 w-4 animate-spin" />\n      ) : (\n        <CreditCard className="mr-2 h-4 w-4" />\n      )}\n      {loading ? "Processing..." : \`Pay \${amount} - \${description}\`}\n    </Button>\n  )\n}`,
      keyPoints: [
        'PCI DSS compliant payment processing with Stripe\'s secure infrastructure',
        'Checkout sessions with configurable expiration and metadata tracking',
        'Webhook endpoints with signature verification for security',
        'Database integration for payment records and user account updates',
        'Comprehensive error handling for payment failures and edge cases',
        'Customer data protection and GDPR compliance considerations',
        'Testing with Stripe\'s test mode and webhook testing tools',
        'Handling refunds, disputes, and subscription management'
      ],
      nextAction: 'Learn about email automation and transactional messaging'
    }
  },
  {
    id: 'email',
    title: 'Email System',
    description: 'Automated email notifications with Nodemailer',
    icon: '📧',
    content: {
      overview: 'Build automated email systems for user notifications, welcome emails, and transactional messages using SMTP and HTML templates. Learn about email deliverability, template design, and integration with various email service providers for production-ready email automation.',
      codeExample: `// File: src/lib/email.ts\n// Comprehensive email service with error handling\nimport nodemailer from "nodemailer"\n\nconst transporter = nodemailer.createTransporter({\n  host: process.env.EMAIL_HOST,\n  port: parseInt(process.env.EMAIL_PORT || "587"),\n  secure: process.env.EMAIL_SECURE === "true",\n  auth: {\n    user: process.env.EMAIL_USER,\n    pass: process.env.EMAIL_PASS,\n  },\n})\n\nexport interface EmailOptions {\n  to: string\n  subject: string\n  html: string\n  text?: string\n}\n\nexport async function sendEmail({ to, subject, html, text }: EmailOptions) {\n  try {\n    const info = await transporter.sendMail({\n      from: process.env.EMAIL_FROM,\n      to,\n      subject,\n      html,\n      text: text || html.replace(/<[^>]*>/g, ""),\n    })\n\n    console.log("Email sent successfully:", info.messageId)\n    return { success: true, messageId: info.messageId }\n  } catch (error) {\n    console.error("Email sending failed:", error)\n    return { success: false, error: error instanceof Error ? error.message : String(error) }\n  }\n}\n\nexport async function sendWelcomeEmail(userEmail: string, userName: string) {\n  const html = \`\n    <!DOCTYPE html>\n    <html>\n    <head>\n      <meta charset="utf-8">\n      <meta name="viewport" content="width=device-width, initial-scale=1.0">\n      <title>Welcome to NextStack Pro</title>\n    </head>\n    <body style="margin: 0; padding: 0; font-family: Arial, sans-serif;">\n      <div style="max-width: 600px; margin: 0 auto; padding: 20px;">\n        <div style="text-align: center; margin-bottom: 30px;">\n          <h1 style="color: #f97316; margin: 0;">Welcome \${userName}!</h1>\n        </div>\n        <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">\n          <p>Thank you for joining NextStack Pro! You now have access to:</p>\n          <ul style="color: #333;">\n            <li>🔐 Secure Google OAuth authentication</li>\n            <li>💳 Stripe payment integration</li>\n            <li>📧 Email automation system</li>\n            <li>🗄️ Prisma database management</li>\n          </ul>\n        </div>\n        <div style="text-align: center; margin-top: 30px;">\n          <a href="\${process.env.NEXTAUTH_URL}" \n             style="background: #f97316; color: white; padding: 12px 24px; \n                    text-decoration: none; border-radius: 6px; display: inline-block;">\n            Get Started\n          </a>\n        </div>\n      </div>\n    </body>\n    </html>\n  \`\n  \n  try {\n    const result = await sendEmail({\n      to: userEmail,\n      subject: "Welcome to NextStack Pro! 🚀",\n      html,\n    })\n    \n    if (result.success) {\n      console.log(\`Welcome email sent to \${userEmail}\`)\n    }\n    \n    return result\n  } catch (error) {\n    console.error("Failed to send welcome email:", error)\n    throw new Error("Email delivery failed")\n  }\n}\n\n// File: src/app/api/send-email/route.ts\n// Email sending API endpoint\nimport { NextRequest, NextResponse } from "next/server"\nimport { getServerSession } from "next-auth"\nimport { authOptions } from "@/lib/auth"\nimport { sendWelcomeEmail } from "@/lib/email"\n\nexport async function POST(req: NextRequest) {\n  try {\n    const session = await getServerSession(authOptions)\n    const { type } = await req.json()\n\n    if (!session?.user?.email) {\n      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })\n    }\n\n    if (type === "welcome") {\n      const result = await sendWelcomeEmail(\n        session.user.email,\n        session.user.name || "User"\n      )\n      \n      if (result.success) {\n        return NextResponse.json({ message: "Welcome email sent successfully" })\n      } else {\n        return NextResponse.json({ error: "Failed to send email" }, { status: 500 })\n      }\n    }\n\n    return NextResponse.json({ error: "Invalid email type" }, { status: 400 })\n  } catch (error) {\n    console.error("Email API error:", error)\n    return NextResponse.json({ error: "Internal server error" }, { status: 500 })\n  }\n}`,
      keyPoints: [
        'SMTP configuration with multiple provider support (Gmail, SendGrid, Mailgun)',
        'Responsive HTML email templates with inline CSS for maximum compatibility',
        'Transactional emails triggered by user actions and system events',
        'Comprehensive error handling with retry logic and fallback mechanisms',
        'Email service provider integration with rate limiting and queue management',
        'Deliverability optimization with SPF, DKIM, and DMARC configuration',
        'Email analytics and tracking for open rates and click-through rates',
        'Template management system for easy email content updates'
      ],
      nextAction: 'Explore the database schema and data modeling'
    }
  },
  {
    id: 'database',
    title: 'Database Schema',
    description: 'Prisma ORM and SQLite database design',
    icon: '🗄️',
    content: {
      overview: 'Understand modern database design with Prisma ORM, including relationships, migrations, and type-safe queries. Learn about data modeling best practices, performance optimization, and scaling strategies for production databases.',
      codeExample: `// File: prisma/schema.prisma\n// Complete Prisma schema with relationships and constraints\ngenerator client {\n  provider = "prisma-client-js"\n}\n\ndatasource db {\n  provider = "sqlite"\n  url      = env("DATABASE_URL")\n}\n\nmodel Account {\n  id                String  @id @default(cuid())\n  userId            String\n  type              String\n  provider          String\n  providerAccountId String\n  refresh_token     String?\n  access_token      String?\n  expires_at        Int?\n  token_type        String?\n  scope             String?\n  id_token          String?\n  session_state     String?\n\n  user User @relation(fields: [userId], references: [id], onDelete: Cascade)\n\n  @@unique([provider, providerAccountId])\n}\n\nmodel Session {\n  id           String   @id @default(cuid())\n  sessionToken String   @unique\n  userId       String\n  expires      DateTime\n  user         User     @relation(fields: [userId], references: [id], onDelete: Cascade)\n}\n\nmodel User {\n  id            String    @id @default(cuid())\n  name          String?\n  email         String    @unique\n  emailVerified DateTime?\n  image         String?\n  role          UserRole  @default(USER)\n  accounts      Account[]\n  sessions      Session[]\n  payments      Payment[]\n  createdAt     DateTime  @default(now())\n  updatedAt     DateTime  @updatedAt\n}\n\nmodel VerificationToken {\n  identifier String\n  token      String   @unique\n  expires    DateTime\n\n  @@unique([identifier, token])\n}\n\nmodel Payment {\n  id              String        @id @default(cuid())\n  userId          String\n  user            User          @relation(fields: [userId], references: [id], onDelete: Cascade)\n  stripePaymentId String        @unique\n  amount          Int           // Amount in cents\n  currency        String        @default("usd")\n  status          PaymentStatus @default(PENDING)\n  description     String?\n  createdAt       DateTime      @default(now())\n  updatedAt       DateTime      @updatedAt\n}\n\nenum UserRole {\n  USER\n  ADMIN\n  PREMIUM\n}\n\nenum PaymentStatus {\n  PENDING\n  COMPLETED\n  FAILED\n  REFUNDED\n}\n\n// File: src/lib/prisma.ts\n// Prisma client setup with connection pooling\nimport { PrismaClient } from "@prisma/client"\n\nconst globalForPrisma = globalThis as unknown as {\n  prisma: PrismaClient | undefined\n}\n\nexport const prisma = globalForPrisma.prisma ??\n  new PrismaClient({\n    log: ["query"],\n  })\n\nif (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma\n\n// Example of type-safe queries\nconst userWithPayments = await prisma.user.findUnique({\n  where: { email: "user@example.com" },\n  include: {\n    payments: {\n      where: { status: "COMPLETED" },\n      orderBy: { createdAt: "desc" },\n      take: 10\n    }\n  }\n})\n\n// Database operations examples\nexport async function createPayment(data: {\n  userId: string\n  stripePaymentId: string\n  amount: number\n  currency: string\n  status: PaymentStatus\n  description?: string\n}) {\n  return await prisma.payment.create({ data })\n}\n\nexport async function getUserPayments(userId: string) {\n  return await prisma.payment.findMany({\n    where: { userId },\n    orderBy: { createdAt: "desc" },\n  })\n}\n\nexport async function updatePaymentStatus(\n  stripePaymentId: string,\n  status: PaymentStatus\n) {\n  return await prisma.payment.update({\n    where: { stripePaymentId },\n    data: { status },\n  })\n}`,
      keyPoints: [
        'Type-safe database queries with full TypeScript integration and autocompletion',
        'Relational data modeling with foreign keys, cascading deletes, and referential integrity',
        'Automatic migrations with version control and rollback capabilities',
        'Database indexing strategies for query performance optimization',
        'Connection pooling and query optimization for production workloads',
        'Database seeding and testing strategies with isolated test environments',
        'Schema validation and constraint enforcement at the database level',
        'Multi-database support with easy migration between SQLite, PostgreSQL, and MySQL'
      ],
      nextAction: 'Learn about testing strategies and quality assurance'
    }
  },
  {
    id: 'testing',
    title: 'Testing & Quality Assurance',
    description: 'Unit tests, integration tests, and end-to-end testing strategies',
    icon: '🧪',
    content: {
      overview: 'Learn comprehensive testing strategies for fullstack applications, including unit tests for components and API routes, integration tests for database operations, and end-to-end tests for complete user workflows.',
      codeExample: `// Unit test for authentication API route\nimport { POST } from "@/app/api/auth/signin/route"\nimport { NextRequest } from "next/server"\n\ndescribe("/api/auth/signin", () => {\n  it("should handle valid Google OAuth callback", async () => {\n    const request = new NextRequest("http://localhost:3000/api/auth/signin", {\n      method: "POST",\n      body: JSON.stringify({\n        provider: "google",\n        code: "valid_auth_code"\n      })\n    })\n    \n    const response = await POST(request)\n    const data = await response.json()\n    \n    expect(response.status).toBe(200)\n    expect(data.user).toBeDefined()\n    expect(data.user.email).toMatch(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)\n  })\n})\n\n// Integration test for payment processing\nimport { prisma } from "@/lib/prisma"\nimport { stripe } from "@/lib/stripe"\n\ndescribe("Payment Integration", () => {\n  beforeEach(async () => {\n    await prisma.payment.deleteMany()\n  })\n  \n  it("should create payment record after successful Stripe payment", async () => {\n    const mockSession = {\n      id: "cs_test_123",\n      payment_status: "paid",\n      amount_total: 2999,\n      customer_email: "test@example.com"\n    }\n    \n    await handleSuccessfulPayment(mockSession)\n    \n    const payment = await prisma.payment.findFirst({\n      where: { stripePaymentId: "cs_test_123" }\n    })\n    \n    expect(payment).toBeTruthy()\n    expect(payment?.amount).toBe(2999)\n    expect(payment?.status).toBe("COMPLETED")\n  })\n})`,
      keyPoints: [
        'Unit testing for React components with Jest and React Testing Library',
        'API route testing with mocked dependencies and database operations',
        'Integration testing for database operations and external service calls',
        'End-to-end testing with Playwright for complete user workflows',
        'Test environment setup with isolated databases and mock services',
        'Continuous integration with automated test runs on pull requests',
        'Code coverage reporting and quality gates for deployment',
        'Performance testing and load testing for production readiness'
      ],
      nextAction: 'Explore deployment strategies and production considerations'
    }
  },
  {
    id: 'deployment',
    title: 'Production Deployment',
    description: 'Deployment strategies, monitoring, and production best practices',
    icon: '🌐',
    content: {
      overview: 'Deploy your fullstack application to production with proper environment configuration, database setup, monitoring, and security considerations. Learn about scaling strategies, performance optimization, and maintaining production applications.',
      codeExample: `// Production environment configuration\n// vercel.json\n{\n  "framework": "nextjs",\n  "buildCommand": "npm run build",\n  "devCommand": "npm run dev",\n  "installCommand": "npm install",\n  "env": {\n    "DATABASE_URL": "@database-url",\n    "NEXTAUTH_SECRET": "@nextauth-secret",\n    "STRIPE_SECRET_KEY": "@stripe-secret",\n    "EMAIL_HOST": "@email-host"\n  },\n  "functions": {\n    "src/app/api/**/*.ts": {\n      "maxDuration": 30\n    }\n  },\n  "headers": [\n    {\n      "source": "/api/(.*)",\n      "headers": [\n        {\n          "key": "Access-Control-Allow-Origin",\n          "value": "https://yourdomain.com"\n        },\n        {\n          "key": "X-Content-Type-Options",\n          "value": "nosniff"\n        }\n      ]\n    }\n  ]\n}\n\n// Database migration for production\nnpx prisma migrate deploy\nnpx prisma generate\n\n// Health check endpoint\nexport async function GET() {\n  try {\n    await prisma.$queryRaw\`SELECT 1\`\n    return Response.json({ status: "healthy", timestamp: new Date().toISOString() })\n  } catch (error) {\n    return Response.json({ status: "unhealthy", error: error.message }, { status: 500 })\n  }\n}`,
      keyPoints: [
        'Vercel deployment with optimized build configuration and edge functions',
        'Environment variable management with secure secret storage',
        'Database deployment strategies with connection pooling and read replicas',
        'Domain configuration with custom domains and SSL certificate management',
        'Performance monitoring with Core Web Vitals and real user metrics',
        'Error tracking and logging with Sentry or similar monitoring tools',
        'CI/CD pipeline setup with automated testing and deployment workflows',
        'Security hardening with CSP headers, rate limiting, and vulnerability scanning',
        'Scaling strategies including CDN configuration and caching layers',
        'Backup and disaster recovery procedures for production data'
      ],
      nextAction: 'Congratulations! You\'ve completed the comprehensive NextStack Pro tutorial'
    }
  }
]

export function getTutorialProgress(): TutorialProgress {
  if (typeof window === 'undefined') {
    return {
      currentStep: 0,
      completedSteps: [],
      startedAt: new Date().toISOString(),
      lastUpdated: new Date().toISOString()
    }
  }

  const stored = localStorage.getItem('nextstack-tutorial-progress')
  if (stored) {
    return JSON.parse(stored)
  }

  const initial: TutorialProgress = {
    currentStep: 0,
    completedSteps: [],
    startedAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  }
  
  localStorage.setItem('nextstack-tutorial-progress', JSON.stringify(initial))
  return initial
}

export function updateTutorialProgress(stepId: string): void {
  if (typeof window === 'undefined') return

  const progress = getTutorialProgress()
  
  if (!progress.completedSteps.includes(stepId)) {
    progress.completedSteps.push(stepId)
  }
  
  const stepIndex = TUTORIAL_STEPS.findIndex(step => step.id === stepId)
  if (stepIndex !== -1 && stepIndex >= progress.currentStep) {
    progress.currentStep = stepIndex + 1
  }
  
  progress.lastUpdated = new Date().toISOString()
  localStorage.setItem('nextstack-tutorial-progress', JSON.stringify(progress))
}

export function resetTutorialProgress(): void {
  if (typeof window === 'undefined') return
  localStorage.removeItem('nextstack-tutorial-progress')
}

export function getTutorialStepsWithProgress(): TutorialStep[] {
  const progress = getTutorialProgress()
  
  return TUTORIAL_STEPS.map(step => ({
    ...step,
    completed: progress.completedSteps.includes(step.id)
  }))
}
