// src/pages/Home.tsx
import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import GalleryGrid from '../components/GalleryGrid'
import Certificates from '../components/Certificates'
import ClientReviews from '../components/ClientReviews'
import Contact from '../components/Contact'
import ReelSection from '../components/ReelSection'

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <About />
      <GalleryGrid />
      <Certificates />
      <ReelSection />
      <ClientReviews />
      <Contact />
    </>
  )
}

export default Home