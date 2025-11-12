# 🎨 Paleta de Colores - Appki

## Proyecto: Appki - Cartagena Turismo Superapp

**Valor del Proyecto:** $500,000 USD  
**Última actualización:** 11 de noviembre de 2025

---

## 📌 Colores Principales (Brand)

### Negro Profundo - Fondo Principal

```css
--brand-black: #0A0A0A
RGB: rgb(10, 10, 10)
Tailwind: bg-brand-black
```

**Uso:** Fondo principal de secciones, fondos de tarjetas, áreas de contenido alternas.

### Negro Azulado - Fondo Secundario

```css
--brand-deep: #0F1419
RGB: rgb(15, 20, 25)
Tailwind: bg-brand-deep
```

**Uso:** Fondo secundario para crear contraste entre secciones, hero sections.

---

## ✨ Colores de Acento

### Amarillo Dorado - Color Primario

```css
--accent-yellow: #FFC700
RGB: rgb(255, 199, 0)
Hex alternativo: #FFD24D (variante más clara)
Tailwind: accent-yellow
```

**Uso:**

- CTAs principales (botones de acción)
- Enlaces importantes
- Títulos destacados
- Efectos hover
- Gradientes shimmer

### Azul Brillante - Color Secundario

```css
--accent-blue: #00D4FF
RGB: rgb(0, 212, 255)
Hex alternativo: #0AA5FF
Tailwind: accent-blue
```

**Uso:**

- Enlaces secundarios
- Iconos informativos
- Efectos de fondo
- Gradientes complementarios

---

## 🌈 Variantes de Amarillo (Yellow Palette)

### Yellow 300

```css
yellow-300: #fde68a;
```

**Uso:** Gradientes intermedios, efectos hover en títulos.

### Yellow 400

```css
yellow-400: #fcd34d;
```

**Uso:** Gradientes de botones, efectos de brillo.

---

## 📝 Colores de Texto

### Texto Principal (Blanco)

```css
white: #FFFFFF (100%)
white/90: rgba(255, 255, 255, 0.9)
white/85: rgba(255, 255, 255, 0.85)
white/80: rgba(255, 255, 255, 0.8)
white/70: rgba(255, 255, 255, 0.7)
white/60: rgba(255, 255, 255, 0.6)
```

**Guía de uso:**

- `white` (100%): Títulos principales (H1, H2)
- `white/90`: Subtítulos importantes
- `white/80`: Párrafos de contenido principal
- `white/70`: Descripciones, texto secundario
- `white/60`: Metadata, texto terciario

### Texto sobre Fondos Claros

```css
text-brand-black: #0a0a0a;
```

**Uso:** Texto en botones amarillos, overlays claros.

---

## 🎭 Opacidades de Acentos (Efectos y Glows)

### Amarillo con Opacidad

```css
/* Ultra bajo - Fondos sutiles */
accent-yellow/[0.03]: rgba(255, 199, 0, 0.03)
accent-yellow/[0.06]: rgba(255, 199, 0, 0.06)
accent-yellow/[0.08]: rgba(255, 199, 0, 0.08)

/* Bajo - Glows de fondo */
accent-yellow/[0.1]: rgba(255, 199, 0, 0.1)
accent-yellow/[0.12]: rgba(255, 199, 0, 0.12)
accent-yellow/[0.15]: rgba(255, 199, 0, 0.15)

/* Medio - Efectos visibles */
accent-yellow/[0.2]: rgba(255, 199, 0, 0.2)
accent-yellow/30: rgba(255, 199, 0, 0.3)
accent-yellow/40: rgba(255, 199, 0, 0.4)
accent-yellow/50: rgba(255, 199, 0, 0.5)
```

**Uso:**

- `/[0.03] - /[0.08]`: Fondos de tarjetas, esquinas decorativas
- `/[0.1] - /[0.15]`: Glows de iconos, luces de fondo animadas
- `/[0.2] - /40`: Bordes hover, efectos de énfasis
- `/50`: Overlays, estados activos

### Azul con Opacidad

