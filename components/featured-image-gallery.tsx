"use client"

import { useState } from "react"
import Image from "next/image"

interface GalleryImage {
  src: string
  alt: string
}

interface FeaturedImageGalleryProps {
  images: GalleryImage[]
}

export function FeaturedImageGallery({ images }: FeaturedImageGalleryProps) {
  const [featuredIndex, setFeaturedIndex] = useState(0)

  if (images.length === 0) {
    return null
  }

  // Función para avanzar a la siguiente imagen
  const nextImage = () => {
    setFeaturedIndex((currentIndex) => (currentIndex + 1) % images.length)
  }

  return (
    <div className="relative w-full">
      {/* Imagen destacada */}
      <div 
        className="relative w-full aspect-video bg-black rounded-lg overflow-hidden mb-4 cursor-pointer"
        onClick={nextImage}
      >
        <Image
          src={images[featuredIndex].src}
          alt={images[featuredIndex].alt}
          fill
          priority
          className="object-cover transition-opacity duration-300"
        />
        
        {/* Icono de sostenibilidad en la esquina */}
        <div className="hidden md:block absolute bottom-4 right-4 w-36 h-36">
          <Image
            src="/images/manoo6.png"
            alt="Sostenibilidad"
            width={144}
            height={144}
            className="w-full h-full object-contain"
          />
        </div>

        {/* Indicador visual de hover sin texto */}
        <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 hover:opacity-100 transition-opacity">
        </div>
      </div>

      {/* Grid de miniaturas */}
      <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
        {images.map((image, idx) => (
          <button
            key={idx}
            onClick={() => setFeaturedIndex(idx)}
            className={`relative aspect-video rounded-md overflow-hidden border-2 transition-all ${
              idx === featuredIndex 
                ? "border-blue-500 scale-105 z-10" 
                : "border-transparent hover:border-blue-300"
            }`}
          >
            <Image
              src={image.src}
              alt={`Miniatura ${idx + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 25vw, 12.5vw"
            />
          </button>
        ))}
      </div>
    </div>
  )
} 