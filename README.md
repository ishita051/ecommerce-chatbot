# Ecommerce-chatbot
# 🛍️ Complete E-Commerce Chatbot System

An intelligent AI-powered chatbot system that revolutionizes online shopping experiences through natural language interactions and smart product recommendations.

## 🌟 Overview

This e-commerce chatbot combines the power of OpenAI's GPT-4 with a comprehensive product catalog to deliver personalized shopping experiences. Users can interact naturally with the AI to find products, get recommendations, and browse through an extensive inventory of 100+ items across multiple categories.

## ✨ Key Features

### 🔐 Authentication System
- **Secure Login**: NextAuth.js integration with credential-based authentication
- **Demo Account**: Quick access with `demo@example.com` / `demo123`
- **Session Management**: Persistent user sessions and chat history
- **Security**: Password hashing and secure session handling

### 🤖 AI-Powered Chat Interface
- **OpenAI Integration**: GPT-4 powered conversations using AI SDK
- **Natural Language Search**: Ask questions like "Show me laptops under $1000"
- **Intelligent Recommendations**: Context-aware product suggestions
- **Conversation Memory**: Maintains context throughout the chat session

### 📱 Responsive Design
- **Cross-Platform**: Optimized for mobile, tablet, and desktop
- **Modern UI**: Built with shadcn/ui components and Tailwind CSS
- **Intuitive Interface**: Clean chat design with timestamps and user avatars
- **Accessibility**: WCAG compliant design patterns

### 🛍️ Product Management
- **Extensive Catalog**: 100+ mock products across multiple categories
- **Advanced Search**: Full-text search with intelligent filtering
- **Product Details**: Ratings, reviews, pricing, and detailed descriptions
- **Category Browsing**: Organized product categories with price range filters
- **Visual Cards**: Rich product cards with images and key information

### 💾 Database Architecture
- **PostgreSQL Schema**: Complete database structure with optimized indexes
- **Seed Scripts**: Pre-populated product and user data
- **Full-Text Search**: Advanced search capabilities for product discovery
- **Performance Optimized**: Indexed fields for fast query execution

## 🏗️ Technical Architecture

### Frontend Stack
- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS with shadcn/ui components
- **State Management**: React hooks and context
- **Icons**: Lucide React icon library

### Backend Stack
- **API Routes**: Next.js API routes for server-side logic
- **AI Integration**: OpenAI AI SDK for GPT-4 integration
- **Authentication**: NextAuth.js with credential provider
- **Database**: PostgreSQL with Prisma ORM (schema provided)

### AI & Search
- **Language Model**: OpenAI GPT-4 for intelligent responses
- **Search Engine**: Custom product search with AI understanding
- **Context Management**: Conversation context preservation
- **Response Processing**: Structured AI responses with product data

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (optional for full functionality)
- OpenAI API key

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/ecommerce-chatbot.git
cd ecommerce-chatbot
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Environment Setup**
Create a `.env.local` file in the root directory:
```env
# Authentication
NEXTAUTH_SECRET=your-nextauth-secret-key
NEXTAUTH_URL=http://localhost:3000

# OpenAI Configuration
OPENAI_API_KEY=your-openai-api-key

# Database (Optional)
DATABASE_URL=postgresql://username:password@localhost:5432/ecommerce_chatbot

# Demo Mode (if not using database)
DEMO_MODE=true
```

4. **Database Setup (Optional)**
```bash
# Create database
createdb ecommerce_chatbot

# Run migrations and seed data
npm run db:migrate
npm run db:seed
```

5. **Start Development Server**
```bash
npm run dev
# or
yarn dev
```

Visit `http://localhost:3000` to see the application.

## 🎯 Usage Guide

### Demo Access
1. Navigate to the login page
2. Click **"Use Demo Account"** for instant access
3. Credentials: `demo@example.com` / `demo123`

### Chatbot Interactions

#### Product Search Examples:
- **"Show me laptops under $1000"** - Get filtered laptop results
- **"What are the best smartphones?"** - Receive top-rated phone recommendations
- **"I need wireless headphones"** - Browse headphone categories
- **"Show me today's deals"** - View discounted products

#### Advanced Queries:
- **"Compare iPhone vs Samsung phones"** - Get detailed comparisons
- **"What's good for gaming?"** - Receive gaming product recommendations
- **"I have a $500 budget for a tablet"** - Get budget-specific suggestions

### Features in Action:
- **Smart Search**: AI understands context and intent
- **Visual Results**: Products displayed as interactive cards
- **Session Memory**: Conversation history maintained
- **Quick Actions**: Predefined buttons for common queries

## 📁 Project Structure

