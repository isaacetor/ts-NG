import React from 'react';
import Image from 'next/image';

const NotJustAnotherApp = () => {
  return (
    <section className="w-full bg-white px-6 py-12 lg:py-28">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-16">
        {/* Text Content: Top on mobile, Left on desktop */}
        <div className="w-full lg:max-w-xl text-left">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-[1.1] mb-8 tracking-tight">
            Not Just Another <br className="hidden xs:block" /> Finance App
          </h2>

          <div className="space-y-6 lg:space-y-8">
            <div>
              <p className="text-xl md:text-2xl text-[#1A1A1A] font-medium mb-4">
                Nigeria has apps for:
              </p>
              <ul className="space-y-3 ml-1">
                {['Saving', 'Loans', 'Payments'].map((item) => (
                  <li
                    key={item}
                    className="flex items-center text-xl md:text-2xl text-[#4A4A4A]">
                    <span className="mr-3 text-2xl text-[#A1A1A1]">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-6">
              <p className="text-xl md:text-2xl text-[#1A1A1A] font-semibold leading-snug">
                But none help you build complete{' '}
                <br className="hidden md:block" /> financial stability.
              </p>
              <p className="text-xl md:text-2xl text-[#0A0A0A] font-bold mt-2">
                TrybeSave changes that.
              </p>
            </div>
          </div>
        </div>

        {/* Visual: Bottom on mobile, Right on desktop */}
        <div className="w-full relative flex justify-center">
          <div className="absolute inset-0 bg-purple-50/50 rounded-full blur-[80px] -z-10 scale-75" />
          <div className="w-full max-w-[500px]">
            <Image
              src="/content_1_image.png"
              alt="Dashboard overview"
              width={500}
              height={600}
              className="w-full h-auto drop-shadow-2xl rounded-2xl lg:rounded-[32px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotJustAnotherApp;
