# Product Requirements Document (PRD)
## Carlos Tangarife Personal Portfolio - React Modernization

**Version**: 1.0  
**Date**: April 2026  
**Author**: Carlos Tangarife  
**Status**: Draft  

---

## 1. Executive Summary

### Purpose
Transform the existing static HTML/CSS/JS portfolio (carlostangarife.com) into a modern React + TypeScript application that reflects the professional stature of a Senior Software Engineer with 11+ years of experience.

### Problem Statement
Current portfolio is a static HTML site that:
- Lacks maintainability and extensibility
- Has no type safety or code quality enforcement
- Limits SEO potential without SSR/SSG
- Cannot easily integrate dynamic content
- Doesn't reflect technical capabilities of the engineer

### Opportunity
Build a portfolio that:
- Demonstrates technical excellence through implementation
- Achieves maximum SEO visibility for personal brand
- Enables easy content updates without code changes
- Provides a foundation for future expansion (blog, projects, articles)
- Showcases React/TypeScript expertise to potential employers

---

## 2. Product Vision

> "A high-performance, SEO-optimized portfolio that showcases technical excellence and accelerates career opportunities through a world-class digital presence."

### Success Metrics
| Metric | Target |
|--------|--------|
| Lighthouse Score | 90+ (all categories) |
| First Contentful Paint | < 1.5s |
| Time to Interactive | < 3s |
| SEO Score | 90+ |
| Accessibility | 95+ |

---

## 3. User Personas

### Primary: Hiring Managers / Recruiters
- Looking for technical candidates
- Evaluating portfolio to assess skill level
- Need quick access to contact information
- Value clear demonstration of impact

### Secondary: Technical Peers
- Evaluating code quality and architecture
- Looking for inspiration for own portfolio
- Assessing technical depth

### Tertiary: Potential Clients
- Evaluating contractor capabilities
- Assessing reliability and professionalism

---

## 4. Functional Requirements

### FR-001: Core Content Display
The application MUST display the following sections:
- **Hero**: Name, title, tagline, availability status, key statistics
- **About**: Professional summary, philosophy, core expertise highlights
- **Impact/Achievements**: Quantifiable results with metrics
- **Experience Timeline**: Work history with companies, roles, achievements
- **Skills**: Categorized technical skills with proficiency indicators
- **Contact**: Multiple contact channels (email, LinkedIn, WhatsApp, GitHub)

### FR-002: Responsive Design
The application SHALL work flawlessly across:
- Desktop (1920px+)
- Laptop (1280px - 1919px)
- Tablet (768px - 1279px)
- Mobile (< 768px)

### FR-003: Navigation
The application MUST include:
- Fixed navigation bar with smooth scroll
- Section anchors
- Mobile hamburger menu
- Keyboard accessible navigation

### FR-004: SEO Optimization
The application MUST implement:
- Dynamic meta tags per page
- Open Graph tags for social sharing
- Twitter Card meta tags
- Structured data (JSON-LD) for rich snippets
- Automatic sitemap generation
- Robots.txt configuration
- Canonical URLs
- Semantic HTML with proper heading hierarchy

### FR-005: Performance
The application SHALL achieve:
- Lazy loading for images
- Code splitting for route-based chunks
- Static generation where possible
- Optimized font loading
- Minified production builds

### FR-006: Content Management
The application SHOULD:
- Store experience/skills data in TypeScript/JSON files
- Support MDX for future article content
- Enable content updates via code (no CMS required)

### FR-007: Contact Functionality
The application MAY include:
- Contact form with backend integration
- Email integration (API route + email service)
- Form validation and error handling

### FR-008: Multi-Format CV Generation
The application SHOULD provide downloadable CVs in multiple formats:
- **PDF Vitae**: Standard professional format
- **PDF Backend-focused**: Emphasizes .NET, C#, backend skills
- **PDF Frontend-focused**: Emphasizes React, Angular, Vue skills
- **PDF Angular-specific**: Angular specialization
- **PDF React-specific**: React specialization
- **Markdown**: For ATS systems and text-based submission
- **JSON**: Structured data for HR systems

### FR-009: Brand Consistency
The CV exports MUST share:
- Same design system as the website
- Same color palette (dark & gold)
- Same data source (single source of truth)
- Professional formatting

---

## 5. Technical Requirements

### TR-001: Framework & Language
- **Framework**: React 18+ with Vite (SPA approach)
- **Language**: TypeScript (strict mode)
- **Build Tool**: Vite

### TR-002: Styling
- **Primary**: Tailwind CSS
- **Fallback**: CSS Modules for complex components

### TR-003: Routing
- React Router v6+ (if SPA) or Next.js App Router (if SSR)
- Client-side navigation with prefetching

### TR-004: SEO Tools
- React Helmet for meta tags
- sitemap generator plugin
- react-schema-org for structured data

### TR-005: Development Tools
- **Linting**: ESLint with strict config
- **Formatting**: Prettier
- **Testing**: Vitest + React Testing Library
- **E2E**: Playwright

### TR-006: Design System
- Extract color palette from current CSS (dark & gold theme)
- Maintain typography (Inter + Playfair Display)
- Preserve visual identity while modernizing

### TR-007: CV Generation
- **PDF Library**: @react-pdf/renderer for PDF generation
- **Templates**: Separate React components for each CV format
- **Data Source**: Same TypeScript data files used by the site
- **Export**: Client-side generation for PDF, server route for JSON/Markdown

