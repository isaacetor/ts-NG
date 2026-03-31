'use client';

import { useWaitlistModal } from '@/context/WaitlistModalContext';

import React from 'react';

const SavingsReadyCTA: React.FC = () => {
  const { openModal } = useWaitlistModal();
  return (
    <section className="bg-[#0F0511] py-32 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
          Ready to take control?
        </h2>

        {/* Supporting Text */}
        <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto">
          Start building financial strength today with TrybeSave.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-6">
          <button
            onClick={openModal}
            className="bg-[#E600FF] hover:bg-[#c400d9] text-white 
             px-6 py-3 text-[15px]           /* mobile */
             md:px-10 md:py-4 md:text-lg     /* desktop */
             rounded-lg md:rounded-xl
             font-semibold md:font-bold
             transition-all duration-300 
             transform hover:scale-105 
             shadow-lg shadow-magenta-500/20">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default SavingsReadyCTA;
