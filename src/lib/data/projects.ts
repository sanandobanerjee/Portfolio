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
    tagline: "Codebase-aware coding agent",
    description:
      "Answers questions about a Python repository by combining semantic retrieval with AST-derived call-graph traversal. An LLM decides whether retrieved context is sufficient or whether hopping the call graph (up to 3 hops) would answer more completely — citations are built from parsed metadata, never LLM-generated.",
    detail:
      "AST-based chunking · LangGraph decide/hop loop · non-hallucinated citations from parsed metadata",
    stack: ["FastAPI", "LangGraph", "LangChain", "ChromaDB", "Groq"],
    metric: "Ingests any python repo",
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