import { Profile } from "@/lib/types";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  const [firstName, ...rest] = profile.name.split(" ");

  return (
    <section className="border-t border-border">
      <div className="mx-auto grid max-w-6xl items-end gap-12 px-6 pb-20 pt-16 lg:grid-cols-[1.3fr_0.7fr] lg:px-10 lg:pb-24 lg:pt-24">
        <div className="reveal">
          <p className="mb-8 font-mono text-sm uppercase tracking-[0.22em] text-volt">
            {profile.status} · {profile.location}
          </p>
          <h1 className="font-display max-w-4xl text-balance text-[clamp(3rem,9vw,7rem)] font-semibold leading-[0.88] tracking-[-0.04em] text-bone">
            {firstName}
            <br />
            <span className="text-mist">{rest.join(" ")}</span>
          </h1>
          <p className="mt-8 max-w-xl text-pretty text-lg leading-relaxed text-mist sm:text-xl">
            {profile.tagline}
          </p>
        </div>
        <div
          className="orbit-mark reveal reveal-delay-2"
          aria-label="A stylized orbital system"
        >
          <span className="orbit-ring orbit-ring-one" />
          <span className="orbit-ring orbit-ring-two" />
          <span className="orbit-core">{profile.initials}</span>
        </div>
      </div>
    </section>
  );
}