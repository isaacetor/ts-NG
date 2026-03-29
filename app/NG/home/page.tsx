import Hero from './components/hero'
import TrackSpending from './components/track-spending'
import BuildSavings from './components/build-savings'
import MoneyStructured from './components/money-structured'
import NotJustAnotherApp from './components/not-just-another-app'
import FinancialStrength from './components/financial-strength'
import CreditThatWorks from './components/credit-that-works'
import CashbackRewards from './components/cashback-rewards'
import WhyDifferent from './components/why-different'
import Header from '@/app/_shared/header'

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
    </main>
  )
}