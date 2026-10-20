const sharp = require('sharp');
const path = require('path');

async function processImage() {
  const fs = require('fs');
  const imgPath = path.resolve('public/images/lomi-lomi.webp');
  const fileBytes = fs.readFileSync(imgPath);
  const { data, info } = await sharp(fileBytes).raw().toBuffer({ resolveWithObject: true });
  const { width, height, channels } = info;
  const buf = Buffer.from(data);

  // 1. Remove bottom-left asset number (x: 10..92, y: 653..670)
  for (let y = 653; y <= 670; y++) {
    const ty = (y - 653) / (670 - 653);
    for (let x = 10; x <= 92; x++) {
      const topIdx = (651 * width + x) * channels;
      const botIdx = (672 * width + x) * channels;
      const idx = (y * width + x) * channels;
      const noise = (Math.random() - 0.5) * 2;
      for (let c = 0; c < 3; c++) {
        const val = (1 - ty) * buf[topIdx + c] + ty * buf[botIdx + c] + noise;
        buf[idx + c] = Math.min(255, Math.max(0, Math.round(val)));
      }
    }
  }

  // 2. Clean the watermark badge (x: 608..width-1, y: 410..504)
  const reconstructed = Buffer.from(buf);

  for (let x = 608; x < width; x++) {
    let topR = 0, topG = 0, topB = 0;
    let botR = 0, botG = 0, botB = 0;
    for (let k = 0; k < 5; k++) {
      const tIdx = ((405 + k) * width + x) * channels;
      const bIdx = ((504 + k) * width + x) * channels;
      topR += buf[tIdx]; topG += buf[tIdx+1]; topB += buf[tIdx+2];
      botR += buf[bIdx]; botG += buf[bIdx+1]; botB += buf[bIdx+2];
    }
    topR /= 5; topG /= 5; topB /= 5;
    botR /= 5; botG /= 5; botB /= 5;

    for (let y = 410; y <= 504; y++) {
      const t = (y - 410) / (504 - 410);
      const s = t * t * (3 - 2 * t);
      const idx = (y * width + x) * channels;
      const noise = (Math.random() - 0.5) * 2.5;

      reconstructed[idx] = Math.min(255, Math.max(0, Math.round((1 - s) * topR + s * botR + noise)));
      reconstructed[idx+1] = Math.min(255, Math.max(0, Math.round((1 - s) * topG + s * botG + noise)));
      reconstructed[idx+2] = Math.min(255, Math.max(0, Math.round((1 - s) * topB + s * botB + noise)));
    }
  }

  const temp = Buffer.from(reconstructed);
  for (let y = 410; y <= 504; y++) {
    for (let x = 612; x < width - 2; x++) {
      let r = 0, g = 0, b = 0, count = 0;
      for (let dx = -2; dx <= 2; dx++) {
        const idx = (y * width + (x + dx)) * channels;
        r += temp[idx]; g += temp[idx+1]; b += temp[idx+2]; count++;
      }
      const idx = (y * width + x) * channels;
      reconstructed[idx] = Math.round(r / count);
      reconstructed[idx+1] = Math.round(g / count);
      reconstructed[idx+2] = Math.round(b / count);
    }
  }

  for (let y = 408; y <= 506; y++) {
    for (let x = 608; x < width; x++) {
      let alphaX = 1;
      if (x < 618) {
        alphaX = (x - 608) / 10;
        alphaX = alphaX * alphaX * (3 - 2 * alphaX);
      }
      let alphaY = 1;
      if (y < 414) {
        alphaY = (y - 408) / 6;
        alphaY = alphaY * alphaY * (3 - 2 * alphaY);
      } else if (y > 500) {
        alphaY = (506 - y) / 6;
        alphaY = alphaY * alphaY * (3 - 2 * alphaY);
      }

      const blend = alphaX * alphaY;
      const idx = (y * width + x) * channels;

      buf[idx] = Math.round((1 - blend) * data[idx] + blend * reconstructed[idx]);
      buf[idx+1] = Math.round((1 - blend) * data[idx+1] + blend * reconstructed[idx+1]);
      buf[idx+2] = Math.round((1 - blend) * data[idx+2] + blend * reconstructed[idx+2]);
    }
  }

  const cleanBuffer = await sharp(buf, { raw: { width, height, channels } })
    .webp({ quality: 92 })
    .toBuffer();

  fs.writeFileSync(imgPath, cleanBuffer);
  console.log('CLEAN_COMPLETE');
}

processImage().catch(console.error);
