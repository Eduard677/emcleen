# Cankaj Split-Site Website Strategy

## Executive recommendation

Build one umbrella experience with two clearly separated service modes:

- **Cankaj Auto** — Cankaj Super Car Wash
- **Cankaj Home** — maintenance, painting, stone masonry, construction and restoration

The homepage should open as a purposeful 50/50 choice: **“Your car”** or **“Your property.”** Selecting either side should trigger a short full-screen wipe that changes the imagery, palette, typography details, navigation, calls to action and content. The transformation is the signature interaction; everything after it should remain calm, quick and familiar.

The best positioning territory is **care and restoration**, not “we do two unrelated things.” Both businesses improve valuable surfaces, reverse wear and leave something looking properly cared for. A strong umbrella thought is:

> **Care for what moves you. Care for where you live.**

The key strategic constraint is that the transformation cannot be only a visual theme switch. Each mode needs a permanent, shareable and indexable URL—ideally `/auto` and `/home`—so Google, ads and referrals can send people directly to the relevant offer. The switcher remains visible in the header and preserves the memorable dual-brand idea.

## What can be verified today

### Confirmed public business information

Cankaj Super Car Wash is publicly listed at **Halpins Service Station, Limerick Road, Boheraroan, Newmarket-on-Fergus, Co. Clare**, with the phone number **087 707 0331**. The listed hours are **Monday–Saturday, 9:00–18:00; Sunday closed**.^1

An Irish business-directory index also lists **Cankaj Supercar Wash** in Limerick and links it to record 714227.^2 A separate directory shows the business at 5.0 from five ratings, but this is an aggregator and should not be treated as authoritative review proof until the live Google Business Profile is checked directly.^3

### Not yet verified

The open web does not currently provide reliable evidence for:

- a public biography or professional history for **Bledar Kancaj**;
- the exact registered/trading name and spelling of **Cankaj Maintenance**;
- whether **BC Stone Masonry & Restoration** is the same Irish business, a former name, a service line or an unrelated company;
- the home-service phone number, email, service area, insurance status, qualifications, years of experience or warranties;
- a definitive list of car-wash packages, prices or booking requirements;
- verified project photos and testimonials owned by the businesses.

This is not a reason to slow the demo down. It means the demo should use clearly labelled draft copy and avoid fabricated claims such as “20 years’ experience,” “fully insured,” “five-star rated” or “heritage specialist” until Bledar confirms them.

## The strategic opportunity

The current local online footprint is thin. That creates more upside than risk: a well-produced website with real photographs, clear offers and a fast enquiry path can immediately make the operation look more established and easier to trust.

Local Irish car-care competitors tend to win on **package clarity and convenience**. Auto Shine publishes explicit package contents and starting prices, while Fresh Car makes location, package and scheduling part of a self-serve quote flow.^4,5 Premium detailing references add stronger visual theatre, before-and-after proof and luxury positioning—but the lessons worth borrowing are clarity and proof, not black-and-gold decoration.^6

Home-service competitors win on a different set of anxieties: proper preparation, tidy work, insurance, transparent communication and confidence that the contractor will finish correctly. Dunleavy Decor makes preparation and clean sites central to its promise; Marc Williams combines proof, before-and-after examples, photo upload and an instant quote tool.^7,8 Premium construction sites put the completed work first and use restrained layouts because the project photography is the strongest sales asset.^9

The split site can therefore feel coherent while optimizing each half around a different buying decision:

| Mode | Visitor’s immediate question | Best proof | Primary conversion |
|---|---|---|---|
| Auto | “What can I get, how much is it, and when can you do it?” | Results, inclusions, price, reviews, location | Book / call / WhatsApp |
| Home | “Can I trust you with my property, and do you handle my type of job?” | Real projects, process, insurance, reviews, detail shots | Request an estimate with photos |

## Three creative directions

### 1. The Transforming Surface — recommended

**Idea:** one brand built around restoring surfaces. Water travels across the screen when switching to Auto; the same moving edge becomes a paint or plaster reveal when switching to Home.

**Auto expression:** wet graphite, clean white, controlled cobalt blue, close-up reflections, crisp condensed headings.

**Home expression:** warm limestone, chalk, deep olive or oxblood, natural light, wider editorial typography and detailed material photography.

**Why it works:** the switch feels conceptually earned. It is premium without pretending the local wash is an exotic-car atelier, and it gives both businesses equal dignity.

**Hero copy:**

> **Two kinds of care. One standard.**  
> Choose what we can restore for you today.

Buttons: **My car** / **My property**

### 2. Built by Bledar

**Idea:** make the founder the umbrella. The two businesses become expressions of one reputation for hands-on work.

**Possible lockup:** **BLEDAR / AUTO + HOME**

