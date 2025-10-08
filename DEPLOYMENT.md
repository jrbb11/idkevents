# Deployment Guide

## Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com)
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will auto-detect Vite settings
6. Click "Deploy"

## Deploy to Netlify

1. Push your code to GitHub
2. Visit [netlify.com](https://netlify.com)
3. Click "Add new site" → "Import an existing project"
4. Connect to GitHub and select your repository
5. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
6. Click "Deploy site"

## Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to package.json:
```json
{
  "homepage": "https://yourusername.github.io/idk-events",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. Update vite.config.ts:
```typescript
export default defineConfig({
  base: '/idk-events/',
  plugins: [react(), tailwindcss()],
})
```

4. Deploy:
```bash
npm run deploy
```

## Environment Variables

If you need to add API keys or other sensitive data:

1. Create `.env` file in root
2. Add variables with `VITE_` prefix:
```
VITE_API_KEY=your_key_here
```

3. Access in code:
```typescript
const apiKey = import.meta.env.VITE_API_KEY
```

## Custom Domain

### Vercel
1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed

### Netlify
1. Go to Site Settings → Domain management
2. Add custom domain
3. Configure DNS settings

## Performance Optimization

The site is already optimized with:
- ✅ Vite for fast builds
- ✅ React lazy loading ready
- ✅ Optimized images (when added)
- ✅ Minified production build

## Post-Deployment Checklist

- [ ] Test on mobile devices
- [ ] Check all links work
- [ ] Verify contact form (add backend if needed)
- [ ] Test YouTube video embedding
- [ ] Add Google Analytics (optional)
- [ ] Set up SSL certificate (auto with Vercel/Netlify)
- [ ] Add favicon
- [ ] Submit to search engines

