# Maintenance Page Guide

## Overview
This maintenance page (`maintenance.html`) is designed to be used when your domain or hosting expires, or during scheduled maintenance periods.

## Features
- **Responsive Design**: Works on all devices (mobile, tablet, desktop)
- **Professional Look**: Beautiful gradient background with glassmorphism effects
- **Contact Information**: All your business details are prominently displayed
- **Social Media Links**: Direct links to Facebook, Instagram, and YouTube
- **Animated Elements**: Subtle animations to keep it engaging
- **Brand Consistency**: Uses your logo and company colors

## How to Use

### Option 1: Replace Main Website
1. Rename your current `index.html` to `index-backup.html`
2. Rename `maintenance.html` to `index.html`
3. Upload to your hosting service

### Option 2: Use as Landing Page
1. Upload `maintenance.html` as is
2. Point your domain to this file during maintenance
3. When ready, switch back to your main website

### Option 3: Subdomain Setup
1. Create a subdomain like `maintenance.idkevents.com`
2. Upload `maintenance.html` as `index.html` on that subdomain
3. Redirect your main domain to the subdomain during maintenance

## Customization

### Update Contact Information
Edit the contact section in `maintenance.html`:
```html
<div class="contact-item">
    <span class="contact-icon">📱</span>
    <a href="tel:09218628527" class="contact-link">0921-862-8527</a>
</div>
```

### Update Social Media Links
Modify the social media section:
```html
<a href="https://www.facebook.com/idkeventsmanagementservices" target="_blank" class="social-icon facebook">
```

### Change Maintenance Message
Update the message in the `.message` div:
```html
<div class="message">
    We're currently performing scheduled maintenance to improve our services. 
    Our website will be back online soon. Thank you for your patience!
</div>
```

## Quick Setup Instructions

### For Domain Expiry:
1. Upload `maintenance.html` to your hosting
2. Rename it to `index.html`
3. This will show when people visit your domain

### For Hosting Expiry:
1. Use a free hosting service (GitHub Pages, Netlify, Vercel)
2. Upload the maintenance page
3. Point your domain to the new hosting

### Emergency Deployment:
```bash
# Upload to GitHub Pages
git add maintenance.html
git commit -m "Add maintenance page"
git push origin main

# Then enable GitHub Pages in repository settings
```

## Benefits
- **Professional Appearance**: Maintains your brand image
- **Contact Preservation**: Clients can still reach you
- **SEO Friendly**: Search engines understand maintenance
- **User Experience**: Clear communication about status
- **Business Continuity**: No lost leads during downtime

## File Structure
```
/
├── maintenance.html          # Main maintenance page
├── MAINTENANCE_GUIDE.md     # This guide
├── public/                  # Your assets (logo, images)
│   ├── android-chrome-192x192.png
│   └── favicon.ico
└── src/                     # Your main website files
    └── ...
```

## Support
If you need help setting up the maintenance page or have questions about deployment, the page includes all your contact information so clients can reach you directly.

Remember: This maintenance page ensures your business stays accessible even when your main website is down!
