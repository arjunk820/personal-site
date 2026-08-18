import Reveal from "./Reveal";

interface SectionHeadingProps {
  /** Monospace eyebrow, e.g. "02 / experience". */
  eyebrow: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <div className="flex items-center gap-3">
        <span className="h-px w-6 bg-signal/60" />
        <span className="label text-signal">{eyebrow}</span>
      </div>
      <h2 className="display mt-4 text-4xl text-fg sm:text-5xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-fg-muted">{description}</p>
      )}
    </Reveal>
  );
}
