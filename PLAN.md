# HOI STUDS — Build Plan

## Product Goal

Build a premium, conversion-focused landing page for HOI STUDS. The site must position the brand as an elite French Bulldog genetics program rather than a product store.

Primary conversion path:

`Desire -> Information -> Trust -> Purchase`

## Creative Direction

**The HOI Championship Lab**

Black, electric blue, chrome, cream and soft pink. Use cinematic French Bulldog photography, oversized typography, negative space and restrained motion. The hero is the signature experience: each stud changes the visual atmosphere, not only the image.

## Information Architecture

1. Shared header: HOI STUDS, Home, Services, Our Studs, Contact, Buy Now, Lock-In.
2. Home: dynamic stud hero, brand philosophy and primary conversion CTA.
3. `/services`: Stud Service, Lock-In, Genetic Consultation and Shipping.
4. `/studs`: editorial profiles with individual stud anchors.
5. `/lock-in`: $500 deposit, 24 months and choose later offer.
6. `/contact`: consultation form and GHL handoff.
7. Future content: genetics cards, testimonials, puppy proof and FAQ.

## Technical Direction

- Astro for a fast, content-first shell.
- React island for the interactive hero and future matching tool.
- TypeScript for stud and CTA content models.
- Three.js for one atmospheric genetic scanner layer in the hero.
- Framer Motion for UI transitions and reduced-motion-aware interactions.
- GHL remains the transaction and scheduling system.
- External URLs must be configurable, never embedded throughout components.

## Delivery Tasks

### Phase 1 — Foundation

- [x] Create project plan and acceptance criteria.
- [x] Bootstrap Astro, React and TypeScript.
- [x] Establish brand tokens and responsive global styles.
- [x] Create typed stud content data with temporary media.

### Phase 2 — Hero

- [x] Build dynamic stud state and slide transitions with Framer Motion.
- [x] Add keyboard, thumbnail and arrow navigation.
- [x] Add mobile layout and reduced-motion behavior.
- [ ] Add Three.js chrome/DNA atmosphere without blocking content.

### Phase 3 — Conversion Sections

- [x] Build philosophy and service cards.
- [x] Build multipage editorial stud profiles with structured anchors.
- [ ] Build matching questionnaire CTA.
- [x] Build Lock-In section and initial CTA hook.

### Phase 4 — Trust and Content

- [ ] Build verified genetics cards.
- [ ] Add testimonials, puppy results and proof assets.
- [ ] Build contact form handoff to GHL.
- [ ] Add FAQ and footer.

### Phase 5 — Quality

- [ ] Replace temporary images with licensed HOI assets.
- [ ] Optimize video, image loading and Three.js fallback.
- [ ] Verify mobile, keyboard navigation and reduced motion.
- [ ] Run production build and Lighthouse review.

### Phase 6 — Navigation and Motion

- [x] Split the one-page prototype into dedicated routes.
- [x] Add Astro View Transitions between routes.
- [x] Add scroll reveals and mobile navigation.
- [ ] Add shared-element transitions for stud detail routes.

## Acceptance Criteria

- Hero can switch between all configured studs without a page reload.
- Active stud changes image, copy, tags, accent treatment and CTAs.
- Hero controls are keyboard accessible and have useful screen-reader labels.
- Mobile does not require WebGL to understand or use the page.
- `BUY NOW`, `LOCK-IN`, `FIND MY STUD` and contact actions have separate destinations.
- No unverified genetics claims or fabricated business metrics are published.
- The page builds successfully in production.

## Content and Asset Requirements

- Final cutout or cinematic hero images for every stud.
- Mobile crops or responsive focal points.
- Verified DNA panel data and pedigrees.
- GHL URLs for store, Lock-In, calendar and contact form.
- Approved pricing and Lock-In terms: Pink Boss $3,500; all other listed studs $2,500.
- Testimonials with permission to publish.

## Current Work Unit

**Current work unit:** replace the static one-page prototype with a navigable editorial website. The first pass now includes five routes, shared navigation, reduced display scale and visible motion. The next visual pass is the Three.js hero atmosphere and real HOI media.
