// src/components/Navbar.tsx - Enhanced version with Elegant Calligraphy
import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navItems = ['Home', 'Work', 'About', 'Certificates', 'Contact']
  
  const scrollTo = (id: string) => {
    const element = document.getElementById(id.toLowerCase())
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' })
      setMobileMenuOpen(false)
    }
  }
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      // Update active section
      const sections = navItems.map(item => item.toLowerCase())
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])
  
  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/95 shadow-sm py-3 backdrop-blur-md' 
          : 'bg-white/80 backdrop-blur-md py-5'
      }`}>
        <div className="max-w-7xl mx-auto px-6 md:px-10 flex justify-between items-center">
          {/* Logo with Elegant Script Style */}
          <div 
            className="cursor-pointer group"
            onClick={() => scrollTo('home')}
          >
            <h1 className="font-script text-2xl md:text-3xl lg:text-4xl bg-gradient-to-r from-rose-400 via-pink-500 to-rose-400 bg-clip-text text-transparent hover:from-rose-500 hover:via-pink-600 hover:to-rose-500 transition-all duration-300 tracking-wide">
              Apurva Thorat
            </h1>
            <p className="text-[10px] md:text-[11px] tracking-[0.3em] text-gray-400 font-light uppercase mt-1">
              NAIL ARTIST
            </p>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-10">
            {navItems.map(item => (
              <button 
                key={item} 
                onClick={() => scrollTo(item)} 
                className={`relative text-sm tracking-wide transition-all duration-300 pb-1 ${
                  activeSection === item.toLowerCase() 
                    ? 'text-rose-500 font-medium' 
                    : 'text-gray-500 hover:text-rose-400'
                }`}
              >
                {item}
                {/* Active indicator */}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-rose-400 to-pink-500 rounded-full animate-fade-in" />
                )}
              </button>
            ))}
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 rounded-full hover:bg-rose-50 transition-colors duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6 text-rose-500" />
            ) : (
              <Menu className="w-6 h-6 text-gray-600 hover:text-rose-500 transition-colors" />
            )}
          </button>
        </div>
      </nav>
      
      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 bg-white/98 backdrop-blur-xl z-40 transition-all duration-500 md:hidden ${
          mobileMenuOpen 
            ? 'opacity-100 visible' 
            : 'opacity-0 invisible'
        }`}
        style={{ top: scrolled ? '60px' : '72px' }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-8 px-6">
          {navItems.map((item, index) => (
            <button 
              key={item} 
              onClick={() => scrollTo(item)} 
              className={`text-2xl font-elegant tracking-wide transition-all duration-300 transform ${
                activeSection === item.toLowerCase() 
                  ? 'text-rose-500 font-semibold scale-105' 
                  : 'text-gray-600 hover:text-rose-400'
              }`}
              style={{
                animation: mobileMenuOpen 
                  ? `slideInFromRight 0.3s ease-out ${index * 0.05}s both` 
                  : 'none'
              }}
            >
              {item}
            </button>
          ))}
          
          {/* Decorative Line */}
          <div className="w-12 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent mt-8" />
          
          {/* Social Links */}
          <div className="text-center space-y-3 mt-4">
            <p className="text-sm text-gray-400 font-light tracking-wide">FOLLOW ME</p>
            <div className="flex gap-8 justify-center">
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors text-sm">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors text-sm">Pinterest</a>
              <a href="#" className="text-gray-400 hover:text-rose-500 transition-colors text-sm">Facebook</a>
            </div>
          </div>
        </div>
      </div>
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap');
        
        .font-script {
          font-family: 'Playfair Display', 'Georgia', 'Times New Roman', serif;
          font-weight: 500;
          font-style: italic;
          letter-spacing: -0.02em;
        }
        
        @keyframes slideInFromRight {
          from {
            opacity: 0;
            transform: translateX(30px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
            width: 0;
          }
          to {
            opacity: 1;
            width: 100%;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default Navbar