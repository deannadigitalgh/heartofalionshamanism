# TASK 2: Heart Of A Lion Shamanism Website

**Client:** AA (Deanna Stennett)  
**Project:** New shamanic healing website - separate from acupuncture practice  
**Status:** Ready for Development  
**Recommended Repository:** `projaa-shaman` (separate repo to keep practices distinct)  

---

## 🎯 Mission Statement

Build a second static website using the same Astro + Cloudflare Pages stack that:
1. Captures new shamanic client information as fast as possible
2. Ranks #1 in Google for shamanism-related searches in Georgia/Northern Georgia
3. Maintains AA's existing workflow (form → email → immediate phone call)
4. Costs $0/month to host and maintain

---

## 📋 Target SEO Keywords

### Primary Keywords (Georgia-wide)
- "Shamanic Healing in Georgia"
- "Shamanic Workshop in Georgia"

### Local Keywords (Northern Georgia - Blue Ridge, Ellijay area)
- "Shaman Healing Sessions Near Me"
- "Shamanic Workshop Near Me"
- "Spiritual Healing Near Me"
- "Energy Work Northern Georgia"

> **Note:** These keywords are less competitive than acupuncture terms but still require dedicated service area pages and local SEO optimization.

---

## 🏗️ Technical Architecture (Same as Acupuncture Site)

| Component | Technology | Cost |
|-----------|------------|------|
| Framework | Astro 5.x | Free |
| Hosting | Cloudflare Pages | Free |
| Version Control | GitHub | Free |
| Content Management | GitHub Copilot (free tier) | $0-10/mo |
| Scheduling | Cal.com (embedded calendar) | Free |
| Forms | Formspree (email integration) | Free |

**Total Monthly Cost: $0**

---

## 📁 Recommended Project Structure

```
projaa-shaman/
├── public/                       # Static assets
│   ├── favicon.svg               # Shamanism practice favicon
│   ├── logo.svg                  # "Heart Of A Lion" logo
│   └── AA-shaman-photo.jpg       # Deanna's shamanic headshot (if available)
├── src/
│   ├── layouts/
│   │   └── Layout.astro          # Reuse acupuncture layout with minor branding changes
│   ├── pages/
│   │   ├── index.astro           # Homepage
│   │   ├── about.astro           # Deanna's shamanic journey & credentials
│   │   ├── services.astro        # Shamanic healing offerings + pricing
│   │   ├── workshops.astro       # Upcoming group sessions/workshops
│   │   ├── testimonials.astro    # Shamanic client reviews
│   │   ├── blue-ridge-ga.astro   # Service area page (SEO)
│   │   ├── ellijay-ga.astro      # Service area page (SEO)
│   │   ├── jasper-ga.astro       # Service area page (SEO)
│   │   └── api/
│   │       └── contact.ts        # Reuse acupuncture API route logic
│   └── styles/
│       └── global.css            # New shamanic branding colors/palette
├── astro.config.mjs              # Copy from acupuncture project, update site name
├── package.json                  # Same dependencies
├── tsconfig.json                 # Same config
└── README.md                     # Project-specific documentation
```

---

## 🎨 Branding & Visual Identity

### Name: "Heart Of A Lion Shamanism"
- **Tone:** Mystical, empowering, grounded in nature
- **Color Palette Suggestions:** Deep reds (lion heart), earth tones, gold accents
- **Imagery:** Natural landscapes of Northern Georgia, spiritual symbols, lion imagery
- **Logo:** Needs to be created or sourced (SVG preferred for scalability)

### Key Differentiators from Acupuncture Practice
| Aspect | Acupuncture Site | Shamanism Site |
|--------|------------------|----------------|
| Name | "Acupuncture in North Georgia" | "Heart Of A Lion Shamanism" |
| Focus | Clinical healing, pain relief | Spiritual growth, energy work |
| Services | Medical treatments (NAET, facial rejuvenation) | Ceremonial work, soul retrieval, energy clearing |
| Tone | Professional, medical credibility | Mystical, transformative, personal |

> **Important:** Keep the two sites visually distinct to avoid confusing clients. Same technical stack, different branding.

---

## 📝 Content Requirements (To Be Gathered from AA)

### Pages & Content Needed
1. **Homepage** - Introduction to shamanic practice, CTA to book session
2. **About Page** - Deanna's shamanic journey, training, lineage, credentials
3. **Services Page** - List of offerings with descriptions and pricing:
   - Individual healing sessions (duration + price)
   - Group workshops (dates, locations, prices)
   - Special ceremonies (New Moon, Full Moon, seasonal events)
