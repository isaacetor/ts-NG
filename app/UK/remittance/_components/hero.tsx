'use client';

import React from 'react';
import Image from 'next/image';
import heroImage from '../../../../public/remit_hero.png';
import { useWaitlistModal } from '@/app/context/WaitlistModalContext';

const Remit_Hero: React.FC = () => {
  const { openModal } = useWaitlistModal();

  return (
    <section className="bg-white min-h-150 w-full flex items-center px-5 py-12 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-10 md:gap-12">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6 md:space-y-8 flex-1">
          <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#64096C] leading-[1.15]">
            Send money <br />
            home smarter
          </h1>

          <p className="text-[15px] md:text-xl text-gray-700 max-w-lg leading-relaxed font-normal md:font-light">
            Find the best rates before you send. Track every transfer home and
            build your own future while supporting family.
          </p>

          <button
            onClick={openModal}
            className="bg-[#E600FF] hover:bg-[#c400d9] text-white 
                         px-5 py-2.5 text-[13px]
                         md:px-8 md:py-3 md:text-sm
                         rounded-md
                         font-semibold md:font-bold
                         transition-colors duration-300 
                         shadow-sm w-fit whitespace-nowrap active:scale-95">
            Get Early Access
          </button>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center lg:justify-end items-center">
          <div className="w-full  md:max-w-md lg:max-w-lg">
            <Image
              src={heroImage}
              alt="Man working and thinking"
              className="object-contain w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Remit_Hero;
