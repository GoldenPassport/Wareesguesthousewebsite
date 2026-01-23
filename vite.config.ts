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
        // Return a virtual module ID that we'll handle in load()
        return '\0figma-asset:' + filename
      }
      return null
    },
    load(id: string) {
      // Handle the virtual module we created in resolveId
      if (id.startsWith('\0figma-asset:')) {
        const filename = id.replace('\0figma-asset:', '')
        // Use a relative import path that Vite can resolve and bundle
        const importPath = './src/app/assets/' + filename
        // Return an import statement with ?url to get the asset URL
        return `import asset from ${JSON.stringify(importPath + '?url')}; export default asset;`
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