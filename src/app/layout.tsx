import type { Metadata } from 'next';
import './globals.css';
import { PRODUCTS_DATA, COMPANY_INFO } from '@/data/companyData';

export const metadata: Metadata = {
  metadataBase: new URL('https://tomariobumilestari.co.id'),
  title: 'CV. Tomario Bumi Lestari - Produsen Agregat Batu Pecah & Kontraktor Konstruksi',
  description:
    'Profil resmi CV. Tomario Bumi Lestari. Produsen material batu agregat berkualitas (10/10, 10/20, 20/30, 30/50), abu batu, pasir cor, serta kontraktor bangunan gedung dan teknik sipil berstandar SNI.',
  keywords: [
    'CV. Tomario Bumi Lestari',
    'batu split',
    'batu pecah',
    'agregat 10/10',
    'agregat 10/20',
    'agregat 20/30',
    'agregat 30/50',
    'abu batu',
    'stone dust',
    'pasir cor',
    'jasa konstruksi gedung',
    'jasa konstruksi civil',
    'stone crusher',
    'kontraktor sipil Halmahera Utara',
    'Tobelo',
  ],
  authors: [{ name: 'CV. Tomario Bumi Lestari' }],
  alternates: {
    canonical: 'https://tomariobumilestari.co.id',
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
  twitter: {
    card: 'summary_large_image',
    title: 'CV. Tomario Bumi Lestari - Produsen Agregat Batu Pecah & Kontraktor',
    description:
      'Pemasok material agregat batu pecah SNI, abu batu, pasir, dan kontraktor konstruksi terpercaya.',
    images: ['/images/hero_quarry.jpg'],
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['LocalBusiness', 'GeneralContractor'],
      '@id': 'https://tomariobumilestari.co.id/#organization',
      name: COMPANY_INFO.name,
      legalName: COMPANY_INFO.name,
      url: 'https://tomariobumilestari.co.id',
      logo: 'https://tomariobumilestari.co.id/logo.jpg',
      image: 'https://tomariobumilestari.co.id/images/hero_quarry.jpg',
      description: COMPANY_INFO.heroSubtitle,
      telephone: `+${COMPANY_INFO.phoneRaw}`,
      email: COMPANY_INFO.email,
      address: {
        '@type': 'PostalAddress',
        streetAddress: COMPANY_INFO.address,
        addressLocality: 'Tobelo',
        addressRegion: 'Halmahera Utara, Maluku Utara',
        addressCountry: 'ID',
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
        opens: '10:00',
        closes: '19:00',
      },
      priceRange: '$$',
    },
    ...PRODUCTS_DATA.map((product) => ({
      '@type': 'Product',
      '@id': `https://tomariobumilestari.co.id/#product-${product.id}`,
      name: product.name,
      description: product.description,
      image: `https://tomariobumilestari.co.id${product.image}`,
      category: 'Konstruksi & Material Bangunan',
      brand: {
        '@type': 'Brand',
        name: COMPANY_INFO.name,
      },
      offers: {
        '@type': 'Offer',
        priceCurrency: 'IDR',
        availability: 'https://schema.org/InStock',
        seller: {
          '@id': 'https://tomariobumilestari.co.id/#organization',
        },
      },
    })),
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
