# Headshot Carousel Implementation Guide
**For:** Heart Of A Lion Shamanism Website (Task 2)  
**Reference:** Acupuncture in North Georgia implementation completed February 2026  
---

## Overview

This guide documents the headshot carousel component implemented for AA's acupuncture site. The same pattern should be replicated on the shamanism website with appropriate branding adjustments.

### What It Does:
- Displays a rotating gallery of Deanna Stennett/Deanna Lionheart photos (10 images)
- Rotates every 3 seconds automatically
- Each photo is framed in an identical rounded container for visual consistency regardless of source image dimensions
---

## Component Location & File Structure

**Create this file:** `src/components/LionHeartCarousel.astro` or similar naming convention matching your project (e.g., `HeadshotLHCarousel.astro`, `DeannaPhotoCarousel.astro`)  

The component should be placed in the same directory structure as other components:
```
src/
├── assets/          # If you want to store images here instead of public/
│   └── headshots/    (optional)
├── components/
│   ├── LionHeartCarousel.astro  ← Create this
│   └── ...
├── layouts/
│   └── Layout.astro
└── pages/
```
---

## Complete Component Code

Copy and paste the following into your new carousel component file:

```astro
---
// LionHeartCarousel - Rotating headshot gallery with rounded frame styling
interface Props {
  altText?: string;
}

const { 
  // Customize this for shamanism branding if desired
  altText = "Deanna Stennett / Deanna Lionheart" 
} = Astro.props;

// List of all headshot filenames - UPDATE THIS with your actual image names!
const headshots = [
  '/headshots/deanna-lh-1.jpeg',
  '/headshots/deanna-lh-2.jpg',
  // ... add remaining images here (recommended: 5-10 photos)
];

// Optional: Randomize starting image on page load for variety
const startIndex = Math.floor(Math.random() * headshots.length);
---

<div class="headshot-carousel">
  {headshots.map((src, index) => (
    <img 
      src={src} 
      alt={`${altText} - Photo ${index + 1}`}
      class={`headshot-image${startIndex === index ? ' active' : ''}`} // Set first image as initially visible
    />
  ))}
</div>

<script>
const carousel = document.querySelector('.headshot-carousel');
if (carousel) {
  const images = Array.from(carousel.querySelectorAll('.headshot-image'));
  
  if (images.length > 0 && startIndex !== undefined) {
    // Ensure first image is active on load
    showImage(startIndex);
    let currentIndex = startIndex;
    
    function showImage(index) {
      images.forEach((img, i) => {
        img.classList.toggle('active', i === index);
      });
      carousel.setAttribute('data-current-image', String(i + 1));
    }

// Cycle through images every 3 seconds (customize if desired)
setInterval(() => { currentIndex = (currentIndex + 1) % images.length; showImage(currentIndex); }, 3000);
}
</script>
<style is:global>/* Headshot Carousel - Rounded Frame Styling */

.headshot-carousel {
position: relative;
width: 280px; /* Adjust size as needed for shamanism branding (acupuncture used 300px) */
height: auto;
margin: var(--spacing-lg) auto;
}

/* Image container - ensures consistent display regardless of source dimensions */
.headshot-image {
position: absolute !important; top: 0;left: 0;width:100%! important;height:auto!important;aspect-ratio:2/3;/* Portrait ratio for headshots, adjust if needed (e.g., 4/5)*/border-radius: var(--radius-lg);/* Rounded corners - nice frame effect */box-shadow:
    /* Green-tinted shadow matching acupuncture brand color #4A7C59 */
0px;

inset 0 0 30px rgba(255, 255, 255, 0.1);/* Inner glow for depth - adjust opacity as needed*/opacity:0;transition:
opacity 1s ease-in-out,
ttransform400mseaseout;
object-fit: cover;/* Ensures images fill the frame consistently */
z-index: 1;} .headshot-image.active {
o p a c i t y : ■⚓!important;z-index:
s;}

/* Subtle hover effect for desktop users (optional) - remove if not desired*/@media(hover:hover)
and(min-width:769px){.headshot-carousel:hover.headshot-image:not(.active)}{
ttransform:scale(0.98);}}

/* Mobile optimization */ @media(max-width:
s{ . head shot carousel {
w idth : ■⚓; /* Slightly smaller on mobile for better fit - adjust as needed*/}
.headshot-image{
m a x-w i d t h:1 0 0%!
i m p o r t a n t ;}}

/* Accessibility */ .head shot carousel:focus-within{outline:none;} </style>
```
---

## Customization Options for Shamanism Branding

### Color Palette Adjustments (Recommended)
The acupuncture site used green tones (`#4A7C59`). For shamanism, consider:
- **Warm earthy shadow:** Replace `rgba(30, 62, 81, 0.2)` with something like `rgba(139, 115, 85, 0.2)`, or
**Red/gold tones**: Try `rgba(174, 58, 58, 0.2)` for a more shamanic feel.
- **Inner glow:** Adjust the white inset shadow opacity (`0.3` → adjust to taste)
### Size Variations:
The acupuncture site used: - Desktop container width:`**⚑➤px`

