import React from 'react';
import Image from 'next/image';
import compare from '../../public/1.jpg';
import track from '../../public/2.jpg';
import lan from '../../public/3.jpg';

const Remit_Steps: React.FC = () => {
  const steps = [
    {
      image: compare,
      title: 'Compare rates across all providers',
      description: 'See the exchange rates and fees before you commit.',
    },
    {
      image: track,
      title: 'Track transfers month to month',
      description:
        "Know exactly where your money goes and how much you've sent.",
    },
    {
      image: lan,
      title: 'Plan budgets for family support',
      description: 'Set limits and build savings alongside your remittances.',
    },
  ];

  return (
    <section className="bg-[#FDF5FD] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight leading-[1.1]">
            Three steps to smarter remittances
          </h2>
          <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
            Start by comparing what&apos;s available. Then track what you send.
            Finally, plan what comes next.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center">
              {/* Image Container with subtle rounding matching screenshot */}
              <div className="relative w-full aspect-[4/3] mb-8 rounded-xl overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-bold text-black leading-tight px-4">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed max-w-[280px] mx-auto">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="flex justify-center mt-12">
          <button className="group flex items-center gap-2 text-black font-bold text-lg hover:opacity-70 transition-opacity">
            Start
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default Remit_Steps;
