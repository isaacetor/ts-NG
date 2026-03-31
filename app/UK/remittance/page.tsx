import Header from '@/components/header';
import Footer from '@/components/footer';
import Remit_Hero from '@/components/uk_remitttance/hero';
import Remit_WhatWeDo from '@/components/uk_remitttance/whatWeDo';
import Remit_HelpThem from '@/components/uk_remitttance/helpThem';
import Remit_Steps from '@/components/uk_remitttance/threeSteps';
import Remit_Features from '@/components/uk_remitttance/features';
import Remit_Impact from '@/components/uk_remitttance/impact';
import Remit_Stories from '@/components/uk_remitttance/realStories';
import Remit_Faq from '@/components/uk_remitttance/faq';
import Remit_CTA from '@/components/uk_remitttance/cta';

export default function Remittance() {
  return (
    <main className="w-full">
      <Header />
      <Remit_Hero />
      <Remit_WhatWeDo />
      <Remit_HelpThem />
      <Remit_Steps />
      <Remit_Features />
      <Remit_Impact />
      <Remit_Stories />
      <Remit_Faq />
      <Remit_CTA />
      <Footer />
    </main>
  );
}
