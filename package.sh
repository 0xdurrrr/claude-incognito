#!/bin/bash
set -e

cd "$(dirname "$0")"

VERSION=$(python3 -c "import json; print(json.load(open('manifest.json'))['version'])")
OUTPUT="claude-incognito-v${VERSION}.zip"

rm -f "$OUTPUT"

zip -r "$OUTPUT" . \
  -x ".DS_Store" \
  -x ".git/*" \
  -x ".claude/*" \
  -x "CLAUDE.md" \
  -x "README.md" \
  -x "package.sh" \
  -x "claude-incognito-v*.zip"

echo ""
echo "Packaged: $OUTPUT ($(du -h "$OUTPUT" | cut -f1))"
