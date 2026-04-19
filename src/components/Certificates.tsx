// src/components/Certificates.tsx - Refined Elegant Certificates Section
import React, { useState } from 'react'

const certificates = [
  { 
    name: 'Master Nail Artist', 
    org: 'International Nail Academy (INA)', 
    img: '/src/assets/images/certificates/cert-nail-master.jpg', 
    year: '2022', 
    issuer: 'International Nail Academy',
    description: 'Comprehensive training in advanced nail techniques, artistry, and salon management.',
    credentialId: 'INA-MNA-2022-0842'
  },
  { 
    name: 'Advanced Gel Extension Pro', 
    org: 'Gel Pro Institute', 
    img: '/src/assets/images/certificates/cert-gel-ext.jpg', 
    year: '2023', 
    issuer: 'Gel Pro Institute',
    description: 'Mastery in gel extensions, sculpting, and long-lasting wear techniques.',
    credentialId: 'GPI-AXE-2023-1123'
  },
  { 
    name: 'Nail Artistry & 3D Design', 
    org: 'Korean Nail Art School', 
    img: '/src/assets/images/certificates/cert-artistry.jpg', 
    year: '2023', 
    issuer: 'Korean Nail Art School',
    description: 'Specialized training in intricate 3D designs, hand-painted florals, and Korean trends.',
    credentialId: 'KNAS-3D-2023-0567'
  }
]

const Certificates: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedCert, setSelectedCert] = useState<null | typeof certificates[0]>(null)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? certificates.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === certificates.length - 1 ? 0 : prev + 1))
  }

  const currentCert = certificates[currentIndex]

  return (
    <>
      <section id="certificates" className="py-28 px-6 relative overflow-hidden">
        {/* Soft background */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-rose-50/20 to-pink-50/30"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-40 left-0 w-80 h-80 bg-pink-100/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl"></div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          {/* Header - Elegant & Minimal */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs tracking-[0.3em] text-rose-400 uppercase font-light bg-white/40 backdrop-blur-sm px-4 py-1.5 rounded-full">
                QUALIFICATIONS
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
              <span className="font-playfair italic text-rose-400">Certifications</span>
              <span className="font-playfair font-light"> & Training</span>
            </h2>
            <div className="flex justify-center gap-2 mb-5">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
              <div className="w-2 h-2 rounded-full bg-rose-400/60"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
            </div>
            <p className="text-gray-500 max-w-2xl mx-auto font-light">
              Professional credentials that reflect my commitment to excellence
            </p>
          </div>

          {/* Main Carousel */}
          <div className="relative">
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/50 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Certificate Image Side */}
                <div className="relative bg-gradient-to-br from-rose-50 to-pink-50 flex items-center justify-center p-8 min-h-[350px]">
                  <div className="relative">
                    <div className="absolute -top-3 -left-3 w-16 h-16 rounded-full bg-rose-200/30 blur-xl"></div>
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden shadow-lg bg-white flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-6xl mb-2">🏅</div>
                        <div className="text-xs text-gray-400">{currentCert.name}</div>
                      </div>
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 rounded-full bg-pink-200/30 blur-xl"></div>
                  </div>
                </div>
                
                {/* Certificate Info Side */}
                <div className="p-8 md:p-10">
                  <div className="mb-4">
                    <div className="inline-block px-3 py-1 text-xs font-medium text-rose-500 bg-rose-100 rounded-full mb-3">
                      {currentCert.year}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-playfair text-gray-800 mb-2">
                      {currentCert.name}
                    </h3>
                    <p className="text-rose-500 text-sm font-medium mb-3">
                      {currentCert.issuer}
                    </p>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {currentCert.description}
                    </p>
                  </div>
                  
                  <div className="border-t border-rose-100 pt-4 mt-4">
                    <p className="text-xs text-gray-400">
                      Credential ID: <span className="font-mono">{currentCert.credentialId}</span>
                    </p>
                  </div>
                  
                  <button 
                    onClick={() => setSelectedCert(currentCert)}
                    className="mt-5 inline-flex items-center gap-2 text-rose-400 text-sm tracking-wide hover:text-rose-500 transition-all duration-300"
                  >
                    <span>View Certificate</span>
                    <span className="text-lg">→</span>
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

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {certificates.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  currentIndex === idx 
                    ? 'w-6 h-2 bg-rose-400' 
                    : 'w-2 h-2 bg-gray-300 hover:bg-rose-300'
                }`}
              />
            ))}
          </div>

          {/* Counter */}
          <div className="text-center mt-4">
            <span className="text-xs text-gray-400 font-light">
              {currentIndex + 1} of {certificates.length} Certifications
            </span>
          </div>

          {/* Additional Credentials */}
          <div className="mt-16">
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
            
            <div className="mt-8 text-center">
              <p className="text-gray-500 text-sm font-light">
                Continuously learning and evolving with advanced workshops & masterclasses
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-5">
                <span className="text-xs text-gray-400">✨ Russian Manicure Certified</span>
                <span className="text-xs text-gray-400">✨ PNA Certified Educator</span>
                <span className="text-xs text-gray-400">✨ Advanced Nail Art Workshop</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Modal - Full View */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-2xl w-full mx-4 bg-white rounded-2xl overflow-hidden shadow-2xl animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-gray-600 hover:text-rose-500 transition-colors duration-300 flex items-center justify-center text-lg shadow-sm"
              onClick={() => setSelectedCert(null)}
            >
              ✕
            </button>
            
            <div className="p-8">
              <div className="text-center mb-6">
                <div className="text-6xl mb-3">🏅</div>
                <h3 className="text-2xl font-playfair text-gray-800 mb-2">
                  {selectedCert.name}
                </h3>
                <p className="text-rose-500 text-sm font-medium">
                  {selectedCert.issuer}
                </p>
              </div>
              
              <div className="border-t border-rose-100 pt-5 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Year of Completion</span>
                  <span className="text-sm text-gray-600 font-medium">{selectedCert.year}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Credential ID</span>
                  <span className="text-xs font-mono text-gray-500">{selectedCert.credentialId}</span>
                </div>
                <div>
                  <span className="text-xs text-gray-400 block mb-1">Description</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{selectedCert.description}</p>
                </div>
              </div>
              
              <div className="mt-6 bg-rose-50 rounded-xl p-4 text-center">
                <p className="text-xs text-rose-600">
                  ✨ Verified Certification • Issued by {selectedCert.issuer}
                </p>
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

export default Certificates