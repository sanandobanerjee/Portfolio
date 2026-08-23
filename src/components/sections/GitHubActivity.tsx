import { getContributionSummary } from "@/lib/github";

const LEVEL_COLOR = [
  "bg-surface",
  "bg-volt/25",
  "bg-volt/50",
  "bg-volt/75",
  "bg-volt",
];

export async function GitHubActivity() {
  const summary = await getContributionSummary();

  if (!summary) {
    return null;
  }

  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-volt">
          Transmission log
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
          Signal activity.
        </h2>
        <div className="mt-10 grid gap-8 font-mono text-sm sm:grid-cols-3">
          <div>
            <p className="uppercase tracking-wider text-mist">Total contributions</p>
            <p className="mt-2 text-3xl text-bone">{summary.totalContributions}</p>
          </div>
          <div>
            <p className="uppercase tracking-wider text-mist">Current streak</p>
            <p className="mt-2 text-3xl text-bone">{summary.currentStreak}d</p>
          </div>
          <div>
            <p className="uppercase tracking-wider text-mist">Longest streak</p>
            <p className="mt-2 text-3xl text-bone">{summary.longestStreak}d</p>
          </div>
        </div>
        <div className="mt-12 flex gap-1 overflow-x-auto pb-2">
          {summary.weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {week.days.map((day) => (
                <span
                  key={day.date}
                  title={`${day.date} · ${day.count} contribution${day.count === 1 ? "" : "s"}`}
                  className={`h-3 w-3 rounded-[2px] ${LEVEL_COLOR[day.level]}`}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}