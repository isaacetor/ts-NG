'use client';

import Image from 'next/image';
import hero from '../../../public/coupleHeroImg.jpg';
import { useWaitlistModal } from '@/context/WaitlistModalContext';

const SavingsCouplesHero: React.FC = () => {
  const { openModal } = useWaitlistModal();
  return (
    <section className="bg-white py-12 md:py-16 px-5 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto border border-gray-200 rounded-[10px] overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center">
          {/* Left Content Column */}
          <div className="p-6 md:p-16 lg:p-20 space-y-6 md:space-y-8">
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold text-black leading-[1.15] tracking-tight">
              Save better <br />
              together
            </h1>

            <p className="text-gray-700 text-[15px] md:text-xl font-medium leading-relaxed max-w-md">
              TrybeSave helps couples manage money, save for shared goals, and
              stay financially aligned without stress or confusion.
            </p>

            <div className="flex items-center gap-3 pt-2 md:pt-4">
              <button
                onClick={openModal}
                className="bg-[#E600FF] hover:bg-[#c400d9] text-white 
                       px-5 py-2.5 text-[13px]
                       md:px-8 md:py-3 md:text-sm
                       rounded-lg md:rounded-xl
                       font-semibold md:font-bold
                       transition-all shadow-md active:scale-95 whitespace-nowrap">
                Get Early Access
              </button>
            </div>
          </div>

          {/* Right Illustration Column */}
          <div className="relative min-h-70 md:min-h-100 lg:min-h-150 bg-[#FDFDFD]">
            <Image
              src={hero}
              alt="Couples saving together illustration"
              fill
              className="object-contain p-6 md:p-8 lg:p-12"
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SavingsCouplesHero;
