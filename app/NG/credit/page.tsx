import React from 'react';
import CreditHero from './_components/hero';
import NG_Header from '../_shared/NG_header';
import NG_Footer from '../_shared/NG_Footer';
import UnfairCredit from './_components/unfairCredit';

const Credit = () => {
  return (
    <div>
      <NG_Header />
      <CreditHero />
      <UnfairCredit />
      <NG_Footer />
    </div>
  );
};

export default Credit;
