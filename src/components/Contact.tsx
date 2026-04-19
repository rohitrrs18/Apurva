// src/components/Contact.tsx - Refined Elegant Contact Section
import React, { useState } from 'react'

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)
  
  const handleSubmit = (e: React.FormEvent) => { 
    e.preventDefault()
    setLoading(true)
    setTimeout(() => {
      setSent(true)
      setLoading(false)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }, 1000)
  }
  
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      {/* Soft background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-rose-50/20 to-pink-50/30"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-0 w-80 h-80 bg-pink-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-rose-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header - Elegant & Minimal */}
        <div className="text-center mb-12">
          <div className="inline-block mb-4">
            <span className="text-xs tracking-[0.3em] text-rose-400 uppercase font-light bg-white/40 backdrop-blur-sm px-4 py-1.5 rounded-full">
              GET IN TOUCH
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-gray-800 mb-4">
            <span className="font-playfair italic text-rose-400">Let's Create</span>
            <span className="font-playfair font-light"> Together</span>
          </h2>
          <div className="flex justify-center gap-2 mb-5">
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-rose-300"></div>
            <div className="w-2 h-2 rounded-full bg-rose-400/60"></div>
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-rose-300"></div>
          </div>
          <p className="text-gray-500 max-w-2xl mx-auto font-light">
            For bookings, custom orders, or collaborations — I'd love to hear from you
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Studio Info Card - Clean & Minimal */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-sm">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-400 to-pink-400 flex items-center justify-center shadow-sm">
                  <span className="text-white text-lg">📍</span>
                </div>
                <h3 className="text-lg font-playfair text-gray-800">Visit My Studio</h3>
              </div>
              <p className="text-gray-600 leading-relaxed pl-13">
                Kharghar, Navi Mumbai<br />
                Maharashtra, India - 410210
              </p>
              <div className="mt-4 pt-4 border-t border-rose-100/50">
                <p className="text-gray-500 text-sm">
                  <span className="font-medium text-gray-600">Studio Hours:</span><br />
                  Tue - Sat: 11:00 AM - 7:00 PM<br />
                  Sun & Mon: Closed
                </p>
              </div>
            </div>

            {/* Contact Details */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-gray-600">
                <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center shadow-sm">
                  <span className="text-rose-400 text-sm">📞</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Phone / WhatsApp</p>
                  <p className="text-gray-700 font-medium">+91 98765 43210</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-600">
                <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center shadow-sm">
                  <span className="text-rose-400 text-sm">✉️</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Email</p>
                  <p className="text-gray-700 font-medium">apurva.nailart@example.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 text-gray-600">
                <div className="w-9 h-9 rounded-full bg-white/60 flex items-center justify-center shadow-sm">
                  <span className="text-rose-400 text-sm">📷</span>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide">Instagram</p>
                  <p className="text-rose-500 font-medium">@apurva.nailart</p>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="bg-rose-50/50 rounded-xl p-4 border border-rose-100">
              <p className="text-xs text-gray-500 text-center">
                ✨ Walk-ins are welcome, but appointments are recommended to ensure dedicated time for your dream nails ✨
              </p>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/50 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">Your Name</label>
                <input 
                  type="text" 
                  placeholder="e.g., Priya Sharma" 
                  value={form.name} 
                  onChange={e => setForm({...form, name: e.target.value})} 
                  className="w-full p-3 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition text-gray-700 placeholder:text-gray-300" 
                  required 
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">Email Address</label>
                <input 
                  type="email" 
                  placeholder="hello@example.com" 
                  value={form.email} 
                  onChange={e => setForm({...form, email: e.target.value})} 
                  className="w-full p-3 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition text-gray-700 placeholder:text-gray-300" 
                  required 
                />
              </div>
              <div>
                <label className="block text-gray-600 text-sm font-medium mb-2">Your Nail Vision</label>
                <textarea 
                  rows={4} 
                  placeholder="Tell me about your dream nails, preferred style, or any special occasion..." 
                  value={form.message} 
                  onChange={e => setForm({...form, message: e.target.value})} 
                  className="w-full p-3 rounded-xl border border-rose-200 bg-white/80 focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent transition text-gray-700 placeholder:text-gray-300 resize-none"
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                disabled={loading}
                className={`w-full py-3 rounded-full font-medium text-sm tracking-wide transition-all duration-300 ${
                  loading 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-rose-400 to-pink-400 text-white hover:shadow-lg hover:scale-[1.02]'
                }`}
              >
                {loading ? 'Sending... 💌' : 'Send Message →'}
              </button>
              {sent && (
                <div className="text-center py-3 bg-emerald-50 rounded-xl border border-emerald-100">
                  <p className="text-emerald-600 text-sm font-medium">✨ Thank you! Apurva will reply within 24h. ✨</p>
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Delicate Footer */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-rose-200"></div>
            <span className="text-rose-300 text-xs">✦</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-rose-200"></div>
          </div>
          <p className="text-gray-400 text-xs mt-4 font-light">
            I can't wait to bring your nail visions to life
          </p>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500&display=swap');
        
        .font-playfair {
          font-family: 'Playfair Display', serif;
        }
        
        .pl-13 {
          padding-left: 3.25rem;
        }
      `}</style>
    </section>
  )
}

export default Contact