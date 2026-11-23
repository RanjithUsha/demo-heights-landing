# Deploy your construction landing page

Static site — no server required. Recommended: **GitHub** (code) + **Netlify** or **Cloudflare Pages** (hosting) + **domain registrar**.

---

## Step 1 — Push to GitHub

### 1a Create a GitHub account

https://github.com/signup

### 1b Create an empty repository

GitHub → **New repository** → name e.g. `demo-heights-landing` → **Private** or Public → **Do not** add README (you already have files).

### 1c Push from your PC (PowerShell)

```powershell
cd "C:\Users\Ranji\OneDrive\Desktop\Construction"
git init
git add .
git commit -m "Construction landing page with enquiry popup"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/demo-heights-landing.git
git push -u origin main
```

When asked to sign in, use GitHub username + **Personal Access Token** (not password):

- GitHub → Settings → Developer settings → Personal access tokens → Generate (repo scope).

### Alternative: GitHub Desktop

1. Install https://desktop.github.com  
2. File → Add local repository → select `Construction` folder  
3. Publish repository  

---

## Step 2 — Deploy (choose one host)

### Option A — Netlify (easiest for beginners)

1. https://app.netlify.com → Sign up (use GitHub login).  
2. **Add new site** → **Import an existing project** → GitHub → pick your repo.  
3. Build settings:

   | Field | Value |
   |-------|--------|
   | Build command | *(leave empty)* |
   | Publish directory | `.` or `/` |

4. Deploy → you get `https://random-name.netlify.app`.

### Option B — Cloudflare Pages

1. https://dash.cloudflare.com → Pages → Create project → Connect GitHub.  
2. Build command: empty. Output directory: `/`.  
3. Deploy.

### Option C — GitHub Pages

Repo → Settings → Pages → Source: **main** branch, folder **/ (root)** → Save.  
URL: `https://YOUR_USERNAME.github.io/demo-heights-landing/`

---

## Step 3 — Domain name

### Who buys the domain?

**The client** (or you register it in the **client’s name**). You bill them yearly renewal.

### Where to buy (examples)

| Registrar | Notes |
|-----------|--------|
| **Cloudflare Registrar** | At-cost pricing, good if you use Cloudflare Pages |
| **Namecheap** | Simple for beginners |
| **GoDaddy** | Common in India, watch renewal price |

### Naming ideas

- `demoheights-whitefield.com`
- `demoheights-bengaluru.in`
- `clientproject-eastbangalore.com`

Avoid trademarked builder names in the domain unless authorized.

---

## Step 4 — Connect domain to Netlify

1. Netlify → your site → **Domain management** → **Add custom domain** → enter `www.yourdomain.com`.  
2. Netlify shows **DNS records**.  
3. At your registrar, set:
   - **A record** to Netlify’s load balancer IP, **or**
   - **CNAME** `www` → `your-site.netlify.app` (Netlify instructions are exact).  
4. Enable **HTTPS** (automatic on Netlify after DNS propagates, 5 minutes–48 hours).

On **Cloudflare Pages**: add custom domain in Pages → same idea.

---

## Step 5 — Handover checklist

- [ ] Client owns GitHub repo access (or you transfer repo)  
- [ ] Client owns Netlify/Cloudflare account or you transfer site  
- [ ] Client owns domain registrar login  
- [ ] Real WhatsApp number in `js/config.js`  
- [ ] Privacy page date updated  
- [ ] Test enquiry popup + WhatsApp on mobile  

---

## Costs (typical)

| Item | Cost |
|------|------|
| GitHub | Free (public/private) |
| Netlify / Cloudflare Pages | Free tier |
| Domain `.com` | ~₹700–1,500/year |
| VPS / cloud server | **Not needed** |

---

## What you charge the client

One-time: design, content, images, deploy, domain setup.  
Optional yearly: domain renewal + small maintenance retainer.