import { useState, useEffect } from 'react'
import ProductCard from './ProductCard'
import { Button } from '@/components/ui/button'
import { Loader2 } from 'lucide-react'

const ProductGrid = ({ title, apiEndpoint, limit = 8 }) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Sample products for demonstration
  const sampleProducts = [
    {
      id: 1,
      name: 'هاتف ذكي Samsung Galaxy',
      description: 'هاتف ذكي متطور بكاميرا عالية الجودة وبطارية طويلة المدى',
      price: 299.99,
      original_price: 399.99,
      discount_percentage: 25,
      category: 'إلكترونيات',
      brand: 'Samsung',
      image_url: 'https://via.placeholder.com/300x300/007bff/ffffff?text=Samsung+Galaxy',
      stock_quantity: 50,
      rating: 4.5,
      reviews_count: 128
    },
    {
      id: 2,
      name: 'حقيبة يد نسائية أنيقة',
      description: 'حقيبة يد عصرية مصنوعة من الجلد الطبيعي',
      price: 89.99,
      original_price: 129.99,
      discount_percentage: 31,
      category: 'أزياء',
      brand: 'Fashion Plus',
      image_url: 'https://via.placeholder.com/300x300/dc3545/ffffff?text=Handbag',
      stock_quantity: 25,
      rating: 4.2,
      reviews_count: 67
    },
    {
      id: 3,
      name: 'ساعة ذكية رياضية',
      description: 'ساعة ذكية لتتبع اللياقة البدنية مع GPS',
      price: 199.99,
      original_price: 249.99,
      discount_percentage: 20,
      category: 'إلكترونيات',
      brand: 'FitTech',
      image_url: 'https://via.placeholder.com/300x300/28a745/ffffff?text=Smart+Watch',
      stock_quantity: 35,
      rating: 4.7,
      reviews_count: 203
    },
    {
      id: 4,
      name: 'كتاب تطوير الذات',
      description: 'دليل شامل لتطوير المهارات الشخصية والمهنية',
      price: 24.99,
      original_price: 34.99,
      discount_percentage: 29,
      category: 'كتب',
      brand: 'Knowledge Press',
      image_url: 'https://via.placeholder.com/300x300/ffc107/000000?text=Self+Development',
      stock_quantity: 100,
      rating: 4.3,
      reviews_count: 89
    },
    {
      id: 5,
      name: 'مجموعة أدوات المطبخ',
      description: 'مجموعة كاملة من أدوات الطبخ عالية الجودة',
      price: 149.99,
      original_price: 199.99,
      discount_percentage: 25,
      category: 'منزل ومطبخ',
      brand: 'ChefMaster',
      image_url: 'https://via.placeholder.com/300x300/6f42c1/ffffff?text=Kitchen+Set',
      stock_quantity: 20,
      rating: 4.6,
      reviews_count: 156
    },
    {
      id: 6,
      name: 'سماعات لاسلكية',
      description: 'سماعات بلوتوث عالية الجودة مع إلغاء الضوضاء',
      price: 79.99,
      original_price: 99.99,
      discount_percentage: 20,
      category: 'إلكترونيات',
      brand: 'AudioTech',
      image_url: 'https://via.placeholder.com/300x300/17a2b8/ffffff?text=Headphones',
      stock_quantity: 45,
      rating: 4.4,
      reviews_count: 92
    },
    {
      id: 7,
      name: 'حذاء رياضي للجري',
      description: 'حذاء رياضي مريح ومناسب للجري والتمارين',
      price: 119.99,
      original_price: 159.99,
      discount_percentage: 25,
      category: 'رياضة',
      brand: 'SportMax',
      image_url: 'https://via.placeholder.com/300x300/fd7e14/ffffff?text=Running+Shoes',
      stock_quantity: 30,
      rating: 4.1,
      reviews_count: 74
    },
    {
      id: 8,
      name: 'كريم مرطب للوجه',
      description: 'كريم مرطب طبيعي للعناية بالبشرة',
      price: 39.99,
      original_price: 49.99,
      discount_percentage: 20,
      category: 'جمال وعناية',
      brand: 'BeautyNature',
      image_url: 'https://via.placeholder.com/300x300/e83e8c/ffffff?text=Face+Cream',
      stock_quantity: 60,
      rating: 4.8,
      reviews_count: 145
    }
  ]

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true)
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // In a real app, you would fetch from the API:
        // const response = await fetch(apiEndpoint)
        // const data = await response.json()
        // setProducts(data.products || data)
        
        // For now, use sample data
        setProducts(sampleProducts.slice(0, limit))
      } catch (err) {
        setError('فشل في تحميل المنتجات')
        console.error('Error fetching products:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchProducts()
  }, [apiEndpoint, limit])

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        </div>
        <div className="flex justify-center items-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-blue-600" />
          <span className="mr-2 text-gray-600">جاري التحميل...</span>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        </div>
        <div className="text-center py-12">
          <p className="text-red-600 mb-4">{error}</p>
          <Button onClick={() => window.location.reload()}>
            إعادة المحاولة
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">اكتشف أفضل المنتجات بأسعار مميزة</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === limit && (
        <div className="text-center mt-8">
          <Button size="lg" variant="outline">
            عرض المزيد من المنتجات
          </Button>
        </div>
      )}
    </div>
  )
}

export default ProductGrid

