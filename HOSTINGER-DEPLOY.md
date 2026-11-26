# Deploy on Hostinger (learning guide)

Your site is **static** — upload files to **`public_html`** (no build step).

---

## “Free domain” — what is actually free?

| Option | Free? | Good for learning? |
|--------|-------|-------------------|
| **Custom `.com` / `.in`** | No (≈ ₹700–1500/year) | Real client sites |
| **Free domain bundled with Hostinger yearly plan** | Often **1st year free** on promos | Yes, when buying hosting |
| **`something.hostingersite.com`** (temporary / builder URL) | Often yes during setup | **Yes — best for practice** |
| **Registro .tk / random “free” TLDs** | “Free” but unreliable | Not recommended |

**For learning without paying for a domain yet:** use Hostinger hosting (trial or cheapest plan) and the **temporary subdomain** Hostinger gives you until you attach your own domain.

---

## Before you start

Folder to upload:

```
index.html
privacy.html
css/style.css
js/config.js
js/site.js
img/ (all images)
```

**Do not upload** `.git` folder.

---

## Step 1 — Create Hostinger account

1. Go to https://www.hostinger.com (use **.in** if you prefer INR).
2. Choose **Web Hosting** → cheapest plan (e.g. Premium is often enough).
3. During checkout you may pick a **free domain for 1 year** (e.g. `yourname-demo.site`) — good for practice.
4. Complete payment → open **hPanel** (Hostinger control panel).

*If you only want to practise upload first:* complete signup and note any **default / temporary site URL** shown in hPanel (e.g. under **Websites**).

---

## Step 2 — Open File Manager

1. hPanel → **Websites** → select your site.
2. **File Manager** → open **`public_html`**.
3. Delete default files if present (`index.php`, `default.php`, etc.) — **keep backup** if unsure; for learning, empty folder is fine.

---

## Step 3 — Upload your site

### Method A — File Manager (easiest)

1. **Upload** → select all files/folders from your PC:
   - `index.html`, `privacy.html`
   - folders `css`, `js`, `img`
2. Wait until upload completes.
3. Structure must look like:

```
public_html/
  index.html
  privacy.html
  css/style.css
  js/config.js
  js/site.js
  img/...
```

### Method B — ZIP

1. On PC: zip **contents** of `Construction` (not the parent folder name only — open zip and see `index.html` at top level).
2. Upload zip to `public_html` → **Extract**.
3. Delete the zip after extract.

---

## Step 4 — Test in browser

Open:

- `https://YOUR-TEMP-DOMAIN.hostingersite.com/`  
  **or**  
- `https://your-free-domain.site/` (if you registered one)

Check: home page, popup, `https://.../privacy.html`, images load.

If you see **403 / directory list**: ensure `index.html` is directly inside `public_html`.

---

## Step 5 — Enable HTTPS (SSL)

1. hPanel → **SSL** (or **Security** → SSL).
2. Enable **Free SSL** (Let’s Encrypt) for your domain.
3. Turn **Force HTTPS** on if available.
4. Wait 5–30 minutes, then open `https://...` again.

---

## Step 6 — Connect your own domain (when client buys one)

1. hPanel → **Domains** → **Add website** or **Point domain**.
2. If domain is **at Hostinger**: attach to same hosting.
3. If domain is **elsewhere** (GoDaddy, Namecheap):
   - Set nameservers to Hostinger **or**
   - Add **A record** / **CNAME** as Hostinger instructions show.
4. Wait for DNS (minutes to 24 hours).

---

## Step 7 — Upload changes later

Edit locally → upload **only changed files** (e.g. `js/config.js`) via File Manager or FTP.

**FTP (optional):** hPanel → FTP Accounts → use FileZilla with host, user, password → remote folder `public_html`.

---

## Common mistakes

| Problem | Fix |
|---------|-----|
| Blank page | Wrong path: need `public_html/index.html` |
| No CSS | `index.html` must link `css/style.css` not `style.css` at root |
| Popup broken | Ensure `js/config.js` and `js/site.js` uploaded |
| Mixed content | Use `https://` URLs only |
| Old site shows | Clear browser cache; hard refresh Ctrl+Shift+R |

---

## Practice checklist

- [ ] Site loads on Hostinger URL  
- [ ] Enquiry popup after 2.5s  
- [ ] WhatsApp opens after submit (test on phone)  
- [ ] `privacy.html` opens  
- [ ] Mobile layout OK  

---

## Cost summary (typical learning path)

- Hosting: Hostinger plan (~₹99–199/month on promo, varies)  
- Domain: free 1st year on some plans **or** use temp `hostingersite.com` URL  
- No VPS needed  