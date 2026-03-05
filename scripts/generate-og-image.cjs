/**
 * Convert Canvas-Based OG Image to Static PNG
 * 
 * This script uses Puppeteer to render the heart-of-lion-og.html canvas design
 * and saves it as a static PNG file for proper social media sharing.
 * 
 * Usage: node scripts/generate-og-image.cjs
 */

import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function generateOGImage() {
  console.log('🦁 Generating Heart Of A Lion Shamanism OG Image...');
  
  // Launch Puppeteer browser
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport to match OG image dimensions
    await page.setViewport({ width: 1200, height: 630 });

    // Navigate to the HTML file
    const htmlPath = path.join(__dirname, '..', 'public', 'og-image-generator.html');
    await page.goto(`file://${htmlPath}`, { waitUntil: 'networkidle0' });

    // Wait for canvas to render
    await page.waitForFunction(() => {
      const canvas = document.querySelector('canvas');
      return canvas && canvas.width > 0;
    }, { timeout: 10000 });

    // Screenshot the canvas element
    const screenshotPath = path.join(__dirname, '..', 'public', 'heart-of-lion-og.png');
    
    await page.screenshot({
      path: screenshotPath,
      clip: {
        x: 0,
        y: 0,
        width: 1200,
        height: 630
      }
    });

    console.log('✅ OG Image generated successfully!');
    console.log(`📍 Saved to: ${screenshotPath}`);
    
    // Verify file was created
    const stats = fs.statSync(screenshotPath);
    console.log(`📊 File size: ${(stats.size / 1024).toFixed(2)} KB`);

  } catch (error) {
    console.error('❌ Error generating OG image:', error.message);
    process.exit(1);
  } finally {
    await browser.close();
  }
}

// Run the script
generateOGImage();
