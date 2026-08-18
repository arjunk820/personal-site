import { Experience } from "@/lib/experience";
import DraftBadge from "./DraftBadge";

export default function ExperienceCard({
  company,
  role,
  period,
  location,
  context,
  description,
  tags,
  draft,
}: Experience) {
  return (
    <article className="group relative grid gap-x-10 gap-y-4 border-t border-line-soft py-9 md:grid-cols-[10rem_1fr]">
      {/* Period rail — reads as a timeline on desktop, an eyebrow on mobile. */}
      <div className="md:pt-1">
        <p className="label whitespace-nowrap transition-colors group-hover:text-signal">{period}</p>
        {location && <p className="mt-1.5 font-mono text-xs text-fg-faint">{location}</p>}
      </div>

      <div>
        <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
          <h3 className="display text-2xl text-fg">{role}</h3>
          {draft && <DraftBadge />}
        </div>
        <p className="mt-1 font-mono text-sm text-signal">{company}</p>
        {context && <p className="mt-3 text-sm italic text-fg-faint">{context}</p>}

        <ul className="mt-5 space-y-3">
          {description.map((item, i) => (
            <li key={i} className="flex gap-3 text-[15px] leading-relaxed text-fg-muted">
              <span aria-hidden className="mt-2.5 h-px w-3 shrink-0 bg-line" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {tags && tags.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {tags.map((t) => (
              <span
                key={t}
                className="rounded border border-line-soft px-2 py-1 font-mono text-[11px] text-fg-faint"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}
