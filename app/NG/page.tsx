import Hero from './hero'
import TrackSpending from './track-spending'
import BuildSavings from './build-savings'
import MoneyStructured from './money-structured'
import NotJustAnotherApp from './not-just-another-app'
import FinancialStrength from './financial-strength'
import CreditThatWorks from './credit-that-works'
import CashbackRewards from './cashback-rewards'
import WhyDifferent from './why-different'
import BuiltForNigerians from './built-for-nigerians'
import HowWeMakeMoney from './how-we-make-money'
import MoneyIsSafe from './money-is-safe'
import RealStories from './real-stories'
import CallToAction from './call-to-action'
import Header from '@/app/_shared/header'
import Footer from '@/app/_shared/footer'

export default function Home() {
  return (
    <main className="bg-white font-sans">
      <Header />
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
      <MoneyIsSafe />
      <RealStories />
      <CallToAction />
      <Footer />
    </main>
  )
}