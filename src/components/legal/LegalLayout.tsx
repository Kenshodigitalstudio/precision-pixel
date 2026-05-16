import { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles } from "@/components/landing/Sparkles";
import { Footer } from "@/components/landing/Footer";

export function LegalLayout({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute -top-32 -left-32 h-[480px] w-[480px] rounded-full bg-electric/30 blur-3xl" />
      <div className="pointer-events-none absolute -top-20 right-0 h-[420px] w-[420px] rounded-full bg-solar/40 blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 -left-20 h-[420px] w-[420px] rounded-full bg-mint/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-[460px] w-[460px] rounded-full bg-sky/30 blur-3xl" />
      <Sparkles variant="dense" />

      <main className="relative z-10 mx-auto max-w-3xl px-6 py-20 sm:py-28">
        <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm text-ink-soft hover:text-ink">
          ← Retour à l'accueil
        </Link>
        <h1 className="font-display text-4xl font-bold tracking-tight text-ink sm:text-5xl">
          {title}
        </h1>
        <div className="prose prose-neutral mt-10 max-w-none rounded-3xl border border-border/60 bg-card/80 p-8 shadow-soft backdrop-blur-sm sm:p-12 [&_h2]:font-display [&_h2]:text-2xl [&_h2]:font-semibold [&_h2]:text-ink [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:font-display [&_h3]:text-lg [&_h3]:font-semibold [&_h3]:text-ink [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:text-ink-soft [&_p]:leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_ul]:text-ink-soft [&_ul]:mb-4 [&_li]:mb-1 [&_strong]:text-ink [&_a]:text-electric [&_a]:underline">
          {children}
        </div>
        <p className="mt-8 text-xs text-ink-soft">
          Kenshō Digital Studio — Illya Brasseur — SIRET : 991 786 427 00011<br />
          kenshodigitalstudio@gmail.com — Mis à jour le 15 mai 2026
        </p>
      </main>

      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export function RefundBox({ children }: { children: ReactNode }) {
  return (
    <div className="my-6 rounded-r-xl border-l-4 border-red-600 bg-red-50 p-5 text-red-900">
      <p className="m-0 font-bold leading-relaxed">{children}</p>
    </div>
  );
}
