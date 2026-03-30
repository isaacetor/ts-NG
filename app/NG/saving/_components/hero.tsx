'use client';

import { useState } from 'react';
import Image from 'next/image';
import WaitlistModal from '@/app/components/_utils/WaitlistModal';

const SavingsHero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#F9F9F9] px-6 py-20 md:py-32">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
          {/* Left Side: Content */}
          <div className="w-full lg:w-1/2 space-y-8 md:space-y-10 order-2 lg:order-1">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0A0A0A] leading-tight tracking-tight">
                Saving made simple
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl font-medium text-[#4A4A4A] leading-relaxed max-w-xl">
                TrybeSave helps you build consistent saving habits, track your
                progress, and reach your financial goals. Whether you're saving
                on your own or with someone you trust, we've got you covered.
              </p>
            </div>

            <div className="pt-4">
              {/* CTA BUTTON → OPENS MODAL */}
              <button
                onClick={() => setIsOpen(true)}
                className="w-full min-w-48 sm:w-auto bg-[#E500BF] hover:bg-[#C2009E] text-white text-xl font-bold px-10 py-3 rounded-lg">
                Start
              </button>
            </div>
          </div>

          {/* Right Side: Hero Visual */}
          <div className="w-full lg:w-1/2 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-150">
              {/* Glow */}
              <div className="absolute inset-0 bg-[#F3E8FF] rounded-full blur-[120px] -z-10 scale-90 opacity-70" />

              <Image
                src="/saving/hero.png"
                alt="A happy couple contributing to a piggy bank, surrounded by financial growth symbols like cards and calendars."
                width={650}
                height={650}
                className="w-full h-auto"
                priority
              />
            </div>
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

export default SavingsHero;
