"""
Build the animated Wattl logo HTML file.
Reads the SVG, wraps letter paths in animated groups, and produces animation.html.

Animation concept:
  1. Intro (~1.5s): Letters flicker in one-by-one, neon sign style
  2. Hold + Pulse (~3s): Dot pulses with electric spark/particle effects
  3. Seamless loop back to intro
"""

import xml.etree.ElementTree as ET
import math

SVG_PATH = "C:/Projects/Wattl/inputs/branding/Logo.svg"
OUTPUT_PATH = "C:/Projects/Wattl/outputs/animated-logo/animation.html"

# Parse original SVG
tree = ET.parse(SVG_PATH)
root = tree.getroot()
ns = "http://www.w3.org/2000/svg"
ET.register_namespace("", ns)

# Extract paths from the mask group
mask_g = root.find(f".//{{{ns}}}g[@mask]")
paths_in_mask = list(mask_g.findall(f"{{{ns}}}path"))

# Letter grouping: shadow (blue #003CA7) + foreground (#FFFFF3 or #FFC600)
letters = [
    {"name": "letter-w",   "shadow_idx": 0, "fg_idx": 6},
    {"name": "letter-a",   "shadow_idx": 1, "fg_idx": 7},
    {"name": "letter-t1",  "shadow_idx": 2, "fg_idx": 8},
    {"name": "letter-t2",  "shadow_idx": 3, "fg_idx": 9},
    {"name": "letter-l",   "shadow_idx": 4, "fg_idx": 10},
    {"name": "letter-dot", "shadow_idx": 5, "fg_idx": 11},
]

path_data = []
for p in paths_in_mask:
    path_data.append({
        "d": p.attrib["d"],
        "fill": p.attrib.get("fill", "none"),
    })

# Get tagline path
tagline_path = None
for child in root:
    if child.tag == f"{{{ns}}}path" and child.attrib.get("fill") == "#208334":
        tagline_path = {
            "d": child.attrib["d"],
            "fill": child.attrib.get("fill", "none"),
        }

# Dot center (from bounding box analysis: x=[675.6, 723.2], y=[432.7, 478.4])
DOT_CX = 699.4
DOT_CY = 455.6

LETTER_DELAYS = [0.1, 0.3, 0.5, 0.7, 0.9, 1.1]
TAGLINE_DELAY = 1.3
TOTAL_DURATION = 4.5

# Generate per-spark keyframes (no CSS custom properties for reliability)
spark_keyframes = ""
spark_elements = ""
spark_styles = ""

# Outer sparks: 8 lines radiating outward
spark_configs = []
for j in range(8):
    angle = (2 * math.pi * j) / 8
    travel = 40
    tx = math.cos(angle) * travel
    ty = math.sin(angle) * travel
    x1 = DOT_CX + math.cos(angle) * 14
    y1 = DOT_CY + math.sin(angle) * 14
    x2 = DOT_CX + math.cos(angle) * 24
    y2 = DOT_CY + math.sin(angle) * 24
    delay = 1.7 + (j * 0.08)
    spark_configs.append({
        "id": f"spark-{j}",
        "x1": x1, "y1": y1, "x2": x2, "y2": y2,
        "tx": tx, "ty": ty,
        "delay": delay,
        "duration": 0.55,
        "stroke": "#FFC600",
        "stroke_width": 3,
        "tag": "line",
    })

# Inner sparks: 8 smaller, faster, offset angle
for j in range(8):
    angle = (2 * math.pi * j) / 8 + (math.pi / 8)
    travel = 28
    tx = math.cos(angle) * travel
    ty = math.sin(angle) * travel
    x1 = DOT_CX + math.cos(angle) * 8
    y1 = DOT_CY + math.sin(angle) * 8
    x2 = DOT_CX + math.cos(angle) * 16
    y2 = DOT_CY + math.sin(angle) * 16
    delay = 1.9 + (j * 0.09)
    spark_configs.append({
        "id": f"spark-inner-{j}",
        "x1": x1, "y1": y1, "x2": x2, "y2": y2,
        "tx": tx, "ty": ty,
        "delay": delay,
        "duration": 0.4,
        "stroke": "#FFFFF3",
        "stroke_width": 2.2,
        "tag": "line",
    })

