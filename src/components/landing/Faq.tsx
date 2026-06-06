import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ITEMS = [
  {
    q: "L'audit convient-il à tous les budgets Google Ads ?",
    a: "Oui, que vous dépensiez 500€ ou 50 000€ par mois, l'audit identifie les pertes et opportunités propres à votre compte.",
  },
  {
    q: "Que se passe-t-il après l'audit ?",
    a: "Vous recevez un rapport clair avec des recommandations actionnables. Si vous souhaitez aller plus loin, un expert vous sera attribué pour la gestion complète.",
  },
  {
    q: "Comment se déroule le RDV de 30 minutes ?",
    a: "Via Google Meet. Vous partagez l'accès en lecture à votre compte Google Ads, et on analyse ensemble en direct.",
  },
  {
    q: "Puis-je annuler ou reporter mon créneau ?",
    a: "Oui, via le lien Calendly reçu par email, vous pouvez modifier votre créneau jusqu'à 24h avant le RDV.",
  },
];

export function Faq() {
  return (
    <section className="relative px-6 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-electric">
            FAQ
          </span>
          <h2 className="mt-3 font-display text-[clamp(2rem,4.4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.03em]">
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-indigo-700 bg-clip-text text-transparent">
              Questions fréquentes
            </span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 rounded-[2rem] border border-white/40 bg-white/20 p-3 sm:p-5 backdrop-blur-2xl shadow-[0_20px_60px_-25px_rgba(59,130,246,0.35)]"
        >
          <Accordion type="single" collapsible className="w-full">
            {ITEMS.map((item, i) => (
              <AccordionItem
                key={item.q}
                value={`item-${i}`}
                className="border-b border-white/30 last:border-b-0"
              >
                <AccordionTrigger className="group px-4 py-5 text-left text-[15.5px] font-semibold text-ink hover:no-underline">
                  <span className="flex items-start gap-3">
                    <span
                      aria-hidden
                      className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 transition-all group-data-[state=open]:h-3 group-data-[state=open]:w-3"
                    />
                    <span>{item.q}</span>
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-5 pl-9 text-[14.5px] leading-relaxed text-ink-soft">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
