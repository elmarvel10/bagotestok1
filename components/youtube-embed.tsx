"use client"

import Image from "next/image"

interface YoutubeEmbedProps {
  videoId: string
  title?: string
}

export function YoutubeEmbed({ videoId, title }: YoutubeEmbedProps) {
  return (
    <div className="relative w-full aspect-video bg-black rounded-lg overflow-hidden">
      <iframe
        className="absolute inset-0 w-full h-full"
        src={`https://www.youtube.com/embed/${videoId}?vq=hd720&hd=1&quality=high`}
        title={title || "YouTube video player"}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        referrerPolicy="strict-origin-when-cross-origin"
      ></iframe>

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
    </div>
  )
}
