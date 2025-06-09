import { NextResponse } from "next/server"
import { mockProducts, searchProducts, getProductsByCategory } from "@/lib/products"

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url)
    const query = searchParams.get("q")
    const category = searchParams.get("category")
    const limit = Number.parseInt(searchParams.get("limit") || "20")

    let products = mockProducts

    if (query) {
      products = searchProducts(query, limit)
    } else if (category) {
      products = getProductsByCategory(category, limit)
    } else {
      products = mockProducts.slice(0, limit)
    }

    return NextResponse.json({
      products,
      total: products.length,
      query: query || null,
      category: category || null,
    })
  } catch (error) {
    console.error("Products API error:", error)
    return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 })
  }
}
