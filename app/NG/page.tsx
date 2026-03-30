import Hero from './hero';
import TrackSpending from './track-spending';
import BuildSavings from './build-savings';
import MoneyStructured from './money-structured';
import NotJustAnotherApp from './not-just-another-app';
import FinancialStrength from './financial-strength';
import CreditThatWorks from './credit-that-works';
import CashbackRewards from './cashback-rewards';
import WhyDifferent from './why-different';
import BuiltForNigerians from './built-for-nigerians';
import HowWeMakeMoney from './how-we-make-money';

import CallToAction from './call-to-action';
import NGSecurity from './money-is-safe';
import RealStories from './_components/realStories';
import NG_Header from './_shared/NG_header';
import NG_Footer from './_shared/NG_Footer';

export default function Home() {
  return (
    <main className="bg-white">
      <NG_Header />
      <Hero />
      <NotJustAnotherApp />
      <MoneyStructured />
      <BuildSavings />
      <TrackSpending />
      <CashbackRewards />
      <FinancialStrength />
      <CreditThatWorks />
      <WhyDifferent />
      <BuiltForNigerians />
      <HowWeMakeMoney />
      <NGSecurity />
      <RealStories />
      <CallToAction />
      <NG_Footer />
    </main>
  );
}
