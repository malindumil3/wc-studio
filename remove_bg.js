const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'public', 'WC LOGO.jpg');
const outputPath = path.join(__dirname, 'public', 'logo.png');

sharp(inputPath)
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true })
  .then(({ data, info }) => {
    const { width, height, channels } = info;
    for (let i = 0; i < data.length; i += channels) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      // If the pixel is close to white, make it transparent
      if (r > 220 && g > 220 && b > 220) {
        data[i + 3] = 0; // set alpha to 0
      }
    }
    return sharp(data, { raw: { width, height, channels } })
      .png()
      .toFile(outputPath);
  })
  .then(() => console.log('Done! Saved logo.png with transparent background.'))
  .catch(err => console.error('Error:', err));
