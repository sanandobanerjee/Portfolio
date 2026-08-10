import { Hero } from "@/components/sections/Hero";
import { about } from "@/lib/data/about";
import { profile } from "@/lib/data/profile";
import { About } from "@/components/sections/About";
import { Projects } from "@/components/sections/Projects";
import { projects } from "@/lib/data/projects";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <Hero profile={profile} />
      <About about={about}/>
      <Projects projects={projects}/>
      <Footer profile={profile}/>
    </>
  );
}