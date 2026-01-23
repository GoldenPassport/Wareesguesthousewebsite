import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import fs from "fs";

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

        // Validate file is actually a binary image (not base64 text)
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
              this.error(
                `Corrupted image file detected: ${filename}\n\n` +
                  `The file appears to contain base64-encoded text instead of binary image data.\n\n` +
                  `This usually happens when images are incorrectly exported from Figma.\n\n` +
                  `To fix:\n` +
                  `1. Re-export the image from Figma Desktop App (not browser)\n` +
                  `2. Use "Export" button in Figma, save as binary PNG/JPEG\n` +
                  `3. Or run: node scripts/fix_image_assets.js\n\n` +
                  `See /FIGMA_EXPORT_GUIDE.md for detailed instructions.`,
              );
            }
          }
        }

        const referenceId = this.emitFile({
          type: "asset",
          name: path.basename(assetPath),
          source: fileBuffer,
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
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      "@": path.resolve(__dirname, "./src"),
    },
  },
});