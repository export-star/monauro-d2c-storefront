import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const sourceDirectories = [
  "public/images/products/recoveryair-calf-pro/mc06-refresh",
  "public/images/products/recoveryair-leg-elite/page-assets",
  "public/images/products/relaxiwave-eye-mask/page-assets",
  "public/images/products/back-massage-gun/page-assets",
];

const outputDirectory = "shopify-theme/assets";
const imagePattern = /\.(png|jpe?g)$/i;

fs.mkdirSync(outputDirectory, { recursive: true });

for (const sourceDirectory of sourceDirectories) {
  const files = fs.readdirSync(sourceDirectory).filter((file) => imagePattern.test(file));

  for (const file of files) {
    const outputName = file.replace(imagePattern, ".webp");
    const outputPath = path.join(outputDirectory, outputName);

    await sharp(path.join(sourceDirectory, file))
      .rotate()
      .resize({
        width: 1800,
        height: 1800,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({
        quality: 72,
        alphaQuality: 82,
        effort: 5,
        smartSubsample: true,
      })
      .toFile(outputPath);
  }
}

const totalBytes = fs
  .readdirSync(outputDirectory)
  .filter((file) => file.endsWith(".webp"))
  .reduce((total, file) => total + fs.statSync(path.join(outputDirectory, file)).size, 0);

console.log(`Prepared product media: ${(totalBytes / 1024 / 1024).toFixed(2)} MB`);
