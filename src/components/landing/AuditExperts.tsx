import { useState, useMemo } from "react";
import type React from "react";
import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";

/* ---------------- SECTION 1 : Audit Google Ads ---------------- */

const AUDIT_BULLETS = [
  { icon: "🎯", text: "Analyse complète de votre structure de compte" },
  { icon: "💸", text: "Identification des dépenses inutiles" },
  { icon: "📈", text: "Recommandations actionnables immédiatement" },
  { icon: "🔍", text: "Revue des mots-clés, enchères et audiences" },
  { icon: "⏱", text: "Résultats livrés en 30 minutes chrono" },
];

// Seeded random based on current week — stable for entire week
function weeklyRandom(seed: number, min: number, max: number) {
  // mulberry32-ish deterministic hash
  let t = seed + 0x6d2b79f5;
  t = Math.imul(t ^ (t >>> 15), t | 1);
  t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
  const r = ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  return Math.floor(r * (max - min + 1)) + min;
}

function useWeeklyAvailability() {
  return useMemo(() => {
    const week = Math.floor(Date.now() / 604_800_000);
    return {
      taken: weeklyRandom(week, 5, 8),
      available: weeklyRandom(week + 1, 3, 6),
    };
  }, []);
}

export function AuditCard() {
  const { taken, available } = useWeeklyAvailability();

  return (
    <section id="audit" className="relative px-6 py-16 sm:py-20">
      <div className="relative mx-auto max-w-5xl">
        {/* halo animé */}
        <div
          aria-hidden
          className="pointer-events-none absolute -inset-6 -z-10 rounded-[2.5rem] blur-3xl opacity-70"
          style={{
            background:
              "conic-gradient(from 0deg, rgba(59,130,246,0.35), rgba(139,92,246,0.35), rgba(59,130,246,0.35))",
            animation: "audit-glow 9s ease-in-out infinite",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-[2.25rem] border border-white/40 bg-white/10 p-8 sm:p-12 backdrop-blur-2xl shadow-[0_30px_80px_-30px_rgba(59,130,246,0.45)]"
        >
          {/* top row : badges */}
          <div className="flex flex-wrap items-start justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/50 bg-white/40 px-4 py-1.5 backdrop-blur-xl shadow-[0_6px_18px_-8px_rgba(59,130,246,0.4)]">
              <span className="text-sm">✅</span>
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-[12px] font-bold uppercase tracking-wider text-transparent">
                Expert Certifié Google Ads
              </span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-orange-400 via-coral to-rose-500 px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-white shadow-[0_8px_22px_-8px_rgba(251,113,90,0.7)]">
              <span>⚡</span>
              <span>Places limitées</span>
            </div>
          </div>

          <h2 className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-700 bg-clip-text text-transparent">
              Audit Google Ads — 150€
            </span>
          </h2>

          <p className="mt-2 text-sm text-ink-soft/80">
            Prochaine disponibilité : cette semaine
          </p>

          <p className="mt-4 max-w-2xl text-lg text-ink-soft">
            Un regard expert sur vos campagnes. En 30 minutes, on identifie ce qui
            vous coûte de l'argent.
          </p>

          {/* Weekly availability counter */}
          <div className="mt-5 flex flex-col gap-1.5 text-[13px] text-ink-soft/90">
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-emerald-500"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              <span>
                <span className="font-semibold text-ink">{taken}</span> RDV pris cette semaine
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span
                aria-hidden
                className="inline-block h-2 w-2 rounded-full bg-emerald-500"
                style={{ animation: "pulse-dot 2s ease-in-out infinite", animationDelay: "0.6s" }}
              />
              <span>
                <span className="font-semibold text-ink">{available}</span> disponibles la semaine prochaine
              </span>
            </div>
          </div>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {AUDIT_BULLETS.map((b, i) => (
              <motion.li
                key={b.text}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + i * 0.07, duration: 0.5 }}
                className="flex items-start gap-3 rounded-2xl border border-white/40 bg-white/30 px-4 py-3 backdrop-blur-xl"
              >
                <span className="text-xl leading-none">{b.icon}</span>
                <span className="text-[15px] text-ink">{b.text}</span>
              </motion.li>
            ))}
          </ul>

          <div className="mt-10 flex justify-end">
            <Link
              to="/reservation"
              search={{ service: "audit_flash" }}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border border-white/60 bg-white/30 px-6 py-3 text-sm font-semibold text-ink backdrop-blur-xl shadow-[0_10px_30px_-12px_rgba(59,130,246,0.55)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/50 hover:shadow-[0_18px_40px_-12px_rgba(99,102,241,0.7)]"
            >
              <span
                aria-hidden
                className="absolute inset-0 -z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.25), rgba(139,92,246,0.25))",
                }}
              />
              <span>Réserver mon Audit</span>
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">→</span>
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Sticky mobile CTA */}
      <Link
        to="/reservation"
        search={{ service: "audit_flash" }}
        className="fixed inset-x-3 bottom-3 z-40 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-500 via-electric to-indigo-600 px-5 py-3.5 text-sm font-bold text-white shadow-[0_18px_40px_-12px_rgba(59,130,246,0.7)] backdrop-blur-md sm:hidden"
      >
        Réserver mon Audit — 150€
        <span>→</span>
      </Link>

      <style>{`
        @keyframes audit-glow {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.55; }
          50%      { transform: scale(1.06) rotate(180deg); opacity: 0.85; }
        }
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(16,185,129,0.5); }
          50%      { transform: scale(1.25); box-shadow: 0 0 0 6px rgba(16,185,129,0); }
        }
      `}</style>
    </section>
  );
}

