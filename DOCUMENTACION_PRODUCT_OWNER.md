# 📋 Documentación del Proyecto - Invitaciones de Boda

## Resumen Ejecutivo

Este proyecto es una aplicación web moderna y completa para crear invitaciones de boda digitales personalizadas. El sistema permite a las parejas crear invitaciones elegantes con múltiples temas (Romántico, Moderno y Rústico) de forma rápida y sencilla mediante variables de entorno, sin necesidad de conocimientos técnicos avanzados.

---

## 🎯 Objetivos Cumplidos

### 1. Sistema de Versiones (Gratuita vs Premium)
- ✅ **Versión Gratuita**: Incluye todas las funcionalidades esenciales
- ✅ **Versión Premium**: Funciones adicionales comentadas y listas para activar
- ✅ Control mediante variable de entorno `VITE_PREMIUM_FEATURES`

### 2. Personalización Simplificada
- ✅ **Sistema de Variables de Entorno**: Personalización completa sin tocar código
- ✅ **Archivo `.env`**: Configuración centralizada y fácil de editar
- ✅ **Valores por Defecto**: Funciona sin configuración inicial

### 3. Funcionalidades Implementadas

#### Versión Gratuita (Siempre Activa)
1. **Hero Principal**
   - Nombres de los novios personalizables
   - Carousel de fotos (1-4 imágenes)
   - Diseño elegante y responsive

2. **Cuenta Regresiva**
   - Cuenta regresiva hasta la fecha del evento
   - Formato: "Faltan X días para el día más especial de nuestras vidas"
   - Actualización automática

3. **Detalles del Evento**
   - Información de ceremonia y recepción
   - Fechas y horarios
   - Ubicaciones de cada evento

4. **Ubicación con Mapa Interactivo**
   - Mapa de Google Maps integrado
   - Coordenadas geográficas configurables
   - Botón "Cómo Llegar" con navegación
   - Sección de indicaciones personalizables

5. **Mesa de Regalos**
   - Información de tiendas (Liverpool, Amazon, etc.)
   - **Transferencia Bancaria** (siempre visible):
     - Banco
     - Cuenta
     - Alias
   - Mensaje personalizable

6. **Confirmación de Asistencia (RSVP)**
   - Formulario de Google Forms integrado
   - Botón directo para abrir formulario
   - Fecha límite configurable

7. **Reproductor de Música**
   - Soporte para Spotify Embed (recomendado)
   - Soporte para audio directo
   - Funcionalidad de minimizar/maximizar
   - La música continúa sonando al minimizar

#### Funciones Premium (Opcionales)
- Nuestra Historia
- Agenda detallada del evento
- Galería de fotos
- Código de vestimenta
- Footer personalizado
- Opciones adicionales de RSVP (WhatsApp y Email)

---

## 🛠️ Facilidades Técnicas para el Product Owner

### 1. Personalización Sin Código
**Antes**: Requería editar archivos TypeScript y conocer la estructura del proyecto
**Ahora**: Solo necesita editar un archivo `.env` con valores simples

**Ejemplo:**
```env
VITE_BRIDE_NAME=María
VITE_GROOM_NAME=Juan
VITE_EVENT_DATE=2025-07-20T18:00:00
```

### 2. Configuración Centralizada
- **Un solo archivo** (`.env`) contiene toda la configuración
- **Valores por defecto** permiten funcionar sin configuración
- **Documentación completa** en README.md

### 3. Sistema de Temas
- **3 temas predefinidos**: Romántico, Moderno, Rústico
- **Misma funcionalidad** en todos los temas
- **Fácil cambio** de tema sin afectar la configuración

### 4. Control de Versiones
- **Versión Gratuita**: Funciona inmediatamente
- **Versión Premium**: Se activa con una variable (`VITE_PREMIUM_FEATURES=true`)
- **Código comentado**: Listo para descomentar cuando se necesite

### 5. Documentación Completa
- **README.md**: Guía completa de uso y personalización
- **.env.example**: Plantilla con todas las variables
- **Comentarios en código**: Explicaciones claras

---

## 📊 Estructura de Personalización

### Nivel 1: Variables de Entorno (Recomendado)
**Para quién**: Usuarios sin conocimientos técnicos
**Dificultad**: ⭐ Muy Fácil
**Tiempo**: 5-10 minutos

Editar archivo `.env` con:
- Nombres de los novios
- Fecha del evento
- URLs de imágenes
- URL de Spotify
- Coordenadas de ubicación
- URL de formulario de Google
- Datos bancarios

### Nivel 2: Archivo de Configuración
**Para quién**: Usuarios con conocimientos básicos
**Dificultad**: ⭐⭐ Fácil
**Tiempo**: 15-20 minutos

