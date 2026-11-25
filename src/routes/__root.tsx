
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { PaymentTestModeBanner } from "@/components/PaymentTestModeBanner";
import { CookieConsent } from "@/components/landing/CookieConsent";

/* BOUTON WHATSAPP KENSHŌ STUDIO */
function WhatsAppButton() {
  const phone = "34697637307";
  const message = encodeURIComponent(
    "Bonjour Kenshō Studio, je souhaite échanger sur mon projet."
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Parlons de votre projet sur WhatsApp"
      className="kensho-whatsapp group fixed bottom-6 right-6 z-50"
    >
      <span className="kensho-whatsapp-halo" />

      <span className="kensho-whatsapp-label">
        <span className="kensho-whatsapp-label-dot" />
        Parlons de votre projet
      </span>

      <span className="kensho-whatsapp-circle">
        <span className="kensho-whatsapp-glass" />
        <span className="kensho-whatsapp-shine" />

        <img
          src="https://cdn.simpleicons.org/whatsapp/238c58"
          alt=""
          aria-hidden="true"
          width="29"
          height="29"
          className="kensho-whatsapp-icon"
        />
      </span>

      <style>{`
        .kensho-whatsapp {
          display: flex;
          align-items: center;
          justify-content: flex-end;
          gap: 11px;
          text-decoration: none;
          isolation: isolate;
          outline: none;
          -webkit-tap-highlight-color: transparent;
        }

        .kensho-whatsapp-halo {
          position: absolute;
          inset: -13px;
          z-index: -1;
          border-radius: 999px;
          background: linear-gradient(
            110deg,
            rgba(255, 190, 210, .30),
            rgba(193, 177, 255, .36),
            rgba(160, 215, 255, .32)
          );
          filter: blur(19px);
          opacity: .55;
          transition: opacity .4s ease, transform .4s ease;
          pointer-events: none;
        }

        .kensho-whatsapp-label {
          display: inline-flex;
          align-items: center;
          gap: 9px;
          white-space: nowrap;
          padding: 12px 17px;
          border: 1px solid rgba(255,255,255,.85);
          border-radius: 999px;
          background: rgba(255,255,255,.68);
          color: #302b3d;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: -.015em;
          box-shadow:
            0 8px 28px rgba(45, 35, 75, .09),
            0 1px 2px rgba(255,255,255,.9) inset;
          backdrop-filter: blur(20px) saturate(160%);
          -webkit-backdrop-filter: blur(20px) saturate(160%);
          opacity: 0;
          transform: translateX(9px);
          pointer-events: none;
          transition:
            opacity .35s ease,
            transform .35s cubic-bezier(.2,.8,.2,1);
        }

        .kensho-whatsapp-label-dot {
          width: 7px;
          height: 7px;
          flex-shrink: 0;
          border-radius: 50%;
          background: #25D366;
          box-shadow: 0 0 9px rgba(37,211,102,.4);
        }

        .kensho-whatsapp-circle {
          position: relative;
          isolation: isolate;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 59px;
          height: 59px;
          flex-shrink: 0;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,.9);
          background: rgba(255,255,255,.38);
          color: #238c58;
          box-shadow:
            0 13px 34px rgba(43, 34, 70, .13),
            0 4px 12px rgba(255,255,255,.75) inset,
            0 -2px 6px rgba(100,80,140,.07) inset;
          backdrop-filter: blur(20px) saturate(180%);
          -webkit-backdrop-filter: blur(20px) saturate(180%);
          transition:
            transform .4s cubic-bezier(.2,.8,.2,1),
            box-shadow .4s ease,
            border-color .4s ease;
        }

        .kensho-whatsapp-glass {
          position: absolute;
          inset: 0;
          z-index: -1;
          border-radius: inherit;
          background:
            radial-gradient(
              circle at 28% 15%,
              rgba(255,255,255,.98),
              transparent 55%
            ),
            linear-gradient(
              145deg,
              rgba(255,255,255,.45),
              rgba(226,216,255,.18) 55%,
              rgba(191,224,255,.25)
            );
        }

        .kensho-whatsapp-shine {
          position: absolute;
          top: -100%;
          left: -65%;
          width: 45%;
          height: 300%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,.8),
            transparent
          );
          transform: rotate(28deg);
          filter: blur(4px);
          pointer-events: none;
          transition: transform .8s ease;
        }

        .kensho-whatsapp-icon {
          position: relative;
          z-index: 2;
          display: block;
          width: 29px;
          height: 29px;
          object-fit: contain;
          transition: transform .4s cubic-bezier(.2,.8,.2,1);
        }

        .kensho-whatsapp:hover .kensho-whatsapp-label,
        .kensho-whatsapp:focus-visible .kensho-whatsapp-label {
          opacity: 1;
          transform: translateX(0);
        }

        .kensho-whatsapp:hover .kensho-whatsapp-circle {
          transform: translateY(-3px) scale(1.04);
          border-color: rgba(255,255,255,1);
          box-shadow:
            0 18px 42px rgba(43, 34, 70, .17),
            0 5px 15px rgba(255,255,255,.85) inset;
        }

        .kensho-whatsapp:hover .kensho-whatsapp-icon {
          transform: scale(1.08);
        }

        .kensho-whatsapp:hover .kensho-whatsapp-shine {
          transform: translateX(350%) rotate(28deg);
        }

        .kensho-whatsapp:hover .kensho-whatsapp-halo {
          opacity: .9;
          transform: scale(1.08);
        }

        .kensho-whatsapp:focus-visible .kensho-whatsapp-circle {
          outline: 3px solid rgba(140,110,220,.6);
          outline-offset: 4px;
        }

        @media (hover: none) {
          .kensho-whatsapp-label {
            display: none;
          }
        }

        @media (max-width: 520px) {
          .kensho-whatsapp {
            bottom: 19px;
            right: 19px;
          }

          .kensho-whatsapp-circle {
            width: 55px;
            height: 55px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .kensho-whatsapp *,
          .kensho-whatsapp {
            transition: none !important;
            animation: none !important;
          }
        }
      `}</style>
    </a>
  );
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Kensho Digital Studio" },
      {
        name: "description",
        content:
          "Kensho Digital Studio : l'expertise Google Ads combinée au tracking server-side. Une approche haute précision pour piloter votre performance et vos revenus.",
      },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Kensho Digital Studio" },
      {
        property: "og:description",
        content:
          "Kensho Digital Studio : l'expertise Google Ads combinée au tracking server-side. Une approche haute précision pour piloter votre performance et vos revenus.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Kensho Digital Studio" },
      {
        name: "twitter:description",
        content:
          "Kensho Digital Studio : l'expertise Google Ads combinée au tracking server-side. Une approche haute précision pour piloter votre performance et vos revenus.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Caveat:wght@500;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <PaymentTestModeBanner />
      <Outlet />
      <WhatsAppButton />
      <CookieConsent />
    </QueryClientProvider>
  );
}
