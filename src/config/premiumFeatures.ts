// Configuración de funciones premium
// Controla qué funciones están habilitadas en la versión gratuita vs premium
// Para habilitar funciones premium, establecer VITE_PREMIUM_FEATURES=true en el archivo .env

export const isPremiumEnabled = import.meta.env.VITE_PREMIUM_FEATURES === 'true';

// Funciones premium que se pueden activar/desactivar
export const premiumFeatures = {
  // Nuestra Historia
  ourStory: isPremiumEnabled,
  
  // Agenda: desactivada en esta invitación
  schedule: false,

  // Galería y vestimenta: no se usan en esta invitación
  gallery: false,
  dressCode: false,

  // Footer
  footer: isPremiumEnabled,
  
  // Opciones adicionales de RSVP (WhatsApp y Email)
  rsvpWhatsApp: isPremiumEnabled,
  rsvpEmail: isPremiumEnabled,
};

