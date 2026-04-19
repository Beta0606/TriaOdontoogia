# 🎬 WEB DESIGN MASTER SKILL — INSTRUCCIONES PERMANENTES

Cuando el usuario pida crear una página web, seguí EXACTAMENTE este proceso:

---

## FASE 1 — PREGUNTAS INICIALES

Antes de hacer CUALQUIER cosa, preguntá al usuario usando `questions_v2`:

**Preguntas obligatorias:**
- ¿Cuál es el nombre de la página / marca?
- ¿Cuál es el tema o industria? (ej: música, moda, deporte, tech, comida, etc.)
- ¿Tenés imágenes de referencia o assets? (logo, fotos, paleta)
- ¿Cuál es el objetivo principal? (vender, mostrar portfolio, informar, etc.)
- ¿Quién es tu audiencia / cliente ideal?
- ¿Tenés páginas de competidores o referencias de diseño que te gusten?
- ¿Hay algún color o estilo que definitivamente NO querés?
- ¿Necesitás secciones específicas? (hero, about, servicios, galería, contacto, etc.)
- ¿Cuánto contenido de texto tenés listo?
- ¿Querés un estilo oscuro, claro, o depende del tema?

---

## FASE 2 — INVESTIGACIÓN DE COMPETENCIA

Después de las preguntas, investigá en internet:
1. Buscá 3-5 sitios web del mismo nicho/industria
2. Analizá qué tienen: secciones, copy, estructura, diferenciales
3. Identificá qué hace FALTA en esos sitios (oportunidades únicas)
4. Creá un **Análisis de Competencia** — un archivo HTML visual y atractivo que el usuario pueda ver, con:
   - Resumen de cada competidor
   - Qué ofrecen
   - Sus colores / tipografías detectadas
   - Fortalezas y debilidades
   - Oportunidades únicas para el cliente
   - Tabla comparativa visual

---

## FASE 3 — DIRECCIÓN DE DISEÑO

Con toda la info, decidí antes de escribir código:

### Filosofía de diseño a seguir (basada en los mejores sitios del mundo):

**Inspiración principal — sitios de referencia analizados:**

**terminal-industries.com** (Awwwards SOTD - Propagande Studio, Paris)
- Estética industrial de alta precisión
- Tipografía limpia, estructurada, jerarquía clara
- Imágenes aéreas + color industrial (oscuro, gris, blanco roto)
- Scrolling narrativo: cada sección cuenta una historia
- Motion con propósito: cada animación tiene un "por qué"
- Layout modular, grid estricto
- Paleta monocromática con UN solo acento
- Vue.js + Vercel — altamente performante