**Why it works:** excellent for referrals and local trust if customers already know him personally. It creates a credible bridge between unrelated service categories.

**Risk:** this direction depends on genuine founder photographs, a confirmed personal story and permission to foreground Bledar. Without those, it will feel manufactured.

### 3. Cankaj Works

**Idea:** a more expandable holding identity with two divisions: **Auto Care** and **Property Care**.

**Why it works:** straightforward, professional and future-proof if more services will be added.

**Risk:** “Works” can sound like a large construction group and may weaken the friendliness of a local car wash. It is the safest corporate answer but the least distinctive.

## Recommended brand architecture

Use **CANKAJ** as the parent wordmark, paired with a changing descriptor:

- `CANKAJ / AUTO`
- `CANKAJ / HOME`

Keep the existing public trading name visible beneath Auto: **Cankaj Super Car Wash, Newmarket-on-Fergus.** For Home, use **Cankaj Property Care** as a draft descriptor until the exact legal/trading identity is confirmed. If BC Stone Masonry & Restoration is verified as part of the same operation, present it as either:

- a specialist service line: **Stone & Restoration by BC Masonry**, or
- the formal Home identity: **BC Stone Masonry & Restoration — a Cankaj business**.

Do not force all names into the logo. The logo should be short; the legal and descriptive names can appear in page copy and the footer.

## Experience architecture

### First visit

1. A nearly full-screen split shows a pristine vehicle detail on the left and a beautifully restored property detail on the right.
2. The central line is active: hover or touch slightly expands a side and changes the one-line description.
3. The visitor selects **Car wash & valeting** or **Painting, masonry & restoration**.
4. A 500–700 ms reveal transitions into the chosen site.
5. The selected mode is remembered, but the next visit still offers a small, obvious switch in the header.

### Returning and direct visitors

- `/auto` opens Auto immediately.
- `/home` opens Home immediately.
- Search ads and Google Business Profiles should never land on the choice screen.
- The header uses a compact two-position control: **AUTO | HOME**.
- Switching keeps the visitor at an equivalent section where possible—for example Auto Services to Home Services—but returning to the other mode’s top is acceptable for the MVP.

### Sitemap

```text
/
├── /auto
│   ├── Services & prices
│   ├── Results
│   ├── Visit us
│   └── Book / enquire
└── /home
    ├── Services
    ├── Projects
    ├── How we work
    └── Request an estimate
```

For the first demo, these can be two rich single-page experiences under separate URLs. Individual service and project pages can be added later for search visibility.

## Page plans

### Auto mode

1. **Hero:** one excellent real vehicle image, location, opening status/hours and two actions: **View services** and **Call 087 707 0331**.
2. **Fast package chooser:** three or four cards only—Wash, Mini Valet, Full Valet, Deep Detail—with honest “from” prices once confirmed.
3. **Transformation proof:** one strong before/after slider and a compact grid of recent work.
4. **Trust strip:** verified Google rating, products/methods, expected duration and “hand finished” only if accurate.
5. **Visit:** map, recognizable photo of the service-station entrance, hours and simple directions.
6. **Final CTA:** call, WhatsApp or request a slot.

Suggested copy territory:

> **A proper clean. A finish you notice.**  
> Hand car wash and valeting in Newmarket-on-Fergus.

Avoid describing basic wash services with inflated language such as “bespoke automotive atelier.” Premium comes from the execution, not grandiose copy.

### Home mode

1. **Hero:** one completed exterior or room, the actual service area and **Request a free estimate**.
2. **Service selector:** Painting & decorating; property maintenance; stone & masonry; repair & restoration; exterior cleaning—only those confirmed.
3. **Featured projects:** image-led case studies with location, scope, materials and the problem solved.
4. **How it works:** Send photos → Site visit if needed → Written estimate → Work completed → Final walkthrough.
5. **Trust:** named testimonials, insurance, qualifications, workmanship promise and tidy-site practices—only after verification.
6. **Estimate form:** name, phone, area/Eircode, service, timeframe, short description and photo upload.

Suggested copy territory:

> **Looked after. Properly.**  
> Painting, maintenance and restoration for homes across Clare and [confirmed areas].

The photo request is operationally valuable, not just a website feature. A specialist masonry consultation page asks prospects for project photos, access details and the property address before assessing the job.^10

## The “expensive but easy” visual system

### Shared foundation

- One grid, component library and interaction model across both modes.
- Generous whitespace; no crowded icon rows or endless cards.
- Two typefaces maximum.
- Real photography dominates; copy is short and concrete.
- Square or lightly rounded controls. Avoid a generic sea of floating rounded cards.
- Minimal animation, reserved for the mode switch, image reveals and discreet section entrances.

### Auto tokens

