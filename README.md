<div align="center">

# Sanando Banerjee — Portfolio

**Full-Stack / AI Engineer** · Building orbital intelligence, agentic systems, and Earth-facing defenses

[![Live Site](https://img.shields.io/badge/live-portfolio--sooty--psi--17.vercel.app-9D00FF?style=for-the-badge)](https://portfolio-sooty-psi-17.vercel.app/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)](https://vercel.com/)

[**View Live Site →**](https://portfolio-sooty-psi-17.vercel.app/)

</div>

---

## About This Project

This is my personal portfolio — built to showcase real, shipped projects rather than tell you about them in a resume bullet. It's also a deliberate exercise in applying the same engineering discipline I bring to backend work — typed data contracts, component composition, and clear separation of concerns — to a frontend project.

### Design concept: "Mission Log"

The site frames the portfolio as a space odyssey. A starfield and orbital system introduce the mission, while each project becomes a landing on a different planet: Saturn for orbital intelligence, Mars for agentic retrieval, and Earth for real-time cyber defense. The visual language keeps the atmosphere focused and the content scannable, so the metaphor adds personality without getting in the way of the work.

| Token | Role |
|---|---|
| `void` | Deep green-black page background |
| `surface` | Dark green-black card and panel background |
| `bone` | Warm cream primary text |
| `volt` | Golden yellow primary accent and orbital glow |
| `volt-bright` | Lighter yellow secondary accent |
| `mist` | Muted green-gray supporting text |
| `border` | Translucent green-gray borders |
| `spark` | Yellow highlight accent |

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
│   ├── ui/                 # Reusable atoms (Tag)
│   └── sections/            # Page sections (Header, Hero, Projects, About, Skills, Footer)
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