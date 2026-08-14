# Sitio web — Panadería PLACEHOLDER

Sitio de una sola página (landing page) hecho en HTML, CSS y JavaScript
vanilla puro. Sin frameworks, sin backend, sin carrito de compras.
Los pedidos se coordinan por WhatsApp.

## Estructura del proyecto

```
panaderia/
├── index.html      → contenido y estructura de la página
├── style.css        → todos los estilos
├── script.js         → animaciones al hacer scroll + año automático
├── images/
│   ├── favicon.svg
│   ├── hero.jpg               (PLACEHOLDER — falta subir)
│   ├── about.jpg               (PLACEHOLDER — falta subir)
│   ├── producto-*.jpg (x6)     (PLACEHOLDER — falta subir)
│   └── LEEME-IMAGENES.txt      (detalle de qué imagen va en cada lugar)
└── README.md         → este archivo
```

## 1. Datos que tenés que reemplazar

Buscá la palabra **PLACEHOLDER** en `index.html` (Ctrl+F / Cmd+F) y reemplazá:

| Dato | Dónde está |
|---|---|
| Nombre de la panadería | Título de la página, header, hero, footer |
| Dirección | Sección "Ubicación" y footer |
| Teléfono / WhatsApp | Botones de WhatsApp (`wa.me/...`), sección "Ubicación", footer |
| Instagram / Facebook | Sección "Contacto" |
| Horarios | Sección "Ubicación" |
| Productos, descripciones y precios | Sección "Productos" |
| Imágenes | Carpeta `images/` (ver `LEEME-IMAGENES.txt`) |

### Cómo armar el link de WhatsApp
El formato es:
```
https://wa.me/[código de país][número sin 0 ni espacios]
```
Ejemplo para Nicaragua (+505) número 8888-8888:
```
https://wa.me/50588888888
```
Podés agregar un mensaje predefinido con `?text=`:
```
https://wa.me/50588888888?text=Hola!%20Quiero%20hacer%20un%20pedido
```
Hay 3 botones de WhatsApp en el sitio (hero, ubicación y contacto) —
actualizá el número en los tres.

### Cómo actualizar precios
Cada producto es una tarjeta dentro de `<div class="product-grid">` en
`index.html`. El precio está en `<span class="price">$PLACEHOLDER</span>`.
Para agregar un producto nuevo, copiá un bloque `<article class="product-card">`
completo, pegalo y editá texto, precio e imagen.

### Google Maps
En la sección "Ubicación" hay un botón que apunta a:
```
https://maps.google.com/?q=Calle+PLACEHOLDER+123
```
Reemplazá el texto después de `?q=` por tu dirección real
(los espacios se escriben con `+`), o mejor: buscá tu local en
Google Maps, copiá el link que te da el botón "Compartir" y pegalo ahí.

## 2. Cómo subirlo a GitHub Pages (gratis)

### Paso 1 — Crear el repositorio
1. Entrá a [github.com](https://github.com) e iniciá sesión (o creá una cuenta).
2. Hacé clic en **New repository**.
3. Elegí un nombre, por ejemplo `panaderia-web`.
4. Dejalo en **Public** (necesario para GitHub Pages gratis).
5. Creá el repositorio (no hace falta agregar README ni .gitignore, ya los tenés).

### Paso 2 — Subir los archivos
**Opción A — Sin usar la terminal (más fácil):**
1. Entrá al repositorio recién creado.
2. Hacé clic en **Add file → Upload files**.
3. Arrastrá los archivos `index.html`, `style.css`, `script.js`, `README.md`
   y la carpeta `images` completa (con sus imágenes ya reemplazadas).
4. Hacé clic en **Commit changes**.

**Opción B — Con Git (para quien ya lo usa):**
```bash
git init
git add .
git commit -m "Sitio inicial de la panadería"
git branch -M main
git remote add origin https://github.com/TU-USUARIO/panaderia-web.git
git push -u origin main
```

### Paso 3 — Activar GitHub Pages
1. En el repositorio, andá a **Settings → Pages**.
2. En "Source", elegí la rama `main` y la carpeta `/ (root)`.
3. Guardá. GitHub te va a dar una URL parecida a:
   `https://TU-USUARIO.github.io/panaderia-web/`
4. Esperá 1-2 minutos y entrá a esa URL — el sitio ya debería estar online.

### Paso 4 — Conectar tu propio dominio (más adelante)
1. En tu proveedor de dominio, agregá un registro **CNAME** apuntando a
   `TU-USUARIO.github.io`.
2. En GitHub, andá a **Settings → Pages → Custom domain** y escribí tu dominio
   (ej. `www.panaderiaplaceholder.com`).
3. Activá **Enforce HTTPS** una vez que el DNS se haya propagado
   (puede tardar unas horas).

## 3. Probarlo localmente antes de subir

No necesitás ningún servidor: simplemente abrí el archivo `index.html`
haciendo doble clic, o arrastrándolo a una pestaña del navegador.

## 4. Notas técnicas

- No hay ninguna clave, API key ni dato sensible en el código.
- No hay backend ni base de datos: es 100% archivos estáticos.
- Las animaciones respetan `prefers-reduced-motion` para usuarios que
  prefieren menos movimiento en pantalla.
- Los íconos (WhatsApp, ubicación, reloj, teléfono, Instagram, Facebook)
  son SVG dibujados a mano dentro de `index.html`, no dependen de ninguna
  librería externa ni CDN de íconos.
- Las tipografías se cargan desde Google Fonts (gratis, sin API key).
  Si preferís no depender de un servicio externo, se pueden descargar
  las fuentes y auto-hospedarlas — avisame si querés esa versión.
