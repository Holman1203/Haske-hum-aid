import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Get in touch with Haske Humanitarian Aid Initiative — partner, volunteer, or learn more about our work across North-East & North-West Nigeria.',
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
