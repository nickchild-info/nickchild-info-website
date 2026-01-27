# Deployment Guide

Quick guide to deploy your Nick Child portfolio website.

## 🚀 Quick Deploy Options

### Option 1: Netlify (Recommended - Easiest)

1. **Drag & Drop (No CLI needed)**
   - Go to https://app.netlify.com/drop
   - Drag the entire project folder
   - Done! Your site is live

2. **Via GitHub**
   - Push your code to GitHub
   - Go to https://app.netlify.com
   - Click "New site from Git"
   - Select your repository
   - Build settings: Leave empty (static site)
   - Click "Deploy site"

3. **Connect Contact Form**
   - In `index.html`, add to the `<form>` tag:
   ```html
   <form class="contact-form" id="contactForm" netlify>
   ```
   - Netlify will automatically handle form submissions
   - View submissions in Netlify dashboard

4. **Custom Domain**
   - In Netlify: Site settings → Domain management
   - Add custom domain: `nickchild.info`
   - Follow DNS instructions

### Option 2: Vercel

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   cd /home/nick/nickchild-info-website
   vercel --prod
   ```

3. **Or via GitHub**
   - Push to GitHub
   - Go to https://vercel.com
   - Import your repository
   - Deploy

### Option 3: GitHub Pages

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/yourusername/nickchild-info-website.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Source: Deploy from main branch
   - Root directory
   - Save

3. **Access your site**
   - Site will be at: `https://yourusername.github.io/nickchild-info-website/`

4. **Custom Domain**
   - Add a `CNAME` file in root with your domain:
   ```
   nickchild.info
   ```
   - Configure DNS with your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: yourusername.github.io

   Type: A
   Name: @
   Value: 185.199.108.153
   ```

### Option 4: Simple HTTP Server (Local Testing)

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if installed)
npx http-server

# Using PHP
php -S localhost:8000
```

Then open: http://localhost:8000

## 📧 Contact Form Setup

### Using Formspree (Recommended for non-Netlify deploys)

1. Sign up at https://formspree.io (free tier available)
2. Create a new form
3. Update `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" class="contact-form">
   ```
4. Remove the JavaScript form handler from `scripts/main.js` (lines handling form submit)

### Using Netlify Forms

1. Add `netlify` attribute to form in `index.html`:
   ```html
   <form class="contact-form" netlify>
       <input type="hidden" name="form-name" value="contact">
       <!-- rest of form -->
   </form>
   ```
2. Keep form fields the same
3. Submissions appear in Netlify dashboard

### Using EmailJS

1. Sign up at https://www.emailjs.com
2. Add EmailJS SDK before closing `</body>`:
   ```html
   <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
   ```
3. Update form handler in `scripts/main.js`

## 🌐 Custom Domain Setup

### DNS Configuration for nickchild.info

**For Netlify:**
1. Add custom domain in Netlify
2. Update DNS records at your registrar:
   ```
   Type: CNAME
   Name: www
   Value: your-site.netlify.app

   Type: A
   Name: @
   Value: 75.2.60.5
   ```

**For Vercel:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com

Type: A
Name: @
Value: 76.76.21.21
```

**For GitHub Pages:**
```
Type: CNAME
Name: www
Value: yourusername.github.io

Type: A
Name: @
Value: 185.199.108.153
```

## ✅ Pre-Deployment Checklist

- [ ] Replace placeholder image in About section with professional headshot
- [x] Add favicon.ico to root directory
- [ ] Test all links (LinkedIn, Medium, email)
- [ ] Set up contact form (Netlify/Formspree)
- [ ] Test on mobile device
- [ ] Run Lighthouse audit (aim for 90+ scores)
- [ ] Configure custom domain DNS
- [ ] Test contact form after deployment
- [ ] Add Google Analytics or Plausible (optional)

## 🔧 Post-Deployment

### 1. Verify Everything Works
- [ ] All sections scroll smoothly
- [ ] Animations play correctly
- [ ] Mobile menu works
- [ ] Contact form submits successfully
- [ ] All external links open in new tabs

### 2. Add Analytics (Optional)

**Google Analytics:**
Add before `</head>` in `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

**Plausible (Privacy-friendly):**
```html
<script defer data-domain="nickchild.info" src="https://plausible.io/js/script.js"></script>
```

### 3. SEO Optimization

1. **Submit Sitemap**
   - Create `sitemap.xml`:
   ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://nickchild.info/</loc>
       <lastmod>2026-01-16</lastmod>
       <priority>1.0</priority>
     </url>
   </urlset>
   ```
   - Submit to Google Search Console

2. **robots.txt**
   ```
   User-agent: *
   Allow: /
   Sitemap: https://nickchild.info/sitemap.xml
   ```

3. **Performance**
   - Run Lighthouse audit
   - Optimise images (use WebP)
   - Enable Netlify/Vercel optimizations

## 🆘 Troubleshooting

**Issue: Animations not working**
- Check browser console for errors
- Ensure JavaScript is enabled
- Try hard refresh (Ctrl+Shift+R)

**Issue: Contact form not submitting**
- Check form action URL
- Verify Netlify/Formspree configuration
- Check browser console for errors

**Issue: Custom domain not working**
- Wait 24-48 hours for DNS propagation
- Use https://dnschecker.org to verify DNS
- Check SSL certificate status

**Issue: Site not updating**
- Clear browser cache
- Check deployment status in hosting dashboard
- Verify correct branch is deployed

## 📊 Monitoring

- **Uptime**: Use UptimeRobot (free) to monitor site availability
- **Analytics**: Google Analytics or Plausible for traffic
- **Performance**: Regular Lighthouse audits
- **Forms**: Check submission notifications regularly

## 🔄 Updates

To update the site after deployment:

1. Make changes locally
2. Test with local server
3. Commit and push to GitHub (if using Git-based deployment)
4. Or re-deploy via CLI/drag-and-drop

**Netlify/Vercel**: Automatically redeploys on git push
**GitHub Pages**: Updates within minutes of push
**Manual**: Re-upload via dashboard

---

**Need help?** Check the hosting provider's documentation:
- Netlify: https://docs.netlify.com
- Vercel: https://vercel.com/docs
- GitHub Pages: https://docs.github.com/pages
