/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        vibrant: {
          red: '#FF202B',       // Accent Red
          coral: '#F1DD6A',     // Soft Warm Gold
          pink: '#F1DD6A',      // Mapping from image
          rose: '#F1DD6A',      // Soft coral-rose from palette
          salmon: '#FFB08E',    // Soft Salmon
          creamLight: '#FFF8B9',// Soft Primrose Cream
          orange: '#FFA242',    // Warm Amber Orange
          yellow: '#FFDD63',    // Goldenrod Yellow
          sky: '#A0E8E8',       // Crisp Aqua Cyan
          mint: '#87FEBC',      // Fresh Mint Green
          cream: '#FCFBF7',     // Background Warm Light Canvas
          surface: '#FFFFFF',   // Card Surface
          subtle: '#F6F5EE',    // Subtle card background
          dark: '#181A20',      // Deep Modern Charcoal Slate
          muted: '#5E6272',     // Professional Muted Body Slate
          border: '#E8E6DC',    // Clean fine border
          borderHover: '#D5D2C4'
        },
        // Direct palette mapping from the user's uploaded image
        palette: {
          red: '#FF202B',
          rose: '#F1DD6A',      // note: in palette row 1 col 2 is #F1DD6A
          salmon: '#FFB08E',
          lemon: '#FFF8B9',
          orange: '#FFA242',
          yellow: '#FFDD63',
          aqua: '#A0E8E8',
          mint: '#87FEBC',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        'clean': '0 1px 3px 0 rgba(0, 0, 0, 0.05), 0 1px 2px -1px rgba(0, 0, 0, 0.03)',
        'card': '0 4px 20px -2px rgba(24, 26, 32, 0.06), 0 2px 6px -2px rgba(24, 26, 32, 0.04)',
        'card-hover': '0 12px 32px -4px rgba(24, 26, 32, 0.12), 0 4px 12px -2px rgba(24, 26, 32, 0.06)',
        'glow-red': '0 0 24px -4px rgba(255, 32, 43, 0.25)',
        'glow-sky': '0 0 24px -4px rgba(160, 232, 232, 0.45)',
        'glow-mint': '0 0 24px -4px rgba(135, 254, 188, 0.4)',
      }
    },
  },
  plugins: [],
}