Editar `src/config/weddingConfig.ts` para:
- Textos personalizados adicionales
- Configuración avanzada
- Múltiples mesas de regalos

### Nivel 3: Componentes
**Para quién**: Desarrolladores
**Dificultad**: ⭐⭐⭐⭐ Avanzado
**Tiempo**: Variable

Modificar componentes React para cambios de diseño o funcionalidad

---

## 🎨 Temas Disponibles

### 1. Romántico (`/invitation/romantic`)
- Estilo elegante y clásico
- Colores suaves y románticos
- Tipografía serif

### 2. Moderno (`/invitation/modern`)
- Diseño minimalista
- Líneas limpias
- Tipografía sans-serif

### 3. Rústico (`/invitation/rustic`)
- Estilo acogedor y natural
- Colores tierra
- Tipografía tradicional

**Nota**: Todos los temas comparten la misma funcionalidad y se personalizan con las mismas variables de entorno.

---

## 🔧 Variables de Entorno Disponibles

### Información Básica
- `VITE_BRIDE_NAME` - Nombre de la novia
- `VITE_GROOM_NAME` - Nombre del novio
- `VITE_COUPLE_NAMES` - Nombres combinados (ej: "María & Juan")
- `VITE_EVENT_DATE` - Fecha y hora del evento (formato: YYYY-MM-DDTHH:mm:ss)

### Imágenes
- `VITE_HERO_IMAGES` - Imágenes del carousel (separadas por comas)

### Música
- `VITE_MUSIC_ENABLED` - Activar/desactivar música (true/false)
- `VITE_MUSIC_SPOTIFY_EMBED` - URL de embed de Spotify
- `VITE_MUSIC_AUDIO_URL` - URL de audio directo (alternativa)

### Detalles de Ceremonia y Recepción
- `VITE_CEREMONY_TITLE` - Título de la ceremonia
- `VITE_CEREMONY_DATE` - Fecha de la ceremonia
- `VITE_CEREMONY_TIME` - Hora de la ceremonia
- `VITE_CEREMONY_VENUE` - Lugar de la ceremonia
- `VITE_CEREMONY_ADDRESS` - Dirección de la ceremonia
- `VITE_RECEPTION_TITLE` - Título de la recepción
- `VITE_RECEPTION_DATE` - Fecha de la recepción
- `VITE_RECEPTION_TIME` - Hora de la recepción
- `VITE_RECEPTION_VENUE` - Lugar de la recepción
- `VITE_RECEPTION_ADDRESS` - Dirección de la recepción

### Ubicación
- `VITE_LOCATION_VENUE` - Nombre del lugar
- `VITE_LOCATION_ADDRESS` - Dirección completa
- `VITE_LOCATION_LAT` - Latitud (coordenada)
- `VITE_LOCATION_LNG` - Longitud (coordenada)
- `VITE_LOCATION_MAP_URL` - URL de Google Maps (opcional)
- `VITE_LOCATION_DIRECTIONS` - Indicaciones para llegar

### Mesa de Regalos
- `VITE_GIFTS_TITLE` - Título de la sección
- `VITE_GIFTS_MESSAGE` - Mensaje personalizado
- `VITE_BANK_NAME` - Nombre del banco
- `VITE_BANK_ACCOUNT` - Número de cuenta
- `VITE_BANK_ALIAS` - Alias de la cuenta

### Confirmación de Asistencia
- `VITE_RSVP_ENABLED` - Activar/desactivar RSVP
- `VITE_RSVP_DEADLINE` - Fecha límite (formato: YYYY-MM-DD)
- `VITE_RSVP_GOOGLE_FORM_ENABLED` - Activar formulario de Google
- `VITE_RSVP_GOOGLE_FORM_URL` - URL del formulario de Google

### Funciones Premium (Requiere `VITE_PREMIUM_FEATURES=true`)

#### RSVP Premium
- `VITE_RSVP_WHATSAPP_ENABLED` - Activar RSVP por WhatsApp
- `VITE_RSVP_WHATSAPP_NUMBER` - Número de WhatsApp (formato: código país + número)
- `VITE_RSVP_WHATSAPP_MESSAGE` - Mensaje predeterminado para WhatsApp
- `VITE_RSVP_EMAIL_ENABLED` - Activar RSVP por Email
- `VITE_RSVP_EMAIL_ADDRESS` - Dirección de email para confirmaciones

#### Nuestra Historia (OurStory)
- `VITE_OUR_STORY_TITLE` - Título de la sección
- `VITE_OUR_STORY_CONTENT` - Contenido de la historia
- `VITE_OUR_STORY_IMAGE` - Ruta de la imagen

