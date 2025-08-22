import Header from './components/Header'
import HeroSection from './components/HeroSection'
import CategoryGrid from './components/CategoryGrid'
import ProductGrid from './components/ProductGrid'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main>
        <HeroSection />
        
        <CategoryGrid />
        
        <div className="bg-white">
          <ProductGrid 
            title="المنتجات المميزة" 
            apiEndpoint="/api/featured-products"
            limit={8}
          />
        </div>
        
        <div className="bg-gray-50">
          <ProductGrid 
            title="عروض اليوم" 
            apiEndpoint="/api/deals"
            limit={8}
          />
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default App
