// Configuración de la invitación — Baby Shower de Max (bosque encantado)
// Las variables de entorno tienen prioridad sobre los valores por defecto.
// Mantenemos nombres de variables históricas (ceremonia, novia…) por compatibilidad con .env existentes.

const parseGamesFromEnv = () => {
  const raw = import.meta.env.VITE_GAMES_ITEMS_JSON as string | undefined;
  if (raw?.trim()) {
    try {
      return JSON.parse(raw) as {
        id: string;
        title: string;
        description: string;
        icon: string;
      }[];
    } catch {
      /* ignore */
    }
  }
  return null;
};

export const weddingConfig = {
  couple: {
    bride: import.meta.env.VITE_BRIDE_NAME || "Max",
    groom: import.meta.env.VITE_GROOM_NAME || "",
    coupleNames:
      import.meta.env.VITE_COUPLE_NAMES ||
      import.meta.env.VITE_BABY_NAME ||
      "Max"
  },

  babyShower: {
    parentsLine:
      import.meta.env.VITE_PARENTS_LINE ||
      "Esperando a Max 💚",

    momName: import.meta.env.VITE_PARENT_MOM_NAME || "Yami",
    dadName: import.meta.env.VITE_PARENT_DAD_NAME || "Juan",

    sister: {
      enabled: import.meta.env.VITE_SISTER_SECTION_ENABLED === "true",
      name: (import.meta.env.VITE_SISTER_NAME || "Mia").trim(),
      openingLine:
        import.meta.env.VITE_SISTER_OPENING_LINE?.trim() || "Hola 💚",
      kicker:
        import.meta.env.VITE_SISTER_KICKER ||
        "Una luciérnaga más en la familia 🌙",
      sectionTitle:
        import.meta.env.VITE_SISTER_SECTION_TITLE ||
        "Un mensaje de Mia ✨",
      sectionSubtitle:
        import.meta.env.VITE_SISTER_SECTION_SUBTITLE?.trim() || "",
      introTemplate:
        import.meta.env.VITE_SISTER_INTRO_TEMPLATE?.trim() ||
        "Soy {name}, la hermana mayor de Max.",
      introWithoutName:
        import.meta.env.VITE_SISTER_INTRO_WITHOUT_NAME ||
        "Soy la hermana mayor de Max.",
      paragraphs: (() => {
        const raw = import.meta.env.VITE_SISTER_PARAGRAPHS as string | undefined;
        if (raw?.trim()) {
          return raw.split(/\n|\\n/).map((p) => p.trim()).filter(Boolean);
        }
        return [
          "Estoy esperando conocerlo para jugar con él, mostrarle mis lugares favoritos y enseñarle todas las cosas lindas de este bosque mágico que armamos.",
          "Gracias por venir a esperarlo con nosotros ✨🌿"
        ];
      })(),
      /** Foto de Mia con la pancita. Usá «none» en .env para ocultar. */
      image: (() => {
        const raw = (import.meta.env.VITE_SISTER_IMAGE || "").trim().toLowerCase();
        if (raw === "none" || raw === "false") return "";
        const u = (import.meta.env.VITE_SISTER_IMAGE || "").trim();
        return u || "/images/mia-abrazo-panza.png";
      })(),
      imageCaption:
        import.meta.env.VITE_SISTER_IMAGE_CAPTION?.trim() || "Mia, esperando a su hermanito Max 💚"
    }
  },

  eventDate:
    import.meta.env.VITE_EVENT_DATE || "2026-07-26T16:00:00",

  hero: {
    title:
      import.meta.env.VITE_HERO_TITLE ||
      import.meta.env.VITE_HERO_SUBTITLE_LINE ||
      "Baby Shower · Bosque Encantado 🌿✨",

    /** Líneas mágicas bajo el nombre (reemplazan textos tipo “biblia” solo en nomenclatura de env legacy) */
    taglineLead:
      import.meta.env.VITE_HERO_TAGLINE_LEAD ||
      import.meta.env.VITE_HERO_BIBLE_REF ||
      "está en camino",

    taglineSoft:
      import.meta.env.VITE_HERO_TAGLINE_SOFT ||
      import.meta.env.VITE_HERO_BIBLE_QUOTE ||
      "y queremos compartir este momento con la gente que queremos, a celebrar su llegada con una tarde tranquila, en una merienda rica y llena de amor.",

    /** Vacío por defecto: el texto principal va en TAGLINE_SOFT */
    celebrationLine: (import.meta.env.VITE_HERO_CELEBRATION || import.meta.env.VITE_HERO_OUR_YES || "")
      .trim()
  },

  familyMessage: {
    enabled: import.meta.env.VITE_FAMILY_MESSAGE_ENABLED !== "false",
    sectionTitle:
      import.meta.env.VITE_FAMILY_MESSAGE_SECTION_TITLE ||
      "Con el corazón en el bosque 💚",

    boldParagraphIndices: (() => {
      const raw = import.meta.env.VITE_FAMILY_MESSAGE_BOLD_INDICES;
      if (raw)
        return raw
          .split(",")
          .map((i: string) => parseInt(i.trim(), 10))
          .filter((n: number) => !isNaN(n));
      return [];
    })(),

    accountInfoNote:
      import.meta.env.VITE_FAMILY_MESSAGE_ACCOUNT_NOTE ||
      "Regalos y datos prácticos: seguí un poco más abajo 👇",

    paragraphs: (() => {
      const raw = import.meta.env.VITE_FAMILY_MESSAGE;
      if (raw)
        return raw.split(/\n|\\n/).map((p: string) => p.trim()).filter(Boolean);
      return [
        "Los invitamos a pasar una tarde especial para celebrar la llegada de Max.",
        "Va a haber merienda, juegos, música, cosas ricas y muchos mensajitos para él 💫",
        "La idea es compartir un rato lindo entre familia, amigos y toda la gente que viene acompañando esta nueva aventura.",
        "Algunas cositas importantes 🌿\n\n✨ Confirmar asistencia\n✨ Sumar canciones para la playlist\n✨ Más abajo dejamos ideas de regalos y datos útiles"
      ];
    })()
  },

  heroImages: (() => {
    const envImages = import.meta.env.VITE_HERO_IMAGES;
    if (envImages) {
      const images = envImages.split(",").map((img) => img.trim()).filter(Boolean);
      if (images.length) return images;
    }
    return [
      "/images/ecografia-max.png",
      "/images/familia-entera-manos-pintura.png",
      "/images/mama-max-panza.png"
    ];
  })(),

  music: {
    enabled: import.meta.env.VITE_MUSIC_ENABLED !== "false",
    audioUrl: import.meta.env.VITE_MUSIC_AUDIO_URL || "",
    /** Reproductor embebido desactivado por defecto; la invitación enlaza a la playlist */
    spotifyUseEmbed: import.meta.env.VITE_MUSIC_SPOTIFY_USE_EMBED === "true",
    spotifyEmbed:
      import.meta.env.VITE_MUSIC_SPOTIFY_EMBED &&
      import.meta.env.VITE_MUSIC_SPOTIFY_EMBED.trim() !== ""
        ? import.meta.env.VITE_MUSIC_SPOTIFY_EMBED
        : "",
    collaborativePlaylistUrl:
      import.meta.env.VITE_MUSIC_COLLABORATIVE_PLAYLIST_URL &&
      import.meta.env.VITE_MUSIC_COLLABORATIVE_PLAYLIST_URL.trim() !== ""
        ? import.meta.env.VITE_MUSIC_COLLABORATIVE_PLAYLIST_URL.trim()
        : "",
    playlistTitle:
      import.meta.env.VITE_MUSIC_PLAYLIST_TITLE?.trim() || "Playlist colaborativa",
    playlistDescription:
      import.meta.env.VITE_MUSIC_PLAYLIST_DESCRIPTION?.trim() ||
      "Sumá una canción suave entrando a la lista en Spotify (desde el navegador o la app)."
  },

  /** Sonido ambiente opcional (pájaros, viento…) — muy bajo volumen */
  ambience: {
    enabled: !!(import.meta.env.VITE_FOREST_AMBIENCE_AUDIO_URL || "").trim(),
    url: (import.meta.env.VITE_FOREST_AMBIENCE_AUDIO_URL || "").trim(),
    volume: Math.min(
      0.35,
      Math.max(0.05, parseFloat(import.meta.env.VITE_FOREST_AMBIENCE_VOLUME || "0.14") || 0.14)
    )
  },

  ourStory: {
    title: import.meta.env.VITE_OUR_STORY_TITLE || "Antes del primer hola",
    content:
      import.meta.env.VITE_OUR_STORY_CONTENT ||
      `Cada día cuenta una página nueva de esta espera: risas en la cocina, cunita armándose despacio y un montón de amor esperando para decir «hola».\nYa casi llega Max, y entre canciones bajitas y mates compartimos el cuento antes del primer encuentro.`,
    image: import.meta.env.VITE_OUR_STORY_IMAGE || "/images/familia-revelacion-azul.png"
  },

  event: {
    ceremony: {
      title:
        import.meta.env.VITE_EVENT_TITLE ||
        import.meta.env.VITE_CEREMONY_TITLE ||
        "Baby shower · Bosque encantado",
      date:
        import.meta.env.VITE_EVENT_DATE_LABEL ||
        import.meta.env.VITE_CEREMONY_DATE ||
        "26 de julio · 2026",
      time:
        import.meta.env.VITE_EVENT_TIME ||
        import.meta.env.VITE_CEREMONY_TIME ||
        "16:00 hs",
      venue:
        import.meta.env.VITE_EVENT_VENUE ||
        import.meta.env.VITE_CEREMONY_VENUE ||
        "Bosque Encantado - Villa Mágica",
      address:
        import.meta.env.VITE_EVENT_ADDRESS ||
        import.meta.env.VITE_CEREMONY_ADDRESS ||
        "Dirección detallada — editar"
    },
    reception: {
      title: import.meta.env.VITE_RECEPTION_TITLE || "Encuentro",
      date:
        import.meta.env.VITE_RECEPTION_DATE ||
        import.meta.env.VITE_EVENT_DATE_LABEL ||
        "26 de julio · 2026",
      time:
        import.meta.env.VITE_RECEPTION_TIME ||
        import.meta.env.VITE_EVENT_TIME ||
        "16:00 hs",
      venue:
        import.meta.env.VITE_RECEPTION_VENUE ||
        import.meta.env.VITE_EVENT_VENUE ||
        "Mismo lugar",
      address:
        import.meta.env.VITE_RECEPTION_ADDRESS ||
        import.meta.env.VITE_EVENT_ADDRESS ||
        ""
    }
  },

  location: {
    venue:
      import.meta.env.VITE_LOCATION_VENUE?.trim() ||
      "Bosque Encantado - Villa Mágica",
    address:
      import.meta.env.VITE_LOCATION_ADDRESS?.trim() ||
      import.meta.env.VITE_EVENT_ADDRESS ||
      "Ubicación de ejemplo — editar en .env (VITE_LOCATION_ADDRESS)",
    mapUrl: import.meta.env.VITE_LOCATION_MAP_URL || "",
    mapEmbedUrl: import.meta.env.VITE_LOCATION_MAP_EMBED_URL || "",
    directions:
      import.meta.env.VITE_LOCATION_DIRECTIONS ||
      "Indicaciones y estacionamiento (editá este texto cuando tengáis el lugar cerrado).",
    coordinates: {
      lat: parseFloat(import.meta.env.VITE_LOCATION_LAT || "-31.4"),
      lng: parseFloat(import.meta.env.VITE_LOCATION_LNG || "-64.2")
    }
  },

  schedule: import.meta.env.VITE_SCHEDULE
    ? JSON.parse(import.meta.env.VITE_SCHEDULE)
    : [
        { time: "16:00", event: "Bienvenida", icon: "glass" },
        { time: "16:45", event: "Merienda, juegos y regalitos", icon: "dinner" },
        { time: "19:00", event: "Cierre con souvenir", icon: "star" }
      ],

  games: {
    enabled: import.meta.env.VITE_GAMES_SECTION_ENABLED === "true",
    title: import.meta.env.VITE_GAMES_SECTION_TITLE || "Juegos y mimos para el día",
    subtitle:
      import.meta.env.VITE_GAMES_SECTION_SUBTITLE ||
      "Ideas suaves para la tarde: nada estresante, sólo diversión con olor a bosque (el orden final lo vemos ese día 💚).",

    items: parseGamesFromEnv() || [
      {
        id: "birthdate",
        title: "Adivinar fecha de nacimiento",
        description:
          "Cada persona deja una pincelada mágica: día, mes y hasta la hora de la llegada del bebé.",
        icon: "calendar"
      },
      {
        id: "belly",
        title: "Medir la panza con galón dorado",
        description:
          "Cinta suave, risas contenidas y un recuerdo fotográfico con luz dorada champán.",
        icon: "ruler"
      },
      {
        id: "bingo",
        title: "Bingo del baby shower",
        description:
          "Cartelas con dibujitos de bosque: honguito, luciérnaga, mariposa… simple y muy simpático.",
        icon: "bingo"
      },
      {
        id: "advice",
        title: "Consejos para futuros papás",
        description:
          "Notitas anónimas o firmadas sobre primeras noches, cafés pendientes y paciencia mágica.",
        icon: "advice"
      },
      {
        id: "messages",
        title: "Mensajes para Max",
        description:
          "Un álbum con sobres donde cada invitadx escribe un deseo cortito para cuando sea grande.",
        icon: "mail"
      },
      {
        id: "tastes",
        title: "Adivinar sabores",
        description:
          "Frasquitos cubiertos para oler papillas dulces o frutillas del bosque (sin spoilers difíciles).",
        icon: "taste"
      }
    ]
  },

  gallery: (() => {
    const envGallery = import.meta.env.VITE_GALLERY_IMAGES;
    if (envGallery) {
      let gallery:
        | { url: string; alt: string }[]
        | { url: string; alt: string }[];
      if (envGallery.includes("[")) {
        gallery = JSON.parse(envGallery);
      } else {
        gallery = envGallery.split(",").map((url, index) => ({
          url: url.trim(),
          alt: `Recuerdo ${index + 1}`
        }));
      }
      return gallery;
    }
    return [
      { url: "/images/mama-max-panza.png", alt: "Yami — Max escrito en el corazón de la panza 💙" },
      { url: "/images/familia-revelacion-azul.png", alt: "Juan, Yami y Mia — revelación en celeste para Max" },
      { url: "/images/familia-torta-chocolate.png", alt: "La familia y la torta antes del encuentro grande" },
      { url: "/images/mia-abrazo-panza.png", alt: "Mia abrazando la panza donde está Max" },
      { url: "/images/familia-entera-manos-pintura.png", alt: "Manos pintadas sobre la pancita — risas y anticipación" },
      { url: "/images/familia-entera-bn.png", alt: "Retrato en blanco y negro — Yami, Juan y Mia" },
      { url: "/images/panza-suave.png", alt: "Esperando con ternura a Max" },
      { url: "/images/ecografia-max.png", alt: "Ecografía — el latido de Max (FCF 145 bpm)" }
    ];
  })(),

  dressCode: {
    title: import.meta.env.VITE_DRESS_CODE_TITLE || "Vestimenta sugerida",
    code: import.meta.env.VITE_DRESS_CODE_CODE || "Fairy woodland · elegance suave",
    description:
      import.meta.env.VITE_DRESS_CODE_DESCRIPTION ||
      "Salvia y verde bosque suave, lavanda u off-white, rosa polvo o celeste muy apagado; encajes, tul y detalles de cuento ilustrado. Brillo solo muy sutil tipo polvo mágico. Evitamos looks caricaturescos o colores muy fuertes.",
    colors: {
      avoid: import.meta.env.VITE_DRESS_CODE_COLORS_AVOID
        ? import.meta.env.VITE_DRESS_CODE_COLORS_AVOID.split(",").map((c: string) => c.trim())
        : ["Neón", "Rojo amanita puro en exceso", "Contrastes muy duros"],
      suggested: import.meta.env.VITE_DRESS_CODE_COLORS_SUGGESTED
        ? import.meta.env.VITE_DRESS_CODE_COLORS_SUGGESTED.split(",").map((c: string) => c.trim())
        : [
            "Salvia · musgo",
            "Lila suave",
            "Crema pergamino",
            "Champagne",
            "Rosa polvo",
            "Dorado apagado"
          ]
    }
  },

  gifts: {
    title: import.meta.env.VITE_GIFTS_TITLE || "Regalos y detalles",
    message:
      import.meta.env.VITE_GIFTS_MESSAGE ||
      "Tu abrazo ya llena el bosque de alegría; cualquier demostración de amor es bienvenida y la agradecemos de corazón 💚",
    mercadoLibreUrl: import.meta.env.VITE_GIFTS_MERCADO_LIBRE_URL || "",
    registryUrl:
      (import.meta.env.VITE_GIFTS_REGISTRY_URL || import.meta.env.VITE_GIFT_LIST_URL || "").trim(),
    bankTransfer: {
      enabled: import.meta.env.VITE_BANK_TRANSFER_ENABLED !== "false",
      alias:
        import.meta.env.VITE_BANK_ALIAS ||
        import.meta.env.VITE_GIFT_ALIAS ||
        "max.babyshower.alias",
      cbu:
        import.meta.env.VITE_BANK_CBU ||
        import.meta.env.VITE_GIFT_CBU ||
        "",
      destinatario:
        import.meta.env.VITE_BANK_DESTINATARIO ||
        import.meta.env.VITE_GIFT_ACCOUNT_HOLDER ||
        "Titular — editar",
      motivo:
        import.meta.env.VITE_BANK_MOTIVO ||
        import.meta.env.VITE_GIFT_MOTIVO ||
        "Baby shower Max",
      accountHolderName:
        import.meta.env.VITE_BANK_ACCOUNT_HOLDER ||
        import.meta.env.VITE_GIFT_ACCOUNT_HOLDER ||
        "Titular — editar",
      bank: import.meta.env.VITE_BANK_NAME || "",
      accountNumber: import.meta.env.VITE_BANK_ACCOUNT || ""
    }
  },

  rsvp: {
    enabled: import.meta.env.VITE_RSVP_ENABLED !== "false",
    deadline: import.meta.env.VITE_RSVP_DEADLINE || "2026-07-01",
    introMessage:
      import.meta.env.VITE_RSVP_INTRO ||
      "Hay dos pasos: primero un WhatsApp cortito y después el formulario (ese paso sí o sí). ¡Mil gracias por ayudarnos a ordenar todo! 💚",

    /** Paso 1 — solo nombre + cantidad para WhatsApp */
    whatsappStepTitle:
      import.meta.env.VITE_RSVP_WHATSAPP_STEP_TITLE || "1 · Confirmación rápida por WhatsApp",
    whatsappStepHint:
      import.meta.env.VITE_RSVP_WHATSAPP_STEP_HINT ||
      "Escribí tu nombre completo y cuántas personas van en total (vos incluída/o). Elegí el WhatsApp de Yami o el de Juan y enviá el mensaje.",

    /** Paso 2 — Google Forms obligatorio */
    googleMandatoryTitle:
      import.meta.env.VITE_RSVP_GOOGLE_STEP_TITLE ||
      "2 · Formulario obligatorio (¡no te lo pierdas!)",
    googleMandatoryNotice:
      import.meta.env.VITE_RSVP_FORM_MANDATORY_NOTICE ||
      "IMPORTANTE: aunque ya nos hayas mandado WhatsApp, igual necesitamos que llenes el siguiente formulario. ¡Un clic y listo!",
    googleFormButtonLabel:
      import.meta.env.VITE_RSVP_GOOGLE_BUTTON_LABEL || "Abrir formulario de confirmación",

    inlineForm: {
      enabled: import.meta.env.VITE_RSVP_INLINE_FORM_ENABLED !== "false",
      title:
        import.meta.env.VITE_RSVP_FORM_TITLE || "Datos para el WhatsApp",
      hint:
        import.meta.env.VITE_RSVP_FORM_HINT ||
        "Sólo estos dos datos viajan por WhatsApp. El resto va en el formulario."
    },

    googleForm: {
      enabled: import.meta.env.VITE_RSVP_GOOGLE_FORM_ENABLED !== "false",
      url: import.meta.env.VITE_RSVP_GOOGLE_FORM_URL || ""
    },

    qrImageUrl: (import.meta.env.VITE_RSVP_QR_IMAGE || "").trim(),
    qrCaption:
      import.meta.env.VITE_RSVP_QR_CAPTION ||
      "Escaneá para abrir el formulario u otra información",

    whatsappContacts: (() => {
      const digits = (s: string) => s.replace(/\D/g, "");
      const momName = import.meta.env.VITE_PARENT_MOM_NAME || "Yami";
      const dadName = import.meta.env.VITE_PARENT_DAD_NAME || "Juan";

      const yami = (import.meta.env.VITE_RSVP_WHATSAPP_YAMI || "").trim();
      const juanWa = (import.meta.env.VITE_RSVP_WHATSAPP_JUAN || "").trim();

      const pair: { label: string; number: string }[] = [];
      if (yami) pair.push({ label: `Confirmar por WhatsApp — ${momName}`, number: digits(yami) });
      if (juanWa)
        pair.push({ label: `Confirmar por WhatsApp — ${dadName}`, number: digits(juanWa) });

      if (pair.length > 0) return pair;

      const lau = import.meta.env.VITE_RSVP_WHATSAPP_LAU;
      const nico = import.meta.env.VITE_RSVP_WHATSAPP_NICO;
      if (lau && nico) {
        return [
          { label: "WhatsApp (contacto 1)", number: digits(lau as string) },
          { label: "WhatsApp (contacto 2)", number: digits(nico as string) }
        ];
      }
      if (
        import.meta.env.VITE_RSVP_WHATSAPP_ENABLED === "true" &&
        import.meta.env.VITE_RSVP_WHATSAPP_NUMBER
      ) {
        return [
          {
            label: "Confirmar por WhatsApp",
            number: digits(import.meta.env.VITE_RSVP_WHATSAPP_NUMBER as string)
          }
        ];
      }
      return [];
    })(),

    whatsapp: {
      enabled:
        !!(import.meta.env.VITE_RSVP_WHATSAPP_YAMI || "").trim() ||
        !!(import.meta.env.VITE_RSVP_WHATSAPP_JUAN || "").trim() ||
        (import.meta.env.VITE_RSVP_WHATSAPP_ENABLED === "true" &&
          !!import.meta.env.VITE_RSVP_WHATSAPP_NUMBER) ||
        !!(import.meta.env.VITE_RSVP_WHATSAPP_LAU && import.meta.env.VITE_RSVP_WHATSAPP_NICO),
      number: import.meta.env.VITE_RSVP_WHATSAPP_NUMBER || "",
      message: import.meta.env.VITE_RSVP_WHATSAPP_MESSAGE || ""
    },

    email: {
      enabled: import.meta.env.VITE_RSVP_EMAIL_ENABLED === "true",
      address: import.meta.env.VITE_RSVP_EMAIL_ADDRESS || ""
    }
  },

  socialMedia: {
    hashtag: import.meta.env.VITE_SOCIAL_HASHTAG || "#BabyShowerMax",
    instagram: import.meta.env.VITE_SOCIAL_INSTAGRAM || "@babyshower_max_bosque"
  },

  saveTheDate: {
    enabled: true,
    message: "Guardá la fecha para Max"
  },

  sectionCopy: {
    countdownTitle: (import.meta.env.VITE_COUNTDOWN_TITLE ?? "").trim(),

    countdownSubtitle:
      import.meta.env.VITE_COUNTDOWN_SUBTITLE ||
      "Falta poquito para conocerlo ✨",

    eventIntro:
      import.meta.env.VITE_EVENT_INTRO ||
      "Un solo encuentro cálido y mágico para darle la bienvenida a Max",

    scheduleTitle:
      import.meta.env.VITE_SCHEDULE_SECTION_TITLE || "Agenda del encuentro",

    scheduleSubtitle:
      import.meta.env.VITE_SCHEDULE_SECTION_SUBTITLE ||
      "Un ritmo tranquilo pensado para disfrutar sin apuros",

    galleryTitle:
      import.meta.env.VITE_GALLERY_SECTION_TITLE || "Brillitos del bosque",

    gallerySubtitle:
      import.meta.env.VITE_GALLERY_SECTION_SUBTITLE ||
      "Placeholders naturales hasta que sumemos las fotos reales 💚✨",

    /** Usá «{bebé}» donde quieras el nombre destacado; si no hay placeholder, el texto se muestra tal cual */
    footerClosing:
      import.meta.env.VITE_FOOTER_CLOSING ||
      "Entre ramitas, luces cálidas, glitter suave, meriendas y polvo de hadas— queremos celebrar la llegada de Max como más nos gusta: acompañados de la gente que queremos 💚",

    /** Imagen de fondo del pie (ej. panza suave) */
    footerBackgroundImage:
      (import.meta.env.VITE_FOOTER_BACKGROUND_IMAGE || "/images/panza-suave.png").trim()
  }
};
