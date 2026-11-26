# Deploy construction landing page on AWS

Your site is **static** (`index.html`, `css/`, `js/`, `img/`). You do **not** need EC2 or a database.

---

## Pick one path

| Path | Best for | HTTPS | Custom domain | Difficulty |
|------|----------|-------|---------------|------------|
| **A — AWS Amplify** | Beginners, Git deploy | Yes | Yes | Easiest |
| **B — S3 + CloudFront** | Lowest cost, full control | Yes | Yes | Medium |
| **C — S3 website only** | Quick test (no HTTPS on S3 alone) | No* | Limited | Easy but not for production |

*Use CloudFront for HTTPS in production.*

**Recommended:** **Amplify** if you use GitHub; **S3 + CloudFront** if you upload a ZIP manually.

---

# Path A — AWS Amplify (recommended)

## What you need

- AWS account ([console.aws.amazon.com](https://console.aws.amazon.com))
- Website folder OR GitHub repo with your code
- Region: e.g. **Asia Pacific (Mumbai) ap-south-1** (optional, Amplify picks for you)

## Steps

### 1. Prepare files

Deploy root must contain:

```
index.html
privacy.html
css/style.css
js/config.js
js/site.js
img/...
```

Zip optional; Git is easier.

### 2. Push to GitHub (if not already)

```powershell
cd "C:\Users\Ranji\OneDrive\Desktop\Construction"
git push origin main
```

### 3. Open Amplify

1. AWS Console → search **Amplify** → **AWS Amplify**.
2. **Create new app** → **Host web app**.
3. **GitHub** → Authorize → select repo `Construction` (or your repo name).
4. Branch: **main**.

### 4. Build settings (static site — no build)

| Field | Value |
|-------|--------|
| App build command | *(empty)* |
| Build output directory | `/` or `.` |

If Amplify shows a default `amplify.yml`, use:

```yaml
version: 1
frontend:
  phases:
    build:
      commands:
        - echo "Static site — no build"
  artifacts:
    baseDirectory: /
    files:
      - '**/*'
  cache:
    paths: []
```

5. **Save and deploy** → wait **Provisioning** → **Deployed**.

### 6. Test URL

Amplify gives: `https://main.xxxxxxxxx.amplifyapp.com`

Check: home page, `/privacy.html`, popup, images.

### 7. Custom domain (optional)

Amplify app → **Domain management** → add domain → follow DNS (Route 53 or your registrar).

### 8. Updates

`git push` → Amplify auto-redeploys.

---

# Path B — S3 + CloudFront (manual upload)

## 1. Create S3 bucket

1. **S3** → **Create bucket**.
2. Name: globally unique, e.g. `demo-heights-landing-yourname`.
3. Region: **ap-south-1** (Mumbai) or nearest.
4. **Block all public access** → **off** (you need public read for static site) — acknowledge warning.
5. Create bucket.

### 2. Upload files

1. Open bucket → **Upload** → add **all** files and folders (`css`, `js`, `img`, `index.html`, `privacy.html`).
2. **Do not** upload `.git` or `node_modules`.

### 3. Enable static website hosting

Bucket → **Properties** → **Static website hosting** → **Enable**.

- Index: `index.html`
- Error (optional): `index.html` (for SPA-style; optional for your site)

Note the **website endpoint** (HTTP only): `http://bucket-name.s3-website-ap-south-1.amazonaws.com`

### 4. Bucket policy (public read)

Bucket → **Permissions** → **Bucket policy** → paste (replace `YOUR-BUCKET-NAME`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR-BUCKET-NAME/*"
    }
  ]
}
```

Test HTTP website endpoint in browser.

### 5. CloudFront (HTTPS for production)

1. **CloudFront** → **Create distribution**.
2. **Origin domain:** select the **S3 website endpoint** (not the REST API endpoint) — use the static website URL from step 3, or create origin as website.
   - Better: Origin → use website endpoint `bucket-name.s3-website-ap-south-1.amazonaws.com`
3. **Viewer protocol policy:** Redirect HTTP to HTTPS.
4. **Default root object:** `index.html`.
5. Create distribution → wait **Deployed**.
6. Use CloudFront domain: `https://d111111abcdef8.cloudfront.net`

### 6. Custom domain + SSL

1. **ACM (Certificate Manager)** → region **us-east-1** (required for CloudFront) → request public cert for `www.yourdomain.com`.
2. Validate DNS.
3. CloudFront → distribution → **Edit** → add **Alternate domain name** + attach ACM cert.
4. Route 53 or registrar DNS: CNAME `www` → CloudFront domain.

### 7. Updates

Re-upload changed files to S3 → **CloudFront** → **Create invalidation** → `/*` (so cache refreshes).

---

# Path C — Amplify without Git (drag & drop)

1. Amplify → **Deploy without Git** (if available in your console) or **Manual deploy**.
2. Upload ZIP of site contents (root = `index.html`).
3. Deploy.

---

# AWS costs (rough, static site)

| Service | Typical small landing page |
|---------|----------------------------|
| S3 storage | &lt; ₹50/month |
| CloudFront | Often free tier / low traffic |
| Amplify | Free tier 1000 build min/month, low bandwidth |
| Route 53 hosted zone | ~$0.50/month per zone |

No EC2 needed.

---

# Checklist before go-live

- [ ] `https://` loads (Amplify or CloudFront — not bare S3 unless testing only)
- [ ] `js/config.js` and `js/site.js` load (Network tab 200)
- [ ] Images in `img/` load
- [ ] Enquiry popup works
- [ ] WhatsApp number is real in `config.js`
- [ ] `privacy.html` opens
- [ ] Mobile layout OK

---

# Common mistakes

| Problem | Fix |
|---------|-----|
| Blank page, 403 | S3 bucket policy or wrong upload path |
| CSS missing | `index.html` must link `css/style.css` (not root `style.css`) |
| Old content after update | CloudFront invalidation `/*` |
| S3 URL not HTTPS | Use CloudFront or Amplify |
| Wrong region | Keep bucket + you in same region for latency |

---

# Compare: AWS vs Netlify (what you used before)

| | Netlify (free) | AWS Amplify | S3 + CloudFront |
|---|----------------|-------------|-----------------|
| Ease | Very easy | Easy with Git | More steps |
| Client owns account | You transfer | Client AWS account | Client AWS account |
| India latency | Good | Good in ap-south-1 | Good |

For **₹6,000 client sites**, either Netlify or **Amplify** is fine; use **S3+CloudFront** if client insists on “only AWS” and wants minimal monthly cost.

---

# Quick command: zip for manual upload

PowerShell (from Construction folder):

```powershell
cd "C:\Users\Ranji\OneDrive\Desktop\Construction"
Compress-Archive -Path index.html,privacy.html,css,js,img -DestinationPath ..\construction-aws-upload.zip -Force
```

Upload contents (or zip per S3/Amplify flow) so `index.html` is at the root inside the bucket/app root.