"use client"

import React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { XCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function PaymentCancel() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-2xl mx-auto">
        <Card className="text-center">
          <CardHeader>
            <div className="mx-auto mb-4">
              <XCircle className="h-16 w-16 text-red-500" />
            </div>
            <CardTitle className="text-2xl text-red-600">Payment Cancelled</CardTitle>
            <CardDescription>
              Your payment was cancelled. No charges have been made.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-gray-600 dark:text-gray-400">
              You can try again or contact support if you need assistance.
            </p>
            <Link href="/">
              <Button className="w-full">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
