# 🚀 Quick Start Guide

## Getting Started in 5 Minutes

### Step 1: Start Development Server
```bash
cd idk-events
npm run dev
```

Your site will be available at: **http://localhost:5173**

### Step 2: Make Your First Change
Open `src/App.tsx` and try changing some text to see live updates!

### Step 3: Build for Production
```bash
npm run build
```

The optimized files will be in the `dist/` folder, ready to deploy!

---

## 📁 File Structure

```
idk-events/
├── src/
│   ├── App.tsx          ← Main website code (all sections here)
│   ├── App.css          ← Custom animations
│   ├── index.css        ← Tailwind CSS import
│   └── main.tsx         ← App entry point
├── public/              ← Static files (images, etc.)
├── index.html           ← HTML template with SEO tags
└── vite.config.ts       ← Build configuration
```

---

## ✏️ Common Edits

### Change Company Name
**File:** `src/App.tsx`
```typescript
// Line ~31
<h1 className="...">IDK Events</h1>
```

### Update Statistics
**File:** `src/App.tsx`
```typescript
// Around line 27
const stats = [
  { number: '500+', label: 'Events' },      // ← Change these
  { number: '1000+', label: 'Happy Clients' },
  { number: '50+', label: 'Artists' },
  { number: '100%', label: 'Committed' },
]
```

### Update Contact Email
**File:** `src/App.tsx`
```typescript
// Around line 325
<p className="text-gray-600">info@idkeventsmanagement.info</p>
```

### Change Colors
**File:** `src/App.tsx`

Find and replace color classes:
- `purple-600` → your color
- `pink-500` → your color
- `red-600` → your color

Example: Change purple to blue
```bash
# In App.tsx, replace:
purple-600 → blue-600
purple-700 → blue-700
purple-50 → blue-50
```

---

## 🎨 Customization Examples

### Add Your Logo
1. Put logo in `public/logo.png`
2. Update navigation:
```typescript
<div className="flex-shrink-0">
  <img src="/logo.png" alt="IDK Events" className="h-12" />
</div>
```

### Add Background Image to Hero
1. Put image in `public/hero-bg.jpg`
2. Update hero section:
```typescript
<section 
  id="home" 
  className="relative h-screen"
  style={{
    backgroundImage: 'url(/hero-bg.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
```

### Add Artist Photos
```typescript
const artists = [
  { 
    name: 'Lala Vinzon', 
    role: 'Singer',
    image: '/images/artists/lala.jpg'  // Add this
  },
  // ... other artists
]

// In the render:
<img 
  src={artist.image} 
  alt={artist.name}
  className="w-full h-64 object-cover"
/>
```

---

## 🔧 Useful Commands

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install a new package
npm install package-name
```

---

## 📱 Testing

### Test Locally
1. Run `npm run dev`
2. Open http://localhost:5173
3. Open DevTools (F12) and toggle device toolbar
4. Test on different screen sizes

### Test on Your Phone
1. Find your computer's IP address:
   - Windows: `ipconfig` (look for IPv4)
   - Mac/Linux: `ifconfig` (look for inet)
2. Run `npm run dev -- --host`
3. On phone, visit: `http://YOUR_IP:5173`

---

## 🚀 Deploy in 3 Steps

### Option 1: Vercel (Recommended)
1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project" → select repo → Deploy!

### Option 2: Netlify
1. Push code to GitHub
2. Go to [netlify.com](https://netlify.com)
3. Click "Add new site" → Import from Git → Deploy!

### Option 3: GitHub Pages
```bash
npm install --save-dev gh-pages

# Add to package.json scripts:
"deploy": "npm run build && gh-pages -d dist"

# Deploy:
npm run deploy
```

---

## 📚 Learn More

- **React Docs**: https://react.dev
- **Tailwind CSS**: https://tailwindcss.com
- **Vite Guide**: https://vitejs.dev

---

## 🆘 Troubleshooting

### Issue: Styles not loading
**Solution:** Make sure dev server is running (`npm run dev`)

### Issue: Build fails
**Solution:**
```bash
rm -rf node_modules dist
npm install
npm run build
```

### Issue: Port 5173 already in use
**Solution:** 
```bash
# Use a different port
npm run dev -- --port 3000
```

### Issue: Changes not reflecting
**Solution:** Hard refresh browser (Ctrl+Shift+R or Cmd+Shift+R)

---

## ✅ Checklist Before Going Live

- [ ] Update all text content
- [ ] Add real artist photos
- [ ] Add YouTube video IDs
- [ ] Update contact information
- [ ] Add social media links
- [ ] Test on mobile device
- [ ] Test contact form
- [ ] Check all navigation links
- [ ] Add Google Analytics (optional)
- [ ] Set up custom domain
- [ ] Test page load speed
- [ ] Submit to search engines

---

## 🎉 You're All Set!

Your website is ready to go live! Just customize the content and deploy.

**Need help?** Check the other documentation files:
- `README.md` - Project overview
- `NEXT_STEPS.md` - Detailed customization guide
- `DEPLOYMENT.md` - Deployment options
- `PROJECT_SUMMARY.md` - What's included

Happy coding! 🚀

