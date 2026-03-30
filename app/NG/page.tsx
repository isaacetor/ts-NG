import Hero from './_components/hero';
import TrackSpending from './_components/track-spending';
import BuildSavings from './_components/build-savings';
import MoneyStructured from './_components/money-structured';
import NotJustAnotherApp from './_components/not-just-another-app';
import FinancialStrength from './_components/financial-strength';
import CreditThatWorks from './_components/credit-that-works';
import CashbackRewards from './_components/cashback-rewards';
import WhyDifferent from './_components/why-different';
import BuiltForNigerians from './_components/built-for-nigerians';
import HowWeMakeMoney from './_components/how-we-make-money';

import CallToAction from './_components/call-to-action';
import NGSecurity from './_components/money-is-safe';
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
