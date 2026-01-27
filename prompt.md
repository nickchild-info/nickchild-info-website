# Claude Code Prompt: Nick Child Professional Website

## Project Overview

Build a professional portfolio website for Nicholas Child, an independent Data & Analytics Consultant based in London. The site should generate contract work enquiries from companies seeking senior data leadership and hands-on implementation expertise.

**Use the frontend-design skill from the marketplace for this project.**

## Design Direction

**Aesthetic**: Editorial/Magazine meets Industrial Data - Think Bloomberg Terminal sophistication crossed with The Economist's editorial clarity. The design should convey "serious technical expertise with strategic business acumen."

**Tone**: Confident, credible, outcome-focused. Not flashy or startup-y. This is for CTOs, CFOs, and Heads of Commercial who need someone who can both lead and execute.

**Color Palette**: 
- Primary: Electric neon blue 
- Accent: Electric green (#FFB800) - suggests premium, data visualization
- Neutrals: Cool grays with slight blue undertones
- Code/technical elements: Monospace in a muted cyan or green

**Typography**: 
- Headlines: A refined serif (Playfair Display or similar) for editorial authority
- Body: Clean geometric sans-serif (DM Sans or similar)
- Code/Technical: JetBrains Mono or Fira Code

**Key Differentiator**: Animated data visualizations as hero elements - subtle chart lines drawing, numbers ticking up to key metrics. The site itself should demonstrate data sophistication.

## Site Structure

### 1. Hero Section
- Strong headline: "Data Strategy. Delivered."
- Subline: "I build data platforms that transform operations. 10+ years turning messy data into competitive advantage."
- Animated background: Subtle flowing data visualization (think: connected nodes, flowing lines)
- Clear CTAs: "View Case Studies" and "Get in Touch"
- Location badge: "London, UK"

### 2. The Problem I Solve (Value Proposition)
Brief section addressing pain points:
- "Your data team is drowning in requests"
- "Reports take days, not minutes"  
- "You know there's gold in your data - you just can't access it"
- "You need a Head of Data but can't commit to a full-time hire"

### 3. Services Section
Three core offerings:
1. **Fractional Head of Data** - Strategic leadership on a flexible basis
2. **Data Platform Build** - End-to-end modern data stack implementation
3. **Analytics Automation** - Transform manual processes into self-serve analytics

### 4. Case Studies (Portfolio)
Create detailed case study cards for these projects:

**Case Study 1: GetHarley - HealthTech Scale-up**
- Built end-to-end data platform (AWS, Snowflake, dbt, Fivetran)
- Key metrics: 95% self-serve analytics, 7 FTE automated, SLA from 24hrs → 10min, error rate 5% → <1%
- AI-powered customer service: 70% faster response times, 50%+ queries handled by AI
- Grew team from 1 → 3
- Tags: HealthTech, AWS, Snowflake, dbt, AI/Automation

**Case Study 2: Meshh - Spatial Analytics for Events**
- Head of Data & Analytics for spatial analytics startup
- Clients: Sky, NFL, F1, Formula-E, LA Rams
- Key metrics: 90% reduction in client report prep time, £150k ARR from new benchmarking tool
- Built visitor heatmaps, dwell-time analytics, customer segmentation
- Tags: Events, Sports, Real-time Analytics, Product Development

**Case Study 3: Vue Entertainment - Global Cinema Analytics**
- International cinema operator across multiple regions
- Key metrics: 75% reduction in reporting cycle time, 20% merchandise margin improvement
- Developed competitor price intelligence (web scraping) and ML scheduling
- Labour hours reduced 4%, show utilisation +5%
- Tags: Entertainment, ML/AI, Price Optimization, Web Scraping

**Case Study 4: Technical Blog Highlights (from Medium)**
- AWS Lambda optimization: 65% compute time reduction, 53% cost savings
- Automated data pipelines using Python, Google Sheets, APIs
- Real-time monitoring and alerting systems
- Link to Medium: @childnick

### 5. Tech Stack / Skills Section
Visual grid showing expertise:
- **Cloud**: AWS, GCP
- **Data Warehouses**: Snowflake, BigQuery, PostgreSQL
- **Transformation**: dbt, Python, SQL
- **Visualization**: Omni, Looker, Power BI, Tableau, Metabase
- **Orchestration**: Fivetran, Airflow, n8n
- **ML/AI**: sklearn, forecasting, segmentation, propensity modeling

### 6. About Section
Brief bio with professional photo placeholder:
- 10+ years in data & analytics
- From Nielsen → Own consultancy (InfoQlik) → Vue Entertainment → Meshh → GetHarley
- University of Cape Town - Business Science (Marketing)
- School Governor at Dundonald Primary (shows community investment)
- Non-Exec Chairman at Conbrako Engineering (family business, shows leadership breadth)

### 7. Social Proof / Featured Section
- Medium articles with read times
- Speaking: International Confex 2023 (Spatial Analytics)
- Client logos placeholder area

### 8. Contact Section
- Email: nick@nickchild.info
- LinkedIn: linkedin.com/in/nicholaschild
- Medium: medium.com/@childnick
- Location: Wimbledon, London
- Simple contact form

### 9. Footer
- Links to all sections
- "Available for contract work in London and remote"
- Copyright

## Technical Requirements

1. **Framework**: Build as a single-page React application (or vanilla HTML/CSS/JS if simpler)
2. **Responsive**: Mobile-first, works beautifully on all devices
3. **Performance**: Lazy load images, optimize for Core Web Vitals
4. **Animations**: Subtle scroll-triggered animations using CSS or Framer Motion
5. **Dark mode**: Implement dark mode as default (editorial feel)
6. **SEO**: Proper meta tags, structured data for local business
7. use playwright MCP to validate your work in each step. 

## File Structure Suggestion
```
/
├── index.html (or App.jsx)
├── styles/
│   └── main.css
├── components/
│   ├── Hero.jsx
│   ├── CaseStudy.jsx
│   ├── ServiceCard.jsx
│   └── TechStack.jsx
├── assets/
│   └── (placeholder images)
└── README.md
```

## Must-Have Features
1. Smooth scroll navigation
2. Animated metric counters in case studies
3. Hover states on all interactive elements
4. Mobile hamburger menu
5. Sticky navigation on scroll
6. Contact form (can be static, user will connect to Formspree or similar)

## Nice-to-Have Features
1. Animated data visualization in hero (SVG lines drawing)
2. Parallax effects on scroll
3. Case study modal/expanded view
4. Blog/Medium feed integration
5. Testimonial carousel (placeholder for future)

## Content Tone Guidelines
- Lead with outcomes, not activities
- Use specific numbers wherever possible
- Avoid jargon when possible; when technical, be precise
- Confident but not arrogant
- British English spelling

## Reference the plan.md file for implementation tracking
Use plan.md to track your implementation progress step-by-step.
Pick the most important step first and work your way through the list, do not just take the first thing you see.
file:///home/nick/nickchild-info-website/plan.md
Once each step is done, mark it off in plan.md before moving to the next.