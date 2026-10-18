import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://tomariobumilestari.co.id'),
  title: 'CV. Tomario Bumi Lestari - Produsen Agregat Batu Pecah & Kontraktor Konstruksi',
  description:
    'Profil resmi CV. Tomario Bumi Lestari. Produsen material batu agregat berkualitas (10/10, 10/20, 20/30, 30/50), abu batu, pasir cor, serta kontraktor bangunan gedung dan teknik sipil berstandar SNI.',
  keywords: [
    'CV. Tomario Bumi Lestari',
    'batu split',
    'agregat 10/10',
    'agregat 10/20',
    'agregat 20/30',
    'agregat 30/50',
    'abu batu',
    'pasir cor',
    'jasa konstruksi gedung',
    'jasa konstruksi civil',
    'stone crusher',
    'kontraktor sipil',
  ],
  authors: [{ name: 'CV. Tomario Bumi Lestari' }],
  icons: {
    icon: '/logo.jpg',
    apple: '/logo.jpg',
  },
  openGraph: {
    title: 'CV. Tomario Bumi Lestari - Agregat Berkualitas & Jasa Konstruksi',
    description:
      'Solusi terpercaya pasokan batu split berbagai fraksi, abu batu, pasir alam, dan jasa konstruksi gedung & infrastruktur sipil.',
    url: 'https://tomariobumilestari.co.id',
    siteName: 'CV. Tomario Bumi Lestari',
    images: [
      {
        url: '/images/hero_quarry.jpg',
        width: 1200,
        height: 630,
        alt: 'CV. Tomario Bumi Lestari Quarry & Contractor',
      },
    ],
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
