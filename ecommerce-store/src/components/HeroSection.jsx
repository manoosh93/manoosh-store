import { useState, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      title: 'عروض خاصة على الإلكترونيات',
      subtitle: 'خصم يصل إلى 70% على أحدث الأجهزة',
      image: 'https://via.placeholder.com/1200x400/3b82f6/ffffff?text=عروض+الإلكترونيات',
      cta: 'تسوق الآن',
      bgColor: 'from-blue-600 to-blue-800'
    },
    {
      id: 2,
      title: 'أزياء عصرية بأسعار مميزة',
      subtitle: 'اكتشف أحدث صيحات الموضة',
      image: 'https://via.placeholder.com/1200x400/ec4899/ffffff?text=أزياء+عصرية',
      cta: 'استكشف المجموعة',
      bgColor: 'from-pink-500 to-purple-600'
    },
    {
      id: 3,
      title: 'منتجات المنزل والمطبخ',
      subtitle: 'كل ما تحتاجه لمنزل مثالي',
      image: 'https://via.placeholder.com/1200x400/10b981/ffffff?text=منتجات+المنزل',
      cta: 'اكتشف المزيد',
      bgColor: 'from-green-500 to-emerald-600'
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [slides.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  return (
    <div className="relative h-96 md:h-[500px] overflow-hidden rounded-lg mx-4 my-6">
      {/* Slides */}
      <div className="relative h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
              index === currentSlide ? 'translate-x-0' : 
              index < currentSlide ? '-translate-x-full' : 'translate-x-full'
            }`}
          >
            <div className={`h-full bg-gradient-to-r ${slide.bgColor} flex items-center justify-between px-8 md:px-16`}>
              {/* Content */}
              <div className="text-white max-w-lg">
                <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in-up">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-6 opacity-90 animate-fade-in-up animation-delay-200">
                  {slide.subtitle}
                </p>
                <Button 
                  size="lg" 
                  className="bg-white text-gray-800 hover:bg-gray-100 font-semibold px-8 py-3 animate-fade-in-up animation-delay-400"
                >
                  {slide.cta}
                </Button>
              </div>

              {/* Image */}
              <div className="hidden md:block">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="max-w-md h-auto rounded-lg shadow-2xl animate-fade-in-right"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroSection

