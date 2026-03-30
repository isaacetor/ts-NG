import React from 'react';
import Image from 'next/image';

const UnfairCredit = () => {
  return (
    <section className="w-full bg-[#FDF2F9] px-6 py-20 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Text Content: Stays on top for mobile context */}
        <div className="w-full lg:w-1/2 order-1 space-y-8 lg:space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-tight tracking-tight">
              Credit in Nigeria is often unfair
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl font-normal text-[#1A1A1A] leading-relaxed max-w-2xl">
              Many Nigerians turn to loan apps during financial emergencies. But
              these apps come with extremely high interest rates, hidden
              charges, harassment when repayments are late, and no reward for
              responsible financial behaviour.
            </p>
          </div>

          <div className="pt-4">
            <a
              href="/how-it-works" // Adjust path as needed
              className="group flex items-center text-xl md:text-2xl font-bold text-[#5e0762] transition-colors">
              <span className="opacity-80 group-hover:opacity-100 transition-opacity">
                Learn More
              </span>

              <svg
                className="ml-3 w-7 h-7 transform transition-transform group-hover:translate-x-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* Visual: Bottom on mobile, Right on desktop */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-2">
          <div className="relative w-full max-w-[580px]">
            {/* Soft decorative backdrop element */}
            <div className="absolute inset-0 bg-white rounded-full blur-[100px] -z-10 scale-90" />

            <Image
              src="/credit/ndcreditt.png" // Replace with actual image path
              alt="Visualizing the challenges of credit in Nigeria, including high fees, rejected applications, and financial stress."
              width={580}
              height={580}
              className="w-full h-auto drop-shadow-[0_30px_60px_rgba(94,7,98,0.1)]"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default UnfairCredit;
