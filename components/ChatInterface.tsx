"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Send, RotateCcw, LogOut, Bot, User, ShoppingCart, Search, Filter, Star, DollarSign } from "lucide-react"
import ProductCard from "@/components/ProductCard"
import type { Product } from "@/lib/types"

interface Message {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
  products?: Product[]
}

interface ChatInterfaceProps {
  user: {
    id: string
    email: string
    name: string
  }
}

export default function ChatInterface({ user }: ChatInterfaceProps) {
  const router = useRouter()
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm your personal shopping assistant. I can help you find products, compare prices, and make recommendations. What are you looking for today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollAreaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    const currentInput = input
    setInput("")
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          message: currentInput,
          history: messages,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data = await response.json()

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.message,
        role: "assistant",
        timestamp: new Date(),
        products: data.products,
      }

      setMessages((prev) => [...prev, assistantMessage])
    } catch (error) {
      console.error("Error:", error)
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'm sorry, I encountered an error. Please try asking about specific products like 'show me laptops' or 'what are the best deals today?'",
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleReset = () => {
    setMessages([
      {
        id: "1",
        content:
          "Hello! I'm your personal shopping assistant. I can help you find products, compare prices, and make recommendations. What are you looking for today?",
        role: "assistant",
        timestamp: new Date(),
      },
    ])
  }

  const handleSignOut = () => {
    localStorage.removeItem("user")
    router.push("/auth/signin")
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  const handleQuickAction = (query: string) => {
    setInput(query)
    // Auto-send the query
    setTimeout(() => {
      const event = new KeyboardEvent("keydown", { key: "Enter" })
      handleSend()
    }, 100)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 px-4 py-3">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <ShoppingCart className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-xl font-bold text-gray-900">E-Commerce Assistant</h1>
              <p className="text-sm text-gray-500">AI-Powered Shopping Experience</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="hidden sm:flex items-center space-x-2">
              <Avatar className="h-8 w-8">
                <AvatarFallback>{user.email.charAt(0).toUpperCase()}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{user.email}</span>
            </div>
            <Button variant="outline" size="sm" onClick={handleReset}>
              <RotateCcw className="h-4 w-4 mr-2" />
              Reset
            </Button>
            <Button variant="outline" size="sm" onClick={handleSignOut}>
              <LogOut className="h-4 w-4 mr-2" />
              Sign Out
            </Button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-4">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Chat Section */}
          <div className="lg:col-span-3">
            <Card className="h-[calc(100vh-200px)]">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center space-x-2">
                  <Bot className="h-5 w-5 text-blue-600" />
                  <span>Shopping Assistant</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col h-full p-0">
                <ScrollArea className="flex-1 p-4" ref={scrollAreaRef}>
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div key={message.id} className="space-y-3">
                        <div
                          className={`flex items-start space-x-3 ${
                            message.role === "user" ? "flex-row-reverse space-x-reverse" : ""
                          }`}
                        >
                          <Avatar className="h-8 w-8">
                            <AvatarFallback>
                              {message.role === "user" ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                            </AvatarFallback>
                          </Avatar>
                          <div className={`flex-1 ${message.role === "user" ? "text-right" : ""}`}>
                            <div
                              className={`inline-block p-3 rounded-lg max-w-[80%] ${
                                message.role === "user" ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-900"
                              }`}
                            >
                              <p className="text-sm whitespace-pre-line">{message.content}</p>
                            </div>
                            <p className="text-xs text-gray-500 mt-1">{message.timestamp.toLocaleTimeString()}</p>
                          </div>
                        </div>

                        {/* Product Results */}
                        {message.products && message.products.length > 0 && (
                          <div className="ml-11 space-y-3">
                            <div className="flex items-center space-x-2">
                              <Search className="h-4 w-4 text-gray-500" />
                              <span className="text-sm font-medium text-gray-700">
                                Found {message.products.length} products:
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                              {message.products.slice(0, 4).map((product) => (
                                <ProductCard key={product.id} product={product} compact />
                              ))}
                            </div>
                            {message.products.length > 4 && (
                              <p className="text-sm text-gray-500">
                                And {message.products.length - 4} more products...
                              </p>
                            )}
                          </div>
                        )}
                      </div>
                    ))}

                    {isLoading && (
                      <div className="flex items-start space-x-3">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback>
                            <Bot className="h-4 w-4" />
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-1">
                          <div className="inline-block p-3 rounded-lg bg-gray-100">
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.1s" }}
                              ></div>
                              <div
                                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </ScrollArea>

                {/* Input Area */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <Input
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Ask me about products, prices, or recommendations..."
                      disabled={isLoading}
                      className="flex-1"
                    />
                    <Button onClick={handleSend} disabled={isLoading || !input.trim()}>
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    Try: "Show me laptops under $1000" or "What's the best smartphone?"
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Filter className="h-5 w-5" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleQuickAction("Show me electronics")}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Browse Electronics
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleQuickAction("What are the best deals today?")}
                >
                  <DollarSign className="h-4 w-4 mr-2" />
                  Best Deals
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleQuickAction("Show me top rated products")}
                >
                  <Star className="h-4 w-4 mr-2" />
                  Top Rated
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => handleQuickAction("Show me laptops under $1000")}
                >
                  <Search className="h-4 w-4 mr-2" />
                  Laptops Under $1000
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Session Info</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-500">Messages:</span>
                    <Badge variant="secondary">{messages.length}</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">Session:</span>
                    <Badge variant="outline">Active</Badge>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-500">User:</span>
                    <Badge variant="default">Authenticated</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Sample Queries</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                <div className="space-y-1">
                  <p className="text-gray-600">• "Show me smartphones"</p>
                  <p className="text-gray-600">• "I need wireless headphones"</p>
                  <p className="text-gray-600">• "What books do you have?"</p>
                  <p className="text-gray-600">• "Show me kitchen appliances"</p>
                  <p className="text-gray-600">• "Products under $100"</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
