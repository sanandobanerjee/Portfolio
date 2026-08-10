import { Project } from "@/lib/types";
import { Tag } from "@/components/ui/Tag";

interface ProjectsProps {
  projects: Project[];
}

export function Projects({ projects }: ProjectsProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-12">Projects</h2>
        <div className="grid gap-8">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="border border-bone/10 rounded-2xl p-6 bg-surface"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-4 gap-y-1 mb-1">
                <h3 className="font-display font-bold text-2xl">{project.name}</h3>
                {project.metric && (
                  <span className="font-mono text-xs text-bone/50 whitespace-nowrap">
                    {project.metric}
                  </span>
                )}
              </div>
              <p className="text-bone/70 mb-4">{project.tagline}</p>
              <p className="mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.stack.map((tech) => (
                  <Tag key={tech} label={tech} />
                ))}
              </div>
              {(project.liveUrl || project.repoUrl) && (
                <div className="flex gap-4 font-mono text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 text-volt-bright hover:text-volt outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone"
                    >
                      Live
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 text-volt-bright hover:text-volt outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone"
                    >
                      Code
                    </a>
                  )}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}