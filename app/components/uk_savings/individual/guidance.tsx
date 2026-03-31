export default function IndividualSavingGuidance() {
  const guidancePoints = [
    {
      title: 'Spending patterns shift',
      description: 'Your groceries cost more this month than last.',
    },
    {
      title: 'Savings acceleration',
      description:
        'An extra fifty pounds monthly completes your emergency fund sooner.',
    },
    {
      title: 'Consistency gains',
      description:
        'Your saving discipline improved this week compared to last.',
    },
  ];

  return (
    <section className="bg-gray-50 py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start gap-16 lg:gap-32">
        {/* Left Side: Main Value Proposition */}
        <div className="w-full lg:w-1/2 space-y-6">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight">
            Guidance that helps you improve
          </h2>
          <p className="text-gray-700 text-base md:text-lg font-medium leading-relaxed max-w-md">
            TrybeSave watches your money and tells you what matters. Real advice
            for real life.
          </p>
        </div>

        {/* Right Side: Analytical Insights List */}
        <div className="w-full lg:w-1/2">
          <div className="divide-y divide-gray-200">
            {guidancePoints.map((point, index) => (
              <div
                key={index}
                className="py-6 first:pt-0 last:pb-0 group">
                <h3 className="text-3xl font-bold text-black mb-2 transition-colors ">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-base md:text-lg font-light leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
