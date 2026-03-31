import BuildSavings from '../../components/ng/build-savings';
import BuiltForNigerians from '../../components/ng/built-for-nigerians';
import CallToAction from '../../components/ng/call-to-action';
import CashbackRewards from '../../components/ng/cashback-rewards';
import CreditThatWorks from '../../components/ng/credit-that-works';
import FinancialStrength from '../../components/ng/financial-strength';
import HowWeMakeMoney from '../../components/ng/how-we-make-money';
import NGSecurity from '../../components/ng/money-is-safe';
import MoneyStructured from '../../components/ng/money-structured';
import NG_Hero from '../../components/ng/ng_hero';
import NotJustAnotherApp from '../../components/ng/not-just-another-app';
import RealStories from '../../components/ng/realStories';
import TrackSpending from '../../components/ng/track-spending';
import WhyDifferent from '../../components/ng/why-different';
import NG_Footer from '../../components/NG_shared/NG_Footer';
import NG_Header from '../../components/NG_shared/NG_header';

export default function Home() {
  return (
    <main className="bg-white">
      <NG_Header />
      <NG_Hero />
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
