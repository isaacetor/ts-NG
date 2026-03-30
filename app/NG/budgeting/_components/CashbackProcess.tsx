const CashbackProcess = () => {
  const steps = [
    {
      title: 'Shop with trusted partners',
      desc: 'Find cashback deals across fuel, groceries, airtime, and more.',
      img: '/budget/bud3.png',
    },
    {
      title: 'Earn cashback instantly',
      desc: 'No coupons, no complications. Rewards hit your account right away.',
      img: '/budget/bud4.png',
    },
    {
      title: 'Watch your savings grow',
      desc: 'Cashback stacks up automatically, building your financial cushion over time.',
      img: '/budget/bud5.png',
    },
  ];

  const categories = [
    {
      title: 'Fuel cashback',
      desc: 'Earn rewards every time you fill up at participating fuel stations across Nigeria.',
      img: '/budget/bud6.png',
    },
    {
      title: 'Airtime cashback',
      desc: 'Get money back when you purchase airtime or data bundles from your provider.',
      img: '/budget/bud7.png',
    },
    {
      title: 'Grocery cashback',
      desc: 'Save on household essentials and food shopping with cashback at partner supermarkets.',
      img: '/budget/bud8.png',
    },
    {
      title: 'Transport cashback',
      desc: 'Earn rewards on ride services and transportation spending in your daily commute.',
      img: '/budget/bud9.png',
    },
  ];

  return (
    <div className="flex flex-col space-y-10">
      {/* Top Section: Full-Width Background */}
      <section className="w-full bg-[#EBE7EE] py-28">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl font-extrabold text-black leading-snug">
              How it works
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
              Three steps to earning cashback on what you already buy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-6 flex flex-col items-center text-center border border-gray-100">
                <div className="w-full aspect-[4/3] mb-6 overflow-hidden rounded-xl bg-gray-50">
                  <img
                    src={step.img}
                    alt={step.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-2xl font-bold text-black leading-snug mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom Section: White Background */}
      <section className="w-full bg-white py-28">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="text-center mb-20 space-y-6">
            <h2 className="text-5xl font-extrabold text-black max-w-3xl mx-auto leading-snug">
              Cashback on everyday purchases
            </h2>
            <p className="text-gray-600 text-xl md:text-2xl max-w-2xl mx-auto leading-relaxed">
              TrybeSave rewards the spending you do anyway. Fuel, airtime,
              groceries, transport, and online shopping all earn you money back.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            {categories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-4 flex flex-col items-center text-center border border-gray-100">
                <div className="w-full aspect-video overflow-hidden rounded-xl bg-gray-50 mb-4">
                  <img
                    src={cat.img}
                    alt={cat.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-xl font-extrabold text-black mb-2">
                  {cat.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {cat.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CashbackProcess;
