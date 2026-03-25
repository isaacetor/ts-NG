import React from 'react';

const Remit_Features: React.FC = () => {
  const featureGroups = [
    {
      label: 'Saving',
      title: 'Save money automatically without thinking',
      description: 'Set it and let it work for you',
      link: false,
      size: 'medium',
    },
    {
      label: '',
      title: 'Track your spending with clarity',
      description: 'See where your money goes each month',
      link: false,
      size: 'large',
    },
    {
      label: '',
      title: 'Support family with intention',
      description: 'Plan and manage remittances without guilt',
      link: false,
      size: 'large',
    },
    {
      label: 'Goals',
      title: 'Plan your financial future step by step',
      description: 'Build toward what matters most',
      link: false,
      size: 'medium',
    },

    {
      label: 'Strength',
      title: 'Understand your real financial position',
      description: "Know where you stand and where you're going",
      link: false,
      size: 'medium',
    },

    {
      label: '',
      title: 'Balance responsibility with progress',
      description: 'Do more than survive, actually build something',
      link: false,
      size: 'large',
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-bold text-black uppercase tracking-widest">
            Features
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
            What you can do
          </h2>
          <p className="text-gray-700 text-lg md:text-xl font-medium">
            Everything built to handle your financial life completely
          </p>
        </div>

        {/* Masonry-style Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {featureGroups.map((feature, index) => (
            <div
              key={index}
              className={`break-inside-avoid bg-white border border-gray-200 rounded-2xl p-8 flex flex-col hover:shadow-sm transition-shadow duration-300 ${
                feature.size === 'large' ? 'min-h-100' : 'min-h-75'
              }`}>
              <div className="flex-1 space-y-4">
                {feature.label && (
                  <span className="text-xs font-bold text-black uppercase tracking-wider">
                    {feature.label}
                  </span>
                )}
                <h3 className="text-3xl font-bold text-black leading-tight">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {feature.link && (
                <button className="mt-8 flex items-center gap-2 text-black font-semibold hover:opacity-70 transition-opacity">
                  Explore
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
                </button>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Remit_Features;
