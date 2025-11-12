"use client";

import { useState, useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface ServiceCardProps {
  icon: string | ReactNode;
  title: string;
  description: string;
  detailedDescription?: string;
  index: number;
  features?: string[];
}

export default function ServiceCard({
  icon,
  title,
  description,
  detailedDescription,
  index,
  features = [],
}: ServiceCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    try {
      const element = cardRef.current;

      // GSAP scroll-reveal animation
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            end: "top 65%",
            toggleActions: "play none none none",
          },
        }
      );
    } catch (error) {
      console.error("GSAP animation error:", error);
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === cardRef.current) {
          trigger.kill();
        }
      });
    };
  }, []);

  const renderIcon = () => {
    if (typeof icon === "string") {
      return <span className="text-4xl sm:text-5xl">{icon}</span>;
    }
    return <div className="w-10 h-10 sm:w-12 sm:h-12 text-white">{icon}</div>;
  };

  return (
    <div
      ref={cardRef}
      className={`flip-card ${isFlipped ? "flip-card-flipped" : ""}`}
      style={{
        animationDelay: `${index * 100}ms`,
      }}
    >
      <div className="flip-card-inner" style={{ minHeight: "500px" }}>
        {/* FRONT SIDE */}
        <div className="flip-card-front">
          <div className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-accent-yellow/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent-yellow/20 h-full">
            {/* Decorative gradient orbs */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-yellow/10 rounded-full blur-3xl group-hover:bg-accent-yellow/20 transition-all duration-700" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-accent-blue/10 rounded-full blur-3xl group-hover:bg-accent-blue/20 transition-all duration-700" />

            {/* Animated border effect */}
            <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-yellow via-accent-blue to-accent-yellow bg-[length:200%_100%] animate-gradient-sweep opacity-20" />
            </div>

            <div className="relative z-10 flex flex-col h-full p-6 sm:p-8 lg:p-10">
              {/* Icon with animated background */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/20 to-accent-blue/20 rounded-2xl blur-xl" />
                <div className="relative w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/20">
                  {renderIcon()}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-poppins font-bold text-white mb-4 leading-tight">
                {title}
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base lg:text-lg text-text-muted leading-relaxed mb-6 flex-grow">
                {description}
              </p>

              {/* CTA Button */}
              <div className="mt-auto">
                <button
                  onClick={() => setIsFlipped(true)}
                  className="group/btn w-full flex items-center justify-between px-6 py-4 rounded-xl bg-white/5 hover:bg-accent-yellow/10 border border-white/10 hover:border-accent-yellow/50 transition-all duration-300"
                >
                  <span className="text-sm sm:text-base font-semibold text-white group-hover/btn:text-accent-yellow transition-colors">
                    Descubrir más
                  </span>
                  <svg
                    className="w-5 h-5 text-accent-yellow group-hover/btn:translate-x-2 transition-transform duration-300"
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
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* BACK SIDE */}
        <div className="flip-card-back">
          <div className="relative overflow-auto rounded-3xl bg-gradient-to-br from-accent-yellow/10 via-accent-blue/5 to-white/5 backdrop-blur-xl border-2 border-accent-yellow/30 shadow-2xl shadow-accent-yellow/20 h-full">
            {/* Premium background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent-yellow/5 via-transparent to-accent-blue/5 pointer-events-none" />
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent-yellow/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-blue/10 rounded-full blur-3xl pointer-events-none" />

            {/* Animated border */}
            <div className="absolute inset-0 rounded-3xl pointer-events-none">
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-accent-yellow via-accent-blue to-accent-yellow bg-[length:200%_100%] animate-gradient-sweep opacity-30" />
            </div>

            <div className="relative z-10 flex flex-col h-full p-6 sm:p-8 lg:p-10">
              {/* Header with Icon */}
              <div className="flex items-center gap-4 mb-4 pb-4 border-b border-white/20">
                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl bg-gradient-to-br from-accent-yellow/20 to-accent-blue/20 border border-accent-yellow/30">
                  {typeof icon === "string" ? (
                    <span className="text-2xl sm:text-3xl">{icon}</span>
                  ) : (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 text-white">
                      {icon}
                    </div>
                  )}
                </div>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-poppins font-bold bg-gradient-to-r from-accent-yellow to-white bg-clip-text text-transparent">
                  {title}
                </h3>
              </div>

              {/* Detailed Description */}
              <div className="mb-4">
                <p className="text-xs sm:text-sm lg:text-base text-white/80 leading-relaxed">
                  {detailedDescription || description}
                </p>
              </div>

              {/* Features Section */}
              <div className="mb-4 flex-grow">
                <h4 className="text-xs sm:text-sm font-semibold text-accent-yellow uppercase tracking-wider mb-3 flex items-center gap-2">
                  <svg
                    className="w-4 h-4"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Características Principales
                </h4>
                <ul className="space-y-2.5">
                  {features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm lg:text-base text-white/90"
                      style={{
                        animation: "fadeInUp 0.5s ease-out forwards",
                        animationDelay: `${idx * 100}ms`,
                        opacity: 0,
                      }}
                    >
                      <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent-yellow/20 border border-accent-yellow/50 flex items-center justify-center mt-0.5">
                        <svg
                          className="w-3 h-3 text-accent-yellow"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={3}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span className="leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Back Button */}
              <button
                onClick={() => setIsFlipped(false)}
                className="group/btn w-full flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 rounded-xl bg-gradient-to-r from-accent-yellow/20 to-accent-blue/20 hover:from-accent-yellow/30 hover:to-accent-blue/30 border border-accent-yellow/50 hover:border-accent-yellow transition-all duration-300 flex-shrink-0"
              >
                <svg
                  className="w-5 h-5 text-accent-yellow group-hover/btn:-translate-x-2 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
                <span className="text-sm sm:text-base font-semibold text-white group-hover/btn:text-accent-yellow transition-colors">
                  Mostrar menos
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
