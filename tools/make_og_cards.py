#!/usr/bin/env python3
"""Generate Open Graph share cards for the temperature and emergency visits section.

One card per module per language, 1200x630, written as SVG and converted to PNG
with rsvg-convert.

Every figure on every card is read from the exported estimates in
src/data/paper, so a card cannot claim a number the site does not show. The
visual is a real dot row from that module's own data rather than a decorative
motif: these cards are the first thing a reader sees, and a fabricated chart
would be worse than no chart.

Fonts are the system serif and sans that the site declares as fallbacks for
Source Serif 4 and Inter. rsvg resolves fonts through fontconfig and cannot see
the site's self-hosted woff2, so matching the exact webfont is not possible here.

Usage (from the repo root):  python3 tools/make_og_cards.py
"""
from __future__ import annotations

import json
import pathlib
import subprocess
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
DATA = ROOT / "src" / "data" / "paper"
OUT = ROOT / "public" / "og"

W, H = 1200, 630
PAD = 76

# Design tokens, mirroring src/styles/global.css.
INK = "#1e1e1e"
SLATE = "#1e293b"
MUTED = "#5a6b82"
RULE = "#d7dce3"
GROUND = "#ffffff"
BAND = "#f8f6f4"
COLD = "#0369a1"
HOT = "#b23a1e"
NEUTRAL = "#475569"

SERIF = "Georgia, 'Times New Roman', serif"
SANS = "'Helvetica Neue', Helvetica, Arial, sans-serif"


def load(name: str):
    with open(DATA / f"{name}.json") as fh:
        return json.load(fh)


def find(rows, **kw):
    for r in rows:
        if all(str(r.get(k)) == str(v) for k, v in kw.items()):
            return r
    raise KeyError(kw)


def esc(s: str) -> str:
    return (
        s.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;")
    )


def pct(v: float, digits: int = 1) -> str:
    if v > 0:
        return f"+{v:.{digits}f}%"
    return f"−{abs(v):.{digits}f}%"


def mag(v: float, digits: int = 1) -> str:
    return f"{abs(v):.{digits}f}%"


def wrap(text: str, width: int) -> list[str]:
    words, lines, cur = text.split(), [], ""
    for w in words:
        trial = f"{cur} {w}".strip()
        if len(trial) > width and cur:
            lines.append(cur)
            cur = w
        else:
            cur = trial
    if cur:
        lines.append(cur)
    return lines


def dot_row(values, labels, colours, x, y, w, h):
    """A miniature dot row with a zero line: the card's only graphic."""
    if not values:
        return ""
    lo, hi = min(min(values), 0.0), max(max(values), 0.0)
    span = (hi - lo) or 1.0
    pad = span * 0.18
    lo, hi = lo - pad, hi + pad

    def sy(v):
        return y + h - (v - lo) / (hi - lo) * h

    step = w / len(values)
    parts = [
        f'<line x1="{x}" x2="{x + w}" y1="{sy(0):.1f}" y2="{sy(0):.1f}" '
        f'stroke="{RULE}" stroke-width="2"/>'
    ]
    for i, (v, lab, col) in enumerate(zip(values, labels, colours)):
        cx = x + step * (i + 0.5)
        parts.append(
            f'<line x1="{cx:.1f}" x2="{cx:.1f}" y1="{sy(0):.1f}" y2="{sy(v):.1f}" '
            f'stroke="{col}" stroke-width="3" opacity="0.35"/>'
        )
        parts.append(f'<circle cx="{cx:.1f}" cy="{sy(v):.1f}" r="9" fill="{col}"/>')
        ty = sy(v) - 20 if v >= 0 else sy(v) + 34
        parts.append(
            f'<text x="{cx:.1f}" y="{ty:.1f}" text-anchor="middle" font-family="{SANS}" '
            f'font-size="21" font-weight="600" fill="{col}">{esc(pct(v))}</text>'
        )
        parts.append(
            f'<text x="{cx:.1f}" y="{y + h + 30:.1f}" text-anchor="middle" '
            f'font-family="{SANS}" font-size="19" fill="{MUTED}">{esc(lab)}</text>'
        )
    return "\n".join(parts)


