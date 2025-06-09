# E-Commerce Sales Chatbot

A comprehensive e-commerce sales chatbot built with Next.js, featuring AI-powered product search, recommendations, and seamless shopping experience.

## 🚀 Features

### Core Functionality
- **AI-Powered Chat Interface**: Intelligent chatbot using OpenAI GPT-4 for natural language understanding
- **Product Search & Discovery**: Advanced search with category filtering, price ranges, and brand filtering
- **Real-time Recommendations**: Personalized product suggestions based on user queries
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Session Management**: Persistent chat history and user sessions

### Authentication & Security
- **Secure Authentication**: NextAuth.js integration with credential-based login
- **Session Persistence**: Maintains user state across browser sessions
- **Demo Account**: Quick access with pre-configured demo credentials

### Product Management
- **Comprehensive Catalog**: 100+ mock products across multiple categories
- **Rich Product Data**: Detailed information including ratings, reviews, pricing, and availability
- **Advanced Filtering**: Search by category, price range, brand, and features
- **Visual Product Cards**: Attractive product displays with images and key information

### Technical Architecture
- **Modern Stack**: Next.js 15 with App Router, TypeScript, and Tailwind CSS
- **API-Driven Backend**: RESTful API endpoints for product data and chat functionality
- **Database Ready**: SQL schema and seed scripts for production deployment
- **Modular Design**: Clean separation of concerns with reusable components

## 🛠 Technology Stack

### Frontend
- **Next.js 15**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **shadcn/ui**: Modern UI component library
- **Lucide React**: Beautiful icons

### Backend & AI
- **Next.js API Routes**: Server-side API endpoints
- **AI SDK**: Vercel's AI SDK for LLM integration
- **OpenAI GPT-4**: Advanced language model for chat functionality
- **NextAuth.js**: Authentication and session management

### Database & Data
- **PostgreSQL**: Relational database (schema provided)
- **Mock Data**: 100+ sample products for demonstration
- **Full-text Search**: Optimized product search capabilities

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Quick Start

