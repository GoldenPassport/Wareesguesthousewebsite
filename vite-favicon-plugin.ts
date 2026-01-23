import { Plugin } from 'vite';
import { favicons, FaviconOptions } from 'favicons';
import fs from 'fs/promises';
import path from 'path';

interface FaviconPluginOptions {
  /** Path to logo file OR figma asset hash (e.g., 'figma:asset/302a78d8...png') */
  logo: string;
  /** Directory to output favicons */
  outputPath?: string;
}

export function faviconPlugin(options: FaviconPluginOptions): Plugin {
  const { logo, outputPath = 'public' } = options;

  return {
    name: 'vite-favicon-generator',
    
    async buildStart() {
      console.log('🎨 Generating favicons...');
      
      try {
        let logoBuffer: Buffer;
        let logoFilename: string;

        // Handle figma:asset imports
        if (logo.startsWith('figma:asset/')) {
          const assetHash = logo.replace('figma:asset/', '');
          logoFilename = assetHash;
          
          // Check src/assets first (where Figma exports go in production)
          let assetPath = path.resolve(process.cwd(), './src/assets', assetHash);
          
          // Auto-convert .png to .jpg if needed
          if (!await fileExists(assetPath) && assetHash.endsWith('.png')) {
            const jpgHash = assetHash.replace(/\.png$/, '.jpg');
            const jpgPath = path.resolve(process.cwd(), './src/assets', jpgHash);
            if (await fileExists(jpgPath)) {
              assetPath = jpgPath;
              logoFilename = jpgHash;
              console.log(`  → Found as JPG: ${jpgHash}`);
            }
          }

          // Read the file
          if (!await fileExists(assetPath)) {
            console.warn(`⚠️  Logo not found: ${assetHash}`);
            console.warn(`   Expected: src/assets/${assetHash}`);
            console.warn(`   Skipping favicon generation - save logo from Figma Make first`);
            return;
          }

          logoBuffer = await fs.readFile(assetPath);
          console.log(`  ✓ Using logo from: src/assets/${logoFilename}`);

        } else {
          // Handle regular file path
          const logoPath = path.resolve(process.cwd(), logo);
          if (!await fileExists(logoPath)) {
            console.warn(`⚠️  Logo not found: ${logo}`);
            console.warn(`   Skipping favicon generation`);
            return;
          }
          logoBuffer = await fs.readFile(logoPath);
          logoFilename = path.basename(logo);
          console.log(`  ✓ Using logo from: ${logo}`);
        }

        // Check if buffer is base64-encoded text and decode if needed
        const firstBytes = logoBuffer.subarray(0, Math.min(10, logoBuffer.length));
        const isLikelyBase64 = firstBytes.every(byte => {
          const char = String.fromCharCode(byte);
          return /[A-Za-z0-9+/=\s]/.test(char) || byte === 10 || byte === 13;
        });

        if (isLikelyBase64 && logoBuffer.length > 20) {
          console.log('  → Decoding base64-encoded image...');
          const base64Text = logoBuffer.toString('utf8').replace(/\s/g, '');
          logoBuffer = Buffer.from(base64Text, 'base64');
        }

        // Generate favicons
        const config: Partial<FaviconOptions> = {
          path: '/',
          appName: "Waree's Guesthouse",
          appShortName: "Waree's",
          appDescription: "Your Family Home in Kata Beach, Phuket",
          background: '#ffffff',
          theme_color: '#0a3d3d',
          display: 'standalone',
          start_url: '/',
          icons: {
            android: false,
            appleIcon: { offset: 10 }, // 180x180 with 10px padding
            appleStartup: false,
            favicons: true, // favicon.ico + PNG variants
            windows: false,
            yandex: false,
          },
        };

        const response = await favicons(logoBuffer, config);
        
        // Create output directory
        const outputDir = path.resolve(process.cwd(), outputPath);
        await fs.mkdir(outputDir, { recursive: true });
        
        // Write favicon images
        for (const image of response.images) {
          await fs.writeFile(path.join(outputDir, image.name), image.contents);
          console.log(`  ✓ ${image.name}`);
        }
        
        // Write manifest and other files
        for (const file of response.files) {
          // Skip if we already have a custom site.webmanifest
          if (file.name === 'site.webmanifest') {
            const existingManifest = path.join(outputDir, 'site.webmanifest');
            if (await fileExists(existingManifest)) {
              console.log(`  ⊘ ${file.name} (using existing)`);
              continue;
            }
          }
          await fs.writeFile(path.join(outputDir, file.name), file.contents);
          console.log(`  ✓ ${file.name}`);
        }
        
        console.log('✨ Favicons generated successfully!');
        
      } catch (error: any) {
        console.error('❌ Favicon generation failed:', error.message);
        // Don't fail the build
      }
    }
  };
}

async function fileExists(filePath: string): Promise<boolean> {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}
