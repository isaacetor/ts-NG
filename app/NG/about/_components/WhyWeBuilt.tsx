import React from 'react';

const WhyWeBuilt = () => {
  const communityPoints = [
    'Moved abroad to build better opportunities',
    'Support families back home',
    'Send money across borders',
    'Balance responsibilities across countries',
  ];

  return (
    <section className="relative bg-[#FDF5FD] overflow-hidden py-28 px-6 md:px-16 lg:px-24 text-black">
      {/* Ambient gradient glow */}
      <div className="absolute -top-32 right-0 w-95 h-95 bg-purple-300/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-90 h-90 bg-pink-300/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 items-start">
        {/* Left Side: Sticky Header */}
        <div className="md:sticky md:top-28 self-start space-y-4">
          <span className="text-[13px] font-bold uppercase tracking-tight">
            Why we built trybesave
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight max-w-md">
            We started TrybeSave with a simple question:
          </h2>
          {/* subtle gradient underline */}
          <div className="mt-6 w-16 h-0.75 bg-linear-to-r from-purple-600 to-pink-500 rounded-full" />
        </div>

        {/* Right Side: Description & List */}
        <div className="mt-2 md:mt-12 space-y-10">
          <div>
            <p className="font-bold text-[16px] mb-6">
              What if financial tools helped people build stability before
              offering credit?
            </p>
            <p className="space-y-4 text-[17px] md:text-[18px] leading-relaxed opacity-90">
              In Nigeria today, millions of people depend on loan apps during
              financial emergencies. Unfortunately, many of these platforms
              charge extremely high interest rates and push users into debt
              cycles. This system does not reward financial discipline. It often
              punishes it. We believe credit should work differently. Credit
              should reward people who save consistently, manage their money
              responsibly, and build healthy financial habits. That belief is
              the foundation of TrybeSave. Redefining Credit in Nigeria
              TrybeSave is building a new approach to financial services.
              Instead of encouraging risky borrowing, we help people build
              financial strength first.
            </p>
            <p className="font-bold text-[16px] my-6">
              With TrybeSave, users can:
            </p>

            <p className="text-base md:text-[18px] leading-relaxed opacity-90">
              Build consistent saving habits <br />
              Track and control spending <br />
              Earn cashback from everyday purchases <br />
              Understand their financial health through a Stability Score
            </p>

            <p className="text-[17px] md:text-[18px] leading-relaxed opacity-90 mt-6">
              As users demonstrate financial discipline, they unlock access to
              responsible credit. <br />
              This creates a system where credit is earned through good
              financial behaviour — not desperation. <br />
              A Financial Platform Built for Nigerians TrybeSave is designed for
              the everyday realities of life in Nigeria. <br />
              For salary earners trying to build savings. <br />
              For young professionals managing their income for the first time.{' '}
              <br />
              For entrepreneurs planning business goals. <br />
              For families trying to build financial security. <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyWeBuilt;
