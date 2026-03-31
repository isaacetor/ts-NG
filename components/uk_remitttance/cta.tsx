'use client';
import { useWaitlistModal } from '@/context/WaitlistModalContext';
import React from 'react';

const Remit_CTA: React.FC = () => {
  const { openModal } = useWaitlistModal();
  return (
    <section className="bg-white py-16 md:py-24 px-5 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        {/* Main Headline */}
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-black tracking-tight leading-[1.2]">
          Start sending smarter today
        </h2>

        {/* Supporting Text */}
        <p className="text-gray-700 text-[15px] md:text-lg font-medium max-w-2xl mx-auto">
          Compare rates, track transfers, and build your future with TrybeSave.
        </p>

        {/* Primary Action Link */}
        <div className="pt-2 md:pt-4">
          <button
            onClick={openModal}
            className="bg-[#E600FF] hover:bg-[#c400d9] text-white 
                   px-5 py-2.5 text-[14px]
                   md:px-8 md:py-4 md:text-base
                   rounded-md md:rounded-lg
                   font-semibold md:font-bold
                   transition-all duration-300 
                   shadow-md 
                   active:scale-95 whitespace-nowrap">
            Get Early Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default Remit_CTA;
