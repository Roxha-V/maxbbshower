// Temas de diseño disponibles para la invitación

export type DesignTheme = 'romantic' | 'modern' | 'rustic' | 'enchantedForest';

export interface ThemeConfig {
  id: DesignTheme;
  name: string;
  description: string;
  preview: string;
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
  };
  fonts: {
    display: string;
    body: string;
    accent: string;
  };
  style: {
    borderRadius: string;
    shadowStyle: string;
  };
}

/**
 * Tokens HSL — InvitationRomantic los inyecta en :root.
 * Rosa + violeta legibles sobre crema (#EFCCEA / #A1A1F7 inspiración) + bosque (#0A3323 · #105666 · #839958 · #F7F4D5).
 */
export const enchantedForestCssVars: Record<string, string> = {
  '--background': '55 68% 90%',
  '--foreground': '157 67% 12%',
  '--card': '52 62% 93%',
  '--card-foreground': '157 67% 12%',
  '--popover': '52 58% 94%',
  '--popover-foreground': '157 67% 12%',
  '--primary': '191 73% 23%',
  '--primary-foreground': '55 68% 96%',
  '--secondary': '80 28% 85%',
  '--secondary-foreground': '157 50% 16%',
  '--muted': '288 14% 86%',
  '--muted-foreground': '285 22% 32%',
  /* Rosa más claro tipo “Pink Diamond”; se nota en títulos, divisores y brillos */
  '--accent': '340 54% 72%',
  '--accent-foreground': '324 42% 18%',
  '--destructive': '0 72% 50%',
  '--destructive-foreground': '55 68% 97%',
  /* Borde leve violeta-gris para que entre el violeta sin chillar */
  '--border': '285 22% 76%',
  '--input': '288 18% 82%',
  /* Anillo violeta Grape Soda suavizado */
  '--ring': '252 62% 58%',
  '--rose': '320 62% 92%',
  '--rose-foreground': '295 38% 22%',
  /* Capas mágicas (CSS sólo — ver index.css) */
  '--fairy-pink': '335 72% 91%',
  '--fairy-violet': '252 76% 84%'
};

export const designThemes: Record<DesignTheme, ThemeConfig> = {
  romantic: {
    id: 'romantic',
    name: 'Romántico Elegante',
    description: 'Diseño clásico con tonos dorados, blush y tipografía serif elegante',
    preview: '/placeholder.svg',
    colors: {
      primary: '38 72% 48%', // Dorado visible sobre blanco
      secondary: '350 75% 90%', // Blush Rose
      accent: '43 82% 52%', // Dorado intenso
      background: '40 40% 97%',
      foreground: '0 0% 25%',
      muted: '40 30% 94%'
    },
    fonts: {
      display: 'Playfair Display',
      body: 'Lora',
      accent: 'Cinzel'
    },
    style: {
      borderRadius: '1rem',
      shadowStyle: 'elegant'
    }
  },
  modern: {
    id: 'modern',
    name: 'Minimalista Moderno',
    description: 'Diseño limpio y contemporáneo con tipografía sans-serif y espacios amplios',
    preview: '/placeholder.svg',
    colors: {
      primary: '0 0% 9%', // Black
      secondary: '0 0% 96%', // Light Gray
      accent: '0 0% 45%', // Medium Gray
      background: '0 0% 100%',
      foreground: '0 0% 9%',
      muted: '0 0% 90%'
    },
    fonts: {
      display: 'Inter',
      body: 'Inter',
      accent: 'Inter'
    },
    style: {
      borderRadius: '0.25rem',
      shadowStyle: 'minimal'
    }
  },
  rustic: {
    id: 'rustic',
    name: 'Rústico Bohemio',
    description: 'Estilo natural y acogedor con tonos tierra y elementos orgánicos',
    preview: '/placeholder.svg',
    colors: {
      primary: '30 45% 55%', // Terracota
      secondary: '40 35% 85%', // Beige Claro
      accent: '140 40% 45%', // Verde Salvia
      background: '40 25% 95%',
      foreground: '30 20% 25%',
      muted: '40 20% 80%'
    },
    fonts: {
      display: 'Merriweather',
      body: 'Open Sans',
      accent: 'Bebas Neue'
    },
    style: {
      borderRadius: '0.5rem',
      shadowStyle: 'soft'
    }
  },
  enchantedForest: {
    id: 'enchantedForest',
    name: 'Bosque mágico cálido',
    description:
      'Crema bosque · medianoche teal · rosa claro (#EFCCEA vibes) · lavanda (#A1A1F7 vibes) · musgo',
    preview: '/images/mama-max-panza.png',
    colors: {
      primary: '191 73% 23%',
      secondary: '80 27% 47%',
      accent: '340 54% 72%',
      background: '55 68% 90%',
      foreground: '157 67% 12%',
      muted: '288 14% 86%'
    },
    fonts: {
      display: 'Cormorant Garamond',
      body: 'Quicksand',
      accent: 'Cormorant Garamond italic'
    },
    style: {
      borderRadius: '1.25rem',
      shadowStyle: 'enchanted'
    }
  }
};
