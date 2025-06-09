import { type NextRequest, NextResponse } from "next/server"
import {
  searchProducts,
  getProductsByCategory,
  getTopRatedProducts,
  getBestDeals,
  getProductsInPriceRange,
} from "@/lib/products"

// Simple AI response generator without OpenAI dependency
function generateAIResponse(message: string, products: any[]) {
  const lowerMessage = message.toLowerCase()

  // Product search responses
  if (products.length > 0) {
    if (lowerMessage.includes("laptop") || lowerMessage.includes("computer")) {
      return `I found ${products.length} great laptops for you! Here are some excellent options with powerful processors, good battery life, and competitive prices. ${products.length > 4 ? "I'm showing the top 4 results." : ""} Would you like me to filter by a specific price range or brand?`
    }

    if (lowerMessage.includes("phone") || lowerMessage.includes("smartphone")) {
      return `Here are ${products.length} smartphones I found! These include the latest models with great cameras, long battery life, and fast performance. ${products.length > 4 ? "Showing the top 4 matches." : ""} Are you looking for any specific features like camera quality or battery life?`
    }

    if (lowerMessage.includes("headphone") || lowerMessage.includes("audio")) {
      return `I discovered ${products.length} audio products for you! These include noise-canceling headphones, wireless earbuds, and premium audio gear. ${products.length > 4 ? "Here are the top 4 recommendations." : ""} Do you prefer over-ear headphones or wireless earbuds?`
    }

    if (lowerMessage.includes("deal") || lowerMessage.includes("discount") || lowerMessage.includes("sale")) {
      return `Great news! I found ${products.length} products with amazing deals and discounts. These are some of the best offers available right now with significant savings. ${products.length > 4 ? "Showing the top 4 deals." : ""} Would you like to see more deals in a specific category?`
    }

    if (lowerMessage.includes("top") || lowerMessage.includes("best") || lowerMessage.includes("rated")) {
      return `Here are ${products.length} top-rated products with excellent customer reviews! These items have consistently high ratings and positive feedback from buyers. ${products.length > 4 ? "Displaying the top 4 highest-rated items." : ""} Would you like to know more about any specific product?`
    }

    if (lowerMessage.includes("under") || lowerMessage.includes("$") || lowerMessage.includes("price")) {
      return `I found ${products.length} products within your price range! These offer great value for money and meet your budget requirements. ${products.length > 4 ? "Here are the top 4 options." : ""} Would you like to see products in a different price range?`
    }

    // Generic product response
    return `I found ${products.length} products that match your search! These include a variety of options with different features, prices, and brands to choose from. ${products.length > 4 ? "Showing the top 4 results." : ""} Would you like me to help you narrow down the options or provide more details about any specific product?`
  }

  // No products found responses
  if (lowerMessage.includes("hello") || lowerMessage.includes("hi") || lowerMessage.includes("hey")) {
    return "Hello! I'm your personal shopping assistant. I can help you find products, compare prices, and make recommendations. What are you looking for today? You can ask me about electronics, clothing, books, home goods, and much more!"
  }

  if (lowerMessage.includes("help")) {
    return "I'm here to help you find the perfect products! You can ask me things like:\n• 'Show me laptops under $1000'\n• 'What are the best smartphones?'\n• 'I need wireless headphones'\n• 'Show me today's deals'\n• 'What are the top-rated products?'\n\nWhat would you like to search for?"
  }

  if (lowerMessage.includes("thank")) {
    return "You're welcome! I'm always here to help you find great products and deals. Is there anything else you'd like to search for or any questions about the products I've shown you?"
  }

  // Default response for unmatched queries
  return "I'd be happy to help you find products! Could you tell me more about what you're looking for? For example, you could ask about specific categories like electronics, clothing, books, or home goods. You can also ask about price ranges, deals, or top-rated items."
}

export async function POST(req: NextRequest) {
  try {
    const { message, history } = await req.json()

    // Simple intent analysis based on keywords
    const lowerMessage = message.toLowerCase()
    let products = []

    // Determine search intent and fetch products
    if (lowerMessage.includes("laptop") || lowerMessage.includes("computer")) {
      products = searchProducts("laptop", 8)
    } else if (lowerMessage.includes("phone") || lowerMessage.includes("smartphone")) {
      products = searchProducts("smartphone", 8)
    } else if (
      lowerMessage.includes("headphone") ||
      lowerMessage.includes("audio") ||
      lowerMessage.includes("earbuds")
    ) {
      products = searchProducts("headphones", 8)
    } else if (lowerMessage.includes("tablet") || lowerMessage.includes("ipad")) {
      products = searchProducts("tablet", 8)
    } else if (lowerMessage.includes("book")) {
      products = getProductsByCategory("Books", 8)
    } else if (
      lowerMessage.includes("clothing") ||
      lowerMessage.includes("fashion") ||
      lowerMessage.includes("shirt") ||
      lowerMessage.includes("jeans")
    ) {
      products = getProductsByCategory("Clothing & Fashion", 8)
    } else if (
      lowerMessage.includes("home") ||
      lowerMessage.includes("kitchen") ||
      lowerMessage.includes("appliance")
    ) {
      products = getProductsByCategory("Home & Garden", 8)
    } else if (lowerMessage.includes("electronics")) {
      products = getProductsByCategory("Electronics", 8)
    } else if (lowerMessage.includes("deal") || lowerMessage.includes("discount") || lowerMessage.includes("sale")) {
      products = getBestDeals(8)
    } else if (lowerMessage.includes("top") || lowerMessage.includes("best") || lowerMessage.includes("rated")) {
      products = getTopRatedProducts(8)
    } else if (lowerMessage.includes("under") && lowerMessage.includes("$")) {
      // Extract price from message
      const priceMatch = lowerMessage.match(/\$(\d+)/)
      if (priceMatch) {
        const maxPrice = Number.parseInt(priceMatch[1])
        products = getProductsInPriceRange(0, maxPrice, 8)
      }
    } else if (lowerMessage.includes("between") && lowerMessage.includes("$")) {
      // Extract price range
      const priceMatches = lowerMessage.match(/\$(\d+)/g)
      if (priceMatches && priceMatches.length >= 2) {
        const min = Number.parseInt(priceMatches[0].replace("$", ""))
        const max = Number.parseInt(priceMatches[1].replace("$", ""))
        products = getProductsInPriceRange(min, max, 8)
      }
    } else {
      // General search
      products = searchProducts(message, 6)
    }

    // Generate response
    const responseMessage = generateAIResponse(message, products)

    return NextResponse.json({
      message: responseMessage,
      products: products.length > 0 ? products : undefined,
    })
  } catch (error) {
    console.error("Chat API error:", error)
    return NextResponse.json(
      {
        message:
          "I'm sorry, I'm having trouble processing your request right now. Please try asking about specific products like 'show me laptops' or 'what are the best deals today?'",
        error: "Failed to process chat message",
      },
      { status: 500 },
    )
  }
}
