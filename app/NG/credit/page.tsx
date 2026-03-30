import CreditHero from './_components/hero';
import NG_Header from '../_shared/NG_header';
import NG_Footer from '../_shared/NG_Footer';
import UnfairCredit from './_components/unfairCredit';
import CreditDiscipline from './_components/creditDiscipline';
import CreditGrowth from './_components/creditGrowth';
import StartSavingFirst from './_components/startSavingFirst';
import SavingsFirstStep from './_components/SavingFiratStep';
import CreditContrast from './_components/creditContrast';
import UserPersonas from './_components/userPersona';
import SecurityAndTrust from './_components/securityAndTrust';
import CreditInsights from './_components/CreditInsights';
import BuildCreditJourney from './_components/BuildCreditJourney';

const Credit = () => {
  return (
    <div>
      <NG_Header />
      <CreditHero />
      <UnfairCredit />
      <CreditDiscipline />
      <CreditGrowth />
      <StartSavingFirst />
      <SavingsFirstStep />
      <CreditContrast />
      <UserPersonas />
      <SecurityAndTrust />
      <CreditInsights />
      <BuildCreditJourney />
      <NG_Footer />
    </div>
  );
};

export default Credit;
