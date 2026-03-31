import CouplesSavings from '@/app/components/ng_saving/CouplesSavings';
import SavingsHero from '@/app/components/ng_saving/hero';
import HowItWorksGrid from '@/app/components/ng_saving/HowItWorksGrid';
import IndividualSavingsFeatures from '@/app/components/ng_saving/IndividualSavingsFeatures';
import SavingsProblem from '@/app/components/ng_saving/SavingProblem';
import SecurityAndCTA from '@/app/components/ng_saving/SecurityandCTA';
import NG_Footer from '@/app/components/NG_shared/NG_Footer';
import NG_Header from '@/app/components/NG_shared/NG_header';

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
