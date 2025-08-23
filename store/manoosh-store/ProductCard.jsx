import React from 'react';
import { Link } from 'react-router-dom';
import { FaStar, FaHeart, FaEye } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const handleAddToCart = (e) => {
    e.preventDefault(); // منع التنقل عند الضغط على زر السلة
    e.stopPropagation();
    // إضافة المنتج للسلة
    alert(`تم إضافة ${product.name} إلى السلة!`);
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    alert(`تم إضافة ${product.name} إلى المفضلة!`);
  };

  return (
    <Link to={`/product/${product.id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group-hover:scale-105">
        {/* Product Image */}
        <div className="relative overflow-hidden">
          <img
            src={product.image || '/api/placeholder/300/300'}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
          />
          
          {/* Discount Badge */}
          {product.discount && (
            <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">
              -{product.discount}%
            </div>
          )}

          {/* Quick Actions */}
          <div className="absolute top-2 left-2 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleAddToWishlist}
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-red-50 hover:text-red-500 transition-colors"
              title="أضف للمفضلة"
            >
              <FaHeart size={14} />
            </button>
            <button
              className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md hover:bg-blue-50 hover:text-blue-500 transition-colors"
              title="عرض سريع"
            >
              <FaEye size={14} />
            </button>
          </div>

          {/* Stock Status */}
          {product.stock === 0 && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-bold">غير متوفر</span>
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          {/* Brand */}
          {product.brand && (
            <p className="text-sm text-blue-600 font-medium mb-1">{product.brand}</p>
          )}

          {/* Product Name */}
          <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
            {product.name}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  size={12}
                  className={i < Math.floor(product.rating || 4) ? 'text-yellow-400' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500 mr-1">
              ({product.reviews || Math.floor(Math.random() * 200) + 50})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-2 space-x-reverse">
              <span className="text-lg font-bold text-blue-600">
                {product.price} ريال
              </span>
              {product.originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  {product.originalPrice} ريال
                </span>
              )}
            </div>
          </div>

          {/* Stock Info */}
          <div className="mb-3">
            <span className="text-xs text-green-600">
              متوفر ({product.stock || Math.floor(Math.random() * 50) + 10} قطعة)
            </span>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors font-medium"
          >
            {product.stock === 0 ? 'غير متوفر' : 'أضف للسلة'}
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

