// Temas de diseño disponibles para la invitación

export type DesignTheme = 'romantic' | 'modern' | 'rustic';

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
  }
};
