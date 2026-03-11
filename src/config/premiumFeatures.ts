// Configuración de funciones premium
// Controla qué funciones están habilitadas en la versión gratuita vs premium
// Para habilitar funciones premium, establecer VITE_PREMIUM_FEATURES=true en el archivo .env

export const isPremiumEnabled = import.meta.env.VITE_PREMIUM_FEATURES === 'true';

// Funciones premium que se pueden activar/desactivar
export const premiumFeatures = {
  // Nuestra Historia
  ourStory: isPremiumEnabled,
  
  // Agenda del evento
  schedule: isPremiumEnabled,
  
  // Galería de fotos
  gallery: isPremiumEnabled,
  
  // Código de vestimenta
  dressCode: isPremiumEnabled,
  
  // Footer
  footer: isPremiumEnabled,
  
  // Opciones adicionales de RSVP (WhatsApp y Email)
  rsvpWhatsApp: isPremiumEnabled,
  rsvpEmail: isPremiumEnabled,
};

