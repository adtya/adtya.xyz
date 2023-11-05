#!/bin/sh

set -eu

VERSION="$(date +%Y-%m-%d)"
sed -r "s/version = \".+\";/version = \"$VERSION\";/g" -i default.nix

