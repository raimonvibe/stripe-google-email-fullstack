# Environment Setup Guide

This comprehensive guide walks you through setting up all the required services and environment variables for the NextStack Pro tutorial application.

## 📋 Prerequisites

Before starting, ensure you have:

- Node.js 18+ installed
- Git installed
- A Google account
- A Stripe account
- An email provider (Gmail recommended for development)

## 🔧 Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Database
DATABASE_URL="file:./dev.db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="whsec_your-webhook-secret"

# Email Configuration
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
EMAIL_FROM="your-email@gmail.com"
```

## 🔐 Google OAuth Setup

### Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click "Select a project" → "New Project"
3. Enter project name: "NextStack Pro Tutorial"
4. Click "Create"

### Step 2: Enable Google+ API

1. In the Google Cloud Console, go to "APIs & Services" → "Library"
2. Search for "Google+ API"
3. Click on it and press "Enable"

### Step 3: Configure OAuth Consent Screen

1. Go to "APIs & Services" → "OAuth consent screen"
2. Choose "External" user type
3. Fill in the required information:
   - App name: "NextStack Pro Tutorial"
   - User support email: Your email
   - Developer contact information: Your email
4. Add scopes:
   - `../auth/userinfo.email`
   - `../auth/userinfo.profile`
5. Add test users (your email address)
6. Save and continue

### Step 4: Create OAuth Credentials

1. Go to "APIs & Services" → "Credentials"
2. Click "Create Credentials" → "OAuth 2.0 Client IDs"
3. Choose "Web application"
4. Name: "NextStack Pro Web Client"
5. Add Authorized JavaScript origins:
   - `http://localhost:3000`
6. Add Authorized redirect URIs:
   - `http://localhost:3000/api/auth/callback/google`
7. Click "Create"
8. Copy the Client ID and Client Secret to your `.env.local` file

### Step 5: Verify Setup

```bash
# Test the OAuth configuration
GOOGLE_CLIENT_ID=your_client_id
GOOGLE_CLIENT_SECRET=your_client_secret
```

## 💳 Stripe Setup

### Step 1: Create Stripe Account

