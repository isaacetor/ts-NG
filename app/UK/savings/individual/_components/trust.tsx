import React from 'react';

const IndividualSavingsTrust: React.FC = () => {
  const habits = [
    {
      title: 'Automatic growth',
      description:
        'Small regular deposits compound into real savings over time without effort.',
    },
    {
      title: 'Clear visibility',
      description:
        'See exactly where your money goes and understand your spending patterns.',
    },
    {
      title: 'Real progress',
      description:
        'Watch your Stability Score improve as your financial discipline strengthens.',
    },
  ];

  return (
    <div className="w-full">
      {/* Build Habits Section - Light Lavender Background */}
      <section className="bg-[#FEEEFF] py-30 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
              Build habits that last
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              TrybeSave removes the friction from saving. You set the rules
              once, then watch your money accumulate without thinking about it.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
            {habits.map((habit, index) => (
              <div
                key={index}
                className="space-y-4 text-center relative">
                {/* Visual indicator for the first item as seen in screenshot */}
                {/* {index === 0 && (
                  <div className="absolute -top-8 left-0 w-full h-[2px] bg-blue-400 hidden md:block" />
                )} */}
                <h3 className="text-2xl font-bold text-black">{habit.title}</h3>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {habit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Reassurance Section - White Background */}
      <section className="bg-white py-32 px-6 md:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight leading-tight">
            Your money stays safe in your bank
          </h2>
          <p className="text-gray-600 text-xl md:text-2xl leading-relaxed font-medium">
            TrybeSave connects securely to your bank account and encrypts all
            your financial data. Your money never leaves your bank—we just help
            you manage it better.
          </p>
        </div>
      </section>
    </div>
  );
};

export default IndividualSavingsTrust;
