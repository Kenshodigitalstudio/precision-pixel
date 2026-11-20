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

/* BULLE FLOTTANTE WHATSAPP OFFICIELLE */
function WhatsAppButton() {
  const phone = "34697637307";
  const message = encodeURIComponent(
    "Bonjour Kenshō Studio, je souhaite échanger sur mon projet."
  );
  const whatsappUrl = `https://wa.me/${phone}?text=${message}`;

  return (
    <aside aria-label="Contact WhatsApp" className="contents">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Discuter avec Kenshō Studio sur WhatsApp"
        className="group fixed bottom-6 right-6 z-50 flex items-center gap-2.5 rounded-full bg-[#25D366] p-3 text-white shadow-[0_12px_32px_-6px_rgba(37,211,102,0.65)] ring-1 ring-white/30 backdrop-blur-md transition-all duration-300 hover:scale-110 hover:shadow-[0_18px_40px_-6px_rgba(37,211,102,0.85)] active:scale-95 sm:px-4 sm:py-3"
      >
        {/* Icône officielle WhatsApp */}
        <svg
          viewBox="0 0 24 24"
          width="26"
          height="26"
          fill="currentColor"
          className="shrink-0 transition-transform duration-300 group-hover:rotate-6"
        >
          <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2m.01 1.67c2.2 0 4.26.86 5.82 2.42a8.225 8.225 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.48 0-2.93-.4-4.2-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.196 8.196 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24m-3.54 4.09c-.19 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.08.15.2 2.09 3.19 5.07 4.47.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.69.25-1.29.17-1.42-.08-.13-.27-.2-.56-.35-.29-.15-1.72-.85-1.99-.95-.27-.1-.46-.15-.65.15-.19.3-.74.94-.91 1.13-.17.2-.34.22-.63.08-.29-.15-1.23-.45-2.34-1.44-.86-.77-1.45-1.72-1.62-2.01-.17-.3-.02-.46.13-.61.13-.13.3-.34.44-.51.15-.17.2-.3.3-.49.1-.2.05-.37-.02-.52-.08-.15-.65-1.57-.89-2.15-.24-.56-.48-.48-.66-.49l-.56-.01Z" />
        </svg>

        <span className="hidden font-display text-xs font-semibold tracking-wide sm:inline-block">
          WhatsApp
        </span>

        {/* Petit point indicateur en ligne */}
        <span className="absolute -top-1 -right-1 flex size-3.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-3.5 rounded-full border-2 border-white bg-emerald-500" />
        </span>
      </a>
    </aside>
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
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
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
    </QueryClientProvider>
  );
}
