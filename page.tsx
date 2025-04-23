import Image from "next/image"
import Link from "next/link"
import { YoutubeEmbed } from "@/components/youtube-embed"

export default function Home() {
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
      src="https://www.youtube.com/embed/trATSRJBNjA"
      title="Saludo Maria René 2024"
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
                  src={`/images/loro.png?v=${Date.now()}`}
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
            <div className="max-w-3xl mx-auto px-4 w-full">
              <div className="text-center text-white mb-6">
                <p className="mb-2">
                  Este es más que un documental, es una{" "}
                  <span className="font-bold">invitación a liderar con propósito</span> y nos alegra que seas una de las{" "}
                  <span className="font-bold">primeras personas en verlo</span>.
                </p>
                <p>
                  Descubre cómo{" "}
                  <span className="font-bold">nuestras acciones están logrando un impacto extraordinario</span>.
                </p>
              </div>

              <div className="mb-8 rounded-lg overflow-hidden">
                <YoutubeEmbed videoId="ZHJD0iciYvs" title="Documentales Bagó RANA" />
              </div>

              <div className="text-center text-white mb-8">
                <p className="text-lg">
                  Espera los siguientes documentales. <span className="font-bold">¡Muy pronto!</span>
                </p>
              </div>

              <div className="fixed bottom-0 left-0 w-full flex justify-center md:static md:w-auto z-20">
                <Link href="#" className="block">
                  <Image
                    src="/images/boton-asistencia.png"
                    alt="Confirma tu asistencia"
                    width={400}
                    height={80}
                    className="hover:opacity-90 transition-opacity w-[400px] shadow-2xl shadow-black/60"
                  />
                </Link>
              </div>
            </div>

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
