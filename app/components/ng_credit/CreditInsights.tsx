import Image from 'next/image';
import { Activity, Clock, BarChart3 } from 'lucide-react';

const CreditInsights = () => {
  const features = [
    {
      icon: <Activity className="w-5 h-5 text-[#0A0A0A]" />,
      text: 'Track your credit limit in real time',
    },
    {
      icon: <Clock className="w-5 h-5 text-[#0A0A0A]" />,
      text: 'See your repayment schedule clearly',
    },
    {
      icon: <BarChart3 className="w-5 h-5 text-[#0A0A0A]" />,
      text: 'Understand how behaviour affects access',
    },
  ];

  return (
    <section className="w-full bg-white px-6 py-20 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-24">
        {/* Visual: Illustration on the left */}
        <div className="w-full lg:w-1/2">
          <div className="relative w-full max-w-[600px] mx-auto lg:mx-0">
            <Image
              src="/credit/sc.png" // Updated to match your specific path
              alt="Hand holding a smartphone showing a dashboard with credit scores, growth charts, and currency symbols."
              width={650}
              height={650}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        {/* Text Content: Right side */}
        <div className="w-full lg:w-1/2 space-y-8">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-[#0A0A0A] leading-tight tracking-tight">
              Smart credit insights at your fingertips
            </h2>

            <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed max-w-xl">
              Stay informed about your credit access and understand exactly how
              your financial behaviour shapes your future. You're always in
              control.
            </p>
          </div>

          {/* Icon List */}
          <ul className="space-y-6">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex items-center gap-4">
                <div className="flex-shrink-0">{feature.icon}</div>
                <span className="text-lg md:text-xl font-medium text-[#0A0A0A]">
                  {feature.text}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CreditInsights;
