"use client";

import PartnerForm from "@/components/PartnerForm";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function SeUnSocio() {
  useEffect(() => {
    // Ensure we're on the client side
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero animation only
      const heroTl = gsap.timeline({ delay: 0.2 });
      heroTl
        .from(".hero-text", {
          opacity: 0,
          y: 30,
          duration: 0.8,
          ease: "power3.out",
        })
        .from(
          ".hero-subtitle",
          {
            opacity: 0,
            y: 20,
            duration: 0.6,
            ease: "power3.out",
          },
          "-=0.4"
        );
    });

    return () => ctx.revert();
  }, []);

  return (
    <main className="pt-20 bg-brand-black">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 lg:py-40 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Professional Grid Pattern Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deep via-brand-black to-brand-black" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(255, 199, 0, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(255, 199, 0, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "80px 80px",
            }}
          />
          {/* Diagonal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/[0.02] via-transparent to-accent-blue/[0.02]" />
        </div>

        {/* Animated Background Lights - More Professional */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-accent-yellow/[0.08] rounded-full blur-[120px] animate-float" />
          <div className="absolute top-20 right-1/4 w-[600px] h-[600px] bg-accent-blue/[0.06] rounded-full blur-[140px] animate-float-reverse" />
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-accent-yellow/[0.05] rounded-full blur-[160px] animate-pulse-slow" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h1 className="hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins font-bold mb-6 sm:mb-8 leading-tight overflow-visible text-white">
            Sé un{" "}
            <span
              className="block mt-2 sm:mt-3 bg-gradient-to-r from-accent-yellow from-30% via-white via-50% to-accent-yellow to-70% bg-clip-text text-transparent animate-shimmer-gradient pb-2 tracking-tight"
              style={{ backgroundSize: "400% 100%", lineHeight: "1.3" }}
            >
              Early Adopter
            </span>
          </h1>
          <p className="hero-subtitle text-lg sm:text-xl md:text-2xl text-white/80 leading-relaxed max-w-3xl mx-auto px-4 mb-8 sm:mb-12">
            Acceso prioritario a todas las herramientas de Appki y beneficios
            exclusivos para aliados fundadores.
          </p>

          {/* Scroll Indicator - Professional */}
          <div className="flex flex-col items-center gap-3 animate-bounce-slow">
            <span className="text-white/50 text-sm font-medium tracking-wider uppercase">
              Desliza para descubrir
            </span>
            <div className="relative w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
              <div className="w-1.5 h-3 bg-accent-yellow rounded-full animate-scroll-down" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Professional Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-brand-black via-brand-deep/30 to-brand-black" />
          <div
            className="absolute inset-0 opacity-[0.02]"
            style={{
              backgroundImage: `
                linear-gradient(to right, rgba(0, 212, 255, 0.15) 1px, transparent 1px),
                linear-gradient(to bottom, rgba(0, 212, 255, 0.15) 1px, transparent 1px)
              `,
              backgroundSize: "100px 100px",
            }}
          />
          {/* Diagonal gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/[0.02] via-transparent to-accent-yellow/[0.01]" />
        </div>

        {/* Subtle Background Lights */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-[10%] w-[450px] h-[450px] bg-accent-yellow/[0.06] rounded-full blur-[120px] animate-float" />
          <div className="absolute top-40 right-[15%] w-[500px] h-[500px] bg-accent-blue/[0.05] rounded-full blur-[140px] animate-float-reverse" />
          <div className="absolute bottom-20 left-[20%] w-[400px] h-[400px] bg-accent-yellow/[0.04] rounded-full blur-[120px] animate-float" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-center mb-12 sm:mb-16 md:mb-20 overflow-visible text-white px-4">
            Beneficios para{" "}
            <span
              className="block mt-2 bg-gradient-to-r from-accent-yellow from-30% via-white via-50% to-accent-yellow to-70% bg-clip-text text-transparent animate-shimmer-gradient pb-2 tracking-tight"
              style={{ backgroundSize: "400% 100%", lineHeight: "1.3" }}
            >
              Aliados
            </span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {[
              {
                icon: (
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                ),
                title: "Acceso Prioritario",
                description:
                  "Primero en acceder a nuevas funcionalidades y servicios de Appki.",
              },
              {
                icon: (
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                ),
                title: "Comisiones Reducidas",
                description:
                  "Tarifa especial durante el primer mes como aliado.",
              },
              {
                icon: (
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                ),
                title: "Analítica Avanzada",
                description:
                  "Dashboard completo para monitorear tus métricas y desempeño.",
              },
              {
                icon: (
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Soporte Dedicado",
                description:
                  "Equipo de soporte especializado para tu negocio 24/7.",
              },
              {
                icon: (
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
                title: "Capacitación Gratuita",
                description:
                  "Webinars y entrenamientos exclusivos para maximizar tus resultados.",
              },
              {
                icon: (
                  <svg
                    className="w-16 h-16"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                    />
                  </svg>
                ),
                title: "Red de aliados",
                description:
                  "Comunidad cerrada de emprendedores para colaborar y crecer juntos.",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="benefit-card group relative bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 transition-all duration-500 hover:bg-white/[0.06] hover:border-accent-yellow/30 hover:shadow-[0_0_40px_rgba(255,199,0,0.1)]"
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-yellow to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 sm:w-20 sm:h-20 bg-accent-yellow/[0.02] rounded-bl-full group-hover:bg-accent-yellow/[0.06] transition-all duration-500" />

                <div className="relative text-center">
                  {/* Icon with glow effect */}
                  <div className="relative inline-flex items-center justify-center mb-4 sm:mb-6">
                    <div className="absolute inset-0 bg-accent-yellow/[0.15] rounded-2xl blur-xl group-hover:bg-accent-yellow/[0.2] transition-all duration-500" />
                    <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 flex items-center justify-center rounded-xl sm:rounded-2xl bg-gradient-to-br from-accent-yellow/[0.12] via-accent-yellow/[0.06] to-transparent border border-accent-yellow/10 group-hover:border-accent-yellow/50 group-hover:scale-105 transition-all duration-500">
                      <div className="text-accent-yellow scale-75 sm:scale-90 md:scale-100">
                        {benefit.icon}
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-poppins font-bold mb-3 sm:mb-4 text-white group-hover:bg-gradient-to-r group-hover:from-accent-yellow group-hover:via-yellow-300 group-hover:to-accent-yellow group-hover:bg-[length:200%_auto] group-hover:animate-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                    {benefit.title}
                  </h3>
                  <p className="text-white/70 leading-relaxed text-sm sm:text-base group-hover:text-white/85 transition-colors duration-300">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom decorative element */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-32 bg-gradient-to-t from-accent-blue/[0.08] to-transparent rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form Section */}
      <PartnerForm />

      {/* FAQ Section */}
      <section className="faq-section relative py-16 sm:py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-brand-deep overflow-hidden">
        {/* Background Animated Lights */}
        <div className="absolute inset-0 pointer-events-none opacity-40 sm:opacity-100">
          <div className="absolute top-10 right-[10%] w-[350px] sm:w-[550px] h-[350px] sm:h-[550px] bg-accent-yellow/[0.1] rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 left-[15%] w-[300px] sm:w-[450px] h-[300px] sm:h-[450px] bg-accent-blue/[0.08] rounded-full blur-3xl animate-float-reverse" />
        </div>

        <div className="max-w-5xl mx-auto relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold text-center mb-12 sm:mb-16 md:mb-20 overflow-visible text-white px-4">
            Preguntas{" "}
            <span
              className="block mt-2 bg-gradient-to-r from-accent-yellow from-30% via-white via-50% to-accent-yellow to-70% bg-clip-text text-transparent animate-shimmer-gradient pb-2 tracking-tight"
              style={{ backgroundSize: "400% 100%", lineHeight: "1.3" }}
            >
              Frecuentes
            </span>
          </h2>

          <div className="space-y-4 sm:space-y-6">
            {[
              {
                q: "¿Cuál es el costo de ser aliado?",
                a: "Los Early Adopters tienen tarifa especial. Nos contactaremos con detalles personalizados después de llenar el formulario.",
              },
              {
                q: "¿Qué tipos de negocios pueden ser aliados?",
                a: "Restaurantes, hoteles, tours, tiendas, bares, entretenimiento y cualquier negocio en el sector turístico de Cartagena.",
              },
              {
                q: "¿Necesito experiencia tecnológica?",
                a: "No. Appki es diseñado para ser muy fácil de usar. Ofrecemos capacitación completa para todos nuestros aliados.",
              },
              {
                q: "¿Cuándo puedo empezar?",
                a: "Una vez aprobado tu solicitud, te contactaremos para agendar onboarding. Típicamente, en 1-2 semanas estarás activo.",
              },
              {
                q: "¿Qué pasa si tengo problemas técnicos?",
                a: "Nuestro equipo de soporte estará contigo. Chat, email y llamadas disponibles 24/7 para aliados.",
              },
              {
                q: "¿Qué pasa si quiero ser socio inversionista?",
                a: "Contactate con nosotros a través del email socios@appkiworld.com para más información sobre oportunidades de inversión.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="faq-item group relative bg-white/[0.04] backdrop-blur-xl border border-white/20 rounded-xl sm:rounded-2xl p-6 sm:p-8 lg:p-10 transition-all duration-500 hover:bg-white/[0.06] hover:border-accent-yellow/40 hover:shadow-[0_0_30px_rgba(255,199,0,0.08)]"
              >
                {/* Left accent line */}
                <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-transparent via-accent-yellow to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <h3 className="text-lg sm:text-xl lg:text-2xl font-poppins font-bold text-accent-yellow mb-3 sm:mb-4 group-hover:text-white transition-colors duration-300 pr-4">
                  {faq.q}
                </h3>
                <p className="text-white/70 leading-relaxed text-sm sm:text-base lg:text-lg group-hover:text-white/90 transition-colors duration-300">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-12 sm:mt-16 text-center p-6 sm:p-8 bg-white/[0.02] backdrop-blur-xl border border-white/10 rounded-xl sm:rounded-2xl">
            <p className="text-white/70 text-base sm:text-lg mb-4">
              ¿Más preguntas? Escríbenos a{" "}
              <a
                href="mailto:aliados@appkiworld.com"
                className="text-accent-blue hover:text-accent-yellow transition-colors duration-300 font-semibold break-all"
              >
                aliados@appkiworld.com
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-16 sm:py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-brand-black border-t border-white/10 overflow-hidden">
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none opacity-50 sm:opacity-100">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[800px] h-[250px] sm:h-[400px] bg-gradient-to-r from-accent-yellow/[0.08] via-accent-blue/[0.06] to-accent-yellow/[0.08] rounded-full blur-3xl" />
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold mb-4 sm:mb-6 overflow-visible text-white px-4">
            ¿Listo para{" "}
            <span
              className="bg-gradient-to-r from-accent-yellow from-30% via-white via-50% to-accent-yellow to-70% bg-clip-text text-transparent animate-shimmer-gradient"
              style={{ backgroundSize: "400% 100%" }}
            >
              comenzar
            </span>
            ?
          </h2>
          <p className="text-white/80 text-base sm:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed max-w-2xl mx-auto px-4">
            Vuelve arriba y completa el formulario de Early Adopter. Te
            responderemos en máximo 48 horas.
          </p>
          <a
            href="#formulario"
            className="inline-block bg-gradient-to-r from-accent-yellow to-yellow-400 text-brand-black font-poppins font-bold px-8 sm:px-10 py-3 sm:py-4 rounded-full text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_rgba(255,210,77,0.4)]"
          >
            Ir al formulario
          </a>
        </div>
      </section>
    </main>
  );
}
