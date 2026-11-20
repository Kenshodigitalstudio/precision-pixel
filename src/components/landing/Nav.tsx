
import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";

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
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-7xl items-center justify-center px-4 py-5 sm:px-6"
      >
        <div className="liquid-nav">
          {/* Optical SVG filter */}
          <svg
            className="liquid-svg-defs"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter
              id="kensho-liquid-distortion"
              x="-30%"
              y="-30%"
              width="160%"
              height="160%"
            >
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
                scale="10"
                xChannelSelector="R"
                yChannelSelector="G"
              />
            </filter>
          </svg>

          {/* Home glass lens */}
          <Link
            to="/"
            aria-label="Accueil Kenshō Digital Studio"
            className="liquid-home"
          >
            <span className="liquid-home-background" />
            <span className="liquid-home-highlight" />
            <span className="liquid-home-reflection" />

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

          {/* Main Liquid Glass capsule */}
          <div className="liquid-capsule">
            <div className="liquid-capsule-background" />
            <div className="liquid-capsule-depth" />
            <div className="liquid-capsule-refraction" />
            <div className="liquid-capsule-caustic" />
            <div className="liquid-capsule-shine" />
            <div className="liquid-capsule-edge" />

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
          perspective: 1000px;
        }

        /* MAIN GLASS CAPSULE */
        .liquid-capsule {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: flex;
          align-items: center;
          border-radius: 999px;
          padding: 5px;

          border: 1px solid rgba(255,255,255,.78);

          background: rgba(255,255,255,.12);

          -webkit-backdrop-filter:
            blur(15px)
            saturate(220%)
            brightness(1.08);

          backdrop-filter:
            blur(15px)
            saturate(220%)
            brightness(1.08);

          box-shadow:
            0 20px 48px -22px rgba(29,24,48,.34),
            0 7px 18px rgba(255,255,255,.48) inset,
            0 -5px 12px rgba(70,57,110,.12) inset,
            1px 0 2px rgba(255,255,255,.95) inset,
            -1px 0 2px rgba(255,255,255,.55) inset;

          transform: translateZ(0);

          transition:
            box-shadow .5s ease,
            transform .5s cubic-bezier(.2,.8,.2,1),
            border-color .5s ease;
        }

        .liquid-capsule:hover {
          border-color: rgba(255,255,255,.96);

          box-shadow:
            0 24px 55px -22px rgba(29,24,48,.39),
            0 8px 22px rgba(255,255,255,.58) inset,
            0 -5px 14px rgba(70,57,110,.15) inset,
            1px 0 3px rgba(255,255,255,1) inset;
        }

        /* TRANSPARENT GLASS VOLUME */
        .liquid-capsule-background {
          position: absolute;
          inset: 0;
          z-index: -4;
          border-radius: inherit;

          background:
            radial-gradient(
              ellipse at 22% -45%,
              rgba(255,255,255,.96),
              transparent 58%
            ),
            radial-gradient(
              ellipse at 82% 140%,
              rgba(185,177,255,.30),
              transparent 55%
            ),
            radial-gradient(
              ellipse at 48% 110%,
              rgba(205,226,255,.22),
              transparent 60%
            ),
            linear-gradient(
              145deg,
              rgba(255,255,255,.34),
              rgba(255,255,255,.055) 45%,
              rgba(255,255,255,.20)
            );
        }

        /* DEPTH AND INTERNAL SHADOW */
        .liquid-capsule-depth {
          position: absolute;
          inset: 0;
          z-index: -3;
          border-radius: inherit;
          pointer-events: none;

          background:
            linear-gradient(
              180deg,
              rgba(255,255,255,.35),
              transparent 28%,
              transparent 72%,
              rgba(95,80,130,.07)
            );

          box-shadow:
            0 12px 24px rgba(255,255,255,.10) inset,
            0 -8px 18px rgba(90,75,125,.07) inset;
        }

        /* OPTICAL REFRACTION */
        .liquid-capsule-refraction {
          position: absolute;
          inset: -2px;
          z-index: -2;
          border-radius: inherit;
          pointer-events: none;

          background:
            linear-gradient(
              112deg,
              rgba(255,255,255,.66),
              transparent 13%,
              rgba(194,213,255,.17) 30%,
              transparent 48%,
              rgba(255,255,255,.35) 72%,
              transparent 92%
            );

          filter: url(#kensho-liquid-distortion);
          opacity: .8;
        }

        /* SOFT LIGHT CAUSTICS */
        .liquid-capsule-caustic {
          position: absolute;
          inset: 0;
          z-index: 1;
          border-radius: inherit;
          pointer-events: none;

          background:
            radial-gradient(
              ellipse at 12% 0%,
              rgba(255,255,255,.42),
              transparent 38%
            ),
            radial-gradient(
              ellipse at 90% 100%,
              rgba(188,190,255,.19),
              transparent 38%
            );

          opacity: .8;
          mix-blend-mode: screen;
        }

        /* DOUBLE GLASS EDGE */
        .liquid-capsule-edge {
          position: absolute;
          inset: 1px;
          z-index: 4;
          border-radius: inherit;
          pointer-events: none;

          border: 1px solid rgba(255,255,255,.52);

          box-shadow:
            0 1px 2px rgba(255,255,255,.95) inset,
            0 -1px 3px rgba(70,60,100,.11) inset,
            1px 0 1px rgba(255,255,255,.8) inset;

          mask-image: linear-gradient(
            150deg,
            #000 0%,
            rgba(0,0,0,.9) 45%,
            transparent 92%
          );
        }

        /* MOVING SPECULAR REFLECTION */
        .liquid-capsule-shine {
          position: absolute;
          top: -110%;
          left: -45%;
          z-index: 2;

          width: 32%;
          height: 320%;

          pointer-events: none;

          transform: rotate(24deg);

          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255,255,255,.10) 20%,
            rgba(255,255,255,.72) 48%,
            rgba(255,255,255,.20) 68%,
            transparent 100%
          );

          filter: blur(5px);

          animation:
            liquid-light 10s cubic-bezier(.4,0,.2,1) infinite;
        }

        @keyframes liquid-light {
          0%, 15% {
            transform: translateX(0) rotate(24deg);
            opacity: 0;
          }

          26% {
            opacity: .8;
          }

          64% {
            transform: translateX(490%) rotate(24deg);
            opacity: .4;
          }

          100% {
            transform: translateX(490%) rotate(24deg);
            opacity: 0;
          }
        }

        /* NAVIGATION LINKS */
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

          transition:
            background .35s ease,
            box-shadow .35s ease,
            transform .35s cubic-bezier(.2,.8,.2,1);
        }

        .liquid-link:hover {
          background:
            linear-gradient(
              145deg,
              rgba(255,255,255,.72),
              rgba(255,255,255,.12)
            );

          box-shadow:
            0 5px 15px rgba(35,28,55,.07),
            0 1px 3px rgba(255,255,255,.95) inset,
            0 -1px 3px rgba(90,80,120,.08) inset;

          transform: translateY(-1px);
        }

        /* HOME BUTTON - CONVEX GLASS */
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

          background: rgba(255,255,255,.16);

          -webkit-backdrop-filter: blur(15px) saturate(210%);
          backdrop-filter: blur(15px) saturate(210%);

          box-shadow:
            0 14px 30px -13px rgba(29,24,48,.36),
            0 5px 13px rgba(255,255,255,.85) inset,
            0 -3px 8px rgba(70,57,110,.10) inset,
            1px 0 2px rgba(255,255,255,.95) inset;

          transition:
            transform .4s cubic-bezier(.2,.8,.2,1),
            box-shadow .4s ease;
        }

        .liquid-home-background {
          position: absolute;
          inset: 0;
          z-index: -2;
          border-radius: inherit;

          background:
            radial-gradient(
              circle at 32% 14%,
              rgba(255,255,255,.98),
              rgba(255,255,255,.20) 48%,
              transparent 75%
            ),
            linear-gradient(
              145deg,
              rgba(255,255,255,.38),
              rgba(205,210,255,.12) 65%,
              rgba(255,255,255,.20)
            );
        }

        .liquid-home-highlight {
          position: absolute;
          top: -35%;
          left: 12%;
          width: 75%;
          height: 60%;

          border-radius: 50%;
          background: rgba(255,255,255,.85);

          filter: blur(9px);
          pointer-events: none;
        }

        .liquid-home-reflection {
          position: absolute;
          inset: 1px;
          border-radius: inherit;
          pointer-events: none;

          border: 1px solid rgba(255,255,255,.48);

          box-shadow:
            0 1px 2px rgba(255,255,255,.85) inset,
            0 -2px 5px rgba(70,57,110,.08) inset;
        }

        .liquid-home:hover {
          transform: translateY(-2px) scale(1.045);

          box-shadow:
            0 18px 36px -12px rgba(29,24,48,.40),
            0 6px 16px rgba(255,255,255,.95) inset,
            0 -3px 8px rgba(70,57,110,.12) inset;
        }

        /* RESPONSIVE */
        @media (max-width: 520px) {
          .liquid-nav {
            gap: 7px;
          }

          .liquid-home {
            width: 39px;
            height: 39px;
          }

          .liquid-link {
            padding: 10px 9px;
            font-size: 10px;
          }

          .liquid-links {
            gap: 0;
          }

          .liquid-capsule {
            padding: 4px;
          }
        }

        @media (max-width: 370px) {
          .liquid-link {
            padding: 9px 7px;
            font-size: 9px;
          }
        }

        /* ACCESSIBILITY */
        @media (prefers-reduced-motion: reduce) {
          .liquid-capsule-shine {
            animation: none;
            opacity: 0;
          }

          .liquid-home,
          .liquid-link,
          .liquid-capsule {
            transition: none;
          }
        }
      `}</style>
    </header>
  );
}
