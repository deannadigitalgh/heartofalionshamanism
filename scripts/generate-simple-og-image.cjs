// @ts-check
/**
 * Generate Static Open Graph Image - Simple Text-Only Version (No Canvas Dependency)
 * Run with: node scripts/generate-simple-og-image.cjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🦁 Creating placeholder Open Graph image instructions...\n');

// Create a simple HTML page that can be opened in browser to generate OG image
const htmlContent = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Heart Of A Lion Shamanism - Open Graph Image Generator</title>
  <style>
    body {
      margin: 0;
      padding: 40px;
      font-family: Georgia, serif;
      background: linear-gradient(135deg, #6B1530 0%, #8B1E3F 50%, #D4AF37 100%);
      color: white;
    }
    .container {
      max-width: 920px;
      margin: auto;
      text-align: left;
    }
    h1 {
      font-size: 68px;
      margin-bottom: 24px;
      letter-spacing: -1px;
    }
    .subtitle {
      font-style: italic;
      font-size: 30px;
      opacity: 0.95;
      margin-bottom: 36px;
    }
    .tagline {
      font-family: Helvetica, Arial, sans-serif;
      font-weight: bold;
      color: #D4AF37;
      font-size: 28px;
      opacity: 0.95;
    }
    .website {
      position: fixed;
      bottom: 60px;
      left: 40px;
      right: 40px;
      background: linear-gradient(90deg, rgba(139, 30, 63, 0.8), rgba(212, 175, 55, 0.8));
      padding: 20px 40px;
      font-family: Helvetica, Arial, sans-serif;
      font-weight: bold;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Heart Of A Lion Shamanism</h1>
    <p class="subtitle">Shamanic Practitioner & Teacher | Licensed Acupuncturist</p>
    <p class="tagline">Shamanic Healing • Workshops • Northern Georgia</p>
  </div>
  <div class="website">
    heartofalionshamanism.com
  </div>
</body>
</html>`;

const outputPath = path.join(__dirname, 'temp-og-generator.html');
fs.writeFileSync(outputPath, htmlContent);
console.log('✅ Temporary generator created:', outputPath);
