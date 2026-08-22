import { AboutContent } from "@/lib/types";

interface AboutProps {
  about: AboutContent;
}

export function About({ about }: AboutProps) {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 lg:grid-cols-[0.7fr_1.3fr] lg:px-10">
        <div className="reveal">
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-volt">
            Field notes
          </p>
          <p className="mt-5 font-mono text-sm text-mist">
            Curious about
            <br />
            the hard parts.
          </p>
        </div>
        <div className="reveal reveal-delay-1">
          <p className="max-w-3xl text-balance text-2xl font-medium leading-tight tracking-[-0.02em] sm:text-4xl">
            {about.statement}
          </p>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-bone/80">
            {about.bio}
          </p>
          <div className="mt-12 grid gap-10 border-t border-border pt-8 text-base sm:grid-cols-2">
            <div>
              <p className="mb-3 font-mono text-sm uppercase tracking-wider text-mist">
                Education
              </p>
              <p className="leading-relaxed">
                {about.education.degree}
                <br />
                <span className="text-mist">
                  {about.education.institution} · {about.education.period}
                </span>
              </p>
            </div>
            <div>
              <p className="mb-3 font-mono text-sm uppercase tracking-wider text-mist">
                Leadership
              </p>
              <p className="leading-relaxed">{about.highlight}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}