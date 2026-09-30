"""CABELO₃ – yeni logo üretici.
Fontlar (OFL): Cinzel SemiBold (wordmark), Onest Medium (alt yazı).
Çıktılar:
  /app/frontend/src/components/brand/logoPaths.js  (React bileşeni için path verisi)
  /app/frontend/public/images/brand/new/*.svg|png   (statik logo dosyaları, favicon)
"""
import json, os, subprocess
import cairosvg

os.chdir(os.path.dirname(os.path.abspath(__file__)))
subprocess.run(["python3", "gen.py"], check=True, capture_output=True)
P = json.load(open("paths.json"))

# ---------- geometry (shared with React component) ----------
WS = 0.64   # wordmark scale
TS = 0.36   # subscript scale
SS = 0.15   # sub line scale
word_w = P["word"]["w"] * WS
three_w = P["three"]["w"] * TS
sub_w = P["sub"]["w"] * SS

GOLD = {
    "light": [(0, "#FBEFCF"), (0.32, "#E6C684"), (0.58, "#BC9048"), (0.8, "#EBD193"), (1, "#C69D55")],
    "dark": [(0, "#D2AD66"), (0.38, "#A57B39"), (0.62, "#7C5823"), (0.84, "#B48C46"), (1, "#8C682D")],
}
SUBCOL = {"light": "#EAD9B2", "dark": "#7C5A26"}
CORAL = [(0, "#FF9D80"), (1, "#F2593B")]


def grad(id_, stops, x1, y1, x2, y2):
    s = "".join(f'<stop offset="{o}" stop-color="{c}"/>' for o, c in stops)
    return f'<linearGradient id="{id_}" gradientUnits="userSpaceOnUse" x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}">{s}</linearGradient>'


def emblem(tone, ox=0, oy=0, g="g", c="c"):
    return f'''<g transform="translate({ox} {oy})">
  <circle cx="50" cy="50" r="47" fill="none" stroke="url(#{g})" stroke-width="1.3"/>
  <circle cx="50" cy="50" r="42.6" fill="none" stroke="url(#{g})" stroke-width="0.5" stroke-dasharray="0.6 2.2" opacity="0.8"/>
  <path d="M73.75 30.07 A31 31 0 1 0 73.75 69.93" fill="none" stroke="url(#{g})" stroke-width="6.6" stroke-linecap="round"/>
  <path d="M47 33.5 C47 33.5 35.6 46.6 35.6 54.4 A11.4 11.4 0 0 0 58.4 54.4 C58.4 46.6 47 33.5 47 33.5 Z" fill="url(#{c})"/>
  <path d="M41.2 54.6 A6.2 6.2 0 0 0 44.8 60.6" fill="none" stroke="#FFFFFF" stroke-opacity="0.75" stroke-width="1.5" stroke-linecap="round"/>
  <path d="M84 50 L77.5 40.5 M84 50 L77.5 59.5" stroke="url(#{g})" stroke-width="1.3" stroke-linecap="round"/>
  <circle cx="84" cy="50" r="4.3" fill="url(#{g})"/>
  <circle cx="77.5" cy="40.5" r="3.3" fill="url(#{g})"/>
  <circle cx="77.5" cy="59.5" r="3.3" fill="url(#{g})"/>
</g>'''


def wordmark(tone, x, base, center_w=None, g="g", c="c"):
    """CABELO₃ + DERMOKOZMETİK block starting at x, word baseline at `base`."""
    total = word_w + 3 + three_w
    sub_x = x + (total - sub_w) / 2
    line_y = base + 24.5
    parts = [
        f'<path transform="translate({x:.2f} {base}) scale({WS})" d="{P["word"]["d"]}" fill="url(#{g})"/>',
        f'<path transform="translate({x + word_w + 3:.2f} {base + 8}) scale({TS})" d="{P["three"]["d"]}" fill="url(#{c})"/>',
        f'<path transform="translate({sub_x:.2f} {base + 28}) scale({SS})" d="{P["sub"]["d"]}" fill="{SUBCOL[tone]}"/>',
    ]
    # thin rules left/right of the sub line
    gap = 7
    parts.append(f'<path d="M{x:.2f} {line_y - 5.2:.2f} H{sub_x - gap:.2f} M{sub_x + sub_w + gap:.2f} {line_y - 5.2:.2f} H{x + total:.2f}" stroke="{SUBCOL[tone]}" stroke-width="0.8" opacity="0.7"/>')
    return "\n".join(parts), total


