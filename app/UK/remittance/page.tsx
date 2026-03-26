import Header from '@/app/_shared/header';
import Remit_CTA from './_components/cta';
import Remit_Faq from './_components/faq';
import Remit_Features from './_components/features';
import Remit_HelpThem from './_components/helpThem';
import Remit_Hero from './_components/hero';
import Remit_Impact from './_components/impact';
import Remit_Stories from './_components/realStories';
import Remit_Steps from './_components/threeSteps';
import Remit_WhatWeDo from './_components/whatWeDo';
import Footer from '@/app/_shared/footer';

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