- Background: `#0B0D0F` near-black
- Surface: `#15191D` gunmetal
- Text: `#F2F4F5`
- Accent: `#2D8CFF` controlled electric blue
- Detail: fine chrome lines and reflected highlights
- Type: modern grotesk/condensed display + neutral sans body

This should feel like a clean professional bay after rain, not a gaming site. Avoid neon glows, carbon-fibre textures, gold gradients and looping supercar video unless they are authentic to the actual business.

### Home tokens

- Background: `#EEE9DF` warm limestone
- Surface: `#F8F5EF` limewash
- Text: `#1F211D` charcoal olive
- Accent: `#7A3E2E` iron oxide or `#415343` deep moss
- Detail: thin ruled lines, subtle stone grain, honest material close-ups
- Type: quiet editorial serif display + the same neutral sans body

The best premium residential sites rely on exceptional full-bleed project imagery and almost disappear around it. Archetype Projects is a strong benchmark for that restraint; London Bricklayer is a better benchmark for the lead-gen balance, placing a concise proposition and quote form together above the fold.^9,11

## Signature interactions: one hero move, three supporting moves

### Hero move: the material wipe

The switch starts at the toggle and sweeps across the page. In Auto mode, it reads as water clearing a surface. In Home mode, it reads as a fresh finish revealing the property. Duration should stay below one second and respect `prefers-reduced-motion`.

### Supporting move 1: before/after reveal

Use the same component in both modes. Auto reveals a corrected/cleaned vehicle; Home reveals a painted room, repaired wall or restored stone. This repeated grammar is what makes the two businesses feel related.

### Supporting move 2: contextual cursor or touch label

On desktop, project imagery can display a small **View result** label. On mobile, use a normal button; do not make critical actions depend on hover.

### Supporting move 3: service “concierge”

A compact three-question helper recommends a service:

- Auto: vehicle size → interior/exterior/both → condition
- Home: type of work → property area → timing

It should end in a prefilled enquiry, not pretend to provide a binding quote.

Avoid scroll hijacking, long preloaders, 3D cars, loud sound, hidden menus or cinematic transitions between every section. Those add cost and friction without improving lead quality.

## Lead-generation design

### Auto funnel

**Primary:** call or WhatsApp for near-term local demand.  
**Secondary:** request/book a slot.  
**Form length:** 4–6 fields.

Recommended fields: name, mobile, vehicle type, requested package, preferred day and optional note/photo.

Show service duration and starting price beside each package once confirmed. This removes avoidable calls while keeping the choice simple. Fresh Car demonstrates the value of combining location, vehicle and package in its quote journey.^5

### Home funnel

**Primary:** request a free estimate.  
**Secondary:** call or WhatsApp.  
**Form length:** 6–8 fields with optional photo upload.

Use a two-step form: first the job type and area; then contact details and photos. The completion screen should set an honest response expectation such as **“We’ll call within one working day”** only if operations can support it.

### Universal conversion rules

- Sticky bottom action on mobile.
- Phone numbers are tap-to-call.
- Do not show three equal calls to action at once.
- Put review proof close to the first CTA.
- Use specific button labels: **Request my estimate**, **Call the wash**, **Send project photos**.
- Track mode selections, calls, WhatsApp clicks, package interest, form starts and form completions separately.

## Local search and business-profile plan

The site and Google Business Profile should use the real-world business names consistently. Google advises complete and accurate information, current hours, correct categories, photos and review responses; local visibility is mainly influenced by relevance, distance and prominence.^12

Recommended setup:

- Maintain the car wash as a storefront/hybrid listing only if permanent signage and customer access match Google’s rules.
- Maintain Home as a service-area business if work is performed at customer properties and there is no staffed storefront. Google asks service-area businesses to define real towns/postcodes and hide a residential address.^13
- Use separate landing URLs, categories, hours and phone numbers where the businesses genuinely differ.
- Add authentic exterior, interior and at-work photos. Google explicitly recommends clear, well-lit, minimally altered images that represent reality.^14
- Ask every satisfied customer for an honest Google review via the official review link or QR code; never offer an incentive.^15
- Add appropriate `LocalBusiness` structured data for each real entity, including name, address/service area, phone, opening hours and URL. Google supports distinct department details where a site represents multiple business units.^16

Future search pages should be based on genuine services and coverage, for example:

- `/auto/car-wash-newmarket-on-fergus`
- `/auto/car-valeting-clare`
- `/home/house-painting-clare`
- `/home/stone-masonry-restoration-clare`

Do not create dozens of near-duplicate town pages. Build a few useful service pages with real projects, photographs, FAQs and service-area details.

## Reference shortlist and what to borrow

