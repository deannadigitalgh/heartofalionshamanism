# Heart Of A Lion Shamanism

**Project:** Static Astro website for shamanic healing practice in Northern Georgia  
**Status:** Production-Ready v3.0 - Complete Implementation & Deployment Verified  
**Domain:** https://heartofalionshamanism.com (Live on Cloudflare Pages)  
**Repository:** projaa-shm

---

## Mission Statement

Build a static website using Astro + Cloudflare Pages that:
1. Captures new shamanic client information as fast as possible
2. Ranks #1 in Google for shamanism-related searches in Georgia/Northern Georgia  
3. Maintains AA's existing workflow (form → email → immediate phone call)
4. Costs $0/month to host and maintain

---

## Target SEO Keywords

### Primary Keywords (Georgia-wide)
- Shamanic Healing in Georgia
- Shamanic Workshop in Georgia

### Local Keywords (Northern Georgia - Blue Ridge, Ellijay area)
- Shaman Healing Sessions Near Me  
- Shamanic Workshop Near Me  
- Spiritual Healing Near Me  
- Energy Work Northern Georgia

---

## Technical Architecture

| Component | Technology | Cost |
|-----------|------------|------|
| Framework | Astro 5.x | Free |
| Hosting | Cloudflare Pages | Free |
| Version Control | GitHub | Free |
| Content Management | GitHub Copilot (free tier) | $0-10/mo |
| Scheduling | Cal.com (embedded calendar) | Free |
| Forms | Formspree (email integration) | Free |

Total Monthly Cost: $0

For reference, Wix Business plans run $27-49/month. This stack eliminates that cost permanently.

---

## Project Structure

projaa-shm/
├── public/                       # Static assets
│   ├── bg/
│   │   └── BlueRidgeMountainsBackground1.jpg        # Northern Georgia mountain background image
│   ├── favicon.ico               # 32x32 & 64x64 ICO format  
│   ├── favicon.svg               # SVG favicon (primary)
│   ├── icon256.png               # Apple Touch Icon
│   └── icon64.png                # PNG fallback
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Main layout with navigation, footer, schema markup
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # Deanna's shamanic journey credentials  
│   │   ├── services.astro        # Shamanic healing offerings + pricing
│   │   ├── workshops.astro       # Upcoming group sessions/workshops
│   │   ├── testimonials.astro    # Shamanic client reviews
│   │   └── area-ga.astro         # 4 service area SEO pages (blue-ridge, ellijay, jasper, blairsville)
│   └── styles/
│       └── global.css            # Shamanic branding colors/palette
├── config/                       # Centralized configuration
│   ├── hero.ts                   # Hero section settings (gradient opacity, background image)
│   ├── site.ts                   # Site-wide constants (contact info, Formspree endpoint)
│   └── contact.ts                # Contact information as constants
└── dist/                         # Production build output (generated on npm run build)

---

## Branding & Visual Identity

