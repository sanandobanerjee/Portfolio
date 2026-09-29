import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "saturn-ai",
    index: "01",
    planet: "SATURN",
    theme: "saturn",
    name: "Saturn-AI",
    tagline: "Crypto intelligence platform",
    description:
      "Ingests live crypto news from 5 RSS feeds every 10 minutes and generates explainable BUY/SELL/HOLD signals with confidence scoring via Groq.",
    detail:
      "9+ REST APIs · async pipelines · streaming explanations · MCP server for Claude Desktop and compatible agents",
    stack: ["FastAPI", "MongoDB Atlas", "React", "Groq", "MCP Server"],
    metric: "10-min pipeline interval",
    liveUrl: "https://sanandobanerjee-saturn.vercel.app/",
    repoUrl: "https://github.com/sanandobanerjee/Saturn-AI",
    featured: true,
  },
  {
    slug: "mars-ai",
    index: "02",
    planet: "MARS",
    theme: "mars",
    name: "Mars-AI",
    tagline: "Codebase-aware coding agent using multi-hop retrieval",
    description:
      "Answers questions about a Python repository by tracing how code is actually connected using an LLM which utilises a call graph (up to 3 hops), with citations built from parsed metadata rather than generated. Evaluated against a hand-curated 32-question suite across four structurally different codebases, not anecdotal testing.",
    detail:
      "75% multi-hop trigger accuracy · 87.5% fabrication avoidance on adversarial questions · citation precision improved via a documented dataset self-correction",
    stack: ["FastAPI", "LangGraph", "LangChain", "ChromaDB","LLM-as-a-judge" ,"Groq"],
    metric: "32-question eval suite",
    repoUrl: "https://github.com/sanandobanerjee/Mars-AI",
  },
  {
    slug: "ddos-overwatch",
    index: "03",
    planet: "EARTH",
    theme: "earth",
    name: "DDoS Overwatch",
    tagline: "Earth sentinel · real-time cyberattack visualization",
    description:
      "A live operations interface watching over a 14-country network, visualizing DDoS attacks with Server-Sent Events and sub-second UI responsiveness.",
    detail: "Zustand-managed React state · 2+ attack events per second · streaming data architecture",
    stack: ["React", "Zustand", "Server-Sent Events"],
    metric: "1,000+ concurrent events",
    repoUrl: "https://github.com/sanandobanerjee/DDoS-OverWatch",
  },
];