# Heart Of A Lion Shamanism - Design & SEO Pass Checklist
**Date:** March 2026 | **Status:** Ready for Implementation

---

## 🔴 CRITICAL FIXES (Must Complete Before Launch)

### 1. Formspree Configuration ❌ CURRENTLY BROKEN
- **Issue:** All forms use invalid endpoint `https://formspree.io/f/spiritpoint4u@gmail.com`
- **Fix Required:** 
  - Go to https://formspree.io/ and create a new form for shamanism site
  - Replace in ALL pages: `/src/pages/index.astro`, `/services.astro` (2 locations)
  - Update action URL from `spiritpoint4u@gmail.com` to actual Form ID like `xvndqkrl`
- **Priority:** 🔴 HIGH - Forms won't work without this

### 2. Open Graph Image Missing ❌
- **Issue:** All pages reference `/heart-of-lion-og.jpg` which doesn't exist
- **Fix Required:** 
  - Option A: Run `node scripts/generate-static-og-image.cjs` (requires canvas npm package)
  - Option B: Use browser generator at `scripts/temp-og-generator.html`
    - Open in Chrome, screenshot visible area
    - Crop/resize to exactly **1200x630 pixels**
    - Save as JPG (~85% quality) → `/public/heart-of-lion-og.jpg`
  - Option C: Use Canva or similar tool with OG image template (1200x630)
- **Priority:** 🔴 HIGH - Social sharing will show broken images

### 3. Sitemap Not Generated ⚠️
- **Issue:** robots.txt references sitemap.xml but Astro doesn't auto-generate it without plugin
- **Fix Required:** 
  ```bash
  npm install @astrojs/sitemap --save-dev
  ```
  Update `astro.config.mjs`:
  ```javascript
  import { defineConfig } from 'astro/config';
  import sitemap from '@astrojs/sitemap';
  
  export default defineConfig({
    site: 'https://heartofalionshamanism.com',
    integrations: [sitemap()],
  });
  ```
- **Priority:** 🟡 MEDIUM - Important for SEO indexing

---

## 🟡 DESIGN ENHANCEMENTS (Recommended)

### 4. Consistent Service Area Navigation ⚠️
**Current State:** 
- Homepage has service area links ✅
- About page lacks them ❌
- Services/Workshops pages have partial linking ⚠️

**Fix Required:** Add to ALL main pages (after hero section):
```astro
<div class="service-area-links" style="margin-top: var(--spacing-6);">
  <a href="/blue-ridge-ga">Blue Ridge, GA</a>
  <a href="/ellijay-ga">Ellijay, GA</a>
  <a href="/jasper-ga">Jasper, GA</a>
  <a href="/blairsville-ga">Blairsville, GA</a>
</div>
```

