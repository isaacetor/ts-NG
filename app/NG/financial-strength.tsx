import React from 'react';
import Image from 'next/image';

const FinancialStrength = () => {
  const metrics = [
    'Savings consistency',
    'Spending behavior',
    'Financial discipline',
    'Progress toward goals',
  ];

  return (
    <section className="w-full bg-white px-6 py-20 md:py-32 border-b">
      <div className="max-w-7xl mx-auto">
        {/* Centered Main Title */}
        <div className="text-center mb-16 ">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] tracking-[0.05em] uppercase">
            UNDERSTAND YOUR FINANCIAL STRENGTH
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Side: Top on Mobile, Left on Desktop */}
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10 order-1">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A0A0A] leading-tight">
                Your Stability Score shows how{' '}
                <br className="hidden md:block" /> financially secure you are.
              </h3>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1A1A1A]">
                Based on:
              </p>
            </div>

            <ul className="space-y-4 lg:space-y-5">
              {metrics.map((item) => (
                <li
                  key={item}
                  className="flex items-center text-xl md:text-2xl lg:text-3xl text-[#4A4A4A] font-light">
                  <span className="mr-4 text-3xl leading-none text-[#0A0A0A]">
                    •
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Visual Side: Bottom on Mobile, Right on Desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-[580px]">
              {/* Subtle dark glow to complement the score dashboard image */}
              <div className="absolute inset-0 bg-slate-200/50 rounded-3xl blur-3xl -z-10 scale-90" />

              <Image
                src="/content_6_image.png"
                alt="Stability Score dashboard showing metrics for savings, spending, and habits"
                width={580}
                height={350}
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.18)] rounded-2xl lg:rounded-[32px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinancialStrength;
