import type { Metadata } from "next";
import { Montserrat, Arimo } from "next/font/google";
import Script from "next/script";
import "./globals.css";

import NavBar from "@/components/layout/NavBar";
import { Footer } from "@/components/layout/Footer";

// FONTS
const arimo = Arimo({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
});

const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
});


export const metadata: Metadata = {
  title: "Columbus Folk Music Society | Homepage",
  description: "Official site for the Columbus Folk Music Society",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const metaPixelId = 991364196395827;

  return (
    <html lang="en" className={`${arimo.variable} ${montserrat.variable}`}>
      <body>
        {metaPixelId && (
          <>
            <Script
              id="meta-pixel"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  if (!window.fbq) {
                    window.fbq = function() {
                      window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
                    };
                    if (!window._fbq) window._fbq = window.fbq;
                    window.fbq.push = window.fbq;
                    window.fbq.loaded = true;
                    window.fbq.version = '2.0';
                    window.fbq.queue = [];
                    const t = document.createElement('script');
                    t.async = true;
                    t.src = 'https://connect.facebook.net/en_US/fbevents.js';
                    const s = document.getElementsByTagName('script')[0];
                    s.parentNode.insertBefore(t, s);
                  }
                  fbq('init', ${JSON.stringify(metaPixelId)});
                  fbq('track', 'PageView');
                `,
              }}
            />
            <noscript>
              <img
                height="1"
                width="1"
                style={{ display: 'none' }}
                src={`https://www.facebook.com/tr?id=${metaPixelId}&ev=PageView&noscript=1`}
              />
            </noscript>
          </>
        )}
        <NavBar />
        <div className="pt-16">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
