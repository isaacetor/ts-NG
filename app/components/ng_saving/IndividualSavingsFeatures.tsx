import React from 'react';
import {
  ShieldCheck,
  Calendar,
  Wallet,
  PieChart,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';

const IndividualSavingsFeatures = () => {
  return (
    <div className="bg-[#F9F9F9] flex flex-col py-16 px-6">
      <div className="max-w-7xl mx-auto w-full space-y-32">
        {/* Section 1: Save on your own terms */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Save on your own terms
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Build financial discipline and independence with personal savings
              goals. You stay fully in control while building better habits.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-center space-x-3">
                <ShieldCheck className="w-5 h-5 text-black" />
                <span className="text-gray-700">Build an emergency fund</span>
              </li>
              <li className="flex items-center space-x-3">
                <Calendar className="w-5 h-5 text-black" />
                <span className="text-gray-700">Save for rent or travel</span>
              </li>
              <li className="flex items-center space-x-3">
                <Wallet className="w-5 h-5 text-black" />
                <span className="text-gray-700">Plan personal projects</span>
              </li>
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="/saving/pic3.png"
              alt="Personal savings"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </section>

        {/* Section 2: Four-Grid Accountability (Text Only) */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-16 pt-16">
          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-black">
              Shared accountability
            </h3>
            <p className="text-gray-600">
              Both partners stay committed to the same financial goals.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-black">
              Clear financial planning
            </h3>
            <p className="text-gray-600">
              Know exactly where money goes and what you’re building towards.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-black">
              Reduced financial stress
            </h3>
            <p className="text-gray-600">
              Open communication about money removes tension and uncertainty.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-xl font-extrabold text-black">
              Stronger financial stability
            </h3>
            <p className="text-gray-600">
              Joint discipline builds a foundation that lasts.
            </p>
          </div>
        </section>

        {/* Section 3: Know your financial strength */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center pt-16">
          <div className="order-1">
            <img
              src="/saving/pic4.png"
              alt="Financial strength"
              className="w-full h-auto rounded-3xl"
            />
          </div>

          <div className="order-2 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Know your financial strength
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Unlike credit scores that measure borrowing power, your Stability
              Score measures financial security. It grows as your savings grow.
            </p>
          </div>
        </section>

        {/* Section 4: Understand your money better */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center pt-16">
          <div className="order-2 md:order-1 space-y-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-black leading-tight">
              Understand your money better
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              TrybeSave helps you see where your money goes and how to make it
              work harder. Smart decisions start with clear information.
            </p>

            <ul className="space-y-4 pt-2">
              <li className="flex items-center space-x-3">
                <PieChart className="w-5 h-5 text-black" />
                <span className="text-gray-700">See where you spend most</span>
              </li>
              <li className="flex items-center space-x-3">
                <TrendingDown className="w-5 h-5 text-black" />
                <span className="text-gray-700">Find ways to reduce waste</span>
              </li>
              <li className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-black" />
                <span className="text-gray-700">
                  Increase your savings rate
                </span>
              </li>
            </ul>
          </div>

          <div className="order-1 md:order-2">
            <img
              src="/saving/pic5.png"
              alt="Money insights"
              className="w-full h-auto rounded-3xl"
            />
          </div>
        </section>
      </div>
    </div>
  );
};

export default IndividualSavingsFeatures;