# Dot-shaped particles
for j in range(6):
    angle = (2 * math.pi * j) / 6 + (math.pi / 6)
    travel = 35
    tx = math.cos(angle) * travel
    ty = math.sin(angle) * travel
    cx = DOT_CX + math.cos(angle) * 6
    cy = DOT_CY + math.sin(angle) * 6
    delay = 2.1 + (j * 0.15)
    spark_configs.append({
        "id": f"spark-dot-{j}",
        "cx": cx, "cy": cy, "r": 2.5,
        "tx": tx, "ty": ty,
        "delay": delay,
        "duration": 0.65,
        "fill": "#FFC600",
        "tag": "circle",
    })

# Generate unique keyframes per spark
for cfg in spark_configs:
    sid = cfg["id"]
    tx = cfg["tx"]
    ty = cfg["ty"]

    spark_keyframes += f"""
  @keyframes {sid}-move {{
    0%   {{ opacity: 0.95; transform: translate(0, 0); }}
    20%  {{ opacity: 0.9; }}
    100% {{ opacity: 0; transform: translate({tx:.1f}px, {ty:.1f}px); }}
  }}
"""
    spark_styles += f"""
  #{sid} {{
    opacity: 0;
    animation: {sid}-move {cfg['duration']}s ease-out {cfg['delay']}s infinite;
  }}
"""

    if cfg["tag"] == "line":
        spark_elements += (
            f'  <line id="{sid}" '
            f'x1="{cfg["x1"]:.1f}" y1="{cfg["y1"]:.1f}" '
            f'x2="{cfg["x2"]:.1f}" y2="{cfg["y2"]:.1f}" '
            f'stroke="{cfg["stroke"]}" stroke-width="{cfg["stroke_width"]}" '
            f'stroke-linecap="round" opacity="0"/>\n'
        )
    elif cfg["tag"] == "circle":
        spark_elements += (
            f'  <circle id="{sid}" '
            f'cx="{cfg["cx"]:.1f}" cy="{cfg["cy"]:.1f}" r="{cfg["r"]}" '
            f'fill="{cfg["fill"]}" opacity="0"/>\n'
        )

# Build letter group HTML
letter_groups_html = ""
for i, letter in enumerate(letters):
    shadow = path_data[letter["shadow_idx"]]
    fg = path_data[letter["fg_idx"]]
    group_id = letter["name"]
    letter_groups_html += f'    <g class="letter-group group-{group_id}" id="{group_id}">\n'
    letter_groups_html += f'      <path d="{shadow["d"]}" fill="{shadow["fill"]}"/>\n'
    letter_groups_html += f'      <path d="{fg["d"]}" fill="{fg["fill"]}"/>\n'
    letter_groups_html += f'    </g>\n'

# Build tagline HTML
tagline_html = ""
if tagline_path:
    tagline_html = (
        f'  <g class="tagline" id="tagline">\n'
        f'    <path d="{tagline_path["d"]}" fill="{tagline_path["fill"]}"/>\n'
        f'  </g>\n'
    )

# Letter-specific animation CSS
letter_css = ""
for i, letter in enumerate(letters):
    delay = LETTER_DELAYS[i]
    if letter["name"] == "letter-dot":
        letter_css += f"""
  .group-{letter['name']} {{
    animation:
      flickerIn 0.4s ease-out {delay}s forwards,
      dotPulse 0.7s ease-in-out 1.6s infinite;
  }}
"""
    else:
        letter_css += f"""
  .group-{letter['name']} {{
    animation: flickerIn 0.35s ease-out {delay}s forwards;
  }}
"""

