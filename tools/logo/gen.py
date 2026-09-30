import json
from fontTools.ttLib import TTFont
from fontTools.varLib import instancer
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.pens.boundsPen import BoundsPen


def load(path, wght):
    f = TTFont(path)
    if "fvar" in f:
        f = instancer.instantiateVariableFont(f, {"wght": wght})
    return f


def text_path(font, text, size=100, tracking=0.0):
    """Return (d, width, (xmin,ymin,xmax,ymax)) with baseline at y=0, y down."""
    gs = font.getGlyphSet()
    cmap = font.getBestCmap()
    upm = font["head"].unitsPerEm
    s = size / upm
    x = 0.0
    spen = SVGPathPen(gs)
    bpen = BoundsPen(gs)
    for i, ch in enumerate(text):
        gname = cmap.get(ord(ch))
        if gname is None:
            raise SystemExit(f"missing glyph {ch!r}")
        g = gs[gname]
        t = (s, 0, 0, -s, x, 0)
        g.draw(TransformPen(spen, t))
        g.draw(TransformPen(bpen, t))
        x += g.width * s
        if i < len(text) - 1:
            x += tracking * size
    return spen.getCommands(), x, bpen.bounds


def r(v):
    return round(v, 2)


cinzel = load("cinzel.ttf", 600)
onest = load("onest.ttf", 500)

word_d, word_w, word_b = text_path(cinzel, "CABELO", 100, 0.06)
three_d, three_w, three_b = text_path(cinzel, "3", 100, 0)
sub_d, sub_w, sub_b = text_path(onest, "DERMOKOZMETİK", 100, 0.42)

out = {
    "word": {"d": word_d, "w": r(word_w), "b": [r(v) for v in word_b]},
    "three": {"d": three_d, "w": r(three_w), "b": [r(v) for v in three_b]},
    "sub": {"d": sub_d, "w": r(sub_w), "b": [r(v) for v in sub_b]},
}
json.dump(out, open("paths.json", "w"))
for k, v in out.items():
    print(k, v["w"], v["b"], len(v["d"]))
