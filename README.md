# Carlos Tangarife - Professional Portfolio

> A premium dark & gold themed portfolio website showcasing 11+ years of software engineering excellence

[![AWS S3](https://img.shields.io/badge/AWS-S3-orange)](https://aws.amazon.com/s3/)
[![CloudFront](https://img.shields.io/badge/AWS-CloudFront-orange)](https://aws.amazon.com/cloudfront/)
[![Live](https://img.shields.io/badge/Live-carlostangarife.com-gold)](https://carlostangarife.com)

---

## 🎯 Project Overview

This is a professional portfolio website designed to showcase my experience, skills, and achievements as a Senior Software Engineer. The design uses a sophisticated **dark and gold color palette** that conveys elegance, technical excellence, and premium quality.

### Key Features

- ✨ **Premium Design**: Dark backgrounds with luxurious gold accents
- ⚡ **High Performance**: Optimized for speed and lighthouse scores 90+
- 📱 **Fully Responsive**: Mobile-first design, works on all devices
- 🎨 **Smooth Animations**: Intersection Observer API for scroll-based effects
- 🔍 **SEO Optimized**: Complete meta tags, sitemap, robots.txt
- ♿ **Accessible**: ARIA labels, semantic HTML, keyboard navigation
- 🚀 **AWS Infrastructure**: S3 + CloudFront + Route 53

---

## 📁 Project Structure

```
carlos-tangarife-portfolio/
│
├── index.html              # Main HTML structure
├── styles.css              # Complete styling with CSS variables
├── script.js               # Interactive behaviors and animations
├── favicon.svg             # Custom logo favicon
├── robots.txt              # Search engine instructions
├── sitemap.xml             # SEO sitemap
│
├── src/                    # Future source files (if needed)
├── assets/                 # Images, fonts, etc.
│   ├── images/
│   └── fonts/
│
└── docs/                   # Documentation
    ├── AWS-DEPLOYMENT-GUIDE.md    # Complete AWS setup guide
    └── ...
```

---

## 🎨 Design System

### Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Deep Black | `#0a0a0a` | Primary background |
| Charcoal | `#1a1a1a` | Secondary background |
| Card Background | `#1c1c1c` | Component backgrounds |
| Metallic Gold | `#D4AF37` | Primary accent color |
| Champagne Gold | `#F4E5C3` | Light gold accent |
| Bronze | `#8B7355` | Tertiary accent |
| White | `#FFFFFF` | Primary text |
| Light Gray | `#E8E8E8` | Secondary text |
| Medium Gray | `#A0A0A0` | Muted text |

### Typography

- **Display Font**: Playfair Display (serif) - For headings and impactful text
- **Body Font**: Inter (sans-serif) - For body text and UI elements

---

## 🚀 Quick Start

### Local Development

1. **Clone or download the project:**
   ```bash
   cd carlos-tangarife-portfolio
   ```

2. **Open in browser:**
   - Simply open `index.html` in your browser
   - Or use a local server:
     ```bash
     # Python 3
     python -m http.server 8000
     
     # Node.js (with http-server)
     npx http-server .
     ```

3. **Access:**
   - Navigate to `http://localhost:8000`

### Make Edits

- **Content**: Edit `index.html`
- **Styling**: Edit `styles.css`
- **Behavior**: Edit `script.js`

---

## ☁️ AWS Deployment

This portfolio is designed to be hosted on AWS using:
- **S3**: Static file storage
- **CloudFront**: Global CDN for fast delivery
- **Route 53**: DNS management

### Complete Deployment Guide

See [`docs/AWS-DEPLOYMENT-GUIDE.md`](docs/AWS-DEPLOYMENT-GUIDE.md) for step-by-step instructions.

### Quick Deploy Commands

```bash
# Upload to S3
aws s3 sync . s3://carlostangarife.com \
  --exclude ".git/*" \
  --exclude "docs/*" \
  --exclude "README.md" \
  --delete

# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id YOUR_DISTRIBUTION_ID \
  --paths "/*"
```

---

## 📈 Performance

### Lighthouse Scores (Target)

- **Performance**: 95+
- **Accessibility**: 95+
- **Best Practices**: 95+
- **SEO**: 100

### Optimizations

- Minimal external dependencies
- Lazy loading images (when added)
- CSS and JS minification ready
- Gzip compression via CloudFront
- Browser caching headers
- Optimized font loading

---

## 🔧 Customization

### Update Personal Information

1. **Contact Details** (`index.html` line ~420):
   ```html
   <div class="contact-item-value">your.email@domain.com</div>
   ```

2. **LinkedIn URL** (`index.html` line ~450):
   ```html
   <a href="https://linkedin.com/in/yourprofile">
   ```

3. **GitHub URL** (`index.html` line ~460):
   ```html
   <a href="https://github.com/yourusername">
   ```

### Change Colors

Modify CSS variables in `styles.css` (lines 8-25):
```css
:root {
    --color-gold: #D4AF37;          /* Your accent color */
    --color-bg-primary: #0a0a0a;    /* Background */
    /* ... */
}
```

### Add Your Photo

Add an image in the About or Hero section:
```html
<div class="profile-image">
    <img src="assets/images/profile.jpg" alt="Carlos Tangarife">
</div>
```

---

## 🔗 Connect Form Backend

The contact form currently shows an alert. Connect to a real backend:

### Option 1: AWS Lambda + API Gateway

```javascript
// In script.js
const response = await fetch('YOUR_API_GATEWAY_URL', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formData)
});
```

### Option 2: Formspree (Easiest)

```html
<!-- In index.html -->
<form action="https://formspree.io/f/YOUR_ID" method="POST">
```

### Option 3: EmailJS

See: https://www.emailjs.com/

---

## 📊 SEO Checklist

- [x] Title tags optimized
- [x] Meta descriptions (155-160 chars)
- [x] Open Graph tags for social sharing
- [x] Semantic HTML5 structure
- [x] Proper heading hierarchy (H1 → H2 → H3)
- [x] Alt text placeholders (add when images added)
- [x] robots.txt configured
- [x] sitemap.xml created
- [ ] Submit to Google Search Console
- [ ] Set up Google Analytics
- [ ] Generate and submit structured data

---

## 🛠️ Tech Stack

- **Frontend**: Vanilla HTML5, CSS3, JavaScript (ES6+)
- **Fonts**: Google Fonts (Inter, Playfair Display)
- **Icons**: SVG (inline)
- **Hosting**: AWS S3
- **CDN**: CloudFront
- **DNS**: Route 53
- **SSL**: AWS Certificate Manager

**No frameworks, no build process** - keeping it simple and fast! 🚀

---

## 📦 Dependencies

**None!** This is pure vanilla web development. No npm packages, no bundlers, no frameworks.

### External Resources

- Google Fonts (Inter, Playfair Display) - Can be self-hosted if needed

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] All sections load correctly
- [ ] Smooth scroll navigation works
- [ ] Contact form validates input
- [ ] Animations trigger on scroll
- [ ] Mobile responsive (test on real devices)
- [ ] Cross-browser (Chrome, Firefox, Safari, Edge)
- [ ] All links work
- [ ] No console errors

### Tools

- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GT Metrix](https://gtmetrix.com/)
- [WAVE Accessibility](https://wave.webaim.org/)
- [W3C Validator](https://validator.w3.org/)

---

## 📝 License

© 2025 Carlos Javier Tangarife Gil. All rights reserved.

This portfolio is personal work. Feel free to use the structure/design as inspiration for your own portfolio, but please don't use my personal content or brand identity.

---

## 📞 Contact

**Carlos Javier Tangarife Gil**

- 🌐 Website: [carlostangarife.com](https://carlostangarife.com)
- 💼 LinkedIn: [linkedin.com/in/carlostangarife](https://linkedin.com/in/carlostangarife)
- 📧 Email: carlos@carlostangarife.com
- 📍 Location: Manizales, Colombia
- 💻 Available for: Remote work, Full-time, Contract

---

## 🎯 Roadmap

Future enhancements:

- [ ] Blog section for technical articles
- [ ] Case studies with detailed project breakdowns
- [ ] Downloadable PDF resume
- [ ] Testimonials slider
- [ ] Dark/Light mode toggle
- [ ] Multilingual support (English/Spanish)
- [ ] GitHub Actions CI/CD pipeline
- [ ] CloudFormation/Terraform IaC
- [ ] AWS WAF security layer

---

## 🙏 Acknowledgments

- Design inspiration from premium portfolio trends
- Color palette inspired by luxury brands
- Built with Cursor AI assistance
- Hosted on AWS infrastructure

---

**Built with precision and passion** ✨

*Last Updated: December 2025*

