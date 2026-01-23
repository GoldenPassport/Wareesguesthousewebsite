import { Plugin } from 'vite';

/**
 * Vite plugin to handle figma:asset imports
 * Transforms figma:asset/[hash].png imports to regular file imports in production builds only
 * In dev mode (Figma Make), figma:asset imports work natively - this plugin does nothing
 */
export function figmaAssetsPlugin(): Plugin {
  return {
    name: 'figma-assets',
    enforce: 'pre',
    
    resolveId(id) {
      // Only transform in production builds (Vercel)
      // In dev mode (Figma Make), let figma:asset work natively
      if (process.env.NODE_ENV === 'production' && id.startsWith('figma:asset/')) {
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
  };
}