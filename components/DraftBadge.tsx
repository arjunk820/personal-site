/**
 * Deliberately loud. Marks an entry whose copy is still a placeholder so it
 * cannot be deployed without someone noticing.
 */
export default function DraftBadge() {
  return (
    <span className="inline-flex items-center gap-1.5 rounded border border-signal/50 bg-signal/10 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-signal">
      <span className="h-1.5 w-1.5 animate-blink rounded-full bg-signal" />
      Needs content
    </span>
  );
}
