# Testing Guide

Quick checklist to verify everything works correctly before deploying.

## 🧪 Local Testing

### 1. Start the Local Server
```bash
./serve.sh
```
Open: http://localhost:8000

### 2. Visual Checks

#### Desktop (> 768px width)
- [ ] Hero section fills viewport with animated particles
- [ ] Navigation stays at top, all links visible
- [ ] All 8 sections load correctly
- [ ] Service cards display in 3-column grid
- [ ] Case studies show 4 cards with metrics
- [ ] Tech stack organized in 6 categories
- [ ] Footer shows two columns

#### Tablet (481px - 768px)
- [ ] Navigation collapses to hamburger menu
- [ ] Service cards stack to 1 column
- [ ] About section stacks vertically
- [ ] Contact form and info stack vertically

#### Mobile (< 480px)
- [ ] All text is readable
- [ ] Buttons are full width
- [ ] No horizontal scrolling
- [ ] Touch targets are large enough (44px+)
- [ ] Hero title scales down appropriately

### 3. Interaction Checks

#### Navigation
- [ ] Clicking nav links scrolls smoothly to sections
- [ ] Active section highlights in navigation (if implemented)
- [ ] Mobile menu opens and closes
- [ ] Clicking nav link closes mobile menu
- [ ] Sticky header appears after scrolling

#### Animations
- [ ] Hero particles move and connect
- [ ] Scroll reveals work (cards fade in as you scroll)
- [ ] Case study metrics count up when scrolled into view
- [ ] Service cards lift on hover (desktop)
- [ ] Tech items highlight on hover

#### Contact Form
- [ ] Name field accepts text
- [ ] Email field validates email format
- [ ] Message field accepts text
- [ ] Submit button shows success message
- [ ] Form clears after submission
- [ ] Required field validation works

#### Links
- [ ] LinkedIn link opens in new tab
- [ ] Medium link opens in new tab
- [ ] Email link opens mail client
- [ ] All internal anchor links scroll smoothly

### 4. Browser Testing

Test in each browser:
- [ ] Chrome/Edge
- [ ] Firefox
- [ ] Safari (if on Mac)

Things to check:
- Animations play smoothly
- Fonts load correctly
- Colors match design
- No console errors (F12)

### 5. Performance Checks

Open Chrome DevTools → Lighthouse:
- [ ] Performance > 90
- [ ] Accessibility > 90
- [ ] Best Practices > 90
- [ ] SEO = 100

Common issues:
- Large images → Compress them
- Render-blocking resources → Already optimized
- Missing alt text → Add to images

### 6. Accessibility Checks

#### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] All focusable elements have visible focus state
- [ ] Can navigate menu with keyboard
- [ ] Can submit form with Enter key

#### Screen Reader (Optional)
- [ ] All images have alt text
- [ ] Headings are in logical order (h1 → h2 → h3)
- [ ] Form labels are associated with inputs
- [ ] Navigation has proper ARIA labels

### 7. Content Checks

#### Spelling & Grammar
- [ ] All text uses British English (colour, optimisation)
- [ ] No typos in headlines
- [ ] Case study metrics are accurate
- [ ] All URLs are correct

#### Links & Email
- [ ] Email: nick@nickchild.info works
- [ ] LinkedIn: /in/nicholaschild is correct
- [ ] Medium: @childnick is correct
- [ ] All external links use `target="_blank"`

#### Data Accuracy
- [ ] GetHarley metrics: 95%, 7 FTE, 70%
- [ ] Meshh metrics: 90%, £150k ARR
- [ ] Vue metrics: 75%, 20%
- [ ] Technical blog: 65%, 53%

## 🌐 Pre-Deployment Testing

### DNS Check (If using custom domain)
```bash
# Check if DNS is configured
nslookup nickchild.info
```

### SSL Certificate
- [ ] HTTPS works (after deployment)
- [ ] No mixed content warnings
- [ ] Certificate is valid

### Cross-Device Testing

#### Actual Devices (Recommended)
1. **iPhone** (Safari)
   - [ ] Layout looks correct
   - [ ] Animations are smooth
   - [ ] Form works
   - [ ] No performance issues

2. **Android** (Chrome)
   - [ ] Layout looks correct
   - [ ] Animations are smooth
   - [ ] Form works

3. **Tablet** (iPad or Android)
   - [ ] Uses tablet layout
   - [ ] Navigation works
   - [ ] Content is readable

