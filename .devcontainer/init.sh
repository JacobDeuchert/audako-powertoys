#!/bin/bash
set -e

mkdir -p .devcontainer/.cache

# OpenCode auth: copy if present on host, otherwise ensure a placeholder file exists
# so the bind mount in devcontainer.json succeeds even without OpenCode installed.
opencode_auth=""
if [[ "$OSTYPE" == "linux-gnu"* || "$OSTYPE" == "darwin"* ]]; then
    opencode_auth="$HOME/.local/share/opencode/auth.json"
elif [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" ]]; then
    opencode_auth="$APPDATA/opencode/auth.json"
fi

# If a previous run left .cache/opencode-auth.json as an empty dir (Docker auto-create), drop it.
if [ -d .devcontainer/.cache/opencode-auth.json ] && [ -z "$(ls -A .devcontainer/.cache/opencode-auth.json 2>/dev/null)" ]; then
    rmdir .devcontainer/.cache/opencode-auth.json
fi

if [ -n "$opencode_auth" ] && [ -f "$opencode_auth" ]; then
    cp "$opencode_auth" .devcontainer/.cache/opencode-auth.json
elif [ ! -f .devcontainer/.cache/opencode-auth.json ]; then
    printf '{}' > .devcontainer/.cache/opencode-auth.json
fi

# Claude credentials: bind mounts require ~/.claude (dir) and ~/.claude.json (file) on host.
# Without these, Docker auto-creates both as empty dirs, breaking the .claude.json file mount
# on the next start. Recover from that state and write placeholders so the container always boots.
if [ -d "$HOME/.claude.json" ] && [ -z "$(ls -A "$HOME/.claude.json" 2>/dev/null)" ]; then
    rmdir "$HOME/.claude.json"
fi
mkdir -p "$HOME/.claude"
[ -f "$HOME/.claude.json" ] || printf '{}' > "$HOME/.claude.json"
