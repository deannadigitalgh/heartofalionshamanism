// @ts-check
/**
 * Generate Static Open Graph Image for Heart Of A Lion Shamanism
 * Run with: node scripts/generate-static-og-image.cjs
 */
import { createCanvas } from 'canvas';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration
const width = 1200;
const height = 630;
const outputPath = path.join(__dirname, '../public/heart-of-lion-og.jpg');

console.log('🦁 Generating static Open Graph image for Heart Of A Lion Shamanism...\n');

// Create canvas
const canvas = createCanvas(width, height);
const ctx = canvas.getContext('2d');

// Background gradient (deep red to gold)
const gradient = ctx.createLinearGradient(0, 0, width, height);
gradient.addColorStop(0, '#6B1530');   // Darkest red
gradient.addColorStop(0.5, '#8B1E3F'); // Primary brand color
gradient.addColorStop(1, '#D4AF37');   // Gold accent
ctx.fillStyle = gradient;
ctx.fillRect(0, 0, width, height);

// Add subtle texture overlay (optional - creates depth)
ctx.globalAlpha = 0.1;
for (let i = 0; i < 50; i++) {
  const x = Math.random() * width;
  const y = Math.random() * height;
  const radius = Math.random() * 20 + 10;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fillStyle = '#FFFFFF';
  ctx.fill();
}
ctx.globalAlpha = 1.0;

// Add lion silhouette (simplified - using text emoji as placeholder)
const lionEmoji = '🦁';
ctx.font = '300px serif';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillStyle = 'rgba(255, 255, 255, 0.1)';
lionEmoji && ctx.fillText(lionEmoji, width / 2 + 300, height / 2 - 80);

// Main title: "Heart Of A Lion Shamanism"
ctx.font = 'bold 72px Georgia, serif';
ctx.fillStyle = '#FFFFFF';
const mainTitle = 'Heart Of A Lion Shamanism';
const titleWidth = ctx.measureText(mainTitle).width;
ctx.fillText(
  mainTitle,
  width / 2 - (titleWidth * 0.1), // Offset slightly left for balance
  height / 2 - 60
);

// Subtitle: "Deanna Stennett, L.Ac., MA"
ctx.font = 'italic 32px Georgia, serif';
const subtitle = 'Shamanic Practitioner & Teacher | Licensed Acupuncturist';
const subtitleWidth = ctx.measureText(subtitle).width;
ctx.fillText(
  subtitle,
  width / 2 - (subtitleWidth * 0.1), // Offset slightly left
  height / 2 + 30
);

// Tagline with gold accent
ctx.font = 'bold 24px Helvetica, Arial, sans-serif';
const tagline = 'Shamanic Healing • Workshops • Northern Georgia';
const taglineWidth = ctx.measureText(tagline).width;
ctx.fillStyle = '#D4AF37'; // Gold color for emphasis
ctx.fillText(
  tagline,
  width / 2 - (taglineWidth * 0.1), // Offset slightly left
  height / 2 + 95
);

// Bottom bar with website URL
const bottomBarHeight = 60;
const bottomGradient = ctx.createLinearGradient(0, height - bottomBarHeight, width, height);
bottomGradient.addColorStop(0, 'rgba(139, 30, 63, 0.8)');
bottomGradient.addColorStop(1, 'rgba(212, 175, 55, 0.8)');
ctx.fillStyle = bottomGradient;
ctx.fillRect(0, height - bottomBarHeight + 4, width, bottomBarHeight);

// Website URL in white on gold bar
const websiteUrl = 'heartofalionshamanism.com';
ctx.font = 'bold 28px Helvetica, Arial, sans-serif';
ctx.fillStyle = '#FFFFFF';
const urlWidth = ctx.measureText(websiteUrl).width;
ctx.fillText(
  websiteUrl,
  width / 2 - (urlWidth * 0.1), // Offset slightly left
  height - bottomBarHeight + 38
);

// Save image
try {
  const buffer = canvas.toBuffer('image/jpeg');
  fs.writeFileSync(outputPath, buffer);
  console.log(`✅ Successfully generated: ${outputPath}`);
  console.log(`📐 Image size: ${(buffer.length / 1024).toFixed(2)} KB`);
} catch (error) {
  console.error('❌ Error generating image:', error.message);
}
