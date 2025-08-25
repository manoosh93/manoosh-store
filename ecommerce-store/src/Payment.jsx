import React, { useState } from 'react';
import { FaCreditCard, FaPaypal, FaApplePay, FaGooglePay, FaUniversity, FaMoneyBillWave } from 'react-icons/fa';
import { SiVisa, SiMastercard, SiAmericanexpress } from 'react-icons/si';

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'إيطاليا'
  });

  const paymentMethods = [
    {
      id: 'card',
      name: 'بطاقة ائتمان/خصم',
      icon: <FaCreditCard className="text-2xl" />,
      description: 'Visa, Mastercard, American Express'
    },
    {
      id: 'paypal',
      name: 'PayPal',
      icon: <FaPaypal className="text-2xl text-blue-600" />,
      description: 'ادفع بأمان باستخدام PayPal'
    },
    {
      id: 'applepay',
      name: 'Apple Pay',
      icon: <FaApplePay className="text-2xl" />,
      description: 'دفع سريع وآمن'
    },
    {
      id: 'googlepay',
      name: 'Google Pay',
      icon: <FaGooglePay className="text-2xl" />,
      description: 'دفع بنقرة واحدة'
    },
    {
      id: 'bank',
      name: 'تحويل بنكي',
      icon: <FaUniversity className="text-2xl text-green-600" />,
      description: 'تحويل مباشر من البنك'
    },
    {
      id: 'cash',
      name: 'الدفع عند الاستلام',
      icon: <FaMoneyBillWave className="text-2xl text-orange-600" />,
      description: 'ادفع عند وصول الطلب'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`تم اختيار طريقة الدفع: ${paymentMethods.find(p => p.id === selectedPayment)?.name}`);
  };

  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">طرق الدفع</h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Payment Methods */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">اختر طريقة الدفع</h2>
                
                <div className="space-y-4">
                  {paymentMethods.map((method) => (
                    <div
                      key={method.id}
                      className={`border rounded-lg p-4 cursor-pointer transition-all ${
                        selectedPayment === method.id
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedPayment(method.id)}
                    >
                      <div className="flex items-center">
                        <div className="flex-shrink-0 ml-4">
                          {method.icon}
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold text-gray-800">{method.name}</h3>
                          <p className="text-sm text-gray-600">{method.description}</p>
                        </div>
                        <div className="flex-shrink-0">
                          <div className={`w-4 h-4 rounded-full border-2 ${
                            selectedPayment === method.id
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-300'
                          }`}>
                            {selectedPayment === method.id && (
                              <div className="w-2 h-2 bg-white rounded-full mx-auto mt-0.5"></div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Payment Form */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-6">تفاصيل الدفع</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  {selectedPayment === 'card' && (
                    <div className="space-y-4">
                      <div className="flex justify-center space-x-4 space-x-reverse mb-6">
                        <SiVisa className="text-4xl text-blue-600" />
                        <SiMastercard className="text-4xl text-red-500" />
                        <SiAmericanexpress className="text-4xl text-blue-500" />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          رقم البطاقة
                        </label>
                        <input
                          type="text"
                          name="cardNumber"
                          value={formatCardNumber(formData.cardNumber)}
                          onChange={(e) => handleInputChange({
                            target: { name: 'cardNumber', value: e.target.value }
                          })}
                          placeholder="1234 5678 9012 3456"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          maxLength="19"
                        />
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            تاريخ الانتهاء
                          </label>
                          <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            placeholder="MM/YY"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            maxLength="5"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            CVV
                          </label>
                          <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            placeholder="123"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            maxLength="4"
                          />
                        </div>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          اسم حامل البطاقة
                        </label>
                        <input
                          type="text"
                          name="cardName"
                          value={formData.cardName}
                          onChange={handleInputChange}
                          placeholder="الاسم كما يظهر على البطاقة"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                  )}

                  {selectedPayment === 'bank' && (
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                      <h3 className="font-semibold text-blue-800 mb-2">معلومات التحويل البنكي</h3>
                      <div className="text-sm text-blue-700 space-y-1">
                        <p><strong>اسم البنك:</strong> بنك إيطاليا الوطني</p>
                        <p><strong>رقم الحساب:</strong> IT60 X054 2811 1010 0000 0123 456</p>
                        <p><strong>SWIFT Code:</strong> BCITITMM</p>
                        <p><strong>اسم المستفيد:</strong> متجر شامل</p>
                      </div>
                    </div>
                  )}

                  {selectedPayment === 'cash' && (
                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                      <h3 className="font-semibold text-orange-800 mb-2">الدفع عند الاستلام</h3>
                      <p className="text-sm text-orange-700">
                        سيتم تحصيل قيمة الطلب عند التسليم. يرجى تجهيز المبلغ المطلوب نقداً.
                      </p>
                    </div>
                  )}

                  {(selectedPayment === 'paypal' || selectedPayment === 'applepay' || selectedPayment === 'googlepay') && (
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <h3 className="font-semibold text-green-800 mb-2">
                        {paymentMethods.find(p => p.id === selectedPayment)?.name}
                      </h3>
                      <p className="text-sm text-green-700">
                        سيتم توجيهك إلى صفحة الدفع الآمنة لإتمام العملية.
                      </p>
                    </div>
                  )}

                  {/* Contact Information */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">معلومات التواصل</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          البريد الإلكتروني
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          رقم الهاتف
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+39 123 456 7890"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Shipping Address */}
                  <div className="border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">عنوان الشحن</h3>
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          العنوان
                        </label>
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder="الشارع والرقم"
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            المدينة
                          </label>
                          <input
                            type="text"
                            name="city"
                            value={formData.city}
                            onChange={handleInputChange}
                            placeholder="ميلانو"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            البلد
                          </label>
                          <select
                            name="country"
                            value={formData.country}
                            onChange={handleInputChange}
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            required
                          >
                            <option value="إيطاليا">إيطاليا</option>
                            <option value="فرنسا">فرنسا</option>
                            <option value="ألمانيا">ألمانيا</option>
                            <option value="إسبانيا">إسبانيا</option>
                            <option value="هولندا">هولندا</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold text-lg"
                  >
                    إتمام الدفع
                  </button>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
                <h2 className="text-xl font-bold text-gray-800 mb-6">ملخص الطلب</h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">المجموع الفرعي:</span>
                    <span className="font-semibold">589.97 ريال</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الشحن:</span>
                    <span className="font-semibold text-green-600">مجاني</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">الضريبة:</span>
                    <span className="font-semibold">59.00 ريال</span>
                  </div>
                  <div className="border-t pt-4">
                    <div className="flex justify-between">
                      <span className="text-lg font-bold">المجموع:</span>
                      <span className="text-lg font-bold text-blue-600">648.97 ريال</span>
                    </div>
                  </div>
                </div>

                <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                  <div className="flex items-center">
                    <div className="text-green-600 ml-2">🔒</div>
                    <div>
                      <p className="text-sm font-semibold text-green-800">دفع آمن</p>
                      <p className="text-xs text-green-700">معلوماتك محمية بتشفير SSL</p>
                    </div>
                  </div>
                </div>

                <div className="text-xs text-gray-500 space-y-2">
                  <p>• شحن مجاني للطلبات أكثر من 200 ريال</p>
                  <p>• إمكانية الإرجاع خلال 30 يوم</p>
                  <p>• ضمان استرداد الأموال</p>
                  <p>• دعم عملاء 24/7</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;

