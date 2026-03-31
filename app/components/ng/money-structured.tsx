import React from 'react';
import Image from 'next/image';

const MoneyStructured = () => {
  const benefits = [
    { title: 'Save automatically', desc: 'even on unpredictable income' },
    { title: 'Track spending clearly', desc: 'know where your money goes' },
    {
      title: 'Get paid early',
      desc: 'access part of your salary through our partner companies',
    },
    {
      title: 'Earn cashback',
      desc: 'when you spend with TrybeSave and our partners',
    },
    { title: 'Unlock responsible credit', desc: 'based on your savings' },
    {
      title: 'Build financial discipline',
      desc: 'stay in control of your money',
    },
  ];

  return (
    <section className="w-full bg-[#FEF3FF] px-6 py-12 lg:py-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-20">
        {/* Text Content: Stays on top for mobile context */}
        <div className="w-full lg:order-2 space-y-8 lg:space-y-10">
          <div className="space-y-3">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-[#0A0A0A] tracking-tight">
              Your Money. Structured.
            </h2>
            <p className="text-xl md:text-2xl font-bold text-[#0A0A0A]">
              TrybeSave helps you:
            </p>
          </div>

          <ul className="space-y-5">
            {benefits.map((benefit, index) => (
              <li
                key={index}
                className="text-lg md:text-xl lg:text-2xl leading-snug text-[#1A1A1A]">
                <span className="font-bold">{benefit.title}</span>
                <span className="text-[#4A4A4A] font-light">
                  {' '}
                  — {benefit.desc}
                </span>
              </li>
            ))}
          </ul>

          <p className="text-xl md:text-2xl lg:text-3xl font-black text-[#0A0A0A]">
            All in one system.
          </p>
        </div>

        {/* Visual: Bottom on mobile, Left on desktop */}
        <div className="w-full lg:order-1 flex justify-center">
          <div className="w-full max-w-[500px]">
            <Image
              src="/content_2_image.png"
              alt="Spending structure"
              width={500}
              height={600}
              className="w-full h-auto drop-shadow-xl rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MoneyStructured;
