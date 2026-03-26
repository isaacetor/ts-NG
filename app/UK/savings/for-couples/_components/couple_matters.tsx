import React from 'react';

import { Plane, Church, Home } from 'lucide-react';
import matt from '../../../../../public/matt.jpg';
import FeatureSection from '@/app/_props/featureProp';

const SavingsCouplesMattersPage: React.FC = () => {
  const mattersSectionData = {
    label: 'Savings',
    title: 'Save for what matters together',
    description: [
      'Create shared pots for travel, weddings, home deposits, family planning, or emergency funds. Each pot tracks what you both contribute and how close you are to the goal.',
    ],
    image: matt,
    imageOnLeft: false, // Text on left, image on right as per screenshot
    listItems: [
      {
        icon: (
          <Plane
            size={20}
            strokeWidth={2.5}
          />
        ),
        text: 'Travel',
      },
      {
        icon: (
          <Church
            size={20}
            strokeWidth={2.5}
          />
        ),
        text: 'Wedding',
      },
      {
        icon: (
          <Home
            size={20}
            strokeWidth={2.5}
          />
        ),
        text: 'Home',
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white">
      <FeatureSection data={mattersSectionData} />
    </main>
  );
};

export default SavingsCouplesMattersPage;