1. **Clone or Download the Project**
   \`\`\`bash
   # If using the v0 download feature, extract the files
   # Or clone from your repository
   \`\`\`

2. **Install Dependencies**
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. **Environment Setup**
   Create a `.env.local` file in the root directory:
   \`\`\`env
   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here
   
   # OpenAI API Key (required for AI chat functionality)
   OPENAI_API_KEY=your-openai-api-key-here
   
   # Database URL (optional - for production)
   DATABASE_URL=postgresql://username:password@localhost:5432/ecommerce_chatbot
   \`\`\`

4. **Run the Development Server**
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

5. **Access the Application**
   Open [http://localhost:3000](http://localhost:3000) in your browser

### Demo Account
- **Email**: demo@example.com
- **Password**: demo123

## 🗄 Database Setup (Optional)

For production deployment, you can set up a PostgreSQL database:

1. **Create Database**
   \`\`\`sql
   CREATE DATABASE ecommerce_chatbot;
   \`\`\`

2. **Run Schema Script**
   Execute the SQL script in `scripts/create_database.sql`

3. **Seed Data**
   Execute the SQL scripts in `scripts/seed_products.sql` and `scripts/seed_users.sql`

## 🎯 Usage Guide

### Getting Started
1. **Sign In**: Use the demo account or create your own credentials
2. **Start Chatting**: Begin a conversation with the AI assistant
3. **Search Products**: Ask about specific products, categories, or price ranges
4. **Browse Results**: View product recommendations with detailed information
5. **Reset Session**: Use the reset button to start a new conversation

### Sample Queries
- "Show me laptops under $1000"
- "What are the best smartphones available?"
- "I need wireless headphones for working out"
- "Show me the top-rated products"
- "What deals do you have today?"

### Features Demonstration
- **Product Search**: Natural language product discovery
- **Price Filtering**: Find products within specific price ranges
- **Category Browsing**: Explore products by category
- **Recommendations**: Get personalized suggestions
- **Product Details**: View comprehensive product information

## 🏗 Architecture Overview

### Project Structure
\`\`\`
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   │   ├── auth/          # Authentication endpoints
│   │   ├── chat/          # Chat API endpoint
│   │   └── products/      # Product API endpoints
│   ├── auth/              # Authentication pages
│   ├── chat/              # Main chat interface
│   └── layout.tsx         # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # shadcn/ui components
│   ├── ChatInterface.tsx # Main chat component
│   └── ProductCard.tsx   # Product display component
├── lib/                  # Utility functions and types
│   ├── types.ts          # TypeScript type definitions
│   └── products.ts       # Product data and search functions
└── scripts/              # Database scripts
    ├── create_database.sql
    ├── seed_products.sql
    └── seed_users.sql
\`\`\`

### Key Components

#### ChatInterface
- Main chat UI with message history
- Real-time AI responses
- Product result display
- Session management

#### ProductCard
- Reusable product display component
- Compact and full-size variants
- Rating display and pricing information

#### API Routes
- `/api/chat`: AI-powered chat endpoint
- `/api/products`: Product search and filtering
- `/api/auth`: Authentication handling

## 🔧 Customization

### Adding New Products
1. **Mock Data**: Add products to `lib/products.ts`
2. **Database**: Insert into the products table using the provided schema

### Modifying AI Behavior
1. **System Prompts**: Edit prompts in `app/api/chat/route.ts`
2. **Search Logic**: Customize product matching in `lib/products.ts`

### UI Customization
1. **Styling**: Modify Tailwind classes throughout components
2. **Themes**: Customize the color scheme in `tailwind.config.ts`
3. **Layout**: Adjust component structure in `components/`

## 🚀 Deployment

### Vercel (Recommended)
1. **Push to GitHub**: Commit your code to a GitHub repository
2. **Connect to Vercel**: Import your repository in Vercel dashboard
3. **Environment Variables**: Add your environment variables in Vercel settings
4. **Deploy**: Automatic deployment on every push

### Other Platforms
- **Netlify**: Configure build settings for Next.js
- **Railway**: Connect database and deploy
- **DigitalOcean**: Use App Platform for easy deployment

## 🧪 Testing

### Manual Testing Scenarios
1. **Authentication Flow**: Test login/logout functionality
2. **Chat Functionality**: Verify AI responses and product search
3. **Product Display**: Check product cards and information accuracy
4. **Responsive Design**: Test on different screen sizes
5. **Session Persistence**: Verify chat history maintenance

### Sample Test Cases
- Search for products by category
- Test price range filtering
- Verify product recommendations
- Check error handling for invalid queries
- Test session reset functionality

## 🔍 Troubleshooting

### Common Issues

#### Chat Not Working
- **Check OpenAI API Key**: Ensure valid API key in environment variables
- **Network Issues**: Verify internet connection and API accessibility

#### Authentication Problems
- **NextAuth Secret**: Ensure NEXTAUTH_SECRET is set
- **URL Configuration**: Verify NEXTAUTH_URL matches your domain

#### Product Search Issues
- **Data Loading**: Check if mock products are properly imported
- **Search Logic**: Verify search functions in `lib/products.ts`

### Performance Optimization
- **Image Optimization**: Use Next.js Image component for better performance
- **Code Splitting**: Leverage Next.js automatic code splitting
- **Caching**: Implement appropriate caching strategies for API responses

## 📈 Future Enhancements

### Planned Features
- **Shopping Cart**: Add cart functionality with checkout process
- **User Profiles**: Enhanced user management and preferences
- **Order History**: Track and display user purchase history
- **Advanced Analytics**: User behavior tracking and insights
- **Multi-language Support**: Internationalization capabilities

### Technical Improvements
- **Real Database Integration**: Replace mock data with actual database
- **Advanced Search**: Implement Elasticsearch or similar for better search
- **Caching Layer**: Add Redis for improved performance
- **Testing Suite**: Comprehensive unit and integration tests

## 📄 License

This project is created for demonstration purposes. Feel free to use and modify according to your needs.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📞 Support

For questions or issues:
- Check the troubleshooting section
- Review the code comments for implementation details
- Create an issue in the repository

---

**Built with ❤️ using Next.js, AI SDK, and modern web technologies**
