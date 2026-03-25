import Footer from '@/components/footer';
import Header from '@/components/header';
import Remit_CTA from '@/components/remittance/cta';
import Remit_Faq from '@/components/remittance/faq';
import Remit_Features from '@/components/remittance/features';
import Remit_HelpThem from '@/components/remittance/helpThem';
import Remit_Hero from '@/components/remittance/hero';
import Remit_Impact from '@/components/remittance/impact';
import Remit_Stories from '@/components/remittance/realStories';
import Remit_Steps from '@/components/remittance/threeSteps';
import Remit_WhatWeDo from '@/components/remittance/what_we_do';

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
