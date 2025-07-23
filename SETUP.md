# 🛠️ Detailed Setup Guide

This guide will walk you through setting up the NextStack Pro tutorial application step by step.

## Prerequisites

Before you begin, make sure you have:

- **Node.js 18+** installed ([Download here](https://nodejs.org/))
- **Git** installed ([Download here](https://git-scm.com/))
- A **Google account** for OAuth setup
- A **Stripe account** for payment processing
- An **email account** for SMTP (Gmail recommended)

## Step 1: Project Setup

### 1.1 Clone the Repository
```bash
git clone https://github.com/raimonvibe/stripe-google-email-fullstack.git
cd stripe-google-email-fullstack
```

### 1.2 Install Dependencies
```bash
npm install
```

### 1.3 Copy Environment Variables
```bash
cp .env.example .env.local
```

## Step 2: Database Setup

### 2.1 Generate Prisma Client
```bash
npx prisma generate
```

### 2.2 Create Database
```bash
npx prisma db push
```

### 2.3 (Optional) View Database
```bash
npx prisma studio
```
This opens a web interface at `http://localhost:5555` to view your database.

## Step 3: Google OAuth Configuration

### 3.1 Create Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter project name: "NextStack Pro Tutorial"
4. Click "Create"

### 3.2 Enable Google+ API
1. In the sidebar, go to "APIs & Services" → "Library"
2. Search for "Google+ API"
3. Click on it and press "Enable"

### 3.3 Create OAuth Credentials
1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth 2.0 Client IDs"
3. If prompted, configure the OAuth consent screen:
   - Choose "External" user type
   - Fill in app name: "NextStack Pro Tutorial"
   - Add your email as developer contact
   - Save and continue through all steps
4. For Application type, select "Web application"
5. Add authorized redirect URIs:
   ```
   http://localhost:3000/api/auth/callback/google
   ```
6. Click "Create"
7. Copy the Client ID and Client Secret

### 3.4 Update Environment Variables
Open `.env.local` and update:
```env
GOOGLE_CLIENT_ID="your-actual-client-id.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="your-actual-client-secret"
```

## Step 4: Stripe Configuration

### 4.1 Create Stripe Account
1. Go to [Stripe](https://stripe.com) and sign up
2. Complete account verification if required

### 4.2 Get API Keys
1. In Stripe Dashboard, go to "Developers" → "API keys"
2. Copy the "Secret key" (starts with `sk_test_`)
3. Copy the "Publishable key" (starts with `pk_test_`)

### 4.3 Set Up Webhook
1. Go to "Developers" → "Webhooks"
2. Click "Add endpoint"
3. Enter endpoint URL: `http://localhost:3000/api/stripe/webhook`
4. Select events to listen for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
5. Click "Add endpoint"
6. Copy the webhook signing secret (starts with `whsec_`)

### 4.4 Update Environment Variables
Open `.env.local` and update:
```env
STRIPE_SECRET_KEY="sk_test_your-actual-secret-key"
STRIPE_WEBHOOK_SECRET="whsec_your-actual-webhook-secret"
```

## Step 5: Email Configuration

### 5.1 Gmail Setup (Recommended)
1. Enable 2-factor authentication on your Google account
2. Go to Google Account settings → Security
3. Under "2-Step Verification", click "App passwords"
4. Generate an app password for "Mail"
5. Copy the 16-character password

### 5.2 Alternative Email Providers
For other providers, you'll need SMTP settings:
- **SendGrid**: Use API key as password
- **Mailgun**: Use domain and API key
- **Outlook**: Use regular credentials with specific SMTP settings

### 5.3 Update Environment Variables
For Gmail, update `.env.local`:
```env
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_SECURE="true"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-16-character-app-password"
EMAIL_FROM="your-email@gmail.com"
```

## Step 6: NextAuth Configuration

### 6.1 Generate Secret
Generate a secure secret for JWT signing:
```bash
openssl rand -base64 32
```

### 6.2 Update Environment Variables
Open `.env.local` and update:
```env
NEXTAUTH_SECRET="your-generated-secret"
NEXTAUTH_URL="http://localhost:3000"
```

## Step 7: Test the Application

### 7.1 Start Development Server
```bash
npm run dev
```

### 7.2 Open Application
Visit [http://localhost:3000](http://localhost:3000)

### 7.3 Test Authentication
1. Click "Sign in with Google"
2. Complete the OAuth flow
3. Verify you're redirected back to the dashboard

### 7.4 Test Payments
1. Click "Unlock Premium Features"
2. Use test card: `4242 4242 4242 4242`
3. Use any future expiry date and CVC
4. Complete the payment
5. Verify redirect to success page

### 7.5 Test Email
1. Click "Send Welcome" button
2. Check your email inbox
3. Verify the welcome email was received

## Troubleshooting

### Common Issues

#### "Module not found" errors
```bash
# Clear cache and reinstall dependencies
rm -rf node_modules package-lock.json .next
npm install
npm run build
```

#### Database connection issues
```bash
# Reset database and regenerate client
npx prisma db push --force-reset
npx prisma generate
npx prisma studio  # Verify database structure
```

#### Google OAuth "redirect_uri_mismatch"
- Verify the redirect URI in Google Cloud Console exactly matches:
  `http://localhost:3000/api/auth/callback/google`
- For production, add your production domain:
  `https://yourdomain.com/api/auth/callback/google`
- Ensure OAuth consent screen is properly configured
- Check that Google+ API is enabled in your project

#### Stripe webhook not receiving events
- Make sure your local server is running on port 3000
- For local testing, use Stripe CLI: `stripe listen --forward-to localhost:3000/api/stripe/webhook`
- Verify webhook endpoint URL in Stripe Dashboard
- Check webhook signing secret matches your environment variable
- For production, ensure webhook endpoint is publicly accessible

#### Email not sending
- Verify SMTP credentials are correct in `.env.local`
- For Gmail, ensure you're using an app password, not your regular password
- Check spam folder for test emails
- Verify EMAIL_HOST and EMAIL_PORT settings for your provider
- Test SMTP connection: `telnet smtp.gmail.com 587`

#### NextAuth.js session issues
- Verify NEXTAUTH_SECRET is set and secure (use `openssl rand -base64 32`)
- Check NEXTAUTH_URL matches your current domain
- Clear browser cookies and localStorage
- Verify database schema includes NextAuth tables

#### Build and deployment errors
- Check TypeScript errors: `npm run type-check`
- Verify all environment variables are set in production
- Ensure database is accessible from production environment
- Check build logs for specific error messages

### Advanced Troubleshooting

#### Performance Issues
- Use Next.js built-in performance monitoring
- Check database query performance with Prisma query logs
- Monitor API response times and optimize slow endpoints
- Use browser dev tools to identify client-side bottlenecks

#### Security Concerns
- Regularly update dependencies: `npm audit fix`
- Verify HTTPS is enabled in production
- Check CSP headers and security configurations
- Monitor for suspicious authentication attempts

#### Database Migration Issues
- Always backup production data before migrations
- Test migrations in staging environment first
- Use `npx prisma migrate diff` to preview changes
- Keep migration files in version control

### Environment Variables Checklist

Make sure all these are set in `.env.local`:
- [ ] `DATABASE_URL`
- [ ] `NEXTAUTH_URL`
- [ ] `NEXTAUTH_SECRET`
- [ ] `GOOGLE_CLIENT_ID`
- [ ] `GOOGLE_CLIENT_SECRET`
- [ ] `STRIPE_SECRET_KEY`
- [ ] `STRIPE_WEBHOOK_SECRET`
- [ ] `EMAIL_HOST`
- [ ] `EMAIL_PORT`
- [ ] `EMAIL_SECURE`
- [ ] `EMAIL_USER`
- [ ] `EMAIL_PASS`
- [ ] `EMAIL_FROM`

### Getting Help

If you're still having issues:
1. Check the browser console for JavaScript errors
2. Check the terminal for server errors
3. Verify all environment variables are set correctly
4. Ensure all third-party services (Google, Stripe) are configured properly

## Advanced Configuration

### Production Database Setup

For production, consider upgrading from SQLite to PostgreSQL:

```bash
# Install PostgreSQL adapter
npm install @prisma/adapter-pg pg
npm install -D @types/pg

# Update schema.prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}

# Run migration
npx prisma migrate dev --name init
```

### Security Hardening

#### Environment Variables Security
```bash
# Use strong secrets
NEXTAUTH_SECRET=$(openssl rand -base64 32)

# Restrict CORS origins
ALLOWED_ORIGINS="https://yourdomain.com,https://www.yourdomain.com"

# Enable security headers
ENABLE_CSP=true
```

#### Rate Limiting Setup
```typescript
// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Implement rate limiting logic
  const ip = request.ip ?? '127.0.0.1'
  // Add rate limiting implementation
}
```

### Performance Optimization

#### Database Optimization
```typescript
// Enable query logging
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
})

// Use connection pooling
DATABASE_URL="postgresql://user:pass@host:5432/db?connection_limit=20&pool_timeout=20"
```

#### Caching Strategy
```typescript
// API route caching
export async function GET() {
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300'
    }
  })
}
```

### Monitoring and Analytics

#### Error Tracking Setup
```bash
npm install @sentry/nextjs

# sentry.client.config.js
import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
})
```

#### Performance Monitoring
```typescript
// lib/analytics.ts
export function trackEvent(eventName: string, properties?: Record<string, any>) {
  if (typeof window !== 'undefined') {
    // Implement analytics tracking
    gtag('event', eventName, properties)
  }
}
```

## Testing Setup

### Unit Testing Configuration
```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
npm install -D jest-environment-jsdom

# jest.config.js
const nextJest = require('next/jest')

const createJestConfig = nextJest({
  dir: './',
})

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapping: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  testEnvironment: 'jest-environment-jsdom',
}

module.exports = createJestConfig(customJestConfig)
```

### End-to-End Testing
```bash
npm install -D @playwright/test

# playwright.config.ts
import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  use: {
    baseURL: 'http://localhost:3000',
  },
  webServer: {
    command: 'npm run dev',
    port: 3000,
  },
})
```

## Next Steps

Once everything is working:

### Beginner Next Steps
1. Explore the codebase to understand how each feature works
2. Try modifying the UI components and styling
3. Add simple features like user profile editing
4. Experiment with different email templates

### Intermediate Next Steps
1. Implement user roles and permissions system
2. Add subscription management with Stripe
3. Create admin dashboard for user management
4. Implement real-time features with WebSockets

### Advanced Next Steps
1. Set up comprehensive monitoring and alerting
2. Implement advanced caching strategies
3. Add internationalization (i18n) support
4. Create mobile app with React Native
5. Implement microservices architecture
6. Add advanced analytics and reporting

### Production Deployment Checklist
- [ ] Environment variables configured
- [ ] Database migrations applied
- [ ] SSL certificates installed
- [ ] Domain DNS configured
- [ ] Monitoring and alerting set up
- [ ] Backup strategy implemented
- [ ] Security headers configured
- [ ] Performance optimization applied
- [ ] Error tracking enabled
- [ ] Load testing completed

Happy coding! 🚀