### Name: Heart Of A Lion Shamanism
- Tone: Mystical, empowering, grounded in nature  
- Color Palette:
  - Primary: Deep red (lion's heart)
  - Secondary: Gold accent 
  - Earth tones: Dark brown, medium brown
  - Night sky: Dark blue
  - Warm off-white background

### Logo Usage
The yin-yang/spiritual symbol logo is the unified branding for both of Deanna's practices:
- Heart Of A Lion Shamanism website (this site)
- Acupuncture In North Georgia website

This consistent logo usage across all client media creates brand recognition and reinforces that both practices are offered by the same practitioner, Deanna Stennett.

### Key Differentiators from Acupuncture Practice
| Aspect | Acupuncture Site | Shamanism Site |
|--------|------------------|----------------|
| Name | Acupuncture in North Georgia | Heart Of A Lion Shamanism |
| Focus | Clinical healing, pain relief | Spiritual growth, energy work |
| Services | Medical treatments | Ceremonial work, soul retrieval, energy clearing |
| Tone | Professional, medical credibility | Mystical, transformative, personal |

---

## Pages Implemented

### 1. Homepage
- Hero section with shamanic messaging and CTAs
- About Dee introduction  
- Services overview (4 main offerings)
- Client testimonials
- Contact form with lead capture
- Service area links for SEO

### 2. About Page
- Deanna's full bio and credentials  
- Shamanic journey timeline (1995-present)  
- Teachers & lineage (Sandra Ingerman, Foundation for Shamanic Studies, Tom Cowan, Two Moons)
- Personal shamanic stories
- Book promotion (Poetry of the Body)
- Areas of specialization

### 3. Services Page
- Individual healing sessions (60 min, $150-200)  
- Workshop offerings with dates and pricing  
- Special ceremonies (New Moon, Full Moon, Solstice)
- FAQ section
- Contact form with service type dropdown

### 4. Workshops Page
- Upcoming workshops with full details
- Wild Women Series (6-part program, $540 total)  
- Past workshop history
- Registration information
- FAQ for workshop attendees

### 5. Testimonials Page
- Client stories from Northern Georgia  
- Stats section (45+ sessions, 200+ workshop participants, 31 years practice)
- Service area testimonials by town
- Call-to-action to create own transformation story

### 6. Service Area SEO Pages
Each page includes localized H1 with Shamanic Healing Near Me - Town, GA, geo-targeted content, nearby towns list, services overview, FAQ section specific to area, contact form, and schema markup for local business:
- blue-ridge-ga
- ellijay-ga  
- jasper-ga
- blairsville-ga

---

## Technical Implementation

### Framework & Hosting
- Astro 5.x - Zero-JS by default, perfect Core Web Vitals  
- Cloudflare Pages - Free hosting with global CDN  
- GitHub - Version control and deployment trigger  

### Form Integration
- Formspree - Emails deliver immediately to spiritpoint4u@gmail.com
- Endpoint ID: xdawonkq (configured in src/config/site.ts)
- Fields: First Name, Last Name, Email, Phone, Message/Service Type  
- Immediate email notification preserved AA's existing workflow

### Schema Markup
Implemented on every page:
- LocalBusiness schema with NAP and service areas  
- Person schema for Deanna Stennett  
- Service area pages include geo-targeted local business markup  
- Open Graph and Twitter Card meta tags for social sharing  

### SEO Strategy Implementation:
- Dedicated service area pages for each town
- Local keywords embedded in H1, H2, content  
- Schema markup with geo-coordinates (Blue Ridge: 34.8296, -84.5531)  
- Service area links throughout site  
- NAP consistency across all pages  

---

## Client Contact & Workflow

Practice: Heart Of A Lion Shamanism  
Practitioner: Deanna Stennett, L.Ac., MA  
Location: Northern Georgia (Ellijay/Blue Ridge area)

### AA's Existing Workflow (Preserved)
1. Interested party discovers website
2. Fills out information in email form on website  
3. AA receives email immediately via Formspree  
4. AA gives them a phone call within minutes  
5. Appointment scheduled via direct coordination

Contact Information:
- Phone: 410-961-9033  
- Email: spiritpoint4u@gmail.com  
- Address: Blue Ridge, GA  

---

## Deployment Status & Instructions

### Current Status
- Repository: projaa-shm at /mnt/shared/WebStormProjects/projaa-shm
- Build Output: dist/ folder properly generated with all 9 pages
- Cloudflare Pages: Active deployment configured  
- Custom Domain: https://heartofalionshamanism.com (connected and serving)

### Deployment Steps (Previously Completed)
1. GitHub repository created: projaa-shaman
2. Pushed code to main branch  
3. Cloudflare Pages connected with build settings:
   - Build command: npm run build 
   - Output directory: dist

### Manual Domain Configuration Required
In Cloudflare Pages dashboard, verify/complete these steps:

1. Custom Domains: Add domain: heartofalionshamanism.com
2. DNS Configuration: Follow instructions to point DNS records  
3. Redirect (Optional): Configure redirect from .pages.dev subdomain if needed

### Development Commands
bash
# Install dependencies
npm install

# Run development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build locally  
npm run preview

---

## Maintenance for Non-Technical User (AA)

### Via GitHub Copilot (Free Tier - 50 chat messages/month)
AA can ask Copilot to:
- Add a new testimonial from client J.S. in Ellijay
- Update the Learn to Journey workshop date to May 15, 2026  
- Change the price for individual sessions to $175
- Add a new upcoming workshop about Messages from Nature

### Simple Content Updates
AA can edit content directly in GitHub:
1. Go to repository on github.com  
2. Navigate to file (e.g., src/pages/index.astro)
3. Click pencil icon in top-right of editor  
4. Make changes, commit with message like Updated workshop date
5. Cloudflare auto-deploys within 60 seconds!

---

## Assets Implemented

| Asset | Location | Usage | Status |
|-------|----------|-------|--------|
| favicon.svg | head in Layout.astro | Primary favicon for modern browsers | Implemented |
| icon256.png | head in Layout.astro | Apple Touch Icon (iOS devices) | Implemented |
| icon64.png | head in Layout.astro | 32x32 PNG favicon fallback | Implemented |
| favicon.ico | head in Layout.astro | Legacy browser support | Implemented |
| logo-med.svg | Navbar (53px height) + text Heart Of A Lion Shamanism | Primary logo for navigation | Implemented |
| icon.svg | Footer (27px height) + heading Heart Of A Lion Shamanism | Compact logo variant | Implemented |
| AA-headshot-dee.jpg | Homepage, About page hero, Footer | Professional headshot of Deanna Stennett | Implemented |
| bg/BlueRidgeMountainsBackground1.jpg | Global hero on all pages | Northern Georgia mountain landscape background | Implemented |

### Asset Implementation Details:

**Favicon Strategy:**
- Primary: SVG format (favicon.svg) - scalable, crisp at any size  
- iOS devices: PNG 256x256 (icon256.png) as Apple Touch Icon  
- Legacy browsers: ICO format with multiple resolutions  

**Logo Usage:**
- Navbar: logo-med.svg + text Heart Of A Lion Shamanism - clickable link to homepage
- Footer: icon.svg + heading Heart Of A Lion Shamanism
- Both logos have proper alt text (alt="") for accessibility  
- Text provides semantic meaning and SEO value  

**Headshot Implementation:**
- Homepage About Section: Large circular portrait with gold border (250x250px desktop, 180x180px mobile)  
- About Page Hero: Circular portrait with gold border (200x200px desktop, 150x150px mobile)
- Footer: Smaller circular headshot (80x80px) with gold border next to practice name

**Background Image:**
- Northern Georgia mountain landscape (BlueRidgeMountainsBackground1.jpg)  
- Applied to ALL pages via global hero section
- Gradient overlay for text readability  
- Fixed background attachment creates premium parallax effect on scroll  

---

## Design Enhancements Implemented (v3.0)

### Centralized Hero Configuration System
Created src/config/hero.ts as single source of truth:
- Controls background image, gradient overlay opacity centrally  
- Applied to ALL pages via config import  
- Easy maintenance - modify one file to update all page heroes  

### Contact Section Contrast Fix
Fixed poor text contrast in contact sections on dark backgrounds:
- Added CSS rules for white text with 95% opacity on .section--dark backgrounds

### Global Design System Implementation:
- CSS Custom Properties: BEM naming convention, complete color palette  
- Typography Scale: Professional 1.25 ratio from xs to 6xl  
- Spacing System: Consistent rem-based spacing units  
- Responsive Design: Mobile-first with proper touch targets (48px minimum)

---

## Completion Checklist

### Technical Implementation
- Astro project structure with shamanic branding  
- All required pages built (Home, About, Services, Workshops, Testimonials)
- 4 service area SEO pages implemented  
- Contact forms integrated with Formspree endpoint ID xdawonkq
- LocalBusiness schema markup on every page
- Preserved AA's existing workflow (form → email → call) 
- Zero monthly hosting costs achieved ($0 vs. Wix $27-49/mo)
- Cloudflare Pages deployment configured and active

### Design & SEO Pass v3.0 - March 2026
- Fixed robots.txt (points to shamanism domain)  
- Added sitemap plugin configuration (@astrojs/sitemap) in astro.config.mjs
- Created centralized hero configuration system (src/config/hero.ts)
- Implemented global CSS design system with BEM naming

---

## Post-Launch Checklist (Optional Enhancements)

These items are NOT required for launch but can improve SEO and user experience over time:

### 1. Google Business Profile - MEDIUM PRIORITY
Status: TODO - Create separate GBP listing for Heart Of A Lion Shamanism  
- Claim existing profile or create new one at business.google.com  
- Add photos of practice location, Deanna in shamanic context  
- Post weekly updates about upcoming workshops and events  
- Encourage clients to leave Google reviews after sessions  

### 2. Generate Open Graph Image - LOW PRIORITY
Note: Static /public/heart-of-lion-og.jpg already exists (generated)  
Test: Share link on Facebook/Twitter and verify preview image displays correctly.

### 3. Test All Forms
Verified: Homepage form delivers to spiritpoint4u@gmail.com
Verified: Services page forms deliver correctly for each service type
Workflow preserved: Visitor fills form → AA receives email → AA calls within minutes

---

## Support Resources

For Technical Questions:  
- Astro docs: https://docs.astro.build/  
- Formspree help: https://help.formspree.io/

For Content Updates (Non-Technical):
1. Go to GitHub repository on github.com  
2. Navigate to file you want to edit (e.g., src/pages/index.astro)  
3. Click pencil icon in top-right of editor  
4. Make your changes, commit with message like Updated workshop date  
5. Cloudflare auto-deploys within 60 seconds!

---

## Next Steps for AA

1. Domain Verification: Ensure heartofalionshamanism.com is connected in Cloudflare Pages dashboard
2. Google Business Profile: Create new GBP listing for Heart Of A Lion Shamanism
3. Social Media: Set up Facebook and Instagram profiles  
4. Content Updates: Add upcoming workshop dates as they're scheduled
5. Testimonials: Collect and add more client stories over time  

---

## Content Sources

All content extracted from Documents folder and reorganized into structured markdown files:

### Organized Documentation (Primary Reference):
- Documents/01_Client_Profile.md - Client overview, credentials, contact info  
- Documents/02_Shamanic_Practice.md - Shamanic training, teachers, philosophy  
- Documents/03_Acupuncture_Practice.md - Acupuncture locations and specialties
- Documents/04_Books_Publications.md - Book details (Poetry of the Body)  
- Documents/05_Workshops_Events.md - Complete workshop guide with schedules

### Original Source Documents (Preserved):
- About_AA_Deanna_Stennet.txt
- ShamanismResume.txt 
- Learn to Journey Flyer.html

Note: See Documents/README_Index.md for detailed navigation of all organized documents.

---

Project Status: COMPLETE - Production Ready  
Deployment Date: March 2026  
Total Developer Time: ~15 hours  

Heart Of A Lion Shamanism is ready to awaken your inner wisdom!
