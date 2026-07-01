import type { Metadata, Viewport } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import QuickExitProvider from '@/components/layout/QuickExit';

export const metadata: Metadata = {
  metadataBase: new URL('https://haskeinitiative.org'),
  title: {
    default: 'Haske Humanitarian Aid Initiative (HHAI) | Carrying light to where it’s needed most',
    template: '%s | Haske Humanitarian Aid Initiative',
  },
  description:
    'Haske Humanitarian Aid Initiative (HHAI) is a woman-led, youth-driven national NGO protecting dignity and saving lives across North-East & North-West Nigeria — ending gender-based violence, delivering clean water, and standing with displaced families.',
  keywords: [
    'HHAI', 'Haske Humanitarian Aid Initiative', 'Nigeria NGO', 'GBV', 'gender-based violence',
    'WASH', 'clean water', 'humanitarian relief', 'displaced families', 'Borno', 'Adamawa', 'Yobe',
    'North-East Nigeria', 'North-West Nigeria', 'women empowerment', 'youth empowerment',
  ],
  authors: [{ name: 'Haske Humanitarian Aid Initiative' }],
  creator: 'HHAI',
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://haskeinitiative.org',
    siteName: 'Haske Humanitarian Aid Initiative',
    title: 'Haske Humanitarian Aid Initiative | Carrying light to where it’s needed most',
    description:
      'A woman-led, youth-driven national NGO ending gender-based violence, delivering clean water and standing with displaced families across North-East & North-West Nigeria.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Haske Humanitarian Aid Initiative',
    description: 'Carrying light to where it’s needed most across North-East & North-West Nigeria.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  icons: {
    icon: '/images/hhai-badge.png',
    apple: '/images/hhai-badge.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#9966CC',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body style={{ overflowX: 'hidden' }} suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only"
          style={{ position: 'absolute', left: -9999, top: 0 }}
        >
          Skip to main content
        </a>
        <QuickExitProvider>
          <Header />
          {children}
          <Footer />
        </QuickExitProvider>
      </body>
    </html>
  );
}
