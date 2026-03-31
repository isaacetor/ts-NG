import BudHero from '@/app/components/NG_budgeting/BudHero';
import CashbackProcess from '@/app/components/NG_budgeting/CashbackProcess';
import ComparisonTable from '@/app/components/NG_budgeting/comparisonTable';
import FinalBudgetFeatures from '@/app/components/NG_budgeting/finalBudgetFeature';
import SpendingToSavings from '@/app/components/NG_budgeting/spendingToSaving';
import NG_Footer from '@/app/components/NG_shared/NG_Footer';
import NG_Header from '@/app/components/NG_shared/NG_header';

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
