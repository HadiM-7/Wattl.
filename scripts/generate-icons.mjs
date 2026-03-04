import sharp from "sharp";
import { readFileSync, writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const logoPath = join(root, "public", "images", "Logo.svg");
const appDir = join(root, "src", "app");

async function generateIcons() {
  const svgBuffer = readFileSync(logoPath);

  // Generate favicon.ico (32x32 PNG - browsers accept PNG as .ico)
  await sharp(svgBuffer, { density: 300 })
    .resize(32, 32)
    .png()
    .toFile(join(appDir, "favicon.ico"));

  // Generate icon.png (192x192 for manifest / general use)
  await sharp(svgBuffer, { density: 300 })
    .resize(192, 192)
    .png()
    .toFile(join(appDir, "icon.png"));

  // Generate apple-icon.png (180x180 for Apple touch icon)
  await sharp(svgBuffer, { density: 300 })
    .resize(180, 180)
    .png()
    .toFile(join(appDir, "apple-icon.png"));

  console.log("Generated: favicon.ico, icon.png, apple-icon.png in src/app/");
}

generateIcons().catch(console.error);