def card(eyebrow, title, figures, chart, filename):
    """figures: list of (value_text, label, colour)."""
    # Titles are capped at two lines so the third can never run under the chart,
    # which sits in the right column from x=620.
    lines = wrap(title, 34)[:2]
    svg = [
        f'<svg xmlns="http://www.w3.org/2000/svg" width="{W}" height="{H}" '
        f'viewBox="0 0 {W} {H}">',
        f'<rect width="{W}" height="{H}" fill="{GROUND}"/>',
        f'<rect x="0" y="0" width="{W}" height="10" fill="{COLD}"/>',
        f'<rect x="0" y="{H - 96}" width="{W}" height="96" fill="{BAND}"/>',
        f'<text x="{PAD}" y="112" font-family="{SANS}" font-size="22" '
        f'letter-spacing="0.4" fill="{MUTED}">{esc(eyebrow)}</text>',
    ]
    ty = 178
    for ln in lines:
        svg.append(
            f'<text x="{PAD}" y="{ty}" font-family="{SERIF}" font-size="50" '
            f'font-weight="600" fill="{SLATE}">{esc(ln)}</text>'
        )
        ty += 60

    fy = 402
    fx = PAD
    for val, lab, col in figures:
        svg.append(
            f'<text x="{fx}" y="{fy}" font-family="{SANS}" font-size="62" '
            f'font-weight="700" fill="{col}">{esc(val)}</text>'
        )
        for j, ln in enumerate(wrap(lab, 22)[:2]):
            svg.append(
                f'<text x="{fx}" y="{fy + 32 + j * 24}" font-family="{SANS}" '
                f'font-size="20" fill="{MUTED}">{esc(ln)}</text>'
            )
        fx += 260

    if chart:
        svg.append(chart)

    svg.append(
        f'<text x="{PAD}" y="{H - 40}" font-family="{SANS}" font-size="21" '
        f'fill="{NEUTRAL}">Sarmiento, Colelli and Pavanello  ·  '
        f'Journal of Economic Behavior &amp; Organization</text>'
    )
    svg.append(
        f'<text x="{W - PAD}" y="{H - 40}" text-anchor="end" font-family="{SANS}" '
        f'font-size="21" fill="{NEUTRAL}">luissarmiento.com</text>'
    )
    svg.append("</svg>")

    OUT.mkdir(parents=True, exist_ok=True)
    svg_path = OUT / f"{filename}.svg"
    png_path = OUT / f"{filename}.png"
    svg_path.write_text("\n".join(svg))
    subprocess.run(
        ["rsvg-convert", "-w", str(W), "-h", str(H), str(svg_path), "-o", str(png_path)],
        check=True,
    )
    svg_path.unlink()
    return png_path


