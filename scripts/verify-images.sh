#!/bin/bash

# Image Verification Script for Waree's Guesthouse
# Run before committing to ensure all images are valid binary files

set -e

ASSETS_DIR="src/assets"
REQUIRED_COUNT=20

echo "🔍 Verifying image assets..."
echo ""

# Check if assets directory exists
if [ ! -d "$ASSETS_DIR" ]; then
    echo "❌ Error: Directory $ASSETS_DIR not found"
    exit 1
fi

# Count total image files
TOTAL_FILES=$(find "$ASSETS_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) 2>/dev/null | wc -l | tr -d ' ')

echo "📁 Found $TOTAL_FILES image files (need $REQUIRED_COUNT)"

if [ "$TOTAL_FILES" -lt "$REQUIRED_COUNT" ]; then
    echo "⚠️  Warning: Expected $REQUIRED_COUNT images, found $TOTAL_FILES"
    echo "   See /EXPORT-IMAGES.md for the complete list"
    echo ""
fi

# Check each file
CORRUPTED=0
VALID=0

for file in "$ASSETS_DIR"/*.png "$ASSETS_DIR"/*.jpg "$ASSETS_DIR"/*.jpeg; do
    # Skip if no files match pattern
    [ -e "$file" ] || continue
    
    filename=$(basename "$file")
    
    # Check file type
    file_type=$(file "$file" 2>/dev/null)
    
    if echo "$file_type" | grep -q "JPEG\|PNG"; then
        VALID=$((VALID + 1))
        echo "✅ $filename - Valid binary image"
    else
        CORRUPTED=$((CORRUPTED + 1))
        echo "❌ $filename - CORRUPTED (not a binary image)"
        echo "   Type: $file_type"
    fi
done

echo ""
echo "📊 Summary:"
echo "   ✅ Valid binary images: $VALID"
echo "   ❌ Corrupted files: $CORRUPTED"
echo "   📁 Total files: $TOTAL_FILES"
echo ""

if [ "$CORRUPTED" -gt 0 ]; then
    echo "⚠️  CORRUPTED IMAGES DETECTED!"
    echo ""
    echo "To fix, run:"
    echo "  node scripts/fix_image_assets.js"
    echo ""
    echo "Or re-export from Figma Make (see /FIGMA_EXPORT_GUIDE.md)"
    echo ""
    exit 1
fi

if [ "$TOTAL_FILES" -lt "$REQUIRED_COUNT" ]; then
    echo "⚠️  Missing images!"
    echo ""
    echo "Export the missing $(($REQUIRED_COUNT - $TOTAL_FILES)) images from Figma Make"
    echo "See /EXPORT-IMAGES.md for the complete list"
    echo ""
    exit 1
fi

echo "✨ All images verified successfully!"
echo ""
echo "Safe to commit! 🚀"
exit 0
