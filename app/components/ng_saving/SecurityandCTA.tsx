'use client';

import WaitlistModal from '@/app/components/utils/WaitlistModal';
import Image from 'next/image';
import { useState } from 'react';

const SecurityAndCTA = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="bg-[#F9F9F9] flex flex-col space-y-24 py-16 px-6">
        <div className="max-w-7xl mx-auto w-full">
          {/* Security Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-32">
            <div className="relative aspect-square w-full max-w-125 mx-auto md:mx-0">
              <Image
                src="/shield.jpg"
                alt="Security shield"
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>

            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
                Your money stays safe
              </h2>

              <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg">
                Bank-level encryption protects your data. Your savings remain
                private and secure, built on transparent systems you can trust.
              </p>
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center space-y-8 py-12 border-t">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-extrabold text-black">
                Start saving today
              </h2>

              <p className="text-gray-600 text-lg md:text-xl">
                Whether alone or with someone you trust, TrybeSave keeps you
                disciplined.
              </p>
            </div>

            {/* BUTTON → OPENS MODAL */}
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#E519FF] hover:bg-[#c115d6] text-white px-10 py-3 rounded-lg font-bold text-lg transition-colors">
              Create
            </button>
          </section>
        </div>
      </div>

      {/* MODAL */}
      <WaitlistModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default SecurityAndCTA;
