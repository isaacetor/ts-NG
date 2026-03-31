import SecurityAndTrust from '@/app/components/ng_credit/securityAndTrust';
import CreditInsights from '@/app/components/ng_credit/CreditInsights';
import BuildCreditJourney from '@/app/components/ng_credit/BuildCreditJourney';
import NG_Header from '@/app/components/NG_shared/NG_header';
import CreditHero from '@/app/components/ng_credit/hero';
import UnfairCredit from '@/app/components/ng_credit/unfairCredit';
import CreditDiscipline from '@/app/components/ng_credit/creditDiscipline';
import CreditGrowth from '@/app/components/ng_credit/creditGrowth';
import StartSavingFirst from '@/app/components/ng_credit/startSavingFirst';
import SavingsFirstStep from '@/app/components/ng_credit/SavingFiratStep';
import CreditContrast from '@/app/components/ng_credit/creditContrast';
import UserPersonas from '@/app/components/ng_credit/userPersona';
import NG_Footer from '@/app/components/NG_shared/NG_Footer';

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
