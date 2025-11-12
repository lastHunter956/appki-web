"use client";

import Image from "next/image";
import Squares from "./Squares";

export default function SEOSection() {
  return (
    <section className="relative py-20 sm:py-24 lg:py-32 overflow-hidden">
      {/* Animated Squares Background */}
      <div className="absolute inset-0">
        <Squares
          direction="diagonal"
          speed={0.5}
          borderColor="rgba(255, 199, 0, 0.1)"
          squareSize={50}
          hoverFillColor="rgba(255, 199, 0, 0.05)"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-black/80 via-brand-deep/70 to-brand-black/80" />

      {/* Subtle Animated Light Orbs */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent-yellow/8 rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent-blue/8 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite_reverse]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - CEO Profile Image */}
          <div className="relative lg:order-1 group">
            {/* Elegant Glow Effect */}
            <div className="absolute -inset-4 bg-gradient-to-br from-accent-yellow/20 to-accent-blue/20 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity duration-700" />

            {/* Main Image Container */}
            <div className="relative">
              <div className="relative w-full aspect-[4/5] max-w-md mx-auto">
                {/* Premium Gold Border */}
                <div className="absolute -inset-1 bg-gradient-to-br from-accent-yellow via-yellow-400 to-accent-yellow rounded-3xl opacity-80 blur-sm" />
                <div className="absolute -inset-0.5 bg-gradient-to-tr from-yellow-300 to-yellow-500 rounded-3xl" />

                {/* Inner Frame */}
                <div className="absolute inset-0 bg-brand-black rounded-3xl shadow-2xl" />

                {/* CEO Image */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl">
                  <Image
                    src="/images/ceo.jpg"
                    alt="CEO y Fundador de Appki - Liderazgo visionario en turismo digital"
                    fill
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    quality={100}
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                  {/* Professional Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-black/50 via-transparent to-transparent" />
                </div>

                {/* Clean Corner Accents */}
                <div className="absolute inset-0 pointer-events-none">
                  <div className="absolute top-0 left-0 w-20 h-20 border-t-[3px] border-l-[3px] border-accent-yellow rounded-tl-3xl opacity-90" />
                  <div className="absolute bottom-0 right-0 w-20 h-20 border-b-[3px] border-r-[3px] border-accent-yellow rounded-br-3xl opacity-90" />
                </div>
              </div>

              {/* CEO Badge */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-10">
                <div className="px-8 py-3.5 rounded-full bg-gradient-to-r from-accent-yellow to-yellow-400 shadow-2xl border-2 border-yellow-300/50 group-hover:scale-105 transition-transform duration-300">
                  <p className="text-brand-black font-bold text-sm sm:text-base whitespace-nowrap tracking-wide">
                    ✦ CEO & FUNDADOR ✦
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="space-y-6 lg:order-2">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-accent-yellow uppercase tracking-wider">
                Liderazgo y Visión
              </span>
            </div>

            {/* Name and Title */}
            <div>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold leading-tight mb-2">
                <span className="bg-gradient-to-r from-accent-yellow to-white bg-clip-text text-transparent">
                  Claudio Polizzi
                </span>
              </h2>
              <p className="text-xl sm:text-2xl text-white/80 font-medium">
                CEO & Fundador
              </p>
            </div>

            {/* Quote/Tagline */}
            <div className="pl-6 border-l-4 border-accent-yellow/50">
              <p className="text-lg sm:text-xl font-poppins font-semibold text-white italic">
                "Appki - Dónde todo se conecta"
              </p>
            </div>

            {/* Description */}
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-text-muted leading-relaxed">
                Soy un emprendedor resiliente y visionario con una sólida
                formación jurídica y un enfoque estratégico en la creación y
                desarrollo de negocios disruptivos. Como CEO de APPKI, lidero la
                transformación digital de Cartagena a través de una superapp
                integral que conecta a turistas con el comercio local de manera
                segura, inteligente y sin intermediarios.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid sm:grid-cols-2 gap-4 pt-4">
              {[
                {
                  number: "6+",
                  label: "Años de experiencia",
                },
                {
                  number: "50+",
                  label: "Empresas impactadas",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-accent-yellow/50 transition-all duration-300"
                >
                  <div className="text-3xl font-bold bg-gradient-to-r from-accent-yellow to-white bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-sm text-text-muted">Conecta:</span>
              <div className="flex items-center gap-3">
                {[
                  {
                    icon: "linkedin",
                    href: "https://www.linkedin.com/in/claudio-polizzi-/",
                  },
                  {
                    icon: "instagram",
                    href: "https://www.instagram.com/appkiofficial/#",
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/60 hover:bg-accent-yellow hover:text-brand-black hover:border-accent-yellow transition-all duration-300"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social.icon === "linkedin" && (
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                      )}
                      {social.icon === "twitter" && (
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      )}
                      {social.icon === "instagram" && (
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      )}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
