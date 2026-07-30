import assert from "node:assert/strict";
import { readFile, stat } from "node:fs/promises";

const root = new URL("../", import.meta.url);
const [hero, layout, script, styles, header, footer] = await Promise.all([
  readFile(new URL("shopify-theme/sections/monauro-hero-video.liquid", root), "utf8"),
  readFile(new URL("shopify-theme/layout/theme.liquid", root), "utf8"),
  readFile(new URL("shopify-theme/assets/monauro-theme.js", root), "utf8"),
  readFile(new URL("shopify-theme/assets/monauro-theme.css", root), "utf8"),
  readFile(new URL("shopify-theme/sections/monauro-header.liquid", root), "utf8"),
  readFile(new URL("shopify-theme/sections/monauro-footer.liquid", root), "utf8"),
]);
const heroVideo = await stat(
  new URL("shopify-theme/assets/home-hero-01-mobile.mp4", root),
);

assert.ok(heroVideo.size <= 1_200_000, `Hero video is ${heroVideo.size} bytes`);
assert.match(layout, /home-calf-pro\.png' \| asset_url \| preload_tag: as: 'image'/);
assert.match(hero, /class="hero-poster"/);
assert.match(hero, /fetchpriority="high"/);
assert.match(hero, /data-hero-video/);
assert.match(hero, /preload="none"/);
assert.match(hero, /data-src="[^"]*home-hero-01\.mp4/);
assert.doesNotMatch(hero, /<source\s+src="[^"]*home-hero-01\.mp4/);
assert.match(script, /navigator\.connection\?\.saveData/);
assert.match(script, /prefers-reduced-motion/);
assert.match(script, /requestIdleCallback/);
assert.match(styles, /\.hero-poster/);
assert.match(styles, /\.hero-video\.is-ready/);
assert.match(header, /monauro-logo-horizontal\.png/);
assert.match(header, /<picture>/);
assert.match(header, /monauro-logo-mark\.png/);
assert.doesNotMatch(header, /<span>MONAURO<\/span>/);
assert.match(footer, /monauro-logo-horizontal\.png/);

console.log("Shopify performance checks passed.");
