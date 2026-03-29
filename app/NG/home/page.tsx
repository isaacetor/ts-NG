import Hero from './components/hero'
import BudgetOverview from './components/budget-overview'
import YourMoney from './components/your-money'
import SavingsGoals from './components/savings-goals'

export default function Home() {
  return (
    <main className="bg-white font-sans">
      <Hero />
      <BudgetOverview />
      <YourMoney />
      <SavingsGoals />
    </main>
  )
}
