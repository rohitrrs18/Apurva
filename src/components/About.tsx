// src/components/About.tsx - Calligraphy Style with Story Page Navigation
import React from 'react'

const About: React.FC = () => {
  const handleReadStory = () => {
    // Navigate to story page (you'll need to set up routing)
    // For React Router:
    // navigate('/story')
    // For now, we'll scroll to a story section or you can implement modal/page
    window.location.href = '/story'
  }

  return (
    <section id="about" className="py-28 px-6 relative overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-rose-50/20 to-pink-50/30"></div>
      
      {/* Subtle decorative elements */}
      <div className="absolute top-40 right-0 w-96 h-96 bg-pink-100/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 lg:gap-20 items-start">
          
          {/* Left Column - Artist Image */}
          <div className="relative group order-1 md:order-1">
            {/* Decorative subtle rings */}
            <div className="absolute -top-6 -right-6 w-40 h-40 rounded-full border border-rose-200/40 opacity-50"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 rounded-full border border-pink-200/40 opacity-50"></div>
            
            {/* Main Image Container */}
            <div className="relative rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-[3/4] bg-gradient-to-br from-rose-100 to-pink-50">
                <img 
                  src="/apu.jpg" 
                  alt="Apurva Thorat - Nail Artist" 
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -right-4 bg-white/90 backdrop-blur-sm rounded-full px-5 py-2 shadow-md border border-rose-100/60">
              <div className="flex items-center gap-2">
                <span className="text-sm">⭐</span>
                <span className="text-xs text-gray-600 font-medium">Certified Nail Artist & Educator</span>
              </div>
            </div>
          </div>

          {/* Right Column - Bio Content with Calligraphy */}
          <div className="order-2 md:order-2 space-y-6">
            {/* Calligraphy-style heading */}
            <div className="space-y-3">
              <div className="inline-block">
                <span className="text-xs tracking-[0.3em] text-rose-400 uppercase font-light">
                  HER STORY
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl font-light text-gray-800 leading-tight">
                <span className="font-calligraphy text-rose-400 font-normal italic block">
                  A journey from passion
                </span>
                <span className="font-light text-gray-700 text-3xl md:text-4xl mt-2 block">
                  to professional nail artist.
                </span>
              </h2>
            </div>

            {/* Artist name with elegant styling */}
            <div className="pt-2">
              <h3 className="text-2xl md:text-3xl font-calligraphy text-rose-500 italic">
                Apurva Thorat
              </h3>
            </div>

            {/* Main bio - flowing text, no boxes */}
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                With over <span className="font-semibold text-rose-500">5 years of experience</span> in the 
                beauty industry, Apurva has transformed her love for art into a specialized practice of 
                nail transformations.
              </p>

              <p>
                She believes that every hand tells a story, and the nails are the perfect canvas to express it. 
                Specializing in <span className="font-medium text-rose-400">Russian manicures, gel extensions,</span> and 
                <span className="font-medium text-rose-400"> intricate 3D nail art.</span>
              </p>

              <p>
                As a dedicated <span className="font-semibold text-rose-500">Educator</span>, she now also conducts Certified 
                Nail Art workshops and exclusive PNA Batches to train the next generation of nail artists. 
                Her studio in <span className="text-rose-500">Kharghar, Navi Mumbai</span> is a sanctuary where creativity meets care.
              </p>

              <p className="italic text-gray-500">
                Every design is custom-built to match the client's personality and vision.
              </p>
            </div>

            {/* Read My Story Button - clean and elegant */}
            <div className="pt-4">
              <button 
                onClick={handleReadStory}
                className="group inline-flex items-center gap-2 text-rose-400 text-sm tracking-wide hover:text-rose-500 transition-all duration-300 border-b border-rose-200 hover:border-rose-400 pb-1"
              >
                <span>Read My Story</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">→</span>
              </button>
            </div>
          </div>
        </div>

        {/* Expertise Tags - flowing inline */}
        <div className="mt-20 text-center">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {[
              'Russian Manicure',
              'Gel Extensions',
              '3D Nail Art',
              'Custom Designs',
              'PNA Certified',
              'Workshop Educator'
            ].map((skill) => (
              <span 
                key={skill}
                className="text-gray-400 text-xs tracking-wide hover:text-rose-400 transition-colors cursor-default"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Delicate divider */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3">
            <div className="w-8 h-px bg-gradient-to-r from-transparent to-rose-200"></div>
            <span className="text-rose-300 text-xs">✦</span>
            <div className="w-8 h-px bg-gradient-to-l from-transparent to-rose-200"></div>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&family=Satisfy&display=swap');
        
        .font-calligraphy {
          font-family: 'Satisfy', 'Playfair Display', cursive;
        }
      `}</style>
    </section>
  )
}

export default About