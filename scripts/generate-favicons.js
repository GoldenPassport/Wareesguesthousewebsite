#!/usr/bin/env node

/**
 * Auto-generate favicons for Google Search and browsers
 * 
 * Priority order:
 * 1. Use actual logo from /src/assets/302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.{png,jpg}
 * 2. Fall back to /public/favicon.svg if logo not found
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

async function fileExists(filePath) {
  try {
    await fs.access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function generateFavicons() {
  console.log('\n' + '='.repeat(80));
  console.log('🎨 FAVICON GENERATION');
  console.log('='.repeat(80) + '\n');
  
  try {
    const outputDir = path.resolve(__dirname, '../public');
    let sourceBuffer;
    let sourceName;
    
    // PRIORITY 1: Try to use the actual logo from /src/assets/
    const logoHash = '302a78d8be4e75fe5f3bef65f80ada9b7aeb0688';
    const logoPngPath = path.resolve(__dirname, `../src/assets/${logoHash}.png`);
    const logoJpgPath = path.resolve(__dirname, `../src/assets/${logoHash}.jpg`);
    
    if (await fileExists(logoPngPath)) {
      console.log('✓ Found actual logo: /src/assets/' + logoHash + '.png');
      sourceBuffer = await fs.readFile(logoPngPath);
      sourceName = logoHash + '.png';
      
      // Check if it's base64-encoded and decode if needed
      sourceBuffer = await decodeIfBase64(sourceBuffer, sourceName);
      
    } else if (await fileExists(logoJpgPath)) {
      console.log('✓ Found actual logo: /src/assets/' + logoHash + '.jpg');
      sourceBuffer = await fs.readFile(logoJpgPath);
      sourceName = logoHash + '.jpg';
      
      // Check if it's base64-encoded and decode if needed
      sourceBuffer = await decodeIfBase64(sourceBuffer, sourceName);
      
    } else {
      // PRIORITY 2: Fall back to placeholder SVG
      const svgPath = path.resolve(__dirname, '../public/favicon.svg');
      
      if (await fileExists(svgPath)) {
        console.log('⚠️  Logo not found in /src/assets/');
        console.log('→  Using placeholder: /public/favicon.svg');
        console.log('');
        console.log('   To use your actual logo:');
        console.log('   1. Export all 20 images from Figma Make (right-click → Save Image As)');
        console.log('   2. Save to /src/assets/ with exact hash filenames');
        console.log('   3. Rebuild - script will automatically use the real logo');
        console.log('');
        
        sourceBuffer = await fs.readFile(svgPath);
        sourceName = 'favicon.svg';
      } else {
        console.error('❌ No source file found!');
        console.error('   Expected: /src/assets/' + logoHash + '.png (or .jpg)');
        console.error('   Or fallback: /public/favicon.svg');
        console.error('   Skipping favicon generation\n');
        return;
      }
    }
    
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
    console.log('→ Generating favicons...\n');
    const response = await favicons(sourceBuffer, config);
    
    // Ensure output directory exists
    await fs.mkdir(outputDir, { recursive: true });
    
    // Write favicon images
    const generatedFiles = [];
    for (const image of response.images) {
      const outputPath = path.join(outputDir, image.name);
      await fs.writeFile(outputPath, image.contents);
      generatedFiles.push(image.name);
      
      // Show file size for verification
      const size = Math.round(image.contents.length / 1024);
      console.log(`  ✓ ${image.name} (${size} KB)`);
    }
    
    // Update site.webmanifest only if it doesn't exist
    for (const file of response.files) {
      if (file.name === 'site.webmanifest') {
        const manifestPath = path.join(outputDir, 'site.webmanifest');
        if (await fileExists(manifestPath)) {
          console.log(`  ⊘ site.webmanifest (preserved existing)`);
        } else {
          await fs.writeFile(manifestPath, file.contents);
          generatedFiles.push(file.name);
          console.log(`  ✓ site.webmanifest`);
        }
      }
    }
    
    console.log('\n' + '='.repeat(80));
    console.log(`✨ SUCCESS: Generated ${generatedFiles.length} favicon files`);
    console.log('='.repeat(80));
    
    // Show what was generated
    console.log('\nGenerated files:');
    generatedFiles.forEach(file => console.log('  • /public/' + file));
    
    console.log('\nThese files will be deployed to:');
    console.log('  • https://wareeguesthouse.com/favicon.ico');
    console.log('  • https://wareeguesthouse.com/favicon-32x32.png');
    console.log('  • https://wareeguesthouse.com/apple-touch-icon.png');
    console.log('');
    
  } catch (error) {
    console.error('\n' + '='.repeat(80));
    console.error('❌ FAVICON GENERATION FAILED');
    console.error('='.repeat(80));
    console.error('Error:', error.message);
    console.error('\nThis is not critical - build will continue');
    console.error('But favicons may not display correctly in browsers/Google Search\n');
    // Don't exit with error - let build continue
  }
}

async function decodeIfBase64(buffer, filename) {
  // Check if file is base64-encoded text and auto-decode if needed
  if (buffer.length === 0) return buffer;
  
  const firstBytes = buffer.subarray(0, Math.min(20, buffer.length));
  
  // Check for base64 encoding
  // Base64 JPEG starts with "/9j/"
  // Base64 PNG starts with "iVBORw0KGgo"
  const firstChars = firstBytes.toString('utf8');
  const isLikelyBase64 = firstBytes.every(byte => {
    const char = String.fromCharCode(byte);
    return /[A-Za-z0-9+/=\s]/.test(char) || byte === 10 || byte === 13;
  });
  
  if (isLikelyBase64 && (firstChars.startsWith('/9j/') || firstChars.startsWith('iVBORw0KGgo'))) {
    console.log('  → Detected base64 encoding, decoding...');
    
    try {
      const base64Text = buffer.toString('utf8').replace(/\s/g, '');
      const decodedBuffer = Buffer.from(base64Text, 'base64');
      
      // Verify it's a valid image by checking magic bytes
      const magic = decodedBuffer.subarray(0, 4);
      const isJPEG = magic[0] === 0xFF && magic[1] === 0xD8 && magic[2] === 0xFF;
      const isPNG = magic[0] === 0x89 && magic[1] === 0x50 && magic[2] === 0x4E && magic[3] === 0x47;
      
      if (isJPEG || isPNG) {
        const format = isJPEG ? 'JPEG' : 'PNG';
        const sizeKB = Math.round(decodedBuffer.length / 1024);
        console.log(`  ✓ Decoded ${format} image (${sizeKB} KB)`);
        return decodedBuffer;
      } else {
        console.warn('  ⚠️  Decoded data is not a valid image, using original');
        return buffer;
      }
    } catch (error) {
      console.error('  ✗ Failed to decode base64:', error.message);
      console.error('  → Using original buffer (may be corrupted)');
      return buffer;
    }
  }
  
  // Check if it's already a valid binary image
  const magic = firstBytes.subarray(0, 4);
  const isJPEG = magic[0] === 0xFF && magic[1] === 0xD8 && magic[2] === 0xFF;
  const isPNG = magic[0] === 0x89 && magic[1] === 0x50 && magic[2] === 0x4E && magic[3] === 0x47;
  
  if (isJPEG || isPNG) {
    const format = isJPEG ? 'JPEG' : 'PNG';
    const sizeKB = Math.round(buffer.length / 1024);
    console.log(`  ✓ Valid ${format} image (${sizeKB} KB)`);
  }
  
  return buffer;
}

generateFavicons();
