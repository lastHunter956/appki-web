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
      "Asistente inteligente impulsado por IA avanzada que revoluciona tu experiencia en Cartagena. Obtén recomendaciones personalizadas basadas en tus preferencias, descubre lugares auténticos lejos de las rutas turísticas convencionales y navega la ciudad con total confianza gracias a nuestro sistema antifraude.",
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
    title: "Safe Change",
    description:
      "Servicio de cambio de divisas premium con total transparencia y seguridad garantizada. Olvídate de casas de cambio dudosas y tarifas ocultas. Recibe tu dinero directamente en tu hotel con las mejores tasas del mercado, respaldado por instituciones financieras certificadas y con cobertura de seguro completa.",
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
    title: "eSIM Instantánea",
    description:
      "Conectividad móvil de alta velocidad desde el momento exacto en que tu avión aterriza. Sin filas, sin complicaciones, sin sorpresas. Activa tu eSIM antes de viajar y disfruta de cobertura 5G premium con proveedores internacionales certificados, máxima seguridad de datos y planes flexibles adaptados a la duración de tu estadía.",
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
    title: "Appki Negocios",
    description:
      "Plataforma B2B empresarial de última generación que conecta tu negocio turístico con miles de viajeros calificados. Incrementa tu visibilidad, optimiza tus operaciones y maximiza tus ingresos con herramientas de analítica avanzada, gestión automatizada de reservas y acceso a una red premium de clientes internacionales verificados.",
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
