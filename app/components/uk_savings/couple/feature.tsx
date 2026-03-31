import { PiggyBank } from 'lucide-react';
import React from 'react';

const SavingsCouplesFeatures: React.FC = () => {
  const features = [
    {
      title: 'Shared savings pots for your goals',
      description:
        'Create pots for travel, home, wedding, family, or anything that matters',
      icon: (
        <PiggyBank
          size={40}
          strokeWidth={1.5}
        />
      ),
      size: 'medium',
    },
    {
      label: 'Savings',
      title: 'Transparent contributions everyone can see',
      description:
        'Know exactly how much each partner contributed and how close you are',
      size: 'medium',
    },
    {
      label: 'Transparency',
      title: 'Plan your future as a financial unit',
      description:
        'Set shared goals like buying a home, planning a wedding, or building security',
      size: 'small',
    },

    {
      title: 'Couples stability score measures financial strength',
      description:
        'Watch your combined savings buffer, consistency, and progress improve over time',
      size: 'medium',
    },
    {
      title: 'Automatic saving removes the friction',
      description:
        'Set rules for weekly contributions, round-ups, or payday deposits and forget it',
      size: 'large',
    },

    {
      label: 'Flexibility',
      title: 'Built for couples in any situation',
      description:
        'New couples, married couples, long-distance partners, anyone building together',
      size: 'small',
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight leading-tight">
            What makes TrybeSave work
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            Six tools designed for couples saving together
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`break-inside-avoid bg-[#FEEFFF] border border-[#6A0973] rounded-lg p-8 flex flex-col justify-between transition-all duration-300 hover:shadow-md ${
                feature.size === 'large'
                  ? 'min-h-112.5'
                  : feature.size === 'medium'
                    ? 'min-h-87.5'
                    : 'min-h-70'
              }`}>
              <div className="space-y-6">
                {feature.icon && (
                  <div className="text-black">{feature.icon}</div>
                )}
                {feature.label && (
                  <span className="text-xs font-bold text-black uppercase tracking-widest">
                    {feature.label}
                  </span>
                )}
                <h3 className="text-4xl font-semibold text-black leading-tight">
                  {feature.title}
                </h3>
              </div>

              <div className="mt-6 space-y-6">
                <p className="text-gray-700 text-lg font-light leading-relaxed">
                  {feature.description}
                </p>
                {/* <button className="flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity">
                  More
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SavingsCouplesFeatures;
