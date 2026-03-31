import { Check, X } from 'lucide-react';

const ComparisonTable = () => {
  const othersData = [
    { label: 'Money disappears', value: 'Gone' },
    { label: 'No rewards earned', value: 'Zero' },
    { label: 'Savings never grow', value: 'Stalled' },
    { label: 'Limited merchant options', value: 'Few' },
  ];

  const trybeSaveData = [
    { label: 'Cashback comes back', value: 'Growing' },
    { label: 'Rewards on every purchase', value: 'Automatic' },
    { label: 'Savings build fast', value: 'Accelerating' },
    { label: 'Hundreds of partners', value: 'Expanding' },
  ];

  return (
    <section className="py-24 px-6 bg-[#F5F5F5]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-black leading-tight">
            Spending without
            <br />
            rewards loses
          </h2>
          <p className="text-gray-600 text-lg">
            See how TrybeSave stacks up against ordinary spending habits
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Others Column */}
          <div className="bg-white rounded-2xl border border-gray-200 p-8 md:p-12 shadow-sm min-h-full">
            <h3 className="text-center text-3xl font-serif text-[#4A2B4D] mb-12 italic">
              Others
            </h3>

            <div className="space-y-8 mb-12">
              {othersData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-gray-600 text-sm">{item.label}</span>
                  <span className="text-black font-extrabold text-lg">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="w-4 h-4 text-gray-400" />{' '}
                <span>No spending insights</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="w-4 h-4 text-gray-400" />{' '}
                <span>No tracking tools</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <X className="w-4 h-4 text-gray-400" />{' '}
                <span>No financial growth</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <X className="w-4 h-4 text-gray-400" />{' '}
                <span>No peace of mind</span>
              </li>
            </ul>
          </div>

          {/* TrybeSave Column */}
          <div className="bg-white rounded-2xl border-2 border-[#E519FF]/20 shadow-lg p-8 md:p-12 min-h-full relative transition-transform transform focus-within:ring-4 focus-within:ring-[#E519FF]/50">
            {/* Logo */}
            <div className="flex justify-center mb-12">
              <img
                src="/logo/trybesave_logo.png"
                alt="TrybeSave"
                className="h-28 w-28 object-contain"
              />
            </div>

            {/* Data Rows */}
            <div className="space-y-8 mb-12">
              {trybeSaveData.map((item, idx) => (
                <div
                  key={idx}
                  className="flex justify-between items-center border-b border-gray-100 pb-4">
                  <span className="text-gray-700 text-sm">{item.label}</span>
                  <span className="text-[#E519FF] font-extrabold text-lg">
                    {item.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Features */}
            <ul className="space-y-4">
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="w-5 h-5 text-[#E519FF]" />{' '}
                <span>See where money goes</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="w-5 h-5 text-[#E519FF]" />{' '}
                <span>Track rewards earned</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="w-5 h-5 text-[#E519FF]" />{' '}
                <span>Watch savings increase</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-700">
                <Check className="w-5 h-5 text-[#E519FF]" />{' '}
                <span>Build wealth with clarity</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
