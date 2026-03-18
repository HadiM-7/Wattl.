/**
 * Capture frames from the wave-animation.html using Playwright.
 * Captures exactly one wave cycle (~2 seconds) at 20 FPS for a seamless loop.
 *
 * Since the wave animation is continuous/infinite (no intro phase),
 * we capture one full cycle starting from t=0. The animation is designed
 * to loop seamlessly — frame 0 and the hypothetical frame N would be identical,
 * so we capture frames 0..N-1 (excluding the duplicate last frame).
 */

import { chromium } from "playwright";
import path from "path";
import fs from "fs";

const HTML_PATH = path.resolve(__dirname, "wave-animation.html");
const FRAMES_DIR = path.resolve(__dirname, "wave-frames");
const FRAME_INTERVAL = 50; // ms between frames (20 FPS)
const CYCLE_DURATION = 2000; // ms — must match WAVE_CYCLE in the Python script
const FRAME_COUNT = CYCLE_DURATION / FRAME_INTERVAL; // 40 frames for one full cycle

async function captureFrames() {
  // Clean and create frames directory
  if (fs.existsSync(FRAMES_DIR)) {
    fs.rmSync(FRAMES_DIR, { recursive: true });
  }
  fs.mkdirSync(FRAMES_DIR, { recursive: true });

  console.log(`Capturing ${FRAME_COUNT} frames at ${FRAME_INTERVAL}ms intervals...`);
  console.log(`  Cycle duration: ${CYCLE_DURATION}ms`);
  console.log(`  HTML source: ${HTML_PATH}`);
  console.log(`  Output dir: ${FRAMES_DIR}`);

  const browser = await chromium.launch();
  const context = await browser.newContext({
    viewport: { width: 800, height: 800 },
    deviceScaleFactor: 1,
  });
  const page = await context.newPage();

  // Load the animation HTML
  await page.goto(`file:///${HTML_PATH.replace(/\\/g, "/")}`, {
    waitUntil: "domcontentloaded",
  });

  // Pause all animations immediately
  await page.evaluate(() => {
    document.getAnimations().forEach((anim) => {
      anim.pause();
    });
  });

  // Capture frames by setting currentTime on each animation
  for (let frame = 0; frame < FRAME_COUNT; frame++) {
    const timeMs = frame * FRAME_INTERVAL;

    await page.evaluate((t) => {
      document.getAnimations().forEach((anim) => {
        anim.currentTime = t;
      });
    }, timeMs);

    // Small wait for rendering to settle
    await page.waitForTimeout(20);

    const frameNum = String(frame).padStart(4, "0");
    await page.screenshot({
      path: path.join(FRAMES_DIR, `frame-${frameNum}.png`),
      type: "png",
    });

    if (frame % 10 === 0) {
      console.log(`  Frame ${frame}/${FRAME_COUNT} (t=${timeMs}ms)`);
    }
  }

  console.log(`Captured ${FRAME_COUNT} frames.`);
  await browser.close();
}

captureFrames().catch((err) => {
  console.error("Error capturing frames:", err);
  process.exit(1);
});