def horizontal(tone):
    body, total = wordmark(tone, 122, 60)
    W = 122 + total + 2
    defs = grad("g", GOLD[tone], 0, 0, W, 100) + grad("c", CORAL, 0, 0, 100, 100)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.1f} 100"><defs>{defs}</defs>{emblem(tone)}{body}</svg>', W


def stacked(tone):
    total = word_w + 3 + three_w
    W = total + 8
    body, _ = wordmark(tone, 4, 172)
    defs = grad("g", GOLD[tone], 0, 0, W, 210) + grad("c", CORAL, 0, 0, W, 210)
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W:.1f} 212"><defs>{defs}</defs>{emblem(tone, (W - 100) / 2, 0)}{body}</svg>', W


def emblem_svg(tone, bg=None, pad=0):
    s = 100 + pad * 2
    defs = grad("g", GOLD[tone], 0, 0, s, s) + grad("c", CORAL, 0, 0, s, s)
    rect = f'<rect width="{s}" height="{s}" rx="{s * 0.22:.1f}" fill="{bg}"/>' if bg else ""
    return f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {s} {s}"><defs>{defs}</defs>{rect}{emblem(tone, pad, pad)}</svg>'


OUT = "/app/frontend/public/images/brand/new"
os.makedirs(OUT, exist_ok=True)
files = {}
for tone in ("light", "dark"):
    svg, hw = horizontal(tone)
    files[f"cabelo3-logo-yatay-{tone}.svg"] = svg
    svg2, sw = stacked(tone)
    files[f"cabelo3-logo-dikey-{tone}.svg"] = svg2
    files[f"cabelo3-amblem-{tone}.svg"] = emblem_svg(tone)
files["cabelo3-favicon.svg"] = emblem_svg("light", bg="#0A0A0A", pad=6)
for n, s in files.items():
    open(os.path.join(OUT, n), "w").write(s)

pub = "/app/frontend/public"
fav = files["cabelo3-favicon.svg"].encode()
for name, size in [("favicon-192.png", 192), ("favicon-512.png", 512), ("apple-touch-icon.png", 180), ("favicon-32.png", 32)]:
    cairosvg.svg2png(bytestring=fav, write_to=os.path.join(pub, name), output_width=size, output_height=size)
open(os.path.join(pub, "favicon.svg"), "wb").write(fav)
from PIL import Image
Image.open(os.path.join(pub, "favicon-512.png")).save(os.path.join(pub, "favicon.ico"), sizes=[(16, 16), (32, 32), (48, 48), (64, 64)])
# PNG exports of the logo (for social / print)
for tone in ("light", "dark"):
    cairosvg.svg2png(bytestring=files[f"cabelo3-logo-yatay-{tone}.svg"].encode(), write_to=f"{OUT}/cabelo3-logo-yatay-{tone}.png", output_width=2000)
    cairosvg.svg2png(bytestring=files[f"cabelo3-logo-dikey-{tone}.svg"].encode(), write_to=f"{OUT}/cabelo3-logo-dikey-{tone}.png", output_width=1400)

# JS module for React component
js = "// Otomatik üretildi: /app/tools/logo/build.py\n" + "export const LOGO = " + json.dumps({
    "word": P["word"]["d"], "three": P["three"]["d"], "sub": P["sub"]["d"],
    "WS": WS, "TS": TS, "SS": SS, "wordW": round(word_w, 2), "threeW": round(three_w, 2), "subW": round(sub_w, 2),
}) + ";\n"
os.makedirs("/app/frontend/src/components/brand", exist_ok=True)
open("/app/frontend/src/components/brand/logoPaths.js", "w").write(js)
print("ok", round(word_w, 1), round(three_w, 1), round(sub_w, 1), round(hw, 1), round(sw, 1))
