import React from 'react';

import work from '../../../../public/work.jpg';
import shield from '../../../../public/shield.jpg';
import FeatureSection from '@/app/components/props/featureProp';

const SavingsCouplesTrust: React.FC = () => {
  // Data for the "Work" / Versatility section
  const versatilityData = {
    title: 'Built for couples in any situation',
    description: [
      "Whether you're newly married, managing finances across borders, or planning decades ahead, TrybeSave works for your life as it is.",
    ],
    image: work,
    imageOnLeft: true, // Image on left, text on right
  };

  // Data for the "Shield" / Security section
  const securityData = {
    title: 'Security built into everything we do',
    description: [
      "Funds are safeguarded with regulated Electronic Money institution Partners. We use secure banking connections and encrypted data to give you the tools you need without taking control of what's yours.",
    ],
    image: shield,
    imageOnLeft: false, // Text on left, image on right
  };

  return (
    <div className="flex flex-col w-full bg-white">
      {/* Versatility Section - White Background */}
      <FeatureSection data={versatilityData} />

      {/* Security Section - Light Lavender Background */}
      <div className="bg-[#FDF5FD]">
        <FeatureSection data={securityData} />
      </div>
    </div>
  );
};

export default SavingsCouplesTrust;
