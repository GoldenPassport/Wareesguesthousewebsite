import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// Plugin to transform figma:asset imports for production builds only
function figmaAssetsPlugin() {
  return {
    name: 'figma-assets-transform',
    enforce: 'pre' as const,
    resolveId(id: string) {
      // Only transform in production builds, not in Figma Make dev mode
      if (process.env.NODE_ENV === 'production' && id.startsWith('figma:asset/')) {
        const filename = id.replace('figma:asset/', '')
        return path.resolve(__dirname, './src/app/assets', filename)
      }
      return null
    },
  }
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetsPlugin(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },
})