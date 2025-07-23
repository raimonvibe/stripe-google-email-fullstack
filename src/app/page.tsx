"use client"

import React, { useState } from "react"
import { useSession, signOut } from "next-auth/react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { GoogleSignIn } from "@/components/auth/google-signin"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  CreditCard, 
  Mail, 
  Database, 
  Shield, 
  LogOut, 
  Sparkles, 
  Zap, 
  Star, 
  Heart, 
  Rocket, 
  Trophy,
  Users,
  Activity,
  TrendingUp,
  Gift,
  Crown,
  Palette
} from "lucide-react"

export default function Home() {
  const { data: session, status } = useSession()
  const [stats] = useState({
    totalUsers: 1247,
    activeToday: 89,
    paymentsProcessed: 342,
    emailsSent: 1856
  })

  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="relative">
          <div className="animate-spin rounded-full h-32 w-32 border-b-4 border-orange-500"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles className="h-8 w-8 text-orange-500 animate-pulse" />
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center mb-12 space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 bg-clip-text text-transparent mb-2">
              ⚡ NextStack Pro
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 font-medium">
              The Ultimate Fullstack Development Platform
            </p>
            <div className="flex items-center justify-center md:justify-start mt-2 space-x-2">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-sm text-gray-500 ml-2">Trusted by developers worldwide</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {session && (
              <Button
                onClick={() => signOut()}
                variant="outline"
                size="sm"
                className="bg-red-50 hover:bg-red-100 dark:bg-red-900/20 dark:hover:bg-red-900/30 border-red-200 dark:border-red-800"
              >
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            )}
          </div>
        </header>

        {!session ? (
          <div className="flex items-center justify-center min-h-[60vh]">
            <Card className="w-full max-w-lg shadow-2xl border-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full w-16 h-16 flex items-center justify-center">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                  Welcome to NextStack Pro
                </CardTitle>
                <CardDescription className="text-lg mt-2">
                  🚀 Experience the future of fullstack development
                  <br />
                  <span className="text-sm text-gray-500 mt-2 block">
                    Join thousands of developers building amazing apps
                  </span>
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <Shield className="h-6 w-6 text-blue-500 mx-auto mb-1" />
                    <p className="text-xs font-medium">Secure Auth</p>
                  </div>
                  <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <Zap className="h-6 w-6 text-green-500 mx-auto mb-1" />
                    <p className="text-xs font-medium">Lightning Fast</p>
                  </div>
                  <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                    <Heart className="h-6 w-6 text-purple-500 mx-auto mb-1" />
                    <p className="text-xs font-medium">Developer Love</p>
                  </div>
                  <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                    <Trophy className="h-6 w-6 text-orange-500 mx-auto mb-1" />
                    <p className="text-xs font-medium">Award Winning</p>
                  </div>
                </div>
                <GoogleSignIn />
              </CardContent>
            </Card>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Hero Welcome Section */}
            <Card className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white border-0 shadow-2xl">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-4">
                  {session.user?.image && (
                    <div className="relative">
                      <img
                        src={session.user.image}
                        alt="Profile"
                        className="w-16 h-16 rounded-full border-4 border-white/30"
                      />
                      <div className="absolute -bottom-1 -right-1 bg-green-500 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                      </div>
                    </div>
                  )}
                  <div className="flex-1">
                    <CardTitle className="text-2xl md:text-3xl font-bold text-white">
                      🎉 Welcome back, {session.user?.name}!
                    </CardTitle>
                    <CardDescription className="text-blue-100 text-lg mt-1">
                      Ready to build something amazing today?
                    </CardDescription>
                    <p className="text-sm text-blue-200 mt-2">{session.user?.email}</p>
                  </div>
                  <div className="hidden md:block">
                    <Rocket className="h-12 w-12 text-white/70" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <Users className="h-6 w-6 mx-auto mb-2 text-blue-200" />
                    <p className="text-2xl font-bold">{stats.totalUsers.toLocaleString()}</p>
                    <p className="text-xs text-blue-200">Total Users</p>
                  </div>
                  <div className="text-center">
                    <Activity className="h-6 w-6 mx-auto mb-2 text-green-200" />
                    <p className="text-2xl font-bold">{stats.activeToday}</p>
                    <p className="text-xs text-green-200">Active Today</p>
                  </div>
                  <div className="text-center">
                    <TrendingUp className="h-6 w-6 mx-auto mb-2 text-yellow-200" />
                    <p className="text-2xl font-bold">{stats.paymentsProcessed}</p>
                    <p className="text-xs text-yellow-200">Payments</p>
                  </div>
                  <div className="text-center">
                    <Mail className="h-6 w-6 mx-auto mb-2 text-pink-200" />
                    <p className="text-2xl font-bold">{stats.emailsSent.toLocaleString()}</p>
                    <p className="text-xs text-pink-200">Emails Sent</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-green-500 bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-green-500 rounded-lg">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-green-700 dark:text-green-300">Authentication</span>
                      <div className="flex items-center space-x-1 mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-green-600 dark:text-green-400 font-medium">ACTIVE</span>
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-green-600 dark:text-green-400">
                    🔐 Enterprise-grade Google OAuth with NextAuth.js
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <p className="text-sm font-medium">Successfully authenticated</p>
                  </div>
                  <div className="bg-green-100 dark:bg-green-900/30 p-3 rounded-lg">
                    <p className="text-xs text-green-700 dark:text-green-300">
                      🛡️ Secure session management with JWT tokens
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-blue-500 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-blue-500 rounded-lg">
                      <CreditCard className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-blue-700 dark:text-blue-300">Stripe Payments</span>
                      <div className="flex items-center space-x-1 mt-1">
                        <Sparkles className="w-3 h-3 text-blue-500" />
                        <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">PREMIUM</span>
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-blue-600 dark:text-blue-400">
                    💎 World-class payment processing with Stripe
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <p className="text-sm font-medium">Payment gateway ready</p>
                  </div>
                  <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-lg">
                    <p className="text-xs text-blue-700 dark:text-blue-300 mb-2">
                      🔒 PCI DSS compliant • 135+ currencies • Global reach
                    </p>
                  </div>
                  <Button
                    onClick={() => {
                      fetch("/api/stripe/checkout", {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ 
                          priceId: "price_test_example",
                          amount: 1000,
                          description: "Premium Feature Access"
                        }),
                      })
                      .then(res => res.json())
                      .then(data => {
                        if (data.url) window.location.href = data.url
                        else alert("💳 Payment setup required - configure Stripe in .env")
                      })
                      .catch(() => alert("💳 Payment setup required - configure Stripe in .env"))
                    }}
                    className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white font-semibold py-3"
                  >
                    <Gift className="mr-2 h-5 w-5" />
                    Unlock Premium Features - $10.00
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500 bg-gradient-to-br from-purple-50 to-violet-50 dark:from-purple-900/20 dark:to-violet-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-purple-500 rounded-lg">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-purple-700 dark:text-purple-300">Database</span>
                      <div className="flex items-center space-x-1 mt-1">
                        <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                        <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">CONNECTED</span>
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-purple-600 dark:text-purple-400">
                    🗄️ High-performance SQLite with Prisma ORM
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <p className="text-sm font-medium">Database connected and optimized</p>
                  </div>
                  <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-lg">
                    <p className="text-xs text-purple-700 dark:text-purple-300">
                      ⚡ Type-safe queries • Auto-migrations • Real-time sync
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <p className="text-lg font-bold text-purple-600">1.2k</p>
                      <p className="text-xs text-gray-500">Records</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <p className="text-lg font-bold text-purple-600">5ms</p>
                      <p className="text-xs text-gray-500">Avg Query</p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-2 rounded">
                      <p className="text-lg font-bold text-purple-600">99.9%</p>
                      <p className="text-xs text-gray-500">Uptime</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-orange-500 bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-orange-500 rounded-lg">
                      <Mail className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-xl font-bold text-orange-700 dark:text-orange-300">Email System</span>
                      <div className="flex items-center space-x-1 mt-1">
                        <Zap className="w-3 h-3 text-orange-500" />
                        <span className="text-xs text-orange-600 dark:text-orange-400 font-medium">POWERED</span>
                      </div>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-orange-600 dark:text-orange-400">
                    📬 Smart email automation with Nodemailer
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                    <p className="text-sm font-medium">Email service ready to deploy</p>
                  </div>
                  <div className="bg-orange-100 dark:bg-orange-900/30 p-3 rounded-lg">
                    <p className="text-xs text-orange-700 dark:text-orange-300 mb-2">
                      🚀 HTML templates • SMTP support • Delivery tracking
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      onClick={() => {
                        fetch("/api/send-email", {
                          method: "POST",
                          headers: { "Content-Type": "application/json" },
                          body: JSON.stringify({ type: "welcome" }),
                        })
                        .then(res => res.json())
                        .then(data => {
                          if (data.message) {
                            alert("🎉 Welcome email sent successfully!")
                          } else {
                            alert("📧 Email setup required - configure email in .env")
                          }
                        })
                        .catch(() => alert("📧 Email setup required - configure email in .env"))
                      }}
                      className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold"
                    >
                      <Mail className="mr-2 h-4 w-4" />
                      Send Welcome
                    </Button>
                    <Button
                      variant="outline"
                      className="border-orange-300 text-orange-600 hover:bg-orange-50 dark:border-orange-700 dark:text-orange-400"
                    >
                      <Palette className="mr-2 h-4 w-4" />
                      Templates
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
