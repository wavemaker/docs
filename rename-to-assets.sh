#!/bin/bash

# Script to rename staticContent to assets and update markdown references

WME_DIR="docs/studio/Offerings/wme"

echo "=========================================="
echo "Rename staticContent to assets"
echo "=========================================="
echo ""

# Step 1: Rename all staticContent folders to assets
echo "Step 1: Renaming folders..."
find "$WME_DIR" -type d -name "staticContent" | while read dir; do
    parent_dir=$(dirname "$dir")
    new_dir="${parent_dir}/assets"

    if [ -d "$dir" ]; then
        mv "$dir" "$new_dir"
        echo "✓ Renamed: $dir → $new_dir"
    fi
done

echo ""
echo "Step 2: Updating markdown files..."

# Step 2: Update all markdown files to use ./assets/images/ instead of ./staticContent/images/
find "$WME_DIR" -name "*.md" -type f | while read file; do
    if grep -q "staticContent/images" "$file"; then
        sed -i '' 's|staticContent/images|assets/images|g' "$file"
        echo "✓ Updated: $file"
    fi
done

echo ""
echo "=========================================="
echo "✅ Rename Complete!"
echo "=========================================="
echo ""
echo "Verification:"
echo "  - staticContent folders: $(find "$WME_DIR" -type d -name 'staticContent' | wc -l | tr -d ' ')"
echo "  - assets folders: $(find "$WME_DIR" -type d -name 'assets' | wc -l | tr -d ' ')"
echo "  - Total images: $(find "$WME_DIR" -path '*/assets/images/*' -type f | wc -l | tr -d ' ')"
echo ""
