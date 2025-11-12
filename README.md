# Appki — Cartagena Segura 🌴

Landing page empresarial para Appki, plataforma que conecta turistas y negocios en Cartagena mediante herramientas digitales seguras.

## 🚀 Características

- **Next.js 14** con App Router
- **TailwindCSS** con paleta custom personalizada
- **GSAP + Lenis** para animaciones suaves y scroll smoothing
- **Responsive** mobile-first (360px, 768px, 1024px, 1440px)
- **SEO Optimizado** con meta tags, Open Graph, JSON-LD
- **Accesibilidad** WCAG AA (semantic HTML, aria-labels, focus states)
- **TypeScript** para type safety
- **Componentes reutilizables** listos para producción

## 📋 Estructura del Proyecto

```
app/
  ├── layout.tsx              # Root layout con Lenis y fonts
  ├── page.tsx                # Home / Landing page
  ├── globals.css             # Tailwind + custom utilities
  ├── quienes-somos/
  │   └── page.tsx            # About page
  └── se-un-socio/
      └── page.tsx            # Partner signup page

components/
  ├── Header.tsx              # Sticky header con nav
  ├── Hero.tsx                # Hero section con background image
  ├── ServiceCard.tsx         # Card reutilizable para servicios
  ├── SEOSection.tsx          # Sección de visibilidad para negocios
  ├── TestimonialCarousel.tsx # Carrusel de testimonios
  ├── PartnerForm.tsx         # Formulario de Early Adopters
  └── Footer.tsx              # Footer con links y social

lib/
  ├── fonts.ts                # Google Fonts config (Poppins, Inter)
  ├── hooks/
  │   └── useAnimation.ts    # Hooks para GSAP animations
  └── providers/
      └── LenisProvider.tsx   # Lenis smooth scroll setup

public/
  └── images/
      ├── hero-palenquera.jpg # Hero background (TODO: agregar)
      ├── seo-dashboard.jpg   # SEO section image (TODO: agregar)
      └── og-image.jpg        # Open Graph image (TODO: agregar)
```

## 🎨 Paleta de Colores (Tailwind Config)

```javascript
colors: {
  'brand-black': '#0b0b0d',        // Fondo principal
  'brand-deep': '#0f1114',         // Fondo secundario
  'accent-yellow': '#FFD24D',      // CTA principal
  'accent-blue': '#0AA5FF',        // Acento secundario
  'card-bg': 'rgba(255,255,255,0.04)',
  'text-primary': '#E6E7E8',
  'text-muted': '#9AA0A6',
}
```

## 📝 Tipografía

- **Headings (H1, H2, H3)**: Poppins, 700
  - H1: 48px - 64px (responsive)
  - H2: 28px - 36px
- **Body**: Inter, 400/500, 16px, line-height 1.6

## 🛠️ Instalación & Setup

### 1. Instalar dependencias

```bash
npm install
```

### 2. Configurar Email API (✅ YA IMPLEMENTADO)

El endpoint `/api/contact` está configurado para procesar el formulario de contacto.

**Configuración rápida (5 pasos):**

1. Crear archivo `.env.local` en la raíz del proyecto
2. Agregar variables:
   ```bash
   SENDGRID_API_KEY=SG_xxxxxxxxxxxx
   SENDGRID_FROM_EMAIL=noreply@appki.com.co
   SENDGRID_TO_EMAIL=socios@appki.com.co
   NEXT_PUBLIC_SITE_URL=http://localhost:3000
   ```
3. Reiniciar servidor: `npm run dev`
4. Probar: `.\scripts\test-api.ps1`
5. ¡Listo! Los formularios envían emails automáticamente

**Documentación:**

- `QUICK_START_API.md` - Guía rápida
- `API_DOCUMENTATION.md` - Referencia completa
- `API_IMPLEMENTATION_SUMMARY.md` - Estado de implementación

### 3. Agregar imágenes

Coloca las imágenes en `/public/images/`:

- `hero-palenquera.jpg` (Hero background)
- `seo-dashboard.jpg` (SEO section)
- `og-image.jpg` (Open Graph 1200x630px)

### 4. Configurar reCAPTCHA (opcional)

