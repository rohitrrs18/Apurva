// src/App.tsx (Updated to use Home page)
import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ThreeBackground from './components/ThreeBackground'
import Home from './pages/Home'

function App() {
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
    
    // Add smooth scroll behavior to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        e.preventDefault()
        const href = this.getAttribute('href')
        if (href && href !== '#') {
          const element = document.querySelector(href)
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
          }
        }
      })
    })
  }, [])
  
  if (!mounted) return null
  
  return (
    <div className="relative min-h-screen">
      <ThreeBackground />
      <div className="relative z-10">
        <Navbar />
        <main>
          <Home />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App