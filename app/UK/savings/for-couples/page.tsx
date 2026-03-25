import Footer from '@/components/footer';
import Header from '@/components/header';
import SavingFriction from '@/components/savings/savingFriction';
import SavingsCouplesMattersPage from '@/components/savings/savingMatter';

import SavingsCouplesFeatures from '@/components/savings/savings-couples-features';
import SavingsCouplesHero from '@/components/savings/savings-couples-hero';
import SavingsCouplesStress from '@/components/savings/savings-couples-stress';
import SavingsCouplesTestimonial from '@/components/savings/savings-couples-testimonial';
import SavingsReadyCTA from '@/components/savings/savings-ready-cta';
import SavingsCouplesTrust from '@/components/savings/SavingsCouplesTrust';
import SavingsCouplesTransparency from '@/components/savings/savingTransparency';

export const metadata = {
  title: 'Savings for Couples - TrybeSave',
  description:
    'Save together, grow together. Build financial harmony with your partner using TrybeSave',
};

export default function SavingsForCouplesPage() {
  return (
    <main>
      <Header />
      <SavingsCouplesHero />
      <SavingsCouplesStress />

      <SavingsCouplesFeatures />
      <SavingsCouplesTestimonial />
      <SavingsCouplesMattersPage />
      <SavingsCouplesTransparency />

      <SavingFriction />
      <SavingsCouplesTrust />
      <SavingsReadyCTA />
      <Footer />
    </main>
  );
}
