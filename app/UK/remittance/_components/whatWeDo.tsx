'use client';
import React from 'react';

const Remit_WhatWeDo: React.FC = () => {
  const features = [
    {
      label: 'Rates',
      title: 'Find the best exchange rates available',
      description: 'Your family gets more when you spend less',
    },
    {
      label: 'Tracking',
      title: 'See where your money goes each month',
      description: 'Know your total support sent and stay organized',
    },
    {
      label: 'Support',
      title: 'Plan family support with structured budgets',
      description: 'Help others without sacrificing your own stability',
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-5xl md:text-6xl font-bold text-black mb-6">
          What we do
        </h2>
        <p className="text-[#3D003E] text-lg md:text-xl font-medium">
          Compare rates across providers before sending
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group  border border-[#F3E8F3] rounded-2xl p-10 flex flex-col justify-between min-h-[380px] transition-all duration-300 hover:shadow-lg hover:border-[#AA0EBA]/20">
            <div className="space-y-6">
              <span className="text-sm font-bold text-black uppercase tracking-wider">
                {feature.label}
              </span>
              <h3 className="text-3xl lg:text-4xl font-bold text-[#3D003E] leading-tight">
                {feature.title}
              </h3>
            </div>

            <p className="text-gray-700 text-lg font-light leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Remit_WhatWeDo;