### 5. Mobile Navigation UX ⚠️
**Current State:** Hamburger menu works but could be improved
- Add smooth scroll to anchor links (#contact)
- Close mobile menu after clicking nav link (currently requires manual close)

**Fix Required in Layout.astro:**
```javascript
// After adding click handler for navbar__link:
navbarMenu.querySelectorAll('.navbar__link').forEach(link => {
  link.addEventListener('click', () => {
    if (window.innerWidth < 769) {
      navbarToggle.setAttribute('aria-expanded', 'false');
      navbarMenu.classList.remove('navbar__nav--active');
    }
  });
});
```

### 6. Accessibility Improvements ⚠️
**Current State:** Good foundation, can be enhanced:
- Add `lang="en"` to `<html>` tag ✅ (already present)
- Ensure all images have meaningful alt text ❌ (decorative logos use `alt=""`, good! But some content images may need descriptions)
- Add ARIA labels for icon-only buttons

**Fix Required:**
```astro
<!-- In hero sections with emoji icons -->
<span class="mobile-cta-bar__icon" aria-hidden="true">📞</span>
```

### 7. Performance Optimization ⚠️
**Current State:** Astro handles most, but can improve:
- Background image not lazy-loaded (not critical for hero)
- Consider adding `loading="lazy"` to below-fold images

---

## 🟢 SEO OPTIMIZATION CHECKLIST

### 8. Local Business Schema ✅ ALREADY IMPLEMENTED
All pages have proper schema markup:
- `LocalBusiness` with NAP (Name, Address, Phone)
- `Person` for Deanna Stennett
- Geo-coordinates included ✅
- Service areas listed ✅

**Verify:** Use Google's Rich Results Test at https://search.google.com/test/rich-results

### 9. Meta Tags Review ⚠️
**Current State:** Good coverage, but verify:
- Each page has unique `seoTitle` and `seoDescription`
- No duplicate meta descriptions across pages ✅
- Open Graph tags present on all pages ✅

**Action Required:** Check each page's frontmatter for uniqueness.

### 10. Content Freshness ⚠️
**Current State:** Static content, no blog/news section
**Recommendation:** 
- Add "Upcoming Events" or "News" section to homepage
- Update workshop dates regularly (currently hardcoded)
- Consider adding MailChimp newsletter signup for engagement signal

### 11. Internal Linking Structure ⚠️
**Current State:** Good, but can be enhanced:
- Service area pages link back to main services ✅
- Add breadcrumbs navigation (`Home > Services > Individual Sessions`)
- Cross-link between related content (e.g., testimonials → specific service page)

---

## 📋 IMPLEMENTATION PRIORITY ORDER

### Phase 1: Critical Fixes (Do First - Before Testing Live Site)
1. ✅ Fix Formspree endpoint IDs in all forms
2. ✅ Generate and deploy static OG image (`heart-of-lion-og.jpg`)
3. ⚠️ Add sitemap plugin to Astro config
4. 🧪 Test form submissions work end-to-end
5. 🧪 Verify social media sharing shows correct preview images

### Phase 2: Design Polish (After Critical Fixes)
6. ✅ Add consistent service area navigation across all pages
7. ⚠️ Improve mobile menu UX (auto-close on link click)
8. 🔍 Review and enhance accessibility features
9. 🖼️ Optimize image loading strategies
10. ✨ Consider adding testimonials carousel or slider for homepage

### Phase 3: SEO Enhancement (Ongoing Maintenance)
11. ✅ Verify schema markup with Google Rich Results Test
12. ⚠️ Add breadcrumbs navigation structure
13. 📝 Create "Upcoming Events" section on homepage
14. 🔗 Enhance internal linking between related pages
15. 📊 Set up Google Analytics 4 (GA4) tracking code in Layout.astro

---

## 🧪 TESTING CHECKLIST

### Before Going Live:
- [ ] All forms submit successfully and email notifications work
- [ ] Mobile menu opens/closes correctly on all devices
- [ ] OG image displays properly when sharing link (use https://developers.facebook.com/tools/debug/)
- [ ] No 404 errors in browser console
- [ ] Page load times under 3 seconds (test with Lighthouse)
- [ ] All links work and navigate correctly
- [ ] Contact information consistent across all pages
- [ ] Schema markup validates without errors

### After Going Live:
- [ ] Submit sitemap to Google Search Console
- [ ] Verify domain ownership in GA4
- [ ] Test forms from external device (not localhost)
- [ ] Check mobile responsiveness on actual devices
- [ ] Monitor 404s and fix broken links promptly

---

## 📞 NEXT STEPS FOR AA

### Immediate Actions:
1. **Create Formspree account** at https://formspree.io/
   - Create new form for shamanism site
   - Copy the endpoint ID (looks like `xvndqkrl`)
   - Replace in all pages: `/src/pages/index.astro`, `/services.astro`

2. **Generate OG Image**:
   - Option A: Run Node script if you have canvas installed
   - Option B: Use browser generator at `scripts/temp-og-generator.html`
     - Open file, screenshot visible area
     - Crop to 1200x630px, save as JPG → `/public/heart-of-lion-og.jpg`

3. **Deploy Sitemap**:
   ```bash
   npm install @astrojs/sitemap --save-dev
   # Update astro.config.mjs with sitemap plugin
   npm run build
   ```

### Optional Enhancements (Can Wait):
4. Add service area navigation to About page
5. Improve mobile menu UX
6. Set up Google Analytics 4 tracking code
7. Create "Upcoming Events" section on homepage
8. Add testimonials carousel for homepage hero

---

## 📚 FILES TO MODIFY SUMMARY

| File | Change Required |
|------|----------------|
| `/src/pages/index.astro` | Update Formspree endpoint ID (1 location) |
| `/src/pages/services.astro` | Update Formspree endpoint ID (2 locations - individual sessions + workshops sections) |
| `public/heart-of-lion-og.jpg` | **CREATE THIS FILE** - Static OG image for social sharing |
| `scripts/temp-og-generator.html` | Use this to generate OG image via browser screenshot |
| `/astro.config.mjs` | Add sitemap plugin configuration |
| `/src/layouts/Layout.astro` | Optional: Improve mobile menu UX, add breadcrumbs |

---

## 🎯 SUCCESS METRICS (Post-Launch)

### Technical:
- ✅ All forms working with email notifications
- ✅ OG images display correctly on social media shares
- ✅ Sitemap.xml accessible at `https://heartofalionshamanism.com/sitemap.xml`
- ✅ Page load time < 3 seconds (Core Web Vitals green)
- ✅ Mobile responsiveness verified across devices

### SEO:
- [ ] Site indexed in Google Search Console within 1 week of launch
- [ ] Schema markup validates without errors
- [ ] No broken links or 404s after 2 weeks
- [ ] Organic traffic growing month-over-month

---

**Pass Completed By:** Qwen3.5-Architect AI  
**Date:** March 2026  
**Status:** ✅ Ready for Implementation - All findings documented above