```css
/* Ultra bajo - Fondos sutiles */
accent-blue/[0.04]: rgba(0, 212, 255, 0.04)
accent-blue/[0.06]: rgba(0, 212, 255, 0.06)
accent-blue/[0.08]: rgba(0, 212, 255, 0.08)

/* Bajo - Efectos complementarios */
accent-blue/[0.1]: rgba(0, 212, 255, 0.1)
accent-blue/[0.12]: rgba(0, 212, 255, 0.12)
```

**Uso:**

- Luces de fondo animadas (alternancia con amarillo)
- Efectos decorativos inferiores en cards
- Gradientes complementarios

---

## 🌟 Gradientes Principales

### 1. Shimmer Gradient (Títulos Premium)

```css
/* Configuración */
background: linear-gradient(
  to right,
  #FFC700 30%,    /* accent-yellow */
  #FFFFFF 50%,    /* white */
  #FFC700 70%     /* accent-yellow */
);
background-size: 400% 100%;
animation: shimmer-gradient 8s linear infinite;

/* Clases Tailwind */
from-accent-yellow from-30%
via-white via-50%
to-accent-yellow to-70%
bg-clip-text text-transparent
animate-shimmer-gradient
```

**Uso:** Títulos principales ("Early Adopter", "aliados", "Frecuentes"), efecto de reflejo premium.

### 2. Card Title Hover Gradient

```css
/* Configuración */
background: linear-gradient(
  to right,
  #FFC700,        /* accent-yellow */
  #FDE68A,        /* yellow-300 */
  #FFC700         /* accent-yellow */
);
background-size: 200% auto;
animation: gradient 3s ease infinite;

/* Clases Tailwind */
from-accent-yellow
via-yellow-300
to-accent-yellow
bg-[length:200%_auto]
animate-gradient
```

**Uso:** Títulos de tarjetas al hover, efectos de énfasis dinámicos.

### 3. Background Gradients (Secciones)

```css
/* Hero/Sections */
background: linear-gradient(
  to bottom,
  #0F1419,        /* brand-deep */
  #0A0A0A         /* brand-black */
);

/* Clases Tailwind */
bg-gradient-to-b from-brand-deep to-brand-black
```

**Uso:** Fondos de secciones hero, transiciones suaves entre áreas.

### 4. Glow Effects (Fondos Animados)

```css
/* Dual Glow */
background: linear-gradient(
  to right,
  rgba(255, 199, 0, 0.08),   /* accent-yellow/[0.08] */
  rgba(0, 212, 255, 0.06),   /* accent-blue/[0.06] */
  rgba(255, 199, 0, 0.08)    /* accent-yellow/[0.08] */
);

/* Clases Tailwind */
from-accent-yellow/[0.08]
via-accent-blue/[0.06]
to-accent-yellow/[0.08]
```

**Uso:** Fondos de CTA sections, efectos de iluminación ambiente.

### 5. Button Gradient

```css
/* CTA Button */
background: linear-gradient(
  to right,
  #FFC700,        /* accent-yellow */
  #FCD34D         /* yellow-400 */
);

/* Clases Tailwind */
bg-gradient-to-r from-accent-yellow to-yellow-400
```

**Uso:** Botones principales de Call-to-Action.

---

## 🔲 Bordes y Divisores

### Bordes Sutiles

```css
border-white/10: rgba(255, 255, 255, 0.1)
border-white/20: rgba(255, 255, 255, 0.2)
```

**Uso:** Separadores de secciones, bordes de tarjetas en estado normal.

### Bordes de Acento (Hover)

```css
border-accent-yellow/30: rgba(255, 199, 0, 0.3)
border-accent-yellow/40: rgba(255, 199, 0, 0.4)
border-accent-yellow/50: rgba(255, 199, 0, 0.5)
```

**Uso:** Bordes de tarjetas en hover, énfasis en elementos interactivos.

---

## 🎯 Colores de Estado (UI States)

### Success (Verde)

```css
green-500: #10B981
green-100: #D1FAE5
```

**Uso:** Mensajes de éxito, validación de formularios, estados positivos.

### Error (Rojo)

```css
red-500: #EF4444
red-100: #FEE2E2
```

**Uso:** Errores de validación, mensajes de alerta, estados negativos.

### Warning (Amarillo)

```css
yellow-500: #EAB308
yellow-100: #FEF9C3
```

**Uso:** Advertencias, estados pendientes, información importante.

