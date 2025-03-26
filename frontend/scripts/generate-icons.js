const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure the public directory exists
const publicDir = path.join(__dirname, '../public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// Create a base SVG icon
const svgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Background circle -->
  <circle cx="256" cy="256" r="256" fill="#1a73e8"/>
  
  <!-- Shield shape -->
  <path d="M256 64L128 128V256C128 384 256 448 256 448C256 448 384 384 384 256V128L256 64Z" fill="white"/>
  
  <!-- News lines -->
  <rect x="160" y="200" width="192" height="16" rx="4" fill="#1a73e8"/>
  <rect x="160" y="240" width="192" height="16" rx="4" fill="#1a73e8"/>
  <rect x="160" y="280" width="192" height="16" rx="4" fill="#1a73e8"/>
</svg>
`;

// Save the SVG file
fs.writeFileSync(path.join(publicDir, 'icon.svg'), svgIcon);

// Generate PNG icons
const sizes = [192, 512];
sizes.forEach(size => {
  sharp(path.join(publicDir, 'icon.svg'))
    .resize(size, size)
    .png()
    .toFile(path.join(publicDir, `pwa-${size}x${size}.png`));
});

// Generate favicon.ico (32x32)
sharp(path.join(publicDir, 'icon.svg'))
  .resize(32, 32)
  .toFile(path.join(publicDir, 'favicon.ico'));

// Generate apple-touch-icon.png (180x180)
sharp(path.join(publicDir, 'icon.svg'))
  .resize(180, 180)
  .png()
  .toFile(path.join(publicDir, 'apple-touch-icon.png'));

// Create masked-icon.svg (monochrome version)
const maskedSvgIcon = `
<svg width="512" height="512" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Shield shape -->
  <path d="M256 64L128 128V256C128 384 256 448 256 448C256 448 384 384 384 256V128L256 64Z" fill="black"/>
  
  <!-- News lines -->
  <rect x="160" y="200" width="192" height="16" rx="4" fill="white"/>
  <rect x="160" y="240" width="192" height="16" rx="4" fill="white"/>
  <rect x="160" y="280" width="192" height="16" rx="4" fill="white"/>
</svg>
`;

fs.writeFileSync(path.join(publicDir, 'masked-icon.svg'), maskedSvgIcon);

console.log('Icons generated successfully!'); 