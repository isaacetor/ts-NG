import Image from 'next/image';
import bigo from '../../../../public/bigo.jpg';

export default function IndividualSavingSystem() {
  return (
    <div className="w-full bg-white">
      {/* Upper Section: Simple System for Managing Money */}
      <section className="py-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mt-20 max-md:mt-0 max-md:mb-10  mb-28 mx-auto flex flex-col lg:flex-row items-start gap-12 lg:gap-24">
          <div className="w-full lg:w-1/2">
            <h2 className="text-5xl md:text-6xl font-medium text-black leading-tight tracking-tight">
              A simple system for managing your money
            </h2>
          </div>
          <div className="w-full lg:w-1/2 space-y-8">
            <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
              TrybeSave gives you the tools you need to build better financial
              habits. Instead of guessing about your finances, you get clarity
              and control.
            </p>
            <ul className="space-y-4">
              {[
                'Save money automatically',
                'Track your spending clearly',
                'Organize financial goals',
              ].map((item, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-black  text-lg">
                  <span className="w-1.5 h-1.5 bg-black rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Lower Section: Know Your Financial Strength */}
      <section className="pb-24 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Centered Heading Content */}
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="text-5xl md:text-6xl font-semibold text-black tracking-tight">
              Know your financial strength
            </h2>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
              The Stability Score measures what matters—your financial security,
              not borrowing power. As your habits improve, so does your score.
            </p>
          </div>

          {/* Large Hero Image (bigo) */}
          <div className="relative w-full aspect-video md:aspect-video rounded-[10px] overflow-hidden shadow-sm">
            <Image
              src={bigo}
              alt="Person managing finances confidently"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
    </div>
  );
}
