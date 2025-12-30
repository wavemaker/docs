#!/usr/bin/env python3
"""migrate_howtos.py

Copy all files from a source how-tos folder (default: learn/how-tos) into
`docs/guide/howtos` preserving directory structure, and optionally:
 - set/replace `last_update: { author: "..." }` in frontmatter
 - remove `sidebar_position` from frontmatter
 - sanitize links that point to `/learn/...` (replace link with plain label)
 - sanitize images that point to `/learn/assets/...` -> replace with `Image: filename`
 - optionally copy assets (images) to `static/learn-assets/` and update image links

Usage:
  ./scripts/migrate_howtos.py --dry-run
  ./scripts/migrate_howtos.py --src learn/how-tos --dst docs/guide/howtos --author "Author Name" --copy-assets

This script tries to avoid external dependencies. It can use PyYAML if installed for safer YAML
parsing, otherwise it uses a small regex-based fallback for frontmatter edits.
"""

import argparse
import os
import re
import shutil
import sys
from pathlib import Path

try:
    import yaml
    YAML_AVAILABLE = True
except Exception:
    YAML_AVAILABLE = False

FRONTMATTER_RE = re.compile(r"^---\n(.*?)\n---\n", re.S)
LEARN_LINK_RE = re.compile(r"\[([^\]]+)\]\((/learn/[^)]+)\)")
LEARN_IMAGE_RE = re.compile(r"!\[([^\]]*)\]\((/learn/assets/[^)]+)\)")


def read_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        return f.read()


def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w', encoding='utf-8') as f:
        f.write(content)


def parse_frontmatter(text):
    m = FRONTMATTER_RE.match(text)
    if not m:
        return None, text
    raw = m.group(1)
    body = text[m.end():]
    if YAML_AVAILABLE:
        try:
            data = yaml.safe_load(raw) or {}
            return data, body
        except Exception:
            pass
    # fallback: parse simple key: value pairs
    data = {}
    for line in raw.splitlines():
        if ':' in line:
            k, v = line.split(':', 1)
            k = k.strip()
            v = v.strip()
            # simple list or dict values are not handled
            data[k] = v.strip(' "')
    return data, body


def dump_frontmatter(data):
    if YAML_AVAILABLE:
        return '---\n' + yaml.safe_dump(data, sort_keys=False).strip() + '\n---\n\n'
    # fallback: simple serializer
    lines = ['---']
    for k, v in data.items():
        if isinstance(v, dict):
            lines.append(f"{k}:")
            for subk, subv in v.items():
                lines.append(f"  {subk}: \"{subv}\"")
        else:
            lines.append(f"{k}: \"{v}\"")
    lines.append('---')
    lines.append('')
    return '\n'.join(lines)


def sanitize_content(content, sanitize_links=True, sanitize_images=True, copy_assets=False, src_root=None, assets_dst=None, actions=None):
    # Sanitize markdown links to /learn/... -> replace [label](/learn/...) with label
    if sanitize_links:
        def link_repl(m):
            label = m.group(1)
            target = m.group(2)
            actions.append(('sanitize-link', target))
            return label
        content = LEARN_LINK_RE.sub(link_repl, content)
    # Sanitize images /learn/assets/... -> replace with "Image: filename" or copy if requested
    if sanitize_images:
        def img_repl(m):
            alt = m.group(1)
            target = m.group(2)
            filename = os.path.basename(target)
            actions.append(('sanitize-image', target))
            if copy_assets and src_root:
                srcimg = Path(src_root) / target.lstrip('/')
                if srcimg.exists() and assets_dst:
                    dstimg_dir = Path(assets_dst)
                    dstimg_dir.mkdir(parents=True, exist_ok=True)
                    dstimg = dstimg_dir / filename
                    shutil.copy2(srcimg, dstimg)
                    actions.append(('copy-asset', str(srcimg), str(dstimg)))
                    # update to new static path
                    return f'![](/static/learn-assets/{filename})'
            return f'Image: {filename}'
        content = LEARN_IMAGE_RE.sub(img_repl, content)
    return content


def process_file(src_path, dst_path, author, sanitize_links, sanitize_images, copy_assets, src_root, assets_dst, dry_run=False):
    text = read_file(src_path)
    fm, body = parse_frontmatter(text)
    if fm is None:
        fm = {}
    # remove sidebar_position
    if 'sidebar_position' in fm:
        del fm['sidebar_position']
    # set last_update
    fm['last_update'] = {'author': author}

    actions = []
    new_body = sanitize_content(body, sanitize_links, sanitize_images, copy_assets, src_root, assets_dst, actions)
    new_text = dump_frontmatter(fm) + new_body
    if dry_run:
        return {'src': src_path, 'dst': dst_path, 'actions': actions, 'changed': new_text != text}
    else:
        write_file(dst_path, new_text)
        return {'src': src_path, 'dst': dst_path, 'actions': actions, 'changed': True}


def main():
    p = argparse.ArgumentParser()
    p.add_argument('--src', default='learn/how-tos', help='Source folder (default: learn/how-tos)')
    p.add_argument('--dst', default='docs/guide/howtos', help='Destination folder (default: docs/guide/howtos)')
    p.add_argument('--author', default='Author Name', help='Author name to add in last_update')
    p.add_argument('--dry-run', action='store_true', help='Show planned changes without modifying files')
    p.add_argument('--sanitize-links', action='store_true', help='Replace /learn/ links with plain labels')
    p.add_argument('--sanitize-images', action='store_true', help='Replace /learn/assets images with placeholders or copy them')
    p.add_argument('--copy-assets', action='store_true', help='Copy assets from /learn/assets to static/learn-assets and update links')
    args = p.parse_args()

    src_root = '.'
    src_dir = Path(args.src)
    if not src_dir.exists():
        print(f"Source dir not found: {args.src}")
        sys.exit(1)

    dst_dir = Path(args.dst)
    assets_dst = Path('static/learn-assets') if args.copy_assets else None

    plan = []
    for root, dirs, files in os.walk(src_dir):
        for fname in files:
            if not fname.endswith(('.md', '.mdx')):
                continue
            src_path = Path(root) / fname
            rel = src_path.relative_to(src_dir)
            dst_path = dst_dir / rel
            plan.append((str(src_path), str(dst_path)))

    print(f"Found {len(plan)} markdown files to process from '{args.src}' -> '{args.dst}'")
    results = []
    for src_path, dst_path in plan:
        actions = []
        res = process_file(src_path, dst_path, args.author, args.sanitize_links, args.sanitize_images, args.copy_assets, src_root, assets_dst, dry_run=args.dry_run)
        results.append(res)

    changed = [r for r in results if r['changed']]
    print(f"Planned/Done: {len(changed)} files modified/copied")
    if args.dry_run:
        for r in results[:50]:
            print('-', r['src'], '->', r['dst'], '| actions:', r['actions'])
        if len(results) > 50:
            print('... (truncated)')
        print('\nDry-run complete. Use the same command without --dry-run to actually apply changes.')
    else:
        print('Migration applied. Remember to run `npm run build` to validate and commit the changes.')


if __name__ == '__main__':
    main()
