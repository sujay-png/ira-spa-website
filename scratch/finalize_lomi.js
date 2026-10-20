const sharp = require('c:/Users/HP/Desktop/ira-spa/ira-spa-website/node_modules/sharp');
const path = require('path');

async function processImage() {
  const imgPath = 'c:/Users/HP/Desktop/ira-spa/ira-spa-website/public/images/lomi-lomi.webp';
  const { data, info } = await sharp(imgPath).raw().toBuffer({ resolveWithObject: true });
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

  // 2. Clean the watermark badge (x: 610..width-1, y: 411..503)
  // We use column-wise smoothstep reconstruction + horizontal micro-smoothing + edge cross-fade
  const reconstructed = Buffer.from(buf);

  for (let x = 608; x < width; x++) {
    // Sample 5 pixels above y=411 and 5 pixels below y=503
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
      const s = t * t * (3 - 2 * t); // smoothstep
      const idx = (y * width + x) * channels;
      const noise = (Math.random() - 0.5) * 2.5;

      reconstructed[idx] = Math.min(255, Math.max(0, Math.round((1 - s) * topR + s * botR + noise)));
      reconstructed[idx+1] = Math.min(255, Math.max(0, Math.round((1 - s) * topG + s * botG + noise)));
      reconstructed[idx+2] = Math.min(255, Math.max(0, Math.round((1 - s) * topB + s * botB + noise)));
    }
  }

  // Horizontal micro-filter (radius 2) to eliminate any column striping
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

  // Cross-fade the transition boundaries so there is NO sharp seam anywhere:
  // Left seam: x: 608..618
  // Top seam: y: 408..414
  // Bottom seam: y: 500..506
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

  // Write clean image directly to public/images/lomi-lomi.webp
  await sharp(buf, { raw: { width, height, channels } })
    .webp({ quality: 92 })
    .toFile(imgPath);

  console.log('Successfully saved clean watermark-free image to public/images/lomi-lomi.webp');
}

processImage().catch(console.error);