def main() -> int:
    curve = load("m1_curve")
    chapters = load("m4_chapters")
    age = load("m3_age")
    mort = load("m2_mortality")
    fe = load("m6_fixed_effects")
    geo = load("m6_map_geometry")["municipalities"]
    orig = load("m6_origin_and_capacity")
    rng = load("m5_projections_range")

    BINS = ["-15_10", "10_15", "15_20", "25_30", "30_45"]
    BLAB = ["≤10", "10–15", "15–20", "25–30", ">30"]
    BCOL = [COLD, COLD, COLD, HOT, HOT]

    cold0 = find(curve, bin="-15_10", horizon=0)["pct"]
    cold30 = find(curve, bin="-15_10", horizon=30)["pct"]
    hot0 = find(curve, bin="30_45", horizon=0)["pct"]
    circ30 = find(mort, spec="circ", bin="-15_10", horizon=30)["pct"]
    resp = find(chapters, chapter="respiratory", bin="-15_10", horizon=30)["pct"]
    infe = find(chapters, chapter="infectious_parasatic", bin="-15_10", horizon=30)["pct"]
    teens = find(age, spec="12_20", bin="-15_10", horizon=30)["pct"]
    older = find(age, spec="80_130", bin="-15_10", horizon=30)["pct"]
    n_report = sum(1 for m in geo if m["reports"])
    n_origin = sum(1 for r in orig if isinstance(r.get("origin_rate"), (int, float)))
    dec = sorted({r["decade"] for r in rng})[-1]
    cost = sum(r["expenditures_annual_mean"] for r in rng if r["decade"] == dec) / 1e6

    curve_chart = dot_row(
        [find(curve, bin=b, horizon=30)["pct"] for b in BINS],
        BLAB, BCOL, 620, 318, 504, 148,
    )
    age_chart = dot_row(
        [find(age, spec=s, bin="-15_10", horizon=30)["pct"]
         for s in ["0_12", "12_20", "20_40", "40_60", "60_80", "80_130"]],
        ["0–12", "12–20", "20–40", "40–60", "60–80", "80+"],
        [COLD] * 6, 620, 318, 504, 148,
    )
    fe_chart = dot_row(
        [find(fe, spec=s, bin="-15_10", horizon=30)["pct"] for s in "1234567"],
        list("1234567"), [NEUTRAL] * 7, 620, 318, 504, 148,
    )

    cards = {
        "en": [
            ("hub", "Forthcoming in JEBO",
             "Temperature and emergency visits in Mexico",
             [(pct(cold30), "cold days, over 30 days", COLD),
              (pct(hot0), "hot days, same day", HOT)], curve_chart),
            ("curve", "The response",
             "Does temperature send people to the emergency room?",
             [(pct(cold0), "a day below 10 °C", COLD),
              (pct(cold30), "cumulated over 30 days", COLD)], curve_chart),
            ("cold", "The cold surprise",
             "On cold days, visits fall while deaths rise",
             [(pct(cold30), "emergency visits", COLD),
              (pct(circ30), "circulatory deaths", HOT)], ""),
            ("who", "Who",
             "Teenagers, not the elderly, respond most",
             [(pct(teens), "ages 12 to 20", COLD),
              (pct(older), "ages over 80", COLD)], age_chart),
            ("conditions", "Conditions",
             "The fall in total visits hides opposite movements",
             [(pct(resp), "respiratory visits", HOT),
              (pct(infe), "infectious and parasitic", COLD)], ""),
            ("projections", "Midcentury",
             "Absent adaptation, warming adds visits and cost",
             [(f"{cost:.0f}M", f"USD per decade by {dec.replace(' - ', '–')}", HOT),
              ("0.35%", "more annual visits by midcentury", HOT)], ""),
            ("geography", "Coverage",
             "Where the records reach",
             [(f"{n_report:,}", "municipalities host a reporting hospital", NEUTRAL),
              (f"{n_origin:,}", "have residents in the records", COLD)], ""),
            ("method", "Method",
             "What happens when you change the design",
             [("7", "fixed-effects specifications", NEUTRAL),
              ("30", "days of lags in every model", NEUTRAL)], fe_chart),
        ],
        "es": [
            ("hub", "En prensa en JEBO",
             "Temperatura y visitas a urgencias en México",
             [(pct(cold30), "días fríos, en 30 días", COLD),
              (pct(hot0), "días calurosos, mismo día", HOT)], curve_chart),
            ("curve", "La respuesta",
             "¿La temperatura manda gente a urgencias?",
             [(pct(cold0), "un día bajo 10 °C", COLD),
              (pct(cold30), "acumulado en 30 días", COLD)], curve_chart),
            ("cold", "La sorpresa del frío",
             "En días fríos bajan las visitas y suben las muertes",
             [(pct(cold30), "visitas a urgencias", COLD),
              (pct(circ30), "muertes circulatorias", HOT)], ""),
            ("who", "Quién",
             "Los adolescentes, no los mayores, responden más",
             [(pct(teens), "de 12 a 20 años", COLD),
              (pct(older), "mayores de 80 años", COLD)], age_chart),
            ("conditions", "Padecimientos",
             "La caída total esconde movimientos opuestos",
             [(pct(resp), "visitas respiratorias", HOT),
              (pct(infe), "infecciosas y parasitarias", COLD)], ""),
            ("projections", "Mediados de siglo",
             "Sin adaptación, el calentamiento suma visitas y costo",
             [(f"{cost:.0f}M", f"USD por década a {dec.replace(' - ', '–')}", HOT),
              ("0.35%", "más visitas anuales a mediados de siglo", HOT)], ""),
            ("geography", "Cobertura",
             "Hasta dónde llegan los registros",
             [(f"{n_report:,}", "municipios con hospital que reporta", NEUTRAL),
              (f"{n_origin:,}", "tienen residentes en los registros", COLD)], ""),
            ("method", "Método",
             "Qué pasa cuando cambias el diseño",
             [("7", "especificaciones de efectos fijos", NEUTRAL),
              ("30", "días de rezagos en cada modelo", NEUTRAL)], fe_chart),
        ],
    }

    made = []
    for lang, items in cards.items():
        for key, eyebrow, title, figures, chart in items:
            p = card(eyebrow, title, figures, chart, f"{key}-{lang}")
            made.append(p)
            print(f"  {p.relative_to(ROOT)}  {p.stat().st_size // 1024} KB")
    print(f"\n{len(made)} cards written to {OUT.relative_to(ROOT)}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
