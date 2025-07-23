# Testing Guide

This comprehensive testing guide covers unit testing, integration testing, and end-to-end testing strategies for the NextStack Pro application.

## 🧪 Testing Strategy

### Testing Pyramid

```
    /\
   /  \
  / E2E \     ← Few, high-value tests
 /______\
/        \
| Integration |  ← Some tests for critical paths
|____________|
|            |
|    Unit     |  ← Many, fast tests
|____________|
```

### Testing Tools

- **Jest** - Unit testing framework
- **React Testing Library** - Component testing
- **Playwright** - End-to-end testing
- **MSW** - API mocking
- **Prisma Test Environment** - Database testing

## 🔧 Test Setup

### Install Testing Dependencies

```bash
npm install -D jest @testing-library/react @testing-library/jest-dom
npm install -D jest-environment-jsdom @testing-library/user-event
npm install -D @playwright/test
npm install -D msw
```

### Jest Configuration

Create `jest.config.js`:

```javascript
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
  collectCoverageFrom: [
    'src/**/*.{js,jsx,ts,tsx}',
    '!src/**/*.d.ts',
    '!src/app/layout.tsx',
    '!src/app/globals.css',
  ],
  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: 80,
    },
  },
}

module.exports = createJestConfig(customJestConfig)
```

### Jest Setup File

Create `jest.setup.js`:

```javascript
import '@testing-library/jest-dom'
import { server } from './src/mocks/server'

// Mock Next.js router
jest.mock('next/navigation', () => ({
  useRouter() {
    return {
      push: jest.fn(),
      replace: jest.fn(),
      prefetch: jest.fn(),
    }
  },
  useSearchParams() {
    return new URLSearchParams()
  },
  usePathname() {
    return '/'
  },
}))

// Mock NextAuth
jest.mock('next-auth/react', () => ({
  useSession: jest.fn(() => ({
    data: null,
    status: 'unauthenticated',
  })),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

// Establish API mocking before all tests
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished
afterAll(() => server.close())
```

## 🧩 Unit Testing

### Testing React Components

Create `src/components/__tests__/GoogleSignIn.test.tsx`:

```typescript
import { render, screen, fireEvent } from '@testing-library/react'
import { signIn } from 'next-auth/react'
import { GoogleSignIn } from '../auth/google-signin'

jest.mock('next-auth/react')

describe('GoogleSignIn', () => {
  it('renders sign in button', () => {
    render(<GoogleSignIn />)
    
    expect(screen.getByRole('button', { name: /sign in with google/i })).toBeInTheDocument()
  })

  it('calls signIn when button is clicked', () => {
    const mockSignIn = signIn as jest.MockedFunction<typeof signIn>
    
    render(<GoogleSignIn />)
    
    fireEvent.click(screen.getByRole('button', { name: /sign in with google/i }))
    
    expect(mockSignIn).toHaveBeenCalledWith('google', { callbackUrl: '/' })
  })
})
```

### Testing Utility Functions

Create `src/lib/__tests__/email.test.ts`:

```typescript
import { sendEmail, sendWelcomeEmail } from '../email'
import nodemailer from 'nodemailer'

jest.mock('nodemailer')

describe('Email Service', () => {
  const mockSendMail = jest.fn()
  
  beforeEach(() => {
    (nodemailer.createTransporter as jest.Mock).mockReturnValue({
      sendMail: mockSendMail,
    })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe('sendEmail', () => {
    it('sends email successfully', async () => {
      mockSendMail.mockResolvedValue({ messageId: 'test-message-id' })

      const result = await sendEmail({
        to: 'test@example.com',
        subject: 'Test Subject',
        html: '<p>Test content</p>',
      })

      expect(result.success).toBe(true)
      expect(result.messageId).toBe('test-message-id')
      expect(mockSendMail).toHaveBeenCalledWith({
        from: process.env.EMAIL_FROM,
        to: 'test@example.com',
        subject: 'Test Subject',
        html: '<p>Test content</p>',
        text: 'Test content',
      })
    })

    it('handles email sending failure', async () => {
      mockSendMail.mockRejectedValue(new Error('SMTP Error'))

      const result = await sendEmail({
        to: 'test@example.com',
        subject: 'Test Subject',
        html: '<p>Test content</p>',
      })

      expect(result.success).toBe(false)
      expect(result.error).toBe('SMTP Error')
    })
  })

  describe('sendWelcomeEmail', () => {
    it('sends welcome email with correct content', async () => {
      mockSendMail.mockResolvedValue({ messageId: 'welcome-message-id' })

      const result = await sendWelcomeEmail('user@example.com', 'John Doe')

      expect(result.success).toBe(true)
      expect(mockSendMail).toHaveBeenCalledWith(
        expect.objectContaining({
          to: 'user@example.com',
          subject: 'Welcome to NextStack Pro! 🚀',
          html: expect.stringContaining('Welcome John Doe!'),
        })
      )
    })
  })
})
```

This comprehensive testing guide ensures your NextStack Pro application is thoroughly tested and reliable in production.
