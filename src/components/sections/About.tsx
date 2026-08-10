import { AboutContent } from "@/lib/types";

interface AboutProps{
    about: AboutContent
}

export function About({ about }: AboutProps) {
  return (
    <section className="px-6 py-24">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8">About</h2>
        <p className="text-lg text-bone/80 max-w-2xl mb-8">{about.bio}</p>
        <div className="border-t border-bone/10 pt-6 space-y-4 font-mono text-sm">
          <div>
            <p className="uppercase tracking-wide text-bone/50 mb-1">Education</p>
            <p>
              {about.education.degree} · {about.education.institution} ·{" "}
              {about.education.period}
            </p>
          </div>
          <div>
            <p className="uppercase tracking-wide text-bone/50 mb-1">Leadership</p>
            <p>{about.highlight}</p>
          </div>
        </div>
      </div>
    </section>
  );
}