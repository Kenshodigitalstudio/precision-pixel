import { useState, type FormEvent } from "react";
import { toast } from "sonner";
import { useReveal } from "@/hooks/use-reveal";

const budgets = [
  "< 5 000 € / mois",
  "5 000 – 20 000 € / mois",
  "20 000 – 100 000 € / mois",
  "> 100 000 € / mois",
];

function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  const [v, setV] = useState("");
  return (
    <div className="relative">
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={v}
        onChange={(e) => setV(e.target.value)}
        placeholder=" "
        className="peer w-full border-b border-border bg-transparent py-3.5 text-[15px] text-ink outline-none transition-colors focus:border-electric"
      />
      <label
        htmlFor={id}
        className={[
          "pointer-events-none absolute left-0 top-3.5 origin-left text-[15px] text-ink-soft transition-all",
          "peer-focus:-translate-y-5 peer-focus:scale-90 peer-focus:text-electric",
          v ? "-translate-y-5 scale-90 text-ink-soft" : "",
        ].join(" ")}
      >
        {label}
      </label>
    </div>
  );
}

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      (e.currentTarget as HTMLFormElement).reset();
      toast.success("Demande envoyée", {
        description: "Nous revenons vers vous sous 24h ouvrées.",
      });
    }, 900);
  };

  return (
    <section id="contact" className="relative py-32 sm:py-40">
      <div ref={ref} className="reveal mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
            05 — Contact
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.4vw,3.75rem)] font-semibold leading-[1.05] tracking-[-0.03em]">
            Parlons performance.
          </h2>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink-soft">
            30 minutes pour cadrer votre acquisition&nbsp;: structure du compte, état du tracking,
            potentiel de ROAS. Sans détour, sans discours commercial.
          </p>

          <dl className="mt-12 space-y-5 text-sm">
            {[
              ["Réponse", "Sous 24h ouvrées"],
              ["Format", "Visio 30 min, en français"],
              ["Engagement", "Aucun — c'est offert"],
            ].map(([k, v]) => (
              <div key={k} className="flex justify-between border-b border-border/60 pb-3">
                <dt className="text-ink-soft">{k}</dt>
                <dd className="font-medium text-ink">{v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <form
          onSubmit={onSubmit}
          className="space-y-6 border-2 border-ink bg-paper p-8 shadow-[var(--shadow-card)] sm:p-10"
        >
          <div className="grid gap-6 sm:grid-cols-2">
            <Field id="name" label="Nom complet" required />
            <Field id="email" type="email" label="Email professionnel" required />
          </div>
          <Field id="site" label="Site web" />
          <div className="relative">
            <select
              id="budget"
              name="budget"
              defaultValue=""
              required
              className="w-full appearance-none border-b border-border bg-transparent py-3.5 text-[15px] text-ink outline-none transition-colors focus:border-electric"
            >
              <option value="" disabled>
                Budget média mensuel
              </option>
              {budgets.map((b) => (
                <option key={b} value={b}>
                  {b}
                </option>
              ))}
            </select>
            <span className="pointer-events-none absolute right-1 top-4 text-ink-soft">▾</span>
          </div>
          <div>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Contexte — objectifs, blocages, échéances…"
              className="w-full resize-none border-b border-border bg-transparent py-3.5 text-[15px] text-ink placeholder:text-ink-soft outline-none transition-colors focus:border-electric"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="group inline-flex w-full items-center justify-center gap-3 border-2 border-ink bg-ink px-6 py-4 text-sm font-bold uppercase tracking-wider text-paper shadow-[var(--shadow-hard)] transition-all hover:bg-electric hover:text-ink hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[var(--shadow-hard-lg)] disabled:opacity-60"
          >
            {loading ? (
              <>
                <span className="h-3.5 w-3.5 animate-spin border-2 border-paper/40 border-t-paper" />
                Envoi…
              </>
            ) : (
              <>
                Réserver l'appel de découverte
                <span className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </>
            )}
          </button>
          <p className="text-center text-xs text-ink-soft">
            Vos données restent confidentielles — RGPD-compliant.
          </p>
        </form>
      </div>
    </section>
  );
}
