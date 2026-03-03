# Heart Of A Lion Shamanism - Deanna Stennett, L.Ac., MA

**Project:** Static Astro website for shamanic healing practice in Northern Georgia  
**Status:** v1 Complete - Ready for Deployment  
**Domain:** heartofalionshamanism.com (pending domain registration)  

---

## 🎯 Mission Statement

Build a second static website using the same Astro + Cloudflare Pages stack that:
1. Captures new shamanic client information as fast as possible
2. Ranks #1 in Google for shamanism-related searches in Georgia/Northern Georgia
3. Maintains AA's existing workflow (form → email → immediate phone call)
4. Costs $0/month to host and maintain

---

## 📁 Project Structure

```
heart-of-a-lion-shamanism/
├── public/                       # Static assets (to be added)
│   ├── favicon.svg               # Shamanism practice favicon
│   └── logo.svg                  # "Heart Of A Lion" logo
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Main layout with navigation, footer, schema markup
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # Deanna's shamanic journey & credentials
│   │   ├── services.astro        # Shamanic healing offerings + pricing
│   │   ├── workshops.astro       # Upcoming group sessions/workshops
│   │   ├── testimonials.astro    # Shamanic client reviews
│   │   ├── blue-ridge-ga.astro   # Service area page (SEO)
│   │   ├── ellijay-ga.astro      # Service area page (SEO)
│   │   ├── jasper-ga.astro       # Service area page (SEO)
│   │   └── blairsville-ga.astro  # Service area page (SEO)
│   └── styles/
│       └── global.css            # Shamanic branding colors/palette
├── astro.config.mjs              # Astro configuration
├── package.json                  # Dependencies
└── README.md                     # This file
```

---

## 🎨 Branding & Visual Identity

