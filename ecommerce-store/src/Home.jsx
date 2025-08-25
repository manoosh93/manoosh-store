import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const Home = () => {
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Sample data - في التطبيق الحقيقي، ستأتي من API
  const sampleProducts = [
    {
      id: 1,
      name: 'Samsung Galaxy هاتف ذكي',
      brand: 'Samsung',
      price: 299.99,
      originalPrice: 399.99,
      discount: 25,
      rating: 4.5,
      reviews: 128,
      stock: 50,
      image: '/api/placeholder/300/300'
    },
    {
      id: 2,
      name: 'حقيبة يد نسائية أنيقة',
      brand: 'Fashion Plus',
      price: 89.99,
      originalPrice: 129.99,
      discount: 31,
      rating: 4.2,
      reviews: 67,
      stock: 25,
      image: '/api/placeholder/300/300'
    },
    {
      id: 3,
      name: 'ساعة ذكية رياضية',
      brand: 'FitTech',
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
      rating: 4.7,
      reviews: 203,
      stock: 35,
      image: '/api/placeholder/300/300'
    },
    {
      id: 4,
      name: 'كتاب تطوير الذات',
      brand: 'Knowledge Press',
      price: 24.99,
      originalPrice: 34.99,
      discount: 29,
      rating: 4.3,
      reviews: 89,
      stock: 100,
      image: '/api/placeholder/300/300'
    },
    {
      id: 5,
      name: 'مجموعة أدوات المطبخ',
      brand: 'ChefMaster',
      price: 149.99,
      originalPrice: 199.99,
      discount: 25,
      rating: 4.6,
      reviews: 156,
      stock: 20,
      image: '/api/placeholder/300/300'
    },
    {
      id: 6,
      name: 'سماعات لاسلكية',
      brand: 'AudioTech',
      price: 79.99,
      originalPrice: 99.99,
      discount: 20,
      rating: 4.4,
      reviews: 92,
      stock: 45,
      image: '/api/placeholder/300/300'
    }
  ];

  const sampleCategories = [
    { name: 'إلكترونيات', count: '2,500+', icon: '📱', color: 'bg-blue-500' },
    { name: 'أزياء', count: '5,200+', icon: '👗', color: 'bg-pink-500' },
    { name: 'منزل ومطبخ', count: '3,100+', icon: '🏠', color: 'bg-green-500' },
    { name: 'كتب', count: '1,800+', icon: '📚', color: 'bg-orange-500' },
    { name: 'رياضة', count: '900+', icon: '⚽', color: 'bg-red-500' },
    { name: 'جمال وعناية', count: '1,200+', icon: '💄', color: 'bg-purple-500' },
    { name: 'ألعاب', count: '750+', icon: '🎮', color: 'bg-blue-600' },
    { name: 'سيارات', count: '600+', icon: '🚗', color: 'bg-gray-600' }
  ];

  const heroSlides = [
    {
      title: 'عروض خاصة على الإلكترونيات',
      subtitle: 'خصم يصل إلى 70% على أحدث الأجهزة',
      image: '/api/placeholder/800/400',
      cta: 'تسوق الآن'
    },
    {
      title: 'أزياء العصر الجديد',
      subtitle: 'اكتشف أحدث صيحات الموضة',
      image: '/api/placeholder/800/400',
      cta: 'اكتشف المزيد'
    },
    {
      title: 'منتجات المنزل والمطبخ',
      subtitle: 'كل ما تحتاجه لمنزل مثالي',
      image: '/api/placeholder/800/400',
      cta: 'تسوق الآن'
    }
  ];

  useEffect(() => {
    setFeaturedProducts(sampleProducts);
    setCategories(sampleCategories);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-blue-600 to-purple-600 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroSlides[currentSlide].image}
            alt={heroSlides[currentSlide].title}
            className="w-full h-full object-cover opacity-30"
          />
        </div>
        
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {heroSlides[currentSlide].title}
            </h1>
            <p className="text-xl mb-8">
              {heroSlides[currentSlide].subtitle}
            </p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              {heroSlides[currentSlide].cta}
            </button>
          </div>
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all"
        >
          <FaArrowRight />
        </button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">تسوق حسب الفئة</h2>
            <p className="text-gray-600">اكتشف مجموعتنا الواسعة من المنتجات</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <div
                key={index}
                className={`${category.color} rounded-lg p-6 text-white text-center hover:scale-105 transition-transform cursor-pointer`}
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm opacity-90">{category.count} منتج</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">المنتجات المميزة</h2>
            <p className="text-gray-600">اكتشف أفضل المنتجات بأسعار مميزة</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
              عرض المزيد من المنتجات
            </button>
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-16 bg-gradient-to-r from-orange-400 to-red-500">
        <div className="container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl font-bold mb-4">عروض محدودة الوقت!</h2>
          <p className="text-xl mb-8">خصومات تصل إلى 50% على منتجات مختارة</p>
          <button className="bg-white text-orange-500 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            تسوق العروض
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;

