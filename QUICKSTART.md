# Quick Start Guide

Welcome to your new portfolio website! This guide will get you up and running in minutes.

## 🎯 First Steps

### 1. View Your Site Locally

**Option A: Using the provided script**
```bash
./serve.sh
```
Then open: http://localhost:8000

**Option B: Python directly**
```bash
python3 -m http.server 8000
```
Then open: http://localhost:8000

**Option C: Just open the file**
- Double-click `index.html`
- Some features work better with a local server

### 2. Check Everything Works

✅ Navigation scrolls smoothly to each section
✅ Hero animation plays (moving dots and lines)
✅ Service cards have hover effects
✅ Case study metrics count up when scrolled into view
✅ Mobile menu opens when you click the hamburger (on mobile/narrow window)
✅ Contact form shows success message when submitted

## 🎨 Quick Customizations

### Change Colors

Edit `styles/main.css` lines 8-11:
```css
--color-primary: #0080FF;      /* Change this for main color */
--color-accent: #00FF88;       /* Change this for accent color */
```

### Add Your Photo

1. Save your professional headshot as `headshot.jpg` in the project folder
2. Edit `index.html` around line 345 (in the About section)
3. Replace the SVG placeholder with:
```html
<img src="headshot.jpg" alt="Nicholas Child" style="width: 100%; border-radius: 16px;">
```

### Update Contact Information

Edit `index.html` in the Contact section (around line 430) to update:
- Email address
- LinkedIn URL
- Medium URL
- Location

### Add More Case Studies

1. Find the Case Studies section in `index.html` (around line 250)
2. Copy one of the `.case-study-card` divs
3. Paste and modify:
   - Company name
   - Tags
   - Description
   - Metrics (change `data-target` numbers)
   - Highlights list

## 🚀 Deploy to Production

### Fastest: Netlify Drop

1. Go to https://app.netlify.com/drop
2. Drag your entire project folder onto the page
3. Done! You'll get a URL like `yoursite.netlify.app`
4. To use your custom domain:
   - Site settings → Domain management
   - Add `nickchild.info`
   - Follow DNS instructions

### Contact Form Setup (Netlify)

Edit `index.html`, find the form tag (around line 438) and change:
```html
<form class="contact-form" id="contactForm">
```
to:
```html
<form class="contact-form" id="contactForm" netlify>
    <input type="hidden" name="form-name" value="contact">
```

Then in `scripts/main.js`, comment out the form submit handler (lines 94-115) or remove it entirely.

## 📝 Common Tasks

### Update a Case Study

1. Open `index.html`
2. Find the company name (e.g., "GetHarley")
3. Update the text, metrics, or highlights
4. Save and refresh your browser

### Change Typography

All fonts are loaded from Google Fonts. To change:
1. Visit https://fonts.google.com
2. Select your fonts
3. Replace the Google Fonts link in `index.html` (around line 20)
4. Update CSS variables in `styles/main.css`:
```css
--font-serif: 'YourSerifFont', serif;
--font-sans: 'YourSansFont', sans-serif;
```

### Add a New Section

1. Copy an existing section in `index.html`
2. Give it a new `id` (e.g., `id="testimonials"`)
3. Add a link in the navigation:
```html
<li><a href="#testimonials" class="nav-link">Testimonials</a></li>
```

## 🐛 Troubleshooting

**Animations not working?**
- Make sure JavaScript is enabled in your browser
- Check the browser console (F12) for errors
- Try a hard refresh (Ctrl+Shift+R or Cmd+Shift+R)

**Form not submitting?**
- For local testing, it just shows a message (normal behaviour)
- After deploying to Netlify/Formspree, it will actually send emails

**Mobile menu not working?**
- Make sure the browser window is narrow enough (< 768px)
- Try refreshing the page
- Check browser console for JavaScript errors

**Styles look wrong?**
- Clear your browser cache
- Make sure `styles/main.css` exists
- Check that the CSS link in `index.html` is correct

## 📱 Testing on Mobile

### Option 1: Browser DevTools
1. Open browser DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Select a mobile device

### Option 2: Your Phone
1. Find your computer's local IP address:
   ```bash
   # On Linux/Mac
   ifconfig | grep "inet "

   # On Windows
   ipconfig
   ```
2. Start the local server: `./serve.sh`
3. On your phone's browser, visit: `http://YOUR_IP:8000`
   (e.g., `http://192.168.1.100:8000`)

## 🎯 Next Steps

1. **Content**
   - [ ] Add your professional headshot
   - [ ] Review all text for accuracy
   - [ ] Add any missing case studies

2. **Deploy**
   - [ ] Deploy to Netlify/Vercel
   - [ ] Set up custom domain (nickchild.info)
   - [ ] Configure contact form

3. **Polish**
   - [x] Add favicon
   - [ ] Test on real mobile devices
   - [ ] Ask colleagues for feedback

4. **Promote**
   - [ ] Update LinkedIn profile with website link
   - [ ] Add to email signature
   - [ ] Share on Medium/social media

## 📚 Need More Help?

- **Full documentation**: See `README.md`
- **Deployment guide**: See `DEPLOYMENT.md`
- **Technical issues**: Check browser console (F12)

## 🎨 Design Philosophy

This site is built on three principles:

1. **Editorial Authority** - Serif headlines, magazine-style layout
2. **Technical Credibility** - Monospace for tech, animated data viz
3. **Outcome Focus** - Numbers first, specific results

Keep this in mind when adding content!

---

**Questions?** Email: nick@nickchild.info

Good luck with your new portfolio! 🚀
