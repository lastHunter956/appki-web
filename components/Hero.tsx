"use client";

import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/palenquera-2.png"
          alt="Mujer palenquera en Cartagena"
          fill
          className="object-cover object-[center_40%] md:object-[center_40%] opacity-60"
          priority
          quality={90}
          sizes="100vw"
        />
        {/* Dark Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-black/90 via-brand-black/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-brand-black" />
        <div className="absolute bottom-0 left-0 right-0 h-32 md:h-64 bg-gradient-to-t from-brand-deep via-brand-black/50 to-transparent" />

        {/* Floating Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 sm:py-24 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-4 sm:space-y-6 md:space-y-8">
            {/* Main Headline */}
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight leading-none">
                <span className="bg-gradient-to-r from-white via-accent-blue to-white bg-clip-text text-transparent animate-gradient-text">
                  CARTAGENA
                </span>
                <br />
                <span className="bg-gradient-to-r from-accent-yellow via-white to-accent-yellow bg-clip-text text-transparent animate-gradient-text-delayed">
                  SEGURA
                </span>
              </h1>
            </div>

            {/* Subheadline */}
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-text-muted leading-relaxed max-w-xl">
              La primera herramienta digital que conecta y fortalece el mercado
              turístico de Cartagena.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4 sm:pt-6">
              <Link
                href="#servicios"
                className="group px-8 sm:px-10 py-3 sm:py-4 bg-accent-yellow text-brand-black font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 hover:shadow-xl hover:shadow-accent-yellow/30 hover:-translate-y-0.5 text-center"
              >
                Explorar servicios
              </Link>
              <Link
                href="/se-un-socio"
                className="group px-8 sm:px-10 py-3 sm:py-4 bg-transparent border-2 border-accent-blue text-accent-blue font-bold text-sm sm:text-base rounded-2xl transition-all duration-300 hover:bg-accent-blue hover:text-white hover:shadow-xl hover:shadow-accent-blue/30 hover:-translate-y-0.5 text-center"
              >
                Hazte socio
              </Link>
            </div>
          </div>

          {/* Right Content - Empty for background visibility */}
          <div className="hidden lg:block" />
        </div>
      </div>

      {/* Scroll Indicator - Minimalist Design */}
      <a
        href="#servicios"
        className="absolute bottom-8 md:bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex flex-col items-center gap-2 group cursor-pointer"
      >
        <span className="text-xs text-text-muted uppercase tracking-widest opacity-70 group-hover:opacity-100 transition-opacity">
          Descubre más
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-accent-yellow/50 flex items-start justify-center p-2 group-hover:border-accent-yellow transition-colors">
          <div className="w-1.5 h-1.5 bg-accent-yellow rounded-full animate-scroll-bounce" />
        </div>
      </a>
    </section>
  );
}
