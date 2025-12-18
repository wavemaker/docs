#!/usr/bin/env python3
"""
Fix broken links in WME documentation files.
Converts old /learn/on-premise/ paths to new /docs/studio/Offerings/wme/ paths.
"""

import re
from pathlib import Path

WME_DOCS_DIR = Path("docs/studio/Offerings/wme")

# Mapping of old paths to new paths
PATH_MAPPINGS = {
    # Prerequisites
    "/learn/on-premise/prerequisites": "/docs/studio/Offerings/wme/prerequisites",
    
    # AWS paths
    "/learn/on-premise/aws/wavemaker-enterprise-setup-on-aws": "/docs/studio/Offerings/wme/aws/wavemaker-enterprise-setup-on-aws",
    "/learn/on-premise/aws/install-prerequisites": "/docs/studio/Offerings/wme/aws/install-prerequisites",
    "/learn/on-premise/aws/install/download-copy-installer": "/docs/studio/Offerings/wme/aws/install/download-copy-installer",
    "/learn/on-premise/aws/install/extract-package": "/docs/studio/Offerings/wme/aws/install/extract-package",
    "/learn/on-premise/aws/install/initilize-setup": "/docs/studio/Offerings/wme/aws/install/initilize-setup",
    "/learn/on-premise/aws/install/setup-using-cw": "/docs/studio/Offerings/wme/aws/install/setup-using-cw",
    
    # Azure paths
    "/learn/on-premise/azure/wavemaker-enterprise-setup-on-azure": "/docs/studio/Offerings/wme/azure/wavemaker-enterprise-setup-on-azure",
    "/learn/on-premise/azure/install-prerequisites": "/docs/studio/Offerings/wme/azure/install-prerequisites",
    
    # GCP paths
    "/learn/on-premise/gcp/wavemaker-enterprise-setup-on-gcp": "/docs/studio/Offerings/wme/gcp/wavemaker-enterprise-setup-on-gcp",
    
    # VMware paths
    "/learn/on-premise/vmware-esxi/wavemaker-enterprise-setup-on-vmware": "/docs/studio/Offerings/wme/vmware-esxi/wavemaker-enterprise-setup-on-vmware",
    
    # Hyper-V paths
    "/learn/on-premise/hyper-v/wavemaker-enterprise-setup-on-hyperv": "/docs/studio/Offerings/wme/hyper-v/wavemaker-enterprise-setup-on-hyperv",
    
    # Configuration paths
    "/learn/on-premise/configure/config-ssl": "/docs/studio/Offerings/wme/configure/config-ssl",
    "/learn/on-premise/configure/add-dev-capacity": "/docs/studio/Offerings/wme/configure/add-dev-capacity",
    "/learn/on-premise/configure/add-apps-capacity": "/docs/studio/Offerings/wme/configure/add-apps-capacity",
    "/learn/on-premise/configure/add-dev-capacity#add-capacity-to-developer-workspace": "/docs/studio/Offerings/wme/configure/add-dev-capacity#add-capacity-to-developer-workspace",
    "/learn/on-premise/configure/add-apps-capacity#add-capacity-to-app-deployment": "/docs/studio/Offerings/wme/configure/add-apps-capacity#add-capacity-to-app-deployment",
    
    # Upgrade paths
    "/learn/on-premise/upgrade/docker-upgrade": "/docs/studio/Offerings/wme/upgrade/docker-upgrade",
    
    # Observability paths
    "/learn/on-premise/observability/introduction#observability-stack": "/docs/studio/Offerings/wme/observability/introduction#observability-stack",
    "/learn/on-premise/observability/logs-aggregation/overview": "/docs/studio/Offerings/wme/observability/logs-aggregation/overview",
    "/learn/on-premise/observability/logs-aggregation/kibana": "/docs/studio/Offerings/wme/observability/logs-aggregation/kibana",
    "/learn/on-premise/observability/metrics-collection/overview": "/docs/studio/Offerings/wme/observability/metrics-collection/overview",
    "/learn/on-premise/observability/metrics-collection/prometheus": "/docs/studio/Offerings/wme/observability/metrics-collection/prometheus",
    "/learn/on-premise/observability/metrics-collection/alerts": "/docs/studio/Offerings/wme/observability/metrics-collection/alerts",
    "/learn/on-premise/observability/metrics-collection/grafana": "/docs/studio/Offerings/wme/observability/metrics-collection/grafana",
}

# Image path conversions - convert absolute /learn/assets paths to relative ./assets/images paths
IMAGE_PATH_PATTERN = r'/learn/assets/[^)"\s]+'

# External links to remove or comment out
EXTERNAL_LINKS = [
    "/learn/documentation-reference",
    "/learn/wavemaker-release-notes",
    "/learn/app-development/deployment/release-management",
]

def fix_file_links(file_path):
    """Fix broken links in a single markdown file."""
    with open(file_path, 'r', encoding='utf-8') as f:
        content = f.read()
    
    original_content = content
    changes_made = []
    
    # Fix path mappings
    for old_path, new_path in PATH_MAPPINGS.items():
        if old_path in content:
            content = content.replace(old_path, new_path)
            changes_made.append(f"  {old_path} -> {new_path}")
    
    # Fix image paths - convert /learn/assets/... to relative paths
    def replace_image_path(match):
        old_path = match.group(0)
        # Extract just the filename from the path
        filename = old_path.split('/')[-1]
        # Use relative path to assets/images
        return f'./assets/images/{filename}'
    
    new_content = re.sub(IMAGE_PATH_PATTERN, replace_image_path, content)
    if new_content != content:
        changes_made.append(f"  Converted absolute image paths to relative ./assets/images/")
        content = new_content
    
    # Comment out or remove external links
    for ext_link in EXTERNAL_LINKS:
        if ext_link in content:
            # Replace the link with just the text (remove the link but keep the text)
            content = re.sub(rf'\[([^\]]+)\]\({re.escape(ext_link)}[^\)]*\)', r'\1', content)
            changes_made.append(f"  Removed external link: {ext_link}")
    
    if content != original_content:
        with open(file_path, 'w', encoding='utf-8') as f:
            f.write(content)
        return changes_made
    
    return None

def main():
    """Process all markdown files in WME directory."""
    print("=" * 60)
    print("Fixing broken links in WME documentation")
    print("=" * 60)
    print()
    
    md_files = list(WME_DOCS_DIR.rglob("*.md"))
    fixed_count = 0
    
    for md_file in md_files:
        changes = fix_file_links(md_file)
        if changes:
            fixed_count += 1
            print(f"✓ Fixed: {md_file.relative_to(WME_DOCS_DIR)}")
            for change in changes:
                print(change)
            print()
    
    print("=" * 60)
    print(f"✅ Fixed {fixed_count} files")
    print("=" * 60)

if __name__ == "__main__":
    main()
