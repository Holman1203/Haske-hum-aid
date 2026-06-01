import type { Metadata, Viewport } from 'next';
import { Inter, Merriweather } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';
import MainWrapper from '@/components/layout/MainWrapper';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700', '800', '900'],
});

const merriweather = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
  weight: ['300', '400', '700', '900'],
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: {
    default: 'Haske Humanitarian Aid Initiative (HHAI) | Northeast Nigeria',
    template: '%s | HHAI',
  },
  description:
    'Haske Humanitarian Aid Initiative (HHAI) builds an enabling environment for women and children\'s health through community engagement, nutrition programs, and gender empowerment across Nigeria. CAC Registered No. 182258.',
  keywords: [
    'HHAI', 'Haske Humanitarian Aid Initiative', 'Nigeria NGO', 'Adamawa State',
    'humanitarian aid', 'maternal health', 'child health', 'RMNCHN',
    'nutrition', 'health', 'gender empowerment', 'rural development',
    'community health', 'Jimeta Yola', 'Bauchi', 'women empowerment',
  ],
  authors: [{ name: 'Haske Humanitarian Aid Initiative' }],
  creator: 'HHAI',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://haskeinitiative.org',
    siteName: 'Haske Humanitarian Aid Initiative',
    title: 'Haske Humanitarian Aid Initiative | Transforming Lives in Northeast Nigeria',
    description:
      'Building an enabling environment where women and children\'s health needs are prioritised through community engagement and rural development across Nigeria since 2022.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=630&auto=format&fit=crop',
        width: 1200,
        height: 630,
        alt: 'HHAI Community Impact',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haske Humanitarian Aid Initiative',
    description: 'Transforming Lives Through Humanitarian Action in Northeast Nigeria',
    creator: '@HaskeInitiative',
  },
  icons: {
    icon: '/images/hhai-logo.png',
    apple: '/images/hhai-logo.png',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0D4F2A',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body>
        <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-brand-blue text-white px-4 py-2 rounded z-50">
          Skip to main content
        </a>
        <Header />
        <MainWrapper>{children}</MainWrapper>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
