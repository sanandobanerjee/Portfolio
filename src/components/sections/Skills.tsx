interface SkillsProps {
  skills: string[];
}

export function Skills({ skills }: SkillsProps) {
  return (
    <section className="border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="mb-8 font-mono text-sm uppercase tracking-[0.2em] text-volt">
          Navigation systems
        </p>
        <div className="flex flex-wrap gap-x-8 gap-y-4">
          {skills.map((skill) => (
            <span
              key={skill}
              className="text-xl tracking-tight text-mist transition-colors hover:text-bone sm:text-2xl"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}