import NG_Footer from '../_shared/NG_Footer';
import NG_Header from '../_shared/NG_header';
import BudHero from './_components/BudHero';
import CashbackProcess from './_components/CashbackProcess';
import ComparisonTable from './_components/comparisonTable';
import SpendingToSavings from './_components/spendingToSaving';

const Budgeting = () => {
  return (
    <div>
      <NG_Header />
      <BudHero />
      <SpendingToSavings />
      <CashbackProcess />
      <ComparisonTable />
      <NG_Footer />
    </div>
  );
};

export default Budgeting;
