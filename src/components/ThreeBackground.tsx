// src/components/ThreeBackground.tsx - Subtle & Professional
import { useEffect, useRef } from 'react'
import * as THREE from 'three'

const ThreeBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return
    
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setClearColor(0x000000, 0)
    containerRef.current.appendChild(renderer.domElement)

    // Very subtle particles - elegant, not distracting
    const particleCount = 400
    const particlesGeometry = new THREE.BufferGeometry()
    const positions = new Float32Array(particleCount * 3)
    
    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 100
      positions[i * 3 + 1] = (Math.random() - 0.5) * 60
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50 - 20
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    
    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xd4c5c0,
      size: 0.08,
      transparent: true,
      opacity: 0.3
    })
    
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)
    
    camera.position.z = 15
    camera.position.y = 0
    
    let time = 0
    const animate = () => {
      requestAnimationFrame(animate)
      time += 0.002
      particles.rotation.y = time * 0.05
      particles.rotation.x = Math.sin(time * 0.1) * 0.1
      renderer.render(scene, camera)
    }
    animate()
    
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    
    return () => {
      window.removeEventListener('resize', handleResize)
      if (containerRef.current) containerRef.current.removeChild(renderer.domElement)
      renderer.dispose()
    }
  }, [])
  
  return <div ref={containerRef} className="fixed top-0 left-0 w-full h-full pointer-events-none" style={{ zIndex: 0, opacity: 0.4 }} />
}

export default ThreeBackground