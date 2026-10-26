# Local server for Earpiece; no-store so Chrome always loads the latest cards.
# Usage: python3 serve.py [port]   (default 8765)
import http.server, functools, os, sys, webbrowser, threading

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8765

class NoCache(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()
    def log_message(self, *a):
        pass

handler = functools.partial(NoCache, directory=os.path.dirname(os.path.abspath(__file__)))
url = f"http://localhost:{PORT}/index.html"
print(f"Earpiece running at {url} (Ctrl+C to stop)")
if os.environ.get("EARPIECE_NO_BROWSER") != "1":
    threading.Timer(1, lambda: webbrowser.open(url)).start()
http.server.ThreadingHTTPServer(("127.0.0.1", PORT), handler).serve_forever()