1. Go to [Stripe](https://stripe.com) and sign up
2. Complete account verification
3. Switch to "Test mode" in the dashboard

### Step 2: Get API Keys

1. In Stripe Dashboard, go to "Developers" → "API keys"
2. Copy the "Secret key" (starts with `sk_test_`)
3. Add it to your `.env.local` file as `STRIPE_SECRET_KEY`

### Step 3: Set Up Webhook Endpoint

1. Go to "Developers" → "Webhooks"
2. Click "Add endpoint"
3. Endpoint URL: `http://localhost:3000/api/stripe/webhook`
4. Select events to listen for:
   - `checkout.session.completed`
   - `payment_intent.succeeded`
   - `payment_intent.payment_failed`
5. Click "Add endpoint"
6. Copy the "Signing secret" (starts with `whsec_`)
7. Add it to your `.env.local` file as `STRIPE_WEBHOOK_SECRET`

### Step 4: Test Webhook Locally

Install Stripe CLI for local webhook testing:

```bash
# Install Stripe CLI
npm install -g stripe-cli

# Login to Stripe
stripe login

# Forward webhooks to local server
stripe listen --forward-to localhost:3000/api/stripe/webhook
```

### Step 5: Create Test Products (Optional)

1. Go to "Products" in Stripe Dashboard
2. Click "Add product"
3. Name: "Premium Access"
4. Price: $29.99 (or any amount)
5. Copy the Price ID for testing

## 📧 Email Configuration

### Option 1: Gmail Setup (Recommended for Development)

1. Enable 2-Factor Authentication on your Google account
2. Go to Google Account settings → Security
3. Under "2-Step Verification", click "App passwords"
4. Generate an app password for "Mail"
5. Use this app password in your `.env.local` file

```bash
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-16-character-app-password"
EMAIL_FROM="your-email@gmail.com"
```

### Option 2: SendGrid Setup

1. Create account at [SendGrid](https://sendgrid.com)
2. Create an API key
3. Configure SMTP settings:

```bash
EMAIL_HOST="smtp.sendgrid.net"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="apikey"
EMAIL_PASS="your-sendgrid-api-key"
EMAIL_FROM="your-verified-sender@domain.com"
```

### Option 3: Mailgun Setup

1. Create account at [Mailgun](https://mailgun.com)
2. Add and verify your domain
3. Get SMTP credentials:

```bash
EMAIL_HOST="smtp.mailgun.org"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="your-mailgun-username"
EMAIL_PASS="your-mailgun-password"
EMAIL_FROM="noreply@your-domain.com"
```

## 🗄️ Database Setup

### Development (SQLite)

The project uses SQLite by default for development:

```bash
# Initialize database
npx prisma db push

# Generate Prisma client
npx prisma generate

# View database (optional)
npx prisma studio
```

### Production (PostgreSQL)

For production, upgrade to PostgreSQL:

1. Create a PostgreSQL database (recommended providers):
   - [Supabase](https://supabase.com) (Free tier available)
   - [PlanetScale](https://planetscale.com) (Free tier available)
   - [Railway](https://railway.app) (Free tier available)

2. Update your production environment variables:

```bash
DATABASE_URL="postgresql://username:password@host:port/database?sslmode=require"
```

3. Update `prisma/schema.prisma`:

```prisma
datasource db {
  provider = "postgresql"
  url      = env("DATABASE_URL")
}
```

4. Run migrations:

```bash
npx prisma migrate deploy
npx prisma generate
```

## 🔑 NextAuth Secret Generation

Generate a secure secret for NextAuth.js:

```bash
# Generate a secure random secret
openssl rand -base64 32

# Or use Node.js
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

Add this to your `.env.local` file as `NEXTAUTH_SECRET`.

## ✅ Verification Steps

### 1. Test Database Connection

```bash
# Check if database is accessible
npx prisma studio

# Run a simple query
npx prisma db seed
```

### 2. Test Google OAuth

1. Start your development server: `npm run dev`
2. Navigate to `http://localhost:3000`
3. Click "Sign in with Google"
4. Complete the OAuth flow
5. Verify you're redirected back to the app

### 3. Test Stripe Integration

1. Use test card number: `4242 4242 4242 4242`
2. Use any future expiry date
3. Use any 3-digit CVC
4. Complete the payment flow
5. Check Stripe Dashboard for the test payment

### 4. Test Email Functionality

1. Ensure email credentials are correct
2. Send a test email through the app
3. Check your inbox (and spam folder)
4. Verify email delivery logs

## 🚨 Common Issues and Solutions

### Google OAuth Issues

**Error: "redirect_uri_mismatch"**
- Ensure redirect URI exactly matches: `http://localhost:3000/api/auth/callback/google`
- Check for trailing slashes or typos
- Verify the URI is added to Google Cloud Console

**Error: "access_denied"**
- Check OAuth consent screen configuration
- Ensure your email is added as a test user
- Verify required scopes are configured

### Stripe Issues

**Error: "No such webhook endpoint"**
- Verify webhook URL in Stripe Dashboard
- Ensure webhook secret matches environment variable
- Check that webhook events are properly configured

**Error: "Invalid API key"**
- Ensure you're using the correct test/live API key
- Check for extra spaces or characters in the key
- Verify the key starts with `sk_test_` for test mode

### Email Issues

**Error: "Authentication failed"**
- For Gmail, ensure 2FA is enabled and app password is used
- Check EMAIL_USER and EMAIL_PASS are correct
- Verify EMAIL_HOST and EMAIL_PORT settings

**Error: "Connection timeout"**
- Check firewall settings
- Verify SMTP server settings
- Try different EMAIL_PORT (587, 465, 25)

### Database Issues

**Error: "Database connection failed"**
- Check DATABASE_URL format
- Ensure database server is running
- Verify network connectivity

**Error: "Migration failed"**
- Backup your data before migrations
- Check for schema conflicts
- Use `npx prisma migrate reset` for development

## 📝 Environment Variables Checklist

Copy this checklist and verify each variable is properly set:

```bash
# Database Configuration
□ DATABASE_URL - Database connection string
□ NEXTAUTH_URL - Your app URL (http://localhost:3000 for dev)
□ NEXTAUTH_SECRET - Secure random string (32+ characters)

# Google OAuth Configuration
□ GOOGLE_CLIENT_ID - From Google Cloud Console
□ GOOGLE_CLIENT_SECRET - From Google Cloud Console

# Stripe Configuration
□ STRIPE_SECRET_KEY - From Stripe Dashboard (starts with sk_test_)
□ STRIPE_WEBHOOK_SECRET - From Stripe webhook endpoint (starts with whsec_)

# Email Configuration
□ EMAIL_HOST - SMTP server hostname
□ EMAIL_PORT - SMTP server port (usually 587)
□ EMAIL_SECURE - "true" for port 465, "false" for others
□ EMAIL_USER - SMTP username (your email)
□ EMAIL_PASS - SMTP password (app password for Gmail)
□ EMAIL_FROM - Sender email address
```

## 🎯 Quick Start Commands

Once all environment variables are set:

```bash
# Install dependencies
npm install

# Set up database
npx prisma db push
npx prisma generate

# Start development server
npm run dev

# Open in browser
open http://localhost:3000
```

## 🔧 Development Tools

### Useful Commands

```bash
# Database management
npx prisma studio          # Visual database editor
npx prisma db seed         # Seed database with test data
npx prisma migrate reset   # Reset database (development only)

# Stripe testing
stripe listen --forward-to localhost:3000/api/stripe/webhook

# Email testing
npm run test:email         # Send test email (if configured)

# Build and type checking
npm run build              # Build for production
npm run type-check         # Check TypeScript errors
npm run lint               # Run ESLint
```

### Browser Extensions (Recommended)

- **React Developer Tools** - Debug React components
- **Prisma Studio** - Database management
- **Stripe CLI** - Webhook testing
- **JSON Viewer** - Format API responses

## 📚 Next Steps

After completing the setup:

1. **Explore the Tutorial** - Follow the interactive tutorial steps
2. **Customize the UI** - Modify components and styling
3. **Add Features** - Implement additional functionality
4. **Deploy to Production** - Use Vercel or similar platform
5. **Monitor and Scale** - Set up analytics and monitoring

## 🆘 Getting Help

If you encounter issues:

1. Check the troubleshooting section in `SETUP.md`
2. Review the architecture documentation in `ARCHITECTURE.md`
3. Check the GitHub issues for common problems
4. Join the community Discord for support

Remember to never commit your `.env.local` file to version control!
