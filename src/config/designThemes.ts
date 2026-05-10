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
 * Tokens HSL sin envolver — aplicados por JS sobre el documentElement.
 * Una sola paleta “bosque encantado · editorial · cálida” + buen contraste.
 */
/** Pergamino cálido · musgo profundo · luciérnaga ámbar · buen contraste */
export const enchantedForestCssVars: Record<string, string> = {
  '--background': '36 42% 81%',
  '--foreground': '154 36% 13%',
  '--card': '34 48% 89%',
  '--card-foreground': '154 34% 14%',
  '--popover': '36 46% 91%',
  '--popover-foreground': '154 34% 14%',
  '--primary': '154 34% 18%',
  '--primary-foreground': '42 78% 97%',
  '--secondary': '92 28% 74%',
  '--secondary-foreground': '154 30% 15%',
  '--muted': '90 24% 72%',
  '--muted-foreground': '148 22% 26%',
  '--accent': '34 72% 46%',
  '--accent-foreground': '154 40% 11%',
  '--destructive': '0 72% 50%',
  '--destructive-foreground': '43 72% 98%',
  '--border': '34 32% 62%',
  '--input': '36 36% 72%',
  '--ring': '154 30% 28%',
  '--rose': '28 44% 88%',
  '--rose-foreground': '154 28% 17%'
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
      'Verde bosque profundo, salvia suave, lino, dorado luciérnaga y tierra — invitación cálida tipo bosque ilustrado',
    preview: '/images/mama-max-panza.png',
    colors: {
      primary: '154 34% 18%',
      secondary: '92 28% 74%',
      accent: '34 72% 46%',
      background: '36 42% 81%',
      foreground: '154 36% 13%',
      muted: '90 24% 72%'
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
