import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-brand-black border-t border-white/10 overflow-hidden">
      {/* Subtle Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-30">
        <div className="absolute -bottom-32 left-1/4 w-96 h-96 bg-accent-yellow/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-32 right-1/4 w-96 h-96 bg-accent-blue/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16 py-16 lg:py-20">
          {/* Brand Section */}
          <div>
            <Link href="/" className="inline-block mb-6 group">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl lg:text-4xl font-poppins font-bold bg-gradient-to-r from-accent-yellow via-yellow-400 to-accent-yellow bg-clip-text text-transparent">
                  Appki
                </span>
                <span className="text-xs font-semibold text-white/30 uppercase tracking-[0.2em]">
                  Cartagena
                </span>
              </div>
            </Link>
            <p className="text-text-muted leading-relaxed mb-8 max-w-sm">
              Digitalizando el turismo en Cartagena. Conectando turistas con
              comercios locales de forma directa y segura.
            </p>
            <div className="flex items-center gap-2 text-xs text-white/50">
              <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span>Plataforma activa</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Navegación
            </h4>
            <ul className="space-y-4">
              {[
                { href: "/", label: "Inicio" },
                { href: "/quienes-somos", label: "Quiénes Somos" },
                { href: "/se-un-socio", label: "Sé un Socio" },
              ].map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-text-muted hover:text-accent-yellow transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-poppins font-semibold text-white text-sm uppercase tracking-wider mb-6">
              Contacto
            </h4>
            <div className="space-y-4 mb-8">
              <a
                href="mailto:contacto@appki.com.co"
                className="flex items-center gap-3 text-text-muted hover:text-accent-yellow transition-colors duration-300 group"
              >
                <svg
                  className="w-5 h-5 text-accent-yellow/70 group-hover:text-accent-yellow transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-sm">contacto@appki.com.co</span>
              </a>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-xs text-white/40 uppercase tracking-wider mb-4 font-semibold">
                Síguenos
              </p>
              <div className="flex gap-3">
                {[
                  {
                    href: "https://www.instagram.com/appkiofficial",
                    label: "Instagram",
                    icon: (
                      <>
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </>
                    ),
                  },
                  {
                    href: "https://www.linkedin.com/company/appki/",
                    label: "LinkedIn",
                    icon: (
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.004 1.418-.103.249-.129.597-.129.946v5.441h-3.586V9h3.441v1.494h.05c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                    ),
                  },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="p-2.5 rounded-lg bg-white/5 border border-white/10 hover:border-accent-yellow/50 hover:bg-accent-yellow/10 transition-all duration-300 group"
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <svg
                      className="w-5 h-5 text-text-muted group-hover:text-accent-yellow transition-colors"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {social.icon}
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-text-muted text-sm text-center md:text-left">
              © {currentYear}{" "}
              <span className="text-accent-yellow font-semibold">Appki</span>.
              Todos los derechos reservados.
            </p>
            <p className="text-text-muted text-sm text-center md:text-right">
              Transformando el turismo en Cartagena de Indias
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