---

## 6. Non-Functional Requirements

### Performance
- Lighthouse score 90+ across all categories
- Core Web Vitals within green thresholds
- Optimized images using next/image or equivalent

### Accessibility
- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- Proper color contrast ratios

### Security
- No sensitive data exposed
- Secure headers configured
- No XSS vulnerabilities
- Dependency vulnerabilities patched

### Maintainability
- Clear component architecture
- TypeScript strict mode
- Documented component library
- Consistent code style

---

## 7. Content Requirements (Source: CV)

### Experience Data
| Company | Role | Period | Key Achievement |
|---------|------|--------|-----------------|
| Sombra / CampMinder | Senior Software Engineer | Nov 2024 - Present | Reduced 160 .NET projects to 85 |
| Avenue Code / Blink Fitness | Senior Full Stack Engineer | 2022 - 2024 | Reduced 200 Lambda functions to 60 |
| CEIBA SOFTWARE | Developer and Architect | 2019 - 2021 | Frontend architecture standardization |
| XPERTGROUP / CFA | Developer | 2018 - 2019 | 95%+ code coverage |
| NewShore | Advanced Developer | 2017 - 2018 | Flight booking platforms |
| DataSoft | SQL Developer/DBA | 2015 - 2017 | 96% query performance improvement |

### Key Metrics to Display
- 11+ years experience
- 70% infrastructure reduction
- 96% performance improvement
- 47% technical debt reduction
- 40% delivery speed increase
- 3M+ users impacted
- 95%+ code coverage

### Tech Stack to Feature
- **Expert**: React, TypeScript, Angular, Node.js, C#, .NET Core, AWS Lambda, CloudFront, DynamoDB, PostgreSQL, SQL Server
- **Proficient**: Vue, Vite, NestJS, MongoDB, Azure DevOps, Docker, Cursor, ChatGPT

---

## 8. Migration Roadmap

### Phase 1: Foundation (Week 1)
- [ ] Initialize Vite + React + TypeScript project
- [ ] Configure ESLint, Prettier, TypeScript strict
- [ ] Set up Tailwind CSS with current color palette
- [ ] Create component directory structure
- [ ] Configure React Router for navigation

### Phase 2: Content Migration (Week 2)
- [ ] Extract content from current index.html
- [ ] Create TypeScript data files for experience, skills, contact
- [ ] Build section components (Hero, About, Impact, Experience, Skills, Contact)
- [ ] Implement responsive layouts
- [ ] Add smooth scrolling navigation

### Phase 3: SEO & Performance (Week 3)
- [ ] Implement React Helmet for meta tags
- [ ] Generate dynamic sitemap.xml
- [ ] Add JSON-LD structured data
- [ ] Configure lazy loading for images
- [ ] Implement code splitting with React.lazy
- [ ] Run Lighthouse audit and optimize

### Phase 4: Enhancement (Week 4 - Optional)
- [ ] Add Framer Motion animations
- [ ] Implement contact form
- [ ] Set up CV download functionality
- [ ] Add dark mode toggle (if desired)

---

## 9. Design Constraints

### Must Preserve
- Dark & gold color scheme (#0a0a0a, #D4AF37, etc.)
- Typography (Inter + Playfair Display)
- Professional, premium aesthetic
- Current content and information architecture

### Must Improve
- Maintainability
- Performance
- SEO
- Accessibility
- Code quality

---

## 10. Out of Scope

The following are explicitly NOT in scope for this project:
- Blog content creation (structure only)
- Multi-language support
- Analytics integration (optional, can be added later)
- E-commerce or payment features
- User authentication
- CMS integration (content stored in code)

---

## 11. Dependencies

### External
- Vite (build tool)
- React 18+ (framework)
- Tailwind CSS (styling)

### Internal
- Current portfolio content from index.html
- Current CSS styles for design reference

---

## 12. Risks & Mitigations

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| SEO ranking drop during migration | Low | High | Maintain same URLs, implement proper redirects |
| Content loss during migration | Low | High | Backup current files before starting |
| Performance regression | Medium | Medium | Strict performance budgets, Lighthouse CI |
| Scope creep | Medium | Medium | Clear prioritization, phase-based delivery |

---

## 13. Future: Next.js Migration (Phase 2)

This PRD covers **Phase 1: Vite SPA** implementation.

A future Phase 2 will migrate to Next.js with SSR for maximum SEO:
- Move to Next.js App Router
- Deploy to AWS Amplify or similar
- Enable SSR/SSG capabilities
- Expected timeline: After Phase 1 is stable

---

## 13. Success Criteria

- [ ] PRD approved by stakeholder
- [ ] Tech stack confirmed (Next.js + TypeScript + Tailwind)
- [ ] Design system extracted from current CSS
- [ ] Migration roadmap finalized
- [ ] Phase 1 implementation starts

---

## 14. Appendix

### Current Site Analysis
- **URL**: https://carlostangarife.com
- **Stack**: Vanilla HTML/CSS/JS
- **Hosting**: AWS S3 + CloudFront + Route 53
- **Performance**: Lighthouse 90+
- **SEO**: Basic meta tags, sitemap, robots.txt

### References
- Next.js Documentation: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- TypeScript: https://www.typescriptlang.org

---

*This document will be updated as the project evolves.*