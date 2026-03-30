import { Heart, Home, Asterisk, PiggyBank } from 'lucide-react';

const CouplesSavings = () => {
  const benefits = [
    {
      icon: <PiggyBank className="w-5 h-5 text-black" />,
      text: 'Wedding savings',
    },
    {
      icon: <Home className="w-5 h-5 text-black" />,
      text: 'House deposit',
    },
    {
      icon: <Asterisk className="w-5 h-5 text-black" />,
      text: 'Family emergency funds',
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 border-b bg-[#F9F9F9]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Image Container */}
          <div className="relative aspect-square w-full max-w-[540px] mx-auto md:mx-0">
            <img
              src="/saving/pic2.png"
              alt="Couples saving together"
              className="w-full h-full object-contain rounded-3xl"
            />
          </div>

          {/* Content Container */}
          <div className="flex flex-col space-y-6">
            <h2 className="text-4xl md:text-6xl font-extrabold text-black leading-[1.1]">
              Save together,
              <br />
              achieve faster
            </h2>

            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-xl">
              Saving together helps couples achieve shared financial goals
              faster. Both partners can track contributions and progress with
              transparency.
            </p>

            {/* List Items */}
            <ul className="space-y-4 pt-2">
              {benefits.map((benefit, index) => (
                <li
                  key={index}
                  className="flex items-center space-x-3">
                  <div className="shrink-0">{benefit.icon}</div>
                  <span className="text-gray-700 font-medium text-lg">
                    {benefit.text}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CouplesSavings;
