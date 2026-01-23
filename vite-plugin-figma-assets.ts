import { Plugin } from 'vite';

/**
 * Vite plugin to handle figma:asset imports
 * Transforms figma:asset/[hash].png imports to regular file imports in production
 */
export function figmaAssetsPlugin(): Plugin {
  return {
    name: 'figma-assets',
    enforce: 'pre',
    
    resolveId(id) {
      if (id.startsWith('figma:asset/')) {
        // Extract the filename from figma:asset/filename.png
        const filename = id.replace('figma:asset/', '');
        // Resolve to the actual file in /src/app/assets/
        return {
          id: `/src/app/assets/${filename}`,
          external: false
        };
      }
      return null;
    },
    
    load(id) {
      // Let Vite handle the actual file loading
      return null;
    }
  };
}
