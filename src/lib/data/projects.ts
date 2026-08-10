import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "saturn-ai",
    name: "Saturn-AI",
    tagline: "Full-stack AI trading intelligence platform",
    description:
      "Ingests live crypto news from 5 RSS feeds every 10 minutes and generates AI-powered BUY/SELL/HOLD signals with confidence scoring via Groq. Modular SOLID backend with 9+ REST APIs, async pipelines, a streaming AI explanation service, and an MCP server exposing trading tools to Claude Desktop and other MCP-compatible agents.",
    stack: ["FastAPI", "MongoDB Atlas", "React", "Groq", "MCP Server"],
    metric: "10-min pipeline interval",
    liveUrl: "https://sanandobanerjee-saturn.vercel.app/",
    repoUrl: "https://github.com/sanandobanerjee/Saturn-AI",
    featured: true,
  },
  {
    slug: "ddos-overwatch",
    name: "DDoS Overwatch",
    tagline: "Real-time cyberattack visualization platform",
    description:
      "Visualizes 2+ DDoS attacks per second across a 14-country network in real time using Server-Sent Events, with Zustand-managed React state handling 1,000+ concurrent events and sub-second UI responsiveness.",
    stack: ["React", "Zustand", "Server-Sent Events"],
    metric: "1,000+ concurrent events",
    repoUrl: "https://github.com/sanandobanerjee/DDoS-OverWatch",
  },
];