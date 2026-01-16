import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

// UPDATE THIS: Replace with your actual domain
const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.bezdrob.com'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Imran Bezdrob | Elite Personal Training Sarajevo",
    template: "%s | Imran Bezdrob"
  },
  description: "Transform your body with Imran Bezdrob - Sarajevo's premier personal trainer specializing in glute transformation programs. 1:1 training, online coaching & expert team.",
  keywords: ["personal trainer", "Sarajevo", "glute program", "fitness", "online coaching", "1:1 training", "Imran Bezdrob", "personal training Bosnia", "fitness coach", "body transformation"],
  authors: [{ name: "Imran Bezdrob" }],
  creator: "Imran Bezdrob",
  publisher: "Imran Bezdrob",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "bs_BA",
    url: SITE_URL,
    siteName: "Imran Bezdrob - Elite Personal Training",
    title: "Imran Bezdrob | Elite Personal Training Sarajevo",
    description: "Transform your body with Sarajevo's premier personal trainer. Specializing in glute transformation, 1:1 training & online coaching.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Imran Bezdrob - Elite Personal Training",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Imran Bezdrob | Elite Personal Training Sarajevo",
    description: "Transform your body with Sarajevo's premier personal trainer. Specializing in glute transformation, 1:1 training & online coaching.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // ADD YOUR VERIFICATION CODES HERE:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

// JSON-LD Structured Data for SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_URL,
  name: 'Imran Bezdrob - Elite Personal Training',
  description: 'Transform your body with Imran Bezdrob - Sarajevo\'s premier personal trainer specializing in glute transformation programs.',
  url: SITE_URL,
  logo: `${SITE_URL}/bezdrob-logo.png`,
  image: `${SITE_URL}/og-image.png`,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sarajevo',
    addressCountry: 'BA',
  },
  areaServed: {
    '@type': 'Place',
    name: 'Sarajevo, Bosnia and Herzegovina',
  },
  priceRange: '$$',
  serviceType: ['Personal Training', 'Online Coaching', 'Fitness Programs', 'Glute Transformation'],
  sameAs: [
    // ADD YOUR SOCIAL MEDIA LINKS HERE:
    // 'https://instagram.com/imranbezdrob',
    // 'https://facebook.com/imranbezdrob',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${dmSans.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased font-body">{children}</body>
    </html>
  );
}
