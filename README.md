# Nick Child - Professional Portfolio Website

A modern, professional portfolio website for Nicholas Child, an independent Data & Analytics Consultant based in London.

## 🎯 Overview

This portfolio website showcases Nick's expertise in data strategy, platform building, and analytics automation. Built with a focus on performance, accessibility, and visual impact, the site combines editorial sophistication with technical credibility.

## ✨ Features

### Design
- **Dark Mode**: Editorial-style dark theme by default
- **Animated Hero**: Canvas-based particle animation with connected nodes
- **Scroll Animations**: Smooth reveal animations for sections and cards
- **Responsive Design**: Mobile-first approach, works beautifully on all devices
- **Typography**: Premium font stack (Playfair Display, DM Sans, JetBrains Mono)
- **Color Palette**: Electric blue (#0080FF) and gold (#FFB800) with cool grey tones

### Sections
1. **Hero** - Animated background with clear value proposition
2. **Problem Statement** - Pain points addressed
3. **Services** - Three core offerings with detailed features
4. **Case Studies** - Four detailed projects with animated metrics
5. **Tech Stack** - Visual grid of technologies and expertise
6. **About** - Professional bio and credentials
7. **Social Proof** - Featured work, speaking, and client logos
8. **Contact** - Contact form and direct contact details
9. **Footer** - Navigation and availability statement

### Technical Features
- Smooth scroll navigation
- Sticky header with scroll effects
- Mobile hamburger menu
- Animated metric counters
- Intersection Observer for scroll reveals
- Form validation
- Performance optimised (reduced animations on mobile)

## 🚀 Quick Start

### Viewing the Site Locally

1. **Simple HTTP Server (Recommended)**
   ```bash
   # Using Python 3
   python3 -m http.server 8000

   # Then open: http://localhost:8000
   ```

2. **Or just open the file**
   - Simply open `index.html` in your browser
   - Note: Some features may work better with a local server

### Project Structure

```
.
├── index.html              # Main HTML file
├── styles/
│   └── main.css           # All styles (CSS variables, components, responsive)
├── scripts/
│   └── main.js            # Interactions, animations, form handling
├── README.md              # This file
└── plan.md                # Implementation tracking
```

## 🎨 Design System

### Colors
```css
--color-primary: #0080FF      /* Electric Blue */
--color-accent: #FFB800       /* Premium Gold/Amber */
--color-green: #00FF88        /* Neon Green */
--color-bg-dark: #0A0E17      /* Background */
--color-bg-card: #131825      /* Card Background */
--color-text-primary: #E8EDF2 /* Main Text */
--color-text-secondary: #9BA5B4 /* Secondary Text */
```

### Typography
- **Headlines**: Playfair Display (Serif) - Editorial authority
- **Body**: DM Sans (Sans-serif) - Clean readability
- **Code/Technical**: JetBrains Mono (Monospace) - Technical credibility

### Spacing Scale
```css
--spacing-xs: 0.5rem   /* 8px */
--spacing-sm: 1rem     /* 16px */
--spacing-md: 2rem     /* 32px */
--spacing-lg: 4rem     /* 64px */
--spacing-xl: 6rem     /* 96px */
```

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 768px

All sections are fully responsive with mobile-first design approach.

## 🔧 Customisation

### Contact Form
The contact form currently shows a success message locally. To connect it to a backend:

1. **Using Formspree** (Recommended)
   - Sign up at https://formspree.io
   - Replace the form in `index.html`:
   ```html
   <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
   ```

2. **Using Netlify Forms**
   - Add `netlify` attribute to form
   - Add `data-netlify="true"`

3. **Custom Backend**
   - Modify the form submit handler in `scripts/main.js`

### Adding Case Studies
Edit `index.html` and duplicate a `.case-study-card` div. Update:
- Company name and tags
- Title and description
- Metrics (data-target values)
- Highlights list

### Changing Colors
All colors are CSS variables in `styles/main.css`. Update the `:root` section:
```css
:root {
    --color-primary: #YOUR_COLOR;
    --color-accent: #YOUR_COLOR;
    /* etc. */
}
```

## 🚀 Deployment

### Option 1: Netlify (Recommended)
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Deploy
netlify deploy --prod
```

### Option 2: GitHub Pages
1. Push to GitHub
2. Settings → Pages → Deploy from main branch
3. Your site will be at `https://yourusername.github.io/repo-name/`

### Option 3: Vercel
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel --prod
```

## 🔍 SEO & Performance

### Current Implementation
- ✅ Semantic HTML5
- ✅ Meta tags (title, description, Open Graph)
- ✅ Responsive images (placeholders ready)
- ✅ Smooth animations (60fps target)
- ✅ Mobile-optimised (reduced particles on mobile)

### Recommended Additions
1. **Favicon**: ✅ Already added (favicon.svg)

2. **Structured Data**: ✅ Already added (Person schema)
   ```json
   {
     "@context": "https://schema.org",
     "@type": "Person",
     "name": "Nicholas Child",
     "jobTitle": "Data & Analytics Consultant"
   }
   ```

3. **Analytics**: Add Google Analytics or Plausible

4. **Images**: Replace placeholders with actual images
   - Professional headshot for About section
   - Company logos for case studies
   - Optimise images (use WebP format)

## 📊 Browser Support

- ✅ Chrome/Edge (latest 2 versions)
- ✅ Firefox (latest 2 versions)
- ✅ Safari (latest 2 versions)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

Note: Uses modern JavaScript (IntersectionObserver, CSS Grid). For broader support, consider polyfills.

## 🎯 Next Steps

1. **Content**
   - [ ] Add professional headshot to About section
   - [ ] Replace client logo placeholders
   - [x] Add favicon and touch icons

2. **Functionality**
   - [ ] Connect contact form to Formspree or backend
   - [ ] Add Medium RSS feed integration (optional)
   - [ ] Set up analytics

3. **Performance**
   - [ ] Run Lighthouse audit
   - [ ] Optimise images
   - [ ] Add lazy loading for images

4. **Deployment**
   - [ ] Choose hosting platform
   - [ ] Set up custom domain (nickchild.info)
   - [ ] Configure SSL certificate

## 📝 Content Guidelines

When updating content:
- Lead with outcomes, not activities
- Use specific numbers wherever possible
- British English spelling (colour, optimisation, behaviour)
- Confident but not arrogant tone
- Technical precision when needed

## 🤝 Contact

**Nicholas Child**
- Email: nick@nickchild.info
- LinkedIn: [linkedin.com/in/nicholaschild](https://linkedin.com/in/nicholaschild)
- Medium: [@childnick](https://medium.com/@childnick)
- Location: Wimbledon, London

---

## 📄 License

© 2026 Nicholas Child. All rights reserved.

---

**Built with**: HTML5, CSS3, Vanilla JavaScript
**Fonts**: Google Fonts (Playfair Display, DM Sans, JetBrains Mono)
**Icons**: Inline SVG
**Animations**: CSS Animations, Canvas API, IntersectionObserver
