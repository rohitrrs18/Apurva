// src/components/ClientReviews.tsx (Enhanced)
import React, { useState } from 'react'

const reviews = [
  { name: 'Riya Sharma', text: 'Apurva gave me the most stunning chrome nails! She is an absolute magician. The attention to detail was incredible and they lasted for weeks. 💖', img: '/src/assets/images/reviews/client1.jpg', rating: 5, location: 'Mumbai' },
  { name: 'Neha Kapoor', text: 'The themed press-ons she made for my birthday were a hit among all my friends. So detailed and comfortable to wear! Will definitely order again.', img: '/src/assets/images/reviews/client2.jpg', rating: 5, location: 'Pune' },
  { name: 'Anjali Patil', text: 'Professional, creative, and such a sweet person. She listened to my ideas and created something beyond my expectations. Best nail artist in town! ✨', img: '/src/assets/images/reviews/client3.jpg', rating: 5, location: 'Delhi' }
]

const ClientReviews: React.FC = () => {
  const [_activeIndex, _setActiveIndex] = useState(0)  // Underscore tells TS it's intentionally unused

  return (
    <section id="reviews" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-calligraphy text-center text-pink-800 mb-4">💬 Client Love</h2>
        <div className="w-20 h-1 bg-pink-300 mx-auto mb-12 rounded-full"></div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div key={idx} className="glass-card p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-pink-200 to-rose-200 flex items-center justify-center overflow-hidden shadow-md">
                  <span className="text-2xl">👩🏻</span>
                </div>
                <div>
                  <h3 className="font-bold text-gray-800">{rev.name}</h3>
                  <p className="text-xs text-gray-400">{rev.location}</p>
                  <div className="text-yellow-400 text-sm mt-1">{'★'.repeat(rev.rating)}</div>
                </div>
              </div>
              <p className="text-gray-600 italic leading-relaxed">“{rev.text}”</p>
              <div className="mt-4 flex justify-end">
                <span className="text-pink-400 text-xl">💅</span>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-10">
          <div className="inline-flex gap-1">
            {[1,2,3,4,5].map(i => <span key={i} className="text-pink-300 text-xl">★</span>)}
            <span className="ml-2 text-gray-500">4.9 from 120+ reviews</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientReviews