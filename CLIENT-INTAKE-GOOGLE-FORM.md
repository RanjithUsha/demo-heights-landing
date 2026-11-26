# Client intake — Google Form blueprint (+ Lovable comparison)

You **cannot** auto-create a Google Form from this chat; copy each **title** and **type** into [Google Forms](https://forms.google.com) → **Blank form**.

---

## Before you create the form

1. Sign in with the **Google account** that will own client files (recommend a dedicated **Google Workspace** or business Gmail).
2. Form settings → **Responses** → turn on **Collect email addresses** (optional but useful).
3. For **File upload** questions, Forms will ask you to **choose a Drive folder** — create e.g. `Construction Clients / [Responses]` and allow uploads.
4. **Important:** File upload only works if respondents can **sign in to Google** (Forms setting). Tell clients: *“Use a Google account or upload via link we share if needed.”*

**Alternative if clients refuse Google login:** use **Tally.so** (free, file upload, no login) — same questions below.

---

## Form title & description (paste)

**Title:** `New Project Website — Client Details`

**Description:**

```
Thank you for choosing our website package (₹6,000).

Please fill all required fields. Use clear project images (JPG/PNG/WebP). 
For location, paste the exact Google Maps link from Share → Copy link.

Payment: 50% advance after we confirm your form. Timeline starts when this form + advance are complete.

Questions? WhatsApp: [YOUR NUMBER]
```

---

## Section 1 — Client & project identity

| # | Question title | Type | Required |
|---|----------------|------|----------|
| 1 | Company / marketing entity name (for footer & privacy policy) | Short answer | Yes |
| 2 | Project name (as on website headline) | Short answer | Yes |
| 3 | Project tagline / location line (e.g. "At Whitefield, East Bengaluru") | Short answer | Yes |
| 4 | Developer / builder name ("By ___") | Short answer | Yes |
| 5 | Project type (e.g. 2, 3 & 4 BHK apartments / villas / plots) | Short answer | Yes |
| 6 | Starting price text (e.g. "₹ 1.07 Cr* Onwards") | Short answer | Yes |
| 7 | One-paragraph project overview (about the project) | Paragraph | Yes |

---

## Section 2 — Contact & leads (goes to website)

| # | Question title | Type | Required |
|---|----------------|------|----------|
| 8 | Phone number for website (with country code, e.g. +91 98…) | Short answer | Yes |
| 9 | WhatsApp number for leads (10 digits, country code 91 — no + in wa.me) | Short answer | Yes |
| 10 | Default WhatsApp enquiry message you want pre-filled | Paragraph | Yes |
| 11 | Email for privacy policy contact (shown on privacy page) | Short answer | Yes |

---

## Section 3 — Pricing configurations

Use one **multiple-choice grid** OR repeat blocks. Easiest: **Paragraph** per configuration.

| # | Question title | Type | Required |
|---|----------------|------|----------|
| 12 | Configuration 1 — name, carpet/sq.ft, price (one line each) | Paragraph | Yes |
| 13 | Configuration 2 (leave blank if not applicable) | Paragraph | No |
| 14 | Configuration 3 | Paragraph | No |
| 15 | Configuration 4 | Paragraph | No |
| 16 | Pricing footnote (e.g. "*Prices indicative, confirm on WhatsApp") | Short answer | Yes |

---

## Section 4 — Highlights, amenities, location text

| # | Question title | Type | Required |
|---|----------------|------|----------|
| 17 | 5–8 bullet highlights (one per line) | Paragraph | Yes |
| 18 | Amenities list (one per line, e.g. Swimming Pool, Clubhouse) | Paragraph | Yes |
| 19 | Location — Connectivity (bullets with distances) | Paragraph | Yes |
| 20 | Location — Education | Paragraph | No |
| 21 | Location — Healthcare | Paragraph | No |
| 22 | Location — Malls & retail | Paragraph | No |

---

## Section 5 — Google Maps pin (exact location)

Add a **description** under this section in the form:

```
How to get the link:
1) Open Google Maps on phone or computer.
2) Long-press / click the exact project site.
3) Tap Share → Copy link (or "Send a link").
4) Paste below. Do NOT only send the area name.
```

| # | Question title | Type | Required |
|---|----------------|------|----------|
| 23 | Google Maps **share link** (paste full https://maps.google.com/… or goo.gl maps link) | Short answer | Yes |
| 24 | Google Maps **embed link** (optional: Share → Embed a map → copy src from iframe) | Short answer | No |
| 25 | If map unavailable, type full address for us to pin manually | Paragraph | No |

*(You paste the embed `src` into `location.mapEmbedUrl` in `js/config.js`.)*

---

## Section 6 — Images (file upload)

**Settings per upload question:** Allow **specific file types** → Images; max size as needed (10 MB per file typical).

| # | Question title | Type | Required | Notes |
|---|----------------|------|----------|-------|
| 26 | Logo (PNG with transparent background preferred) | File upload | Yes | 1 file |
| 27 | Hero banner — **desktop** (wide, ~1400px wide recommended) | File upload | Yes | 1 file |
| 28 | Hero banner — **mobile** (tall/wide phone hero) | File upload | No | Or same as desktop |
| 29 | Master plan image | File upload | Yes | 1 file |
| 30 | Floor plan — 2 BHK (or smallest unit) | File upload | No | |
| 31 | Floor plan — 3 BHK | File upload | No | |
| 32 | Floor plan — 4 BHK | File upload | No | |
| 33 | **Gallery images** (upload all in one go OR use multiple files if enabled) | File upload | Yes | Allow **multiple files** if option available |
| 34 | OR: Single **ZIP** of all gallery images | File upload | No | Use if multiple upload is awkward |

**Help text for gallery:** Minimum 4 images; maximum 20; no watermarks you don't own.

---

## Section 7 — FAQ & developer

| # | Question title | Type | Required |
|---|----------------|------|----------|
| 35 | FAQ — Question 1 | Short answer | Yes |
| 36 | FAQ — Answer 1 | Paragraph | Yes |
| 37 | FAQ — Q2 / A2 (optional) | Short + Paragraph | No |
| 38 | FAQ — Q3 / A3 | Short + Paragraph | No |
| 39 | FAQ — Q4 / A4 | Short + Paragraph | No |
| 40 | About the developer (one paragraph) | Paragraph | Yes |
| 41 | Hero stats (optional: Land parcel, Open space, Towers — one per line) | Paragraph | No |

---

## Section 8 — Legal

| # | Question title | Type | Required |
|---|----------------|------|----------|
| 42 | RERA registration number(s) (exact copy from RERA portal) | Paragraph | Yes |
| 43 | I confirm prices/copy are approved for marketing * | Multiple choice: I agree | Yes |
| 44 | I confirm we have rights to use all uploaded images * | Multiple choice: I agree | Yes |
| 45 | I approve use of standard marketing disclaimer template * | Multiple choice: I agree / I will send custom text | Yes |
| 46 | Custom disclaimer text (only if you chose custom above) | Paragraph | No |

---

## Section 9 — Delivery & payment

| # | Question title | Type | Required |
|---|----------------|------|----------|
| 47 | Preferred website URL name (e.g. `lodha-whitefield` for xxx.netlify.app) | Short answer | No |
| 48 | Custom domain (if any) — domain already purchased? | Multiple choice: No / Yes, domain is ___ | No |
| 49 | Target go-live date | Date | No |
| 50 | Additional notes | Paragraph | No |

---

## After responses arrive

1. **Responses** tab → link to **Google Sheets** (automatic).
2. Download uploaded images from **Drive folder** per client.
3. Copy text into `js/config.js`; rename and compress images into `img/`.
4. Paste map **embed URL** into `location.mapEmbedUrl`.
5. Send client live Netlify preview → one revision round → balance payment.

---

## Google Form vs Lovable (for client intake)

| | **Google Form** | **Lovable** |
|---|-----------------|---------------|
| **Purpose** | Forms & file collection | AI **app builder** (React sites/products) |
| **Cost** | Free | Paid subscription |
| **File upload** | Yes (Drive, **Google sign-in**) | You’d **build** a custom upload app |
| **Maps pin** | Client pastes **Maps link** (standard) | Custom map UI = dev time |
| **Your effort** | 10 min setup, copy this doc | Hours–days building + maintaining app |
| **Responses** | **Google Sheet** + Drive folder | You host database/backend |
| **Best for** | **₹6k freelancer intake** | Building a **product**, not a form |
| **Verdict** | **Use Google Form** (or **Tally**) | **Not better** for collecting client details |

**Lovable is not a replacement for Google Forms.** It is for building web applications. Using it only for client onboarding is overkill, costly, and harder for non-technical clients.

### When to use what

| Tool | Use when |
|------|----------|
| **Google Form** | Default; client can use Google; free; you already use Sheets/Drive |
| **Tally.so** | Client refuses Google login; still want uploads + free |
| **Jotform / Typeform** | Branded forms; some free limits |
| **Lovable** | You want a **branded client portal** with login, dashboards, status — charge **₹25k+**, not ₹6k |
| **Notion form** | You work in Notion |

---

## Optional: Form confirmation message

```
Thank you! We received your details. We will review within 1–2 business days and contact you on WhatsApp for any missing items. Work starts after 50% advance is received.
```

---

## Share link text (WhatsApp to client)

```
Please complete this form so we can build your project website. 
Use exact Google Maps "Share → Copy link" for location. 
Upload logo, banner, gallery, and plans in the form (Google sign-in required for uploads).

Form link: [PASTE FORM URL]

After submitting, send ₹3,000 advance to [UPI] and share payment screenshot.
```