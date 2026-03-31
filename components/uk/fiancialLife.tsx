import React from 'react';

const FiancialLife = () => {
  return (
    <section className="relative bg-white py-10 sm:py-12 md:py-16 lg:py-20 overflow-hidden flex items-center justify-center">
      {/* subtle ambient glow */}
      <div className="absolute -top-24 -right-10 sm:-top-32 sm:-right-20 md:-top-36 md:-right-24 lg:-top-40 lg:-right-32 w-70 sm:w-90 md:w-105 lg:w-125 h-70 sm:h-90 md:h-105 lg:h-125 bg-pink-100/30 blur-[100px] sm:blur-[120px] md:blur-[140px] rounded-full pointer-events-none" />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-12">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-4 sm:mb-6">
          Built for Real Financial Life
        </h2>
      </div>
    </section>
  );
};

export default FiancialLife;
