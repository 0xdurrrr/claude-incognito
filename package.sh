#!/bin/bash
set -e

cd "$(dirname "$0")"

VERSION=$(python3 -c "import json; print(json.load(open('src/manifest.json'))['version'])")
OUTPUT="claude-incognito-v${VERSION}.zip"

rm -f "$OUTPUT"

cd src
zip -r "../$OUTPUT" . -x ".DS_Store"
cd ..

echo ""
echo "Packaged: $OUTPUT ($(du -h "$OUTPUT" | cut -f1))"
