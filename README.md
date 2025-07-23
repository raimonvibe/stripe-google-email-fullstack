# 🚀 NextStack Pro - Complete Fullstack Tutorial

A comprehensive tutorial application demonstrating modern fullstack development with Next.js, featuring Google OAuth authentication, Stripe payments, email automation, and database management.

## 🌐 Live Demo
**[🚀 Visit Stripe/Google/Email Full-stack tutorial](https://stripe-google-email-fullstack.vercel.app/)**

![ Stripe/Google/Email Full-stack tutorial](./stripe-google-email.png)

## 🎯 What You'll Learn

This tutorial teaches you to build a production-ready fullstack application with:

- **🔐 Authentication**: Google OAuth with NextAuth.js
- **💳 Payments**: Stripe integration with webhooks
- **📧 Email System**: Automated emails with Nodemailer
- **🗄️ Database**: Prisma ORM with SQLite
- **🎨 Modern UI**: Tailwind CSS with shadcn/ui components
- **⚡ Performance**: Next.js App Router with TypeScript

## 🏗️ Architecture Overview

```
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── api/               # API Routes
│   │   │   ├── auth/          # NextAuth.js endpoints
│   │   │   ├── stripe/        # Payment processing
│   │   │   └── send-email/    # Email automation
│   │   ├── payment/           # Payment success/cancel pages
│   │   ├── layout.tsx         # Root layout with providers
│   │   └── page.tsx           # Main dashboard
│   ├── components/            # Reusable UI components
│   │   ├── auth/             # Authentication components
│   │   ├── stripe/           # Payment components
│   │   └── ui/               # shadcn/ui components
│   └── lib/                  # Utility libraries
│       ├── auth.ts           # NextAuth configuration
│       ├── email.ts          # Email service
│       └── prisma.ts         # Database client
├── prisma/
│   └── schema.prisma         # Database schema
└── package.json              # Dependencies and scripts
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Google Cloud Console account
- Stripe account
- Email service (Gmail, SendGrid, etc.)

### 1. Clone and Install
```bash
git clone https://github.com/raimonvibe/stripe-google-email-fullstack.git
cd stripe-google-email-fullstack
npm install
```

### 2. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Database
DATABASE_URL="file:./dev.db"

# NextAuth.js
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (Get from Google Cloud Console)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe (Get from Stripe Dashboard)
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="whsec_your-webhook-secret"

# Email Configuration
EMAIL_HOST="smtp.gmail.com"
EMAIL_PORT="587"
EMAIL_SECURE="true"
EMAIL_USER="your-email@gmail.com"
EMAIL_PASS="your-app-password"
EMAIL_FROM="your-email@gmail.com"
```

### 3. Database Setup
```bash
npx prisma generate
npx prisma db push
```

### 4. Run Development Server
```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to see your application!

## 📚 Tutorial Sections

### Section 1: Authentication with Google OAuth
Learn how to implement secure authentication using NextAuth.js and Google OAuth with production-ready security practices.

**Key Files:**
- `src/lib/auth.ts` - NextAuth configuration with security callbacks
- `src/components/auth/google-signin.tsx` - Sign-in component
- `src/app/api/auth/[...nextauth]/route.ts` - Authentication API routes

**What You'll Learn:**
- Setting up Google OAuth in Google Cloud Console with proper scopes
- Configuring NextAuth.js with Prisma adapter and JWT strategies
- Managing user sessions, token refresh, and security considerations
- Protecting API routes and pages with middleware
- Implementing custom sign-in pages and error handling
- Session persistence and cross-device authentication

**Advanced Topics:**
- Multi-provider authentication (Google, GitHub, etc.)
- Role-based access control (RBAC)
- Session security and token rotation
- OAuth security best practices and PKCE

### Section 2: Payment Processing with Stripe
Implement secure payment processing with Stripe Checkout, webhooks, and comprehensive error handling.

**Key Files:**
- `src/app/api/stripe/checkout/route.ts` - Checkout session creation
- `src/app/api/stripe/webhook/route.ts` - Webhook handling with signature verification
- `src/lib/stripe.ts` - Stripe client configuration

**What You'll Learn:**
- Creating Stripe Checkout sessions with metadata and expiration
- Handling payment webhooks securely with signature verification
- Storing payment records in database with proper relationships
- Comprehensive error handling and user feedback
- PCI compliance considerations and security best practices
- Testing payments with Stripe's test mode

**Advanced Topics:**
- Subscription management and recurring billing
- Handling refunds, disputes, and failed payments
- Multi-currency support and international payments
- Payment analytics and reporting

### Section 3: Email Automation System
Build a comprehensive email system for user notifications, transactional emails, and marketing automation.

**Key Files:**
- `src/lib/email.ts` - Email service with multiple provider support
- `src/app/api/send-email/route.ts` - Email API with queue management
- `src/components/email/` - Email template components

**What You'll Learn:**
- Configuring SMTP with multiple providers (Gmail, SendGrid, Mailgun)
- Creating responsive HTML email templates with inline CSS
- Sending welcome, confirmation, and transactional emails
- Email deliverability optimization and best practices
- Error handling, retry logic, and queue management
- Email analytics and tracking

**Advanced Topics:**
- Email template management system
- A/B testing for email campaigns
- Email automation workflows
- Unsubscribe management and compliance

### Section 4: Database Design with Prisma
Learn modern database design, optimization, and management with Prisma ORM.

**Key Files:**
- `prisma/schema.prisma` - Complete database schema with relationships
- `src/lib/prisma.ts` - Database client with connection pooling
- `prisma/migrations/` - Database migration files

**What You'll Learn:**
- Designing normalized database schemas with proper relationships
- Type-safe database queries with Prisma Client
- Database migrations, seeding, and version control
- Query optimization and performance monitoring
- Connection pooling and production database configuration
- Data validation and constraint enforcement

**Advanced Topics:**
- Database indexing strategies
- Read replicas and scaling
- Database backup and recovery
- Multi-database support

### Section 5: Modern UI Development
Build beautiful, accessible, and responsive interfaces with Tailwind CSS and shadcn/ui.

**Key Files:**
- `src/app/page.tsx` - Interactive tutorial dashboard
- `src/components/ui/` - Reusable UI component library
- `src/components/theme-toggle.tsx` - Dark mode implementation

**What You'll Learn:**
- Component-driven development with TypeScript
- Responsive design patterns and mobile-first approach
- Dark mode implementation with system preference detection
- Accessibility best practices and ARIA compliance
- Animation and micro-interactions
- Design system implementation

**Advanced Topics:**
- Component testing with React Testing Library
- Storybook for component documentation
- Performance optimization for large component trees
- Internationalization (i18n) support

### Section 6: Testing & Quality Assurance
Implement comprehensive testing strategies for reliable, maintainable applications.

**Key Files:**
- `__tests__/` - Unit and integration test suites
- `e2e/` - End-to-end test scenarios
- `jest.config.js` - Testing configuration

**What You'll Learn:**
- Unit testing for React components and utility functions
- Integration testing for API routes and database operations
- End-to-end testing with Playwright for complete user workflows
- Test environment setup and data isolation
- Mocking external services and dependencies
- Code coverage reporting and quality gates

**Advanced Topics:**
- Performance testing and load testing
- Visual regression testing
- Continuous integration with automated testing
- Test-driven development (TDD) practices

### Section 7: Production Deployment
Deploy and maintain production applications with monitoring, security, and scaling considerations.

**Key Files:**
- `vercel.json` - Deployment configuration
- `middleware.ts` - Security and rate limiting
- `next.config.js` - Production optimizations

**What You'll Learn:**
- Vercel deployment with environment configuration
- Database deployment and migration strategies
- Security hardening with CSP headers and rate limiting
- Performance monitoring and optimization
- Error tracking and logging setup
- Backup and disaster recovery procedures

**Advanced Topics:**
- Multi-environment deployment (staging, production)
- Blue-green deployments and rollback strategies
- CDN configuration and edge caching
- Scaling strategies and load balancing

## 🔧 Configuration Guides

### Google OAuth Setup
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing
3. Enable Google+ API
4. Create OAuth 2.0 credentials
5. Add authorized redirect URIs: `http://localhost:3000/api/auth/callback/google`

### Stripe Setup
1. Create account at [Stripe](https://stripe.com)
2. Get API keys from Dashboard
3. Set up webhook endpoint: `http://localhost:3000/api/stripe/webhook`
4. Configure webhook events: `checkout.session.completed`, `payment_intent.succeeded`

### Email Setup (Gmail)
1. Enable 2-factor authentication
2. Generate app-specific password
3. Use app password in EMAIL_PASS environment variable

## 🧪 Testing Your Application

### Authentication Flow
1. Click "Sign in with Google"
2. Complete OAuth flow
3. Verify user data in dashboard

### Payment Flow
1. Click "Unlock Premium Features"
2. Complete test payment (use `4242 4242 4242 4242`)
3. Verify payment success page

### Email System
1. Click "Send Welcome" button
2. Check email inbox for welcome message
3. Verify email delivery logs

## 🚀 Deployment

### Vercel Deployment
```bash
npm run build
npx vercel --prod
```

### Environment Variables for Production
Update your production environment variables:
- Change NEXTAUTH_URL to your domain
- Use production Stripe keys
- Configure production email service

## 🔧 Advanced Features & Best Practices

### Security Best Practices
- **Environment Variables**: Secure management of API keys and secrets
- **CSRF Protection**: Built-in protection against cross-site request forgery
- **Rate Limiting**: API endpoint protection against abuse
- **Input Validation**: Comprehensive data validation and sanitization
- **Security Headers**: CSP, HSTS, and other security headers configuration

### Performance Optimization
- **Database Indexing**: Optimized queries with proper indexing strategies
- **Caching**: Multi-layer caching with Redis and CDN integration
- **Code Splitting**: Automatic code splitting with Next.js
- **Image Optimization**: Next.js Image component with WebP support
- **Bundle Analysis**: Tools for analyzing and optimizing bundle size

### Monitoring & Analytics
- **Error Tracking**: Sentry integration for production error monitoring
- **Performance Monitoring**: Core Web Vitals and real user metrics
- **Database Monitoring**: Query performance and connection pool monitoring
- **User Analytics**: Privacy-compliant user behavior tracking
- **Uptime Monitoring**: Health checks and alerting systems

### Scalability Considerations
- **Database Scaling**: Read replicas and connection pooling
- **API Rate Limiting**: Protecting against traffic spikes
- **CDN Integration**: Global content delivery optimization
- **Microservices**: Strategies for breaking down monolithic applications
- **Load Balancing**: Distributing traffic across multiple instances

## 🧪 Testing Strategy

### Testing Pyramid
1. **Unit Tests**: Component and function-level testing
2. **Integration Tests**: API routes and database operations
3. **End-to-End Tests**: Complete user workflow testing
4. **Performance Tests**: Load testing and stress testing

### Testing Tools
- **Jest**: Unit testing framework with snapshot testing
- **React Testing Library**: Component testing with user-centric approach
- **Playwright**: Cross-browser end-to-end testing
- **MSW**: API mocking for reliable testing
- **Lighthouse CI**: Automated performance testing

## 📖 Additional Resources

### Official Documentation
- [Next.js Documentation](https://nextjs.org/docs) - Complete Next.js guide
- [NextAuth.js Guide](https://next-auth.js.org/) - Authentication documentation
- [Stripe Documentation](https://stripe.com/docs) - Payment processing guide
- [Prisma Documentation](https://www.prisma.io/docs) - Database ORM documentation
- [Tailwind CSS](https://tailwindcss.com/docs) - Utility-first CSS framework

### Advanced Learning Resources
- [React Patterns](https://reactpatterns.com/) - Advanced React patterns and practices
- [TypeScript Handbook](https://www.typescriptlang.org/docs/) - Complete TypeScript guide
- [Web.dev](https://web.dev/) - Modern web development best practices
- [MDN Web Docs](https://developer.mozilla.org/) - Comprehensive web technology reference

### Community & Support
- [Next.js GitHub](https://github.com/vercel/next.js) - Source code and issues
- [NextAuth.js Discussions](https://github.com/nextauthjs/next-auth/discussions) - Community support
- [Prisma Community](https://www.prisma.io/community) - Database ORM community
- [Stripe Developer Community](https://stripe.com/docs/community) - Payment integration support

### Tools & Extensions
- [Prisma Studio](https://www.prisma.io/studio) - Visual database editor
- [Stripe CLI](https://stripe.com/docs/stripe-cli) - Command-line tool for Stripe
- [Vercel CLI](https://vercel.com/cli) - Deployment and development tools
- [Next.js DevTools](https://nextjs.org/docs/advanced-features/debugging) - Development debugging tools

## 🤝 Contributing

This is an educational project. Feel free to:
- Report issues
- Suggest improvements
- Add new features
- Share your learning experience

## 📄 License

MIT License - feel free to use this code for learning and building your own projects!
