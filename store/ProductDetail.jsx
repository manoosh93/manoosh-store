import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaStar, FaHeart, FaShare, FaShoppingCart, FaArrowRight } from 'react-icons/fa';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);

  // Sample product data - في التطبيق الحقيقي، ستأتي من API
  const products = {
    1: {
      id: 1,
      name: 'Samsung Galaxy هاتف ذكي',
      brand: 'Samsung',
      price: 299.99,
      originalPrice: 399.99,
      discount: 25,
      rating: 4.5,
      reviews: 128,
      inStock: 50,
      category: 'إلكترونيات',
      images: [
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600'
      ],
      description: 'هاتف Samsung Galaxy الذكي بأحدث التقنيات وأفضل الأداء. يتميز بشاشة عالية الدقة وكاميرا متطورة وبطارية طويلة المدى.',
      features: [
        'شاشة Super AMOLED بحجم 6.7 بوصة',
        'كاميرا ثلاثية 108 ميجابكسل',
        'معالج Snapdragon 8 Gen 2',
        'ذاكرة تخزين 256 جيجابايت',
        'ذاكرة عشوائية 12 جيجابايت',
        'بطارية 5000 مللي أمبير',
        'شحن سريع 45 واط',
        'مقاوم للماء IP68'
      ],
      specifications: {
        'نظام التشغيل': 'Android 14',
        'المعالج': 'Snapdragon 8 Gen 2',
        'الذاكرة': '12 جيجابايت RAM',
        'التخزين': '256 جيجابايت',
        'الشاشة': '6.7 بوصة Super AMOLED',
        'الكاميرا': '108 ميجابكسل ثلاثية',
        'البطارية': '5000 مللي أمبير',
        'الوزن': '195 جرام'
      }
    },
    2: {
      id: 2,
      name: 'حقيبة يد نسائية أنيقة',
      brand: 'Fashion Plus',
      price: 89.99,
      originalPrice: 129.99,
      discount: 31,
      rating: 4.2,
      reviews: 67,
      inStock: 25,
      category: 'أزياء',
      images: [
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600'
      ],
      description: 'حقيبة يد نسائية أنيقة مصنوعة من الجلد الطبيعي عالي الجودة. تتميز بتصميم عصري وعملي مع مساحات تخزين متعددة.',
      features: [
        'مصنوعة من الجلد الطبيعي',
        'تصميم أنيق وعصري',
        'مساحات تخزين متعددة',
        'حزام كتف قابل للتعديل',
        'إغلاق بسحاب آمن',
        'مقاومة للخدوش',
        'متوفرة بألوان متعددة'
      ],
      specifications: {
        'المادة': 'جلد طبيعي',
        'الأبعاد': '30 × 25 × 15 سم',
        'الوزن': '800 جرام',
        'اللون': 'بني، أسود، بيج',
        'النوع': 'حقيبة يد',
        'الإغلاق': 'سحاب',
        'الحزام': 'قابل للتعديل'
      }
    },
    3: {
      id: 3,
      name: 'ساعة ذكية رياضية',
      brand: 'FitTech',
      price: 199.99,
      originalPrice: 249.99,
      discount: 20,
      rating: 4.7,
      reviews: 203,
      inStock: 35,
      category: 'إلكترونيات',
      images: [
        '/api/placeholder/600/600',
        '/api/placeholder/600/600',
        '/api/placeholder/600/600'
      ],
      description: 'ساعة ذكية رياضية متطورة لتتبع اللياقة البدنية والصحة. تتميز بشاشة عالية الدقة ومقاومة للماء مع بطارية طويلة المدى.',
      features: [
        'شاشة AMOLED 1.4 بوصة',
        'مقاومة للماء 5ATM',
        'تتبع معدل ضربات القلب',
        'GPS مدمج',
        'أكثر من 100 وضع رياضي',
        'بطارية تدوم 14 يوم',
        'مكالمات بلوتوث',
        'تطبيقات ذكية'
      ],
      specifications: {
        'الشاشة': '1.4 بوصة AMOLED',
        'البطارية': '14 يوم',
        'المقاومة': '5ATM',
        'الاتصال': 'Bluetooth 5.0',
        'النظام': 'WearOS',
        'الوزن': '45 جرام',
        'المادة': 'ألومنيوم وسيليكون'
      }
    }
  };

  useEffect(() => {
    // محاكاة تحميل البيانات
    setTimeout(() => {
      const productData = products[id];
      if (productData) {
        setProduct(productData);
      }
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleAddToCart = () => {
    // إضافة المنتج للسلة
    alert(`تم إضافة ${quantity} من ${product.name} إلى السلة!`);
  };

  const handleBuyNow = () => {
    // الانتقال لصفحة الدفع
    alert('الانتقال إلى صفحة الدفع...');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">جاري تحميل تفاصيل المنتج...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">المنتج غير موجود</h2>
          <button
            onClick={() => navigate('/')}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            العودة للصفحة الرئيسية
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-2 space-x-reverse text-sm text-gray-600">
            <button onClick={() => navigate('/')} className="hover:text-blue-600">الرئيسية</button>
            <FaArrowRight className="text-gray-400" size={12} />
            <span className="hover:text-blue-600">{product.category}</span>
            <FaArrowRight className="text-gray-400" size={12} />
            <span className="text-gray-800">{product.name}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div>
            <div className="mb-4">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-96 object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="flex space-x-2 space-x-reverse">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                    selectedImage === index ? 'border-blue-600' : 'border-gray-200'
                  }`}
                >
                  <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-4">
              <span className="text-blue-600 text-sm font-medium">{product.brand}</span>
              <h1 className="text-3xl font-bold text-gray-800 mt-2">{product.name}</h1>
            </div>

            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'} />
                ))}
              </div>
              <span className="mr-2 text-gray-600">({product.reviews} تقييم)</span>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-4 space-x-reverse">
                <span className="text-3xl font-bold text-blue-600">{product.price} ريال</span>
                {product.originalPrice && (
                  <span className="text-xl text-gray-500 line-through">{product.originalPrice} ريال</span>
                )}
                {product.discount && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded text-sm">
                    خصم {product.discount}%
                  </span>
                )}
              </div>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                product.inStock > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
              }`}>
                {product.inStock > 0 ? `متوفر (${product.inStock} قطعة)` : 'غير متوفر'}
              </span>
            </div>

            {/* Quantity */}
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">الكمية:</label>
              <div className="flex items-center space-x-3 space-x-reverse">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  -
                </button>
                <span className="w-16 h-10 border border-gray-300 rounded-lg flex items-center justify-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(Math.min(product.inStock, quantity + 1))}
                  className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 space-x-reverse mb-6">
              <button
                onClick={handleAddToCart}
                disabled={product.inStock === 0}
                className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center"
              >
                <FaShoppingCart className="ml-2" />
                أضف للسلة
              </button>
              <button
                onClick={handleBuyNow}
                disabled={product.inStock === 0}
                className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
              >
                اشتري الآن
              </button>
            </div>

            {/* Additional Actions */}
            <div className="flex space-x-4 space-x-reverse mb-8">
              <button className="flex items-center text-gray-600 hover:text-red-500 transition-colors">
                <FaHeart className="ml-1" />
                أضف للمفضلة
              </button>
              <button className="flex items-center text-gray-600 hover:text-blue-500 transition-colors">
                <FaShare className="ml-1" />
                مشاركة
              </button>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">وصف المنتج</h3>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">المميزات</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full ml-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specifications */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">المواصفات التقنية</h3>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between py-2 border-b border-gray-100 last:border-b-0">
                    <span className="font-medium text-gray-700">{key}:</span>
                    <span className="text-gray-600">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

