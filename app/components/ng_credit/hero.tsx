'use client';

import WaitlistModal from '@/app/components/utils/WaitlistModal';
import Link from 'next/link';
import { useState } from 'react';

const CreditHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="relative w-full h-[80vh] min-h-150 flex items-center justify-center overflow-hidden">
        {/* Background Image + Overlay */}
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: "url('/credit/herobg.jpg')",
            }}
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#FF00FF]/20" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-tighter tracking-tight">
            Access credit you <br className="hidden md:block" /> can trust
          </h1>

          <p className="text-xl md:text-2xl lg:text-3xl font-medium max-w-3xl mx-auto mb-12 leading-relaxed opacity-95">
            TrybeSave gives Nigerians access to fair, responsible credit based
            on their savings habits and financial discipline — not hidden fees
            or debt traps.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            {/* MAIN CTA → OPENS MODAL */}
            <button
              onClick={() => setIsOpen(true)}
              className="w-full sm:w-auto bg-[#8A1A9B] hover:bg-[#701580] text-white text-lg md:text-xl font-bold px-8 py-5 rounded-xl transition-all duration-300 shadow-lg transform ">
              Unlock Your Credit Limit
            </button>

            {/* SECOND BUTTON */}
            <Link
              href="/ng/about"
              className="w-full sm:w-auto border-2 border-white/40 hover:border-white bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white text-lg md:text-xl font-bold px-8 py-5 rounded-xl transition-all duration-300">
              See How It Works
            </Link>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <WaitlistModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default CreditHero;
