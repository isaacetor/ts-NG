import React from 'react';
import Image from 'next/image';

const TrackSpending = () => {
  const categories = ['Food', 'Transport', 'Airtime', 'Rent', 'Subscriptions'];

  return (
    <section className="w-full bg-white px-6 py-20 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto">
        {/* Centered Main Title */}
        <div className="text-center mb-16 md:mb-24">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] tracking-[0.05em] uppercase">
            TRACK SPENDING
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Text Side: Top on Mobile, Left on Desktop */}
          <div className="w-full lg:w-1/2 space-y-8 lg:space-y-10">
            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A0A0A] leading-tight">
                Know Where Your Money Goes
              </h3>
              <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-[#1A1A1A]">
                See exactly how you spend:
              </p>
            </div>

            <ul className="space-y-4 lg:space-y-5">
              {categories.map((item) => (
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
              Clarity leads to better decisions.
            </p>
          </div>

          {/* Visual Side: Bottom on Mobile, Right on Desktop */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[580px]">
              {/* Modern soft background element */}
              <div className="absolute inset-0 bg-slate-50 rounded-3xl blur-2xl -z-10 translate-x-4 translate-y-4" />

              <Image
                src="/content_4_image.png"
                alt="Track spending category breakdown"
                width={580}
                height={400}
                className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,0,0,0.08)] rounded-2xl lg:rounded-3xl border border-gray-50"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackSpending;
