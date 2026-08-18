import { site } from "@/lib/site";

const social = [
  { label: "GitHub", url: site.links.github },
  { label: "LinkedIn", url: site.links.linkedin },
  { label: "SoundCloud", url: site.links.soundcloud },
  { label: "Instagram", url: site.links.instagram },
].filter((l) => l.url);

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-line-soft bg-ink/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p className="font-mono text-xs text-fg-faint">
          © {new Date().getFullYear()} {site.name} — built with Next.js
        </p>
        <div className="flex flex-wrap gap-x-6 gap-y-2">
          {social.map((l) => (
            <a
              key={l.label}
              href={l.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-xs text-fg-muted transition-colors hover:text-signal"
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
