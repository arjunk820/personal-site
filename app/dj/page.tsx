import type { Metadata } from "next";
import Link from "next/link";
import WaveformBackground from "@/components/WaveformBackground";
import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "DJ",
  description: "Open-format DJ sets, mixes, and dates.",
};

const social = [
  { label: "SoundCloud", url: site.links.soundcloud },
  { label: "Instagram", url: site.links.instagram },
].filter((l) => l.url);

export default function DJPage() {
  return (
    <>
      <WaveformBackground />

      {/* Scrim: keeps copy legible where the spectrum bars run bright. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] bg-[linear-gradient(100deg,rgba(8,8,10,0.94)_0%,rgba(8,8,10,0.82)_38%,rgba(8,8,10,0.25)_70%,transparent_100%)]"
      />

      <div className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl flex-col justify-center px-5 py-24 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-300/70">
            open format
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="display mt-6 text-[clamp(3rem,13vw,9rem)] leading-[0.85] text-fg">
            <span className="bg-gradient-to-r from-cyan-300 via-fuchsia-400 to-amber-300 bg-clip-text text-transparent">
              DJ
            </span>{" "}
            SET
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-fg-muted sm:text-2xl">
            I mix and listen to everything — no genre lane, no set list I won&apos;t abandon
            two tracks in if the room wants something else.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-12 flex flex-wrap items-center gap-3">
            {social.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 px-5 py-3.5 font-mono text-sm text-fg transition-colors hover:border-cyan-300/60 hover:text-cyan-300"
              >
                {l.label} <span aria-hidden>↗</span>
              </a>
            ))}
            <a
              href={`mailto:${site.email}?subject=Booking`}
              className="inline-flex items-center gap-2 rounded-lg bg-fg px-5 py-3.5 font-mono text-sm text-ink transition-colors hover:bg-white"
            >
              book a set
            </a>
          </div>
        </Reveal>

        {social.length === 0 && (
          <Reveal delay={300}>
            {/* TODO: add SoundCloud + Instagram URLs in lib/site.ts and this note disappears. */}
            <p className="mt-8 font-mono text-xs text-fg-faint">
              [ mixes + dates going up here soon ]
            </p>
          </Reveal>
        )}

        <Reveal delay={360}>
          <Link
            href="/"
            className="group mt-20 inline-flex items-center gap-2 font-mono text-sm text-fg-faint transition-colors hover:text-fg"
          >
            <span aria-hidden className="inline-block transition-transform group-hover:-translate-x-1">
              ←
            </span>
            back to the engineering side
          </Link>
        </Reveal>
      </div>
    </>
  );
}