4. **Workshops Page** - Calendar or list of upcoming group events
5. **Testimonials Page** - Client stories from shamanic work
6. **Service Area Pages** - Blue Ridge, Ellijay, Jasper, Helen (SEO optimization)

### Questions for AA Before Development Starts
- [ ] What is your shamanic training background? (Who taught you? How long practicing?)
- [ ] What specific services do you offer? (List all with prices)
- [ ] Do you have a logo for "Heart Of A Lion Shamanism"?
- [ ] Do you have professional photos of yourself in shamanic context?
- [ ] What are your typical session lengths and pricing?
- [ ] How often do you run workshops? (Monthly? Seasonal?)
- [ ] Do you have existing testimonials from shamanic clients?
- [ ] What is your preferred contact method for booking? (Phone, email, calendar link)

---

## 🔧 Technical Implementation Notes

### Reusable Components from Acupuncture Site
The following can be **copied directly** with minimal changes:

1. **Layout.astro** - Copy and update meta tags, title, logo path
2. **API Contact Route** (`api/contact.ts`) - Same logic works for both sites
3. **Schema Markup Structure** - Change `HealthAndBeautyBusiness` to `LocalBusiness` or create custom `SpiritualService` schema
4. **Mobile CTA Bar** - Sticky "Call Now" and "Book Online" buttons work identically
5. **Form Fields** - Same 4-field structure (Name, Phone, Email, Message)

### Changes Required for Shamanism Site
1. **CSS Styling** - New color palette (reds/golds vs. healing greens/blues)
2. **Navigation Links** - Different page structure (workshops instead of FAQ)
3. **Schema Markup** - Adjust business type and service descriptions
4. **Content** - All text, images, testimonials specific to shamanic practice

---

## 🚀 Deployment Strategy

### Option A: Separate Repository (Recommended)
- Create new GitHub repo: `projaa-shaman` or `heart-of-a-lion-shamanism`
- Deploy to separate Cloudflare Pages site: `heartofalionshamanism.pages.dev`
- Custom domain: `heartofalionshamanism.com` (if available)
- **Pros:** Clean separation, distinct analytics, easier to manage independently

### Option B: Subdirectory on Same Domain
- Keep in same repo under `/shaman/` subfolder
- Deploy as `acupunctureinnorthgeorgia.com/shaman/`
- **Cons:** Blurs brand identity, harder to track separate traffic sources

> **Recommendation:** Go with Option A (separate repository) for clear brand distinction and independent growth.

---

## 📊 SEO Strategy (Same Framework as Acupuncture Site)

### Local SEO Tactics
1. **Google Business Profile** - Create new GBP listing for "Heart Of A Lion Shamanism"
2. **Service Area Pages** - Dedicated pages for Blue Ridge, Ellijay, Jasper, Helen
3. **Schema Markup** - `LocalBusiness` + `Person` schema with shamanic credentials
4. **NAP Consistency** - Name, Address, Phone consistent across all pages
5. **Reviews** - Collect testimonials and encourage Google reviews

### Content Strategy
- Blog posts about shamanic healing benefits (target long-tail keywords)
- Workshop announcements (time-sensitive content for freshness signal)
- Seasonal ceremonies (New Moon, Full Moon, Solstice events)
- Client success stories (builds trust + E-E-A-T signals)

---

## 💰 Cost Savings vs. Alternatives

| Platform | Monthly Cost | Annual Savings |
|----------|--------------|----------------|
| Wix (if AA used same provider) | $27-49 | **$324-588/year** |
| Squarespace | $23-49 | **$276-588/year** |
| WordPress + hosting | $10-30 | **$120-360/year** |
| **This solution** | **$0** | Complete ownership, no lock-in |

---

## 📅 Development Timeline Estimate

| Phase | Tasks | Estimated Time |
|-------|-------|----------------|
| **Phase 1: Setup** | Create repo, copy Astro config, set up basic structure | 2-3 hours |
| **Phase 2: Content Gathering** | AA provides all text, images, pricing info | 1-2 days (client-dependent) |
| **Phase 3: Page Build** | Build all pages with shamanic branding | 6-8 hours |
| **Phase 4: SEO & Schema** | Local keywords, service area pages, schema markup | 3-4 hours |
| **Phase 5: Testing & Deployment** | Test forms, deploy to Cloudflare, submit to Google | 2-3 hours |

