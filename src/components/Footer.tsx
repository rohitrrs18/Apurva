// src/components/Footer.tsx - Refined Elegant Footer
import React, { useState } from 'react'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail('')
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-white via-rose-50/30 to-pink-50/40 pt-16 pb-8">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-pink-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-rose-100">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-playfair italic text-rose-500 mb-3">Apurva Thorat</h3>
            <p className="text-gray-500 text-sm font-light leading-relaxed">
              Transforming nails into miniature masterpieces with precision, passion, and artistry.
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-gray-400 hover:text-rose-500 hover:bg-white transition-all duration-300 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-gray-400 hover:text-rose-500 hover:bg-white transition-all duration-300 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.666-11.45c0-.21-.005-.422-.014-.633A9.954 9.954 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-white/60 flex items-center justify-center text-gray-400 hover:text-rose-500 hover:bg-white transition-all duration-300 shadow-sm">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.205 11.387.6.113.82-.26.82-.58 0-.287-.01-1.05-.015-2.06-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.082-.73.082-.73 1.205.085 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.4 3-.405 1.02.005 2.04.138 3 .405 2.29-1.552 3.297-1.23 3.297-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.698.83.578C20.565 21.795 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gray-700 font-medium text-sm uppercase tracking-wider mb-4">Explore</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Gallery', 'Certificates', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-500 text-sm hover:text-rose-500 transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-gray-700 font-medium text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {['Nail Extensions', '3D Nail Art', 'Russian Manicure', 'Press-on Sets', 'Bridal Nails', 'Workshops'].map((service) => (
                <li key={service}>
                  <a href="#contact" className="text-gray-500 text-sm hover:text-rose-500 transition-colors duration-300">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-gray-700 font-medium text-sm uppercase tracking-wider mb-4">Stay Updated</h4>
            <p className="text-gray-500 text-sm font-light mb-3">
              Get nail inspiration & exclusive offers
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col gap-2">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address" 
                className="px-4 py-2 rounded-full border border-rose-200 bg-white/60 text-sm focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent"
                required
              />
              <button 
                type="submit"
                className="px-4 py-2 bg-gradient-to-r from-rose-400 to-pink-400 text-white text-sm rounded-full hover:shadow-md transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
            {subscribed && (
              <p className="text-xs text-emerald-600 mt-2 text-center">✨ Subscribed successfully!</p>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 text-center">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-gray-400">
              © {currentYear} Apurva Thorat — Nail Artist. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-xs text-gray-400 hover:text-rose-500 transition">Privacy Policy</a>
              <a href="#" className="text-xs text-gray-400 hover:text-rose-500 transition">Terms of Service</a>
            </div>
          </div>
          <p className="text-xs text-gray-300 mt-3 font-light">
            Designed with 💅 for beautiful fingertips | Studio located in Kharghar, Navi Mumbai
          </p>
        </div>

        {/* Decorative line */}
        <div className="mt-6 flex justify-center">
          <div className="inline-flex items-center gap-2">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-rose-200"></div>
            <span className="text-rose-300 text-xs">✦</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-rose-200"></div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital@0;1&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </footer>
  )
}

export default Footer