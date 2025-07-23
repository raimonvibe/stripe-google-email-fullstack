# Production Deployment Guide

This guide covers deploying your NextStack Pro application to production with proper security, performance, and monitoring considerations.

## 🚀 Deployment Platforms

### Vercel (Recommended)

Vercel provides the best experience for Next.js applications with zero-config deployments.

#### Step 1: Prepare for Deployment

1. **Build and Test Locally**
```bash
npm run build
npm start
```

2. **Environment Variables**
Create production environment variables in Vercel dashboard:

```bash
# Production Database
DATABASE_URL="postgresql://user:pass@host:5432/db"

# NextAuth Configuration
NEXTAUTH_URL="https://yourdomain.com"
NEXTAUTH_SECRET="your-production-secret"

# Google OAuth (Production)
GOOGLE_CLIENT_ID="your-production-client-id"
GOOGLE_CLIENT_SECRET="your-production-client-secret"

# Stripe (Live Keys)
STRIPE_SECRET_KEY="sk_live_your-live-secret-key"
STRIPE_WEBHOOK_SECRET="whsec_your-production-webhook-secret"

# Email (Production SMTP)
EMAIL_HOST="smtp.yourdomain.com"
EMAIL_PORT="587"
EMAIL_SECURE="false"
EMAIL_USER="noreply@yourdomain.com"
EMAIL_PASS="your-production-email-password"
EMAIL_FROM="noreply@yourdomain.com"
```

#### Step 2: Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod

# Or connect GitHub repository for automatic deployments
```

#### Step 3: Configure Custom Domain

1. Add your domain in Vercel dashboard
2. Update DNS records as instructed
3. SSL certificates are automatically provisioned

### Alternative Platforms

#### Railway

```bash
# Install Railway CLI
npm install -g @railway/cli

# Login and deploy
railway login
railway init
railway up
```

#### DigitalOcean App Platform

1. Connect your GitHub repository
2. Configure environment variables
3. Deploy with automatic builds

## 🗄️ Production Database Setup

### PostgreSQL on Supabase

1. **Create Project**
   - Go to [Supabase](https://supabase.com)
   - Create new project
   - Note the connection string

2. **Configure Database**
```bash
# Update schema for PostgreSQL
npx prisma db push

# Generate client
npx prisma generate

# Run migrations
npx prisma migrate deploy
```

3. **Connection Pooling**
```bash
# Use connection pooling for production
DATABASE_URL="postgresql://user:pass@host:6543/db?pgbouncer=true"
```

### PostgreSQL on PlanetScale

1. **Create Database**
   - Go to [PlanetScale](https://planetscale.com)
   - Create new database
   - Create production branch

2. **Configure Connection**
```bash
# PlanetScale connection string
DATABASE_URL="mysql://user:pass@host/db?sslaccept=strict"
```

## 🔐 Security Configuration

### Environment Variables Security

```bash
# Use strong secrets (32+ characters)
NEXTAUTH_SECRET=$(openssl rand -base64 32)

# Restrict CORS origins
ALLOWED_ORIGINS="https://yourdomain.com,https://www.yourdomain.com"

# Enable security headers
ENABLE_CSP="true"
ENABLE_HSTS="true"
```

### Security Headers

Create `next.config.js`:

```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
          {
            key: 'Content-Security-Policy',
            value: "default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline'; style-src 'self' 'unsafe-inline';",
          },
        ],
      },
    ]
  },
}

module.exports = nextConfig
```

### Rate Limiting

Create `middleware.ts`:

```typescript
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const rateLimitMap = new Map()

export function middleware(request: NextRequest) {
  const ip = request.ip ?? '127.0.0.1'
  const limit = 100 // requests per hour
  const windowMs = 60 * 60 * 1000 // 1 hour

  if (!rateLimitMap.has(ip)) {
    rateLimitMap.set(ip, {
      count: 0,
      lastReset: Date.now(),
    })
  }

  const ipData = rateLimitMap.get(ip)

  if (Date.now() - ipData.lastReset > windowMs) {
    ipData.count = 0
    ipData.lastReset = Date.now()
  }

  if (ipData.count >= limit) {
    return NextResponse.json(
      { error: 'Too many requests' },
      { status: 429 }
    )
  }

  ipData.count += 1

  return NextResponse.next()
}

