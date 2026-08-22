import { Project } from "@/lib/types";
import { Tag } from "@/components/ui/Tag";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="reveal mb-14 max-w-2xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-volt">
            The expedition
          </p>
          <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
            Three worlds.
            <br />
            <span className="text-mist">One mission.</span>
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-mist sm:text-xl">
            Travel outward from the sun. Each stop shows how I think about intelligence, retrieval, and resilience.
          </p>
        </div>
        <div className="grid gap-8">
          {projects.map((project, i) => (
            <article
              key={project.slug}
              className={`project-card ${project.theme ?? ""} reveal reveal-delay-${Math.min(i + 1, 3)}`}
            >
              <div className="planet-art" aria-hidden="true">
                <span className="planet-body" />
                <span className="planet-orbit" />
              </div>
              <div className="relative z-10 flex flex-col justify-between gap-8 p-7 sm:p-10">
                <div>
                  <div className="mb-10 flex items-start justify-between font-mono text-sm text-mist">
                    <span>
                      {project.index ?? String(i + 1).padStart(2, "0")} /{" "}
                      {String(projects.length).padStart(2, "0")}
                    </span>
                    {project.metric && <span className="text-volt">{project.metric}</span>}
                  </div>
                  {project.planet && (
                    <p className="font-mono text-sm uppercase tracking-[0.2em] text-volt">
                      Landing site · {project.planet}
                    </p>
                  )}
                  <h3 className="font-display mt-3 text-3xl font-semibold tracking-[-0.03em] sm:text-5xl">
                    {project.name}
                  </h3>
                  <p className="mt-3 font-mono text-sm uppercase tracking-[0.1em] text-mist">
                    {project.tagline}
                  </p>
                  <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/80">
                    {project.description}
                  </p>
                  {project.detail && (
                    <p className="mt-4 max-w-2xl border-l border-volt/60 pl-5 font-mono text-sm leading-relaxed text-mist">
                      {project.detail}
                    </p>
                  )}
                </div>
                <div>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <Tag key={tech} label={tech} />
                    ))}
                  </div>
                  <div className="flex gap-6 font-mono text-sm">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bone underline decoration-volt underline-offset-8 transition-colors hover:text-volt outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
                      >
                        Live signal ↗
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-bone underline decoration-volt underline-offset-8 transition-colors hover:text-volt outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
                      >
                        View source mission ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}