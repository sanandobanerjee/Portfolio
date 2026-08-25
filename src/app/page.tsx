import { Suspense } from "react";
import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { GitHubActivity } from "@/components/sections/GitHubActivity";
import { GitHubActivitySkeleton } from "@/components/sections/GitHubActivitySkeleton";
import { Footer } from "@/components/sections/Footer";
import { profile } from "@/lib/data/profile";
import { projects } from "@/lib/data/projects";
import { about } from "@/lib/data/about";
import { skills } from "@/lib/data/skills";

export default function Home() {
  return (
    <>
      <div className="starfield" aria-hidden="true" />
      <Header />
      <Hero profile={profile} />
      <Projects projects={projects} />
      <About about={about} />
      <Skills skills={skills} />
      <Suspense fallback={<GitHubActivitySkeleton />}>
        <GitHubActivity/>
      </Suspense>
      <Footer profile={profile} />
    </>
  );
}