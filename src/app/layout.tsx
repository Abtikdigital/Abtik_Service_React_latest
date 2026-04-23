import type { Metadata } from "next";
import "../index.css";
import { Inter, Bricolage_Grotesque } from "next/font/google";
import { Providers } from "./providers";
import Script from "next/script";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Abtik Startup Advisor pvt ltd | Business & MSME Loan Consultancy",
  description: "Get expert help on MSME loans, short-term capital, and government funding—trusted by 50,000+ businesses across India.",
  metadataBase: new URL("https://abtikservices.com/"),
  openGraph: {
    type: "website",
    url: "https://abtikservices.com/",
    title: "Abtik Startup Advisor pvt ltd | Business & MSME Loan Consultancy",
    description: "Get expert help on MSME loans, short-term capital, and government funding—trusted by 50,000+ businesses across India.",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Abtik Startup Advisor pvt ltd | Business & MSME Loan Consultancy",
    description: "Get expert help on MSME loans, short-term capital, and government funding—trusted by 50,000+ businesses across India.",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/Favicon.png",
  },
};

import ScrollToUp from "@/section/ScrollToUp";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="google-site-verification" content="08VvviZ2xVrLiB0d4AIq8LfYWy1cMPKq2_2iSOkuT_k" />
      </head>
      <body className={`${inter.variable} ${bricolage.variable} antialiased`}>
        <Providers>
          <ScrollToUp />
          {children}
        </Providers>
        
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N3NZP42GFK"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-N3NZP42GFK');
            gtag('config', 'G-RV4YFEP55W');
          `}
        </Script>

        {/* Facebook Pixel */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !(function (f, b, e, v, n, t, s) {
              if (f.fbq) return;
              n = f.fbq = function () {
                n.callMethod
                  ? n.callMethod.apply(n, arguments)
                  : n.queue.push(arguments);
              };
              if (!f._fbq) f._fbq = n;
              n.push = n;
              n.loaded = !0;
              n.version = "2.0";
              n.queue = [];
              t = b.createElement(e);
              t.async = !0;
              t.src = v;
              s = b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t, s);
            })(
              window,
              document,
              "script",
              "https://connect.facebook.net/en_US/fbevents.js",
            );
            fbq("init", "951291609968904");
            fbq("track", "PageView");
          `}
        </Script>
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=951291609968904&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
