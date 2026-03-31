import Footer from '@/components/footer';
import Header from '@/components/header';
import IndividualSavingsChallenge from '@/components/uk_savings/individual/challenge';
import SavingsReadyCTA from '@/components/uk_savings/individual/cta';
import IndividualSavingFeatureGrid from '@/components/uk_savings/individual/featureGrid';
import IndividualSavingSystem from '@/components/uk_savings/individual/features';
import IndividualSavingForEveryone from '@/components/uk_savings/individual/forEvertone';
import IndividualSavingGuidance from '@/components/uk_savings/individual/guidance';
import IndividualSavingHero from '@/components/uk_savings/individual/hero';
import IndividualSavingSteps from '@/components/uk_savings/individual/howItWorks';
import IndividualSavingsTrust from '@/components/uk_savings/individual/trust';

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