---

## 💫 Efectos Especiales

### Shadows (Sombras)

```css
/* Glow Shadow - Amarillo */
shadow-[0_0_40px_rgba(255,199,0,0.1)]
shadow-[0_0_40px_rgba(255,210,77,0.4)]

/* Glow Shadow - Azul */
shadow-[0_0_30px_rgba(255,199,0,0.08)]
```

### Blur Effects

```css
blur-xl: 24px
blur-2xl: 40px
blur-3xl: 64px
```

**Uso:** Luces de fondo animadas, efectos glassmorphism.

### Backdrop Blur (Glassmorphism)

```css
backdrop-blur-sm: 4px
backdrop-blur-xl: 24px
```

**Uso:** Tarjetas con efecto de vidrio esmerilado.

---

## 📊 Tabla de Uso Rápido

| Elemento              | Color Principal            | Color Hover           | Opacidad |
| --------------------- | -------------------------- | --------------------- | -------- |
| **Fondo Principal**   | `brand-black`              | -                     | 100%     |
| **Fondo Secundario**  | `brand-deep`               | -                     | 100%     |
| **CTA Button**        | `accent-yellow` gradient   | `scale-105`           | 100%     |
| **Texto Título**      | `white`                    | shimmer gradient      | 100%     |
| **Texto Párrafo**     | `white/80`                 | `white/90`            | 80-90%   |
| **Card Background**   | `white/[0.04]`             | `white/[0.06]`        | 4-6%     |
| **Card Border**       | `white/20`                 | `accent-yellow/40`    | 20-40%   |
| **Icon Glow**         | `accent-yellow/[0.15]`     | `accent-yellow/[0.2]` | 15-20%   |
| **Link Normal**       | `accent-blue`              | `accent-yellow`       | 100%     |
| **Background Lights** | `accent-yellow/[0.1-0.15]` | -                     | 10-15%   |

---

## 🎨 Paleta Visual (HEX Quick Reference)

```
████ #0A0A0A  brand-black     (Fondo principal)
████ #0F1419  brand-deep      (Fondo secundario)
████ #FFC700  accent-yellow   (Acento primario)
████ #00D4FF  accent-blue     (Acento secundario)
████ #FFFFFF  white           (Texto principal)
████ #FDE68A  yellow-300      (Gradiente)
████ #FCD34D  yellow-400      (Gradiente)
████ #10B981  green-500       (Success)
████ #EF4444  red-500         (Error)
████ #EAB308  yellow-500      (Warning)
```

---

## 🎯 Principios de Diseño

### 1. Minimalismo Premium

- Usar opacidades **muy bajas** (0.03 - 0.15) para efectos sutiles
- Evitar colores saturados que creen tonos naranjas
- Mantener fondos oscuros para contraste máximo

### 2. Jerarquía Visual

- **Amarillo:** CTAs y elementos importantes
- **Azul:** Secundarios e informativos
- **Blanco:** Contenido y texto
- **Gradientes:** Solo en elementos premium (títulos, hovers)

### 3. Consistencia

- Usar shimmer gradient solo en palabras clave de títulos
- Mantener opacidades consistentes en elementos similares
- Aplicar mismo patrón de hover en todos los cards

### 4. Accesibilidad

- Contraste mínimo 4.5:1 para texto normal
- Contraste mínimo 3:1 para texto grande
- No depender solo del color para estados

---

## 📝 Notas de Implementación

### Animaciones

```css
/* Shimmer Gradient Animation */
@keyframes shimmer-gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Card Gradient Animation */
@keyframes gradient {
  0%,
  100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

/* Float Animation */
@keyframes float {
  0%,
  100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-20px);
  }
}
```

### Configuración Tailwind

Estos colores están definidos en `tailwind.config.ts`:

```typescript
colors: {
  'brand-black': '#0A0A0A',
  'brand-deep': '#0F1419',
  'accent-yellow': '#FFC700',
  'accent-blue': '#00D4FF',
}
```

---

**Documento creado para:** Appki - Cartagena Tourism Superapp  
**Diseñador/Desarrollador:** Sistema de diseño premium $500k  
**Versión:** 1.0  
**Fecha:** 11 de noviembre de 2025
