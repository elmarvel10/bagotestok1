import Image from "next/image"
import Link from "next/link"
import { YoutubeEmbed } from "@/components/youtube-embed"
import { FeaturedImageGallery } from "@/components/featured-image-gallery"

export default function Home() {
  // Definir las imágenes para la galería
  const galleryImages = [
    { src: "/images/gallery-RANA01.png", alt: "Rana 1" },
    { src: "/images/gallery-RANA02.png", alt: "Rana 2" },
    { src: "/images/gallery-RANA06.png", alt: "Rana 6" },
    { src: "/images/gallery-PARABAS01.png", alt: "Parabas 1" },
    { src: "/images/gallery-PARABAS02.png", alt: "Parabas 2" },
    { src: "/images/gallery-PARABAS03.png", alt: "Parabas 3" },
    { src: "/images/gallery-NUNA01.png", alt: "Nuna 1" },
    { src: "/images/gallery-NUNA02.png", alt: "Nuna 2" },
  ]

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image src="/images/background.png" alt="Background" fill priority className="object-cover" />
      </div>

      <div className="container mx-auto px-4 pt-8 pb-16 md:py-8 relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="w-48 h-16 relative">
            <Image src="/images/logo-bago.svg" alt="Bagó Logo" width={174} height={57} className="object-contain" />
          </div>
        </div>

        {/* First section */}
        <div className="text-center text-white mb-8">
          <h2 className="text-xl md:text-2xl mb-2">
            El impacto positivo comienza con <span className="font-bold">una decisión</span>.
          </h2>
          <p className="text-lg md:text-xl">
            Hoy, tenemos la oportunidad de <span className="font-bold">liderar un cambio</span> que{" "}
            <span className="font-bold">inspire y transforme</span>.
          </p>
        </div>

{/* First video */}
<div className="mb-12 max-w-4xl mx-auto rounded-lg overflow-hidden">
  <div className="relative aspect-video">
    <iframe
      className="absolute inset-0 w-full h-full"
      src="https://www.youtube.com/embed/NzHsbaOCV3s"
      title="Saludo Dra. María Renée"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
    <div className="hidden md:block absolute bottom-4 right-4 w-36 h-36 pointer-events-none">
      <Image
        src="/images/manoo6.png"
        alt="Sostenibilidad"
        width={144}
        height={144}
        className="w-full h-full object-contain"
      />
    </div>
  </div>
</div>

{/* Sustainability message */}
<div className="text-center text-white mb-12">
  <p className="text-lg md:text-xl mb-2">La sostenibilidad es un camino que recorremos juntos.</p>
  <p className="text-xl md:text-2xl font-bold">¡Demos juntos este primer paso!</p>
</div>

        {/* Program title with decorative elements */}
        <div className="relative py-6 md:py-12 max-w-5xl mx-auto">
          {/* Decorative elements */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 hidden md:block">
            <Image src="/images/flechas.svg" alt="Flechas decorativas" width={100} height={60} />
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 hidden md:block">
            <Image src="/images/circulo-der.svg" alt="Círculo decorativo" width={100} height={100} />
          </div>

          {/* Program title */}
          <div className="text-center">
            <div className="flex justify-center my-2 md:my-4">
              <Image
                src="/images/programa-ok.svg"
                alt="PROGRAMA BIENESTAR BAGÓ"
                width={500}
                height={150}
                className="w-full max-w-[500px]"
              />
            </div>
          </div>
        </div>

        {/* Second section with wildlife images */}
        <div className="relative py-8 overflow-visible">
          <div className="flex justify-center items-center min-h-[500px]">
            {/* Left column with wildlife */}
            <div className="hidden md:block fixed bottom-0 left-0 z-20 w-[300px] h-[400px] overflow-visible" style={{ transform: 'translateX(-10px)' }}>
              <div className="relative w-full h-full">
                <Image
                  src="/images/loro.png"
                  alt="Loros y rana"
                  width={3600}
                  height={4800}
                  className="object-contain"
                  style={{ transform: 'scale(1.5)' }}
                  priority
                  loading="eager"
                />
              </div>
            </div>

            {/* Center column with text and video */}
            <div className="max-w-3xl mx-auto px-4 w-full pb-56 md:pb-0">
              <div className="text-center text-white mb-6">
                <p className="mb-2">
                  pronto descubrirás cómo nuestras acciones{" "}
                  <span className="font-bold"> están logrando un impacto extraordinario.{" "}
                  
                </p>

              </div>

              {/* Galería de imágenes destacadas en lugar del video */}
              <div className="mb-8 rounded-lg overflow-hidden">
                <FeaturedImageGallery images={galleryImages} />
              </div>

              <div className="text-center text-white mb-8">
                <p className="text-lg">
                  Espera los siguientes documentales. <span className="font-bold">¡Muy pronto!</span>
                </p>
              </div>

              {/* Button Container - Fixed on mobile, static on desktop */}
              <div className="fixed bottom-0 left-0 w-full flex justify-center p-4 md:static md:w-auto md:p-0 z-20">
                <Link
                  href="https://api.whatsapp.com/send?phone=59177024774&text=Hola%20%F0%9F%91%8B%2C%20quiero%20confirmar%20mi%20asistencia%20para%20el%20evento%20Bienestar%20%F0%9F%A6%9C%20de%20Laboratorios%20Bag%C3%B3%20%F0%9F%92%8A"
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src="/images/boton-asistencia.png"
                    alt="Confirma tu asistencia"
                    width={400}
                    height={80}
                    className="hover:opacity-90 transition-opacity w-full max-w-[350px] md:w-[400px] md:max-w-none"
                  />
                </Link>
              </div>

              {/* Mobile-only Parrot Image */}
              <div className="block md:hidden w-full mt-8 -ml-[106px]">
                <Image
                  src="/images/loro.png"
                  alt="Loros y rana (móvil)"
                  width={350}
                  height={450}
                  className="object-contain h-auto w-auto max-w-[350px] mr-auto"
                />
              </div>

              {/* Mobile-only Puma Image */}
              <div className="block md:hidden w-full relative overflow-visible" style={{ marginTop: "-360px" }}>
                <div className="absolute right-[-170px]">
                  <Image
                    src="/images/felino.png"
                    alt="Puma (móvil)"
                    width={400}
                    height={500}
                    className="object-contain h-auto w-auto max-w-[400px]"
                  />
                </div>
              </div>

            </div> {/* End of Center column */}

            {/* Right column with mountain lion */}
            <div className="hidden md:block fixed bottom-0 right-0 z-20 w-[500px] h-[600px] overflow-visible" style={{ transform: 'translate(140px, 130px)' }}>
              <div className="puma-container">
                <Image
                  src="/images/felino.png"
                  alt="Puma"
                  width={600}
                  height={800}
                  className="puma-image"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  ) 
}
