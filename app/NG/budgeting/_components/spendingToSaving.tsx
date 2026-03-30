import { PiggyBank } from 'lucide-react';

const SpendingToSavings = () => {
  const tabs = ['Fuel spending', 'Airtime needs', 'Grocery runs'];

  return (
    <section className="py-28 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header and Tabs */}
        <div className="text-center mb-24 space-y-10">
          <h2 className="text-5xl md:text-6xl font-extrabold text-black max-w-2xl mx-auto leading-snug">
            Money spent, nothing gained
          </h2>

          <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Every day you spend on fuel, airtime, groceries, transport, and
            shopping. That money is gone. What if it came back to you?
          </p>

          <div className="flex justify-center space-x-10 pt-6 border-b border-gray-200 w-fit mx-auto">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`pb-4 text-base md:text-lg font-semibold transition-all ${
                  index === 0
                    ? 'text-black border-b-2 border-[#E519FF]'
                    : 'text-gray-400 border-b-2 border-transparent'
                }`}>
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-40">
          {/* Subsection 1: Problem */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-8 md:pr-12">
              <h3 className="text-4xl md:text-5xl font-extrabold text-black leading-snug">
                Fuel drains your wallet fast
              </h3>
              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
                Every fill-up costs money with nothing to show for it. That
                changes with TrybeSave.
              </p>
            </div>

            <div className="relative aspect-square w-full">
              <img
                src="/budget/bud1.png"
                alt="Fuel spending loss"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>

          {/* Subsection 2: Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1 relative aspect-square w-full">
              <img
                src="/budget/bud2.png"
                alt="Cashback savings"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>

            <div className="order-1 md:order-2 space-y-8 md:pl-12">
              <div className="w-16 h-16 flex items-center justify-center bg-[#F0E6FF] rounded-full">
                <PiggyBank className="w-10 h-10 text-[#E519FF]" />
              </div>

              <h3 className="text-4xl md:text-5xl font-extrabold text-black leading-snug">
                Turn spending into savings
              </h3>

              <p className="text-gray-600 text-xl md:text-2xl leading-relaxed">
                TrybeSave puts money back in your pocket. Every purchase with a
                partner merchant earns cashback that builds your savings
                automatically.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpendingToSavings;
