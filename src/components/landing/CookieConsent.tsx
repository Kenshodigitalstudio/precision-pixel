
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Cookie, Settings2, X, Check } from "lucide-react";

type CookiePreferences = {
  necessary: true;
  analytics: boolean;
  marketing: boolean;
  updatedAt: string;
};

const STORAGE_KEY = "kensho-cookie-consent";

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (!saved) {
      setVisible(true);
      return;
    }

    try {
      const preferences = JSON.parse(saved) as CookiePreferences;
      setAnalytics(preferences.analytics);
      setMarketing(preferences.marketing);
    } catch {
      setVisible(true);
    }
  }, []);

  const savePreferences = (
    analyticsValue: boolean,
    marketingValue: boolean
  ) => {
    const preferences: CookiePreferences = {
      necessary: true,
      analytics: analyticsValue,
      marketing: marketingValue,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));

    setAnalytics(analyticsValue);
    setMarketing(marketingValue);
    setVisible(false);
    setSettingsOpen(false);

    window.dispatchEvent(
      new CustomEvent("kensho-cookie-consent-updated", {
        detail: preferences,
      })
    );
  };

  const acceptAll = () => savePreferences(true, true);
  const refuseAll = () => savePreferences(false, false);

  return (
    <>
      {/* Bouton permanent pour modifier les préférences */}
      {!visible && (
        <button
          onClick={() => {
            setSettingsOpen(true);
            setVisible(true);
          }}
          aria-label="Modifier les préférences cookies"
          className="fixed bottom-5 left-5 z-[90] grid size-11 place-items-center rounded-full border border-white/80 bg-white/65 text-[#527CA8] shadow-[0_8px_30px_-12px_rgba(35,65,110,.35)] backdrop-blur-2xl transition-all hover:-translate-y-1 hover:bg-white/90"
        >
          <Cookie size={19} />
        </button>
      )}

      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 25, scale: 0.97 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-[430px] sm:bottom-7 sm:left-7 sm:right-auto"
          >
            <div className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/65 p-5 shadow-[0_25px_80px_-25px_rgba(35,65,110,.35)] backdrop-blur-[28px] sm:p-6">
              {/* Reflets Liquid Glass */}
              <div className="pointer-events-none absolute -right-20 -top-24 size-56 rounded-full bg-[#C8E1FC]/60 blur-[65px]" />
              <div className="pointer-events-none absolute -bottom-24 -left-16 size-48 rounded-full bg-white/90 blur-[60px]" />

              <div className="relative">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="grid size-10 place-items-center rounded-2xl border border-white/90 bg-gradient-to-br from-white/90 to-[#DCEBFC]/80 text-[#5B91C7] shadow-sm">
                      <Cookie size={19} />
                    </div>
                    <span className="font-display text-sm font-semibold tracking-tight text-[#34445C]">
                      Kenshō Studio
                    </span>
                  </div>

                  <button
                    onClick={refuseAll}
                    aria-label="Fermer et refuser les cookies optionnels"
                    className="grid size-8 place-items-center rounded-full text-[#8795A8] transition-colors hover:bg-white/70 hover:text-[#34445C]"
                  >
                    <X size={16} />
                  </button>
                </div>

                <h2 className="mt-5 font-display text-[23px] font-medium leading-tight tracking-[-.04em] text-[#26364D]">
                  Un peu de douceur ?
                </h2>

                <p className="mt-2 text-[12px] leading-[1.8] text-[#687990]">
                  Nous utilisons quelques cookies pour améliorer votre
                  expérience. Vous gardez le contrôle.
                </p>

                {/* Personnalisation */}
                <AnimatePresence>
                  {settingsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 space-y-3 overflow-hidden"
                    >
                      <div className="rounded-2xl border border-white/90 bg-white/45 p-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-semibold text-[#34445C]">
                            Cookies nécessaires
                          </span>
                          <span className="text-[10px] text-[#7590AF]">
                            Toujours actifs
                          </span>
                        </div>
                        <p className="mt-1 text-[10px] leading-relaxed text-[#8190A4]">
                          Indispensables au fonctionnement du site.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/90 bg-white/45 p-3">
                        <label className="flex cursor-pointer items-center justify-between gap-3">
                          <span className="text-xs font-semibold text-[#34445C]">
                            Mesure d'audience
                          </span>
                          <input
                            type="checkbox"
                            checked={analytics}
                            onChange={(e) => setAnalytics(e.target.checked)}
                            className="size-4 accent-[#6598D2]"
                          />
                        </label>
                        <p className="mt-1 text-[10px] leading-relaxed text-[#8190A4]">
                          Nous aide à comprendre l'utilisation du site.
                        </p>
                      </div>

                      <div className="rounded-2xl border border-white/90 bg-white/45 p-3">
                        <label className="flex cursor-pointer items-center justify-between gap-3">
                          <span className="text-xs font-semibold text-[#34445C]">
                            Marketing
                          </span>
                          <input
                            type="checkbox"
                            checked={marketing}
                            onChange={(e) => setMarketing(e.target.checked)}
                            className="size-4 accent-[#6598D2]"
                          />
                        </label>
                        <p className="mt-1 text-[10px] leading-relaxed text-[#8190A4]">
                          Permet de mesurer et personnaliser les campagnes.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Boutons */}
                <div className="mt-5 space-y-2.5">
                  <button
                    onClick={acceptAll}
                    className="group flex w-full items-center justify-center gap-2 rounded-full border border-white/90 bg-gradient-to-r from-[#D8E9FC]/95 to-[#BFD9F5]/90 px-5 py-3.5 text-xs font-semibold text-[#304967] shadow-[0_10px_30px_-15px_rgba(70,120,180,.45)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
                  >
                    <Check size={14} />
                    Tout accepter
                  </button>

                  <div className="grid grid-cols-2 gap-2.5">
                    <button
                      onClick={refuseAll}
                      className="rounded-full border border-white/90 bg-white/50 px-3 py-3 text-[11px] font-semibold text-[#465A74] backdrop-blur-xl transition-all hover:bg-white/90"
                    >
                      Tout refuser
                    </button>

                    <button
                      onClick={() => {
                        if (settingsOpen) {
                          savePreferences(analytics, marketing);
                        } else {
                          setSettingsOpen(true);
                        }
                      }}
                      className="flex items-center justify-center gap-1.5 rounded-full border border-white/90 bg-white/35 px-3 py-3 text-[11px] font-semibold text-[#465A74] backdrop-blur-xl transition-all hover:bg-white/80"
                    >
                      <Settings2 size={13} />
                      {settingsOpen ? "Enregistrer" : "Personnaliser"}
                    </button>
                  </div>
                </div>

                <a
                  href="/politique-confidentialite"
                  className="mt-4 block text-center text-[10px] text-[#8492A5] underline decoration-[#B8C9DC]/60 underline-offset-4 transition-colors hover:text-[#527CA8]"
                >
                  Politique de confidentialité
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
