'use client';

import { useState } from 'react';
import Link from 'next/link';
import WaitlistModal from '@/app/components/_utils/WaitlistModal';

const BuildCreditJourney = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-white py-20 md:py-32 text-center">
        <div className="max-w-5xl mx-auto px-6 space-y-12 md:space-y-16">
          {/* Header Section */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-[#0A0A0A] leading-snug tracking-tight max-w-2xl mx-auto">
              Build your credit the <br /> right way
            </h2>
            <p className="text-lg md:text-xl text-[#4A4A4A] max-w-2xl mx-auto font-medium">
              Start saving with TrybeSave and unlock access to responsible
              credit.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              {/* BUTTON → OPENS MODAL */}
              <button
                onClick={() => setIsOpen(true)}
                className="w-full sm:w-auto bg-[#E500BF] hover:bg-[#C2009E] text-white text-lg md:text-xl font-bold px-8 py-5 rounded-lg">
                Get started
              </button>

              <Link
                href="/ng/about"
                className="w-full sm:w-auto border-2 border-gray-200 hover:border-gray-300 bg-white hover:bg-gray-50 text-[#0A0A0A] text-lg md:text-xl font-bold px-8 py-5 rounded-lg">
                See how it works
              </Link>
            </div>
          </div>
        </div>

        {/* Full Width Background Image Section */}
        <div
          className="w-full h-[500px] md:h-[800px] mt-16 md:mt-24 bg-cover bg-top bg-no-repeat rounded-xl shadow-lg"
          style={{
            backgroundImage: "url('/credit/pic.png')",
          }}
        />

        {/* Final Conversion Section */}
        <div className="max-w-5xl mx-auto px-6 pt-16 md:pt-24 space-y-8 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold text-[#0A0A0A] leading-snug tracking-tight">
            Start your journey today
          </h2>
          <p className="text-lg md:text-xl text-[#4A4A4A] font-medium max-w-2xl mx-auto">
            Join Nigerians building credit the right way with TrybeSave.
          </p>

          <div className="p-10 mt-12">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full md:flex-grow bg-white/90 text-[#0A0A0A] text-lg px-8 py-5 border-b border-gray-200 placeholder:text-gray-400 focus:ring-2 focus:ring-[#E500BF] transition-all"
              />

              {/* SECOND BUTTON → ALSO OPENS MODAL */}
              <button
                onClick={() => setIsOpen(true)}
                className="w-full md:w-auto flex-shrink-0 bg-[#E500BF] hover:bg-[#C2009E] text-white text-lg md:text-xl font-bold px-10 py-5 rounded-lg shadow-sm">
                Get started
              </button>
            </div>
          </div>

          <p className="text-sm text-gray-500">
            No hidden fees. No harassment.
          </p>
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

export default BuildCreditJourney;
