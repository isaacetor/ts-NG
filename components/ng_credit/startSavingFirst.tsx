import Image from 'next/image';

const StartSavingFirst = () => {
  const steps = [
    {
      title: 'Start saving',
      description:
        'Your savings history helps determine credit eligibility and access.',
      img: '/credit/credpiggy.jpg',
    },
    {
      title: 'Build your stability score',
      description:
        'Your financial behaviour improves your score through consistent savings and spending patterns.',
      img: '/credit/credWaller.png',
    },
    {
      title: 'Unlock responsible credit',
      description:
        'As stability improves, TrybeSave offers access to credit that grows with you.',
      img: '/credit/respCredit.jpg',
    },
  ];

  return (
    <section className="w-full bg-[#26022A]  ">
      <div className="w-[90%] rounded-xl bg-white mx-auto px-6 py-20 md:py-32">
        {/* Header Section */}
        <div className="text-center mb-16 md:mb-24 space-y-4">
          <h2 className="text-4xl md:text-6xl font-black text-[#0A0A0A] tracking-tight">
            Start saving first
          </h2>
          <p className="text-lg md:text-xl text-[#4A4A4A] max-w-2xl mx-auto font-medium">
            Use TrybeSave to build consistent savings habits that determine your
            credit eligibility.
          </p>
        </div>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div
              key={index}
              className="flex flex-col bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-sm transition-shadow duration-300">
              <div className="space-y-4 mb-10">
                <h3 className="text-2xl md:text-3xl font-black text-[#0A0A0A] leading-tight">
                  {step.title}
                </h3>
                <p className="text-base md:text-lg text-[#4A4A4A] leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Image Container - Pushes to bottom */}
              <div className="mt-auto pt-6 flex justify-center">
                <Image
                  src={step.img}
                  alt={step.title}
                  width={300}
                  height={300}
                  className="w-full h-auto max-w-[280px] object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StartSavingFirst;
