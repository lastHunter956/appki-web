"use client";

import { useState, useEffect, useRef } from "react";
//import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function PartnerForm() {
  const [formData, setFormData] = useState({
    name: "",
    business: "",
    phone: "",
    email: "",
    honeypot: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // Refs for GSAP animations
  const sectionRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Validación profesional: verificar que GSAP y ScrollTrigger estén disponibles
    if (typeof window === "undefined" || !gsap || !ScrollTrigger) {
      console.warn("GSAP no está disponible en el entorno actual");
      return;
    }

    const ctx = gsap.context(() => {
      try {
        // Badge animation
        if (badgeRef.current) {
          gsap.fromTo(
            badgeRef.current,
            { y: 30, opacity: 0 },
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

        // Title animation
        if (titleRef.current) {
          gsap.fromTo(
            titleRef.current,
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.9,
              ease: "power2.out",
              scrollTrigger: {
                trigger: titleRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Subtitle animation
        if (subtitleRef.current) {
          gsap.fromTo(
            subtitleRef.current,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.8,
              delay: 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: subtitleRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        }

        // Form card animation
        if (formRef.current) {
          gsap.fromTo(
            formRef.current,
            { y: 50, opacity: 0, scale: 0.95 },
            {
              y: 0,
              opacity: 1,
              scale: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: formRef.current,
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        }
      } catch (error) {
        console.error("Error en las animaciones GSAP:", error);
        // Fallback: asegurar que los elementos sean visibles
        if (sectionRef.current) {
          const allRefs = [badgeRef, titleRef, subtitleRef, formRef];
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      // Anti-spam honeypot
      if (formData.honeypot) {
        console.log("[Security] Spam detected");
        setIsLoading(false);
        return;
      }

      // Validación cliente
      if (
        !formData.name ||
        !formData.business ||
        !formData.phone ||
        !formData.email
      ) {
        setError("Por favor completa todos los campos");
        setIsLoading(false);
        return;
      }

      // Validación email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.email)) {
        setError("Por favor ingresa un email válido");
        setIsLoading(false);
        return;
      }

      // Enviar a API
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al enviar el formulario");
      }

      // Éxito
      setSubmitted(true);

      // Reset después de 5 segundos
      setTimeout(() => {
        setFormData({
          name: "",
          business: "",
          phone: "",
          email: "",
          honeypot: "",
        });
        setSubmitted(false);
      }, 5000);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Error al procesar tu solicitud. Intenta de nuevo."
      );
      console.error("Form submission error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="formulario"
      className="relative py-20 sm:py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-brand-deep via-brand-black to-brand-deep"
    >
      {/* Sophisticated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `linear-gradient(rgba(255, 199, 0, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 199, 0, 0.05) 1px, transparent 1px)`,
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        {/* Elegant Light Orbs */}
        <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-accent-yellow/[0.03] rounded-full blur-3xl animate-[float_20s_ease-in-out_infinite]" />
        <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-accent-blue/[0.03] rounded-full blur-3xl animate-[float_25s_ease-in-out_infinite_reverse]" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Premium Header */}
        <div className="text-center mb-16 lg:mb-20">
          {/* Overline Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-accent-yellow/20 backdrop-blur-sm mb-8"
          >
            <div className="w-2 h-2 rounded-full bg-accent-yellow animate-pulse" />
            <span className="text-xs sm:text-sm font-semibold text-accent-yellow uppercase tracking-[0.2em]">
              Únete Ahora
            </span>
          </div>

          {/* Main Title */}
          <h2
            ref={titleRef}
            className="text-4xl sm:text-5xl lg:text-6xl font-poppins font-bold mb-6 overflow-visible"
          >
            <span className="block text-white mb-2 tracking-tight">
              Sé parte de los
            </span>
            <span
              className="block bg-gradient-to-r from-accent-yellow from-30% via-white via-50% to-accent-yellow to-70% bg-clip-text text-transparent animate-shimmer-gradient pb-2 tracking-tight"
              style={{
                backgroundSize: "400% 100%",
                lineHeight: "1.3",
              }}
            >
              Early Adopters
            </span>
          </h2>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg sm:text-xl lg:text-2xl text-text-muted max-w-3xl mx-auto leading-relaxed font-light tracking-wide"
          >
            Únete a la revolución digital en Cartagena.{" "}
            <span className="text-accent-yellow font-semibold">
              Acceso prioritario y beneficios exclusivos
            </span>{" "}
            para socios fundadores.
          </p>
        </div>

        {/* Form Card - Premium */}
        <div
          ref={formRef}
          className="relative p-10 lg:p-14 rounded-3xl bg-gradient-to-br from-white/[0.12] via-white/[0.08] to-white/[0.04] border border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
        >
          {/* Premium Top Accent */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent-yellow to-transparent opacity-70" />

          {/* Subtle Corner Accents */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-accent-yellow/10 to-transparent rounded-tl-3xl pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent-blue/10 to-transparent rounded-br-3xl pointer-events-none" />

          {/* Hover Glow Effect */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-accent-yellow/0 to-accent-blue/0 opacity-0 hover:from-accent-yellow/[0.06] hover:to-accent-blue/[0.06] hover:opacity-100 transition-all duration-700 pointer-events-none" />

          <div className="relative z-10">
            {submitted ? (
              // Success State - Premium
              <div className="py-12 lg:py-16 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-accent-yellow to-yellow-400 mb-6 animate-scaleIn shadow-lg">
                  <svg
                    className="w-10 h-10 text-brand-black"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                <h3 className="text-3xl lg:text-4xl font-poppins font-bold text-white mb-4">
                  ¡Bienvenido al equipo!
                </h3>

                <p className="text-lg lg:text-xl text-text-muted max-w-lg mx-auto leading-relaxed mb-6">
                  Nos pondremos en contacto pronto con más detalles sobre los
                  beneficios exclusivos para socios fundadores.
                </p>

                <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 border border-accent-yellow/20">
                  <svg
                    className="w-5 h-5 text-accent-yellow animate-pulse"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span className="text-sm text-white/80 font-medium">
                    Revisa tu email pronto
                  </span>
                </div>
              </div>
            ) : (
              // Form State - Premium
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Error Alert */}
                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 animate-slideDown">
                    <div className="flex items-center gap-3">
                      <svg
                        className="w-5 h-5 text-red-400 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <p className="text-red-400 text-sm font-medium">
                        {error}
                      </p>
                    </div>
                  </div>
                )}

                {/* Honeypot Field */}
                <input
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  style={{ display: "none" }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name Field */}
                <div className="space-y-2.5">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-white tracking-wide"
                  >
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.08] border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/30 focus:bg-white/[0.12] transition-all duration-300 backdrop-blur-sm"
                    placeholder="Ingresa tu nombre completo"
                    required
                  />
                </div>

                {/* Business Name Field */}
                <div className="space-y-2.5">
                  <label
                    htmlFor="business"
                    className="block text-sm font-semibold text-white tracking-wide"
                  >
                    Nombre de la empresa
                  </label>
                  <input
                    type="text"
                    id="business"
                    name="business"
                    value={formData.business}
                    onChange={handleChange}
                    className="w-full px-5 py-4 rounded-xl bg-white/[0.08] border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/30 focus:bg-white/[0.12] transition-all duration-300 backdrop-blur-sm"
                    placeholder="Restaurante, hotel, tour, etc."
                    required
                  />
                </div>

                {/* Phone & Email Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Phone Field */}
                  <div className="space-y-2.5">
                    <label
                      htmlFor="phone"
                      className="block text-sm font-semibold text-white tracking-wide"
                    >
                      Teléfono
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.08] border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/30 focus:bg-white/[0.12] transition-all duration-300 backdrop-blur-sm"
                      placeholder="+57 3XX XXXXXXX"
                      required
                    />
                  </div>

                  {/* Email Field */}
                  <div className="space-y-2.5">
                    <label
                      htmlFor="email"
                      className="block text-sm font-semibold text-white tracking-wide"
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 rounded-xl bg-white/[0.08] border border-white/20 text-white placeholder-white/40 focus:outline-none focus:border-accent-yellow focus:ring-2 focus:ring-accent-yellow/30 focus:bg-white/[0.12] transition-all duration-300 backdrop-blur-sm"
                      placeholder="tu@empresa.com"
                      required
                    />
                  </div>
                </div>

                {/* Submit Button - Premium */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="group relative w-full px-8 py-5 rounded-xl bg-gradient-to-r from-accent-yellow via-yellow-400 to-accent-yellow text-brand-black font-bold text-lg overflow-hidden shadow-[0_8px_24px_rgba(255,199,0,0.25)] hover:shadow-[0_12px_32px_rgba(255,199,0,0.4)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 disabled:shadow-none"
                  style={{ backgroundSize: "200% 100%" }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 pointer-events-none" />

                  {isLoading ? (
                    <span className="relative flex items-center justify-center gap-3">
                      <span className="inline-block w-5 h-5 border-3 border-brand-black/20 border-t-brand-black rounded-full animate-spin" />
                      <span className="font-bold">Enviando...</span>
                    </span>
                  ) : (
                    <span className="relative flex items-center justify-center gap-2.5">
                      <span className="font-bold">
                        Únete a los Early Adopters
                      </span>
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
                    </span>
                  )}
                </button>

                {/* Privacy Note */}
                <p className="text-sm text-white/50 text-center leading-relaxed pt-6">
                  <span className="inline-block mr-1.5">🔒</span>
                  Tus datos están protegidos. Nos comprometemos con tu
                  privacidad.
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-sm text-white/60">
            ¿Tienes preguntas?{" "}
            <a
              href="mailto:contacto@appki.com.co"
              className="text-accent-yellow hover:underline font-semibold"
            >
              Contáctanos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
