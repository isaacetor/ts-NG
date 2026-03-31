import Header from '@/app/components/header';
import Footer from '@/app/components/footer';
import { AboutHero } from '@/app/components/uk_about/hero';
import { AboutMission } from '@/app/components/uk_about/mission';
import { AboutCommunity } from '@/app/components/uk_about/community';
import { AboutFinancialStability } from '@/app/components/uk_about/financialStability';
import { AboutFriendsChallenge } from '@/app/components/uk_about/friendsChallenge';
import { AboutFoundersMessage } from '@/app/components/uk_about/aboutFounder';

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
