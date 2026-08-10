import { ProfileStat } from "@/lib/types";

interface StatBlockProps {
  stats: ProfileStat[];
}

export function StatBlock({ stats }: StatBlockProps) {
  return (
    <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 font-mono text-sm">
      {stats.map((stat) => (
        <div key={stat.label}>
          <dt className="uppercase tracking-wide text-bone">{stat.label}</dt>
          <dd className="text-base">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}