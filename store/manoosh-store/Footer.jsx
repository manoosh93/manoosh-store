import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      {/* Newsletter Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold mb-4">اشترك في نشرتنا الإخبارية</h3>
          <p className="mb-6">احصل على أحدث العروض والمنتجات الجديدة</p>
          <div className="flex justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="أدخل بريدك الإلكتروني"
              className="flex-1 px-4 py-3 rounded-r-none rounded-l-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <button className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-l-none rounded-r-lg font-semibold transition-colors">
              اشتراك
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Store Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-blue-400">متجر شامل</h3>
            <p className="text-gray-300 mb-4">
              وجهتك الأولى للتسوق الإلكتروني، نقدم لك أفضل المنتجات بأسعار ممتازة وخدمة عملاء ممتازة.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              <a href="#" className="text-pink-400 hover:text-pink-300 transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-purple-400 hover:text-purple-300 transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="text-orange-400 hover:text-orange-300 transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-green-400 hover:text-green-300 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">من نحن</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">اتصل بنا</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الأسئلة الشائعة</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">سياسة الإرجاع</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">الشحن والتوصيل</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-lg font-semibold mb-4">الفئات</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">إلكترونيات</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">أزياء</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">منزل ومطبخ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">كتب</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">رياضة</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">تواصل معنا</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <span className="text-gray-400 ml-3">📧</span>
                <span className="text-gray-300">ey17ad@yahoo.com</span>
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 ml-3">📍</span>
                <span className="text-gray-300">إيطاليا، ميلانو</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 متجر شامل. جميع الحقوق محفوظة
            </p>
            <div className="flex space-x-6 space-x-reverse">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                سياسة الخصوصية
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                شروط الاستخدام
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                ملفات تعريف الارتباط
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

