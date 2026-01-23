import { Plugin } from 'vite';
import { favicons, FaviconOptions } from 'favicons';
import fs from 'fs/promises';
import path from 'path';

interface FaviconPluginOptions {
  logo: string; // Path to source logo file
  outputPath?: string; // Where to output the favicon files (default: public)
  inject?: boolean; // Whether to inject HTML tags (default: false, we handle in seo-head.tsx)
}

export function faviconPlugin(options: FaviconPluginOptions): Plugin {
  const {
    logo,
    outputPath = 'public',
    inject = false
  } = options;

  return {
    name: 'vite-favicon-generator',
    
    async buildStart() {
      console.log('🎨 Generating favicons from logo...');
      
      try {
        // Read the source logo
        const logoPath = path.resolve(process.cwd(), logo);
        const source = await fs.readFile(logoPath);
        
        // Configure favicon generation
        const configuration: Partial<FaviconOptions> = {
          path: '/', // Root path where favicons will be served
          appName: "Waree's Guesthouse",
          appShortName: "Waree's",
          appDescription: "Your Family Home in Kata Beach, Phuket",
          background: '#ffffff',
          theme_color: '#0a3d3d',
          display: 'standalone',
          orientation: 'portrait',
          start_url: '/',
          icons: {
            android: false, // We'll handle android icons separately if needed
            appleIcon: true, // Generate apple-touch-icon.png
            appleStartup: false,
            favicons: true, // Generate favicon.ico and PNG versions
            windows: false,
            yandex: false,
          },
        };

        // Generate favicons
        const response = await favicons(source, configuration);
        
        // Create output directory if it doesn't exist
        const outputDir = path.resolve(process.cwd(), outputPath);
        await fs.mkdir(outputDir, { recursive: true });
        
        // Write all images
        for (const image of response.images) {
          const filePath = path.join(outputDir, image.name);
          await fs.writeFile(filePath, image.contents);
          console.log(`  ✓ Generated ${image.name}`);
        }
        
        // Write all files (like browserconfig.xml, manifest.json, etc.)
        for (const file of response.files) {
          const filePath = path.join(outputDir, file.name);
          await fs.writeFile(filePath, file.contents);
          console.log(`  ✓ Generated ${file.name}`);
        }
        
        console.log('✨ Favicon generation complete!');
        console.log(`   Generated files in: ${outputPath}/`);
        console.log('   Files:');
        console.log('   - favicon.ico');
        console.log('   - favicon-16x16.png');
        console.log('   - favicon-32x32.png');
        console.log('   - apple-touch-icon.png (180x180)');
        
      } catch (error) {
        console.error('❌ Favicon generation failed:', error);
        console.error('   Make sure the logo file exists at:', logo);
        // Don't fail the build, just warn
      }
    }
  };
}
