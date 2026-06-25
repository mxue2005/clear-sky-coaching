# Clear Sky Coaching — Website

Next.js 14 website for Clear Sky Coaching by Michelle Xue.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site.

---

## Project structure

```
clear-sky-coaching/
├── app/
│   ├── layout.js          # Root layout, Google Fonts, metadata
│   ├── page.js            # Home page (imports all sections)
│   └── globals.css        # All styles
├── components/
│   ├── Nav.js             # Navigation with scroll effect
│   └── sections/
│       ├── Hero.js
│       ├── Recognition.js  # "Who This Is For"
│       ├── Approach.js
│       ├── About.js        # Michelle's bio + photos
│       ├── Services.js
│       ├── Testimonials.js
│       ├── CTA.js
│       └── Footer.js
├── public/
│   └── images/            # Michelle's photos (replace with real files)
│       ├── michelle-portrait.jpg
│       ├── michelle-beach.jpg
│       └── michelle-family.jpg
├── next.config.js
├── netlify.toml           # Netlify deployment config
└── package.json
```

---

## Deploying to Netlify

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR_USERNAME/clear-sky-coaching.git
git push -u origin main
```

### Step 2 — Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and log in
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and select this repository
4. Build settings are pre-configured in `netlify.toml` — no changes needed
5. Click **"Deploy site"**

Netlify will give you a free URL like `your-site.netlify.app` within ~2 minutes.

### Step 3 — Add your custom domain (after buying it)

1. In Netlify: **Site configuration** → **Domain management** → **Add domain**
2. Enter `clearskycoach.com` → click Verify
3. Copy the two nameservers Netlify shows you
4. In Namecheap: go to your domain → **Nameservers** → **Custom DNS** → paste both nameservers
5. Wait 15–60 minutes for DNS to propagate
6. Netlify automatically provisions an SSL certificate (the padlock 🔒)

---

## What to update before launch

| File | What to change |
|------|---------------|
| `components/sections/CTA.js` | Update email address (`hello@clearskycoach.com`) |
| `components/sections/Footer.js` | Add real Instagram/LinkedIn URLs |
| `components/sections/Testimonials.js` | Add real client names and testimonials |
| `app/layout.js` | Update meta description if desired |
| `public/images/` | Photos are already extracted from your design |

---

## Adding Google Calendar booking (Phase 2)

When ready, the booking flow will be added as an API route:

```
app/
└── api/
    └── booking/
        └── route.js    # Handles Google Calendar integration
```

See the project plan for the full roadmap.
