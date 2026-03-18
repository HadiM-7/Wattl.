"""
Build the Wave Wobble animated Wattl logo HTML file.
Reads the SVG, wraps letter paths in animated groups, and produces wave-animation.html.

Animation concept: "Wave Wobble"
  - Continuous looping animation (no intro/reveal)
  - All letters always visible
  - Each letter bobs up/down on a sine wave with phase offset
  - Creates a Mexican wave / ripple effect left to right
  - The dot also pulses (scale) in sync with its vertical motion
  - Tagline stays static

Technical note on the dot:
  The dot needs both translateY (wave bob) AND scale (pulse).
  Since CSS can only set one `transform` per animation, we use nested <g> elements:
  - Outer <g> handles the wave bob (translateY)
  - Inner <g> handles the scale pulse (scale around dot center)
"""

import xml.etree.ElementTree as ET

SVG_PATH = "C:/Projects/Wattl/inputs/branding/Logo.svg"
OUTPUT_PATH = "C:/Projects/Wattl/outputs/animated-logo/wave-animation.html"

# --- Wave parameters ---
WAVE_CYCLE = 2.0          # seconds for one full wave cycle
WAVE_AMPLITUDE = 20       # pixels of vertical displacement
PHASE_STEP = 0.25         # seconds of phase delay between adjacent letters
DOT_SCALE_MIN = 0.95      # dot scale at bottom of wave
DOT_SCALE_MAX = 1.08      # dot scale at top of wave

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

# Build letter group HTML
letter_groups_html = ""
for i, letter in enumerate(letters):
    shadow = path_data[letter["shadow_idx"]]
    fg = path_data[letter["fg_idx"]]
    group_id = letter["name"]

    if letter["name"] == "letter-dot":
        # Dot: nested groups — outer for wave bob, inner for scale pulse
        letter_groups_html += f'    <g class="letter-group wave-bob group-{group_id}" id="{group_id}">\n'
        letter_groups_html += f'      <g class="dot-pulse">\n'
        letter_groups_html += f'        <path d="{shadow["d"]}" fill="{shadow["fill"]}"/>\n'
        letter_groups_html += f'        <path d="{fg["d"]}" fill="{fg["fill"]}"/>\n'
        letter_groups_html += f'      </g>\n'
        letter_groups_html += f'    </g>\n'
    else:
        letter_groups_html += f'    <g class="letter-group wave-bob group-{group_id}" id="{group_id}">\n'
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

# Generate per-letter wave CSS — each letter gets its own animation-delay via negative delay
letter_css = ""
for i, letter in enumerate(letters):
    delay = i * PHASE_STEP
    letter_css += f"""
  .group-{letter['name']} {{
    animation: waveBob {WAVE_CYCLE}s ease-in-out -{delay}s infinite;
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

  /* Wave bob: smooth up-and-down motion */
  @keyframes waveBob {{
    0%, 100% {{ transform: translateY(0); }}
    50% {{ transform: translateY(-{WAVE_AMPLITUDE}px); }}
  }}

  /* Dot scale pulse: synced with wave bob (largest at peak = 50%)
     Uses translate-to-origin trick so scale happens around dot center */
  @keyframes dotPulse {{
    0%, 100% {{
      transform: translate({DOT_CX}px, {DOT_CY}px) scale({DOT_SCALE_MIN}) translate(-{DOT_CX}px, -{DOT_CY}px);
    }}
    50% {{
      transform: translate({DOT_CX}px, {DOT_CY}px) scale({DOT_SCALE_MAX}) translate(-{DOT_CX}px, -{DOT_CY}px);
    }}
  }}

{letter_css}

  /* Dot scale — applied to inner group, synced delay with the dot's wave bob
     Dot is letter index 5, so delay = 5 * PHASE_STEP = {(len(letters) - 1) * PHASE_STEP}s */
  .dot-pulse {{
    animation: dotPulse {WAVE_CYCLE}s ease-in-out -{(len(letters) - 1) * PHASE_STEP}s infinite;
  }}

  .tagline {{
    /* Tagline stays static */
  }}
</style>
</head>
<body>
<svg width="800" height="800" viewBox="0 0 800 800" fill="none" xmlns="http://www.w3.org/2000/svg">
  <rect width="800" height="800" fill="#FCE79E"/>

  <mask id="mask0_56_355" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="46" y="267" width="707" height="266">
    <path d="M753 267H46V532.927H753V267Z" fill="white"/>
  </mask>

  <g mask="url(#mask0_56_355)">
{letter_groups_html}  </g>

{tagline_html}
</svg>
</body>
</html>
"""

with open(OUTPUT_PATH, "w", encoding="utf-8") as f:
    f.write(html)

print(f"Written wave-animation.html ({len(html)} bytes) to {OUTPUT_PATH}")
