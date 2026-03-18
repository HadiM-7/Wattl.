/**
 * Capture frames from the animated logo HTML using Playwright.
 * Captures at 50ms intervals for a smooth GIF (20 FPS).
 */

import { chromium } from "playwright";
import path from "path";
import fs from "fs";

const HTML_PATH = path.resolve(__dirname, "animation.html");
const FRAMES_DIR = path.resolve(__dirname, "frames");
const FRAME_INTERVAL = 50; // ms between frames
const TOTAL_DURATION = 4500; // total animation duration in ms
const FRAME_COUNT = Math.ceil(TOTAL_DURATION / FRAME_INTERVAL); // 90 frames

async function captureFrames() {
  // Clean and create frames directory
  if (fs.existsSync(FRAMES_DIR)) {
    fs.rmSync(FRAMES_DIR, { recursive: true });
  }
  fs.mkdirSync(FRAMES_DIR, { recursive: true });

  console.log(`Capturing ${FRAME_COUNT} frames at ${FRAME_INTERVAL}ms intervals...`);
  console.log(`HTML source: ${HTML_PATH}`);
  console.log(`Output dir: ${FRAMES_DIR}`);

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

  // We need to control the animation timing precisely.
  // Instead of real-time capture, we'll use requestAnimationFrame stepping.
  // But CSS animations run on real time. So we'll use a different approach:
  // Override the animation state by manually controlling time via JS.

  // Strategy: Pause all animations, then for each frame, set the
  // animation timeline position and screenshot.

  // First, disable the setInterval loop in the page
  await page.evaluate(() => {
    // Clear all intervals to prevent the loop from restarting animations
    const highestId = window.setInterval(() => {}, 0);
    for (let i = 0; i <= highestId; i++) {
      window.clearInterval(i);
    }
  });

  // Pause all animations
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
