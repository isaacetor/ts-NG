import Header from '@/components/header';

import SavingsHowItWorks from '@/components/savings/savings-how-it-works';
import SavingsOneChallenge from '@/components/savings/savings-one-challenge';
import SavingsOneFeatures from '@/components/savings/savings-one-features';
import SavingsOneHero from '@/components/savings/IndividualSavingHero';
import SavingsReadyCTA from '@/components/savings/savings-ready-cta';
import SavingsWhatYouGet from '@/components/savings/savings-what-you-get';
import Footer from '@/components/footer';
import IndividualSavingGuidance from '@/components/savings/individualSavingGuidance';
import IndividualSavingForEveryone from '@/components/savings/indivdualSavingsEveryone';
import IndividualSavingsTrust from '@/components/savings/IndividualSavingsTrust';

export const metadata = {
  title: 'Individual Savings - TrybeSave',
  description:
    'Take control of your money with intelligent savings tools designed for individuals',
};

export default function SavingsForOnePage() {
  return (
    <main>
      <Header />
      <SavingsOneHero />
      <SavingsOneChallenge />
      <SavingsHowItWorks />
      <SavingsOneFeatures />
      <IndividualSavingGuidance />
      <SavingsWhatYouGet />
      <IndividualSavingForEveryone />
      <IndividualSavingsTrust />
      <SavingsReadyCTA />
      <Footer />
    </main>
  );
}
