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
rm -rf node_modules package-lock.json
npm install
```

#### Database connection issues
```bash
npx prisma db push --force-reset
npx prisma generate
```

#### Google OAuth "redirect_uri_mismatch"
- Verify the redirect URI in Google Cloud Console exactly matches:
  `http://localhost:3000/api/auth/callback/google`

#### Stripe webhook not receiving events
- Make sure your local server is running on port 3000
- For production, use a tool like ngrok to expose your local server

#### Email not sending
- Verify SMTP credentials are correct
- For Gmail, ensure you're using an app password, not your regular password
- Check spam folder

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

## Next Steps

Once everything is working:
1. Explore the codebase to understand how each feature works
2. Try modifying the UI components
3. Add new features like user profiles or subscription management
4. Deploy to production using Vercel or another platform

Happy coding! 🚀