#### Agenda del Evento (Schedule)
- `VITE_SCHEDULE` - JSON array con eventos: `[{"time":"18:00","event":"Ceremonia","icon":"church"}]`
- Iconos disponibles: `church`, `glass`, `dinner`, `dance`, `party`, `star`, `cake`, `music`, `heart`, `ring`

#### Galería de Fotos (Gallery)
- `VITE_GALLERY_IMAGES` - Formato simple (separado por comas) o JSON con texto alternativo
- Ejemplo simple: `/foto1.jpg,/foto2.jpg`
- Ejemplo JSON: `[{"url":"/foto1.jpg","alt":"Descripción"}]`

#### Código de Vestimenta (DressCode)
- `VITE_DRESS_CODE_TITLE` - Título de la sección
- `VITE_DRESS_CODE_CODE` - Código de vestimenta (ej: "Formal de Noche")
- `VITE_DRESS_CODE_DESCRIPTION` - Descripción del código
- `VITE_DRESS_CODE_COLORS_AVOID` - Colores a evitar (separados por comas)
- `VITE_DRESS_CODE_COLORS_SUGGESTED` - Colores sugeridos (separados por comas)

#### Redes Sociales
- `VITE_SOCIAL_HASHTAG` - Hashtag de la boda
- `VITE_SOCIAL_INSTAGRAM` - Cuenta de Instagram

### Control de Versión
- `VITE_PREMIUM_FEATURES` - Activar funciones premium (true/false)

---

## 📈 Ventajas del Sistema

### Para el Product Owner
1. **Onboarding Rápido**: Cliente puede personalizar en minutos
2. **Sin Dependencia Técnica**: No requiere desarrollador para cambios básicos
3. **Escalable**: Fácil agregar nuevas funcionalidades
4. **Mantenible**: Código organizado y documentado
5. **Flexible**: Sistema de versiones permite diferentes planes

### Para el Cliente Final
1. **Fácil de Usar**: Solo edita un archivo de texto
2. **Rápido**: Personalización en 5-10 minutos
3. **Profesional**: Resultado elegante sin conocimientos técnicos
4. **Completo**: Todas las funcionalidades esenciales incluidas
5. **Responsive**: Funciona en todos los dispositivos

---

## 🚀 Proceso de Implementación

### Paso 1: Recolección de Datos
Usar el documento `DATOS_NECESARIOS_PAREJA.md` para recopilar información

### Paso 2: Configuración Inicial
1. Copiar `.env.example` a `.env`
2. Completar con datos de la pareja
3. Verificar que todas las variables estén correctas

### Paso 3: Personalización de Imágenes
1. Colocar imágenes en carpeta `public/`
2. Actualizar `VITE_HERO_IMAGES` con rutas

### Paso 4: Configuración de Spotify
1. Obtener URL de embed de Spotify
2. Actualizar `VITE_MUSIC_SPOTIFY_EMBED`

### Paso 5: Configuración de Google Forms
1. Crear formulario en Google Forms
2. Copiar URL y actualizar `VITE_RSVP_GOOGLE_FORM_URL`

### Paso 6: Verificación
1. Iniciar servidor de desarrollo
2. Revisar cada sección
3. Probar en diferentes dispositivos

---

## 📝 Notas Importantes

### Requisitos Técnicos
- Node.js 18+ o Bun
- Servidor de desarrollo para probar cambios
- Reiniciar servidor después de editar `.env`

### Limitaciones
- Las variables de entorno solo funcionan en desarrollo/producción
- Requiere reiniciar servidor para aplicar cambios en `.env`
- Imágenes deben estar en carpeta `public/`

### Mejores Prácticas
- Usar siempre variables de entorno para datos personalizables
- Mantener `.env` fuera del control de versiones (ya está en `.gitignore`)
- Documentar cualquier cambio en configuración personalizada

---

## 🎯 Próximos Pasos Sugeridos

1. **Automatización**: Crear script que genere `.env` desde formulario web
2. **Panel de Administración**: Interfaz gráfica para editar configuración
3. **Preview en Tiempo Real**: Ver cambios sin reiniciar servidor
4. **Más Temas**: Agregar temas adicionales según demanda
5. **Analytics**: Integrar seguimiento de visitas y confirmaciones

---

## 📞 Soporte

Para preguntas o problemas:
- Revisar `README.md` para guías detalladas
- Consultar `PREMIUM_FEATURES.md` para funciones premium
- Verificar que todas las variables estén correctamente configuradas

---

**Última actualización**: Diciembre 2024
**Versión del Proyecto**: 1.0.0

