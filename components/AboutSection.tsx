"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);
  const visionRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Validación profesional: verificar que GSAP y ScrollTrigger estén disponibles
    if (typeof window === "undefined" || !gsap || !ScrollTrigger) {
      console.warn("GSAP no está disponible en el entorno actual");
      return;
    }

    const ctx = gsap.context(() => {
      try {
        // Badge animation - con validación
        if (badgeRef.current) {
          gsap.fromTo(
            badgeRef.current,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              scrollTrigger: {
                trigger: badgeRef.current,
                start: "top 90%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Title animation - staggered lines con validación robusta
        if (titleRef.current) {
          const titleChildren = Array.from(titleRef.current.children);
          if (titleChildren.length > 0) {
            gsap.fromTo(
              titleChildren,
              {
                y: 40,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.9,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: titleRef.current,
                  start: "top 85%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        }

        // Subtitle animation con validación
        if (subtitleRef.current) {
          gsap.fromTo(
            subtitleRef.current,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              ease: "power2.out",
              delay: 0.3,
              scrollTrigger: {
                trigger: subtitleRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Stats cards animation - con manejo de excepciones
        if (statsRef.current) {
          const statsChildren = Array.from(statsRef.current.children);
          if (statsChildren.length > 0) {
            gsap.fromTo(
              statsChildren,
              {
                y: 50,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.12,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: statsRef.current,
                  start: "top 80%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        }

        // Features cards animation - con validación completa
        if (featuresRef.current) {
          const featuresChildren = Array.from(featuresRef.current.children);
          if (featuresChildren.length > 0) {
            gsap.fromTo(
              featuresChildren,
              {
                y: 50,
                opacity: 0,
                scale: 0.95,
              },
              {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.9,
                stagger: 0.18,
                ease: "power2.out",
                scrollTrigger: {
                  trigger: featuresRef.current,
                  start: "top 80%",
                  toggleActions: "play none none none",
                },
              }
            );
          }
        }

        // Vision statement animation con validación
        if (visionRef.current) {
          gsap.fromTo(
            visionRef.current,
            {
              y: 40,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: visionRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // CTA button animation con validación
        if (ctaRef.current) {
          gsap.fromTo(
            ctaRef.current,
            {
              y: 30,
              opacity: 0,
            },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
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
        // Manejo profesional de errores para producción
        console.error("Error en las animaciones GSAP:", error);
        // Asegurar que los elementos sean visibles incluso si falla la animación
        if (sectionRef.current) {
          const allRefs = [
            badgeRef,
            titleRef,
            subtitleRef,
            statsRef,
            featuresRef,
            visionRef,
            ctaRef,
          ];
          allRefs.forEach((ref) => {
            if (ref.current) {
              gsap.set(ref.current, { opacity: 1, y: 0 });
            }
          });
        }
      }
    }, sectionRef);

    return () => {
      try {
        ctx.revert();
      } catch (error) {
        console.error("Error al limpiar animaciones:", error);
      }
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-brand-black via-brand-deep to-brand-black"
    >
      {" "}
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 199, 0, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 199, 0, 0.1) 1px, transparent 1px)`,
              backgroundSize: "50px 50px",
            }}
          />
        </div>

        {/* Elegant Light Orbs */}
        <div className="absolute top-20 -left-20 w-96 h-96 bg-accent-yellow/10 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute bottom-20 -right-20 w-96 h-96 bg-accent-blue/10 rounded-full blur-3xl animate-[float_15s_ease-in-out_infinite_reverse]" />

        {/* Geometric Accent Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-yellow/30 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Premium Header */}
        <div className="text-center mb-20 lg:mb-24">
          {/* Overline Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-accent-yellow/20 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-accent-yellow uppercase tracking-[0.2em]">
              Quiénes Somos
            </span>
          </div>

          {/* Main Title with Premium Typography */}
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-poppins font-bold mb-4 overflow-visible"
          >
            {" "}
            <span className="block text-white mb-1 pb-1 tracking-tight">
              La Superapp que está
            </span>
            <span
              className="block bg-gradient-to-r from-accent-yellow from-30% via-white via-50% to-accent-yellow to-70% bg-clip-text text-transparent animate-shimmer-gradient pb-4 tracking-tight"
              style={{
                backgroundSize: "400% 100%",
                lineHeight: "1.3",
              }}
            >
              Digitalizando Cartagena
            </span>
          </h2>

          {/* Compelling Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl text-text-muted max-w-4xl mx-auto leading-relaxed font-light tracking-wide"
          >
            {" "}
            Un ecosistema tecnológico de alto valor que conecta turistas con el
            comercio local de forma{" "}
            <span className="text-accent-yellow font-semibold">
              segura, inteligente y sin intermediarios
            </span>
          </p>
        </div>

        {/* Stats Grid - Corporate Impact Metrics */}
        <div
          ref={statsRef}
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8 mb-20 lg:mb-24 max-w-5xl mx-auto"
        >
          {" "}
          {[
            {
              number: "70+",
              label: "Comercios en lista de espera",
              icon: (
                <svg
                  className="w-8 h-8 text-accent-yellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
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
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  />
                </svg>
              ),
            },
            {
              number: "100%",
              label: "Sin Comisiones",
              icon: (
                <svg
                  className="w-8 h-8 text-accent-yellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              ),
            },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="group relative p-6 lg:p-8 rounded-2xl bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-accent-yellow/50 transition-all duration-500 hover:scale-105"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-yellow/0 to-accent-yellow/0 group-hover:from-accent-yellow/10 group-hover:to-transparent transition-all duration-500" />

              <div className="relative">
                {/* Icon */}
                <div className="mb-3">{stat.icon}</div>

                {/* Number */}
                <div className="text-3xl lg:text-4xl xl:text-5xl font-bold bg-gradient-to-r from-accent-yellow to-white bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>

                {/* Label */}
                <div className="text-sm lg:text-base text-text-muted font-medium">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Key Features Grid */}
        <div ref={featuresRef} className="grid lg:grid-cols-3 gap-8 mb-20">
          {" "}
          {[
            {
              icon: (
                <svg
                  className="w-12 h-12 text-accent-yellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  />
                </svg>
              ),
              title: "Presencia Física",
              description:
                "Tótems inteligentes con WiFi y carga gratis en hoteles, taxis, hostales y zonas turísticas estratégicas.",
            },
            {
              icon: (
                <svg
                  className="w-12 h-12 text-accent-yellow"
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
              title: "Alianzas Institucionales",
              description:
                "Convenios con cámaras de comercio, asociaciones hoteleras y entidades gubernamentales.",
            },
            {
              icon: (
                <svg
                  className="w-12 h-12 text-accent-yellow"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M13 10V3L4 14h7v7l9-11h-7z"
                  />
                </svg>
              ),
              title: "Tecnología de Vanguardia",
              description:
                "Mini apps integradas: alojamiento, citas, transporte, domicilios, descuentos y más.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="group p-8 rounded-2xl bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 hover:border-accent-yellow/40 transition-all duration-500"
            >
              <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-4 font-poppins tracking-tight">
                {feature.title}
              </h3>
              <p className="text-text-muted leading-relaxed tracking-wide">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Vision Statement */}
        <div
          ref={visionRef}
          className="relative p-8 lg:p-12 rounded-3xl bg-gradient-to-br from-accent-yellow/10 via-transparent to-accent-blue/10 border border-accent-yellow/20 backdrop-blur-sm mb-16"
        >
          {" "}
          <div className="absolute top-4 left-4 text-accent-yellow/20 text-6xl font-serif">
            "
          </div>
          <p className="text-xl lg:text-2xl xl:text-3xl text-white font-light text-center leading-relaxed italic px-8 tracking-wide">
            Appki no es futuro,{" "}
            <span className="font-bold text-accent-yellow">es presente</span>.
            <br className="hidden lg:block" />Y llegó para transformar
            Cartagena.
          </p>
          <div className="absolute bottom-4 right-4 text-accent-yellow/20 text-6xl font-serif rotate-180">
            "
          </div>
        </div>

        {/* CTA Button - Premium Design */}
        <div ref={ctaRef} className="text-center">
          {" "}
          <Link
            href="/quienes-somos"
            className="group inline-flex items-center gap-3 px-8 py-4 lg:px-10 lg:py-5 rounded-full bg-gradient-to-r from-accent-yellow to-yellow-400 text-brand-black font-bold text-base lg:text-lg shadow-2xl shadow-accent-yellow/20 hover:shadow-accent-yellow/40 hover:scale-105 transition-all duration-300"
          >
            <span>Descubre Nuestra Historia Completa</span>
            <svg
              className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </Link>
          {/* Supporting Text */}
          <p className="mt-6 text-sm text-text-muted">
            Conoce cómo estamos revolucionando el turismo en Cartagena
          </p>
        </div>
      </div>
    </section>
  );
}
