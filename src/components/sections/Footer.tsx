import { Profile } from "@/lib/types";

interface FooterProps {
  profile: Profile;
}

export function Footer({ profile }: FooterProps) {
  return (
    <footer className="bg-volt text-bone px-6 py-16 mt-auto">
      <div className="mx-auto max-w-4xl">
        <h2 className="font-display font-extrabold text-4xl sm:text-6xl mb-6">
          Let&apos;s build something.
        </h2>
        <div className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm">
          <a
            href="mailto:sanandobanerjee2@gmail.com"
            className="underline underline-offset-4 hover:text-bone/70 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone"
          >
            Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-bone/70 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone"
          >
            Resume
          </a>
          <a
            href="https://github.com/sanandobanerjee"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-bone/70 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/sanando-banerjee-0341b924a/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-bone/70 outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-bone"
          >
            LinkedIn
          </a>
        </div>
        <p className="font-mono text-xs text-bone mt-8">
          {profile.name} · {profile.location}
        </p>
      </div>
    </footer>
  );
}
