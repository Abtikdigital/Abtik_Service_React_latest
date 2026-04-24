# SEO Score Maximization - Task Tracker

## Issues from Seobility Audit (Current: 63%)
- [x] **Meta data (91%)**: Canonical points to different domain
- [x] **Server (0%)**: No www/non-www redirect
- [x] **Page quality (64%)**: H1 words not found in page text
- [x] **Page quality (64%)**: 12 text duplicates (testimonials duplicated)
- [x] **Page structure (58%)**: Duplicate heading texts (MSME Certificate, NBFC Loan)
- [x] **Page structure (58%)**: 41 headings (too many for 1,419 words)
- [x] **Links (97%)**: Some anchor texts used more than once

## Edit Plan

### 1. Dynamic Canonical & Metadata
- [x] Update `src/app/page.tsx` - Use dynamic host-based canonical
- [x] Update `src/app/layout.tsx` - Dynamic metadataBase

### 2. Enforce www → non-www 301 Redirects
- [x] Update `netlify.toml` - Add www redirects
- [x] Update `public/_redirects` - Add www redirects

### 3. Inject H1 Keywords into Body Copy
- [x] Update `src/components/pages_legacy/Home.tsx` - Add H1 text to hero paragraph

### 4. Remove Duplicate Heading Texts
- [x] Update `src/section/OurService.tsx` - Rename "NBFC Loan" → "NBFC Business Loan", "MSME Certificate" → "MSME Certificate Registration"
- [x] Update `src/section/Recommended.tsx` - Ensure no duplicates with OurService

### 5. Reduce Heading Count
- [x] Update `src/section/OurService.tsx` - Card titles h2 → p
- [x] Update `src/section/Recommended.tsx` - Card titles h2 → p
- [x] Update `src/section/NewBlog.tsx` - Card titles h2 → p
- [x] Update `src/section/ClientStats.tsx` - h2/h3 → p

### 6. Eliminate Text Duplicates (Testimonials)
- [x] Update `src/section/Testimonial.tsx` - Remove duplicated testimonial array for marquee

### 7. Deduplicate Footer Anchor Texts
- [x] Update `src/section/Footer.tsx` - Rename links to be unique vs navbar

### 8. Follow-up
- [ ] Build & deploy
- [ ] Re-run Seobility check

