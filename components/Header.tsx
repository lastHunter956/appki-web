"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      // Save current scroll position
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.overflow = "unset";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }
  }, [isMenuOpen]);

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300); // Duration of slideDownOut animation
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-brand-black/95 backdrop-blur-xl border-white/10 shadow-2xl shadow-black/50"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-7 lg:px-12">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo - Premium Design */}
          <Link href="/" className="flex items-center gap-3 group relative">
            <div className="relative">
              <span className="text-3xl font-poppins font-bold bg-gradient-to-r from-accent-yellow via-yellow-400 to-accent-yellow bg-clip-text text-transparent group-hover:from-accent-blue group-hover:via-blue-400 group-hover:to-accent-blue transition-all duration-500">
                Appki
              </span>
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-yellow to-accent-blue group-hover:w-full transition-all duration-500" />
            </div>
            <div className="h-8 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent hidden sm:block" />
            <span className="text-xs font-poppins font-semibold text-white/60 uppercase tracking-[0.2em] hidden sm:inline group-hover:text-white/80 transition-colors">
              Cartagena
            </span>
          </Link>

          {/* Desktop Navigation - Ultra Premium */}
          <nav className="hidden md:flex items-center gap-1">
            {[
              { href: "/", label: "Inicio" },
              { href: "/quienes-somos", label: "Quiénes somos" },
              { href: "/se-un-socio", label: "ser aliado" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-5 py-2 text-base font-medium text-white/80 hover:text-white transition-colors group"
              >
                <span className="relative z-10">{item.label}</span>
                <div className="absolute inset-0 bg-white/5 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300" />
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-accent-yellow group-hover:w-3/4 transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Menu */}
          <div className="flex items-center gap-4">
            {/* Premium CTA Button */}
            <Link
              href="/se-un-socio"
              className="hidden sm:flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-yellow to-yellow-500 text-brand-black font-bold text-sm rounded-xl hover:shadow-xl hover:shadow-accent-yellow/50 hover:scale-105 transition-all duration-300 group"
            >
              <span>Ser aliados</span>
              <svg
                className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            {/* Hamburger Menu - Animated */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-5 flex flex-col justify-between">
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    isMenuOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Ultra Premium Full Screen */}
      <div
        className={`md:hidden fixed top-0 left-0 right-0 bottom-0 z-[100] bg-gradient-to-br from-brand-black via-brand-deep to-brand-black scrollbar-hide ${
          isMenuOpen && !isClosing
            ? "opacity-100 visible animate-slide-up-in"
            : isClosing
            ? "opacity-100 visible animate-slide-down-out"
            : "opacity-0 invisible pointer-events-none"
        }`}
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          overflow: "auto",
          scrollbarWidth: "none", // Firefox
          msOverflowStyle: "none", // IE/Edge
        }}
      >
        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />

        <div className="relative h-full flex flex-col">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between px-6 h-24 border-b border-white/5">
            <Link
              href="/"
              className="text-2xl font-poppins font-bold text-accent-yellow"
              onClick={handleCloseMenu}
            >
              Appki
            </Link>
            <button
              onClick={handleCloseMenu}
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 transition-all duration-300"
              aria-label="Cerrar menú"
            >
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex-1 flex flex-col justify-center px-8 space-y-2">
            {[
              {
                href: "/",
                label: "Inicio",
                icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6",
              },
              {
                href: "/quienes-somos",
                label: "Quiénes somos",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z",
              },
              {
                href: "/se-un-socio",
                label: "ser aliado",
                icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
              },
            ].map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group flex items-center gap-4 px-6 py-5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent-yellow/50 transition-all duration-500 ${
                  isMenuOpen && !isClosing ? "animate-fade-in-up" : ""
                }`}
                style={{ animationDelay: `${index * 100 + 150}ms` }}
                onClick={handleCloseMenu}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-yellow/20 to-accent-blue/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg
                    className="w-6 h-6 text-accent-yellow"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={item.icon}
                    />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-xl font-poppins font-semibold text-white group-hover:text-accent-yellow transition-colors">
                    {item.label}
                  </p>
                </div>
                <svg
                  className="w-5 h-5 text-white/40 group-hover:text-accent-yellow group-hover:translate-x-1 transition-all"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="px-8 pb-8 space-y-3">
            <Link
              href="/se-un-socio"
              className="flex items-center justify-center gap-2 w-full px-8 py-5 bg-gradient-to-r from-accent-yellow to-yellow-500 text-brand-black font-bold text-lg rounded-2xl shadow-2xl shadow-accent-yellow/30 hover:scale-105 transition-all duration-300"
              onClick={handleCloseMenu}
            >
              <span>Comenzar ahora</span>
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2.5}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>

            <Link
              href="#servicios"
              className="flex items-center justify-center gap-2 w-full px-8 py-5 bg-transparent border-2 border-accent-blue text-accent-blue font-bold text-lg rounded-2xl hover:bg-accent-blue hover:text-white transition-all duration-300"
              onClick={handleCloseMenu}
            >
              <span>Explorar servicios</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
