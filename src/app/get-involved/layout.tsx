import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get Involved',
  description:
    'Donate, volunteer or partner with Haske Humanitarian Aid Initiative. 100% of your gift funds clean water, survivor care and emergency relief for families in crisis across North-East & North-West Nigeria.',
};

export default function GetInvolvedLayout({ children }: { children: React.ReactNode }) {
  return children;
}
