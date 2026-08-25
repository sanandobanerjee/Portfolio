export function GitHubActivitySkeleton() {
  return (
    <section className="border-t border-border py-20 lg:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-volt">
          Transmission log
        </p>
        <h2 className="font-display text-4xl font-semibold tracking-[-0.03em] sm:text-6xl">
          Signal activity.
        </h2>
        <p className="mt-4 font-mono text-sm text-mist">Receiving signal…</p>
        <div className="mt-10 grid gap-8 font-mono text-sm sm:grid-cols-3">
          {["Total contributions", "Current streak", "Longest streak"].map((label) => (
            <div key={label}>
              <p className="uppercase tracking-wider text-mist">{label}</p>
              <div className="mt-2 h-8 w-20 animate-pulse rounded bg-surface" />
            </div>
          ))}
        </div>
        <div className="mt-12 flex gap-1 overflow-x-auto pb-2">
          {Array.from({ length: 52 }).map((_, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1">
              {Array.from({ length: 7 }).map((_, dayIndex) => (
                <span
                  key={dayIndex}
                  className="h-3 w-3 animate-pulse rounded-[2px] bg-surface"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}