import React from 'react';
import Image from 'next/image';

const WhyDifferent = () => {
  const existingApps = ['Saving', 'Loans', 'Payments'];
  const trybeSaveBenefits = [
    { title: 'Save consistently', desc: 'even on an irregular income' },
    {
      title: 'Access credit early',
      desc: 'based on your savings, not your connections',
    },
    { title: 'Get paid early', desc: 'when life can’t wait for payday' },
    {
      title: 'Earn cashback',
      desc: 'every time you spend with TrybeSave and our partners',
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-20 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Centered Main Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] tracking-[0.05em] uppercase">
            WHY TRYBESAVE IS DIFFERENT
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Visual Side: Bottom on Mobile, Left on Desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[540px]">
              {/* Subtle background depth */}
              <div className="absolute inset-0 bg-slate-50 rounded-[40px] blur-2xl -z-10 translate-x-4 translate-y-4" />

              <Image
                src="/content_8_image.png"
                alt="TrybeSave Opportunities interface"
                width={540}
                height={500}
                className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.1)] rounded-[32px]"
                priority
              />
            </div>
          </div>

          {/* Text Side: Top on Mobile, Right on Desktop */}
          <div className="w-full lg:w-1/2 space-y-10 order-1 lg:order-2">
            {/* Context Section */}
            <div className="space-y-6">
              <div className="space-y-4">
                <p className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">
                  Nigeria already has apps for:
                </p>
                <ul className="space-y-2 ml-2">
                  {existingApps.map((item) => (
                    <li
                      key={item}
                      className="flex items-center text-xl md:text-2xl lg:text-3xl text-[#4A4A4A] font-light">
                      <span className="mr-4 text-[#0A0A0A]">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-xl md:text-2xl lg:text-3xl font-medium text-[#1A1A1A] leading-snug">
                But none are built for how everyday Nigerians actually live and
                earn.
              </p>
            </div>

            {/* Difference Section */}
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-2xl md:text-3xl font-bold text-[#0A0A0A]">
                  TrybeSave is different.
                </p>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1A1A1A]">
                  We help you:
                </p>
              </div>

              <ul className="space-y-6">
                {trybeSaveBenefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="text-lg md:text-xl lg:text-2xl leading-relaxed text-[#1A1A1A]">
                    <span className="font-bold">{benefit.title}</span>
                    <span className="text-[#4A4A4A] font-light">
                      {' '}
                      — {benefit.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Closing statement */}
            <div className="pt-2.5">
              <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A0A0A] leading-tight">
                Because managing money shouldn’t be stressful — it should work
                with your reality, not against it.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyDifferent;
