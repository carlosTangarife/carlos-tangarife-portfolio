# 👋 Hi, I'm Carlos Tangarife

**Senior Software Engineer | Legacy Modernization Expert | Cloud Architecture Specialist**

11+ years transforming complex legacy systems into modern, scalable solutions for US-based companies.

📍 **Manizales, Colombia** | 🌍 **Available for Remote Work**

---

## 🎯 About Me

I'm a Senior Software Engineer with a proven track record of transforming legacy systems into modern, scalable solutions. My approach combines **technical excellence** with **business understanding**, ensuring solutions are not only functional but sustainable and aligned with organizational goals.

### 💡 My Professional Philosophy

- **Code as Communication**: Writing code that speaks to both machines and humans
- **Architecture as Business Enabler**: Technical decisions driven by business value
- **Quality as Continuous Process**: Not a final step, but an ongoing commitment
- **AI-Augmented Development**: Leveraging AI tools while maintaining human expertise

---

## 🚀 Key Achievements

| Metric | Achievement |
|--------|-------------|
| **Infrastructure Reduction** | Reduced 200 AWS Lambda functions to 60 (70% reduction) |
| **Performance Improvement** | Optimized database operations from 2 days to 2 hours (96% improvement) |
| **Technical Debt** | Reduced 160 .NET legacy projects to 85 (47% reduction) |
| **Delivery Speed** | Increased development velocity by 40% through AI-assisted workflows |
| **User Impact** | Built solutions serving 3M+ active users |
| **Code Quality** | Achieved 95%+ code coverage with comprehensive test automation |

---

## 💼 Current Role

**Senior Software Engineer** at **Sombra** · Client: **CampMinder (USA)**

Leading modernization initiatives for legacy camp management platform serving diverse subscriptions with complex role-based permissions and feature flag configurations.

**Key Contributions:**
- Reduced 160 legacy .NET projects to 85 (~47% reduction)
- Architected Communication Hub (CMS platform) for multi-channel messaging via Twilio
- Pioneered AI adoption initiative increasing delivery speed by 40%
- Built internal package ecosystem with Turborepo enabling code reuse across 10+ applications

---

## 🛠️ Tech Stack

### Frontend
![React](https://img.shields.io/badge/React-Expert-61DAFB?logo=react) ![TypeScript](https://img.shields.io/badge/TypeScript-Expert-3178C6?logo=typescript) ![Angular](https://img.shields.io/badge/Angular-Expert-DD0031?logo=angular) ![Vue](https://img.shields.io/badge/Vue.js-Proficient-4FC08D?logo=vue.js) ![Vite](https://img.shields.io/badge/Vite-Proficient-646CFF?logo=vite)

### Backend
![Node.js](https://img.shields.io/badge/Node.js-Expert-339933?logo=node.js) ![C#](https://img.shields.io/badge/C%23-Expert-239120?logo=c-sharp) ![.NET Core](https://img.shields.io/badge/.NET%20Core-Expert-512BD4?logo=.net) ![NestJS](https://img.shields.io/badge/NestJS-Proficient-E0234E?logo=nestjs)

### Cloud & Infrastructure
![AWS](https://img.shields.io/badge/AWS-Expert-FF9900?logo=aws) ![Azure](https://img.shields.io/badge/Azure-Proficient-0078D4?logo=azure) ![Docker](https://img.shields.io/badge/Docker-Proficient-2496ED?logo=docker)

### Database
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Expert-336791?logo=postgresql) ![SQL Server](https://img.shields.io/badge/SQL%20Server-Expert-CC2927?logo=microsoft-sql-server) ![MongoDB](https://img.shields.io/badge/MongoDB-Proficient-47A248?logo=mongodb)

### AI Tools
![Cursor](https://img.shields.io/badge/Cursor-Expert-000000?logo=cursor) ![ChatGPT](https://img.shields.io/badge/ChatGPT-Expert-412991?logo=openai)

---

## 📈 Experience

### 🏢 Sombra · CampMinder (USA)
**Senior Software Engineer** | Nov 2024 - Present
- Leading modernization of legacy camp management platform
- Reduced 160 .NET projects to 85 (~47% reduction)

### 🏢 Avenue Code · Blink Fitness (USA)
**Senior Full Stack Engineer** | 2022 - 2024
- Mission-critical apps for 3M+ users nationwide
- Reduced 200 AWS Lambda functions to 60 (~70% reduction)

### 🏢 CEIBA SOFTWARE · Medellín
**Developer and Architect** | 2019 - 2021
- Enterprise project leadership
- Frontend architecture standardization

### 🏢 XPERTGROUP · CFA
**Developer** | 2018 - 2019
- Dynamic credit scoring platform
- 95%+ code coverage achieved

---

## 📬 Let's Connect

- 🌐 **Portfolio**: [carlostangarife.com](https://carlostangarife.com)
- 💼 **LinkedIn**: [linkedin.com/in/carlostangarife](https://linkedin.com/in/carlostangarife)
- 📧 **Email**: [cjt860826@gmail.com](mailto:cjt860826@gmail.com)
- 📱 **WhatsApp**: [+57 301 229 5992](https://wa.me/573012295992)

---

## 💻 Portfolio Project

This repository contains my personal portfolio website — currently a static HTML/CSS/JS site deployed on AWS.

### 🚀 Migration to React (In Progress)

I'm currently working on a **React + TypeScript + Next.js** migration to elevate the portfolio to the next level. See [PRD.md](PRD.md) for the complete product requirements document.

**Current Stack**: Next.js 14 + TypeScript + Tailwind CSS | AWS Amplify (planned)

**Legacy Stack**: Vanilla HTML/CSS/JS | AWS S3 + CloudFront + Route 53

**Target Stack**: Next.js + TypeScript + Tailwind + Vite

### Project Structure

```
carlos-tangarife-portfolio/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx         # Root layout with metadata
│   │   ├── page.tsx           # Main page
│   │   └── globals.css        # Global styles + Tailwind
│   │
│   ├── components/
│   │   ├── layout/            # Navbar, Footer
│   │   └── sections/          # Hero, About, Impact, Experience, Skills, Contact
│   │
│   └── data/                  # TypeScript data files
│       ├── profile.ts         # Personal info
│       ├── experience.ts      # Work history
│       ├── skills.ts          # Technical skills
│       └── impacts.ts         # Achievement metrics
│
├── next.config.mjs            # Next.js configuration
├── tailwind.config.js         # Tailwind CSS configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

### Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production (static export)
npm run build
```

### Deployment

**Option 1: AWS Amplify (Recommended)**
1. Connect GitHub repository to AWS Amplify
2. Amplify automatically detects Next.js
3. Deploy with SSR/SSG support

**Option 2: AWS S3 + CloudFront**
1. Run `npm run build` to generate static export
2. Upload `.next/` or `out/` folder to S3
3. Configure CloudFront distribution

**Current**: Static HTML/CSS/JS site deployed on AWS S3 + CloudFront

**Live URL**: https://carlostangarife.com

### Quick Deploy Commands

```powershell
# Windows
.\deploy.ps1
```

```bash
# Linux/Mac
chmod +x deploy.sh
./deploy.sh
```

---

## 🌟 What I'm Looking For

- **Remote opportunities** (Full-time or Contract)
- **Senior/Lead Software Engineer** roles
- **Architecture & Modernization** projects
- **US-based companies**

---

*Building software that speaks to both machines and humans* ⚡