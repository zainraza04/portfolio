import { writeFileSync, mkdirSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
import sharp from "sharp";
import toIco from "to-ico";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");
const appDir = join(__dirname, "..", "src", "app");

const BG = "#0a0a0f";
const PURPLE = "#a855f7";
const GLOW = "#7c3aed";

function iconSvg(size, radiusRatio = 0.22) {
  const r = Math.round(size * radiusRatio);
  const fontSize = Math.round(size * 0.38);
  const x = Math.round(size * 0.22);
  const y = Math.round(size * 0.62);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <defs>
    <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
      <feGaussianBlur stdDeviation="${Math.max(1, size * 0.025)}" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="${size}" height="${size}" rx="${r}" fill="${BG}"/>
  <text
    x="${x}"
    y="${y}"
    font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    font-size="${fontSize}"
    font-weight="700"
    fill="${PURPLE}"
    filter="url(#glow)"
  >&gt; _</text>
</svg>`;
}

function ogSvg() {
  const w = 1200;
  const h = 630;
  const iconSize = 180;
  const ix = (w - iconSize) / 2;
  const iy = (h - iconSize) / 2 - 20;

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <defs>
    <pattern id="dots" width="24" height="24" patternUnits="userSpaceOnUse">
      <circle cx="12" cy="12" r="1" fill="${PURPLE}" opacity="0.18"/>
    </pattern>
    <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
      <feGaussianBlur stdDeviation="3" result="blur"/>
      <feMerge>
        <feMergeNode in="blur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  <rect width="${w}" height="${h}" fill="${BG}"/>
  <rect width="${w}" height="${h}" fill="url(#dots)"/>
  <rect x="${ix}" y="${iy}" width="${iconSize}" height="${iconSize}" rx="40" fill="${BG}" stroke="${GLOW}" stroke-width="2" opacity="0.9"/>
  <text
    x="${ix + 36}"
    y="${iy + 118}"
    font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    font-size="68"
    font-weight="700"
    fill="${PURPLE}"
    filter="url(#glow)"
  >&gt; _</text>
  <text
    x="${w / 2}"
    y="${iy + iconSize + 72}"
    text-anchor="middle"
    font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    font-size="36"
    font-weight="700"
    fill="#e2e8f0"
  >Zain Raza</text>
  <text
    x="${w / 2}"
    y="${iy + iconSize + 118}"
    text-anchor="middle"
    font-family="ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace"
    font-size="22"
    fill="#94a3b8"
  >Full Stack Engineer</text>
</svg>`;
}

async function renderSvg(svg, width, height = width) {
  return sharp(Buffer.from(svg)).resize(width, height).png().toBuffer();
}

async function main() {
  mkdirSync(publicDir, { recursive: true });
  mkdirSync(appDir, { recursive: true });

  const icon32 = await renderSvg(iconSvg(32), 32);
  const icon16 = await renderSvg(iconSvg(16), 16);
  const icon180 = await renderSvg(iconSvg(180), 180);
  const ogImage = await renderSvg(ogSvg(), 1200, 630);
  const faviconIco = await toIco([icon16, icon32]);

  // public/ — static assets & OG image
  writeFileSync(join(publicDir, "icon.png"), icon32);
  writeFileSync(join(publicDir, "apple-touch-icon.png"), icon180);
  writeFileSync(join(publicDir, "og-image.png"), ogImage);
  writeFileSync(join(publicDir, "favicon.ico"), faviconIco);

  // src/app/ — Next.js App Router file-based metadata (takes precedence)
  writeFileSync(join(appDir, "favicon.ico"), faviconIco);
  writeFileSync(join(appDir, "icon.png"), icon32);
  writeFileSync(join(appDir, "apple-icon.png"), icon180);

  console.log(
    "Generated favicons in public/ and src/app/ (app/ overrides default Next.js favicon)",
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