#### Or Use Browser DevTools
1. Open DevTools (F12)
2. Toggle Device Toolbar (Ctrl+Shift+M)
3. Test these devices:
   - iPhone 12 Pro
   - iPad Air
   - Samsung Galaxy S20

## 🐛 Common Issues & Fixes

### Issue: Animations not working
**Check:**
- JavaScript enabled?
- Console errors? (F12)
- `scripts/main.js` loaded?

**Fix:**
- Hard refresh (Ctrl+Shift+R)
- Check file paths in HTML
- Clear browser cache

### Issue: Styles look wrong
**Check:**
- `styles/main.css` loaded?
- CSS link in HTML correct?
- Browser supports CSS Grid?

**Fix:**
- Verify file path: `<link rel="stylesheet" href="styles/main.css">`
- Test in modern browser
- Clear cache

### Issue: Form doesn't submit
**Note:** This is normal for local testing! Form just shows a success message locally.

**For production:**
- Add Netlify Forms integration
- Or connect to Formspree
- See DEPLOYMENT.md

### Issue: Fonts not loading
**Check:**
- Internet connection?
- Google Fonts CDN accessible?

**Fix:**
- Check network tab in DevTools
- Verify Google Fonts link in HTML
- Try refreshing page

### Issue: Particles (hero animation) not showing
**Check:**
- Canvas element exists?
- JavaScript running?
- Browser supports Canvas API?

**Fix:**
- Check browser console for errors
- Verify `scripts/main.js` is loaded
- Try in different browser

## 📊 Performance Benchmarks

### Target Metrics
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Total Blocking Time**: < 200ms
- **Cumulative Layout Shift**: < 0.1
- **Speed Index**: < 3.0s

### File Sizes (Current)
- `index.html`: 29KB
- `styles/main.css`: 22KB
- `scripts/main.js`: 7.6KB
- **Total**: ~60KB (excluding fonts)

### Optimization Tips
1. **Images**: Use WebP format, compress to 80% quality
2. **Fonts**: Already optimized (Google Fonts CDN)
3. **CSS**: Already minified and optimized
4. **JavaScript**: Consider minifying for production

## 📱 Mobile-Specific Tests

### Gestures
- [ ] Can scroll smoothly
- [ ] Can tap buttons easily
- [ ] Can pinch to zoom (if needed)
- [ ] No accidental clicks

### Performance
- [ ] Animations don't lag
- [ ] Page loads quickly on 4G
- [ ] No excessive battery drain
- [ ] Particle count reduced (automatic)

### Layout
- [ ] No horizontal scroll
- [ ] Text is large enough (16px minimum)
- [ ] Buttons are large enough (44px minimum)
- [ ] Forms are easy to fill

## ✅ Final Pre-Launch Checklist

### Content
- [ ] Professional headshot added
- [ ] All metrics verified
- [ ] Contact info correct
- [ ] All links work

### Technical
- [ ] No console errors
- [ ] Lighthouse scores > 90
- [ ] Works on mobile
- [ ] Form configured

### SEO
- [ ] Meta tags present
- [ ] Title tag unique
- [ ] Open Graph tags set
- [ ] Structured data added

### Legal
- [ ] Copyright year correct (2026)
- [ ] Email privacy considered
- [ ] No placeholder content

## 🚀 Go/No-Go Decision

**GO if:**
✅ All core sections display correctly
✅ Navigation works on mobile and desktop
✅ No major console errors
✅ Contact information is accurate
✅ Lighthouse scores > 80

**NO-GO if:**
❌ Major layout breaks on mobile
❌ JavaScript errors prevent functionality
❌ Contact form completely broken
❌ Wrong contact information displayed
❌ Animations cause performance issues

## 📞 Post-Deployment Tests

After deploying:
1. **Visit the live URL**
   - [ ] Site loads correctly
   - [ ] HTTPS works
   - [ ] Custom domain works (if configured)

2. **Test Contact Form**
   - [ ] Submit a test message
   - [ ] Verify email received
   - [ ] Check spam folder

3. **Share & Test**
   - [ ] Share on LinkedIn (check preview)
   - [ ] Open on phone via shared link
   - [ ] Ask colleague to test

4. **Monitor**
   - [ ] Check analytics (if installed)
   - [ ] Monitor form submissions
   - [ ] Check for broken links

---

**Testing Complete?**
Proceed to DEPLOYMENT.md for deployment instructions! 🚀
