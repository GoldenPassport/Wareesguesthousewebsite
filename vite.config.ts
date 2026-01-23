import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "fs";
import { faviconPlugin } from "./vite-favicon-plugin";

// Plugin to transform figma:asset imports for production builds only
function figmaAssetsPlugin() {
  return {
    name: "figma-assets-transform",
    enforce: "pre" as const,
    resolveId(id: string) {
      // Only transform in production builds, not in Figma Make dev mode
      if (
        process.env.NODE_ENV === "production" &&
        id.startsWith("figma:asset/")
      ) {
        const filename = id.replace("figma:asset/", "");
        // Return a virtual module ID that we'll handle in load()
        return "\0figma-asset:" + filename;
      }
      return null;
    },
    load(id: string) {
      // Handle the virtual module we created in resolveId
      if (id.startsWith("\0figma-asset:")) {
        const filename = id.replace("\0figma-asset:", "");
        
        // Try the exact filename first
        let assetPath = path.resolve(__dirname, "./src/assets", filename);
        
        // If .png requested but doesn't exist, try .jpg (common conversion scenario)
        if (!fs.existsSync(assetPath) && filename.endsWith('.png')) {
          const jpgFilename = filename.replace(/\.png$/, '.jpg');
          const jpgPath = path.resolve(__dirname, "./src/assets", jpgFilename);
          
          if (fs.existsSync(jpgPath)) {
            assetPath = jpgPath;
            console.log(`📸 Vite: Auto-converting ${filename} → ${jpgFilename}`);
          }
        }
        
        // If .jpg requested but doesn't exist, try .png (reverse scenario)
        if (!fs.existsSync(assetPath) && filename.endsWith('.jpg')) {
          const pngFilename = filename.replace(/\.jpg$/, '.png');
          const pngPath = path.resolve(__dirname, "./src/assets", pngFilename);
          
          if (fs.existsSync(pngPath)) {
            assetPath = pngPath;
            console.log(`📸 Vite: Auto-converting ${filename} → ${pngFilename}`);
          }
        }

        // Check if file exists
        if (!fs.existsSync(assetPath)) {
          this.error(
            `Missing asset file: ${filename}\n\n` +
              `Expected location: /src/assets/${filename}\n\n` +
              `To fix this:\n` +
              `1. In Figma Make, right-click the image and select "Save Image As..."\n` +
              `2. Save it to /src/assets/ with the exact filename: ${filename}\n` +
              `3. Repeat for all missing images listed in /EXPORT-IMAGES.md\n\n` +
              `See /FIGMA_EXPORT_GUIDE.md for the complete list of required images.`,
          );
        }

        // Read the file and validate it's a binary image
        const fileBuffer = fs.readFileSync(assetPath);
        
        let finalBuffer = fileBuffer;
        let finalFilename = path.basename(assetPath);

        // Check if file is base64-encoded text and auto-decode if needed
        if (fileBuffer.length > 0) {
          const firstBytes = fileBuffer.subarray(
            0,
            Math.min(10, fileBuffer.length),
          );
          const firstChars = firstBytes.toString(
            "utf8",
            0,
            Math.min(10, firstBytes.length),
          );

          // Check for base64-encoded text corruption
          // Base64 JPEG starts with "/9j/" (which is FF D8 FF in base64)
          // Base64 PNG would start with "iVBORw0KGgo" (which is 89 50 4E 47 in base64)
          if (
            firstChars.startsWith("/9j/") ||
            firstChars.startsWith("iVBORw0KGgo") ||
            firstChars.match(/^[A-Za-z0-9+/=]+$/)
          ) {
            // Check if it looks like base64 (only base64 chars, no binary)
            const isLikelyBase64 = firstBytes.every((byte) => {
              const char = String.fromCharCode(byte);
              return (
                /[A-Za-z0-9+/=\s]/.test(char) ||
                byte === 10 ||
                byte === 13
              );
            });

            if (isLikelyBase64 && firstBytes.length >= 4) {
              console.log(`🔧 Vite: Auto-decoding base64 image: ${filename}`);
              
              try {
                // Extract base64 data and decode it
                const base64Text = fileBuffer.toString('utf8').replace(/\s/g, '');
                const decodedBuffer = Buffer.from(base64Text, 'base64');
                
                // Detect actual format from magic bytes
                const magic = decodedBuffer.subarray(0, 4);
                const isJPEG = magic[0] === 0xFF && magic[1] === 0xD8 && magic[2] === 0xFF;
                const isPNG = magic[0] === 0x89 && magic[1] === 0x50 && magic[2] === 0x4E && magic[3] === 0x47;
                
                if (isJPEG) {
                  console.log(`   ✓ Detected JPEG format (${decodedBuffer.length} bytes)`);
                  finalBuffer = decodedBuffer;
                  finalFilename = finalFilename.replace(/\.png$/, '.jpg');
                } else if (isPNG) {
                  console.log(`   ✓ Detected PNG format (${decodedBuffer.length} bytes)`);
                  finalBuffer = decodedBuffer;
                } else {
                  console.warn(`   ⚠ Unknown format, using original buffer`);
                }
              } catch (error) {
                console.error(`   ✗ Failed to decode base64: ${error.message}`);
                console.error(`   Using original buffer (may be corrupted)`);
              }
            }
          }
        }

        const referenceId = this.emitFile({
          type: "asset",
          name: finalFilename,
          source: finalBuffer,
        });

        // Return code that exports the asset URL
        return `export default import.meta.ROLLUP_FILE_URL_${referenceId};`;
      }
      return null;
    },
  };
}

export default defineConfig({
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
    figmaAssetsPlugin(),
    // Auto-generate favicons from the logo (figma:asset)
    // Extracts logo from src/assets/ and generates all favicon sizes
    faviconPlugin({
      logo: 'figma:asset/302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.png',
      outputPath: 'public',
    }),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
  publicDir: "public",
  build: {
    outDir: "dist",
    assetsDir: "assets",
    copyPublicDir: true,
  },
});