"""
Compile captured PNG frames from the wave animation into animated GIFs.
Produces two sizes:
  - wave-profile-picture.gif  (250x250 for Gmail profile)
  - wave-email-signature.gif  (500x500 for email signature)
"""

import os
import sys
from PIL import Image

FRAMES_DIR = os.path.join(os.path.dirname(__file__), "wave-frames")
OUTPUT_DIR = os.path.dirname(__file__)
FRAME_INTERVAL = 50  # ms between frames (20 FPS)


def load_frames(size: tuple[int, int]) -> list[Image.Image]:
    """Load all frame PNGs, sorted, resize, and convert for GIF."""
    frame_files = sorted(
        f for f in os.listdir(FRAMES_DIR) if f.startswith("frame-") and f.endswith(".png")
    )

    if not frame_files:
        print("ERROR: No frame files found in", FRAMES_DIR)
        sys.exit(1)

    print(f"Found {len(frame_files)} frames, resizing to {size[0]}x{size[1]}...")

    frames = []
    for fname in frame_files:
        img = Image.open(os.path.join(FRAMES_DIR, fname)).convert("RGBA")
        resized = img.resize(size, Image.LANCZOS)
        bg = Image.new("RGB", size, (252, 231, 158))  # #FCE79E
        bg.paste(resized, mask=resized.split()[3])
        frames.append(bg)

    return frames


def compile_gif(frames: list[Image.Image], output_path: str, frame_duration: int,
                max_colors: int = 128):
    """Save frames as an optimized GIF."""
    print(f"Compiling GIF: {output_path}")
    print(f"  Frames: {len(frames)}, Duration per frame: {frame_duration}ms, Colors: {max_colors}")

    # Quantize each frame with reduced color count for smaller size
    quantized_frames = []
    for frame in frames:
        q = frame.quantize(
            colors=max_colors,
            method=Image.MEDIANCUT,
            dither=Image.FLOYDSTEINBERG,
        )
        quantized_frames.append(q)

    # All frames get the same duration
    quantized_frames[0].save(
        output_path,
        save_all=True,
        append_images=quantized_frames[1:],
        duration=frame_duration,
        loop=0,
        optimize=True,
    )

    file_size = os.path.getsize(output_path)
    print(f"  Output size: {file_size / 1024:.1f} KB")


def main():
    # Profile picture: 250x250, fewer colors for smaller file
    frames_250 = load_frames((250, 250))
    compile_gif(
        frames_250,
        os.path.join(OUTPUT_DIR, "wave-profile-picture.gif"),
        FRAME_INTERVAL,
        max_colors=96,
    )

    # Email signature: 500x500, more colors for quality
    frames_500 = load_frames((500, 500))
    compile_gif(
        frames_500,
        os.path.join(OUTPUT_DIR, "wave-email-signature.gif"),
        FRAME_INTERVAL,
        max_colors=128,
    )

    print("\nDone! GIFs saved to:")
    print(f"  {os.path.join(OUTPUT_DIR, 'wave-profile-picture.gif')}")
    print(f"  {os.path.join(OUTPUT_DIR, 'wave-email-signature.gif')}")


if __name__ == "__main__":
    main()
