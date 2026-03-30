import React from 'react';
import Image from 'next/image';

const BuildSavings = () => {
  const rules = ['Weekly saving', 'Monthly saving', 'Goal-based saving'];

  return (
    <section className="w-full bg-white px-6 py-12 lg:py-28 border-b">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
        {/* Image: Bottom on mobile for better text flow, Left on desktop */}
        <div className="w-full order-2 lg:order-1 flex justify-center">
          <div className="w-full max-w-[500px]">
            <Image
              src="/content_3_image.png"
              alt="Savings goals UI"
              width={500}
              height={300}
              className="w-full h-auto drop-shadow-2xl rounded-3xl"
            />
          </div>
        </div>

        {/* Text Content: Top on mobile, Right on desktop */}
        <div className="w-full order-1 lg:order-2 space-y-6 lg:space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0A0A] tracking-tight">
              Build Savings Without Stress
            </h2>
            <p className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A0A0A]">
              Set simple saving rules:
            </p>
          </div>

          <ul className="space-y-4">
            {rules.map((rule) => (
              <li
                key={rule}
                className="flex items-center text-2xl md:text-3xl lg:text-4xl text-[#1A1A1A] font-light">
                <span className="mr-4 text-3xl text-[#0A0A0A]">•</span>
                {rule}
              </li>
            ))}
          </ul>

          <p className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0A0A0A]">
            Your savings grow before you spend.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BuildSavings;
