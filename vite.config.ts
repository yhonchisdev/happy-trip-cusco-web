import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import Unfonts from 'unplugin-fonts/vite'
import type { CustomFonts } from 'unplugin-fonts/types'
import svgr from 'vite-plugin-svgr'

const customFonts: CustomFonts = {
  families: [
    {
      name: 'TripSans-VF',
      src: './src/assets/fonts/TripSans-VF.woff2',
      fallback: {
        fallbacks: ['Trip Sans', 'arial', 'sans-serif'],
      },
      transform(font) {
        if (font.basename === 'TripSans-VF') {
          font.weight = '100 900'
        }
        return font
      },
    },
    {
      name: 'Georgia',
      src: './src/assets/fonts/Georgia.woff2',
      fallback: {
        fallbacks: ['Times New Roman', 'Century Schoolbook L', 'serif'],
      },
    },
  ],
  display: 'swap',
  preload: true,
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] }),
    tailwindcss(),
    Unfonts({
      custom: customFonts,
    }),
    svgr(),
  ],
  resolve: {
    tsconfigPaths: true,
  },
})
