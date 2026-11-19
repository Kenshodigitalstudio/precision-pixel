
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { BlackFridayBanner } from "@/components/landing/BlackFridayBanner";

export function Nav() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const height =
        document.documentElement.scrollHeight - window.innerHeight;
      setProgress(height > 0 ? (window.scrollY / height) * 100 : 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <BlackFridayBanner />

      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-center px-4 py-5 sm:px-6"
      >
        <div className="liquid-nav">
          {/* SVG optical effects */}
          <svg
            className="liquid-svg-defs"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="kensho-liquid-distortion" x="-30%" y="-30%" width="160%" height="160%">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.018 0.045"
                numOctaves="2"
                seed="8"
                result="noise"
              />
              <feDisplacementMap
                in="SourceGraphic"
                in2="noise"
                scale="13"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>

          {/* Independent home lens */}
          <Link
            to="/"
            aria-label="Accueil Kenshō Digital Studio"
            className="liquid-home"
          >
            <span className="liquid-home-highlight" />
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="relative z-10 size-[19px]"
            >
              <path
                d="m3.5 10.5 8.5-7 8.5 7v8a1.5 1.5 0 0 1-1.5 1.5h-14A1.5 1.5 0 0 1 3.5 18.5v-8Z"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9 20v-6.5h6V20"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>

          {/* Main glass capsule */}
          <div className="liquid-capsule">
            <div className="liquid-capsule-background" />
            <div className="liquid-capsule-refraction" />
            <div className="liquid-capsule-edge" />
            <div className="liquid-capsule-shine" />

            <ul className="liquid-links">
              <li>
                <Link to="/reservation" className="liquid-link">
                  Audit Flash
                </Link>
              </li>
              <li>
                <Link to="/services/google-ads" className="liquid-link">
                  Gestion mensuelle
                </Link>
              </li>
              <li>
                <Link to="/reseaux-sociaux" className="liquid-link">
                  Réseaux sociaux
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div
        aria-hidden="true"
        className="absolute bottom-0 left-0 h-px bg-ink/25"
        style={{
          width: `${progress}%`,
          transition: "width 120ms linear",
        }}
      />

      <style>{`
        .liquid-svg-defs {
          position: absolute;
          width: 0;
          height: 0;
          pointer-events: none;
        }

        .liquid-nav {
          position: relative;
          display: flex;
          align-items: center;
          gap: 11px;
          perspective: 900px;
        }

        /* Main capsule: curved optical glass */
        .liquid-capsule {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: flex;
          align-items: center;
          border-radius: 999px;
          padding: 5px;
          border: 1px solid rgba(255,255,255,.82);

          background: rgba(255,255,255,.19);
          -webkit-backdrop-filter: blur(18px) saturate(190%) contrast(112%);
          backdrop-filter: blur(18px) saturate(190%) contrast(112%);

          box-shadow:
            0 18px 45px -22px rgba(29,24,48,.38),
            0 5px 14px rgba(255,255,255,.46) inset,
            0 -3px 8px rgba(70,57,110,.10) inset,
            1px 0 2px rgba(255,255,255,.9) inset;

          transform: translateZ(0);
          transition: box-shadow .4s ease, transform .4s ease;
        }

        .liquid-capsule:hover {
          box-shadow:
            0 22px 50px -22px rgba(29,24,48,.42),
            0 6px 18px rgba(255,255,255,.58) inset,
            0 -3px 9px rgba(70,57,110,.12) inset,
            1px 0 2px rgba(255,255,255,.95) inset;
        }

        /* Internal glass volume */
        .liquid-capsule-background {
          position: absolute;
          inset: 0;
          z-index: -3;
          border-radius: inherit;
          background:
            radial-gradient(
              ellipse at 18% -35%,
              rgba(255,255,255,.96),
              transparent 54%
            ),
            radial-gradient(
              ellipse at 90% 125%,
              rgba(190,180,255,.28),
              transparent 48%
            ),
            linear-gradient(
              145deg,
              rgba(255,255,255,.48),
              rgba(255,255,255,.08) 48%,
              rgba(255,255,255,.25)
            );
        }

        /* Curved refraction and optical color edges */
        .liquid-capsule-refraction {
          position: absolute;
          inset: -2px;
          z-index: -2;
          border-radius: inherit;
          pointer-events: none;
          background:
            linear-gradient(
              110deg,
              rgba(255,255,255,.65),
              transparent 16%,
              rgba(190,210,255,.13) 34%,
              transparent 52%,
              rgba(255,255,255,.40) 78%,
              transparent
            );
          filter: url(#kensho-liquid-distortion);
          opacity: .72;
        }

        /* Glass thickness */
        .liquid-capsule-edge {
          position: absolute;
          inset: 1px;
          z-index: 4;
          border-radius: inherit;
          pointer-events: none;
          border: 1px solid rgba(255,255,255,.48);
          box-shadow:
            0 1px 2px rgba(255,255,255,.75) inset,
            0 -1px 2px rgba(70,60,100,.09) inset;
          mask-image: linear-gradient(
            155deg,
            #000 0%,
            rgba(0,0,0,.85) 45%,
            transparent 90%
          );
        }

        /* Moving specular reflection */
        .liquid-capsule-shine {
          position: absolute;
          top: -100%;
          left: -40%;
          z-index: 2;
          width: 35%;
          height: 300%;
          pointer-events: none;
          transform: rotate(24deg);
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.12) 20%,
            rgba(255,255,255,.78) 50%,
            rgba(255,255,255,.18) 75%,
            transparent
          );
          filter: blur(4px);
          animation: liquid-light 9s cubic-bezier(.4,0,.2,1) infinite;
        }

        @keyframes liquid-light {
          0%, 18% {
            transform: translateX(0) rotate(24deg);
            opacity: 0;
          }
          28% { opacity: .8; }
          65% {
            transform: translateX(480%) rotate(24deg);
            opacity: .35;
          }
          100% {
            transform: translateX(480%) rotate(24deg);
            opacity: 0;
          }
        }

        /* Navigation links */
        .liquid-links {
          position: relative;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 3px;
          padding: 0;
          margin: 0;
          list-style: none;
        }

        .liquid-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          white-space: nowrap;
          padding: 11px 16px;
          border-radius: 999px;
          color: var(--ink);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: -.015em;
          transition: all .3s cubic-bezier(.2,.8,.2,1);
        }

        .liquid-link:hover {
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.75),
              rgba(255,255,255,.16)
            );
          box-shadow:
            0 4px 12px rgba(35,28,55,.08),
            0 1px 2px rgba(255,255,255,.9) inset,
            0 -1px 2px rgba(90,80,120,.08) inset;
          transform: translateY(-1px);
        }

        /* Independent convex home button */
        .liquid-home {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 47px;
          height: 47px;
          flex-shrink: 0;
          border-radius: 50%;
          color: var(--ink);
          border: 1px solid rgba(255,255,255,.85);
          background:
            radial-gradient(
              circle at 32% 17%,
              rgba(255,255,255,.98),
              rgba(255,255,255,.32) 45%,
              transparent 75%
            ),
            linear-gradient(
              145deg,
              rgba(255,255,255,.48),
              rgba(255,255,255,.10)
            );
          -webkit-backdrop-filter: blur(16px) saturate(190%);
          backdrop-filter: blur(16px) saturate(190%);
          box-shadow:
            0 12px 28px -13px rgba(29,24,48,.38),
            0 4px 10px rgba(255,255,255,.8) inset,
            0 -2px 5px rgba(70,57,110,.10) inset;
          transition: transform .35s cubic-bezier(.2,.8,.2,1);
        }

        .liquid-home:hover {
          transform: translateY(-2px) scale(1.04);
        }

        .liquid-home-highlight {
          position: absolute;
          top: -35%;
          left: 12%;
          width: 75%;
          height: 60%;
          border-radius: 50%;
          background: rgba(255,255,255,.78);
          filter: blur(9px);
          pointer-events: none;
        }

        @media (max-width: 520px) {
          .liquid-nav { gap: 7px; }
          .liquid-home { width: 39px; height: 39px; }
          .liquid-link {
            padding: 10px 9px;
            font-size: 10px;
          }
          .liquid-links { gap: 0; }
          .liquid-capsule { padding: 4px; }
        }

        @media (max-width: 370px) {
          .liquid-link {
            padding: 9px 7px;
            font-size: 9px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .liquid-capsule-shine {
            animation: none;
            opacity: 0;
          }
          .liquid-home,
          .liquid-link {
            transition: none;
          }
        }
      `}</style>
    </header>
  );
}
