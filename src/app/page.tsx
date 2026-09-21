import { MarketingLanding } from '@/packages/landing';

export const metadata = {
  description:
    'Find businesses and log calls from one list. Open-source software you run yourself. Your lead data stays in your database.',
  openGraph: {
    title: 'Lead Studio',
    description:
      'Keep track of your leads. Find businesses and log calls from one list.',
    type: 'website',
  },
};

export default function Home() {
  return <MarketingLanding />;
}
