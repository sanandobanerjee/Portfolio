import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "saturn-ai",
    index: "01",
    planet: "SATURN",
    theme: "saturn",
    name: "Saturn-AI",
    tagline: "Orbital intelligence platform",
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
    slug: "mars",
    index: "02",
    planet: "MARS",
    theme: "mars",
    name: "Mars",
    tagline: "Multi-hop agentic retrieval and scoring",
    description:
      "A codebase-aware coding agent that traverses a repository's structure and call graph, using multi-hop retrieval to answer complex questions and assist with development tasks.",
    detail: "LangGraph agent state machine · AST-based chunking · ChromaDB vector store",
    stack: ["LangChain", "LangGraph", "ChromaDB", "Groq"],
    metric: "In development · v1 in progress",
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