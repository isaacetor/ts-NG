import BudHero from '@/components/NG_budgeting/BudHero';
import CashbackProcess from '@/components/NG_budgeting/CashbackProcess';
import ComparisonTable from '@/components/NG_budgeting/comparisonTable';
import FinalBudgetFeatures from '@/components/NG_budgeting/finalBudgetFeature';
import SpendingToSavings from '@/components/NG_budgeting/spendingToSaving';
import NG_Footer from '@/components/NG_shared/NG_Footer';
import NG_Header from '@/components/NG_shared/NG_header';

const Budgeting = () => {
  return (
    <div>
      <NG_Header />
      <BudHero />
      <SpendingToSavings />
      <CashbackProcess />
      <ComparisonTable />
      <FinalBudgetFeatures />
      <NG_Footer />
    </div>
  );
};

export default Budgeting;
