import Image from 'next/image';

const CreditContrast = () => {
  return (
    <section className="w-full bg-[#F9F9F9] px-6 py-20 md:py-32">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-sm font-bold uppercase tracking-widest text-gray-500">
            Contrast
          </span>
          <h2 className="text-4xl md:text-6xl font-black text-[#0A0A0A]">
            Why TrybeSave credit is different
          </h2>
          <p className="text-lg md:text-xl text-gray-600">
            Traditional loan apps trap you in cycles. TrybeSave builds you up
            instead.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          {/* Traditional Loan Apps Card */}
          <div className="bg-white rounded-lg p-8 md:p-12 border border-gray-100 shadow-sm flex flex-col">
            <div className="text-center mb-10">
              <h3 className="text-2xl font-black text-[#0A0A0A] mb-2">
                Traditional loan apps
              </h3>
              <p className="text-gray-500 font-medium">
                The old way of borrowing
              </p>
            </div>

            <div className="space-y-8 flex-grow">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-600">
                  Extremely high interest rates
                </span>
                <span className="font-black text-xl">40-60%</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-600">Hidden charges and fees</span>
                <span className="font-black text-xl">Multiple</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-600">
                  Harassment during repayment
                </span>
                <span className="font-black text-xl">Common</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-600">
                  No reward for responsibility
                </span>
                <span className="font-black text-xl">None</span>
              </div>
            </div>

            <div className="mt-10 space-y-4 text-gray-600">
              <div className="flex items-center gap-3">
                <span className="text-black font-bold">✓</span> Encourages debt
                cycles
              </div>
              <div className="flex items-center gap-3">
                <span className="text-black font-bold">✓</span> Creates
                financial stress
              </div>
              <div className="flex items-center gap-3">
                <span className="text-black font-bold">✕</span> Instant risky
                loans
              </div>
              <div className="flex items-center gap-3">
                <span className="text-black font-bold">✕</span> Unsustainable
                borrowing
              </div>
            </div>
          </div>

          {/* TrybeSave Card */}
          <div className="bg-white rounded-lg p-8 md:p-12 border-2 border-[#C400C4]/10 shadow-xl flex flex-col relative ring-4 ring-[#C400C4]/5">
            <div className="text-center mb-10">
              <div className="flex justify-center mb-4">
                <Image
                  src="/logo/trybesave_logo.png"
                  alt="TrybeSave Logo"
                  width={108}
                  height={108}
                  className="rounded-xl"
                />
              </div>
              <p className="text-[#8A1A9B] font-bold uppercase tracking-tight text-sm">
                The better way forward
              </p>
            </div>

            <div className="space-y-8 flex-grow">
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-600">
                  Fair and transparent credit
                </span>
                <span className="font-black text-xl text-[#8A1A9B]">
                  Competitive
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-600">No hidden charges</span>
                <span className="font-black text-xl text-[#8A1A9B]">Zero</span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-600">
                  Respectful financial support
                </span>
                <span className="font-black text-xl text-[#8A1A9B]">
                  Always
                </span>
              </div>
              <div className="flex justify-between items-center border-b border-gray-100 pb-4">
                <span className="text-gray-600">
                  Rewards financial discipline
                </span>
                <span className="font-black text-xl text-[#8A1A9B]">
                  Significant
                </span>
              </div>
            </div>

            <div className="mt-10 space-y-4 text-gray-800">
              <div className="flex items-center gap-3">
                <span className="text-[#8A1A9B] font-bold">✓</span> Encourages
                financial stability
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#8A1A9B] font-bold">✓</span> Builds
                healthy habits
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#8A1A9B] font-bold">✓</span> Credit based
                on discipline
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#8A1A9B] font-bold">✓</span> Sustainable
                borrowing
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditContrast;
