import Header from '@/app/_shared/header';
import SavingsCouplesMattersPage from './_components/couple_matters';
import SavingsCouplesStress from './_components/couple_save';
import SavingsReadyCTA from './_components/cta';
import SavingsCouplesFeatures from './_components/feature';
import SavingFriction from './_components/friction';
import SavingsCouplesHero from './_components/hero';
import SavingsCouplesTestimonial from './_components/testimonial';
import SavingsCouplesTransparency from './_components/transparency';
import SavingsCouplesTrust from './_components/trust';
import Footer from '@/app/_shared/footer';

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
