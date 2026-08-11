<div align="center">

# Sanando Banerjee — Portfolio

**Full-Stack / AI Engineer** · Building backend systems and AI-powered pipelines

[![Live Site](https://img.shields.io/badge/live-portfolio--sooty--psi--17.vercel.app-9D00FF?style=for-the-badge)](https://portfolio-sooty-psi-17.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[**View Live Site →**](https://portfolio-sooty-psi-17.vercel.app/)

</div>

---

## About This Project

This is my personal portfolio — built to showcase real, shipped projects rather than tell you about them in a resume bullet. It's also a deliberate exercise in applying the same engineering discipline I bring to backend work — SOLID principles, typed data contracts, component composition — to a frontend project.

### Design concept: "Warm-Up, Then Work"

The site borrows its visual language from sports stadium signage, scoreboard energy,etc. — but keeps that personality concentrated in the Hero and Footer. The sections in between (About, Projects) shift into a calmer, fast-to-scan register, because a recruiter skimming for substance shouldn't have to decode sports metaphors to find your tech stack.

| Token | Role |
|---|---|
| `void` `#0B0B12` | Page background |
| `surface` `#17131F` | Card/panel background |
| `bone` `#F1EEF7` | Primary text |
| `volt` `#9D00FF` | Primary accent (Hero/Footer blocks) |
| `volt-bright` `#C77DFF` | Secondary accent (links) |
| `spark` `#FFC93C` | Highlight accent |

Typography: **Big Shoulders** (display), **Inter** (body), **JetBrains Mono** (data/utility) — all self-hosted via `next/font`.

---

## Tech Stack

- **Framework:** Next.js (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (CSS-first `@theme` design tokens)
- **Deployment:** Vercel
- **Fonts:** `next/font/google` (Big Shoulders, Inter, JetBrains Mono)

---

## Architecture

Built around a simple separation-of-concerns pattern so content, types, and presentation never mix:

```
src/
├── app/
│   ├── layout.tsx        # Root layout — font loading, metadata
│   ├── page.tsx           # Composition root — wires data into sections
│   └── globals.css         # Design tokens (single source of truth)
├── components/
│   ├── ui/                 # Reusable atoms (Tag, StatBlock)
│   └── sections/            # Page sections (Hero, About, Projects, Footer)
└── lib/
    ├── types.ts              # Content interfaces (Profile, Project, AboutContent)
    └── data/                  # Actual content, typed against lib/types.ts
```
---

## Getting Started

```bash
# Clone the repo
git clone https://github.com/sanandobanerjee/portfolio.git
cd portfolio

# Install dependencies
npm install

# Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it locally.

---



## Connect

- **Email:** sanandobanerjee2@gmail.com
- **GitHub:** [github.com/sanandobanerjee](https://github.com/sanandobanerjee)
- **LinkedIn:** [in/sanando-banerjee](https://www.linkedin.com/in/sanando-banerjee-0341b924a/)
- **Resume:** [View PDF](https://portfolio-sooty-psi-17.vercel.app/resume.pdf)

<div align="center">

_Open to Software Engineering roles — backend, AI systems, full-stack._

</div>