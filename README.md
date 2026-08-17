# 2WEB-Peluqueria

**Web para 69 BARBER — barbería urbana en Jerez de la Frontera, Cádiz.**

HTML, CSS y JavaScript vanilla. Sin frameworks, sin build, sin complicaciones: se abre `index.html` directamente en el navegador.

© 2026 2WEB Project

---

## Qué hay dentro

- **Hero** — wordmark gigante estilo grafiti con el logo del local (1024×512), dos postes de barbería a los lados, la valoración de Google (4.95★ · 78 opiniones) y CTA a reservar.
- **Franja de confianza** — la puntuación de Google en números gordos mostaza.
- **Servicios y precios** — los 8 servicios con su precio y duración reales (corte 10€, arreglo de barba 7€, mechas blancas 30€, tinte 40€, línea de color 20€...).
- **Galería** — collage compacto de 4 fotos (1 grande + 3) del local, cortes y peinados, con una celda "+2" que agrupa el resto. Cada foto es clicable y se abre en un lightbox (cerrar ×, flechas y teclado ←/→/Esc); las imágenes agrupadas viajan detrás del contador.
- **Reseñas** — teaser con la valoración y un par de testimonios verificados.
- **Ubicación y horario** — tarjeta con dirección, teléfono, Instagram y email + mapa oscuro Leaflet (Glorieta Guitarra) + tabla de horarios completa.
- **Footer** — contacto, redes sociales y enlaces placeholder de políticas.

## Sección Reservar

Todos los botones **RESERVAR** apuntan de momento a Booksy (su plataforma de reservas real). Cuando exista `reserva.html`, se cambia en un solo sitio.

> Los enlaces a Booksy llevan un comentario en `index.html` para localizarlos rápido.

## Sección Logo

El logo es horizontal y se dimensiona por ancho: en el header a `max-height: 56px` y en el hero a `min(620px, 82vw)`.

> Juega con `imagenes/logo-69.png` (logo, 1024×512) y `imagenes/logo-69.svg` (favicon, 512×512).

## Interacción

- **Navegación** — al pasar el cursor, el color cambia y una barra mostaza crece bajo el enlace con un pequeño delay.
- **Reseñas** — los bordes se iluminan en mostaza al pasar el cursor, como el resto de tarjetas de la web.
- **Galería** — cada foto abre el lightbox; el "cómo funciona" está en `scripts/galeria.js` (añade fotos al `.grid-galeria` de `index.html` y el contador "+N" se ajusta solo).
- **Cursor** — el footer, la tarjeta de contacto y el horario muestran `cursor: default` (sin cursor de subrayado); solo los enlaces reales son clicables.

## Cómo ejecutar

1. Abrir `index.html` en cualquier navegador.
2. Nada más.

Se necesita internet para las fuentes de Google, el mapa y la librería Leaflet (vía CDN).

## Guía rápida de modificación

- **Colores y tipografías**: variables en `:root` al inicio de `estilos/estilos.css` (`--mostaza`, `--negro-fondo`, etc.).
- **Servicios**: tarjetas `<article class="servicio-card">` en `index.html`.
- **Galería**: las fotos visibles van en `<figure class="galeria-item" data-full="...">` del `.grid-galeria` de `index.html`; las que se agrupan detrás del contador llevan la clase `galeria-oculta`. El "cómo funciona" está en `scripts/galeria.js`.
- **Mapa**: coordenadas en `L.map('map').setView([lat, lng], zoom)` y en `L.marker([lat, lng])`.
- **Horario**: lista `<ul class="lista-horario">` en la sección Ubicación.
### hola