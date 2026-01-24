#!/bin/bash

echo ""
echo "================================================================================"
echo "🔍 FAVICON VERIFICATION"
echo "================================================================================"
echo ""

PUBLIC_DIR="public"

# Check if public directory exists
if [ ! -d "$PUBLIC_DIR" ]; then
  echo "❌ /public directory not found"
  exit 1
fi

echo "Checking for required favicon files..."
echo ""

# Files that should exist after generation
REQUIRED_FILES=(
  "favicon.ico"
  "favicon-16x16.png"
  "favicon-32x32.png"
  "apple-touch-icon.png"
)

ALL_FOUND=true

for file in "${REQUIRED_FILES[@]}"; do
  filepath="$PUBLIC_DIR/$file"
  
  if [ -f "$filepath" ]; then
    # Get file size
    size=$(du -h "$filepath" | cut -f1)
    
    # Check if it's a binary file (not text/base64)
    if file "$filepath" | grep -q "data"; then
      echo "✓ $file ($size) - Binary format ✓"
    else
      filetype=$(file "$filepath" | cut -d: -f2)
      echo "⚠️  $file ($size) -$filetype"
    fi
  else
    echo "❌ $file - NOT FOUND"
    ALL_FOUND=false
  fi
done

echo ""

# Check source files
echo "Source files:"
echo ""

if [ -f "$PUBLIC_DIR/favicon.svg" ]; then
  size=$(du -h "$PUBLIC_DIR/favicon.svg" | cut -f1)
  echo "✓ favicon.svg ($size) - Source file"
else
  echo "❌ favicon.svg - NOT FOUND (required for generation)"
fi

# Check for actual logo
LOGO_PNG="src/assets/302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.png"
LOGO_JPG="src/assets/302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.jpg"

echo ""
if [ -f "$LOGO_PNG" ]; then
  size=$(du -h "$LOGO_PNG" | cut -f1)
  if file "$LOGO_PNG" | grep -q "PNG\|JPEG"; then
    echo "✓ Actual logo found: $LOGO_PNG ($size) - Binary format ✓"
  else
    echo "⚠️  Actual logo found: $LOGO_PNG ($size) - May be corrupted"
  fi
elif [ -f "$LOGO_JPG" ]; then
  size=$(du -h "$LOGO_JPG" | cut -f1)
  if file "$LOGO_JPG" | grep -q "PNG\|JPEG"; then
    echo "✓ Actual logo found: $LOGO_JPG ($size) - Binary format ✓"
  else
    echo "⚠️  Actual logo found: $LOGO_JPG ($size) - May be corrupted"
  fi
else
  echo "⚠️  Actual logo not found in /src/assets/"
  echo "   Using placeholder /public/favicon.svg"
  echo ""
  echo "   To use your real logo:"
  echo "   1. Export images from Figma Make (right-click → Save Image As)"
  echo "   2. Save 302a78d8be4e75fe5f3bef65f80ada9b7aeb0688.png to /src/assets/"
  echo "   3. Run: npm run build"
fi

echo ""
echo "================================================================================"

if [ "$ALL_FOUND" = true ]; then
  echo "✅ All favicon files present!"
else
  echo "❌ Some favicon files are missing - run: npm run build"
fi

echo "================================================================================"
echo ""
