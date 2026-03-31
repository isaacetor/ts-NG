import React from 'react';

const CreditGrowth = () => {
  return (
    <section className="w-full bg-[#26022A] px-6 py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center">
      <div className="max-w-4xl mx-auto space-y-6 md:space-y-8">
        {/* Small Overline Label */}
        <span className="text-white/80 text-lg md:text-xl font-medium tracking-wide">
          Growth
        </span>

        {/* Main Section Title */}
        <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-tighter tracking-tight">
          Credit that grows with you
        </h2>

        {/* Descriptive Subtext */}
        <p className="text-xl md:text-2xl lg:text-3xl text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
          Instead of risky loans immediately, TrybeSave helps you grow into
          responsible borrowing. Your credit limits increase gradually based on
          financial discipline.
        </p>
      </div>
    </section>
  );
};

export default CreditGrowth;
