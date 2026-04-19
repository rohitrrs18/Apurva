// src/components/GalleryGrid.tsx - Elegant Carousel with Single Image View
import React, { useState } from 'react'

const nailImages = [
  { src: '/src/assets/images/nails/apu1.jpg', alt: 'Floral Nail Art', cat: 'Floral', price: '₹4,500+', description: 'Delicate hand-painted florals perfect for spring and summer occasions.' },
  { src: '/src/assets/images/nails/apu2.jpg', alt: 'Chrome Glam', cat: 'Chrome', price: '₹5,500+', description: 'Mirror-like chrome finish that catches every ray of light.' },
  { src: '/src/assets/images/nails/pastel-dream.jpg', alt: 'Pastel Dream', cat: 'Pastel', price: '₹4,000+', description: 'Soft pastel gradients for an ethereal, dreamy look.' },
  { src: '/src/assets/images/nails/french-twist.jpg', alt: 'French Twist', cat: 'French', price: '₹5,000+', description: 'Modern take on the classic French manicure.' },
  { src: '/src/assets/images/nails/gemstone-art.jpg', alt: 'Gemstone Art', cat: 'Luxury', price: '₹7,500+', description: 'Luxurious gemstone embellishments for special occasions.' },
  { src: '/src/assets/images/nails/ombre-gold.jpg', alt: 'Ombre Gold', cat: 'Ombre', price: '₹6,000+', description: 'Stunning ombre fade with golden accents.' },
  { src: '/src/assets/images/nails/abstract-neon.jpg', alt: 'Abstract Neon', cat: 'Abstract', price: '₹6,500+', description: 'Bold abstract designs for the adventurous soul.' },
  { src: '/src/assets/images/nails/bridal-pearl.jpg', alt: 'Bridal Pearl', cat: 'Bridal', price: '₹8,000+', description: 'Elegant pearl-adorned nails for your special day.' },
]

const GalleryGrid: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedImage, setSelectedImage] = useState<null | typeof nailImages[0]>(null)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? nailImages.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === nailImages.length - 1 ? 0 : prev + 1))
  }

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const currentImage = nailImages[currentIndex]

  return (
    <>
      <section id="gallery" className="py-28 px-6 relative overflow-hidden">
        {/* Soft background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-rose-50/20 to-pink-50/30"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-20 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Header - Elegant & Minimal */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs tracking-[0.3em] text-rose-400 uppercase font-light bg-white/40 backdrop-blur-sm px-4 py-1.5 rounded-full">
                OUR PORTFOLIO
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
              <span className="font-playfair italic text-rose-400">Nail</span>
              <span className="font-playfair font-light"> Gallery</span>
            </h2>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
              <div className="w-2 h-2 rounded-full bg-rose-400/60"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto font-light">
              Templates • Themes • Custom Extensions
            </p>
          </div>

          {/* Main Carousel */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image Side */}
                <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center p-8 min-h-[400px]">
                  <img 
                    src={currentImage.src} 
                    alt={currentImage.alt} 
                    className="max-w-full max-h-[450px] object-contain rounded-lg shadow-md"
                  />
                </div>
                
                {/* Info Side */}
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-rose-500 bg-rose-100 rounded-full">
                        {currentImage.cat}
                      </span>
                      <span className="text-2xl font-light text-gray-800">
                        {currentImage.price}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-playfair text-gray-800 mb-4">
                      {currentImage.alt}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {currentImage.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-400 text-xs">✓</span>
                        <span>Hand-painted with precision</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-400 text-xs">✓</span>
                        <span>Premium gel & acrylic materials</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-400 text-xs">✓</span>
                        <span>Long-lasting finish</span>
                      </div>
                    </div>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedImage(currentImage)}
                    className="w-full py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-medium text-sm tracking-wide hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300"
                  >
                    Book This Design →
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={goToPrevious}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-600 hover:text-rose-500 hover:bg-white transition-all duration-300 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button 
              onClick={goToNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm shadow-md flex items-center justify-center text-gray-600 hover:text-rose-500 hover:bg-white transition-all duration-300 z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Thumbnail Navigation */}
          <div className="mt-8 flex justify-center gap-3 overflow-x-auto pb-2 px-4">
            {nailImages.map((img, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`relative flex-shrink-0 transition-all duration-300 ${
                  currentIndex === idx 
                    ? 'ring-2 ring-rose-400 scale-105' 
                    : 'opacity-60 hover:opacity-100'
                }`}
              >
                <div className="w-16 h-16 rounded-lg overflow-hidden bg-rose-50">
                  <img 
                    src={img.src} 
                    alt={img.alt} 
                    className="w-full h-full object-cover"
                  />
                </div>
              </button>
            ))}
          </div>

          {/* Counter Indicator */}
          <div className="text-center mt-6">
            <span className="text-sm text-gray-400 font-light">
              {currentIndex + 1} / {nailImages.length}
            </span>
          </div>

          {/* Custom Design CTA - Elegant */}
          <div className="mt-16 text-center">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-rose-100"></div>
              </div>
              <div className="relative flex justify-center">
                <span className="bg-gradient-to-br from-white via-rose-50/20 to-pink-50/30 px-6 text-sm text-gray-400">
                  ✦
                </span>
              </div>
            </div>
            
            <div className="mt-10">
              <p className="text-gray-500 font-light mb-4">Looking for something unique?</p>
              <button className="inline-flex items-center gap-2 text-rose-400 text-sm tracking-wide hover:text-rose-500 transition-all duration-300 border-b border-rose-200 hover:border-rose-400 pb-1">
                <span>Request Custom Design</span>
                <span className="text-lg">→</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal - Full Screen View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md"
          onClick={() => setSelectedImage(null)}
        >
          <div 
            className="relative max-w-5xl w-full mx-4 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute -top-12 right-0 w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm text-white hover:text-rose-400 transition-colors duration-300 flex items-center justify-center text-xl"
              onClick={() => setSelectedImage(null)}
            >
              ✕
            </button>
            
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div className="grid md:grid-cols-2">
                <div className="bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center p-8 min-h-[400px]">
                  <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt} 
                    className="w-full h-auto max-h-[60vh] object-contain rounded-lg"
                  />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex justify-between items-start mb-4">
                      <span className="inline-block px-3 py-1 text-xs font-medium text-rose-500 bg-rose-100 rounded-full">
                        {selectedImage.cat}
                      </span>
                      <span className="text-2xl font-light text-gray-800">
                        {selectedImage.price}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-playfair text-gray-800 mb-4">
                      {selectedImage.alt}
                    </h3>
                    
                    <p className="text-gray-500 text-sm leading-relaxed mb-6">
                      {selectedImage.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-400 text-xs">✓</span>
                        <span>Hand-painted with precision</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-400 text-xs">✓</span>
                        <span>Premium gel & acrylic materials</span>
                      </div>
                      <div className="flex items-center gap-3 text-sm text-gray-500">
                        <span className="w-5 h-5 rounded-full bg-rose-100 flex items-center justify-center text-rose-400 text-xs">✓</span>
                        <span>Long-lasting finish</span>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full py-3 bg-gradient-to-r from-rose-400 to-pink-400 text-white rounded-full font-medium text-sm tracking-wide hover:shadow-lg transform hover:scale-[1.02] transition-all duration-300">
                    Book This Design →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </>
  )
}

export default GalleryGrid