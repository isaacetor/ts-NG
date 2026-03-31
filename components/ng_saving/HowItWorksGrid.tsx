import React from 'react';
import Image from 'next/image';

const HowItWorksGrid = () => {
  const steps = [
    {
      step: 'Step one',
      title: 'Create your savings pots',
      description:
        'Set dedicated goals for emergency funds, rent, travel, or anything else',
      image: '/saving/saving2.png',
      isLarge: true,
    },
    {
      step: 'Step two',
      title: 'Automate your savings',
      description:
        'Small consistent deposits grow into meaningful amounts over time',
      image: '/saving/saving3.png',
      isLarge: false,
    },
    {
      step: 'Step three',
      title: 'Track your progress',
      description:
        'Watch your goals come closer with clear visibility into your savings',
      image: '/saving/saving4.png',
      isLarge: false,
    },
  ];

  return (
    <section className="py-30 px-6 bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
            How it works
          </h2>
          <p className="text-gray-600 text-lg">
            Three simple steps to financial discipline
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {steps.map((item, index) => (
            <div
              key={index}
              className={`bg-white rounded-2xl border border-gray-100 overflow-hidden flex flex-col justify-between ${
                item.isLarge ? 'md:col-span-2 flex-row' : 'md:col-span-1'
              }`}>
              <div className={`p-8 ${item.isLarge ? 'w-1/2' : 'w-full'}`}>
                <span className="text-sm font-medium text-gray-500 mb-4 block">
                  {item.step}
                </span>
                <h3 className="text-2xl md:text-3xl font-extrabold text-black mb-4 leading-tight">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div
                className={`relative ${item.isLarge ? 'w-1/2 h-full' : 'w-full h-64'}`}>
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksGrid;
