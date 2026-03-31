'use client';

import { useState } from 'react';
import { BarChart3, Database, Timer } from 'lucide-react';
import WaitlistModal from '@/components/utils/WaitlistModal';

const FinalBudgetFeatures = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="border-t flex flex-col w-full">
        {/* Section 1 */}
        <section className="py-20 px-6 w-full bg-[#F5F5F5]">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
                Works for anyone who spends
              </h2>
              <p className="text-lg leading-relaxed max-w-lg">
                Whether you earn a salary, run a business, study, or manage a
                household, TrybeSave rewards your everyday spending. Cashback
                works the same way for everyone.
              </p>
            </div>
            <div className="relative aspect-square bg-white rounded-3xl overflow-hidden shadow-sm">
              <img
                src="/budget/bud10.png"
                alt="Spending for everyone"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
          <div className="order-2 md:order-1 relative aspect-square rounded-3xl overflow-hidden shadow-sm">
            <img
              src="/budget/bud11.png"
              alt="Spending analytics"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="order-1 md:order-2 space-y-6 md:pl-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Understand your spending patterns
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              TrybeSave shows you exactly where your money goes and how much you
              earn back. Smart spending starts with knowing your habits.
            </p>
            <ul className="space-y-4 pt-4">
              <li className="flex items-center space-x-3 text-sm text-gray-700">
                <BarChart3 className="w-4 h-4 text-black" />
                <span>See which categories earn most</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-700">
                <Database className="w-4 h-4 text-black" />
                <span>Track rewards accumulating monthly</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-gray-700">
                <Timer className="w-4 h-4 text-black" />
                <span>Watch savings grow automatically</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3 */}
        <section className="bg-[#FDF4FF] py-24 px-6 w-full">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-[450px] mx-auto md:mx-0">
              <img
                src="/shield.jpg"
                alt="Data security"
                className="w-full h-full object-contain"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
                Your money stays safe
              </h2>
              <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
                TrybeSave protects your data with bank-level encryption and
                transparent reward tracking. Your savings and cashback are
                always secure.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: CTA */}
        <section className="bg-white py-24 px-6 text-center w-full">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-extrabold text-black">
                Start earning today
                <br />
                with TrybeSave
              </h2>
              <p className="text-gray-600 text-lg">
                Turn everyday spending into savings. Create your free account
                now.
              </p>
            </div>

            {/* CTA BUTTON → OPENS MODAL */}
            <button
              onClick={() => setIsOpen(true)}
              className="bg-[#E519FF] hover:bg-[#c115d6] text-white px-10 py-3 rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl active:scale-95">
              Create
            </button>
          </div>
        </section>
      </div>

      {/* MODAL */}
      <WaitlistModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default FinalBudgetFeatures;
