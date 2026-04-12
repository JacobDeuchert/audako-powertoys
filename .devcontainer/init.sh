#!/usr/bin/env bash

set -euo pipefail

export DOTNET_ROOT="${HOME}/.dotnet"
export PATH="${DOTNET_ROOT}:${DOTNET_ROOT}/tools:${PATH}"

opencode_target_dir="${HOME}/.local/share/opencode"
mkdir -p "${opencode_target_dir}"

if [ ! -f "${opencode_target_dir}/auth.json" ] && [ -f /mnt/opencode-host/auth.json ]; then
  cp /mnt/opencode-host/auth.json "${opencode_target_dir}/auth.json"
  chmod 600 "${opencode_target_dir}/auth.json"
fi

if ! command -v ng >/dev/null 2>&1; then
  npm install -g @angular/cli
fi

if ! command -v typescript-language-server >/dev/null 2>&1 || ! command -v biome >/dev/null 2>&1; then
  npm install -g typescript typescript-language-server @biomejs/biome
fi

if ! command -v opencode >/dev/null 2>&1; then
  curl -fsSL https://opencode.ai/install | bash
fi
