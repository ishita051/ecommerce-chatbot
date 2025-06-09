export interface Product {
  id: string
  name: string
  description: string
  price: number
  originalPrice?: number
  discount?: number
  category: string
  subcategory: string
  brand: string
  image: string
  rating: number
  reviews: number
  inStock: boolean
  tags: string[]
}

export interface User {
  id: string
  email: string
  name?: string
}

export interface ChatMessage {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
  products?: Product[]
}