/* ---------------- SECTION 2 : Équipe d'experts ---------------- */

export type Expert = {
  name: string;
  city: string;
  country: string;
  flag: string;
  gradient: string;
};

export const EXPERTS: Expert[] = [
  { name: "Illya",   city: "Bali",      country: "Indonésie", flag: "🇮🇩", gradient: "from-coral to-solar" },
  { name: "Camille", city: "Paris",     country: "France",    flag: "🇫🇷", gradient: "from-electric to-lilac" },
  { name: "Yuki",    city: "Tokyo",     country: "Japon",     flag: "🇯🇵", gradient: "from-lilac to-coral" },
  { name: "Thomas",  city: "Montréal",  country: "Canada",    flag: "🇨🇦", gradient: "from-sky to-electric" },
  { name: "Miguel",  city: "Lisbonne",  country: "Portugal",  flag: "🇵🇹", gradient: "from-solar to-coral" },
  { name: "Chloé",   city: "Sydney",    country: "Australie", flag: "🇦🇺", gradient: "from-mint to-sky" },
];

export function ExpertLineBubble({ e, size = 60, hoverSize = 100, showFlag = false }: { e: Expert; size?: number; hoverSize?: number; showFlag?: boolean }) {
  const [hover, setHover] = useState(false);
  const initials = e.name.slice(0, 2).toUpperCase();
  return (
    <div
      className="relative shrink-0"
      style={{ width: hoverSize, height: hoverSize, display: "grid", placeItems: "center" }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`relative grid place-items-center rounded-full border border-white/60 bg-gradient-to-br ${e.gradient} text-white font-display font-bold shadow-[0_12px_30px_-10px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out cursor-pointer`}
        style={{ width: hover ? hoverSize : size, height: hover ? hoverSize : size, fontSize: hover ? Math.round(hoverSize * 0.22) : Math.round(size * 0.24) }}
      >
        {initials}
        {hover && (
          <div className="absolute inset-x-0 -bottom-2 translate-y-full rounded-2xl border border-white/50 bg-white/80 px-3 py-2 text-center backdrop-blur-xl shadow-lg animate-fade-in z-10">
            <div className="text-sm font-bold text-ink whitespace-nowrap">{e.name}</div>
            <div className="text-[11px] text-ink-soft whitespace-nowrap">
              {e.city}{showFlag ? ` ${e.flag}` : `, ${e.country} ${e.flag}`}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export function ExpertsTeam() {
  return (
    <section className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 md:items-center">
        {/* LEFT — horizontal line of bubbles + center link */}
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {EXPERTS.map((e) => (
              <ExpertLineBubble key={e.name} e={e} />
            ))}
          </div>

          <Link
            to="/notre-equipe"
            className="group inline-flex items-center gap-1.5 text-sm font-semibold"
          >
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Découvrir notre équipe
            </span>
            <span className="text-blue-600 transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>

        {/* RIGHT — text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.5rem)] font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-[color:var(--electric)] via-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">
              Pourquoi des freelances ?
            </span>
          </h2>

          <div className="mt-5 space-y-4 text-[15.5px] leading-relaxed text-ink-soft">
            <p>
              Nos experts sont soigneusement sélectionnés pour leur certification
              Google Ads et leur spécialisation sectorielle.
            </p>
            <p>
              Suite à votre rendez-vous, un expert dédié vous sera attribué.
            </p>
            <p>
              Vous découvrirez son profil complet, son parcours et ses spécialités
              directement après confirmation de votre RDV.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 3 : Social media ---------------- */

const SM_EMAIL = "kenshodigitalstudio@gmail.com";
const SM_SUBJECT = encodeURIComponent("Demande de devis – Gestion des réseaux sociaux");
const SM_BODY = encodeURIComponent(
  "Bonjour Kenshō Studio,\n\nJe souhaite un devis pour la gestion de mes réseaux sociaux.\n\nEntreprise :\nRéseaux concernés :\nObjectifs :\n\nMerci !",
);

type Bubble = { name: string; slug: string; bg: string; fg: string; size: number; top: string; left: string; dur: number; delay: number; dx: number; dy: number; mobile?: boolean };

const BUBBLES: Bubble[] = [
  { name: "Instagram", slug: "instagram", bg: "linear-gradient(135deg,#feda75,#fa7e1e 30%,#d62976 60%,#962fbf 85%,#4f5bd5)", fg: "ffffff", size: 96, top: "8%",  left: "14%", dur: 9,  delay: 0,   dx: 10, dy: 16, mobile: true },
  { name: "TikTok",    slug: "tiktok",    bg: "#111111", fg: "ffffff", size: 80, top: "4%",  left: "58%", dur: 11, delay: 1.2, dx: -12, dy: 14, mobile: true },
  { name: "Facebook",  slug: "facebook",  bg: "#1877F2", fg: "ffffff", size: 70, top: "38%", left: "78%", dur: 10, delay: 0.6, dx: 8,  dy: 18 },
  { name: "LinkedIn",  slug: "linkedin",  bg: "#0A66C2", fg: "ffffff", size: 84, top: "42%", left: "36%", dur: 12, delay: 2,   dx: -10, dy: 12, mobile: true },
  { name: "YouTube",   slug: "youtube",   bg: "#FF0000", fg: "ffffff", size: 74, top: "70%", left: "8%",  dur: 10.5, delay: 0.3, dx: 12, dy: 15, mobile: true },
  { name: "Pinterest", slug: "pinterest", bg: "#E60023", fg: "ffffff", size: 60, top: "76%", left: "62%", dur: 9.5, delay: 1.6, dx: -8, dy: 13 },
  { name: "X",         slug: "x",         bg: "#000000", fg: "ffffff", size: 56, top: "28%", left: "4%",  dur: 13, delay: 2.4, dx: 9,  dy: 11 },
  { name: "Snapchat",  slug: "snapchat",  bg: "#FFFC00", fg: "000000", size: 66, top: "14%", left: "84%", dur: 11.5, delay: 0.9, dx: -11, dy: 16, mobile: true },
];

const DOTS = [
  { size: 14, top: "60%", left: "30%", c: "#d62976", dur: 14, delay: 0 },
  { size: 10, top: "22%", left: "44%", c: "#1877F2", dur: 12, delay: 1 },
  { size: 18, top: "88%", left: "40%", c: "#FFFC00", dur: 15, delay: 2 },
  { size: 8,  top: "52%", left: "92%", c: "#0A66C2", dur: 11, delay: 0.5 },
  { size: 12, top: "2%",  left: "34%", c: "#FF0000", dur: 13, delay: 1.5 },
];

export function SocialTeaser() {
  return (
    <section id="reseaux-sociaux" className="relative px-6 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-ink-soft">
            Kenshō Studio · Social Media Management
          </span>
          <h2 className="mt-4 font-display text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em] text-ink">
            Et si on faisait{" "}
            <span className="relative inline-block">
              <span className="relative z-10">rayonner</span>
              <span aria-hidden className="absolute inset-x-0 bottom-1 -z-0 h-3 rounded-full bg-solar/50" />
            </span>{" "}
            votre marque sur les{" "}
            <span className="bg-gradient-to-r from-[color:var(--electric)] via-[color:var(--lilac)] to-[color:var(--coral)] bg-clip-text text-transparent">
              réseaux sociaux
            </span>{" "}
            ?
          </h2>
          <p className="mt-6 max-w-lg text-[15.5px] leading-relaxed text-ink-soft">
            Nous accompagnons les marques et les entreprises dans leur stratégie social media :
            création de contenu, gestion quotidienne, développement de leur communauté et
            optimisation de leur présence en ligne. Vous vous concentrez sur votre activité,
            nous faisons grandir votre visibilité.
          </p>
          <a
            href={`mailto:${SM_EMAIL}?subject=${SM_SUBJECT}&body=${SM_BODY}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-semibold text-background shadow-[0_12px_30px_-12px_rgba(0,0,0,0.5)] transition-all hover:-translate-y-0.5 hover:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.55)]"
          >
            Demander un devis <span>→</span>
          </a>
          <div className="mt-4">
            <a
              href={`mailto:${SM_EMAIL}?subject=${SM_SUBJECT}`}
              className="text-sm text-ink-soft underline-offset-4 transition hover:text-ink hover:underline"
            >
              Vous avez une question ? Écrivez-nous par e-mail →
            </a>
          </div>
        </motion.div>

        <div className="relative h-[340px] sm:h-[460px]" aria-hidden>
          {DOTS.map((d, i) => (
            <span
              key={i}
              className="sm-float absolute rounded-full opacity-40"
              style={{ width: d.size, height: d.size, top: d.top, left: d.left, background: d.c, animationDuration: `${d.dur}s`, animationDelay: `${d.delay}s`, ["--dx" as string]: "6px", ["--dy" as string]: "10px" } as React.CSSProperties}
            />
          ))}
          {BUBBLES.map((b) => (
            <div
              key={b.name}
              className={`sm-float absolute ${b.mobile ? "" : "hidden sm:block"}`}
              style={{ top: b.top, left: b.left, animationDuration: `${b.dur}s`, animationDelay: `-${b.delay}s`, ["--dx" as string]: `${b.dx}px`, ["--dy" as string]: `${b.dy}px` } as React.CSSProperties}
            >
              <div
                title={b.name}
                className="sm-bubble grid place-items-center rounded-full"
                style={{ width: `calc(${b.size}px * var(--sm-scale))`, height: `calc(${b.size}px * var(--sm-scale))`, background: b.bg }}
              >
                <img
                  src={`https://cdn.simpleicons.org/${b.slug}/${b.fg}`}
                  alt={b.name}
                  loading="lazy"
                  style={{ width: "42%", height: "42%" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        #reseaux-sociaux { --sm-scale: 0.75; }
        @media (min-width: 640px) { #reseaux-sociaux { --sm-scale: 1; } }
        @keyframes sm-drift {
          0%   { transform: translate(0, 0); }
          25%  { transform: translate(var(--dx), calc(var(--dy) * -1)); }
          50%  { transform: translate(calc(var(--dx) * 0.4), var(--dy)); }
          75%  { transform: translate(calc(var(--dx) * -1), calc(var(--dy) * -0.4)); }
          100% { transform: translate(0, 0); }
        }
        .sm-float { animation: sm-drift ease-in-out infinite; will-change: transform; }
        .sm-bubble {
          box-shadow: inset 0 2px 6px rgba(255,255,255,0.35), 0 14px 30px -12px rgba(0,0,0,0.35);
          transition: transform .4s cubic-bezier(.22,1,.36,1), box-shadow .4s;
        }
        .sm-bubble:hover { transform: scale(1.1) rotate(-6deg); box-shadow: inset 0 2px 6px rgba(255,255,255,0.35), 0 22px 40px -12px rgba(0,0,0,0.45); }
        @media (prefers-reduced-motion: reduce) { .sm-float { animation: none; } }
      `}</style>
    </section>
  );
}
