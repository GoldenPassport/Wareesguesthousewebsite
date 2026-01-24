#!/usr/bin/env node

/**
 * Auto-generate favicons from favicon.svg
 * Runs during build process to create all required favicon formats for Google & browsers
 * 
 * Generates:
 * - favicon.ico (multi-size ICO file with 16x16, 32x32, 48x48)
 * - favicon-16x16.png
 * - favicon-32x32.png
 * - apple-touch-icon.png (180x180)
 */

import { favicons } from 'favicons';
import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateFavicons() {
  console.log('\n🎨 Generating favicons from favicon.svg...\n');
  
  try {
    const svgPath = path.resolve(__dirname, '../public/favicon.svg');
    const outputDir = path.resolve(__dirname, '../public');
    
    // Check if source SVG exists
    try {
      await fs.access(svgPath);
    } catch {
      console.error('❌ Source file not found: /public/favicon.svg');
      console.error('   Skipping favicon generation - this is not critical\n');
      return; // Exit gracefully, don't fail the build
    }
    
    // Read the SVG file
    const svgBuffer = await fs.readFile(svgPath);
    console.log('  ✓ Read favicon.svg');
    
    // Configure favicon generation
    const config = {
      path: '/',
      appName: "Waree's Guesthouse",
      appShortName: "Waree's",
      appDescription: "Your Family Home in Kata Beach, Phuket",
      background: '#ffffff',
      theme_color: '#0a3d3d',
      display: 'standalone',
      start_url: '/',
      icons: {
        android: false,        // Skip Android icons
        appleIcon: true,       // Generate apple-touch-icon.png (180x180)
        appleStartup: false,   // Skip Apple startup images
        favicons: true,        // Generate favicon.ico + PNG variants
        windows: false,        // Skip Windows tiles
        yandex: false,         // Skip Yandex icons
      },
    };
    
    // Generate favicons
    console.log('  → Processing...');
    const response = await favicons(svgBuffer, config);
    
    // Write favicon images
    let count = 0;
    for (const image of response.images) {
      const outputPath = path.join(outputDir, image.name);
      await fs.writeFile(outputPath, image.contents);
      console.log(`  ✓ Generated: ${image.name}`);
      count++;
    }
    
    // Update site.webmanifest only if it doesn't exist
    for (const file of response.files) {
      if (file.name === 'site.webmanifest') {
        const manifestPath = path.join(outputDir, 'site.webmanifest');
        try {
          await fs.access(manifestPath);
          console.log(`  ⊘ Skipped: ${file.name} (existing file preserved)`);
        } catch {
          await fs.writeFile(manifestPath, file.contents);
          console.log(`  ✓ Generated: ${file.name}`);
          count++;
        }
      }
    }
    
    console.log(`\n✨ Successfully generated ${count} favicon files!\n`);
    
  } catch (error) {
    console.error('\n❌ Favicon generation failed:', error.message);
    console.error('   This is not critical - build will continue\n');
    // Don't exit with error - let build continue
  }
}

generateFavicons();