# Assemble the final HTML
html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
  * {{ margin: 0; padding: 0; }}
  body {{
    width: 800px;
    height: 800px;
    overflow: hidden;
    background: #FCE79E;
  }}
  svg {{
    width: 800px;
    height: 800px;
    overflow: visible;
  }}

  .letter-group {{
    opacity: 0;
  }}

  .tagline {{
    opacity: 0;
  }}

  /* Neon-sign flicker-in: letter appears with electric flashes */
  @keyframes flickerIn {{
    0%   {{ opacity: 0; filter: brightness(1); }}
    12%  {{ opacity: 0.9; filter: brightness(3.5) saturate(0); }}
    20%  {{ opacity: 0.15; filter: brightness(1); }}
    35%  {{ opacity: 1; filter: brightness(2.8) saturate(0.1); }}
    45%  {{ opacity: 0.4; filter: brightness(1.1); }}
    58%  {{ opacity: 1; filter: brightness(2.2) saturate(0.3); }}
    70%  {{ opacity: 0.75; filter: brightness(1.2); }}
    82%  {{ opacity: 1; filter: brightness(1.5) saturate(0.7); }}
    100% {{ opacity: 1; filter: brightness(1) saturate(1); }}
  }}

  @keyframes fadeIn {{
    0%   {{ opacity: 0; }}
    100% {{ opacity: 1; }}
  }}

  /* Dot pulse: scale from center of the dot */
  @keyframes dotPulse {{
    0%   {{ transform: translate({DOT_CX}px, {DOT_CY}px) scale(1) translate(-{DOT_CX}px, -{DOT_CY}px);
           filter: brightness(1); }}
    50%  {{ transform: translate({DOT_CX}px, {DOT_CY}px) scale(1.22) translate(-{DOT_CX}px, -{DOT_CY}px);
           filter: brightness(1.3); }}
    100% {{ transform: translate({DOT_CX}px, {DOT_CY}px) scale(1) translate(-{DOT_CX}px, -{DOT_CY}px);
           filter: brightness(1); }}
  }}

  /* Dot glow ring pulse */
  @keyframes glowPulse {{
    0%   {{ opacity: 0; r: 20; }}
    15%  {{ opacity: 0.5; }}
    50%  {{ opacity: 0.35; r: 32; }}
    100% {{ opacity: 0; r: 38; }}
  }}

{letter_css}

  .tagline {{
    animation: fadeIn 0.5s ease-out {TAGLINE_DELAY}s forwards;
  }}

  /* Glow ring around dot */
  #dot-glow {{
    animation: glowPulse 0.7s ease-in-out 1.6s infinite;
  }}

  /* Per-spark animations */
{spark_keyframes}
{spark_styles}
</style>
</head>
<body>
<svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="800" fill="#FCE79E"/>

  <defs>
    <filter id="glow-filter" x="-100%" y="-100%" width="300%" height="300%">
      <feGaussianBlur stdDeviation="6" result="blur"/>
      <feComposite in="SourceGraphic" in2="blur" operator="over"/>
    </filter>
  </defs>

  <mask id="mask0_56_355" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="46" y="267" width="707" height="266">
    <path d="M753 267H46V532.927H753V267Z" fill="white"/>
  </mask>

  <g mask="url(#mask0_56_355)">
{letter_groups_html}  </g>

{tagline_html}
  <!-- Glow ring behind sparks -->
  <circle id="dot-glow" cx="{DOT_CX}" cy="{DOT_CY}" r="20"
    fill="none" stroke="#FFC600" stroke-width="3" opacity="0"
    filter="url(#glow-filter)"/>

  <!-- Spark particles -->
{spark_elements}
</svg>

<script>
const TOTAL_DURATION = {int(TOTAL_DURATION * 1000)};

function resetAndPlay() {{
  // Get all animated elements
  const allAnimated = document.querySelectorAll(
    '.letter-group, .tagline, #dot-glow, [id^="spark"]'
  );

  // Reset: remove animation, force reflow, re-apply
  allAnimated.forEach(el => {{
    el.style.animation = 'none';
  }});

  // Force reflow
  document.body.offsetHeight;

  // Re-apply: remove the override so CSS rules take effect again
  allAnimated.forEach(el => {{
    el.style.animation = '';
  }});
}}

// Initial play is handled by CSS
// Loop: restart after full duration
setInterval(() => {{
  resetAndPlay();
}}, TOTAL_DURATION);
</script>
</body>
</html>
"""

with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    f.write(html)

print(f"Written animation.html ({len(html)} bytes) to {OUTPUT_PATH}")
