"""Derlenmiş paketi (build/) yerelde, backend olmadan test etmek için basit SPA sunucusu.
Kullanım: python3 /app/tools/serve_build.py 3001
"""
import http.server, os, sys

ROOT = "/app/frontend/build"
PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 3001


class H(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *a, **k):
        super().__init__(*a, directory=ROOT, **k)

    def send_head(self):
        path = self.translate_path(self.path)
        if not os.path.exists(path) or (os.path.isdir(path) and not os.path.exists(os.path.join(path, "index.html"))):
            self.path = "/index.html"
        return super().send_head()

    def log_message(self, *a):
        pass


http.server.ThreadingHTTPServer(("0.0.0.0", PORT), H).serve_forever()
