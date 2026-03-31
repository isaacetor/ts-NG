import Header from '@/components/header';
import Footer from '@/components/footer';
import { AboutHero } from '@/components/uk_about/hero';
import { AboutMission } from '@/components/uk_about/mission';
import { AboutCommunity } from '@/components/uk_about/community';
import { AboutFinancialStability } from '@/components/uk_about/financialStability';
import { AboutFriendsChallenge } from '@/components/uk_about/friendsChallenge';
import { AboutFoundersMessage } from '@/components/uk_about/aboutFounder';

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
