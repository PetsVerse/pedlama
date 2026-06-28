import type { Metadata } from 'next';
import { Lato, Playfair_Display } from 'next/font/google';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lato = Lato({
  subsets: ['latin'],
  weight: ['300', '400', '700', '900'],
  variable: '--font-lato',
  display: 'swap',
});

const siteDescription =
  'Espaço de festas infantis e eventos para adultos em Portugal. Pé d\'Lama junta natureza, sentidos e família em celebrações com alma. Reserve a sua festa connosco.';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.pedlama.pt'),
  title: {
    default: "Pé d'Lama",
    template: "%s | Pé d'Lama",
  },
  description: siteDescription,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: 'https://www.pedlama.pt/',
    languages: { 'pt-PT': 'https://www.pedlama.pt/' },
  },
  icons: {
    icon: [
      { url: '/images/favicon.ico' },
      { url: '/images/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/images/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      {
        url: '/images/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
    shortcut: '/images/favicon.ico',
  },
  openGraph: {
    title: "Pé d'Lama — Festas com alma em Portugal",
    description: siteDescription,
    url: 'https://www.pedlama.pt/',
    siteName: "Pé d'Lama",
    locale: 'pt_PT',
    type: 'website',
    images: [
      {
        url: 'https://www.pedlama.pt/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: "Pé d'Lama — espaço de festas em Portugal",
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Pé d'Lama — Festas com alma em Portugal",
    description: siteDescription,
    images: ['https://www.pedlama.pt/images/og-default.jpg'],
  },
};

const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'EventVenue',
      name: "Pé d'Lama",
      url: 'https://www.pedlama.pt',
      description:
        'Espaço de festas infantis e eventos de adultos em Portugal — Natureza · Sentidos · Família',
      address: { '@type': 'PostalAddress', addressCountry: 'PT' },
      founder: { '@type': 'Person', name: 'Virgílio Morouço' },
    },
    {
      '@type': 'Organization',
      name: "Pé d'Lama",
      url: 'https://www.pedlama.pt',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-body">
        {/* GA: substituir por GoogleAnalytics de next/third-parties */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
        <Header />
        <main className="min-h-screen pt-16 md:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
