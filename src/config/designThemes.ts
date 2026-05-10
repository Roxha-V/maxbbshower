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
 * Bosque (#0A3323 · #839958 · #F7F4D5 · #D3968C · #105666)
 * + acentos (#D1EFBD · #89D385 · #6CD1F0 · #A1A1F7 · #EFCCEA).
 */
export const enchantedForestCssVars: Record<string, string> = {
  /* Verde bosque más profundo y saturado */
  '--palette-dark-green': '158 76% 9%',
  '--palette-moss': '80 27% 47%',
  '--palette-beige': '55 68% 90%',
  /* Rosa / rosa polvo más presente */
  '--palette-rosy-brown': '10 56% 58%',
  '--palette-midnight': '191 73% 23%',
  '--palette-matcha': '96 61% 84%',
  '--palette-botanist': '117 47% 67%',
  '--palette-aquamarine': '194 81% 68%',
  /* Violeta tipo Grape más intenso */
  '--palette-grape': '248 88% 68%',
  '--palette-pink-diamond': '315 64% 80%',

  '--background': '55 68% 90%',
  '--foreground': '158 76% 9%',
  '--card': '55 58% 93%',
  '--card-foreground': '158 76% 9%',
  '--popover': '55 54% 94%',
  '--popover-foreground': '158 76% 9%',
  '--primary': '191 73% 23%',
  '--primary-foreground': '55 68% 97%',
  /* Cartelas suaves tipo matcha + musgo */
  '--secondary': '96 45% 88%',
  '--secondary-foreground': '158 62% 13%',
  '--muted': '96 36% 86%',
  '--muted-foreground': '158 32% 27%',
  '--accent': '10 56% 58%',
  '--accent-foreground': '158 76% 9%',
  '--destructive': '0 72% 50%',
  '--destructive-foreground': '55 68% 97%',
  '--border': '278 28% 70%',
  '--input': '285 22% 80%',
  '--ring': '255 78% 52%',
  '--rose': '315 64% 80%',
  '--rose-foreground': '158 70% 11%',
  /* Alias brillos */
  '--fairy-pink': '315 64% 80%',
  '--fairy-violet': '248 88% 68%'
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
      'Paleta bosque (#0A3323, #839958, #F7F4D5, #D3968C, #105666) + pasteles (#D1EFBD, #89D385, #6CD1F0, #A1A1F7, #EFCCEA)',
    preview: '/images/mama-max-panza.png',
    colors: {
      primary: '191 73% 23%',
      secondary: '80 27% 47%',
      accent: '10 56% 58%',
      background: '55 68% 90%',
      foreground: '158 76% 9%',
      muted: '96 61% 84%'
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