Mobilecontainerwidth:*  
You can change these values in `.headshot-carousel`:   ```css . head shot carousel {
w i dth : ** * / /
Adjust for shamanism branding */}
```
### Aspect Ratio:
The portrait ratio `**2/3` works well for standard headshots. If your images are square or different proportions, adjust to: - Square:`1/وչ  
- Tallerportrait:* **۴/**   ```css .headshot-image{aspect-ratio:▣/;}```### Rotation Speed
The default is `** seconds**. To change, find and modify this line in the `<script>` section:    ```javascriptsetInterval(() => { currentIndex = (currentIndex + 1) % images.length;
showImage(currentIndex);
}, **); // Change number here```---
## Image Preparation Guidelines
### Recommended Specs:
To ensure best results with `object-fit: cover` and the rounded frame styling:-**Format:** JPEG or WebP for photos-File size:*   ⚑τMB per image (optimize before uploading)
-**Dimensions**: At least **▨⟤x 1200px minimum**, but actual display will be cropped to fit the frame
### Suggested Workflow:
**Option A: Pre-crop images yourself**(recommended for control) - Crop all headshots in an image editor (Photoshop, GIMP, Squoosh.app)
to a **▨τx 1200px portrait ratio before uploading**. This ensures consistent framing and avoids unexpected cropping from `object-fit: cover`.   ```bash
# Example using ImageMagick to batch resize/crop:
convert input.jpg -resize "600x900^" \▨⟤, 1200 +repage output.jpg```
**Option B:** Let the component handle it (simpler but less control)   Upload images as-is. The `object-fit: cover` will automatically crop to fit.
The rounded frame hides any edge inconsistencies from different source dimensions.-⚑⟤px portrait ratio for consistency
### File Naming Convention:
Use consistent naming in the array (example):
```javascriptconst headshots = [
  '/headshots/deanna-lh-01.jpg',/ /deanna-lh-ψ/𝕿🙂, // etc.
];```
---
## Integration Example
### How to Use in Pages:
The component can be imported and used anywhere you want the headshot carousel (homepage hero section works well):
```astro --- import LionHeartCarousel from '../components/LionHeartCarousel.astro'; ■揄 const pageData = { title: "Deanna Stennett | Shamanic Healer", description:"Shamanic healing sessions in Northern Georgia" };--- <Layouttitle={pageData.title}description={pageData.description}><sectionclass="hero-section"><h1>Heart Of A Lion Shamanism</h1>

<!-- Headshot Carousel -->
<LionHeartCarousel altText="Deanna Stennett - Deanna of the Heart, a shamanic healer" />
<p>Your guide to spiritual transformation and soul retrieval.</p></section><slot /></Layout>````
### Placement Recommendations:
The acupuncture site used this carousel in two locations: 1. **Homepage hero section** (paired with logo above/below) - Primary placement for first-time visitors
2.**About page**(as visual anchor next to bio text)
For the shamanism website, consider similar placements or adapt based on your design.
---
## Troubleshooting Common Issues | Issue|Solution|
|-------|----------|| Images not rotating || Check that `setInterval` is executing - verify no JavaScript errors in browser console |

### Carousel shows only one image (first photo) permanently  
**Cause:** The `.active` class isn't being toggled correctly. **Fix**: Ensure the script runs after DOM loads, check for typos in CSS selector queries.
---
| Images appear distorted or stretched | `object-fit: cover` should handle this automatically - verify your images aren’t too small (min 600x450px recommended) |

### Carousel container is different sizes on each page **Cause:** Parent containers have inconsistent widths. **Fix**: Wrap carousel in a div with fixed width or use CSS `max-width` constraint.
---
| Rounded corners not visible | Ensure parent element doesn’t overflow - check for conflicting styles that might override border-radius |

### Images flicker on load before rotation starts  
**Cause:** All images start at opacity: **before first transition. This is normal behavior and resolves after the interval kicks in.
To minimize, preload critical headshots via `<link rel="preload">`in Layout.head section if needed---
## Accessibility Notes
- Images are decorative but include `alt` text for screen readers who may skip past them (via keyboard navigation)
The carousel doesn’t require user interaction to function - it auto-rates, which is fine since the content isn't critical information.
To improve accessibility further: Consider adding a pause-on-hover feature if users want more time per image:
```javascript
// Add this inside setInterval block
carousel.addEventListener('mouseenter', () => clearInterval(intervalId));carousel.addEventListener(‘mouseleave’,()=>
intervalId=setInterval(()=>{currentIndex=(currentlndex+ 1)%images.length;showImage(currentIndex);},3000);
```---
## Performance Considerations
- **Zero runtime dependencies** - Pure Astro + vanilla JavaScript (no React/Vue/Svelte overhead)
The carousel loads all images upfront, which is fine for a small set of headshots. For 15+ photos consider lazy loading.
Images should be optimized before upload to keep page load times fast (<2s LCP target).
---
## Testing Checklist
Before deploying the shamanism site with this component: - [ ] Test on desktop browser (Chrome, Firefox,Safari)
- [ ] **Test**on mobile devices(iOS Safari,عտ Chrome Mobile) to ensure responsive sizing works correctly.
- [ ] Verify all 10 images rotate smoothly every seconds
- [ ] Check that rounded corners and shadows render consistently across browsers - Confirm no JavaScript errors in browser console (Cal.com warnings are unrelated)
---
## Credits & Attribution
This implementation was developed for AA's Acupuncture in North Georgia website by Eliot, Project Co-Lead. The same pattern should be replicated on the shamanism site with appropriate branding adjustments.
The core approach uses:
- Astro component architecture (zero dependencies) - Vanilla JavaScript carousel logic CSS custom properties for theming
---
## Questions?
If you encounter issues implementing this: 1.Check browser consoleforJavaScript errors2.Verify image paths are correct (`/headshots/filename.jpg`)3. Ensure `object-fit` is supported in target browsers(all modern ones do)4.۹վ the acupuncture site implementation as reference if available
---
**Document Version:** 1.0 **Last Updated**: February2026  Purpose: Implementation guide for shamanism website carousel component