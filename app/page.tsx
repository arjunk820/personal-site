import Image from "next/image";
import Link from "next/link";
import GridBackground from "@/components/GridBackground";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ExperienceCard from "@/components/ExperienceCard";
import CopyEmail from "@/components/CopyEmail";
import { projects } from "@/lib/projects";
import { experiences } from "@/lib/experience";
import { site, stack, education } from "@/lib/site";

const ghostLink =
  "inline-flex items-center gap-2 rounded-lg border border-line px-5 py-3.5 font-mono text-sm text-fg-muted transition-colors hover:border-signal/60 hover:text-signal";

export default function Home() {
  return (
    <>
      <GridBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        {/* ── Hero ─────────────────────────────────────────────── */}
        <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
          <div className="grid items-center gap-14 md:grid-cols-[1fr_auto]">
            <div>
              <Reveal>
                <h1 className="display text-[clamp(2.75rem,8vw,5.25rem)] leading-[0.95] text-fg">
                  {site.name}
                </h1>
              </Reveal>

              <Reveal delay={60}>
                <p className="mt-5 font-mono text-sm text-fg-faint">
                  {site.role} · AI Infrastructure · {site.location}
                </p>
              </Reveal>

              <Reveal delay={120}>
                <p className="mt-8 max-w-2xl text-2xl leading-snug text-fg sm:text-3xl">
                  {site.tagline}
                </p>
              </Reveal>

              <Reveal delay={180}>
                <div className="mt-10 flex flex-wrap items-center gap-3">
                  <CopyEmail />
                  {site.links.resume && (
                    <a
                      href={site.links.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={ghostLink}
                    >
                      résumé <span aria-hidden>↗</span>
                    </a>
                  )}
                  <a
                    href={site.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ghostLink}
                  >
                    github <span aria-hidden>↗</span>
                  </a>
                  <a
                    href={site.links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={ghostLink}
                  >
                    linkedin <span aria-hidden>↗</span>
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={140} className="order-first md:order-last">
              <div className="relative mx-auto w-40 sm:w-48 md:w-56">
                <div className="absolute -inset-5 rounded-full bg-signal/20 blur-3xl" />
                <Image
                  src="/images/arjun.png"
                  alt={site.name}
                  width={224}
                  height={224}
                  priority
                  className="relative w-full rounded-2xl border border-line bg-ink-soft"
                  style={{ imageRendering: "pixelated" }}
                />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Work ─────────────────────────────────────────────── */}
        <section id="work" className="py-24">
          <SectionHeading
            eyebrow="01 / selected work"
            title="Things I've shipped"
            description="Hackathon wins, side projects that found real users, and internal tools that stuck around."
          />
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((p, i) => (
              <Reveal
                key={p.id}
                delay={i * 70}
                className={p.featured ? "md:col-span-2" : ""}
              >
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────────── */}
        <section id="experience" className="py-24">
          <SectionHeading
            eyebrow="02 / experience"
            title="Where I've worked"
            description="Payments, healthcare claims, manufacturing compliance, API security"
          />
          <div>
            {experiences.map((exp, i) => (
              <Reveal key={`${exp.company}-${i}`} delay={i * 60}>
                <ExperienceCard {...exp} />
              </Reveal>
            ))}

            <Reveal>
              <div className="grid gap-x-10 gap-y-2 border-t border-line-soft py-9 md:grid-cols-[10rem_1fr]">
                <p className="label whitespace-nowrap">{education.period}</p>
                <div>
                  <h3 className="display text-xl text-fg">{education.school}</h3>
                  <p className="mt-1 text-[15px] text-fg-muted">{education.degree}</p>
                  <p className="mt-1 font-mono text-xs text-fg-faint">{education.location}</p>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── Stack ────────────────────────────────────────────── */}
        <section id="stack" className="py-24">
          <SectionHeading eyebrow="03 / toolkit" title="What I reach for" />
          <div className="grid gap-px overflow-hidden rounded-xl border border-line bg-line sm:grid-cols-2">
            {stack.map((group, i) => (
              <Reveal key={group.group} delay={i * 60} className="bg-ink-soft">
                <div className="h-full p-7">
                  <h3 className="label text-signal">{group.group}</h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded border border-line-soft bg-ink-raised px-2.5 py-1 font-mono text-[12px] text-fg-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── DJ teaser ────────────────────────────────────────── */}
        <section className="py-24">
          <Reveal>
            <Link
              href="/dj"
              className="group relative flex flex-col justify-between gap-6 overflow-hidden rounded-xl border border-line bg-ink-soft p-9 transition-colors hover:border-fg-faint sm:flex-row sm:items-center"
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 bg-[linear-gradient(110deg,transparent_35%,rgba(255,0,255,0.10)_50%,rgba(0,255,255,0.10)_65%,transparent_80%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              />
              <div className="relative">
                <p className="label">04 / off the clock</p>
                <h2 className="display mt-3 text-3xl text-fg sm:text-4xl">I also DJ.</h2>
                <p className="mt-3 max-w-xl text-fg-muted">
                  Open-format — I&apos;ll play anything if the room earns it.
                </p>
              </div>
              <span className="relative shrink-0 font-mono text-sm text-fg-muted transition-colors group-hover:text-fg">
                enter dj mode{" "}
                <span aria-hidden className="inline-block transition-transform group-hover:translate-x-1">
                  →
                </span>
              </span>
            </Link>
          </Reveal>
        </section>

        {/* ── Contact ──────────────────────────────────────────── */}
        <section id="contact" className="py-24">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-6 bg-signal/60" />
              <span className="label text-signal">05 / contact</span>
            </div>
            <h2 className="display mt-4 max-w-3xl text-4xl leading-tight text-fg sm:text-6xl">
              Building something?
            </h2>
            <p className="mt-6 max-w-2xl text-lg text-fg-muted">
              I&apos;d like to hear about it. Fastest way to reach me is email.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <CopyEmail />
              <a
                href={site.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className={ghostLink}
              >
                linkedin <span aria-hidden>↗</span>
              </a>
            </div>
          </Reveal>
        </section>
      </div>
    </>
  );
}
