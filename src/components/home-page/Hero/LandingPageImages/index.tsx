'use client'
import React, { useEffect, useState, useRef } from 'react'
import Image from 'next/image'

const galleryImages = [
  '/Images/figma-hero-img.webp',
  '/Gallery/yoga1.jpeg',
  'Gallery/Pilates1.jpeg',
  '/Gallery/yoga2.jpeg',
  'Gallery/Pilates2.jpeg',
  '/Gallery/yoga3.jpeg',
  'Gallery/Pilates3.jpeg',
  '/Gallery/yoga4.jpeg',
  'Gallery/Walk1.jpeg',
  '/Gallery/yoga5.jpeg',
  '/Gallery/yoga7.jpeg',
  'Gallery/Walk2.jpeg',
  '/Gallery/yoga9.jpeg',
  'Gallery/Walk3.jpeg',
  '/Gallery/yoga11.jpeg',
]

const HeroSlideshow = () => {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const touchStartX = useRef(0)
  const touchEndX = useRef(0)

  // Auto-slide
  useEffect(() => {
    if (paused) return

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % galleryImages.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [paused])

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % galleryImages.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)
  }

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.changedTouches[0].clientX
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    touchEndX.current = e.changedTouches[0].clientX
    const diff = touchStartX.current - touchEndX.current

    if (diff > 50) nextSlide()
    if (diff < -50) prevSlide()
  }

  return (
    <div
      className="relative w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] overflow-hidden rounded-xl shadow-lg"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Images */}
      {galleryImages.map((src, i) => (
        <Image
          key={i}
          src={src}
          alt={`Gallery image ${i}`}
          fill
          className={`
            object-cover absolute inset-0 transition-opacity duration-1000
            ${i === index ? 'opacity-100 kenburns' : 'opacity-0'}
          `}
        />
      ))}

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
      >
        ‹
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 text-white px-3 py-2 rounded-full hover:bg-black/60"
      >
        ›
      </button>

      {/* Navigation Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {galleryImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`
              w-3 h-3 rounded-full transition-all
              ${i === index ? 'bg-white scale-125' : 'bg-white/50'}
            `}
          />
        ))}
      </div>

      {/* Ken Burns Animation */}
      <style jsx>{`
        .kenburns {
          animation: kenburns 8s ease-in-out forwards;
        }

        @keyframes kenburns {
          0% {
            transform: scale(1) translate(0, 0);
          }
          100% {
            transform: scale(1.15) translate(5px, 5px);
          }
        }
      `}</style>
    </div>
  )
}

export default HeroSlideshow
