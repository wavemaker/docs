#!/bin/bash

# Fix all broken prerequisites links after moving to getting-started folder

WME_DIR="docs/studio/Offerings/wme"

echo "Fixing prerequisites links..."

# Update all links from /wme/prerequisites to /wme/getting-started/prerequisites
find "$WME_DIR" -name "*.md" -type f -exec sed -i '' \
  's|/docs/studio/Offerings/wme/prerequisites|/docs/studio/Offerings/wme/getting-started/prerequisites|g' {} \;

echo "✓ Fixed all prerequisites links"

# Count updated files
updated=$(grep -r "/docs/studio/Offerings/wme/getting-started/prerequisites" "$WME_DIR" --include="*.md" -l | wc -l | tr -d ' ')
echo "✓ Updated $updated files"
