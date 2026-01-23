import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import fs from 'fs'

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
        const assetPath = path.resolve(__dirname, './src/app/assets', filename)
        
        // Check if file exists
        if (!fs.existsSync(assetPath)) {
          this.error(
            `Missing asset file: ${filename}\n\n` +
            `Expected location: /src/app/assets/${filename}\n\n` +
            `To fix this:\n` +
            `1. In Figma Make, right-click the image and select "Save Image As..."\n` +
            `2. Save it to /src/app/assets/ with the exact filename: ${filename}\n` +
            `3. Repeat for all missing images listed in /EXPORT-IMAGES.md\n\n` +
            `See /EXPORT-IMAGES.md for the complete list of required images.`
          )
        }
        
        // Read the file and emit it as an asset
        const fileBuffer = fs.readFileSync(assetPath)
        const referenceId = this.emitFile({
          type: 'asset',
          name: filename,
          source: fileBuffer
        })
        
        // Return code that exports the asset URL
        return `export default import.meta.ROLLUP_FILE_URL_${referenceId};`
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