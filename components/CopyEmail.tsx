"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

interface CopyEmailProps {
  /** "solid" for the primary CTA, "ghost" for secondary placements. */
  variant?: "solid" | "ghost";
  className?: string;
}

export default function CopyEmail({ variant = "solid", className = "" }: CopyEmailProps) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!copied) return;
    const t = setTimeout(() => setCopied(false), 2000);
    return () => clearTimeout(t);
  }, [copied]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email);
      setCopied(true);
    } catch {
      // Clipboard can be blocked by permissions or a non-secure origin —
      // fall back to the mail client so the button is never a dead end.
      window.location.href = `mailto:${site.email}`;
    }
  };

  const base =
    "group inline-flex items-center gap-3 rounded-lg px-6 py-3.5 font-mono text-sm transition-colors";
  const styles =
    variant === "solid"
      ? "bg-signal text-ink hover:bg-signal-soft"
      : "border border-line text-fg hover:border-signal/60 hover:text-signal";

  return (
    <button onClick={copy} className={`${base} ${styles} ${className}`}>
      <span>{copied ? "copied to clipboard" : site.email}</span>
      <span aria-hidden className="opacity-60 transition-transform group-hover:translate-x-0.5">
        {copied ? "✓" : "⧉"}
      </span>
      <span className="sr-only" role="status">
        {copied ? "Email copied to clipboard" : ""}
      </span>
    </button>
  );
}
