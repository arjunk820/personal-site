import { Project } from "@/lib/projects";
import DraftBadge from "./DraftBadge";

export default function ProjectCard({ project }: { project: Project }) {
  const { title, tagline, description, techStack, period, award, featured, links, draft } = project;

  return (
    <article
      className={`group relative flex flex-col rounded-xl border border-line bg-ink-soft/70 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-signal/40 ${
        featured ? "md:col-span-2 md:p-9" : ""
      }`}
    >
      {/* Amber wash that blooms in on hover. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-xl bg-gradient-to-br from-signal/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />

      <div className="relative flex flex-1 flex-col">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          {award && (
            <span className="inline-flex items-center gap-2 rounded-full border border-signal/40 bg-signal/10 px-3 py-1 font-mono text-[11px] tracking-tight text-signal">
              ★ {award}
            </span>
          )}
          {period && <span className="label">{period}</span>}
          {draft && <DraftBadge />}
        </div>

        <h3 className={`display mt-5 text-fg ${featured ? "text-3xl sm:text-4xl" : "text-2xl"}`}>
          {title}
        </h3>
        <p className="mt-1.5 font-mono text-sm text-signal/90">{tagline}</p>

        <p
          className={`mt-4 leading-relaxed text-fg-muted ${
            featured ? "max-w-3xl text-[17px]" : "text-[15px]"
          }`}
        >
          {description}
        </p>

        {techStack.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="rounded border border-line-soft bg-ink-raised px-2.5 py-1 font-mono text-[11px] text-fg-muted"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {links && links.length > 0 && (
          <div className="mt-auto flex flex-wrap gap-x-6 gap-y-2 pt-7">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group/link inline-flex items-center gap-1.5 font-mono text-sm text-fg transition-colors hover:text-signal"
              >
                {l.label}
                <span aria-hidden className="transition-transform group-hover/link:translate-x-1">
                  →
                </span>
              </a>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