**Total Estimated Developer Time:** ~15-20 hours (can be done in 1-2 weeks with AA's content ready)

---

## 🎯 Success Metrics for Task 2

### Technical Performance
- ✅ Zero JavaScript sent to browser (Astro default)
- ✅ Sub-2.5 second load times on Core Web Vitals
- ✅ Mobile-first responsive design
- ✅ Schema markup on every page
- ✅ Form submissions working with email notifications

### Business Goals
- ✅ Lead capture form with immediate notification to AA
- ✅ Preserved existing workflow (form → email → call)
- ✅ Zero monthly hosting costs
- ✅ Self-maintainable by non-technical user via GitHub Copilot
- ✅ SEO optimized for target shamanism keywords in Georgia

### SEO Goals (6-Month Targets)
- Month 1: Site indexed, GBP profile active
- Months 2-3: Rank on page 2 for "Shamanic Healing in Georgia"
- Months 4-6: Top 5 rankings for long-tail local keywords ("shaman healing near me Blue Ridge GA")

---

## 📞 Client Contact & Workflow

**Practice:** Heart Of A Lion Shamanism  
**Practitioner:** Deanna Stennett (AA)  
**Location:** Northern Georgia (Ellijay/Blue Ridge area)  

### AA's Existing Workflow (Preserved)
1. Interested party discovers website
2. Fills out information in email form
3. AA receives email immediately
4. AA gives them a phone call within minutes
5. Appointment scheduled via Cal.com link or direct coordination

---

## 🔗 Integration with Acupuncture Practice

### Cross-Promotion Opportunities
- Add subtle "Also offer shamanic healing" link on acupuncture site footer
- Add "Acupuncture services also available" link on shamanism site footer
- Shared Google Business Profile? (Probably not recommended - different business types)
- Combined MailChimp newsletter (if AA wants to promote both practices)

### Brand Separation Recommendation
Keep the two practices visually and technically separate:
- Different domains or subdomains
- Distinct color palettes and imagery
- Separate social media profiles
- Independent analytics tracking

This allows each practice to grow organically without confusing potential clients.

---

## 📝 Pre-Development Checklist for AA

Before Eliot begins development, please provide:

- [ ] Shamanic services list with descriptions and pricing
- [ ] Session lengths (e.g., 60-min individual session = $X)
- [ ] Workshop schedule or frequency information
- [ ] Professional photo(s) in shamanic context (if available)
- [ ] Logo for "Heart Of A Lion Shamanism" (SVG preferred, or description of what you want)
- [ ] At least 2-3 testimonials from shamanic clients
- [ ] Your shamanic training background and credentials (for About page)
- [ ] Preferred contact email for form submissions
- [ ] Any existing website content or notes to preserve

---

## 🧹 Post-Launch Maintenance Tasks

### Weekly/Monthly (AA can do via GitHub Copilot)
- Add new testimonials as they come in
- Announce upcoming workshops
- Write blog posts about shamanic topics
- Update Google Business Profile with weekly posts

### Quarterly
- Review SEO rankings and adjust keywords if needed
- Check form submissions are working correctly
- Update service offerings or pricing if changed

---

## 📄 Files Reference (To Be Created)

| File | Purpose |
|------|---------|
| `README.md` | Full deployment and maintenance documentation for shamanism site |
| `old_site_summary.md` | If AA has existing shamanic website content to preserve |
| `CONTENT_NEEDED.md` | Detailed list of all text/images needed from client |

---

**Project Status:** ⏳ READY FOR DEVELOPMENT - Awaiting client content  
**Next Step:** Schedule 30-minute call with AA to gather all required content and assets  
**Estimated Completion:** 2-3 weeks after content is received  

---

## 💡 Key Lessons from Task 1 (Acupuncture Site)

### What Worked Well
✅ Astro framework - zero-JS, fast loading, easy to maintain  
✅ Cloudflare Pages - free hosting with global CDN  
✅ GitHub Copilot for non-technical content updates  
✅ Service area pages for local SEO  
✅ Sticky mobile CTAs for conversion optimization  

### What to Improve for Task 2
🔧 Add workshop calendar feature (not needed on acupuncture site)  
🔧 More prominent shamanic imagery and branding from day one  
🔧 Consider adding a blog section earlier (shamanism content is highly blog-worthy)  
🔧 Set up separate Google Analytics property from launch  

---

**Ready to build!** 🦁✨
