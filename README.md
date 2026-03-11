# 💍 Invitaciones de Boda - Lovelink Invitations

Una aplicación web moderna y elegante para crear invitaciones de boda personalizadas con múltiples temas (Romántico, Moderno y Rústico).

## 📋 Tabla de Contenidos

- [Características](#características)
- [Instalación](#instalación)
- [Personalización Rápida](#personalización-rápida)
- [Guía de Personalización Detallada](#guía-de-personalización-detallada)
- [Funciones Premium](#funciones-premium)
- [Estructura del Proyecto](#estructura-del-proyecto)
- [Despliegue](#despliegue)

## ✨ Características

### Versión Simple (Incluida)
- ✅ Hero principal con nombres y carousel de fotos
- ✅ Cuenta regresiva
- ✅ Detalles del evento (día y horarios)
- ✅ Ubicación con mapa interactivo
- ✅ Mesa de regalos con transferencia bancaria
- ✅ Confirmación de asistencia mediante formulario de Google
- ✅ Reproductor de música (Spotify o audio directo)

### Funciones Premium (Opcionales)
- 🔒 Nuestra Historia
- 🔒 Agenda del evento
- 🔒 Galería de fotos
- 🔒 Código de vestimenta
- 🔒 Footer personalizado
- 🔒 Opciones adicionales de RSVP (WhatsApp y Email)

## 🚀 Instalación

### Requisitos Previos
- Node.js 18+ y npm (o bun)
- Git

### Pasos de Instalación

```bash
# 1. Clonar el repositorio
git clone <URL_DEL_REPOSITORIO>
cd lovelink-invitations

# 2. Instalar dependencias
npm install
# o
bun install

# 3. Copiar archivo de configuración
cp .env.example .env

# 4. Editar variables de entorno (ver sección de personalización)
nano .env  # o usa tu editor preferido

# 5. Iniciar servidor de desarrollo
npm run dev
# o
bun dev

# 6. Abrir en el navegador
# La aplicación estará disponible en http://localhost:8080
```

## ⚡ Personalización Rápida

La forma más rápida de personalizar tu invitación es usando **variables de entorno**. Crea un archivo `.env` en la raíz del proyecto y edita los valores:

```bash
# Copia el archivo de ejemplo
cp .env.example .env

# Edita el archivo .env con tus datos
```

### Variables de Entorno Principales

```env
# Nombres de los novios
VITE_BRIDE_NAME=María
VITE_GROOM_NAME=Juan
VITE_COUPLE_NAMES=María & Juan

# Fecha del evento
VITE_EVENT_DATE=2025-07-20T18:00:00

# Imágenes principales (separadas por comas)
VITE_HERO_IMAGES=/foto1.jpg,/foto2.jpg,/foto3.jpg

# Música de Spotify
VITE_MUSIC_SPOTIFY_EMBED=https://open.spotify.com/embed/playlist/TU_PLAYLIST_ID

# Ubicación
VITE_LOCATION_LAT=19.4326
VITE_LOCATION_LNG=-99.1332

# Formulario de Google
VITE_RSVP_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/TU_FORM_ID/viewform
```

**Nota:** Después de editar el archivo `.env`, reinicia el servidor de desarrollo para que los cambios surtan efecto.

## 📝 Guía de Personalización Detallada

### 1. 📝 Texto - Nombres y Descripciones

#### Opción A: Variables de Entorno (Recomendado)

Edita el archivo `.env`:

```env
VITE_BRIDE_NAME=María
VITE_GROOM_NAME=Juan
VITE_COUPLE_NAMES=María & Juan
```

#### Opción B: Archivo de Configuración

**Ubicación:** `src/config/weddingConfig.ts`

```typescript
couple: {
  bride: "María",
  groom: "Juan",
  coupleNames: "María & Juan"
}
```

**Otros textos personalizables en `weddingConfig.ts`:**
- `event.ceremony.title` - Título de la ceremonia
- `event.ceremony.date` - Fecha de la ceremonia
- `event.ceremony.time` - Hora de la ceremonia
- `event.reception.title` - Título de la recepción
- `gifts.title` - Título de la mesa de regalos
- `gifts.message` - Mensaje de la mesa de regalos

### 2. 🖼️ Foto Principal (Hero Images)

#### Estructura de Carpetas para Imágenes

**Importante:** Todas las imágenes deben estar en la carpeta `public/` del proyecto. Puedes organizarlas en subcarpetas.

**Estructura recomendada:**
```
public/
├── images/              # Carpeta para imágenes (recomendado)
│   ├── 1-pareja.jpg
│   ├── 2-pareja.jpg
│   ├── 3-pareja.jpg
│   └── 4-pareja.jpg
└── placeholder.svg      # Imagen por defecto
```

**Nota:** 
- Las imágenes pueden estar directamente en `public/` o en subcarpetas como `public/images/`
- Los nombres de archivo **no deben tener espacios**. Si tienen espacios, renómbralos (ej: `1 pareja.jpg` → `1-pareja.jpg`)
- Formatos soportados: `.jpg`, `.jpeg`, `.png`, `.webp`

#### Opción A: Variables de Entorno (Recomendado)

**1. Coloca tus imágenes en `public/images/`** (o directamente en `public/`)

**2. Edita el archivo `.env`** con las rutas de las imágenes:

```env
# Múltiples imágenes (carousel) - separadas por comas
# Si están en public/images/:
VITE_HERO_IMAGES=/images/1-pareja.jpg,/images/2-pareja.jpg,/images/3-pareja.jpg,/images/4-pareja.jpg

# Si están directamente en public/:
VITE_HERO_IMAGES=/foto1.jpg,/foto2.jpg,/foto3.jpg,/foto4.jpg

# Una sola imagen
VITE_HERO_IMAGES=/images/foto-principal.jpg
```

**3. Reinicia el servidor de desarrollo** para que los cambios surtan efecto:
```bash
# Detén el servidor (Ctrl+C) y reinicia
npm run dev
# o
bun dev
```

**Cómo funcionan las rutas:**
- Las rutas deben comenzar con `/` (raíz del servidor)
- Si la imagen está en `public/images/foto.jpg`, la ruta es `/images/foto.jpg`
- Si la imagen está en `public/foto.jpg`, la ruta es `/foto.jpg`
- Las rutas son relativas a la carpeta `public/`

#### Opción B: Archivo de Configuración

**Ubicación:** `src/config/weddingConfig.ts`

```typescript
heroImages: [
  "/images/1-pareja.jpg",
  "/images/2-pareja.jpg",
  "/images/3-pareja.jpg",
  "/images/4-pareja.jpg"
]
```

**Nota:** Las imágenes deben estar en la carpeta `public/` y las rutas deben comenzar con `/`.

### 3. ⏰ Cuenta Regresiva

#### Opción A: Variables de Entorno (Recomendado)

```env
# Formato: YYYY-MM-DDTHH:mm:ss
VITE_EVENT_DATE=2025-07-20T18:00:00
```

**Ejemplos:**
- `2025-07-20T18:00:00` - 20 de julio de 2025 a las 6:00 PM
- `2025-12-25T12:00:00` - 25 de diciembre de 2025 a las 12:00 PM

#### Opción B: Archivo de Configuración

**Ubicación:** `src/config/weddingConfig.ts`

```typescript
eventDate: "2025-07-20T18:00:00"
```

**Componente:** `src/components/wedding/Countdown.tsx` (y variantes por tema)

### 3.5. 📅 Detalles del Evento (Ceremonia y Recepción)

#### Opción A: Variables de Entorno (Recomendado)

```env
# Ceremonia
VITE_CEREMONY_TITLE=Ceremonia
VITE_CEREMONY_DATE=15 de Junio, 2025
VITE_CEREMONY_TIME=18:00 hrs
VITE_CEREMONY_VENUE=Iglesia San Miguel
VITE_CEREMONY_ADDRESS=Calle Principal #123, Ciudad

# Recepción
VITE_RECEPTION_TITLE=Recepción
VITE_RECEPTION_DATE=15 de Junio, 2025
VITE_RECEPTION_TIME=20:00 hrs
VITE_RECEPTION_VENUE=Jardín de Eventos Primavera
VITE_RECEPTION_ADDRESS=Avenida Los Rosales #456, Ciudad
```

#### Opción B: Archivo de Configuración

**Ubicación:** `src/config/weddingConfig.ts`

```typescript
event: {
  ceremony: {
    title: "Ceremonia",
    date: "15 de Junio, 2025",
    time: "18:00 hrs",
    venue: "Iglesia San Miguel",
    address: "Calle Principal #123, Ciudad"
  },
  reception: {
    title: "Recepción",
    date: "15 de Junio, 2025",
    time: "20:00 hrs",
    venue: "Jardín de Eventos Primavera",
    address: "Avenida Los Rosales #456, Ciudad"
  }
}
```

**Componente:** `src/components/wedding/EventDetails.tsx` (y variantes por tema)

### 4. 📍 Ubicación y Coordenadas Geográficas

#### Opción A: Variables de Entorno (Recomendado)

```env
VITE_LOCATION_VENUE=Jardín de Eventos Primavera
VITE_LOCATION_ADDRESS=Avenida Los Rosales #456, Ciudad
VITE_LOCATION_LAT=19.4326
VITE_LOCATION_LNG=-99.1332
VITE_LOCATION_DIRECTIONS=El jardín cuenta con estacionamiento gratuito...
```

**Cómo obtener las coordenadas:**
1. Abre [Google Maps](https://www.google.com/maps)
2. Busca la ubicación de tu evento
3. Haz clic derecho en el lugar exacto
4. Selecciona "¿Qué hay aquí?"
5. Copia las coordenadas (latitud y longitud)

#### Opción B: Archivo de Configuración

**Ubicación:** `src/config/weddingConfig.ts`

```typescript
location: {
  venue: "Jardín de Eventos Primavera",
  address: "Avenida Los Rosales #456, Ciudad",
  coordinates: {
    lat: 19.4326,
    lng: -99.1332
  },
  directions: "Instrucciones para llegar..."
}
```

**Componente:** `src/components/wedding/Location.tsx` (y variantes por tema)

### 5. 🎵 Lista de Reproducción de Música

#### Opción A: Spotify Embed (Recomendado)

**Variables de Entorno:**
```env
VITE_MUSIC_ENABLED=true
VITE_MUSIC_SPOTIFY_EMBED=https://open.spotify.com/embed/playlist/37i9dQZF1DX4UtSsGT1Sbe
```

**Cómo obtener la URL de Spotify:**
1. Abre [Spotify](https://open.spotify.com)
2. Ve a tu playlist o canción
3. Haz clic en los tres puntos (⋯) → "Compartir" → "Insertar canción/playlist"
4. En la ventana que se abre, copia la URL completa del iframe
5. La URL debe comenzar con `https://open.spotify.com/embed/`

**Ejemplo de URL válida:**
```
https://open.spotify.com/embed/playlist/37i9dQZF1DX4UtSsGT1Sbe?utm_source=generator
```

**⚠️ Importante:**
- La URL debe ser la URL de **embed**, no la URL normal de Spotify
- Debe comenzar con `https://open.spotify.com/embed/`
- Después de editar el archivo `.env`, **reinicia el servidor de desarrollo** para que los cambios surtan efecto
- Si no funciona, verifica que no haya espacios extra en la URL en el archivo `.env`

#### Opción B: Audio Directo

**Variables de Entorno:**
```env
VITE_MUSIC_ENABLED=true
VITE_MUSIC_AUDIO_URL=/audio/cancion.mp3
```

**Pasos:**
1. Coloca tu archivo de audio en `public/audio/`
2. Edita `.env` con la ruta del archivo
3. Reinicia el servidor

#### Opción C: Archivo de Configuración

**Ubicación:** `src/config/weddingConfig.ts`

```typescript
music: {
  enabled: true,
  spotifyEmbed: "https://open.spotify.com/embed/playlist/TU_PLAYLIST_ID",
  audioUrl: "" // O usa esta opción para audio directo
}
```

**Componente:** `src/components/wedding/MusicPlayer.tsx`

### 6. 📸 Galería de Fotos

#### Estructura de Carpetas

Las imágenes de la galería deben estar en la carpeta `public/images/` (o directamente en `public/`).

**Estructura recomendada:**
```
public/
└── images/
    ├── 1-pareja.jpg
    ├── 2-pareja.jpg
    ├── 3-pareja.jpg
    ├── 4-pareja.jpg
    ├── 5-pareja.jpg
    └── 6-pareja.jpg
```

#### Opción A: Variables de Entorno (Recomendado)

**1. Coloca tus imágenes en `public/images/`**

**2. Edita el archivo `.env`** con las rutas de las imágenes separadas por comas:

```env
# Múltiples imágenes para la galería
VITE_GALLERY_IMAGES=/images/1-pareja.jpg,/images/2-pareja.jpg,/images/3-pareja.jpg,/images/4-pareja.jpg,/images/5-pareja.jpg,/images/6-pareja.jpg
```

**3. Reinicia el servidor de desarrollo**

**Nota:** 
- Puedes agregar tantas imágenes como quieras, separadas por comas
- Los nombres de archivo no deben tener espacios
- Las rutas deben comenzar con `/` y ser relativas a la carpeta `public/`

#### Opción B: Archivo de Configuración

**Ubicación:** `src/config/weddingConfig.ts`

```typescript
gallery: [
  { url: "/images/1-pareja.jpg", alt: "Foto 1" },
  { url: "/images/2-pareja.jpg", alt: "Foto 2" },
  { url: "/images/3-pareja.jpg", alt: "Foto 3" }
]
```

**Componente:** `src/components/wedding/Gallery.tsx` (y variantes por tema)

### 6.5. 💕 Imagen de "Nuestra Historia" (Our Story)

#### Estructura de Carpetas

La imagen debe estar en la carpeta `public/images/` (o directamente en `public/`).

#### Opción A: Variables de Entorno (Recomendado)

**1. Coloca tu imagen en `public/images/`**

**2. Edita el archivo `.env`** con la ruta de la imagen:

```env
# Imagen para la sección "Nuestra Historia"
VITE_OUR_STORY_IMAGE=/images/1-pareja.jpg
```

**3. Reinicia el servidor de desarrollo**

#### Opción B: Archivo de Configuración

**Ubicación:** `src/config/weddingConfig.ts`

```typescript
ourStory: {
  title: "Nuestra Historia",
  content: "Tu historia personalizada...",
  image: "/images/1-pareja.jpg"
}
```

**Componente:** `src/components/wedding/OurStory.tsx` (y variantes por tema)

### 7. 📋 Formulario de Google para Confirmación de Asistencia

#### Opción A: Variables de Entorno (Recomendado)

```env
VITE_RSVP_ENABLED=true
VITE_RSVP_DEADLINE=2025-05-15
VITE_RSVP_GOOGLE_FORM_ENABLED=true
VITE_RSVP_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/TU_FORM_ID/viewform
```

**Cómo crear y obtener la URL del formulario:**
1. Ve a [Google Forms](https://forms.google.com)
2. Crea un nuevo formulario
3. Agrega los campos que necesites (nombre, número de invitados, etc.)
4. Haz clic en "Enviar" (icono de papel)
5. Selecciona el icono de "link" (🔗)
6. Copia la URL completa
7. O usa la URL de "Vista previa" que termina en `/viewform`

**Ejemplo de URL:**
```
https://docs.google.com/forms/d/e/1FAIpQLSdEXAMPLE123456/viewform
```

#### Opción B: Archivo de Configuración

**Ubicación:** `src/config/weddingConfig.ts`

```typescript
rsvp: {
  enabled: true,
  deadline: "2025-05-15",
  googleForm: {
    enabled: true,
    url: "https://docs.google.com/forms/d/e/TU_FORM_ID/viewform"
  }
}
```

**Componente:** `src/components/wedding/RSVP.tsx` (y variantes por tema)

### 8. 💰 Mesa de Regalos - Transferencia Bancaria

#### Opción A: Variables de Entorno (Recomendado)

```env
VITE_GIFTS_TITLE=Mesa de Regalos
VITE_GIFTS_MESSAGE=Tu presencia es nuestro mejor regalo...
VITE_BANK_NAME=Banco Nacional
VITE_BANK_ACCOUNT=**** **** **** 1234
VITE_BANK_CLABE=012345678901234567
```

#### Opción B: Archivo de Configuración

**Ubicación:** `src/config/weddingConfig.ts`

```typescript
gifts: {
  title: "Mesa de Regalos",
  message: "Tu mensaje personalizado...",
  bankTransfer: {
    enabled: true,
    bank: "Banco Nacional",
    accountNumber: "**** **** **** 1234",
    clabe: "012345678901234567"
  }
}
```

**Componente:** `src/components/wedding/Gifts.tsx` (y variantes por tema)

## 🔒 Funciones Premium

Para habilitar funciones premium, edita el archivo `.env`:

```env
VITE_PREMIUM_FEATURES=true
```

**Funciones Premium incluyen:**
- Nuestra Historia (OurStory)
- Agenda del Evento (Schedule)
- Galería de Fotos (Gallery)
- Código de Vestimenta (DressCode)
- Footer personalizado
- Opciones adicionales de RSVP (WhatsApp y Email)

**Nota:** Después de habilitar `VITE_PREMIUM_FEATURES=true`, también necesitas:
1. Descomentar los imports en las páginas de invitación (`src/pages/Invitation*.tsx`)
2. Descomentar el código RSVP en los componentes (`src/components/wedding/RSVP*.tsx`)
3. Habilitar las opciones en `weddingConfig.ts` si usas WhatsApp/Email

Ver `PREMIUM_FEATURES.md` para más detalles.

## 📁 Estructura del Proyecto

```
lovelink-invitations/
├── public/                 # Archivos estáticos (imágenes, audio)
│   ├── images/            # 📁 Carpeta para imágenes (recomendado)
│   │   ├── 1-pareja.jpg   # Imágenes del hero, galería, etc.
│   │   ├── 2-pareja.jpg
│   │   └── ...
│   ├── audio/             # Archivos de audio (opcional)
│   └── placeholder.svg    # Imagen por defecto
├── src/
│   ├── components/
│   │   └── wedding/       # Componentes de la invitación
│   │       ├── HeroSection.tsx
│   │       ├── Countdown.tsx
│   │       ├── EventDetails.tsx
│   │       ├── Location.tsx
│   │       ├── Gifts.tsx
│   │       ├── RSVP.tsx
│   │       ├── MusicPlayer.tsx
│   │       ├── modern/     # Variantes del tema moderno
│   │       └── rustic/    # Variantes del tema rústico
│   ├── config/
│   │   ├── weddingConfig.ts    # ⭐ Configuración principal
│   │   └── premiumFeatures.ts  # Control de funciones premium
│   └── pages/
│       ├── InvitationRomantic.tsx
│       ├── InvitationModern.tsx
│       └── InvitationRustic.tsx
├── .env                   # ⭐ Variables de entorno (crear desde .env.example)
├── .env.example          # Plantilla de variables de entorno
└── README.md             # Este archivo
```

## 🎨 Temas Disponibles

El proyecto incluye tres temas predefinidos:

1. **Romántico** (`/invitation/romantic`) - Elegante y clásico
2. **Moderno** (`/invitation/modern`) - Minimalista y contemporáneo
3. **Rústico** (`/invitation/rustic`) - Acogedor y natural

## 🚀 Despliegue

### Despliegue en Vercel/Netlify

1. Conecta tu repositorio a Vercel o Netlify
2. Configura las variables de entorno en el panel de control
3. El despliegue se realizará automáticamente

### Despliegue Manual

```bash
# Construir para producción
npm run build

# Los archivos estarán en la carpeta dist/
# Puedes servir estos archivos con cualquier servidor estático
```

## 📚 Recursos Adicionales

- [Documentación de Vite](https://vitejs.dev/)
- [Documentación de React](https://react.dev/)
- [Documentación de Tailwind CSS](https://tailwindcss.com/)
- [Google Forms - Crear formulario](https://forms.google.com)
- [Spotify - Obtener embed](https://open.spotify.com)

## 🆘 Solución de Problemas

### Las variables de entorno no funcionan
- Asegúrate de que el archivo se llame `.env` (no `.env.example`)
- Reinicia el servidor de desarrollo después de editar `.env`
- Las variables deben comenzar con `VITE_`

### Las imágenes no se muestran

**Problemas comunes y soluciones:**

1. **Las imágenes no aparecen después de agregarlas al `.env`**
   - ✅ **Solución:** Reinicia el servidor de desarrollo (detén con Ctrl+C y vuelve a iniciar)
   - Las variables de entorno solo se cargan al iniciar el servidor

2. **Error 404 al cargar imágenes**
   - ✅ Verifica que las imágenes estén en la carpeta `public/images/` (o `public/`)
   - ✅ Verifica que las rutas en `.env` comiencen con `/` (ejemplo: `/images/foto.jpg`)
   - ✅ Verifica que los nombres de archivo **no tengan espacios** (renómbralos si es necesario)
   - ✅ Las rutas son relativas a la carpeta `public/`:
     - Si la imagen está en `public/images/foto.jpg` → ruta: `/images/foto.jpg`
     - Si la imagen está en `public/foto.jpg` → ruta: `/foto.jpg`

3. **Las imágenes aparecen rotas o no se cargan**
   - ✅ Revisa la consola del navegador (F12) para ver errores 404
   - ✅ Verifica que los formatos sean soportados: `.jpg`, `.jpeg`, `.png`, `.webp`
   - ✅ Verifica que los nombres de archivo coincidan exactamente (mayúsculas/minúsculas importan)

4. **Las variables de entorno no se cargan**
   - ✅ Asegúrate de que el archivo se llame `.env` (no `.env.example`)
   - ✅ Las variables deben comenzar con `VITE_`
   - ✅ No dejes espacios alrededor del `=` en el `.env`
   - ✅ Reinicia el servidor después de editar el `.env`

### El mapa no se muestra
- Verifica que las coordenadas sean correctas
- Asegúrate de que `VITE_LOCATION_LAT` y `VITE_LOCATION_LNG` sean números válidos

### La música no suena
- Verifica que `VITE_MUSIC_ENABLED=true`
- Para Spotify, asegúrate de que la URL sea un embed válido
- Para audio directo, verifica que el archivo exista en `public/audio/`

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo la licencia MIT.

## 💬 Soporte

Para preguntas o problemas, abre un issue en el repositorio o contacta al equipo de desarrollo.

---

**¡Felicitaciones por tu boda! 💍✨**
