# 🎨 Appki Landing - Arquitectura Visual

## 📐 Estructura de Rutas

```
https://Appki.co/
│
├─ /                      (Home - Landing Principal)
│  ├─ Header
│  ├─ Hero (full-screen)
│  ├─ Services (4 cards)
│  ├─ SEO Section
│  ├─ Testimonials Carousel
│  ├─ About Preview
│  ├─ Partner Form Mini
│  └─ Footer
│
├─ /quienes-somos         (About Page)
│  ├─ Hero Mini
│  ├─ Misión & Visión
│  ├─ Valores (4 cards)
│  ├─ Team Section
│  └─ CTA → /se-un-socio
│
└─ /se-un-socio           (Partner Signup)
   ├─ Hero Mini
   ├─ Benefits (6 cards)
   ├─ Partner Form (Full)
   ├─ FAQ (5 items)
   └─ Final CTA
```

---

## 🎯 Flujo de Usuario

```
┌─────────────────────────────────────────┐
│  Usuario llega a Appki.co               │
└────────────────┬────────────────────────┘
                 │
                 ▼
        ┌─────────────────┐
        │  Ve Hero        │
        │  "Cartagena     │
        │   Segura"       │
        └────────┬────────┘
                 │
        ┌────────┴────────┐
        │                 │
        ▼                 ▼
   ┌─────────┐      ┌──────────┐
   │ Explorar │      │ Hazte    │
   │ Servicios│      │  Socio   │
   └────┬────┘      └────┬─────┘
        │                 │
        ▼                 ▼
   ┌─────────────┐   ┌────────────────┐
   │ Scroll a    │   │ /se-un-socio   │
   │ Servicios,  │   │ (Formulario)   │
   │ SEO, etc    │   │ + FAQ          │
   └────┬────────┘   └────┬───────────┘
        │                 │
        ├─────────┬───────┘
        │         │
        ▼         ▼
   ┌────────────────────┐
   │ Completa Formulario│
   │ Early Adopter      │
   └────┬───────────────┘
        │
        ▼
   ┌────────────────────┐
   │ Email Success      │
   │ + Contacto equipo  │
   └────────────────────┘
```

---

## 🎬 Animaciones por Sección

```
HEADER (Sticky)
├─ Logo: Hover color change
├─ Links: Underline on hover
└─ CTA: Scale on hover

HERO (Full Screen)
├─ Content: Fade-up + Stagger (200ms)
├─ Valerio Card: Blue accent
├─ Scroll Indicator: Bounce infinito
└─ Background: Parallax overlay

SERVICES (4 Cards)
├─ Cards: Fade-in + Y-offset + Stagger (120ms)
├─ Hover: Scale 1.05 + Glow shadow
├─ Arrow: Fade in on hover
└─ ScrollTrigger: Start at 85% viewport

SEO SECTION
├─ Image: Parallax (1:3 ratio)
├─ Content: Fade-in stagger
└─ Checkmarks: Animate on view

TESTIMONIALS
├─ Auto-play: 5s interval
├─ Manual: Arrows + dots
├─ Fade-in: On slide change
└─ Pause: On mouse enter

FORM
├─ Inputs: Focus ring on accent-blue
├─ Success: Modal + confetti (CSS)
└─ Error: Red border + message

FOOTER
├─ Links: Hover color change
└─ Social: Scale on hover
```

---

## 🎨 Color System

```
BACKGROUNDS
┌──────────────────────────────────────┐
│ brand-black (#0b0b0d)    - Primary   │
│ brand-deep  (#0f1114)    - Secondary │
└──────────────────────────────────────┘

ACCENTS
┌──────────────────────────────────────┐
│ accent-yellow (#FFD24D)  - CTA/Main  │
│ accent-blue   (#0AA5FF)  - Secondary │
└──────────────────────────────────────┘

TEXT
┌──────────────────────────────────────┐
│ text-primary (#E6E7E8)   - Main      │
│ text-muted   (#9AA0A6)   - Secondary │
└──────────────────────────────────────┘
```

---

## 📐 Responsive Breakpoints

```
360px  (Mobile Small)
   │
   │  ┌─ Header: Menu hamburguesa
   │  ├─ Hero: Single column
   │  ├─ Services: 1 column
   │  ├─ SEO: Stacked (image arriba)
   │  └─ Form: Full width
   │
768px  (Tablet)
   │
   │  ┌─ Header: Menu mixed
   │  ├─ Hero: 1.5 column
   │  ├─ Services: 2 columns
   │  ├─ SEO: 2 columns
   │  └─ Form: Centered
   │
1024px (Desktop Small)
   │
   │  ┌─ Header: Full nav
   │  ├─ Hero: 2 columns
   │  ├─ Services: 4 columns (2x2)
   │  ├─ SEO: 2 columns side-by-side
   │  └─ Form: 2-column layout
   │
1440px (Desktop Large)
   │
   └─ Full layout optimization
      ├─ Max-width: 1280px container
      ├─ Generous padding
      └─ Large typography
```

---

## 🚀 Performance Budget

