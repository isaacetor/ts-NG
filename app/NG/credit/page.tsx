import SecurityAndTrust from '@/components/ng_credit/securityAndTrust';
import CreditInsights from '@/components/ng_credit/CreditInsights';
import BuildCreditJourney from '@/components/ng_credit/BuildCreditJourney';
import NG_Header from '@/components/NG_shared/NG_header';
import CreditHero from '@/components/ng_credit/hero';
import UnfairCredit from '@/components/ng_credit/unfairCredit';
import CreditDiscipline from '@/components/ng_credit/creditDiscipline';
import CreditGrowth from '@/components/ng_credit/creditGrowth';
import StartSavingFirst from '@/components/ng_credit/startSavingFirst';
import SavingsFirstStep from '@/components/ng_credit/SavingFiratStep';
import CreditContrast from '@/components/ng_credit/creditContrast';
import UserPersonas from '@/components/ng_credit/userPersona';
import NG_Footer from '@/components/NG_shared/NG_Footer';

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
