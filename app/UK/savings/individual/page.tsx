import Footer from '@/app/components/footer';
import Header from '@/app/components/header';
import IndividualSavingsChallenge from '@/app/components/uk_savings/individual/challenge';
import SavingsReadyCTA from '@/app/components/uk_savings/individual/cta';
import IndividualSavingFeatureGrid from '@/app/components/uk_savings/individual/featureGrid';
import IndividualSavingSystem from '@/app/components/uk_savings/individual/features';
import IndividualSavingForEveryone from '@/app/components/uk_savings/individual/forEvertone';
import IndividualSavingGuidance from '@/app/components/uk_savings/individual/guidance';
import IndividualSavingHero from '@/app/components/uk_savings/individual/hero';
import IndividualSavingSteps from '@/app/components/uk_savings/individual/howItWorks';
import IndividualSavingsTrust from '@/app/components/uk_savings/individual/trust';

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
