import React from 'react';

const AboutUs = () => {
  return (
    <section className="relative py-28 px-6 md:px-16 lg:px-24 bg-white overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute -top-32 right-0 w-100 h-100 bg-purple-300/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-95 h-95 bg-pink-300/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28">
        {/* Left Column: Sticky Mission */}
        <div className="md:sticky md:top-28 self-start">
          <h2 className="mt-4 text-4xl md:text-5xl lg:text-[64px] font-bold text-black leading-[1.05] tracking-tight">
            Building a Better <br /> Financial System for <br /> Nigerians
          </h2>

          {/* subtle accent line */}
          <div className="mt-6 w-16 h-[3px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
        </div>

        {/* Right Column: About Us */}
        <div className="flex flex-col space-y-10 text-[#1A1A1A] relative z-10">
          <div className="space-y-7 text-[18px] leading-[1.6] font-normal opacity-90">
            <p>
              Nigeria is full of hardworking people building businesses,
              supporting families, and chasing opportunities. Yet for many
              Nigerians, managing money is still unnecessarily difficult. Saving
              consistently is hard. Accessing fair credit is even harder. Many
              financial tools today focus on spending or instant loans. But they
              rarely help people build long-term financial stability.
            </p>

            <p>At TrybeSave, we believe there is a better way.</p>
          </div>

          {/* Heart Icon / Graphic */}
          <div className="pt-6">
            <div className="relative w-16 h-14">
              {/* Purple Heart Shape */}
              <svg
                viewBox="0 0 100 100"
                className="w-full h-full fill-[#AA0EBA]">
                <path d="M50 88.9L42.8 82.3C17.1 58.9 0 43.4 0 26.7C0 13.1 10.7 2.4 24.3 2.4C32 2.4 39.4 5.9 44.3 11.5L50 18L55.7 11.5C60.6 5.9 68 2.4 75.7 2.4C89.3 2.4 100 13.1 100 26.7C100 43.4 82.9 58.9 57.2 82.4L50 88.9Z" />
              </svg>
              {/* Tan Underline Stroke */}
              <div className="absolute -bottom-1 -left-2 w-14 h-2 bg-[#D1A37E] rounded-full rotate-[-5deg] opacity-60"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
