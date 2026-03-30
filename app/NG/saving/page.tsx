import React from 'react';
import NG_Header from '../_shared/NG_header';
import NG_Footer from '../_shared/NG_Footer';
import SavingsHero from './_components/hero';
import SavingsProblem from './_components/SavingProblem';
import HowItWorksGrid from './_components/HowItWorksGrid';
import CouplesSavings from './_components/CouplesSavings';
import IndividualSavingsFeatures from './_components/IndividualSavingsFeatures';
import SecurityAndCTA from './_components/SecurityandCTA';

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
