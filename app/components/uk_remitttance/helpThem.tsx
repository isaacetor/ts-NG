'use client';
import React from 'react';
import Image from 'next/image';
import helpImg from '../../../public/helpImg.png';

const Remit_HelpThem: React.FC = () => {
  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      {/* Top Heading Section */}
      <div className="max-w-7xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
          Help them and yourself
        </h2>
        <p className="text-gray-700 text-lg md:text-xl font-medium">
          Send money home without losing ground on your own goals
        </p>
      </div>

      {/* Feature Cards Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Left Card: Family Support (Small) */}
        <div className="md:col-span-4  rounded-2xl p-10 flex flex-col justify-center border border-[#F3E8F3]">
          <div className="space-y-6">
            <span className="text-sm font-bold text-black uppercase tracking-wider">
              Family
            </span>
            <h3 className="text-4xl font-bold text-black leading-tight">
              Support those who depend on you
            </h3>
            <p className="text-gray-700 text-lg font-light leading-relaxed">
              Structure your remittances and keep commitments clear
            </p>
          </div>
        </div>

        {/* Right Card: Future Savings with Image (Large) */}
        <div className="md:col-span-8  rounded-2xl overflow-hidden flex flex-col md:flex-row border border-[#F3E8F3]">
          {/* Text Content */}
          <div className="p-10 md:w-1/2 flex flex-col justify-center space-y-6">
            <span className="text-sm font-bold text-black uppercase tracking-wider">
              Future
            </span>
            <h3 className="text-4xl font-bold text-black leading-tight">
              Build savings while sending money home
            </h3>
            <p className="text-gray-700 text-lg font-light leading-relaxed">
              Plan ahead so you secure what matters to you
            </p>
          </div>

          {/* Image Content */}
          <div className="md:w-1/2 relative min-h-75">
            <Image
              src={helpImg}
              alt="Person planning their future"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Remit_HelpThem;
