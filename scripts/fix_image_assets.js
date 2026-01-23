#!/usr/bin/env node

/**
 * Fix Image Assets Script
 * 
 * This script fixes corrupted image files that were exported from Figma as
 * base64-encoded text instead of binary image files.
 * 
 * It:
 * 1. Reads files in /src/assets/
 * 2. Detects if they contain base64-encoded image data
 * 3. Decodes the base64 data to binary
 * 4. Detects the actual image format (JPEG/PNG) from magic bytes
 * 5. Writes the correct binary image file
 * 
 * Usage: node scripts/fix_image_assets.js
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const ASSETS_DIR = path.join(__dirname, '..', 'src', 'assets');

// Magic bytes for image formats
const JPEG_MAGIC = Buffer.from([0xFF, 0xD8, 0xFF]);
const PNG_MAGIC = Buffer.from([0x89, 0x50, 0x4E, 0x47]);

/**
 * Detect if a buffer contains base64-encoded data
 */
function isBase64Text(buffer) {
  if (buffer.length === 0) return false;
  
  // Check first 100 bytes
  const sample = buffer.subarray(0, Math.min(100, buffer.length));
  const text = sample.toString('utf8');
  
  // Base64 JPEG typically starts with "/9j/"
  // Base64 PNG typically starts with "iVBORw0KGgo"
  if (text.startsWith('/9j/') || text.startsWith('iVBORw0KGgo')) {
    return true;
  }
  
  // Check if it's mostly base64 characters
  const base64Chars = text.match(/[A-Za-z0-9+/=\s]/g);
  return base64Chars && base64Chars.length / text.length > 0.95;
}

/**
 * Extract base64 data from a text file
 */
function extractBase64(buffer) {
  const text = buffer.toString('utf8');
  
  // Remove any whitespace and newlines
  const base64 = text.replace(/\s/g, '');
  
  return base64;
}

/**
 * Detect image format from magic bytes
 */
function detectImageFormat(buffer) {
  if (buffer.length < 4) return null;
  
  // Check for JPEG magic bytes (FF D8 FF)
  if (buffer.subarray(0, 3).equals(JPEG_MAGIC)) {
    return 'jpg';
  }
  
  // Check for PNG magic bytes (89 50 4E 47)
  if (buffer.subarray(0, 4).equals(PNG_MAGIC)) {
    return 'png';
  }
  
  return null;
}

/**
 * Fix a single image file
 */
function fixImageFile(filename) {
  const filepath = path.join(ASSETS_DIR, filename);
  
  if (!fs.existsSync(filepath)) {
    console.log(`⏭️  Skipping ${filename} - file does not exist`);
    return false;
  }
  
  const fileBuffer = fs.readFileSync(filepath);
  
  // Check if file is corrupted (base64 text)
  if (!isBase64Text(fileBuffer)) {
    console.log(`✅ ${filename} - already a valid binary image`);
    return false;
  }
  
  console.log(`🔧 Fixing ${filename} - detected base64 text corruption`);
  
  // Extract base64 data
  const base64Data = extractBase64(fileBuffer);
  
  // Decode base64 to binary
  let binaryBuffer;
  try {
    binaryBuffer = Buffer.from(base64Data, 'base64');
  } catch (error) {
    console.error(`❌ Failed to decode base64 for ${filename}:`, error.message);
    return false;
  }
  
  // Detect actual image format
  const actualFormat = detectImageFormat(binaryBuffer);
  
  if (!actualFormat) {
    console.error(`❌ Could not detect image format for ${filename}`);
    return false;
  }
  
  console.log(`   Detected format: ${actualFormat.toUpperCase()}`);
  
  // Determine new filename with correct extension
  const ext = path.extname(filename);
  const basename = path.basename(filename, ext);
  const newFilename = `${basename}.${actualFormat}`;
  const newFilepath = path.join(ASSETS_DIR, newFilename);
  
  // Write the binary image file
  fs.writeFileSync(newFilepath, binaryBuffer);
  
  console.log(`   ✅ Saved binary image: ${newFilename}`);
  console.log(`   Size: ${binaryBuffer.length} bytes`);
  
  // If extension changed, remove old file
  if (newFilename !== filename) {
    fs.unlinkSync(filepath);
    console.log(`   🗑️  Removed corrupted file: ${filename}`);
  }
  
  return true;
}

/**
 * Main function
 */
function main() {
  console.log('🔍 Checking image assets in /src/assets/\n');
  
  // Create assets directory if it doesn't exist
  if (!fs.existsSync(ASSETS_DIR)) {
    console.error(`❌ Directory not found: ${ASSETS_DIR}`);
    console.error('   Please create the directory first.');
    process.exit(1);
  }
  
  // Get all PNG and JPG files
  const files = fs.readdirSync(ASSETS_DIR)
    .filter(f => f.endsWith('.png') || f.endsWith('.jpg') || f.endsWith('.jpeg'));
  
  if (files.length === 0) {
    console.log('⚠️  No image files found in /src/assets/');
    console.log('   Expected 20 image files (.png or .jpg)');
    process.exit(0);
  }
  
  console.log(`Found ${files.length} image files\n`);
  
  let fixedCount = 0;
  let validCount = 0;
  
  for (const filename of files) {
    const wasFixed = fixImageFile(filename);
    if (wasFixed) {
      fixedCount++;
    } else {
      validCount++;
    }
  }
  
  console.log('\n📊 Summary:');
  console.log(`   ✅ Valid binary images: ${validCount}`);
  console.log(`   🔧 Fixed corrupted images: ${fixedCount}`);
  console.log(`   📁 Total files: ${files.length}`);
  
  if (fixedCount > 0) {
    console.log('\n⚠️  IMPORTANT: Some component files may need updating!');
    console.log('   If any .png files were converted to .jpg, update the imports in:');
    console.log('   - src/app/components/hero.tsx');
    console.log('   - src/app/components/footer.tsx');
    console.log('   - src/app/components/about.tsx');
    console.log('   - src/app/components/rooms.tsx');
    console.log('   - src/app/components/photo-gallery.tsx');
  }
  
  console.log('\n✨ Done!');
}

// Run the script
main();