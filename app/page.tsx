"use client";

import ServiceCard from "@/components/ServiceCard";
import SEOSection from "@/components/SEOSection";
import PartnerForm from "@/components/PartnerForm";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
//import Link from "next/link";

const services = [
  {
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          className="stroke-accent-yellow"
        />
      </svg>
    ),
    title: "Valerio Chatbot",
    description:
      "Asistente de viaje con IA: Te ayuda planear itinerarios, descubrir joyas locales y conectar con todas las mejores experiencias locales. Conversa con Valerio y arma el mejor día en Cartagena sin perder tiempo.",
    detailedDescription:
      "Con acceso a una base de datos actualizada constantemente y validada por expertos locales, te conecta con los mejores restaurantes, sitios históricos y actividades que se adaptan a tu estilo.",
    features: [
      "Recomendaciones personalizadas usando machine learning",
      "Sistema antifraude con alertas de seguridad en tiempo real",
      "Soporte multilingüe 24/7 con respuestas instantáneas",
    ],
  },
  {
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
          className="stroke-accent-yellow"
        />
        <circle
          cx="12"
          cy="12"
          r="9"
          strokeWidth={1.5}
          className="stroke-accent-yellow"
        />
      </svg>
    ),
    title: "Appki Change",
    description:
      "Cambio de moneda discreto y confiable; recibe efectivo en la puerta del hotel. Sin filas, sin sorpresas, recibe una entrega segura y sin tarifas ocultas.",
    detailedDescription:
      "Nuestro equipo de expertos financieros monitorea las tasas en tiempo real para ofrecerte siempre las condiciones más competitivas, con entrega segura y rastreable.",
    features: [
      "Tasas de cambio en tiempo real, siempre competitivas y transparentes",
      "Entrega segura con rastreo GPS directamente en tu alojamiento",
      "Cero cargos ocultos, cero comisiones sorpresa, total claridad",
    ],
  },
  {
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
          className="stroke-accent-yellow"
        />
      </svg>
    ),
    title: "Appki eSIM",
    description:
      "Conéctate al aterrizar con eSIM segura; datos protegidos y cobertura confiable. Internet inmediato con proveedores de confianza y protección de datos.",
    detailedDescription:
      "Nuestra tecnología eSIM te brinda acceso instantáneo a las mejores redes móviles de Colombia con configuración automática y soporte técnico especializado.",
    features: [
      "Activación instantánea antes o durante tu vuelo, listo al aterrizar",
      "Proveedores certificados internacionalmente con cobertura 5G",
      "Planes flexibles desde 3 días hasta 30 días, datos ilimitados",
    ],
  },
  {
    icon: (
      <svg
        className="w-full h-full"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          className="stroke-accent-yellow"
        />
      </svg>
    ),
    title: "Appki recomendados",
    description:
      "Sácale todo el jugo a tu estadia de manera segura, disfruta de las mejores experiencias locales con los mejores precios, todo en un solo lugar, sin pagos sorpresas y con la seguridad que mereces.",
    detailedDescription:
      "Diseñada específicamente para hoteles, restaurantes, tours y servicios turísticos en Cartagena.",
    features: [
      "Dashboard empresarial con analytics en tiempo real y reportes detallados",
      "Acceso exclusivo a base de 10,000+ clientes premium verificados",
      "Sistema de reservas integrado sin comisiones adicionales para clientes",
    ],
  },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Services Section - Ultra Premium Design */}
      <section
        id="servicios"
        className="relative py-20 sm:py-24 md:py-28 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-brand-deep via-brand-black to-brand-deep overflow-hidden"
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl animate-pulse" />
          <div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl animate-pulse"
            style={{ animationDelay: "1s" }}
          />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20 lg:mb-24">
            {/* Overline */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
              <div className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
              <span className="text-xs sm:text-sm font-semibold text-accent-yellow uppercase tracking-wider">
                Nuestro Ecosistema
              </span>
            </div>

            {/* Main Title */}
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-poppins font-bold mb-6 leading-tight">
              <span className="text-white">Servicios que</span>
              <br />
              <span
                className="bg-gradient-to-r from-accent-yellow from-30% via-white via-50% to-accent-yellow to-70% bg-clip-text text-transparent animate-shimmer-gradient"
                style={{
                  backgroundSize: "400% 100%",
                }}
              >
                Transforman Experiencias
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-text-muted max-w-3xl mx-auto leading-relaxed">
              Herramientas digitales de última generación diseñadas para
              conectar, proteger y potenciar cada aspecto de tu viaje en
              Cartagena.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 mb-16">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                detailedDescription={service.detailedDescription}
                index={index}
                features={service.features}
              />
            ))}
          </div>

          {/* Appki Pass Premium Card */}
          <div className="relative group">
            {/* Background glow effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent-yellow/20 via-accent-blue/20 to-accent-yellow/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />

            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-deep/80 via-brand-black/90 to-brand-deep/80 backdrop-blur-xl border-2 border-accent-yellow/30 hover:border-accent-yellow/50 transition-all duration-500 shadow-2xl hover:shadow-accent-yellow/30">
              {/* Decorative quote marks */}
              <div className="absolute top-6 left-6 sm:top-8 sm:left-8 text-accent-yellow/20 text-6xl sm:text-7xl md:text-8xl font-serif leading-none pointer-events-none">
                "
              </div>
              <div className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 text-accent-yellow/20 text-6xl sm:text-7xl md:text-8xl font-serif leading-none pointer-events-none rotate-180">
                "
              </div>

              {/* Animated border effect */}
              <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-yellow via-accent-blue to-accent-yellow bg-[length:200%_100%] animate-gradient-sweep opacity-30" />
              </div>

              {/* Content */}
              <div className="relative z-10 px-6 sm:px-12 md:px-16 lg:px-20 py-12 sm:py-16 md:py-20 text-center">
                {/* Icon/Badge */}
                <div className="flex justify-center mb-10 sm:mb-12">
                  <div className="relative px-8 py-3 border border-accent-yellow/20 rounded-full">
                    <span className="text-accent-yellow/80 font-medium text-xs sm:text-sm uppercase tracking-[0.3em]">
                      Exclusivo
                    </span>
                  </div>
                </div>
                {/* Main Text */}
                <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-poppins font-bold mb-6 sm:mb-8 leading-tight px-4">
                  <span className="text-white italic">
                    <span style={{ color: "#FFC700" }}>Appki</span> Pass
                  </span>
                  <span className="text-white italic">, </span>
                  <span
                    className="bg-gradient-to-r from-accent-yellow from-30% via-white via-50% to-accent-yellow to-70% bg-clip-text text-transparent animate-shimmer-gradient italic"
                    style={{ backgroundSize: "400% 100%" }}
                  >
                    tu llave a descuentos exclusivos
                  </span>
                  <span className="text-white italic">.</span>
                </h3>

                {/* Description */}
                <p className="text-base sm:text-lg md:text-xl text-white/70 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-10">
                  Disfruta beneficios exclusivos en restaurantes, tours y
                  actividades verificadas de Cartagena. Descuentos reales en
                  todo nuestro comercio aliado, sin letra pequeña ni comisiones
                  ocultas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO Section */}
      <SEOSection />

      {/* About Section */}
      <AboutSection />

      {/* Partner Form Section */}
      <PartnerForm />
    </>
  );
}
