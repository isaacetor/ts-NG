import React from 'react';

const SavingFriction: React.FC = () => {
  return (
    <section className="bg-[#FEF3FF] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Left Side: Large Heading */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-black leading-[1.1] tracking-tight">
            Automatic saving removes the friction
          </h2>
        </div>

        {/* Right Side: Description and Custom List */}
        <div className="w-full lg:w-1/2 space-y-8">
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-medium">
            Set rules once and let your savings grow without thinking about it.
            Weekly contributions, round-ups from spending, or deposits on
            payday—whatever works for you both.
          </p>

          <ul className="space-y-4">
            {[
              'Weekly contributions',
              'Round-up savings',
              'Payday deposits',
            ].map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-3 text-black font-bold text-lg md:text-xl">
                <span className="w-1.5 h-1.5 bg-black rounded-full" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SavingFriction;
