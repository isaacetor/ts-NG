import Header from '@/app/_shared/header';
import { AboutFoundersMessage } from './_components/aboutFounder';
import { AboutCommunity } from './_components/community';
import { AboutFinancialStability } from './_components/financialStability';
import { AboutFriendsChallenge } from './_components/friendsChallenge';
import { AboutHero } from './_components/hero';
import { AboutMission } from './_components/mission';
import Footer from '@/app/_shared/footer';

export default function Remittance() {
  return (
    <main className="w-full">
      <Header />
      <AboutHero />
      <AboutMission />
      <AboutCommunity />
      <AboutFinancialStability />
      <AboutFriendsChallenge />
      <AboutFoundersMessage />

      <Footer />
    </main>
  );
}