```
Lighthouse Targets:
┌─────────────────────────┬──────┐
│ Performance             │ 90+  │
│ Accessibility           │ 95+  │
│ Best Practices          │ 90+  │
│ SEO                     │ 100  │
└─────────────────────────┴──────┘

Bundle Size:
┌─────────────────────────┬──────┐
│ JavaScript (gzipped)    │ <150 │ KB
│ CSS (gzipped)           │ <20  │ KB
│ Fonts (Google Fonts)    │ <40  │ KB
│ Images (optimized)      │ <100 │ KB per img
└─────────────────────────┴──────┘

Load Times:
┌─────────────────────────┬──────┐
│ First Contentful Paint  │ <1.5 │ s
│ Largest Contentful Paint│ <2.5 │ s
│ Cumulative Layout Shift │ <0.1 │
└─────────────────────────┴──────┘
```

---

## 📊 Component Hierarchy

```
RootLayout
├── LenisProvider (Smooth scroll)
├── Header
│  ├── Logo
│  ├── Nav Links
│  └── CTA Button
├── main
│  ├── Page (/)
│  │  ├── Hero
│  │  ├── Section (Services)
│  │  │  └── ServiceCard (x4)
│  │  ├── SEOSection
│  │  ├── Section (About)
│  │  ├── TestimonialCarousel
│  │  ├── PartnerForm
│  │  └── Section (Final CTA)
│  │
│  ├── Page (/quienes-somos)
│  │  ├── Hero Mini
│  │  ├── Section (Valores)
│  │  │  └── Card (x4)
│  │  └── CTA
│  │
│  └── Page (/se-un-socio)
│     ├── Hero Mini
│     ├── Section (Benefits)
│     │  └── Card (x6)
│     ├── PartnerForm
│     ├── Section (FAQ)
│     │  └── FAQItem (x5)
│     └── CTA
│
└── Footer
   ├── Brand Section
   ├── Nav Links
   ├── Legal Links
   └── Social Icons
```

---

## 🔐 Data Flow - Formulario

```
User Input
    │
    ▼
┌──────────────────────┐
│ Client-side          │
│ Validation           │
│ (email, required)    │
└────┬─────────────────┘
     │
     ▼
┌──────────────────────┐
│ Honeypot Check       │
│ (Anti-spam)          │
└────┬─────────────────┘
     │
     ▼
┌──────────────────────┐
│ POST /api/contact    │
│ (Server-side)        │
└────┬─────────────────┘
     │
     ├─ reCAPTCHA Verify
     │
     ├─ SendGrid Send Email
     │
     └─ Database Save (si aplica)
         │
         ▼
     ┌──────────────────┐
     │ Success Response │
     └────┬─────────────┘
          │
          ▼
     ┌──────────────────┐
     │ Show Modal       │
     │ Success          │
     └────┬─────────────┘
          │
          ▼
     Reset Form (5s)
```

---

## 🔑 Key Features por Página

### Home (/)

```
✅ Full-screen hero with brand
✅ 4 service cards with hover
✅ Parallax SEO section
✅ Testimonial carousel
✅ Form preview + CTA
✅ About preview with link
```

### Quiénes somos (/quienes-somos)

```
✅ Mission & Vision
✅ 4 Values cards
✅ Team highlight
✅ CTA to partner form
✅ Consistent styling
```

### Sé un Socio (/se-un-socio)

```
✅ Hero with benefits intro
✅ 6 Benefits cards
✅ Full partner form
✅ FAQ section (5 items)
✅ Final CTA
✅ Email support link
```

---

## 🎯 Call-to-Actions

```
┌─────────────────────────────────────────┐
│ CTA 1: Hero "Explorar servicios"        │
│ → Anchor to #servicios section          │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ CTA 2: Hero "Ser aliados"               │
│ → Navigate to /se-un-socio              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ CTA 3: SEO Section "Solicitar auditoría"│
│ → Anchor to #formulario                 │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ CTA 4: Partner Form "Únete"             │
│ → Submit form → Email sent              │
└─────────────────────────────────────────┘

┌─────────────────────────────────────────┐
│ CTA 5: Footer "Convertirse en socio"    │
│ → Navigate to /se-un-socio              │
└─────────────────────────────────────────┘
```

---

## 📱 Mobile Optimization

```
Viewport 360px
├─ Font sizes: Reduced but readable
├─ Spacing: Compact (8px, 16px)
├─ Grid: Single column
├─ Navigation: Hamburger menu
├─ Images: Optimized for mobile
├─ Buttons: Touch-friendly (44px min)
└─ Form: Full width, vertical layout

Viewport 768px
├─ Font sizes: Medium
├─ Spacing: Balanced (16px, 24px)
├─ Grid: 2 columns max
├─ Navigation: Mixed
├─ Images: Medium resolution
└─ Form: Centered, 2 columns

Viewport 1024px+
├─ Font sizes: Large
├─ Spacing: Generous (24px, 32px)
├─ Grid: Full potential (4 columns)
├─ Navigation: Full horizontal
├─ Images: Full resolution
└─ Form: 2-column layout, centered container
```

---

## 🌟 Unique Features

```
VALERIO CARD
├─ Blue accent box in hero
├─ Avatar circle with "V"
├─ Personality-driven copy
└─ Instantly recognizable

SMOOTH SCROLL (Lenis)
├─ Custom easing function
├─ Momentum-based scrolling
├─ 1.2s duration
└─ Professional feel

PARALLAX EFFECTS
├─ SEO section image
├─ Subtle y-offset
├─ Performance optimized
└─ Desktop-only (optional)

INTERACTIVE CAROUSEL
├─ Auto-play 5s
├─ Pause on hover
├─ Manual navigation
└─ Dot indicators
```

---

_Diagrama visual completo del proyecto Appki Landing_  
_Generado: Noviembre 2024_
