import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <HowItWorks />
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  )
}

export default App