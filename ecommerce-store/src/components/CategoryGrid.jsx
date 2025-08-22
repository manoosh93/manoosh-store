import { Smartphone, Shirt, Home, Book, Dumbbell, Sparkles, Gamepad2, Car } from 'lucide-react'

const CategoryGrid = () => {
  const categories = [
    {
      id: 1,
      name: 'إلكترونيات',
      icon: Smartphone,
      color: 'from-blue-500 to-blue-600',
      count: '2,500+ منتج'
    },
    {
      id: 2,
      name: 'أزياء',
      icon: Shirt,
      color: 'from-pink-500 to-rose-600',
      count: '5,200+ منتج'
    },
    {
      id: 3,
      name: 'منزل ومطبخ',
      icon: Home,
      color: 'from-green-500 to-emerald-600',
      count: '3,100+ منتج'
    },
    {
      id: 4,
      name: 'كتب',
      icon: Book,
      color: 'from-amber-500 to-orange-600',
      count: '1,800+ منتج'
    },
    {
      id: 5,
      name: 'رياضة',
      icon: Dumbbell,
      color: 'from-red-500 to-red-600',
      count: '900+ منتج'
    },
    {
      id: 6,
      name: 'جمال وعناية',
      icon: Sparkles,
      color: 'from-purple-500 to-purple-600',
      count: '1,200+ منتج'
    },
    {
      id: 7,
      name: 'ألعاب',
      icon: Gamepad2,
      color: 'from-indigo-500 to-indigo-600',
      count: '750+ منتج'
    },
    {
      id: 8,
      name: 'سيارات',
      icon: Car,
      color: 'from-gray-500 to-gray-600',
      count: '600+ منتج'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">تسوق حسب الفئة</h2>
        <p className="text-gray-600">اكتشف مجموعتنا الواسعة من المنتجات</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {categories.map((category) => {
          const IconComponent = category.icon
          return (
            <div
              key={category.id}
              className="group cursor-pointer transform transition-all duration-300 hover:scale-105"
            >
              <div className={`bg-gradient-to-br ${category.color} rounded-xl p-6 text-white shadow-lg hover:shadow-xl transition-shadow duration-300`}>
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-white/20 rounded-full group-hover:bg-white/30 transition-colors duration-200">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-sm opacity-90">{category.count}</p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CategoryGrid