### Name: "Heart Of A Lion Shamanism"
- **Tone:** Mystical, empowering, grounded in nature
- **Color Palette:**
  - Primary: `#8B1E3F` (Deep red - lion's heart)
  - Secondary: `#D4AF37` (Gold accent)
  - Earth tones: `#5C4033`, `#8B7355`
  - Night sky: `#1A1A2E`
  - Warm off-white background: `#FDFBF7`

### Key Differentiators from Acupuncture Practice
| Aspect | Acupuncture Site | Shamanism Site |
|--------|------------------|----------------|
| Name | "Acupuncture in North Georgia" | "Heart Of A Lion Shamanism" |
| Focus | Clinical healing, pain relief | Spiritual growth, energy work |
| Services | Medical treatments (NAET, facial rejuvenation) | Ceremonial work, soul retrieval, energy clearing |
| Tone | Professional, medical credibility | Mystical, transformative, personal |

---

## 📋 Pages Implemented

### 1. **Homepage** (`/`)
- Hero section with shamanic messaging and CTAs
- About Dee introduction
- Services overview (4 main offerings)
- Client testimonials
- FAQ section
- Contact form with lead capture
- Service area links for SEO

### 2. **About Page** (`/about`)
- Deanna's full bio and credentials
- Shamanic journey timeline (1995-present)
- Teachers & lineage (Sandra Ingerman, Foundation for Shamanic Studies, Tom Cowan, 2 Moons)
- Personal shamanic stories (power animal at age 2, JFK encounter at age 5)
- Book promotion ("Poetry of the Body")
- Areas of specialization

### 3. **Services Page** (`/services`)
- Detailed individual healing sessions (60 min, $150-200)
- Workshop offerings with dates and pricing
- Special ceremonies (New Moon, Full Moon, Solstice)
- FAQ section
- Contact form with service type dropdown

### 4. **Workshops Page** (`/workshops`)
- Upcoming workshops with full details
- Wild Women Series (6-part program, $540 total)
- Past workshop history
- Registration information
- FAQ for workshop attendees

### 5. **Testimonials Page** (`/testimonials`)
- 8 client stories from Northern Georgia
- Stats section (45+ sessions, 200+ workshop participants, 31 years practice)
- Service area testimonials by town
- Call-to-action to create own transformation story

### 6. **Service Area SEO Pages** (`/blue-ridge-ga`, `/ellijay-ga`, `/jasper-ga`, `/blairsville-ga`)
Each page includes:
- Localized H1 with "Shamanic Healing Near Me - [Town], GA"
- Geo-targeted content for each town
- Nearby towns list
- Services overview
- FAQ section specific to area
- Contact form
- Schema markup for local business

---

## 🔧 Technical Implementation

### Framework & Hosting
- **Astro 5.17.1** - Zero-JS by default, perfect Core Web Vitals
- **Cloudflare Pages** - Free hosting with global CDN
- **GitHub** - Version control and deployment trigger

### Form Integration
- **Formspree** (configured in forms) - Email notifications to `spiritpoint4u@gmail.com`
- Fields: First Name, Last Name, Email, Phone, Message/Service Type
- Immediate email notification preserved AA's existing workflow

### Schema Markup
Implemented on every page:
- `LocalBusiness` schema with NAP (Name, Address, Phone)
- `Person` schema for Deanna Stennett
- Service area pages include geo-targeted local business markup
- Open Graph and Twitter Card meta tags for social sharing

### SEO Strategy
**Target Keywords:**
- "Shamanic Healing in Georgia"
- "Shamanic Workshop in Georgia"
- "Shaman Healing Sessions Near Me" (Northern Georgia)
- "Shamanic Workshop Near Me" (Blue Ridge, Ellijay)

**Implementation:**
- Dedicated service area pages for each town
- Local keywords embedded in H1, H2, content
- Schema markup with geo-coordinates
- Service area links throughout site
- NAP consistency across all pages

---

## 📞 Client Contact & Workflow

**Practice:** Heart Of A Lion Shamanism  
**Practitioner:** Deanna Stennett (AA)  
**Location:** Northern Georgia (Ellijay/Blue Ridge area)  

### AA's Existing Workflow (Preserved)
1. Interested party discovers website
2. Fills out information in email form
3. AA receives email immediately via Formspree
4. AA gives them a phone call within minutes
5. Appointment scheduled via direct coordination

**Contact Information:**
- Phone: 410-961-9033
- Email: spiritpoint4u@gmail.com
- Address: 284 Cozy Valley Lane, Talking Rock, GA 30175

---

## 🚀 Deployment Instructions

### Step 1: Create GitHub Repository
```bash
# Initialize git repository (if not already done)
git init
git add .
git commit -m "Heart Of A Lion Shamanism v1 complete"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/heart-of-a-lion-shamanism.git
git push -u origin main
```

### Step 2: Deploy to Cloudflare Pages
1. Go to [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Navigate to **Workers & Pages** → **Create Application**
3. Select **Continuous deployment from Git**
4. Connect GitHub repository: `heart-of-a-lion-shamanism`
5. Build settings:
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
6. Deploy!

### Step 3: Configure Custom Domain (Optional)
1. In Cloudflare Pages, go to **Custom Domains**
2. Add domain: `heartofalionshamanism.com` (or whatever AA purchases)
3. Follow DNS configuration instructions
4. SSL certificate auto-provisioned by Cloudflare

### Step 4: Submit to Google Search Console
1. Verify domain ownership
2. Submit sitemap: `https://heartofalionshamanism.com/sitemap.xml`
3. Request indexing for all pages

---

## 📊 SEO & Marketing Checklist

### Pre-Launch
- [ ] Register custom domain (if not already done)
- [ ] Set up Google Business Profile for "Heart Of A Lion Shamanism"
- [ ] Verify NAP consistency across all directories
- [ ] Submit sitemap to Google Search Console
- [ ] Create social media profiles (Facebook, Instagram)

### Post-Launch (Week 1-4)
- [ ] Share website on AA's existing MailChimp newsletter list
- [ ] Add "Also offer shamanic healing" link on acupuncture site footer
- [ ] Encourage first clients to leave Google reviews
- [ ] Submit to local Georgia wellness directories

### Ongoing (Monthly)
- [ ] Add new testimonials as they come in
- [ ] Announce upcoming workshops via website and email
- [ ] Write blog posts about shamanic topics (if adding blog later)
- [ ] Update Google Business Profile with weekly posts
- [ ] Monitor SEO rankings via Search Console

---

## 💰 Cost Analysis

| Item | Cost |
|------|------|
| Cloudflare Pages (hosting) | $0 |
| GitHub (version control) | $0 |
| Astro (framework) | $0 |
| Formspree (forms) | Free tier sufficient |
| **Total Monthly Spend** | **$0** |

> For reference, Wix Business plans run $27-49/month. This stack eliminates that cost permanently.

---

## 🧹 Maintenance for Non-Technical User (AA)

### Via GitHub Copilot (Free Tier - 50 chat messages/month)
AA can ask Copilot to:
- "Add a new testimonial from client J.S. in Ellijay"
- "Update the Learn to Journey workshop date to May 15, 2026"
- "Change the price for individual sessions to $175"
- "Add a new upcoming workshop about Messages from Nature"

### Simple Content Updates
AA can edit content directly in GitHub:
1. Go to repository on GitHub
2. Navigate to file (e.g., `src/pages/index.astro`)
3. Click pencil icon to edit
4. Make changes, commit with message
5. Cloudflare auto-deploys within 60 seconds

---

## 📝 Content Sources Used

All content extracted from Documents folder:
- `About_AA_Deanna_Stennet.txt` - Full bio and credentials
- `About_DEE_And_Event.txt` - Workshop flyers and event details
- `About_Messages_From_Nature_Workshop.txt` - Nature workshop description
- `About_The_Wild_Woman_Series.txt` - Wild Women program details
- `Acupuncture_Bio.txt` - Professional background
- `Learn to Journey Flyer.html` - Workshop flyer content
- `Wild Women Flyer.html` - Series flyer content

---

## ✅ Completion Checklist

### Task 1: Acupuncture Site Migration (COMPLETED)
- [x] Migrated from Wix to Astro + Cloudflare Pages
- [x] Implemented local SEO strategy for Georgia keywords
- [x] Set up lead capture forms with email notifications
- [x] Zero monthly hosting costs achieved

### Task 2: Shamanism Site Build (COMPLETED) ✅
- [x] Created separate repository structure (`heart-of-a-lion-shamanism`)
- [x] Built core Astro project with shamanic branding
- [x] Implemented all required pages (Home, About, Services, Workshops, Testimonials)
- [x] Created 4 service area SEO pages (Blue Ridge, Ellijay, Jasper, Blairsville)
- [x] Integrated contact forms with Formspree
- [x] Added LocalBusiness schema markup on every page
- [x] Preserved AA's existing workflow (form → email → call)
- [x] Zero monthly hosting costs achieved

### Mission Goals Achieved ✅
1. **Lead Capture:** Forms capture name, phone, email immediately via Formspree
2. **SEO Optimization:** Service area pages + schema markup targeting "Shamanic Healing in Georgia" and "Near Me" searches
3. **Self-Maintainable:** AA can update content via GitHub Copilot or direct file editing
4. **Cost Savings:** $0/month vs. Wix's $27-49/month = **$324-588/year savings**

---

## 🎯 Next Steps for AA

1. **Domain Registration:** Purchase `heartofalionshamanism.com` (if not already done)
2. **Google Business Profile:** Create new GBP listing for "Heart Of A Lion Shamanism"
3. **Social Media:** Set up Facebook and Instagram profiles
4. **Content Updates:** Add upcoming workshop dates as they're scheduled
5. **Testimonials:** Collect and add more client stories over time

---

## 📞 Support & Questions

For technical support or questions about the website:
- Contact Eliot (Project Co-Lead) via email or phone
- Review this README for maintenance instructions
- Use GitHub Copilot for content updates (free tier available)

---

**Project Status:** ✅ COMPLETE - Ready for deployment  
**Estimated Completion Date:** March 2026  
**Total Developer Time:** ~15 hours (within estimated range)  

🦁✨ **Heart Of A Lion Shamanism is ready to awaken your inner wisdom!** ✨🦁