export const config = {
  matcher: '/api/:path*',
}
```

## 📊 Monitoring and Analytics

### Error Tracking with Sentry

1. **Install Sentry**
```bash
npm install @sentry/nextjs
```

2. **Configure Sentry**
```javascript
// sentry.client.config.js
import * as Sentry from "@sentry/nextjs"

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  tracesSampleRate: 1.0,
  debug: false,
  replaysOnErrorSampleRate: 1.0,
  replaysSessionSampleRate: 0.1,
})
```

3. **Add to Environment Variables**
```bash
SENTRY_DSN="your-sentry-dsn"
```

### Performance Monitoring

1. **Vercel Analytics**
```bash
npm install @vercel/analytics
```

2. **Add to Layout**
```typescript
import { Analytics } from '@vercel/analytics/react'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
```

### Database Monitoring

```typescript
// lib/prisma.ts - Add query logging
export const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'production' 
    ? ['error'] 
    : ['query', 'info', 'warn', 'error'],
})
```

## 🔧 Performance Optimization

### Image Optimization

```typescript
// next.config.js
const nextConfig = {
  images: {
    domains: ['lh3.googleusercontent.com'], // Google profile images
    formats: ['image/webp', 'image/avif'],
  },
}
```

### Caching Strategy

```typescript
// API route caching
export async function GET() {
  const data = await fetchData()
  
  return NextResponse.json(data, {
    headers: {
      'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
    },
  })
}
```

### Bundle Analysis

```bash
# Analyze bundle size
npm install -D @next/bundle-analyzer

# Add to package.json
"analyze": "ANALYZE=true next build"

# Run analysis
npm run analyze
```

## 🚨 Health Checks and Monitoring

### Health Check Endpoint

Create `src/app/api/health/route.ts`:

```typescript
import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    // Check database connection
    await prisma.$queryRaw`SELECT 1`
    
    // Check external services
    const checks = {
      database: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    }
    
    return NextResponse.json(checks)
  } catch (error) {
    return NextResponse.json(
      { 
        status: 'unhealthy', 
        error: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    )
  }
}
```

### Uptime Monitoring

Set up monitoring with services like:
- **UptimeRobot** - Free uptime monitoring
- **Pingdom** - Advanced monitoring features
- **StatusPage** - Public status page

## 🔄 CI/CD Pipeline

### GitHub Actions

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Production

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run tests
        run: npm test
      
      - name: Build application
        run: npm run build
      
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
          vercel-args: '--prod'
```

## 📋 Production Checklist

### Pre-Deployment

- [ ] All environment variables configured
- [ ] Database migrations applied
- [ ] SSL certificates configured
- [ ] Domain DNS configured
- [ ] Error tracking set up
- [ ] Performance monitoring enabled
- [ ] Security headers configured
- [ ] Rate limiting implemented
- [ ] Health checks working
- [ ] Backup strategy implemented

### Post-Deployment

- [ ] Verify all features work in production
- [ ] Test authentication flow
- [ ] Test payment processing
- [ ] Test email functionality
- [ ] Monitor error rates
- [ ] Check performance metrics
- [ ] Verify security headers
- [ ] Test from different devices/browsers

### Ongoing Maintenance

- [ ] Monitor application performance
- [ ] Review error logs regularly
- [ ] Update dependencies monthly
- [ ] Backup database regularly
- [ ] Monitor security vulnerabilities
- [ ] Review and rotate secrets quarterly

## 🆘 Troubleshooting Production Issues

### Common Production Issues

1. **Environment Variables Not Set**
   - Check Vercel dashboard environment variables
   - Ensure all required variables are present
   - Verify variable names match exactly

2. **Database Connection Issues**
   - Check connection string format
   - Verify database server is accessible
   - Check connection limits and pooling

3. **Authentication Problems**
   - Update OAuth redirect URIs for production domain
   - Verify NEXTAUTH_URL matches your domain
   - Check NEXTAUTH_SECRET is set

4. **Payment Processing Errors**
   - Switch to live Stripe keys
   - Update webhook endpoints for production
   - Verify webhook signatures

### Debugging Tools

```bash
# View Vercel logs
vercel logs

# Check build logs
vercel inspect [deployment-url]

# Monitor real-time logs
vercel logs --follow
```

## 📈 Scaling Considerations

### Database Scaling

- **Read Replicas** - Distribute read queries
- **Connection Pooling** - Manage database connections
- **Query Optimization** - Index frequently queried fields
- **Caching** - Implement Redis for session storage

### Application Scaling

- **Edge Functions** - Use Vercel Edge Runtime for better performance
- **CDN** - Serve static assets from global CDN
- **Image Optimization** - Use Next.js Image component
- **Code Splitting** - Implement dynamic imports

### Monitoring at Scale

- **APM Tools** - Application Performance Monitoring
- **Log Aggregation** - Centralized logging
- **Alerting** - Set up alerts for critical metrics
- **Dashboards** - Create monitoring dashboards

This deployment guide ensures your NextStack Pro application is production-ready with proper security, monitoring, and performance optimizations.
