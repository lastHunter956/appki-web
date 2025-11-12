"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function QuienesSomos() {
  const heroRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      // Hero Animation
      if (heroRef.current) {
        gsap.fromTo(
          heroRef.current.querySelectorAll(".hero-text"),
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power2.out",
          }
        );
      }

      // Mission Animation
      if (missionRef.current) {
        gsap.fromTo(
          missionRef.current,
          { opacity: 0, x: -60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: missionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Vision Animation
      if (visionRef.current) {
        gsap.fromTo(
          visionRef.current,
          { opacity: 0, x: 60 },
          {
            opacity: 1,
            x: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: visionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Stats Animation
      if (statsRef.current) {
        gsap.fromTo(
          statsRef.current.querySelectorAll(".stat-card"),
          { opacity: 0, scale: 0.8, y: 30 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Values Animation
      if (valuesRef.current) {
        gsap.fromTo(
          valuesRef.current.querySelectorAll(".value-card"),
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
              trigger: valuesRef.current,
              start: "top 75%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // Team Animation
      if (teamRef.current) {
        gsap.fromTo(
          teamRef.current,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: teamRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      }

      // CTA Animation
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.querySelectorAll(".cta-element"),
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
              trigger: ctaRef.current,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          }
        );
      }
    } catch (error) {
      console.error("GSAP animation error:", error);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const values = [
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
            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
            className="stroke-accent-yellow"
          />
        </svg>
      ),
      title: "Seguridad",
      description:
        "Protegemos los datos de turistas y negocios con los más altos estándares de encriptación y cumplimiento normativo internacional.",
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
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
            className="stroke-accent-yellow"
          />
        </svg>
      ),
      title: "Conexión",
      description:
        "Facilitamos encuentros auténticos entre turistas y emprendedores locales, construyendo puentes de confianza.",
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
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
            className="stroke-accent-yellow"
          />
        </svg>
      ),
      title: "Innovación",
      description:
        "Utilizamos IA y tecnología de punta para resolver problemas reales del turismo con soluciones visionarias.",
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
            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            className="stroke-accent-yellow"
          />
        </svg>
      ),
      title: "Excelencia",
      description:
        "Nos comprometemos con la calidad excepcional en cada interacción, servicio y línea de código.",
    },
  ];

  const stats = [
    {
      number: "70+",
      label: "Comercios en Lista",
      icon: (
        <svg
          className="w-8 h-8 text-accent-yellow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 22V12h6v10"
          />
        </svg>
      ),
    },
    {
      number: "24/7",
      label: "Soporte Activo",
      icon: (
        <svg
          className="w-8 h-8 text-accent-yellow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "100%",
      label: "Sin Comisiones (primer mes)",
      icon: (
        <svg
          className="w-8 h-8 text-accent-yellow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      ),
    },
    {
      number: "2024",
      label: "Año de Fundación",
      icon: (
        <svg
          className="w-8 h-8 text-accent-yellow"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <main className="relative overflow-hidden bg-brand-black">
      {/* Hero Section - Premium */}
      <section
        ref={heroRef}
        className="relative min-h-[85vh] flex items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden"
      >
        {/* Premium Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Animated Grid */}
          <div className="absolute inset-0 opacity-[0.03]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `linear-gradient(rgba(255, 199, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 199, 0, 0.1) 1px, transparent 1px)`,
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          {/* Floating Orbs */}
          <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-accent-yellow/[0.04] rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-accent-blue/[0.04] rounded-full blur-3xl animate-[float_25s_ease-in-out_infinite_reverse]" />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-brand-deep via-transparent to-brand-black" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto text-center">
          <div className="hero-text inline-block mb-6 px-6 py-2.5 rounded-full bg-white/[0.06] border border-accent-yellow/20 backdrop-blur-sm">
            <span className="text-sm font-semibold text-accent-yellow uppercase tracking-[0.2em]">
              Nuestra Historia
            </span>
          </div>

          <h1 className="hero-text text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-poppins font-bold mb-8 leading-tight overflow-visible">
            Quiénes{" "}
            <span
              className="block mt-2 bg-gradient-to-r from-accent-yellow from-30% via-white via-50% to-accent-yellow to-70% bg-clip-text text-transparent animate-shimmer-gradient pb-2 tracking-tight"
              style={{
                backgroundSize: "400% 100%",
                lineHeight: "1.3",
              }}
            >
              Somos
            </span>
          </h1>

          <p className="hero-text text-xl sm:text-2xl lg:text-3xl text-white/70 leading-relaxed max-w-4xl mx-auto font-light">
            Una startup cartagenera{" "}
            <span className="text-accent-yellow font-semibold">
              transformando el mercado turístico
            </span>{" "}
            mediante tecnología, seguridad y conexión.
          </p>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-accent-yellow/50"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Stats Section - Premium */}
      <section
        ref={statsRef}
        className="relative py-20 px-6 sm:px-8 lg:px-12 bg-gradient-to-b from-brand-black to-brand-deep"
      >
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="stat-card relative group p-8 rounded-2xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent border border-white/10 backdrop-blur-sm hover:border-accent-yellow/50 transition-all duration-500"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-yellow/0 to-accent-blue/0 opacity-0 group-hover:from-accent-yellow/[0.05] group-hover:to-accent-blue/[0.05] group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10 text-center">
                  <div className="flex justify-center mb-3">{stat.icon}</div>
                  <div className="text-3xl lg:text-4xl font-poppins font-bold text-accent-yellow mb-2">
                    {stat.number}
                  </div>
                  <div className="text-sm text-white/60 font-medium tracking-wide">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative py-24 px-6 sm:px-8 lg:px-12 bg-brand-deep">
        <div className="relative z-10 max-w-6xl mx-auto space-y-32">
          {/* Mission - Premium */}
          <div
            ref={missionRef}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          >
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-accent-yellow/10 rounded-full blur-2xl" />
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-accent-yellow/[0.08] via-transparent to-transparent border border-accent-yellow/20 backdrop-blur-sm">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 lg:w-20 lg:h-20 text-accent-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
                    />
                  </svg>
                </div>
                <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-4 bg-gradient-to-r from-accent-yellow to-yellow-400 bg-clip-text text-transparent">
                  Nuestra Misión
                </h2>
              </div>
            </div>

            <div>
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-6 text-justify">
                Crear un{" "}
                <span className="text-accent-yellow font-semibold justify-center">
                  ecosistema digital seguro
                </span>{" "}
                que conecte turistas con negocios verificados en Cartagena,
                eliminando intermediarios innecesarios y empoderando a
                emprendedores locales con herramientas de primera clase.
              </p>
              <p className="text-base lg:text-lg text-white/60 leading-relaxed text-justify">
                Democratizamos el acceso al turismo digital, permitiendo que
                cada comercio, sin importar su tamaño, compita en igualdad de
                condiciones con las grandes plataformas internacionales.
              </p>
            </div>
          </div>

          {/* Vision - Premium */}
          <div
            ref={visionRef}
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center text-justify"
          >
            <div className="order-2 lg:order-1">
              <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-6 text-justify">
                Ser la{" "}
                <span className="text-accent-blue font-semibold">
                  plataforma número uno en América Latina
                </span>{" "}
                para conexiones turísticas seguras y auténticas, modelo de
                sostenibilidad y confianza para otros destinos.
              </p>
              <p className="text-base lg:text-lg text-white/60 leading-relaxed text-justify">
                Expandir nuestro impacto a las principales ciudades turísticas
                de la región, manteniendo siempre el compromiso con la
                autenticidad local y el desarrollo económico sostenible.
              </p>
            </div>

            <div className="relative order-1 lg:order-2">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-accent-blue/10 rounded-full blur-2xl" />
              <div className="relative p-10 rounded-3xl bg-gradient-to-br from-accent-blue/[0.08] via-transparent to-transparent border border-accent-blue/20 backdrop-blur-sm">
                <div className="mb-4">
                  <svg
                    className="w-16 h-16 lg:w-20 lg:h-20 text-accent-blue"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <h2 className="text-4xl lg:text-5xl font-poppins font-bold mb-4 bg-gradient-to-r from-accent-blue to-blue-400 bg-clip-text text-transparent">
                  Nuestra Visión
                </h2>
              </div>
            </div>
          </div>

          {/* Values - Premium */}
          <div ref={valuesRef}>
            <div className="text-center mb-16">
              <div className="inline-block mb-6 px-6 py-2.5 rounded-full bg-white/[0.06] border border-white/10 backdrop-blur-sm">
                <span className="text-sm font-semibold text-white/60 uppercase tracking-[0.2em]">
                  Lo que nos define
                </span>
              </div>
              <h2 className="text-4xl lg:text-5xl xl:text-6xl font-poppins font-bold overflow-visible">
                Nuestros{" "}
                <span
                  className="block mt-2 bg-gradient-to-r from-accent-yellow from-30% via-white via-50% to-accent-yellow to-70% bg-clip-text text-transparent animate-shimmer-gradient pb-2 tracking-tight"
                  style={{
                    backgroundSize: "400% 100%",
                    lineHeight: "1.3",
                  }}
                >
                  Valores
                </span>
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-8 lg:gap-10">
              {values.map((value, index) => (
                <div key={index} className="value-card group relative">
                  {/* Card Background */}
                  <div className="relative h-full p-10 lg:p-12 rounded-3xl bg-white/[0.04] backdrop-blur-xl border border-white/20 overflow-hidden transition-all duration-500 group-hover:border-accent-yellow/40 group-hover:bg-white/[0.06] group-hover:shadow-[0_0_40px_rgba(255,199,0,0.1)]">
                    {/* Top Accent Line */}
                    <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-yellow to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-accent-yellow/[0.03] rounded-full blur-3xl group-hover:bg-accent-yellow/[0.06] transition-all duration-700" />

                    {/* Content */}
                    <div className="relative z-10">
                      {/* Icon with Premium Background */}
                      <div className="relative mb-8">
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-accent-yellow/[0.15] rounded-3xl blur-2xl scale-110 group-hover:bg-accent-yellow/[0.2] transition-all duration-500" />

                        {/* Icon Container */}
                        <div className="relative w-28 h-28 lg:w-32 lg:h-32 flex items-center justify-center rounded-2xl bg-gradient-to-br from-accent-yellow/[0.12] via-accent-yellow/[0.06] to-transparent border border-accent-yellow/30 group-hover:scale-105 group-hover:border-accent-yellow/50 transition-all duration-500">
                          <div className="w-16 h-16 lg:w-20 lg:h-20">
                            {value.icon}
                          </div>
                        </div>
                      </div>

                      {/* Text Content */}
                      <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-5 tracking-tight group-hover:bg-gradient-to-r group-hover:from-accent-yellow group-hover:via-yellow-300 group-hover:to-accent-yellow group-hover:bg-[length:200%_auto] group-hover:animate-gradient group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {value.title}
                      </h3>
                      <p className="text-base lg:text-lg text-white/70 leading-relaxed group-hover:text-white/85 transition-colors duration-300">
                        {value.description}
                      </p>
                    </div>

                    {/* Bottom Right Decorative Element */}
                    <div className="absolute bottom-0 right-0 w-40 h-40 bg-gradient-to-tl from-accent-blue/5 to-transparent rounded-full blur-2xl group-hover:from-accent-blue/10 transition-all duration-700" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Team Highlight - Premium */}
          <div ref={teamRef} className="relative">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
              <div className="absolute top-0 left-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
            </div>

            <div className="relative p-10 lg:p-14 rounded-3xl bg-gradient-to-br from-white/[0.08] via-white/[0.04] to-transparent border border-white/10 backdrop-blur-xl overflow-hidden">
              {/* Top Accent */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-yellow to-transparent opacity-70" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-shrink-0">
                    <svg
                      className="w-12 h-12 lg:w-14 lg:h-14 text-accent-yellow"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                      />
                    </svg>
                  </div>
                  <h2 className="text-3xl lg:text-4xl font-poppins font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                    Un equipo apasionado por Cartagena
                  </h2>
                </div>

                <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-6 text-justify">
                  Nuestro equipo está compuesto por{" "}
                  <span className="text-accent-yellow font-semibold text-justify">
                    desarrolladores, diseñadores y especialistas en turismo
                  </span>{" "}
                  que conocen y aman Cartagena. Trabajamos día a día para
                  mejorar la experiencia de turistas y apoyar el crecimiento de
                  negocios locales.
                </p>

                <p className="text-base lg:text-lg text-white/60 leading-relaxed text-justify">
                  Con sede en Cartagena y perspectiva global, construimos
                  soluciones pensadas para el mercado local pero con{" "}
                  <span className="text-accent-blue font-semibold text-justify">
                    estándares internacionales
                  </span>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Premium */}
      <section
        ref={ctaRef}
        className="relative py-32 px-6 sm:px-8 lg:px-12 overflow-hidden bg-gradient-to-b from-brand-deep to-brand-black"
      >
        {/* Premium Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-yellow/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <div className="cta-element flex justify-center mb-6">
            <svg
              className="w-16 h-16 lg:w-20 lg:h-20 text-accent-yellow"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
              />
            </svg>
          </div>

          <h2 className="cta-element text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6 leading-tight">
            ¿Quieres ser parte de{" "}
            <span className="block mt-2 bg-gradient-to-r from-accent-yellow via-yellow-400 to-accent-yellow bg-clip-text text-transparent">
              esta revolución?
            </span>
          </h2>

          <p className="cta-element text-xl lg:text-2xl text-white/70 mb-10 leading-relaxed font-light max-w-3xl mx-auto">
            Si eres un negocio en Cartagena o crees en nuestra misión, te
            invitamos a ser aliado de Appki.
          </p>

          <Link
            href="/se-un-socio"
            className="cta-element group inline-flex items-center gap-3 px-10 py-5 rounded-xl bg-gradient-to-r from-accent-yellow via-yellow-400 to-accent-yellow text-brand-black font-bold text-lg shadow-[0_8px_24px_rgba(255,199,0,0.25)] hover:shadow-[0_12px_32px_rgba(255,199,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300"
          >
            <span>Convertirse en aliado</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
        </div>
      </section>
    </main>
  );
}
