import Link from "next/link";
import { Header } from "@/components/sections/Header";

export default function NotFound() {
  return (
    <>
      <div className="starfield" aria-hidden="true" />
      <Header />
      <section className="flex flex-1 flex-col items-center justify-center border-t border-border px-6 py-24 text-center">
        <p className="mb-4 font-mono text-sm uppercase tracking-[0.2em] text-volt">
          Signal lost
        </p>
        <h1 className="font-display text-6xl font-semibold tracking-[-0.03em] sm:text-8xl">
          404
        </h1>
        <p className="mt-6 max-w-md text-lg leading-relaxed text-mist">
          This co-ordinate doesn&apos;t exist in the mission log. The page may
          have drifted out of orbit, or never launched.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex min-h-14 items-center justify-center border border-border px-6 font-mono text-sm text-bone transition-all duration-300 hover:-translate-y-1 hover:border-volt hover:text-volt outline-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-volt"
        >
          Return to station ↗
        </Link>
      </section>
    </>
  );
}