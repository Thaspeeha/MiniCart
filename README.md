# MiniCart 🛒

A modern e-commerce shopping cart application built with Next.js and TypeScript.

## Features ✨

- **Product Listing:** Browse through products with images and descriptions
- **Shopping Cart:** 
  - Add/remove items
  - Update quantities
  - Persistent cart (survives page refresh)
  - Real-time total calculation
- **Checkout Process:**
  - Form validation with Zod
  - Order summary
  - Shipping information collection
- **Modern UI:**
  - Responsive design
  - Toast notifications
  - Loading states
  - Error handling
  - Cart badge with item count

## Tech Stack 🛠️

- **Framework:** Next.js 15.4
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Form Handling:** React Hook Form
- **Validation:** Zod
- **State Management:** React Context
- **Notifications:** Sonner
- **Data Persistence:** LocalStorage

## Getting Started 🚀

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/Thaspeeha/MiniCart.git
cd MiniCart
```

2. Install dependencies
```bash
cd frontend
npm install
```

3. Run the development server
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure 📁

```
frontend/
├── src/
│   ├── app/                   # App router pages
│   ├── components/            # Reusable components
│   │   ├── ui/               # UI components (shadcn)
│   │   └── ...              # Custom components
│   └── lib/                  # Utilities and contexts
├── public/                   # Static assets
└── ...config files
```

## Architecture Decisions 🏗️

1. **App Router:**
   - Utilizing Next.js 15's App Router for modern routing features
   - Server and Client components segregation

2. **State Management:**
   - React Context for cart state
   - LocalStorage for persistence
   - Memoized calculations for performance

3. **Component Design:**
   - Modular components for reusability
   - shadcn/ui for consistent design system
   - Client-side form validation

4. **Performance:**
   - Image optimization with Next.js Image
   - Memoized context values
   - Optimized re-renders

## Available Scripts 📜

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Development Features 🔧

- TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Tailwind CSS for styling
- shadcn/ui for UI components

## Future Enhancements 🚀

- [ ] Authentication
- [ ] Order history
- [ ] Wishlist
- [ ] Product categories
- [ ] Search functionality
- [ ] Payment integration
- [ ] Dark mode support

## 📌 Author Notes

This project was built for a learning experience to fully improve and implement complexity in full stack frontend developments.

## License 📝

This project is licensed under the MIT License - see the LICENSE file for details.
