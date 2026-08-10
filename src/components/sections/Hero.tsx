import { Profile } from "@/lib/types";
import { StatBlock } from "@/components/ui/StatBlock";

interface HeroProps {
  profile: Profile;
}

export function Hero({ profile }: HeroProps) {
  return (
    <section className="bg-volt text-bone px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <p className="font-mono text-sm uppercase tracking-widest mb-4">
          {profile.status} · {profile.location}
        </p>
        <h1 className="font-display font-extrabold text-6xl sm:text-8xl leading-[0.9] mb-8">
          {profile.name}
        </h1>
        <p className="text-xl sm:text-2xl max-w-xl mb-10">{profile.role}</p>
        <StatBlock stats={profile.stats} />
      </div>
    </section>
  );
}