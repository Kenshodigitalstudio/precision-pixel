import { useState, FormEvent, useMemo } from "react";
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

/* ---------------- SECTION 3 : Social media teaser ---------------- */

const SOCIALS = [
  { name: "Instagram", url: "https://cdn.simpleicons.org/instagram/E1306C" },
  { name: "TikTok",    url: "https://cdn.simpleicons.org/tiktok/000000" },
  { name: "Facebook",  url: "https://cdn.simpleicons.org/facebook/1877F2" },
  { name: "LinkedIn",  url: "https://cdn.simpleicons.org/linkedin/0A66C2" },
  { name: "Pinterest", url: "https://cdn.simpleicons.org/pinterest/E60023" },
  { name: "Snapchat",  url: "https://cdn.simpleicons.org/snapchat/FFFC00" },
  { name: "Google",    url: "https://cdn.simpleicons.org/google/4285F4" },
];

export function SocialTeaser() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email) return;
    console.log("social media inquiry:", email);
    setSent(true);
    setEmail("");
    setTimeout(() => setSent(false), 4500);
  };

  return (
    <section className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold leading-tight tracking-tight">
          <span className="bg-gradient-to-r from-blue-500 via-sky-500 to-indigo-600 bg-clip-text text-transparent">
            Besoin de gérer vos réseaux sociaux ?
          </span>
        </h2>

        {/* social bubble strip with real brand logos */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {SOCIALS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.15 }}
              className="grid h-12 w-12 place-items-center rounded-full border border-white/60 bg-white/50 backdrop-blur-xl shadow-[0_8px_18px_-8px_rgba(0,0,0,0.2)] cursor-default"
              title={s.name}
            >
              <img src={s.url} alt={s.name} width={22} height={22} loading="lazy" />
            </motion.div>
          ))}
        </div>

        {/* email capture bubble */}
        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mx-auto mt-12 w-full max-w-[500px] rounded-[2rem] border border-white/50 bg-white/20 p-6 sm:p-7 backdrop-blur-2xl shadow-[0_20px_60px_-20px_rgba(59,130,246,0.4)]"
        >
          <p className="text-sm font-medium text-ink">
            Une demande spécifique ? Écrivez-nous.
          </p>
          <div className="mt-4 flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              className="flex-1 rounded-full border border-white/60 bg-white/30 px-5 py-2.5 text-sm text-ink placeholder:text-ink-soft/70 backdrop-blur-xl outline-none focus:border-blue-400/70 focus:bg-white/50 transition"
            />
            <button
              type="submit"
              className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_-10px_rgba(59,130,246,0.7)] transition-all hover:-translate-y-0.5 hover:shadow-[0_14px_30px_-10px_rgba(99,102,241,0.8)]"
            >
              Envoyer
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </button>
          </div>
          {sent && (
            <p className="mt-4 text-sm font-medium text-emerald-600 animate-fade-in">
              ✅ Message reçu, on revient vers vous rapidement !
            </p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
