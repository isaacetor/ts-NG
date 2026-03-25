import Image from 'next/image';
import img11 from '../../../../../public/11.jpg';
import img12 from '../../../../../public/12.jpg';
import img13 from '../../../../../public/13.jpg';
import img14 from '../../../../../public/14.jpg';

export default function IndividualSavingSteps() {
  const steps = [
    {
      title: 'Connect your bank securely',
      description: 'TrybeSave automatically tracks your transactions',
      image: img11,
      // action: 'Next',
    },
    {
      title: 'Create savings pots for goals',
      description: 'Each pot tracks your progress toward targets',
      image: img12,
      // action: 'Next',
    },
    {
      title: 'Set automatic saving rules',
      description: 'Small contributions grow into meaningful savings',
      image: img13,
      // action: 'Next',
    },
    {
      title: 'Track your spending automatically',
      description: 'Understand where your money goes',
      image: img14,
      // action: 'Done',
    },
  ];

  return (
    <section className="bg-[#FEF5FF] py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
            How TrybeSave works
          </h2>
          <p className="text-gray-600 text-lg md:text-xl font-medium">
            Four simple steps to financial control
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-[#FDEEFF] rounded-[10px] overflow-hidden flex flex-col h-full border border-[#0D090326]  transition-hover duration-300 hover:shadow-sm">
              {/* Image Container */}
              <div className="relative h-48 w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col grow space-y-4">
                <span className="text-sm font-bold text-black opacity-60">
                  Step {index + 1}
                </span>
                <h3 className="text-2xl font-bold text-black leading-tight min-h-14">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed grow">
                  {step.description}
                </p>

                {/* Footer Action */}
                {/* <div className="pt-4 flex items-center gap-2 text-sm font-bold text-black cursor-pointer hover:opacity-70 transition-opacity">
                  {step.action}
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
