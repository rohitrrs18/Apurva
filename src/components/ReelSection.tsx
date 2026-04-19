// src/components/ReelSection.tsx - Elegant Video Reel Section
import React, { useState, useRef } from 'react'

interface Reel {
  id: number
  src: string
  title: string
  description: string
  duration: string
  views: string
}

const reels: Reel[] = [
  {
    id: 1,
    src: "/apu1.mp4",
    title: 'Kokan Theme 🌸',
    description: 'Intricate hand-sculpted flowers with gel',
    duration: '0:45',
    views: '12.5K views'
  },
  {
    id: 2,
    src: '/src/assets/videos/reel2.mp4',
    title: 'Chrome Mirror Finish ✨',
    description: 'Ultra-shiny chrome transformation',
    duration: '0:32',
    views: '8.2K views'
  },
  {
    id: 3,
    src: '/src/assets/videos/reel3.mp4',
    title: 'Bridal Pearl Elegance 💍',
    description: 'Wedding-ready pearl embellishments',
    duration: '0:58',
    views: '15.3K views'
  },
  {
    id: 4,
    src: '/src/assets/videos/reel4.mp4',
    title: 'French Twist Modern 💅',
    description: 'Contemporary take on classic French',
    duration: '0:28',
    views: '6.7K views'
  }
]

const ReelSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? reels.length - 1 : prev - 1))
    setIsPlaying(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === reels.length - 1 ? 0 : prev + 1))
    setIsPlaying(false)
  }

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const currentReel = reels[currentIndex]

  return (
    <section id="reels" className="py-28 px-6 relative overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-rose-50/20 to-pink-50/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header - Elegant & Minimal */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-xs tracking-[0.3em] text-rose-400 uppercase font-light bg-white/40 backdrop-blur-sm px-4 py-1.5 rounded-full">
              WATCH & INSPIRE
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
            <span className="font-playfair italic text-rose-400">Nail Art</span>
            <span className="font-playfair font-light"> Reels</span>
          </h2>
          <div className="flex justify-center gap-2 mb-5">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
            <div className="w-2 h-2 rounded-full bg-rose-400/60"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            Watch my creative process unfold — from start to stunning finish
          </p>
        </div>

        {/* Main Reel Player */}
        <div className="relative max-w-2xl mx-auto">
          {/* Video Container */}
          <div className="relative bg-black/5 rounded-3xl overflow-hidden shadow-2xl">
            <video
              ref={videoRef}
              src={currentReel.src}
              className="w-full aspect-[9/16] object-cover cursor-pointer"
              poster="/src/assets/images/reel-poster.jpg"
              onClick={togglePlayPause}
              loop
              playsInline
            />
            
            {/* Play/Pause Overlay Button */}
            {!isPlaying && (
              <button
                onClick={togglePlayPause}
                className="absolute inset-0 flex items-center justify-center bg-black/20 hover:bg-black/30 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8 text-rose-500 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </button>
            )}

            {/* Reel Info Overlay - Bottom */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-5">
              <h3 className="text-white font-playfair text-xl mb-1">{currentReel.title}</h3>
              <p className="text-white/80 text-sm">{currentReel.description}</p>
              <div className="flex gap-3 mt-2">
                <span className="text-white/60 text-xs">{currentReel.duration}</span>
                <span className="text-white/60 text-xs">{currentReel.views}</span>
              </div>
            </div>

            {/* Instagram Badge */}
            <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full px-3 py-1.5 flex items-center gap-2">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
              </svg>
              <span className="text-white text-xs font-medium">@apurva.nailart</span>
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
          {reels.map((reel, idx) => (
            <button
              key={reel.id}
              onClick={() => {
                setCurrentIndex(idx)
                setIsPlaying(false)
              }}
              className={`relative flex-shrink-0 transition-all duration-300 ${
                currentIndex === idx 
                  ? 'ring-2 ring-rose-400 scale-105' 
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <div className="relative w-16 h-28 rounded-lg overflow-hidden bg-rose-50">
                <div className="absolute inset-0 bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-rose-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <div className="absolute bottom-1 right-1 bg-black/60 rounded px-1 text-white text-[9px]">
                  {reel.duration}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Counter Indicator */}
        <div className="text-center mt-6">
          <span className="text-sm text-gray-400 font-light">
            {currentIndex + 1} / {reels.length} Reels
          </span>
        </div>

        {/* Instagram CTA */}
        <div className="mt-12 text-center">
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
          
          <div className="mt-8">
            <p className="text-gray-500 font-light mb-4">Follow me for daily nail inspiration</p>
            <a 
              href="https://instagram.com/apurva.nailart" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-rose-400 text-sm tracking-wide hover:text-rose-500 transition-all duration-300 border-b border-rose-200 hover:border-rose-400 pb-1"
            >
              <span>@apurva.nailart</span>
              <span className="text-lg">→</span>
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </section>
  )
}

export default ReelSection