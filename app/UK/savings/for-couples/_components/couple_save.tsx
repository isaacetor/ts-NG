import pic from '../../../../../public/s.jpg';
import ma from '../../../../../public/ma.jpg';
import FeatureSection from '@/app/_props/featureProp';

const SavingsCouplesStress = () => {
  // data for this section
  const stressSectionData = {
    title: 'Money is one of the biggest causes of relationship stress',
    description: [
      'Most couples struggle with money. Different spending habits, lack of transparency, unclear savings goals, arguments about decisions, and difficulty tracking shared expenses create distance instead of partnership.',
      'Financial apps built for individuals leave couples confused and misaligned.',
    ],
    image: pic,
    imageOnLeft: true,
  };
  const manageMoneySectionData = {
    title: 'A better way to manage money togethers',
    description: [
      'TrybeSave gives couples the tools to build financial clarity and shared structure. Save for what matters, track progress together, and reduce the arguments that come from misalignment.',
    ],
    image: ma,
    imageOnLeft: true,
  };

  return (
    <main className="min-h-screen bg-white">
      <FeatureSection data={stressSectionData} />
      <FeatureSection data={manageMoneySectionData} />
    </main>
  );
};

export default SavingsCouplesStress;
