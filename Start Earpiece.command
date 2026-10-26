#!/bin/zsh
# macOS: double-click to serve Earpiece on localhost and open it in Chrome.
cd "$(dirname "$0")"
lsof -ti tcp:8765 | xargs kill 2>/dev/null
EARPIECE_NO_BROWSER=1 python3 serve.py >/dev/null 2>&1 &
sleep 1
open -a "Google Chrome" "http://localhost:8765/index.html"
echo "Earpiece running. Close this window to stop it."
wait
