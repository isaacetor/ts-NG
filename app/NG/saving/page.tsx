import CouplesSavings from '@/components/ng_saving/CouplesSavings';
import SavingsHero from '@/components/ng_saving/hero';
import HowItWorksGrid from '@/components/ng_saving/HowItWorksGrid';
import IndividualSavingsFeatures from '@/components/ng_saving/IndividualSavingsFeatures';
import SavingsProblem from '@/components/ng_saving/SavingProblem';
import SecurityAndCTA from '@/components/ng_saving/SecurityandCTA';
import NG_Footer from '@/components/NG_shared/NG_Footer';
import NG_Header from '@/components/NG_shared/NG_header';

const Savings = () => {
  return (
    <div>
      <NG_Header />
      <SavingsHero />
      <SavingsProblem />
      <HowItWorksGrid />
      <CouplesSavings />
      <IndividualSavingsFeatures />
      <SecurityAndCTA />
      <NG_Footer />
    </div>
  );
};

export default Savings;
