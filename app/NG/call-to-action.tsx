'use client';

import { useState } from 'react';
import WaitlistModal from '../components/_utils/WaitlistModal';

const CallToAction = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <section className="w-full bg-[#310242] px-4 py-16 md:py-24 relative overflow-hidden flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-100 pointer-events-none"
          style={{
            backgroundImage: `url('data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="1000" height="600" viewBox="0 0 1000 600"%3E%3Cg fill="none" stroke="%23E7C9EF" stroke-width="3" opacity="0.35"%3E%3Cpath d="M-100,300 C50,150 200,450 400,300 C600,150 750,450 900,300 C1050,150 1200,450 1350,300" /%3E%3Cpath d="M-100,200 C50,50 200,350 400,200 C600,50 750,350 900,200 C1050,50 1200,350 1350,200" /%3E%3Cpath d="M-100,400 C50,250 200,550 400,400 C600,250 750,550 900,400 C1050,250 1200,550 1350,400" /%3E%3Cpath d="M-100,250 C50,100 200,400 400,250 C600,100 750,400 900,250 C1050,100 1200,400 1350,250" /%3E%3Cpath d="M-100,350 C50,200 200,500 400,350 C600,200 750,500 900,350 C1050,200 1200,500 1350,350" /%3E%3Cpath d="M-100,150 C50,0 200,300 400,150 C600,0 750,300 900,150 C1050,0 1200,300 1350,150" /%3E%3Cpath d="M-100,450 C50,300 200,600 400,450 C600,300 750,600 900,450 C1050,300 1200,600 1350,450" /%3E%3Cpath d="M-100,100 C50,-50 200,250 400,100 C600,-50 750,250 900,100 C1050,-50 1200,250 1350,100" /%3E%3Cpath d="M-100,500 C50,350 200,650 400,500 C600,350 750,650 900,500 C1050,350 1200,650 1350,500" /%3E%3C/g%3E%3C/svg%3E')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />

        <div className="relative z-10 w-full max-w-6xl bg-white/90 backdrop-blur-xl rounded-lg md:rounded-xl px-6 py-16 md:py-28 shadow-2xl border border-white/20">
          <div className="flex flex-col items-center justify-center text-center space-y-6 md:space-y-8">
            <div className="space-y-1">
              <h2 className="text-3xl md:text-5xl font-black text-[#000000] tracking-tight leading-snug">
                Take Control of Your Money Today
              </h2>
              <h2 className="text-3xl md:text-5xl font-black text-[#000000] tracking-tight leading-snug">
                Stop guessing.
              </h2>
            </div>

            <p className="text-lg md:text-xl text-[#000000] font-normal max-w-xl mx-auto">
              Start building financial stability.
            </p>

            <div className="pt-4 md:pt-6">
              {/* BUTTON NOW OPENS MODAL */}
              <button
                onClick={() => setIsOpen(true)}
                className="bg-[#5e0762] hover:bg-[#48054a] text-white text-lg md:text-xl font-bold px-10 py-4 rounded-lg transition-all duration-200 shadow-md transform ">
                Join TrybeSave
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* MODAL */}
      <WaitlistModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default CallToAction;
