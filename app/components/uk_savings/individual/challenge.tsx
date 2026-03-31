import React from 'react';

export default function IndividualSavingsChallenge() {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        {/* Main Heading */}
        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-black tracking-tight leading-[1.1]">
          Saving money is harder <br className="hidden md:block" />
          than it should be
        </h2>

        {/* Supportive Text */}
        <div className="max-w-2xl mx-auto">
          <p className="text-gray-600 text-lg md:text-xl font-medium leading-relaxed">
            Many people struggle to build savings even when they have good
            intentions. Without the right tools, saving money often becomes
            inconsistent and difficult to maintain.
          </p>
        </div>
      </div>
    </section>
  );
}
