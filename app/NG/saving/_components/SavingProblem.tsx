import { MessageSquareOff, RotateCcw, ListX } from 'lucide-react';

const SavingsProblem = () => {
  const painPoints = [
    {
      icon: <MessageSquareOff className="w-5 h-5 text-[#0A0A0A]" />,
      text: 'Spending more than planned',
    },
    {
      icon: <RotateCcw className="w-5 h-5 text-[#0A0A0A]" />,
      text: 'Unexpected expenses derail your goals',
    },
    {
      icon: <ListX className="w-5 h-5 text-[#0A0A0A]" />,
      text: 'No clear plan to follow',
    },
  ];

  return (
    <section className="w-full bg-[#FDF4FF] px-6 py-24 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-12 lg:gap-20">
        {/* Left Side: Bold Problem Statement */}
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-[#0A0A0A] leading-[1.1] tracking-tight">
            Saving money is hard without structure
          </h2>
        </div>

        {/* Right Side: Context & List */}
        <div className="w-full md:w-5/12 space-y-8 md:pt-4">
          <p className="text-xl md:text-2xl text-[#4A4A4A] leading-relaxed font-medium">
            Many Nigerians want to save but struggle with consistency. Without
            the right system, financial discipline becomes nearly impossible.
          </p>

          <ul className="space-y-6 pt-4">
            {painPoints.map((item, index) => (
              <li
                key={index}
                className="flex items-center gap-4">
                <div className="shrink-0">{item.icon}</div>
                <span className="text-lg md:text-xl font-medium text-[#0A0A0A]">
                  {item.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default SavingsProblem;
