import { Link } from "@tanstack/react-router";

export function BlackFridayBanner() {
  return (
    <div className="bf-banner relative w-full overflow-hidden border-b border-ink/10 bg-paper-2/80">
      <div className="relative z-10 mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-3 gap-y-1 px-4 py-2 text-center sm:gap-x-4">
        <img src="/favicon.png" alt="" className="h-4 w-4 rounded-[4px]" />
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-ink">
          Black Friday
        </span>
        <span className="text-[13px] font-medium text-ink">
          Audit Flash à <span className="font-extrabold">100&nbsp;€</span>{" "}
          <span className="text-ink-soft line-through">150&nbsp;€</span>
        </span>
        <span className="hidden text-[11px] text-ink-soft sm:inline">
          — uniquement le jour du Black Friday
        </span>
        <Link
          to="/reservation"
          search={{ service: "audit_flash" }}
          className="rounded-full bg-ink px-3 py-1 text-[11px] font-semibold text-paper transition-all hover:-translate-y-px hover:bg-ink/90"
        >
          J'en profite →
        </Link>
      </div>
    </div>
  );
}
