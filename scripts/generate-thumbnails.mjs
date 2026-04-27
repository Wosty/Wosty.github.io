import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const sourceDir = path.join(__dirname, '../public/apollo');
const thumbDir = path.join(sourceDir, 'thumbs');
const MAX_WIDTH = 900;

const images = (await readdir(sourceDir)).filter(f => /\.(jpe?g|png|webp)$/i.test(f));
await mkdir(thumbDir, { recursive: true });

await Promise.all(images.map(async file => {
  const base = path.basename(file, path.extname(file));
  await sharp(path.join(sourceDir, file))
    .rotate()  // auto-rotate per EXIF orientation, then strip EXIF
    .resize({ width: MAX_WIDTH, withoutEnlargement: true })
    .jpeg({ quality: 78 })
    .toFile(path.join(thumbDir, `${base}.jpeg`));
  console.log(`  ${file} → thumbs/${base}.jpeg`);
}));

console.log(`Generated ${images.length} thumbnails.`);
