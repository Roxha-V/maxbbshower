// Configuración de la invitación - Edita aquí para personalizar
// Las variables de entorno tienen prioridad sobre los valores por defecto
export const weddingConfig = {
  // Información de los novios
  couple: {
    bride: import.meta.env.VITE_BRIDE_NAME || "Laura",
    groom: import.meta.env.VITE_GROOM_NAME || "Nicolas",
    coupleNames: import.meta.env.VITE_COUPLE_NAMES || "Nicolas & Laura"
  },

  // Fecha del evento (formato: YYYY-MM-DDTHH:mm:ss)
  eventDate: import.meta.env.VITE_EVENT_DATE || "2026-06-13T21:30:00",

  // Títulos y citas para el hero (estilo invitación)
  hero: {
    title: import.meta.env.VITE_HERO_TITLE || "¡Nuestra Boda!",
    bibleRef: import.meta.env.VITE_HERO_BIBLE_REF || "Cantares 6:3",
    bibleQuote: import.meta.env.VITE_HERO_BIBLE_QUOTE || "Yo soy de mi amada y mi amado es mío...",
    ourYes: import.meta.env.VITE_HERO_OUR_YES || "Nuestro sí para siempre"
  },

  // Mensaje de la familia / invitación (texto principal)
  familyMessage: {
    enabled: import.meta.env.VITE_FAMILY_MESSAGE_ENABLED !== 'false',
    // Índices de párrafos que se muestran en negrita (ej. valor por persona y aviso 20 abril)
    boldParagraphIndices: (() => {
      const raw = import.meta.env.VITE_FAMILY_MESSAGE_BOLD_INDICES;
      if (raw) return raw.split(',').map((i: string) => parseInt(i.trim(), 10)).filter((n: number) => !isNaN(n));
      return [2, 3];
    })(),
    accountInfoNote: import.meta.env.VITE_FAMILY_MESSAGE_ACCOUNT_NOTE || "La información de la cuenta para el pago está más abajo en la sección «El Regalo».",
    paragraphs: (() => {
      const raw = import.meta.env.VITE_FAMILY_MESSAGE;
      if (raw) return raw.split(/\n|\\n/).map((p: string) => p.trim()).filter(Boolean);
      return [
        "Hola Familia y amigos, con mucha alegría queremos contarles que ¡NOS CASAMOS! 👰🏻‍♀️🤵🏻",
        "Por eso te invitamos a ser parte de este momento único en nuestras vidas y deseamos de corazón que nos acompañes en este día tan especial.",
        "Hemos logrado pagar el 40% de la tarjeta por lo que el valor por persona actual es de $69 mil pesos. Podes pagar la misma en un solo pago o dos cuotas hasta el 23 de mayo del 2026.",
        "En caso de no poder acompañarnos te pedimos que nos puedas avisar con tiempo hasta el 20 de abril, esto nos ayudaría mucho a nuestra organización.",
        "Con mucho cariño Nico y Lau. 🥂✨"
      ];
    })()
  },

  // Imágenes del slideshow (4 imágenes o 1 sola)
  // Puedes usar variables de entorno separadas por comas: VITE_HERO_IMAGES="/img1.jpg,/img2.jpg,/img3.jpg,/img4.jpg"
  heroImages: (() => {
    const envImages = import.meta.env.VITE_HERO_IMAGES;

    if (envImages) {
      const images = envImages.split(',').map(img => img.trim()).filter(Boolean);
      if (images.length) return images;
    }

    return ["/placeholder.svg"];
  })(),

  // Música de fondo (URL de audio o embed de Spotify)
  music: {
    enabled: import.meta.env.VITE_MUSIC_ENABLED !== 'false',
    audioUrl: import.meta.env.VITE_MUSIC_AUDIO_URL || "",
    // URL de embed de Spotify (track o playlist). Ej: https://open.spotify.com/embed/track/...
    spotifyEmbed: (import.meta.env.VITE_MUSIC_SPOTIFY_EMBED && import.meta.env.VITE_MUSIC_SPOTIFY_EMBED.trim() !== "")
      ? import.meta.env.VITE_MUSIC_SPOTIFY_EMBED
      : "https://open.spotify.com/embed/track/2BkIuKSt6d4eIQ7j37YilC"
  },

  // Historia de los novios
  ourStory: {
    title: import.meta.env.VITE_OUR_STORY_TITLE || "Nuestra Historia",
    content: import.meta.env.VITE_OUR_STORY_CONTENT || `Nos conocimos una tarde de primavera en el parque central de la ciudad. 
    Desde el primer momento supimos que había algo especial entre nosotros. 
    Después de cinco años de amor, risas y aventuras juntos, 
    hemos decidido dar el siguiente paso y unir nuestras vidas para siempre. 
    
    Queremos compartir este momento tan especial con vos, 
    y nos encantaría que nos acompañes en el día más importante de nuestras vidas.`,
    image: import.meta.env.VITE_OUR_STORY_IMAGE || "/placeholder.svg"
  },

  // Detalles del evento (Ceremonia y Celebración - unificado)
  event: {
    ceremony: {
      title: import.meta.env.VITE_CEREMONY_TITLE || "Ceremonia y Celebración",
      date: import.meta.env.VITE_CEREMONY_DATE || "Sábado 13 de Junio, 2026",
      time: import.meta.env.VITE_CEREMONY_TIME || "21:30 hs",
      venue: import.meta.env.VITE_CEREMONY_VENUE || "Complejo Las Heras",
      address: import.meta.env.VITE_CEREMONY_ADDRESS || "Av. Gdor. Arnoldo Anibal Castillo, K4700 San Fernando del Valle de Catamarca, Catamarca"
    },
    reception: {
      title: import.meta.env.VITE_RECEPTION_TITLE || "Ceremonia y Celebración",
      date: import.meta.env.VITE_RECEPTION_DATE || "Sábado 13 de Junio, 2026",
      time: import.meta.env.VITE_RECEPTION_TIME || "21:30 hs",
      venue: import.meta.env.VITE_RECEPTION_VENUE || "Complejo Las Heras",
      address: import.meta.env.VITE_RECEPTION_ADDRESS || "Av. Gdor. Arnoldo Anibal Castillo, K4700 San Fernando del Valle de Catamarca, Catamarca"
    }
  },

  // Ubicación con mapa
  location: {
    venue: import.meta.env.VITE_LOCATION_VENUE || "Complejo Las Heras",
    address: import.meta.env.VITE_LOCATION_ADDRESS || "Av. Gdor. Arnoldo Anibal Castillo, K4700 San Fernando del Valle de Catamarca, Catamarca",
    mapUrl: import.meta.env.VITE_LOCATION_MAP_URL || "https://maps.app.goo.gl/ihZ8WtbcuHWEfrxn8",
    mapEmbedUrl: import.meta.env.VITE_LOCATION_MAP_EMBED_URL || "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7015.8109170779735!2d-65.7698569!3d-28.4522662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94242900366bce83%3A0x8887df41d788a98b!2sLas%20Heras!5e0!3m2!1ses!2sar!4v1773243680124!5m2!1ses!2sar",
    directions: import.meta.env.VITE_LOCATION_DIRECTIONS || "Hay estacionamiento.",
    coordinates: {
      lat: parseFloat(import.meta.env.VITE_LOCATION_LAT || "-28.4692"),
      lng: parseFloat(import.meta.env.VITE_LOCATION_LNG || "-65.7795")
    }
  },

  // Agenda del evento
  // Formato JSON: [{"time":"18:00","event":"Ceremonia religiosa","icon":"church"},{"time":"19:30","event":"Cóctel de bienvenida","icon":"glass"}]
  schedule: import.meta.env.VITE_SCHEDULE
    ? JSON.parse(import.meta.env.VITE_SCHEDULE)
    : [
        { time: "21:30", event: "Ceremonia y Celebración", icon: "church" },
        { time: "23:00", event: "Cena y brindis", icon: "glass" },
        { time: "00:30", event: "Fiesta", icon: "party" }
      ],

  // Galería de fotos
  // Formato JSON: [{"url":"/foto1.jpg","alt":"Foto 1"},{"url":"/foto2.jpg","alt":"Foto 2"}]
  // O formato simple separado por comas: VITE_GALLERY_IMAGES="/foto1.jpg,/foto2.jpg,/foto3.jpg"
  gallery: (() => {
    const envGallery = import.meta.env.VITE_GALLERY_IMAGES;
    if (envGallery) {
      let gallery;
      if (envGallery.includes('[')) {
        gallery = JSON.parse(envGallery);
      } else {
        gallery = envGallery.split(',').map((url, index) => ({
          url: url.trim(),
          alt: `Foto ${index + 1}`
        }));
      }
      // Debug en desarrollo
      if (import.meta.env.DEV) {
        
      }
      return gallery;
    }
    return [
      { url: "/placeholder.svg", alt: "Foto 1" },
      { url: "/placeholder.svg", alt: "Foto 2" },
      { url: "/placeholder.svg", alt: "Foto 3" },
      { url: "/placeholder.svg", alt: "Foto 4" },
      { url: "/placeholder.svg", alt: "Foto 5" },
      { url: "/placeholder.svg", alt: "Foto 6" },
      { url: "/placeholder.svg", alt: "Foto 7" },
      { url: "/placeholder.svg", alt: "Foto 8" }
    ];
  })(),

  // Código de vestimenta (mensaje amable, por referencia)
  dressCode: {
    title: import.meta.env.VITE_DRESS_CODE_TITLE || "Código de Vestimenta",
    code: import.meta.env.VITE_DRESS_CODE_CODE || "Formal / Elegante",
    description: import.meta.env.VITE_DRESS_CODE_DESCRIPTION || "Como referencia, te sugerimos vestimenta formal y elegante. Para que el día brille armónico, agradecemos que evites los tonos blanco, rojo y fucsia. Para ellas, vestidos largos o midi; para ellos, traje y corbata.",
    colors: {
      avoid: import.meta.env.VITE_DRESS_CODE_COLORS_AVOID
        ? import.meta.env.VITE_DRESS_CODE_COLORS_AVOID.split(',').map((c: string) => c.trim())
        : ["Blanco", "Rojo", "Fucsia"],
      suggested: import.meta.env.VITE_DRESS_CODE_COLORS_SUGGESTED
        ? import.meta.env.VITE_DRESS_CODE_COLORS_SUGGESTED.split(',').map((c: string) => c.trim())
        : ["Negro", "Azul Marino", "Vino", "Verde Esmeralda"]
    }
  },

  // Regalos: mensaje cariñoso + alias, CBU, destinatario y motivo
  gifts: {
    title: import.meta.env.VITE_GIFTS_TITLE || "El Regalo",
    // Mensaje en una o varias líneas (separadas por \n en env)
    message: import.meta.env.VITE_GIFTS_MESSAGE || "Tu presencia nos alcanza y nos emociona. Amamos que nos acompañes en este momento, queremos que sepas que puedes ese día del evento llevar tu presente o te dejamos un alias por si quieres sumar a nuestra luna de miel, agradecemos tu gesto de cariño para con nosotros.",
    mercadoLibreUrl: import.meta.env.VITE_GIFTS_MERCADO_LIBRE_URL || "",
    bankTransfer: {
      enabled: true,
      alias: import.meta.env.VITE_BANK_ALIAS || "NICLAU.NX",
      cbu: import.meta.env.VITE_BANK_CBU || "4530000800012323230037",
      destinatario: import.meta.env.VITE_BANK_DESTINATARIO || "Maria Laura Valverde",
      motivo: import.meta.env.VITE_BANK_MOTIVO || "Regalo de Boda",
      accountHolderName: import.meta.env.VITE_BANK_ACCOUNT_HOLDER || "Maria Laura Valverde",
      bank: import.meta.env.VITE_BANK_NAME || "",
      accountNumber: import.meta.env.VITE_BANK_ACCOUNT || ""
    }
  },

  // Confirmación de asistencia (Lau y Nico por WhatsApp)
  rsvp: {
    enabled: import.meta.env.VITE_RSVP_ENABLED !== 'false',
    deadline: import.meta.env.VITE_RSVP_DEADLINE || "2026-04-20",
    introMessage: import.meta.env.VITE_RSVP_INTRO || "Con mucho cariño hemos decidido que seas parte de este gran día para nosotros, agradecemos tu confirmación hasta el 20 de abril 2026.",
    googleForm: {
      enabled: import.meta.env.VITE_RSVP_GOOGLE_FORM_ENABLED !== 'false',
      url: import.meta.env.VITE_RSVP_GOOGLE_FORM_URL || ""
    },
    // Dos contactos WhatsApp: Confirmar a Lau / Confirmar a Nico
    whatsappContacts: (() => {
      const lau = import.meta.env.VITE_RSVP_WHATSAPP_LAU;
      const nico = import.meta.env.VITE_RSVP_WHATSAPP_NICO;
      if (lau && nico) {
        return [
          { label: "Confirmar a Lau", number: lau.replace(/\D/g, "") },
          { label: "Confirmar a Nico", number: nico.replace(/\D/g, "") }
        ];
      }
      if (import.meta.env.VITE_RSVP_WHATSAPP_ENABLED === 'true' && import.meta.env.VITE_RSVP_WHATSAPP_NUMBER) {
        return [{ label: "Confirmar por WhatsApp", number: (import.meta.env.VITE_RSVP_WHATSAPP_NUMBER as string).replace(/\D/g, "") }];
      }
      return [];
    })(),
    whatsapp: {
      enabled: (import.meta.env.VITE_RSVP_WHATSAPP_ENABLED === 'true' && !!import.meta.env.VITE_RSVP_WHATSAPP_NUMBER) || !!(import.meta.env.VITE_RSVP_WHATSAPP_LAU && import.meta.env.VITE_RSVP_WHATSAPP_NICO),
      number: import.meta.env.VITE_RSVP_WHATSAPP_NUMBER || "543834026763",
      message: import.meta.env.VITE_RSVP_WHATSAPP_MESSAGE || `Hola! Confirmo mi asistencia a la boda de Nico y Lau.\n\nNombre Completo: \nNúmero de Contacto: \nAcompañantes: \nDieta especial: \nConfirmo Asistencia: Sí`
    },
    email: {
      enabled: import.meta.env.VITE_RSVP_EMAIL_ENABLED === 'true',
      address: import.meta.env.VITE_RSVP_EMAIL_ADDRESS || ""
    }
  },

  // Redes sociales
  socialMedia: {
    hashtag: import.meta.env.VITE_SOCIAL_HASHTAG || "#LauyNico",
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || "@lauynico"
  },

  // Save the Date
  saveTheDate: {
    enabled: true,
    message: "¡Guarda la fecha!"
  }
};
