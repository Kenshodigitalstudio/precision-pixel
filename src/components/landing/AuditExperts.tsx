import { useState, FormEvent } from "react";
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

export function AuditCard() {
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
          style={{ WebkitBackdropFilter: undefined as never }}
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
      `}</style>
    </section>
  );
}

/* ---------------- SECTION 2 : Équipe d'experts ---------------- */

type Expert = {
  name: string;
  city: string;
  country: string;
  flag: string;
  gradient: string;
  pos: { top: string; left: string };
  delay: number;
};

const EXPERTS: Expert[] = [
  { name: "Illya",   city: "Bali",      country: "Indonésie",     flag: "🇮🇩", gradient: "from-coral to-solar",    pos: { top: "6%",  left: "14%" }, delay: 0 },
  { name: "Camille", city: "Paris",     country: "France",        flag: "🇫🇷", gradient: "from-electric to-lilac", pos: { top: "10%", left: "52%" }, delay: 0.3 },
  { name: "Liam",    city: "Londres",   country: "Royaume-Uni",   flag: "🇬🇧", gradient: "from-sky to-mint",       pos: { top: "18%", left: "78%" }, delay: 0.6 },
  { name: "Yuki",    city: "Tokyo",     country: "Japon",         flag: "🇯🇵", gradient: "from-lilac to-coral",    pos: { top: "32%", left: "6%"  }, delay: 0.9 },
  { name: "Sofia",   city: "Madrid",    country: "Espagne",       flag: "🇪🇸", gradient: "from-coral to-lilac",    pos: { top: "36%", left: "38%" }, delay: 1.2 },
  { name: "Thomas",  city: "Montréal",  country: "Canada",        flag: "🇨🇦", gradient: "from-sky to-electric",   pos: { top: "42%", left: "68%" }, delay: 1.5 },
  { name: "Noah",    city: "Berlin",    country: "Allemagne",     flag: "🇩🇪", gradient: "from-electric to-sky",   pos: { top: "58%", left: "18%" }, delay: 1.8 },
  { name: "Aïcha",   city: "Marrakech", country: "Maroc",         flag: "🇲🇦", gradient: "from-solar to-mint",     pos: { top: "62%", left: "50%" }, delay: 2.1 },
  { name: "Miguel",  city: "Lisbonne",  country: "Portugal",      flag: "🇵🇹", gradient: "from-solar to-coral",    pos: { top: "70%", left: "78%" }, delay: 2.4 },
  { name: "Chloé",   city: "Sydney",    country: "Australie",     flag: "🇦🇺", gradient: "from-mint to-sky",       pos: { top: "80%", left: "30%" }, delay: 2.7 },
];

function ExpertBubble({ e }: { e: Expert }) {
  const [hover, setHover] = useState(false);
  const initials = e.name.slice(0, 2).toUpperCase();
  return (
    <div
      className="absolute"
      style={{ top: e.pos.top, left: e.pos.left, animation: `float-y 6s ease-in-out ${e.delay}s infinite` }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`relative grid place-items-center rounded-full border border-white/60 bg-gradient-to-br ${e.gradient} text-white font-display font-bold shadow-[0_12px_30px_-10px_rgba(0,0,0,0.35)] transition-all duration-500 ease-out cursor-pointer`}
        style={{ width: hover ? 120 : 60, height: hover ? 120 : 60, fontSize: hover ? 22 : 14 }}
      >
        {initials}
        {hover && (
          <div className="absolute inset-x-0 -bottom-2 translate-y-full rounded-2xl border border-white/50 bg-white/70 px-3 py-2 text-center backdrop-blur-xl shadow-lg animate-fade-in z-10">
            <div className="text-sm font-bold text-ink whitespace-nowrap">{e.name}</div>
            <div className="text-[11px] text-ink-soft whitespace-nowrap">
              {e.city}, {e.country} {e.flag}
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
      <div className="mx-auto grid max-w-6xl gap-12 md:grid-cols-2 md:items-center">
        {/* LEFT — bubbles */}
        <div className="relative h-[520px] sm:h-[560px] rounded-[2rem] border border-white/40 bg-white/20 backdrop-blur-xl overflow-hidden">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div className="absolute left-1/3 top-1/4 h-40 w-40 rounded-full bg-electric/20 blur-3xl" />
            <div className="absolute right-1/4 bottom-1/4 h-44 w-44 rounded-full bg-coral/20 blur-3xl" />
          </div>
          {EXPERTS.map((e) => (
            <ExpertBubble key={e.name} e={e} />
          ))}
          {/* generic "..." */}
          <div
            className="absolute"
            style={{ top: "30%", left: "82%", animation: "float-y 7s ease-in-out 1s infinite" }}
          >
            <div className="grid h-[60px] w-[60px] place-items-center rounded-full border border-white/60 bg-white/50 text-ink-soft font-bold backdrop-blur-xl shadow-md">
              …
            </div>
          </div>
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
              Nous collaborons exclusivement avec des{" "}
              <span className="font-semibold text-ink">experts indépendants certifiés</span>,
              pas avec des juniors d'agence.
            </p>
            <p>
              Chaque expert est certifié Google Ads et spécialisé dans un domaine précis :
              e-commerce, B2B, lead-gen, local, SaaS…
            </p>
            <p>
              Après l'audit ou le rendez-vous découverte, un expert dédié est assigné à
              votre compte selon votre secteur d'activité.
            </p>
            <p>
              Vous travaillez toujours avec la bonne personne — un spécialiste, jamais un
              généraliste.
            </p>
          </div>

          <p className="mt-6 rounded-2xl border border-white/40 bg-white/30 px-5 py-4 text-[14px] font-medium text-ink backdrop-blur-xl">
            Suite à votre rendez-vous, un expert dédié vous sera attribué selon votre secteur.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

/* ---------------- SECTION 3 : Social media teaser ---------------- */

const SOCIALS = [
  { name: "Instagram", emoji: "📸", color: "rgba(225,48,108,0.5)" },
  { name: "TikTok",    emoji: "🎵", color: "rgba(0,0,0,0.5)" },
  { name: "Facebook",  emoji: "📘", color: "rgba(24,119,242,0.5)" },
  { name: "LinkedIn",  emoji: "💼", color: "rgba(10,102,194,0.5)" },
  { name: "YouTube",   emoji: "▶️", color: "rgba(255,0,0,0.5)" },
  { name: "X",         emoji: "✖️", color: "rgba(0,0,0,0.5)" },
  { name: "Pinterest", emoji: "📌", color: "rgba(230,0,35,0.5)" },
  { name: "Snapchat",  emoji: "👻", color: "rgba(255,252,0,0.6)" },
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

        {/* social bubble strip */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {SOCIALS.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.15, boxShadow: `0 0 24px ${s.color}` }}
              className="grid h-11 w-11 sm:h-12 sm:w-12 place-items-center rounded-full border border-white/60 bg-white/40 text-lg backdrop-blur-xl shadow-[0_8px_18px_-8px_rgba(0,0,0,0.2)] cursor-default"
              title={s.name}
            >
              <span aria-label={s.name}>{s.emoji}</span>
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
