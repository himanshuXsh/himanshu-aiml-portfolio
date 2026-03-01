# Himanshu Sharma — Portfolio Website

## 📁 Folder Structure
```
portfolio/
├── assets/
│   ├── me.img          ← Your profile photo
│   └── my resume.pdf   ← Your resume (add this file!)
├── index.html          ← All page content & structure
├── styles.css          ← All colors, fonts, layout
├── script.js           ← All interactivity & skill data
└── README.md           ← This file
```

---

## ✏️ Quick Edit Guide

### Change your profile photo
Replace `assets/me.img` with your new image.
Then update the filename in `index.html` line:
```html
<img src="assets/me.img" alt="Himanshu Sharma" />
```

### Change accent color (currently green)
Open `styles.css` → find `:root` at the top → change:
```css
--green: #00ffa0;
```

### Add a new skill
Open `script.js` → find the `SKILLS` array → add:
```js
{ icon: 'fas fa-star', name: 'Your Skill', pct: 80 },
```
Find FontAwesome icons at: https://fontawesome.com/icons

### Add a new project
Open `index.html` → find `<!-- ── PROJECT 8 ── -->` → copy that block and paste after it.

### Add a new job
Open `index.html` → find `<!-- ── JOB 3 ── -->` → copy that block and paste before it (newest first).

### Add a new certificate
Open `index.html` → find `<!-- ── CERT 4 ── -->` → copy that block and paste after it.

### Update stats (hero section)
Open `index.html` → find `.hero-stats` section → update the numbers.

### Update all links
Search for these in `index.html` and replace with your current links:
- `himanshuXsh` → your GitHub username
- `himanshu-ai` → your LinkedIn username
- `him.usar27@gmail.com` → your email
- `himanshusharma` → your Codolio username

---

## 🚀 Deploy to GitHub Pages (Free, 2 minutes)

1. Create a GitHub repo named `portfolio`
2. Upload all files (keep folder structure)
3. Go to **Settings → Pages**
4. Source: `main` branch → `/` (root)
5. Live at: `https://himanshuXsh.github.io/portfolio`

---

## 🌐 Open Locally
Just open `index.html` in any browser — no server needed.
