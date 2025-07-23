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
      overview: 'This interactive tutorial teaches you how to build a complete fullstack application using modern technologies like Next.js, NextAuth.js, Stripe, and Prisma.',
      keyPoints: [
        'Next.js 14 with App Router for modern React development',
        'TypeScript for type-safe development',
        'Tailwind CSS for beautiful, responsive design',
        'Prisma ORM for database management',
        'NextAuth.js for authentication flows',
        'Stripe for payment processing',
        'Nodemailer for email automation'
      ],
      nextAction: 'Start exploring the authentication system'
    }
  },
  {
    id: 'authentication',
    title: 'Authentication System',
    description: 'Understand Google OAuth flows and session management',
    icon: '🔐',
    content: {
      overview: 'Learn how modern authentication works with OAuth providers like Google, including session management, JWT tokens, and security best practices.',
      codeExample: `// NextAuth.js configuration
export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    session: async ({ session, token }) => {
      if (session?.user && token.sub) {
        session.user.id = token.sub
      }
      return session
    },
  },
}`,
      keyPoints: [
        'OAuth 2.0 flow with Google as identity provider',
        'JWT tokens for stateless session management',
        'Secure callback handling and CSRF protection',
        'User data persistence with Prisma adapter',
        'Client-side session hooks with useSession'
      ],
      nextAction: 'Explore payment integration with Stripe'
    }
  },
  {
    id: 'payments',
    title: 'Payment Integration',
    description: 'Stripe checkout sessions and webhook handling',
    icon: '💳',
    content: {
      overview: 'Discover how to integrate Stripe for secure payment processing, including checkout sessions, webhooks, and payment confirmation flows.',
      codeExample: `// Creating a Stripe checkout session
const checkoutSession = await stripe.checkout.sessions.create({
  mode: "payment",
  payment_method_types: ["card"],
  line_items: [{
    price: priceId,
    quantity: 1,
  }],
  success_url: \`\${process.env.NEXTAUTH_URL}/payment/success\`,
  cancel_url: \`\${process.env.NEXTAUTH_URL}/payment/cancel\`,
  customer_email: session.user.email,
})`,
      keyPoints: [
        'PCI DSS compliant payment processing',
        'Checkout sessions for secure payment flows',
        'Webhook endpoints for payment confirmation',
        'Database integration for payment records',
        'Error handling and user feedback'
      ],
      nextAction: 'Learn about email automation'
    }
  },
  {
    id: 'email',
    title: 'Email System',
    description: 'Automated email notifications with Nodemailer',
    icon: '📧',
    content: {
      overview: 'Build automated email systems for user notifications, welcome emails, and transactional messages using SMTP and HTML templates.',
      codeExample: `// Sending welcome email
export async function sendWelcomeEmail(userEmail: string, userName: string) {
  const html = \`
    <div style="font-family: Arial, sans-serif;">
      <h1 style="color: #f97316;">Welcome \${userName}!</h1>
      <p>Thank you for joining our platform.</p>
    </div>
  \`
  
  return sendEmail({
    to: userEmail,
    subject: "Welcome to NextStack Pro!",
    html,
  })
}`,
      keyPoints: [
        'SMTP configuration for reliable delivery',
        'HTML email templates with inline styles',
        'Transactional emails for user actions',
        'Error handling and delivery tracking',
        'Email service provider integration'
      ],
      nextAction: 'Explore the database schema'
    }
  },
  {
    id: 'database',
    title: 'Database Schema',
    description: 'Prisma ORM and SQLite database design',
    icon: '🗄️',
    content: {
      overview: 'Understand modern database design with Prisma ORM, including relationships, migrations, and type-safe queries.',
      codeExample: `// Prisma schema example
model User {
  id            String    @id @default(cuid())
  name          String?
  email         String    @unique
  image         String?
  accounts      Account[]
  sessions      Session[]
  payments      Payment[]
  createdAt     DateTime  @default(now())
  updatedAt     DateTime  @updatedAt
}

model Payment {
  id              String   @id @default(cuid())
  userId          String
  user            User     @relation(fields: [userId], references: [id])
  stripePaymentId String   @unique
  amount          Int
  currency        String
  status          String
  createdAt       DateTime @default(now())
}`,
      keyPoints: [
        'Type-safe database queries with Prisma',
        'Relational data modeling',
        'Automatic migrations and schema updates',
        'Connection pooling and optimization',
        'Database seeding and testing strategies'
      ],
      nextAction: 'Learn about deployment strategies'
    }
  },
  {
    id: 'deployment',
    title: 'Deployment Guide',
    description: 'Production deployment with Vercel and environment setup',
    icon: '🌐',
    content: {
      overview: 'Deploy your fullstack application to production with proper environment configuration, database setup, and monitoring.',
      keyPoints: [
        'Vercel deployment for Next.js applications',
        'Environment variable management',
        'Database deployment strategies',
        'Domain configuration and SSL',
        'Performance monitoring and analytics',
        'CI/CD pipeline setup'
      ],
      nextAction: 'Congratulations! You\'ve completed the tutorial'
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
