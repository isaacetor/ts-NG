import React from 'react';
import Image from 'next/image';

const CashbackRewards = () => {
  const cashbackItems = ['Fuel', 'Airtime', 'Groceries', 'Transport'];

  return (
    <section className="w-full bg-[#F0F5FA] px-6 py-20 md:py-32 lg:py-40 border-y">
      <div className="max-w-7xl mx-auto">
        {/* Centered Main Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] tracking-[0.05em] uppercase">
            CASHBACK & REWARDS
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Visual Side: Top on mobile (showing the reward card first), Left on desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="relative w-full max-w-[500px]">
              {/* Subtle accent glow to make the purple card pop */}
              <div className="absolute inset-0 bg-purple-200/30 rounded-full blur-[100px] -z-10 scale-75" />

              <Image
                src="/content_5_image.png"
                alt="TrybeSave Cashback and Referral Rewards UI"
                width={500}
                height={500}
                className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)] rounded-3xl lg:rounded-[40px]"
                priority
              />
            </div>
          </div>

          {/* Text Side: Top on mobile for context, Right on desktop */}
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10 order-1 lg:order-2">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A0A0A] leading-tight">
                Get Money Back When You Spend
              </h3>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1A1A1A]">
                Earn cashback on:
              </p>
            </div>

            <ul className="space-y-4 lg:space-y-5">
              {cashbackItems.map((item) => (
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

            <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A0A0A] pt-4">
              Your spending becomes savings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CashbackRewards;
