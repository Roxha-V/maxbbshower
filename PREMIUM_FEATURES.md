# Funciones Premium - Documentación

## Configuración

Este proyecto tiene dos versiones: **Gratuita** y **Premium**. Las funciones premium se controlan mediante una variable de entorno.

### Versión Gratuita (Por Defecto)

La versión gratuita incluye las siguientes funciones activas:

- ✅ **Hero Principal** - Con nombres y carousel de fotos
- ✅ **Cuenta Regresiva** - "Faltan X días para el día más especial de nuestras vidas"
- ✅ **Detalles del Evento** - Para saber día y horarios
- ✅ **Ubicación** - Mapa y dirección del evento
- ✅ **Mesa de Regalos** - Información sobre regalos
- ✅ **Confirmación de Asistencia** - Formulario de Google Forms
- ✅ **Música** - Reproductor de música

### Funciones Premium (Comentadas)

Las siguientes funciones están comentadas pero listas para habilitarse:

- 🔒 **Nuestra Historia** (OurStory)
- 🔒 **Agenda del Evento** (Schedule)
- 🔒 **Galería de Fotos** (Gallery)
- 🔒 **Código de Vestimenta** (DressCode)
- 🔒 **Footer**
- 🔒 **Opciones adicionales de RSVP** (WhatsApp y Email)

## Cómo Habilitar Funciones Premium

### Paso 1: Crear archivo `.env`

Crea un archivo `.env` en la raíz del proyecto con el siguiente contenido:

```env
VITE_PREMIUM_FEATURES=true
```

### Paso 2: Configurar el Formulario de Google

En `src/config/weddingConfig.ts`, actualiza la URL del formulario de Google:

```typescript
rsvp: {
  googleForm: {
    enabled: true,
    url: "https://docs.google.com/forms/d/e/YOUR_FORM_ID/viewform"
  }
}
```

### Paso 3: Descomentar Funciones Premium

Cuando `VITE_PREMIUM_FEATURES=true`, las funciones premium se habilitarán automáticamente. Sin embargo, también necesitas:

1. **Descomentar los imports** en las páginas de invitación:
   - `src/pages/InvitationRomantic.tsx`
   - `src/pages/InvitationModern.tsx`
   - `src/pages/InvitationRustic.tsx`

2. **Descomentar el código RSVP** en los componentes:
   - `src/components/wedding/RSVP.tsx`
   - `src/components/wedding/modern/RSVPModern.tsx`
   - `src/components/wedding/rustic/RSVPRustic.tsx`

3. **Habilitar opciones en weddingConfig.ts**:
   ```typescript
   rsvp: {
     whatsapp: {
       enabled: true, // Cambiar a true
       number: "5212345678900"
     },
     email: {
       enabled: true, // Cambiar a true
       address: "invitacion@ejemplo.com"
     }
   }
   ```

### Paso 4: Reiniciar el servidor de desarrollo

Después de cambiar la variable de entorno, reinicia el servidor:

```bash
npm run dev
# o
bun dev
```

## Estructura de Archivos

- `src/config/premiumFeatures.ts` - Control de funciones premium
- `src/config/weddingConfig.ts` - Configuración de la invitación
- `src/pages/Invitation*.tsx` - Páginas de invitación (comentadas las funciones premium)
- `src/components/wedding/RSVP*.tsx` - Componentes RSVP (comentadas opciones premium)

## Notas Importantes

- Todas las funciones premium están **comentadas pero no eliminadas** del código
- El código está listo para habilitarse simplemente descomentando
- La variable de entorno `VITE_PREMIUM_FEATURES` controla la lógica de habilitación
- En versión gratuita, solo el formulario de Google Forms está activo para RSVP

