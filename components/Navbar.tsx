"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const sections = [
  { href: "/#work", label: "work" },
  { href: "/#experience", label: "experience" },
  { href: "/#stack", label: "stack" },
  { href: "/#contact", label: "contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const onDJ = pathname.startsWith("/dj");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? "border-b border-line-soft bg-ink/80 backdrop-blur-xl" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="group flex items-center gap-2.5 font-mono text-sm text-fg">
          <span className="h-1.5 w-1.5 rounded-full bg-signal transition-transform group-hover:scale-150" />
          <span className="tracking-tight">{site.name.toLowerCase().replace(" ", "_")}</span>
        </Link>

        <div className="flex items-center gap-1 sm:gap-2">
          {!onDJ && (
            <ul className="hidden items-center gap-1 md:flex">
              {sections.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="rounded px-3 py-2 font-mono text-[13px] text-fg-muted transition-colors hover:text-fg"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          )}

          <Link
            href={onDJ ? "/" : "/dj"}
            className="ml-1 rounded-lg border border-line px-3.5 py-2 font-mono text-[13px] text-fg-muted transition-colors hover:border-signal/60 hover:text-signal"
          >
            {onDJ ? "← engineer" : "dj mode →"}
          </Link>
        </div>
      </nav>
    </header>
  );
}
