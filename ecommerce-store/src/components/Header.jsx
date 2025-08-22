import { useState } from 'react'
import { Search, ShoppingCart, Menu, User, Heart } from 'lucide-react'
import { Button } from '@/components/ui/button'

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('')
  const [cartCount, setCartCount] = useState(3)

  return (
    <header className="bg-white shadow-sm border-b">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4 text-center text-sm">
          🎉 عروض خاصة! خصم يصل إلى 70% على جميع المنتجات - شحن مجاني للطلبات فوق 100 ريال
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              متجر شامل
            </div>
          </div>

          {/* Search Bar */}
          <div className="flex-1 max-w-2xl mx-8 hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="ابحث عن المنتجات..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button 
                size="icon" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex items-center space-x-4">
            {/* Wishlist */}
            <Button variant="ghost" size="icon" className="relative">
              <Heart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </Button>

            {/* Cart */}
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Button>

            {/* User Account */}
            <Button variant="ghost" size="icon">
              <User className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن المنتجات..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <Button 
              size="icon" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Categories */}
      <div className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-6 overflow-x-auto">
            <Button variant="ghost" className="whitespace-nowrap">
              إلكترونيات
            </Button>
            <Button variant="ghost" className="whitespace-nowrap">
              أزياء
            </Button>
            <Button variant="ghost" className="whitespace-nowrap">
              منزل ومطبخ
            </Button>
            <Button variant="ghost" className="whitespace-nowrap">
              كتب
            </Button>
            <Button variant="ghost" className="whitespace-nowrap">
              رياضة
            </Button>
            <Button variant="ghost" className="whitespace-nowrap">
              جمال وعناية
            </Button>
            <Button variant="ghost" className="whitespace-nowrap">
              ألعاب
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

