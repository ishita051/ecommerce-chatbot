"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function Home() {
  const router = useRouter()

  useEffect(() => {
    // Simple redirect to signin page
    router.push("/auth/signin")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">E-Commerce Chatbot</h1>
        <p>Redirecting to sign in...</p>
      </div>
    </div>
  )
}
