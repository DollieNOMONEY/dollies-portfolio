import sharp from 'sharp';
import fs from 'node:fs';
import path from 'node:path';

const directory = './public/';

if (!fs.existsSync(directory)) {
  console.error("Directory not found: " + directory);
  process.exit(1);
}

const files = fs.readdirSync(directory);

async function optimize() {
  for (const file of files) {
    if (file.match(/\.(jpe?g|png)$/i)) {
      const filePath = path.join(directory, file);
      const newFilePath = filePath.replace(/\.(jpe?g|png)$/i, '.webp');

      try {
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(newFilePath);
        console.log(`Converted: ${file} -> .webp`);
      } catch (err) {
        console.error(`Error with ${file}:`, err);
      }
    }
  }
}

optimize();