import React from 'react';
import Image from 'next/image';

const CreditThatWorks = () => {
  const loanAppCons = [
    'Charge high interest',
    'Trap users in debt',
    'Harass users',
  ];
  const trybeSavePros = [
    'Saving consistently',
    'Managing money responsibly',
    'Building your Stability Score',
  ];

  return (
    <section className="w-full bg-white px-6 py-20 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Centered Main Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] tracking-[0.05em] uppercase">
            CREDIT THAT WORKS FOR YOU
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Side: Top on Mobile, Left on Desktop */}
          <div className="w-full lg:w-1/2 space-y-12 order-1">
            {/* Negative Section */}
            <div className="space-y-4">
              <p className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">
                Most loan apps:
              </p>
              <ul className="space-y-3">
                {loanAppCons.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-xl md:text-2xl lg:text-3xl text-[#4A4A4A] font-light">
                    <span className="mr-4 text-[#0A0A0A]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Positive Section */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">
                  TrybeSave is different.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1A1A1A]">
                  You unlock credit by:
                </p>
              </div>
              <ul className="space-y-3">
                {trybeSavePros.map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-xl md:text-2xl lg:text-3xl text-[#4A4A4A] font-light">
                    <span className="mr-4 text-[#0A0A0A]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A0A0A] pt-4">
              Credit is earned — not forced.
            </p>
          </div>

          {/* Visual Side: Bottom on Mobile, Right on Desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2">
            <div className="relative w-full max-w-[580px]">
              {/* Soft glow to lift the cards */}
              <div className="absolute inset-0 bg-white/50 rounded-full blur-[100px] -z-10" />

              <Image
                src="/content_7_image.png"
                alt="Credit score and stability graph comparison"
                width={580}
                height={450}
                className="w-full h-auto drop-shadow-[0_30px_70px_rgba(0,0,0,0.1)] rounded-[32px]"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditThatWorks;
