"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Loader2, ShoppingCart } from "lucide-react"

export default function SignIn() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    try {
      // Simple authentication check
      if (email === "demo@example.com" && password === "demo123") {
        // Store session in localStorage for demo purposes
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: "1",
            email: "demo@example.com",
            name: "Demo User",
          }),
        )
        router.push("/chat")
      } else if (email && password) {
        // Accept any email/password for demo
        localStorage.setItem(
          "user",
          JSON.stringify({
            id: "2",
            email: email,
            name: email.split("@")[0],
          }),
        )
        router.push("/chat")
      } else {
        setError("Please enter email and password")
      }
    } catch (error) {
      console.error("Sign in error:", error)
      setError("An error occurred during sign in")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDemoLogin = async () => {
    setIsLoading(true)
    setError("")

    try {
      localStorage.setItem(
        "user",
        JSON.stringify({
          id: "1",
          email: "demo@example.com",
          name: "Demo User",
        }),
      )
      router.push("/chat")
    } catch (error) {
      console.error("Demo login error:", error)
      setError("Demo login failed")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <ShoppingCart className="h-12 w-12 text-blue-600" />
          </div>
          <CardTitle className="text-2xl font-bold">E-Commerce Chatbot</CardTitle>
          <CardDescription>Sign in to start shopping with our AI assistant</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>

          <div className="mt-4 text-center">
            <div className="text-sm text-gray-500 mb-2">Demo Account:</div>
            <Button variant="outline" onClick={handleDemoLogin} disabled={isLoading} className="w-full">
              Use Demo Account
            </Button>
            <div className="text-xs text-gray-400 mt-2">Email: demo@example.com | Password: demo123</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