1. Registra tu sitio en https://www.google.com/recaptcha/admin
2. Obtén `NEXT_PUBLIC_RECAPTCHA_SITE_KEY`
3. Agrega en `.env.local`

## 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Abrir http://localhost:3000 en el navegador
```

## 🏗️ Construcción

```bash
# Build para producción
npm run build

# Iniciar servidor de producción
npm start
```

## 📱 Testing Responsivo

Probado en breakpoints:

- **360px** - Móviles pequeños
- **768px** - Tablets
- **1024px** - Desktops pequeños
- **1440px** - Desktops grandes

Usa DevTools en Chrome/Firefox para verificar en cada tamaño.

## 🔒 Seguridad & SEO

### Meta Tags

- ✅ Title & Description dinámicos
- ✅ Open Graph (og:title, og:description, og:image)
- ✅ Twitter Card
- ✅ Canonical URLs
- ✅ Robots directives
- ✅ Hreflang alternates (configurado para es-CO, en-US)

### JSON-LD Schema

- ✅ Organization schema en layout root
- ✅ Listo para expandir a LocalBusiness schema

### Accesibilidad

- ✅ Semantic HTML5 (header, nav, main, footer)
- ✅ ARIA labels en buttons/forms
- ✅ Focus visible states
- ✅ Contraste WCAG AA (azul/amarillo sobre negro)
- ✅ Skip links (opcional, agregar si needed)

## 🎬 Animaciones

### Lenis (Smooth Scroll)

- Activado globalmente en `LenisProvider.tsx`
- Config: duration 1.2s, easing personalizado

### GSAP + ScrollTrigger

- **Hero**: Fade-up + stagger en CTAs
- **ServiceCards**: Fade-in + y-offset con stagger 0.12s
- **SEOSection**: Parallax en imagen, fade-in en texto
- **Hover effects**: Scale 1.05 + glow shadow

Ver `components/ServiceCard.tsx` para ejemplos de implementación.

## 🔐 Spam Protection

El formulario incluye:

- **Honeypot field**: Campo oculto para capturar bots
- **Email validation**: Regex simple
- **reCAPTCHA**: TODO (integración manual)

## 📧 Integración Email

Para recibir submissions:

1. **SendGrid** (recomendado):

   ```javascript
   // .env.local
   SENDGRID_API_KEY=sg_xxxx...
   ```

2. **Mailgun**:

   ```javascript
   // .env.local
   MAILGUN_API_KEY=key-xxxx...
   MAILGUN_DOMAIN=sandboxxx.mailgun.org
   ```

3. **Resonable backend**: Crear endpoint en `/api/contact` que maneje POST.

## 🌐 Deployment

### Vercel (Recomendado)

```bash
npm i -g vercel
vercel
```

### Netlify

```bash
netlify deploy --prod
```

### Otros

Cualquier servidor que soporte Node.js 18+ y Next.js 14.

## 📋 Checklist Pre-Producción

- [ ] Agregar imágenes en `/public/images/`
- [ ] Configurar dominio custom en env
- [ ] Integrar reCAPTCHA v3
- [ ] Configurar servicio de email
- [ ] Probar en todos los breakpoints
- [ ] Revisar SEO con Google Lighthouse
- [ ] Verificar accesibilidad con aXe DevTools
- [ ] Testing de formulario (validación + spam check)
- [ ] Agregar analytics (GA4, Mixpanel, etc.)
- [ ] SSL/HTTPS configurado
- [ ] Configurar DNS y subdominio (www, api, etc.)
- [ ] Backup de base de datos (si aplicable)

## 🤝 Contribuir

Este proyecto está optimizado para colaboración. Para cambios:

1. Crea rama: `git checkout -b feature/nombre`
2. Commit: `git commit -m "feat: descripción"`
3. Push: `git push origin feature/nombre`
4. PR al main

## 📞 Soporte

Para preguntas técnicas: `dev@appki.com.co`
Para socios: `socios@appki.com.co`

## 📄 Licencia

© 2024 Appki - Cartagena Segura. Todos los derechos reservados.

---

**Última actualización**: Noviembre 2024
**Versión**: 1.0.0
**Estado**: Ready for Production ✅