| Reference | Borrow | Do not copy |
|---|---|---|
| Hyer Quality Detail | Service pillars, visual confidence, proof-led premium positioning | Overstatement if the local service is primarily wash/valet |
| Vanta Auto Atelier | Dark editorial restraint, technical clarity, cinematic pacing | Fictional luxury cues disconnected from real operations |
| Fresh Car Valeting | Clear packages, location-aware quote/booking flow | Franchise-scale complexity in the MVP |
| Auto Shine | Transparent inclusions and vehicle-size pricing | Long undifferentiated service lists |
| Archetype Projects | Full-bleed real project imagery and quiet luxury | Architecture-studio vagueness about practical services |
| London Bricklayer | Direct value proposition plus quote form above fold | A large desktop form on small screens |
| Dunleavy Decor | Preparation, tidiness and accountability as premium signals | Long prose before visual proof |
| Marc Williams | Before/after proof, photo upload and preliminary quote logic | A calculator before real pricing inputs are known |

## Recommended MVP demo

The demo should prove the idea in one polished vertical slice:

1. Split entry screen.
2. Fully animated Auto/Home theme switch.
3. Two complete hero states.
4. Tailored service cards for both modes.
5. Shared before/after component with sample placeholders clearly marked.
6. Tailored lead forms.
7. Mobile sticky CTA.
8. Direct `/auto` and `/home` routes.

The demo does not need a CMS, login, payment flow, complicated scheduling or ten pages. It needs to make the transformation feel effortless and make each business easy to understand within ten seconds.

## Content required from Bledar before launch

### Identity and operations

- Confirm spelling: **Bledar Kancaj** and **Cankaj**.
- Confirm the exact trading/legal names and relationship between all three names.
- Confirm phone, WhatsApp and email for each mode.
- Confirm storefront address, service area and working hours.
- Confirm whether customers book, walk in, or both.

### Auto

- Final service list, inclusions, prices and typical duration.
- Vehicle-size pricing rules.
- 12–20 original photos: team at work, entrance, wash stages, interiors and finished cars.
- Link to the verified Google Business Profile and best real reviews.
- Products, techniques or guarantees that can be factually claimed.

### Home

- Exact services and jobs not accepted.
- Coverage towns/counties and minimum job size.
- Insurance, registration, qualifications and warranty information.
- 8–12 completed projects with before/after photos, location, scope and short outcome.
- Three to six named testimonials with permission.
- A genuine founder portrait and short story if the founder-led route is chosen.

## Decision

Proceed with **The Transforming Surface** direction, using **CANKAJ / AUTO** and **CANKAJ / HOME** as the demo labels. Make the split entrance the “cool factor,” then let real images, exact services and proof carry the rest of the experience.

The concept is memorable because the entire site changes character. It remains usable because the navigation, layout and interaction patterns do not change. That balance—dramatic once, calm everywhere else—is what will make it feel expensive.

## Sources

1. BizIreland. [“Cankaj Super Car Wash.”](https://www.bizireland.com/super-carwash-083-810-5075)
2. SoloCheck. [“Irish Business Names Beginning with CA.”](https://www.solocheck.ie/IrishBusinessInfo?i=CA)
3. Guide.in.ua. [“Best Car Wash in Limerick.”](https://guide.in.ua/limerick/best-car-wash-in-limerick)
4. Auto Shine Ballinrobe. [“Car Wash Ballinrobe and Valeting Service.”](https://autoshine.ie/)
5. Fresh Car Valeting. [“Mobile Car Valeting in Ireland.”](https://freshcar.ie/)
6. Zarla. [“The Best Car Detailing Website Examples, Explained.”](https://www.zarla.com/inspiration/car-detailing)
7. Dunleavy Decor. [“Dublin’s Specialist Painting & Decorating Company.”](https://dunleavydecor.ie/)
8. Marc Williams Painting & Decorating. [“Premium Painting Contractors Dublin.”](https://marcwilliams.ie/)
9. Whitelam Media. [“The 15 Best Construction Company Websites in 2026.”](https://whitelam.media/insights/best-construction-company-websites-2026)
10. Lennox Masonry. [“Our Masonry Consultation Process.”](https://www.lennoxmasonry.com/consultations)
11. London Bricklayer. [“Heritage Brickwork & Stone Restoration Specialists.”](https://www.londonbricklayer.co.uk/)
12. Google Business Profile Help. [“Tips to Improve Your Local Ranking on Google.”](https://support.google.com/business/answer/7091?hl=en)
13. Google Business Profile Help. [“Manage Your Service Areas.”](https://support.google.com/business/answer/9157481?hl=en)
14. Google Business Profile Help. [“Tips for Business-Specific Photos.”](https://support.google.com/business/answer/6123536?hl=en)
15. Google Business Profile Help. [“Tips to Get More Reviews.”](https://support.google.com/business/answer/3474122?hl=en)
16. Google Search Central. [“Local Business Structured Data.”](https://developers.google.com/search/docs/appearance/structured-data/local-business)

