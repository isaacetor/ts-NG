import React from 'react';

import { CircleDotDashed, PiggyBank } from 'lucide-react';
import six from '../../../../../public/6.jpg';
import df from '../../../../../public/34.jpg';
import FeatureSection from '@/app/_props/featureProp';

const SavingsCouplesTransparency: React.FC = () => {
  const transparencyData = {
    label: 'Transparency',
    title: 'Everyone knows where the money goes',
    description: [
      'See exactly what each of you contributed and how much further you need to go. No surprises, no confusion, just clear numbers you both understand.',
    ],
    image: six,
    imageOnLeft: true, // Flips layout to maintain zigzag pattern
  };
  const coupleData = {
    title: 'Couples stability score measures financial strength',
    description: [
      'A single number that shows how solid you are together. It reflects your combined savings buffer, how consistently you save, and your progress toward shared goals.',
    ],
    listItems: [
      {
        icon: (
          <PiggyBank
            size={20}
            strokeWidth={2.5}
          />
        ),
        text: 'Combined savings buffer',
      },
      {
        icon: (
          <PiggyBank
            size={20}
            strokeWidth={2.5}
          />
        ),
        text: 'Saving consistency',
      },

      {
        icon: (
          <CircleDotDashed
            size={20}
            strokeWidth={2.5}
          />
        ),
        text: 'Goal Progress',
      },
    ],
    image: df,
    imageOnLeft: true, // Flips layout to maintain zigzag pattern
  };

  return (
    <section className="w-full bg-[#F2F2F2]">
      <FeatureSection data={transparencyData} />

      {/* Centered Heading following the image/text block */}
      <div className=" pb-24 px-6 text-center">
        <div className=" mx-auto space-y-6">
          <h2 className="text-5xl md:text-6xl font-bold text-black tracking-tight">
            Plan your future as a financial unit
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Define what matters to you both—buying a home, planning a wedding,
            starting a family, or building long-term security. Stay organized
            and focused on the same horizon.
          </p>
        </div>
      </div>

      {/* couples stability */}
      <div className="bg-white">
        <FeatureSection data={coupleData} />
      </div>
    </section>
  );
};

export default SavingsCouplesTransparency;
