'use client';

import { useState } from 'react';

import Image from 'next/image';
import sef from '../../../../public/sef.jpg';
import WaitlistModal from '@/app/components/utils/WaitlistModal';

const HERO_CONTENT = {
  title: 'Take control of your money today',
  description:
    "TrybeSave helps you automatically save money, track your spending, and build financial stability — all in one simple app. Whether you're saving for the future, building an emergency fund, or organizing your finances, TrybeSave helps you stay in control.",
  primaryBtn: {
    text: 'Get Early Access',
  },
};

export default function IndividualSavingHero() {
  const [isOpen, setIsOpen] = useState(false);

  const Button = ({ text, onClick }: { text: string; onClick: () => void }) => (
    <button
      onClick={onClick}
      className="block text-center w-full md:w-fit bg-[#E600FF] hover:bg-[#c400d9] text-white px-5 py-3 md:px-8 md:py-3 rounded-md font-semibold md:font-bold transition-all shadow-md active:scale-95">
      {text}
    </button>
  );

  return (
    <>
      <section className="bg-[#FEF2FF] min-h-[80vh] py-12 md:py-16 px-5 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:items-center gap-10 md:gap-12">
          {/* Left Column */}
          <div className="flex flex-col space-y-6 md:space-y-8 order-1">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.15] tracking-tight">
              {HERO_CONTENT.title}
            </h1>

            <p className="text-gray-700 text-[15px] md:text-lg leading-relaxed max-w-md">
              {HERO_CONTENT.description}
            </p>

            {/* Desktop Button */}
            <div className="mt-4 max-md:hidden">
              <Button
                text={HERO_CONTENT.primaryBtn.text}
                onClick={() => setIsOpen(true)}
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="relative w-full min-h-65 md:min-h-100 lg:min-h-125 order-2 mt-6 lg:mt-0">
            <Image
              src={sef}
              alt="Individual savings illustration"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Mobile Button */}
          <div className="flex flex-col gap-3 mt-4 md:hidden order-3">
            <Button
              text={HERO_CONTENT.primaryBtn.text}
              onClick={() => setIsOpen(true)}
            />
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
}