```
ecommerce-chatbot/
├── app/
│   ├── api/
│   │   ├── auth/           # NextAuth.js configuration
│   │   └── chat/           # AI chat endpoint
│   ├── components/
│   │   ├── ui/             # shadcn/ui components
│   │   ├── chat/           # Chat interface components
│   │   └── products/       # Product display components
│   ├── lib/
│   │   ├── ai.ts           # OpenAI integration
│   │   ├── products.ts     # Product data and search
│   │   └── auth.ts         # Authentication configuration
│   └── page.tsx            # Main application page
├── database/
│   ├── schema.sql          # PostgreSQL database schema
│   └── seed.sql            # Sample data for products
├── public/
│   └── images/             # Product images and assets
└── types/
    └── index.ts            # TypeScript type definitions
```

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXTAUTH_SECRET` | NextAuth.js secret key | Yes |
| `NEXTAUTH_URL` | Application base URL | Yes |
| `OPENAI_API_KEY` | OpenAI API key for GPT-4 | Yes |
| `DATABASE_URL` | PostgreSQL connection string | Optional |
| `DEMO_MODE` | Enable demo mode without database | Optional |

### OpenAI Configuration
- **Model**: GPT-4 (configurable in `lib/ai.ts`)
- **Temperature**: 0.7 for balanced creativity
- **Max Tokens**: 1000 for comprehensive responses
- **System Prompt**: Optimized for e-commerce interactions

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker Deployment
```bash
# Build Docker image
docker build -t ecommerce-chatbot .

# Run container
docker run -p 3000:3000 --env-file .env.local ecommerce-chatbot
```

### Database Deployment
- **Supabase**: PostgreSQL with built-in auth
- **PlanetScale**: MySQL-compatible serverless database
- **Neon**: Serverless PostgreSQL
- **Railway**: Full-stack deployment with database

## 🧪 Testing

### Run Tests
```bash
# Unit tests
npm run test

# Integration tests
npm run test:integration

# E2E tests
npm run test:e2e
```

### Test Coverage
- Authentication flows
- AI chat responses
- Product search functionality
- Database operations
- API endpoints

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
```bash
git checkout -b feature/amazing-feature
```
3. **Commit your changes**
```bash
git commit -m "Add amazing feature"
```
4. **Push to the branch**
```bash
git push origin feature/amazing-feature
```
5. **Open a Pull Request**

### Development Guidelines
- Follow TypeScript best practices
- Maintain code coverage above 80%
- Update documentation for new features
- Test across different devices and browsers

## 📋 API Documentation

### Chat Endpoint
```
POST /api/chat
Content-Type: application/json

{
  "message": "Show me laptops under $1000",
  "history": [...previousMessages]
}
```

### Product Search
```
GET /api/products/search?q=laptop&category=electronics&maxPrice=1000
```

### Authentication
```
POST /api/auth/signin
{
  "email": "user@example.com",
  "password": "password"
}
```

## 🔍 Troubleshooting

### Common Issues

**OpenAI API Errors**
- Verify API key is valid and has sufficient credits
- Check rate limits and usage quotas

**Database Connection Issues**
- Ensure PostgreSQL is running
- Verify connection string format
- Check firewall settings

**Authentication Problems**
- Verify `NEXTAUTH_SECRET` is set
- Check `NEXTAUTH_URL` matches deployment URL

**Build Errors**
- Clear Next.js cache: `rm -rf .next`
- Reinstall dependencies: `rm -rf node_modules && npm install`

## 📊 Performance

- **Initial Load**: < 2 seconds
- **Chat Response**: < 3 seconds average
- **Search Results**: < 1 second
- **Mobile Performance**: 90+ Lighthouse score
- **SEO Optimized**: Server-side rendering with Next.js

## 🔐 Security

- **Authentication**: Secure session management
- **Data Validation**: Input sanitization and validation
- **API Security**: Rate limiting and request validation
- **Environment Variables**: Sensitive data protection
- **HTTPS**: SSL/TLS encryption in production

## 📈 Analytics & Monitoring

- **User Interactions**: Chat engagement metrics
- **Search Analytics**: Popular queries and products
- **Performance Monitoring**: Response times and errors
- **Conversion Tracking**: Chat-to-purchase analytics

## 🛣️ Roadmap

### Version 2.0
- [ ] Voice chat integration
- [ ] Advanced product recommendations
- [ ] Multi-language support
- [ ] Payment integration
- [ ] Admin dashboard

### Version 3.0
- [ ] Machine learning recommendations
- [ ] AR product visualization
- [ ] Social commerce features
- [ ] Advanced analytics dashboard

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Create a GitHub issue for bugs or feature requests
- **Discussions**: Use GitHub Discussions for questions
- **Email**: support@ecommerce-chatbot.com

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **OpenAI** for GPT-4 API
- **Vercel** for Next.js framework
- **shadcn/ui** for beautiful UI components
- **Tailwind CSS** for styling system
- **NextAuth.js** for authentication

---

**Built with ❤️ for the future of e-commerce**

*Ready to transform your online shopping experience? Get started today!*
