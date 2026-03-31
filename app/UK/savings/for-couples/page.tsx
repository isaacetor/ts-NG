import Header from '@/components/header';
import Footer from '@/components/footer';
import SavingsCouplesHero from '@/components/uk_savings/couple/hero';
import SavingsCouplesStress from '@/components/uk_savings/couple/couple_save';
import SavingsCouplesFeatures from '@/components/uk_savings/couple/feature';
import SavingsCouplesTestimonial from '@/components/uk_savings/couple/testimonial';
import SavingsCouplesMattersPage from '@/components/uk_savings/couple/couple_matters';
import SavingsCouplesTransparency from '@/components/uk_savings/couple/transparency';
import SavingFriction from '@/components/uk_savings/couple/friction';
import SavingsCouplesTrust from '@/components/uk_savings/couple/trust';
import SavingsReadyCTA from '@/components/uk_savings/couple/cta';

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
