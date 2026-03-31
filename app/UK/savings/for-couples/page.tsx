import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import SavingsCouplesHero from '@/app/components/uk_savings/couple/hero';
import SavingsCouplesStress from '@/app/components/uk_savings/couple/couple_save';
import SavingsCouplesFeatures from '@/app/components/uk_savings/couple/feature';
import SavingsCouplesTestimonial from '@/app/components/uk_savings/couple/testimonial';
import SavingsCouplesMattersPage from '@/app/components/uk_savings/couple/couple_matters';
import SavingsCouplesTransparency from '@/app/components/uk_savings/couple/transparency';
import SavingFriction from '@/app/components/uk_savings/couple/friction';
import SavingsCouplesTrust from '@/app/components/uk_savings/couple/trust';
import SavingsReadyCTA from '@/app/components/uk_savings/couple/cta';

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
