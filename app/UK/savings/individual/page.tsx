import Footer from '../../_shared/footer';
import Header from '../../_shared/header';
import IndividualSavingsChallenge from './_components/challenge';
import SavingsReadyCTA from './_components/cta';
import IndividualSavingFeatureGrid from './_components/featureGrid';
import IndividualSavingSystem from './_components/features';
import IndividualSavingForEveryone from './_components/forEvertone';
import IndividualSavingGuidance from './_components/guidance';
import IndividualSavingHero from './_components/hero';
import IndividualSavingSteps from './_components/howItWorks';
import IndividualSavingsTrust from './_components/trust';

export const metadata = {
  title: 'Individual Savings - TrybeSave',
  description:
    'Take control of your money with intelligent savings tools designed for individuals',
};

export default function SavingsForOnePage() {
  return (
    <main>
      <Header />
      <IndividualSavingHero />
      <IndividualSavingsChallenge />
      <IndividualSavingSteps />
      <IndividualSavingSystem />
      <IndividualSavingGuidance />
      <IndividualSavingFeatureGrid />
      <IndividualSavingForEveryone />
      <IndividualSavingsTrust />
      <SavingsReadyCTA />
      <Footer />
    </main>
  );
}
