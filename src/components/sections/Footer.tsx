import { Profile } from "@/lib/types";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-20 lg:px-10 lg:py-28">
        <p className="mb-8 font-mono text-sm uppercase tracking-[0.2em] text-volt">
          Open transmission
        </p>
        <h2 className="font-display max-w-4xl text-balance text-5xl font-semibold leading-[0.95] tracking-[-0.03em] sm:text-7xl">
          Let&apos;s find
          <br />
          new worlds.
        </h2>
        <div className="mt-12 grid grid-cols-2 gap-3 font-mono text-sm sm:grid-cols-4">
          <a
            href="mailto:sanandobanerjee2@gmail.com"
            className="flex min-h-14 items-center justify-center border border-border px-3 text-center text-bone transition-all duration-300 hover:-translate-y-1 hover:border-volt hover:text-volt outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
          >
            Email ↗
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center border border-border px-3 text-center text-bone transition-all duration-300 hover:-translate-y-1 hover:border-volt hover:text-volt outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
          >
            Resume ↗
          </a>
          <a
            href="https://github.com/sanandobanerjee"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center border border-border px-3 text-center text-bone transition-all duration-300 hover:-translate-y-1 hover:border-volt hover:text-volt outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/sanando-banerjee-0341b924a/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex min-h-14 items-center justify-center border border-border px-3 text-center text-bone transition-all duration-300 hover:-translate-y-1 hover:border-volt hover:text-volt outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-col gap-3 border-t border-border px-6 py-7 font-mono text-sm uppercase tracking-wider text-mist sm:flex-row sm:items-center sm:justify-between lg:px-10">
        <span>{profile.name} · Earth station</span>
        <span>© 2026 · Built with intent</span>
      </div>
    </footer>
  );
}