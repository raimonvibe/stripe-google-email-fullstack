"use client"

import React from "react"
import { signIn } from "next-auth/react"
import { Button } from "@/components/ui/button"
import { Chrome } from "lucide-react"

export function GoogleSignIn() {
  return (
    <Button
      onClick={() => signIn("google", { callbackUrl: "/" })}
      variant="outline"
      className="w-full"
    >
      <Chrome className="mr-2 h-4 w-4" />
      Sign in with Google
    </Button>
  )
}