**landonorris.com** (Awwwards SOTM + FWA - OFF+BRAND Studio, Glasgow)
- WebGL para elementos 3D (rotación de cascos)
- Rive para motion graphics vectoriales
- Tipografía: Mona Sans (sans) + Brier Serif — contraste de pesos
- Colores: verde lima neón (#C3F53C aprox) sobre negro profundo
- Blob-overlays reactivos al cursor
- Scroll cinematográfico — aceleración que imita velocidad de F1
- Separación "On Track / Off Track" — storytelling de dos mundos
- Transiciones de sección con velocidad y contraste

**wearebrand.io / ibex-masters.com**
- Agencia brand-first: identidad visual brutal desde el primer scroll
- Tipografía oversized que ocupa toda la pantalla
- Uso de espacio negativo como elemento de diseño
- Animaciones de texto: split chars, scramble, reveal por línea
- Cursor personalizado (dot + ring que sigue al mouse)
- Paletas muy restringidas: 2-3 colores máximo
- Secciones horizontales o pin-scroll para efectos de profundidad

---

## FASE 4 — RECURSOS DE ANIMACIÓN A USAR

Usá estos recursos reales de componentes y efectos:

### Efectos de texto:
- **Text scramble / glitch**: letras cambian aleatoriamente antes de revelar
- **Split text reveal**: cada línea entra desde abajo con clip-path
- **Char-by-char animation**: caracteres aparecen con stagger
- **Kinetic typography**: texto que reacciona al scroll o mouse

### Efectos de scroll:
- **Parallax multi-layer**: elementos a diferentes velocidades
- **Pin + scrub**: sección "pegada" mientras el contenido anima
- **Horizontal scroll** sections dentro de scroll vertical
- **Scale reveal**: elementos que crecen de 0.6 a 1 con scroll
- **Counter animations**: números que suben al entrar en viewport

### Efectos visuales:
- **Cursor personalizado**: punto pequeño + ring expandible
- **Magnetic buttons**: botones que atraen al cursor
- **Blob/distortion**: WebGL shader sobre imágenes
- **Noise/grain overlay**: textura sutil para profundidad
- **Gradient mesh**: fondos fluidos en movimiento lento
- **Glassmorphism refinado**: blur + border sutil (no el cliché)

### Transiciones de página/sección:
- **Page transition con wipe**: overlay que barre la pantalla
- **Clip-path expand**: círculo que crece desde el centro
- **Smooth lerp scroll**: scroll con inercia suavizada (Lenis.js style)

### Librerías disponibles en HTML:
- **GSAP + ScrollTrigger**: animaciones de scroll de alta performance
- **Three.js**: escenas 3D en WebGL
- **Lenis**: smooth scroll con inercia
- **Splitting.js**: split de texto en chars/words/lines
- **Swiper**: carruseles con touch + animaciones
- **AOS / custom IntersectionObserver**: reveal on scroll

---

## FASE 5 — SISTEMA DE DISEÑO DEL PROYECTO

Antes de codear, declarar:

```
TIPOGRAFÍA:
- Display: [fuente bold, oversized — ej: Clash Display, Cabinet Grotesk, Neue Haas]
- Body: [fuente legible — ej: Satoshi, DM Sans, Inter pero bien usado]
- Accent/Serif (opcional): [contraste — ej: Playfair, Cormorant, PP Editorial]

PALETA:
- Background: [color profundo o blanco roto con tono]
- Foreground/texto: [alto contraste]
- Acento 1: [UN color llamativo en oklch]
- Acento 2 (opcional): [complementario]

MOVIMIENTO:
- Velocidad base de animaciones: 0.6s - 1.2s
- Easing preferido: cubic-bezier(0.16, 1, 0.3, 1) — spring suave
- Stagger entre elementos: 0.08s
```

---

## FASE 6 — CONSTRUCCIÓN

### Estructura obligatoria de cada página:

1. **Preloader/Intro** (opcional pero recomendado): Animación de 1.5-2s antes de mostrar el sitio
2. **Hero Section**: Impacto inmediato. Tipografía oversized + media + CTA. Mínimo 100vh.
3. **Sección de Confianza/Contexto**: ¿Quiénes son? Stats, logos, credenciales
4. **Sección Core (producto/servicio/portfolio)**: El corazón del sitio, la mayor creatividad aquí
5. **Sección Social Proof**: Testimonios, clientes, resultados
6. **CTA Final**: Acción clara, diseño bold
7. **Footer**: Clean, con todos los links necesarios

### Reglas de diseño OBLIGATORIAS:
- La página debe MOVERSE — algo siempre animando (no estático nunca)
- Tipografía mínima en hero: clamp(4rem, 10vw, 10rem) — OVERSIZED
- Cursor personalizado en desktop SIEMPRE
- Smooth scroll con inercia (Lenis o CSS scroll-behavior + lerp manual)
- Mínimo 3 efectos de scroll distintos por página
- Imágenes: siempre con parallax o zoom lento o distortion
- Si el usuario NO pasó imágenes suficientes → generarlas con Claude AI (window.claude.complete describiendo la imagen y creando SVG artístico o placeholder cinematográfico)
- Cada sección debe tener su "moment" — algo que sorprenda

### Código HTML:
- Usar React + Babel inline para componentes complejos
- GSAP CDN para animaciones de scroll
- Fuentes de Google Fonts o Fontshare (gratis)
- CSS custom properties para todo el sistema de diseño
- Mobile-first responsive
- Dividir en componentes JSX si supera 300 líneas

---

## FASE 7 — VERIFICACIÓN

Después de construir:
1. Verificar que todas las animaciones funcionen
2. Verificar responsive (mobile / tablet / desktop)
3. Verificar que el cursor custom aparezca
4. Verificar que el smooth scroll funcione
5. Screenshot mental: ¿se ve como una obra de arte?

---

## IMPORTANTE — FILOSOFÍA CENTRAL

> "Cada página es una película. Tiene ritmo, tiene tensión, tiene resolución."

- **NO** usar los mismos layouts de siempre (hero con texto izquierda, imagen derecha)
- **NO** usar gradientes agresivos como fondo principal
- **NO** poner emoji a menos que la marca los use
- **NO** copiar templates — cada página es una obra original
- **SÍ** pensar en motion primero, layout segundo
- **SÍ** usar espacio negativo como elemento de diseño
- **SÍ** hacer que la tipografía cuente la historia
- **SÍ** investigar la competencia antes de diseñar
- **SÍ** sorprender con algo que el usuario no esperaba

---

## RECURSOS ADICIONALES DE REFERENCIA

Al buscar componentes de animación, revisá:
- **21st.dev** — componentes React con animaciones modernas (scroll, text, backgrounds, transitions)
- **reactbits.dev** — efectos visuales para React (noise, distortion, glitch, particle effects)
- **animata.design** — componentes animados open source para React/Tailwind
- **ui.aceternity.com** — componentes con efectos de scroll, spotlight, 3D cards
- **magicui.design** — componentes con animaciones premium (shimmer, blur, typewriter)
- **framer-motion.com** — librería de animaciones React, efectos de scroll, layout animations
- **motion.dev** — Web Animations API moderna, alternativa a GSAP
- **gsap.com/docs/v3/Plugins/ScrollTrigger** — documentación completa de scroll animations
- **Awwwards.com** — los mejores sitios del mundo premiados por diseño
- **Godly.website** — curación de web design de altísimo nivel
- **landing.love** — 2000+ sitios con animaciones catalogados por categoría
- **css-tricks.com/almanac** — efectos CSS avanzados: clip-path, blend-modes, filters
- **codrops.com** — tutoriales de efectos creativos con demos interactivos
- **tympanus.net** — animaciones de texto, hover effects, page transitions

### Efectos de scroll específicos a buscar:
- **Scroll-driven animations CSS** (nativas, sin JS: `animation-timeline: scroll()`)
- **Locomotive Scroll** — scroll suave con efectos de parallax avanzados
- **Lenis** — smooth scroll de alto rendimiento
- **Splitting.js** — split de texto en chars/words/lines para animaciones
- **GSAP SplitText** — mismo concepto con GSAP ecosystem
- **ScrollReveal.js** — reveal animations simples pero efectivas

---

*Este skill fue creado analizando terminal-industries.com, landonorris.com, wearebrand.io, ibex-masters.com y los mejores recursos de diseño web del mundo.*
