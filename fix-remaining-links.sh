#!/bin/bash

# Fix remaining broken links in WME files

WME_DIR="docs/studio/Offerings/wme"

echo "Fixing remaining broken links..."
echo ""

# Remove GCP links (since GCP docs don't exist)
echo "Removing GCP links..."
find "$WME_DIR" -name "*.md" -type f -exec sed -i '' \
  -e 's|\[GCP\](/docs/studio/Offerings/wme/gcp/wavemaker-enterprise-setup-on-gcp)||g' \
  -e 's|, \[GCP\](/docs/studio/Offerings/wme/gcp/wavemaker-enterprise-setup-on-gcp)||g' \
  -e 's|\[GCP\](/docs/studio/Offerings/wme/gcp/wavemaker-enterprise-setup-on-gcp), ||g' \
  -e 's|\[GCP\](/docs/studio/Offerings/wme/gcp/wavemaker-enterprise-setup-on-gcp)||g' \
  {} \;

# Fix the architecture link in welcome.md
echo "Fixing architecture link in welcome.md..."
sed -i '' 's|/learn/on-premise/architecture#platform||g' "$WME_DIR/welcome.md"

echo "✓ Fixed all remaining broken links"
echo ""
