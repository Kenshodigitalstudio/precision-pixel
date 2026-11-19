
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BlackFridayBanner } from "@/components/landing/BlackFridayBanner";

export function Nav() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <BlackFridayBanner />
      <nav aria-label="Navigation principale" className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 sm:px-6">
        <div className="kensho-glass-nav relative flex items-center gap-2 rounded-full p-1.5 sm:gap-3 sm:p-2">
          <Link to="/" aria-label="Accueil Kenshō Digital Studio" className="kensho-glass-home group relative flex size-10 shrink-0 items-center justify-center rounded-full text-ink transition-transform duration-300 hover:scale-105 sm:size-11">
            <svg aria-hidden="true" viewBox="0 0 24 24" fill="none" className="size-[18px] transition-transform duration-300 group-hover:-translate-y-0.5">
              <path d="m3.75 10.6 8.25-6.85 8.25 6.85v8.15a1.5 1.5 0 0 1-1.5 1.5h-13.5a1.5 1.5 0 0 1-1.5-1.5V10.6Z" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9.25 20.25v-6.5h5.5v6.5" stroke="currentColor" strokeWidth="1.55" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>

          <span aria-hidden="true" className="kensho-glass-divider h-6 w-px" />

          <ul className="flex items-center gap-0.5 text-[11px] font-semibold text-ink sm:gap-1 sm:text-[13px]">
            <li><Link to="/reservation" className="kensho-glass-link inline-flex whitespace-nowrap rounded-full px-3 py-2.5 transition-all duration-300 hover:-translate-y-px sm:px-4">Audit Flash</Link></li>
            <li><Link to="/services/google-ads" className="kensho-glass-link inline-flex whitespace-nowrap rounded-full px-3 py-2.5 transition-all duration-300 hover:-translate-y-px sm:px-4">Gestion mensuelle</Link></li>
            <li><Link to="/reseaux-sociaux" className="kensho-glass-link inline-flex whitespace-nowrap rounded-full px-3 py-2.5 transition-all duration-300 hover:-translate-y-px sm:px-4">Réseaux sociaux</Link></li>
          </ul>

          <span aria-hidden="true" className="kensho-glass-sheen" />
          <span aria-hidden="true" className="kensho-glass-caustic" />
        </div>
      </nav>

      <div aria-hidden="true" className="absolute bottom-0 left-0 h-px bg-ink/25" style={{ width: `${progress}%`, transition: "width 120ms linear" }} />

      <style>{`
        .kensho-glass-nav {
          isolation: isolate;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,.76);
          background:
            linear-gradient(118deg, rgba(255,255,255,.66), rgba(255,255,255,.24) 24%, rgba(255,255,255,.10) 48%, rgba(255,255,255,.42) 76%, rgba(255,255,255,.20)),
            linear-gradient(145deg, rgba(255,255,255,.36), rgba(255,255,255,.08));
          -webkit-backdrop-filter: blur(22px) saturate(190%) contrast(108%);
          backdrop-filter: blur(22px) saturate(190%) contrast(108%);
          box-shadow: 0 14px 38px -18px rgba(31,28,45,.34), 0 4px 12px rgba(255,255,255,.48) inset, 0 -2px 5px rgba(79,68,110,.10) inset, 1px 0 0 rgba(255,255,255,.8) inset;
          transform: translateZ(0);
        }
        .kensho-glass-nav::before {
          content:""; position:absolute; inset:0; z-index:-1; border-radius:inherit; pointer-events:none;
          background: radial-gradient(ellipse at 16% -25%, rgba(255,255,255,.98), transparent 48%), radial-gradient(ellipse at 82% 120%, rgba(190,180,255,.24), transparent 45%), linear-gradient(105deg, transparent 18%, rgba(255,255,255,.26) 38%, transparent 58%);
        }
        .kensho-glass-nav::after {
          content:""; position:absolute; inset:1px; z-index:3; border-radius:inherit; border:1px solid rgba(255,255,255,.38); pointer-events:none;
          mask-image:linear-gradient(155deg,#000 0%,rgba(0,0,0,.85) 38%,transparent 78%);
        }
        .kensho-glass-home {
          background: radial-gradient(circle at 32% 18%,rgba(255,255,255,.98),rgba(255,255,255,.32) 44%,transparent 72%), linear-gradient(145deg,rgba(255,255,255,.54),rgba(255,255,255,.12));
          border:1px solid rgba(255,255,255,.72);
          box-shadow:0 3px 9px rgba(45,38,65,.10),0 2px 4px rgba(255,255,255,.72) inset,0 -1px 3px rgba(80,70,110,.10) inset;
        }
        .kensho-glass-divider { background:linear-gradient(180deg,transparent,rgba(255,255,255,.9),rgba(95,83,120,.16),transparent); }
        .kensho-glass-link { position:relative; z-index:2; }
        .kensho-glass-link:hover {
          color:var(--ink); background:linear-gradient(145deg,rgba(255,255,255,.72),rgba(255,255,255,.22));
          box-shadow:0 3px 10px rgba(40,35,60,.08),0 1px 2px rgba(255,255,255,.9) inset,0 -1px 2px rgba(100,90,120,.08) inset;
        }
        .kensho-glass-sheen {
          position:absolute; top:-80%; left:-38%; width:32%; height:260%; z-index:1; pointer-events:none;
          transform:rotate(22deg); background:linear-gradient(90deg,transparent,rgba(255,255,255,.34),rgba(255,255,255,.72),transparent);
          filter:blur(5px); animation:kensho-glass-sweep 8s ease-in-out infinite;
        }
        .kensho-glass-caustic {
          position:absolute; inset:0; z-index:1; pointer-events:none; border-radius:inherit;
          background:radial-gradient(ellipse at 50% -55%,rgba(255,255,255,.8),transparent 58%);
          mix-blend-mode:screen; opacity:.52;
        }
        @keyframes kensho-glass-sweep {
          0%,18% { transform:translateX(0) rotate(22deg); opacity:0; }
          28% { opacity:.8; }
          58% { transform:translateX(470%) rotate(22deg); opacity:.25; }
          100% { transform:translateX(470%) rotate(22deg); opacity:0; }
        }
        @media(max-width:420px) {
          .kensho-glass-nav { gap:4px; padding:5px; }
          .kensho-glass-link { padding:9px; font-size:10px; }
          .kensho-glass-home { width:36px; height:36px; }
        }
        @media(prefers-reduced-motion:reduce) { .kensho-glass-sheen { animation:none; } }
      `}</style>
    </header>
  );
}
