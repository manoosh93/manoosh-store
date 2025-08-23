import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaTrash, FaPlus, FaMinus, FaShoppingBag, FaArrowRight } from 'react-icons/fa';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Samsung Galaxy هاتف ذكي',
      brand: 'Samsung',
      price: 299.99,
      originalPrice: 399.99,
      quantity: 1,
      image: '/api/placeholder/150/150',
      inStock: true
    },
    {
      id: 2,
      name: 'حقيبة يد نسائية أنيقة',
      brand: 'Fashion Plus',
      price: 89.99,
      originalPrice: 129.99,
      quantity: 2,
      image: '/api/placeholder/150/150',
      inStock: true
    },
    {
      id: 3,
      name: 'ساعة ذكية رياضية',
      brand: 'FitTech',
      price: 199.99,
      originalPrice: 249.99,
      quantity: 1,
      image: '/api/placeholder/150/150',
      inStock: true
    }
  ]);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 200 ? 0 : 25;
  const tax = subtotal * 0.1;
  const total = subtotal + shipping + tax;

  const savings = cartItems.reduce((sum, item) => {
    if (item.originalPrice) {
      return sum + ((item.originalPrice - item.price) * item.quantity);
    }
    return sum;
  }, 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-md p-12">
              <FaShoppingBag className="text-6xl text-gray-300 mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-gray-800 mb-4">سلة التسوق فارغة</h2>
              <p className="text-gray-600 mb-8">لم تقم بإضافة أي منتجات إلى سلة التسوق بعد</p>
              <Link
                to="/"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center"
              >
                <FaArrowRight className="ml-2" />
                تسوق الآن
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">سلة التسوق</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-800">
                  المنتجات ({cartItems.length} منتج)
                </h2>
              </div>
              
              <div className="divide-y divide-gray-200">
                {cartItems.map((item) => (
                  <div key={item.id} className="p-6">
                    <div className="flex items-start space-x-4 space-x-reverse">
                      {/* Product Image */}
                      <Link to={`/product/${item.id}`} className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-24 h-24 object-cover rounded-lg hover:opacity-75 transition-opacity"
                        />
                      </Link>
                      
                      {/* Product Info */}
                      <div className="flex-1 min-w-0">
                        <Link to={`/product/${item.id}`} className="block">
                          <p className="text-sm text-blue-600 font-medium">{item.brand}</p>
                          <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition-colors">
                            {item.name}
                          </h3>
                        </Link>
                        
                        <div className="flex items-center space-x-2 space-x-reverse mt-2">
                          <span className="text-lg font-bold text-blue-600">
                            {item.price} ريال
                          </span>
                          {item.originalPrice && (
                            <span className="text-sm text-gray-500 line-through">
                              {item.originalPrice} ريال
                            </span>
                          )}
                        </div>
                        
                        <p className={`text-sm mt-1 ${item.inStock ? 'text-green-600' : 'text-red-600'}`}>
                          {item.inStock ? 'متوفر' : 'غير متوفر'}
                        </p>
                      </div>
                      
                      {/* Quantity Controls */}
                      <div className="flex flex-col items-center space-y-4">
                        <div className="flex items-center border border-gray-300 rounded-lg">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                            disabled={item.quantity <= 1}
                          >
                            <FaMinus className="text-sm" />
                          </button>
                          <span className="px-4 py-2 font-semibold">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-2 hover:bg-gray-50 transition-colors"
                          >
                            <FaPlus className="text-sm" />
                          </button>
                        </div>
                        
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 transition-colors p-2"
                          title="حذف المنتج"
                        >
                          <FaTrash />
                        </button>
                      </div>
                      
                      {/* Item Total */}
                      <div className="text-left">
                        <p className="text-lg font-bold text-gray-800">
                          {(item.price * item.quantity).toFixed(2)} ريال
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Continue Shopping */}
            <div className="mt-6">
              <Link
                to="/"
                className="text-blue-600 hover:text-blue-700 transition-colors inline-flex items-center"
              >
                <FaArrowRight className="ml-2" />
                متابعة التسوق
              </Link>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-800 mb-6">ملخص الطلب</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">المجموع الفرعي:</span>
                  <span className="font-semibold">{subtotal.toFixed(2)} ريال</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">الشحن:</span>
                  <span className={`font-semibold ${shipping === 0 ? 'text-green-600' : ''}`}>
                    {shipping === 0 ? 'مجاني' : `${shipping} ريال`}
                  </span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-600">الضريبة:</span>
                  <span className="font-semibold">{tax.toFixed(2)} ريال</span>
                </div>
                
                {savings > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>وفرت:</span>
                    <span className="font-semibold">-{savings.toFixed(2)} ريال</span>
                  </div>
                )}
                
                <div className="border-t pt-4">
                  <div className="flex justify-between">
                    <span className="text-lg font-bold">المجموع:</span>
                    <span className="text-lg font-bold text-blue-600">{total.toFixed(2)} ريال</span>
                  </div>
                </div>
              </div>
              
              {subtotal < 200 && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <p className="text-sm text-blue-700">
                    أضف منتجات بقيمة {(200 - subtotal).toFixed(2)} ريال للحصول على شحن مجاني!
                  </p>
                </div>
              )}
              
              <Link
                to="/payment"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-center block"
              >
                إتمام الطلب
              </Link>
              
              <div className="mt-6 text-xs text-gray-500 space-y-2">
                <div className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  <span>دفع آمن ومحمي</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  <span>إمكانية الإرجاع خلال 30 يوم</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  <span>ضمان استرداد الأموال</span>
                </div>
                <div className="flex items-center">
                  <span className="text-green-600 ml-2">✓</span>
                  <span>شحن سريع وموثوق</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

