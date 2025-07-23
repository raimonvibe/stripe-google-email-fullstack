"use client"

import React, { useState, useEffect } from "react"
import { useSession, signOut } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GoogleSignIn } from "@/components/auth/google-signin"
import { CheckoutButton } from "@/components/stripe/checkout-button"
import { ThemeToggle } from "@/components/theme-toggle"
import { getTutorialStepsWithProgress, updateTutorialProgress, TUTORIAL_STEPS } from "@/lib/tutorial"
import { 
  Crown, 
  Users, 
  Activity, 
  CreditCard, 
  Mail,
  Database,
  Code,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Rocket,
  Lock,
  ChevronLeft,
  ChevronRight,
  Play,
  BookOpen,
  Target
} from "lucide-react"

export default function Home() {
  const { data: session, status } = useSession()
  const [currentTutorialStep, setCurrentTutorialStep] = useState(0)
  const [tutorialSteps, setTutorialSteps] = useState(getTutorialStepsWithProgress())
  const [stats] = useState({
    totalUsers: 1247,
    activeToday: 89,
    paymentsProcessed: 342,
    emailsSent: 1856
  })

  const [emailStatus, setEmailStatus] = useState<string>("")
  const [emailLoading, setEmailLoading] = useState(false)

  useEffect(() => {
    setTutorialSteps(getTutorialStepsWithProgress())
  }, [])

  const sendWelcomeEmail = async () => {
    setEmailLoading(true)
    setEmailStatus("")
    
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: "welcome" }),
      })
      
      const data = await response.json()
      setEmailStatus(data.message || "Email sent successfully!")
    } catch {
      setEmailStatus("Failed to send email")
    } finally {
      setEmailLoading(false)
    }
  }

  const handleStepComplete = (stepId: string) => {
    updateTutorialProgress(stepId)
    setTutorialSteps(getTutorialStepsWithProgress())
  }

  const nextStep = () => {
    if (currentTutorialStep < TUTORIAL_STEPS.length - 1) {
      setCurrentTutorialStep(currentTutorialStep + 1)
    }
  }

  const prevStep = () => {
    if (currentTutorialStep > 0) {
      setCurrentTutorialStep(currentTutorialStep - 1)
    }
  }

  const currentStep = TUTORIAL_STEPS[currentTutorialStep]
  const completedSteps = tutorialSteps.filter(step => step.completed).length

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-orange-500"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-pink-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-8">
        <header className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg">
              <Crown className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                NextStack Pro
              </h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Interactive Fullstack Tutorial</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <GoogleSignIn />
            {session && (
              <Button
                onClick={() => signOut()}
                variant="outline"
                size="sm"
                className="flex items-center space-x-2"
              >
                <span>Sign Out</span>
              </Button>
            )}
          </div>
        </header>

        <div className="space-y-8">
          <Card className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-0 shadow-2xl">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto mb-4 p-4 bg-white/20 rounded-full backdrop-blur-sm">
                <BookOpen className="h-12 w-12" />
              </div>
              <CardTitle className="text-4xl font-bold mb-2">
                {session ? `Welcome back, ${session.user?.name?.split(' ')[0]}!` : 'Welcome to NextStack Pro!'} 🚀
              </CardTitle>
              <CardDescription className="text-white/90 text-lg">
                Learn fullstack development step by step
              </CardDescription>
              <div className="mt-4">
                <div className="flex items-center justify-center space-x-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Target className="h-4 w-4" />
                    <span>Progress: {completedSteps}/{TUTORIAL_STEPS.length} steps</span>
                  </div>
                  <div className="w-32 bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-white rounded-full h-2 transition-all duration-300"
                      style={{ width: `${(completedSteps / TUTORIAL_STEPS.length) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            </CardHeader>
          </Card>

          <div className="flex justify-center space-x-2 mb-6">
            {TUTORIAL_STEPS.map((step, index) => (
              <button
                key={step.id}
                onClick={() => setCurrentTutorialStep(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTutorialStep 
                    ? 'bg-orange-500 scale-125' 
                    : tutorialSteps[index]?.completed 
                      ? 'bg-green-500' 
                      : 'bg-gray-300 dark:bg-gray-600'
                }`}
                title={step.title}
              />
            ))}
          </div>

          <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="text-4xl">{currentStep.icon}</div>
                  <div>
                    <CardTitle className="text-2xl">{currentStep.title}</CardTitle>
                    <CardDescription className="text-lg">{currentStep.description}</CardDescription>
                  </div>
                </div>
                <div className="px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded text-sm">
                  Step {currentTutorialStep + 1} of {TUTORIAL_STEPS.length}
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">{currentStep.content.overview}</p>
              </div>

              {currentStep.content.codeExample && (
                <div className="bg-gray-900 dark:bg-gray-800 rounded-lg p-4 overflow-x-auto">
                  <pre className="text-green-400 text-sm">
                    <code>{currentStep.content.codeExample}</code>
                  </pre>
                </div>
              )}

              <div>
                <h4 className="font-semibold text-lg mb-3 flex items-center">
                  <Star className="h-5 w-5 mr-2 text-yellow-500" />
                  Key Learning Points
                </h4>
                <ul className="space-y-2">
                  {currentStep.content.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start space-x-2">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {currentStep.id === 'payments' && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Play className="h-5 w-5 mr-2 text-green-600" />
                    Interactive Demo: Payment Processing
                  </h4>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Try our payment integration demo. This will show you how Stripe checkout works.
                  </p>
                  <CheckoutButton 
                    priceId="price_demo"
                    amount="2999"
                    description="NextStack Pro Tutorial Demo"
                  />
                </div>
              )}

              {currentStep.id === 'email' && (
                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <Play className="h-5 w-5 mr-2 text-blue-600" />
                    Interactive Demo: Email System
                  </h4>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    Test our email automation system. This demonstrates how transactional emails work.
                  </p>
                  <div className="space-y-2">
                    <Button 
                      onClick={sendWelcomeEmail}
                      disabled={emailLoading}
                      className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                    >
                      {emailLoading ? (
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      ) : (
                        <Mail className="h-4 w-4 mr-2" />
                      )}
                      Send Demo Email
                    </Button>
                    {emailStatus && (
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {emailStatus}
                      </p>
                    )}
                  </div>
                </div>
              )}

              {currentStep.id === 'authentication' && session && (
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-6 rounded-lg">
                  <h4 className="font-semibold text-lg mb-3 flex items-center">
                    <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                    Authentication Success!
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300">
                    Great! You&apos;re already authenticated with Google OAuth. You can see your session data and experience the full authentication flow.
                  </p>
                  <div className="mt-3 p-3 bg-white dark:bg-gray-800 rounded border">
                    <p className="text-sm"><strong>Name:</strong> {session.user?.name}</p>
                    <p className="text-sm"><strong>Email:</strong> {session.user?.email}</p>
                  </div>
                </div>
              )}

              <div className="flex justify-between items-center pt-6 border-t">
                <Button
                  onClick={prevStep}
                  disabled={currentTutorialStep === 0}
                  variant="outline"
                  className="flex items-center space-x-2"
                >
                  <ChevronLeft className="h-4 w-4" />
                  <span>Previous</span>
                </Button>

                <Button
                  onClick={() => handleStepComplete(currentStep.id)}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                  disabled={tutorialSteps[currentTutorialStep]?.completed}
                >
                  {tutorialSteps[currentTutorialStep]?.completed ? (
                    <>
                      <CheckCircle className="h-4 w-4 mr-2" />
                      Completed
                    </>
                  ) : (
                    <>
                      <Target className="h-4 w-4 mr-2" />
                      Mark Complete
                    </>
                  )}
                </Button>

                <Button
                  onClick={nextStep}
                  disabled={currentTutorialStep === TUTORIAL_STEPS.length - 1}
                  className="flex items-center space-x-2"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>

              {currentStep.content.nextAction && (
                <div className="bg-orange-50 dark:bg-orange-900/20 p-4 rounded-lg">
                  <p className="text-orange-800 dark:text-orange-200 flex items-center">
                    <ArrowRight className="h-4 w-4 mr-2" />
                    <strong>Next:</strong> {currentStep.content.nextAction}
                  </p>
                </div>
              )}
            </CardContent>
          </Card>

          <Card className="shadow-xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl">Technology Stack</CardTitle>
                  <CardDescription>Modern fullstack development tools</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Rocket className="h-8 w-8 mx-auto mb-2 text-black dark:text-white" />
                  <p className="font-semibold">Next.js 14</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">React Framework</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Lock className="h-8 w-8 mx-auto mb-2 text-green-600" />
                  <p className="font-semibold">NextAuth.js</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Authentication</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <CreditCard className="h-8 w-8 mx-auto mb-2 text-purple-600" />
                  <p className="font-semibold">Stripe</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Payments</p>
                </div>
                <div className="text-center p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
                  <Database className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <p className="font-semibold">Prisma</p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">Database ORM</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {session && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm font-medium">Total Users</p>
                      <p className="text-3xl font-bold">{stats.totalUsers.toLocaleString()}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-200" />
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                    <span className="text-green-300 text-sm">+12% from last month</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm font-medium">Active Today</p>
                      <p className="text-3xl font-bold">{stats.activeToday}</p>
                    </div>
                    <Activity className="h-8 w-8 text-green-200" />
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                    <span className="text-green-300 text-sm">+5% from yesterday</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm font-medium">Payments</p>
                      <p className="text-3xl font-bold">{stats.paymentsProcessed}</p>
                    </div>
                    <CreditCard className="h-8 w-8 text-purple-200" />
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                    <span className="text-green-300 text-sm">+8% from last week</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm font-medium">Emails Sent</p>
                      <p className="text-3xl font-bold">{stats.emailsSent.toLocaleString()}</p>
                    </div>
                    <Mail className="h-8 w-8 text-orange-200" />
                  </div>
                  <div className="flex items-center mt-2">
                    <TrendingUp className="h-4 w-4 text-green-300 mr-1" />
                    <span className="text-green-300 text-sm">+15% from last week</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
