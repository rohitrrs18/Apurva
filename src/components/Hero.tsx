// src/components/Hero.tsx - Modern & Graceful Female-Oriented Design with Typewriter Animation & Background Image
import React, { useState, useEffect } from 'react'

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)
  const [loopNum, setLoopNum] = useState(0)
  
  const words = ['Apurva', 'Artist', 'Creator']
  const typingSpeed = 150
  const deletingSpeed = 100
  const pauseTime = 2000

  useEffect(() => {
    const currentWord = words[loopNum % words.length]
    
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (displayText.length < currentWord.length) {
          setDisplayText(currentWord.substring(0, displayText.length + 1))
        } else {
          // Pause before deleting
          setTimeout(() => setIsDeleting(true), pauseTime)
        }
      } else {
        // Deleting
        if (displayText.length > 0) {
          setDisplayText(currentWord.substring(0, displayText.length - 1))
        } else {
          setIsDeleting(false)
          setLoopNum(loopNum + 1)
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed)
    
    return () => clearTimeout(timer)
  }, [displayText, isDeleting, loopNum])

  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden"
      style={{
        // Background image with overlay transparency for readability
        backgroundImage: 'url("/apu.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
        position: 'relative',
      }}
    >
      {/* Dark/Light Overlay for transparency and readability - semi-transparent soft pink overlay */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, rgba(255, 245, 248, 0.85) 0%, rgba(255, 240, 245, 0.8) 50%, rgba(255, 245, 250, 0.85) 100%)',
          backdropFilter: 'blur(1px)',
        }}
      ></div>
      
      {/* Abstract Soft Glow Elements for femininity */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-rose-200/30 rounded-full blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-amber-50/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Content - Enhanced typography & spacing */}
          <div className="order-2 md:order-1 backdrop-blur-sm bg-white/20 rounded-3xl p-6 md:p-8 shadow-sm">
            <div className="inline-block mb-6">
              <span className="text-sm tracking-[0.3em] text-rose-600 uppercase font-medium bg-white/70 backdrop-blur-sm px-5 py-2 rounded-full shadow-sm border border-rose-100/80">
                NAIL ARTIST & DESIGNER
              </span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl text-gray-800 leading-[1.15] tracking-tight">
              <span className="block font-playfair font-medium bg-gradient-to-r from-rose-700 to-rose-500 bg-clip-text text-transparent">I'm</span>
              <span className="inline-block mt-2">
                <span className="bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 bg-clip-text text-transparent font-semibold">
                  {displayText}
                </span>
                <span className="text-rose-500 animate-pulse font-light">|</span>
              </span>
            </h1>
            
            <p className="text-lg text-gray-700 mt-6 leading-relaxed max-w-md font-light bg-white/40 backdrop-blur-sm rounded-xl p-4">
              Creating bespoke nail extensions and artistic designs with an eye for elegance, 
              precision, and timeless beauty. Your nails, reimagined as art.
            </p>
            
            <div className="flex flex-wrap gap-5 mt-8">
              <button 
                onClick={() => document.getElementById('work')?.scrollIntoView({behavior:'smooth'})} 
                className="group relative overflow-hidden bg-gradient-to-r from-rose-500 to-pink-500 text-white px-9 py-4 text-sm tracking-wider transition-all duration-300 shadow-md hover:shadow-xl rounded-full"
              >
                <span className="relative z-10 font-medium flex items-center gap-2">
                  VIEW PORTFOLIO <i className="fas fa-arrow-right text-xs group-hover:translate-x-1 transition-transform"></i>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-rose-600 to-pink-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 rounded-full"></div>
              </button>
              
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} 
                className="border-2 border-rose-300 text-gray-700 px-9 py-4 text-sm tracking-wider hover:border-rose-500 hover:text-rose-600 transition-all duration-300 bg-white/70 backdrop-blur-sm rounded-full font-medium flex items-center gap-2"
              >
                INQUIRE <i className="fas fa-calendar-alt text-xs"></i>
              </button>
            </div>

            {/* Social Proof - refined cards with transparency */}
            <div className="flex gap-12 mt-12 pt-6 border-t border-rose-200/60">
              <div className="group transition-all hover:translate-y-[-2px]">
                <div className="text-3xl font-light text-gray-800 group-hover:text-rose-600 transition-colors">500+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 flex items-center gap-1"><i className="fas fa-heart text-rose-400 text-[10px]"></i> Happy Clients</div>
              </div>
              <div className="group transition-all hover:translate-y-[-2px]">
                <div className="text-3xl font-light text-gray-800 group-hover:text-rose-600 transition-colors">8+</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 flex items-center gap-1"><i className="fas fa-star text-amber-400 text-[10px]"></i> Years Experience</div>
              </div>
              <div className="group transition-all hover:translate-y-[-2px]">
                <div className="text-3xl font-light text-gray-800 group-hover:text-rose-600 transition-colors">100%</div>
                <div className="text-xs text-gray-500 uppercase tracking-wider mt-1 flex items-center gap-1"><i className="fas fa-palette text-rose-400 text-[10px]"></i> Custom Designs</div>
              </div>
            </div>
          </div>

          {/* Right Image - Elevated with soft shadows & delicate frame, with transparency effect */}
          <div className="order-1 md:order-2 relative group">
            {/* decorative soft rings */}
            <div className="absolute -top-6 -right-6 w-36 h-36 rounded-full border border-rose-300/40 opacity-70 group-hover:scale-105 transition duration-700"></div>
            <div className="absolute -bottom-6 -left-6 w-36 h-36 rounded-full border border-rose-300/40 opacity-70 group-hover:scale-105 transition duration-700"></div>
            
            {/* Main Image Container with delicate double-border effect & slight transparency on container */}
            <div className="relative rounded-2xl shadow-2xl p-[1.5px] bg-gradient-to-tr from-rose-300 via-pink-200 to-white/80 backdrop-blur-sm">
              <div className="aspect-[4/5] bg-gradient-to-br from-rose-100/80 to-pink-50/80 rounded-2xl overflow-hidden shadow-inner">
                <img 
                  src="/a1.jpg" 
                  alt="Apurva Thorat - Nail Artist" 
                  className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-105 group-hover:brightness-[1.02]"
                />
              </div>
              {/* Soft vignette overlay for elegance */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/8 via-transparent to-transparent pointer-events-none rounded-2xl"></div>
            </div>

            {/* Floating Elements - Refined modern cards with transparency */}
            <div className="absolute -bottom-5 -right-4 bg-white/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-lg border border-rose-200/60 flex items-center gap-3 transition-transform hover:scale-105">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shadow-sm"></div>
              <span className="text-sm text-gray-700 font-medium tracking-wide">Accepting bookings</span>
            </div>

            <div className="absolute -top-5 -left-4 bg-white/90 backdrop-blur-md rounded-xl px-5 py-3 shadow-lg border border-rose-200/60 flex items-center gap-2 transition-transform hover:scale-105">
              <span className="text-lg drop-shadow-sm">💅🏼</span>
              <span className="text-sm text-gray-700 font-medium tracking-wide">Custom designs</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - minimal & graceful */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition z-10">
        <span className="text-[11px] text-gray-500 uppercase tracking-[0.2em] font-light">Scroll</span>
        <div className="w-5 h-9 border border-rose-400/50 rounded-full flex justify-center">
          <div className="w-1 h-2 bg-rose-500 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      <style>{`
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) translateX(0px); }
          50% { transform: translateY(-20px) translateX(10px); }
        }
        .animate-float-slow {
          animation: float-slow 12s ease-in-out infinite;
        }
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  )
}

export default Hero