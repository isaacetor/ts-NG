'use client';

import Image, { StaticImageData } from 'next/image';
import pic1 from '../../../public/6.png';
import pic2 from '../../../public/7.png';
import pic3 from '../../../public/4.png';

// Section configsS
const SECTION_TYPE_1 = {
  bgColor: 'bg-white',
  image: pic1,
  imageAlt: 'Team working at desk',
  heading: 'Stop Overpaying Without Knowing',
  paragraphs: [
    'trybeSave helps you discover better financial options.',
    'We show you:',
  ],
  points: [
    'Better savings opportunities',
    'Lower-cost financial products',
    'Smarter ways to manage your money',
  ],
  footerText: 'This is where monetisation begins (affiliate layer)',
};

const SECTION_TYPE_2 = {
  bgColor: 'bg-gray-50',
  image: pic2,
  imageAlt: 'People collaborating in office',
  heading: '',
  paragraphs: [
    'Your Stability Score shows how financially secure you are',
    'Based on:',
  ],
  points: [
    'Savings consistency',
    'Spending behaviour',
    'Financial habits',
    'Goal progress',
  ],
  footerText: 'Not about borrowsing, about strength',
  reverse: true,
};

const SECTION_TYPE_3 = {
  bgColor: 'bg-white',
  image: pic3,
  imageAlt: 'People collaborating in office',
  heading: '',
  paragraphs: ['As your Stability Score improves, you unlock:.'],
  points: [
    'Responsible credit',
    'Better financial access',
    'Lower risk borrowing',
    'Goal progress',
  ],
  footerText: 'This is earned credit - not risky lending',
  reverse: false,
};

// Reusable Section
interface WorkingSectionProps {
  bgColor: string;
  image: StaticImageData;
  imageAlt: string;
  heading: string;
  paragraphs: string[];
  points: string[];
  footerText?: string;
  reverse?: boolean;
}

function WorkingSection({
  bgColor,
  image,
  imageAlt,
  heading,
  paragraphs,
  points,
  footerText,
  reverse = false,
}: WorkingSectionProps) {
  return (
    <section
      className={`${bgColor} w-full px-4 md:px-8 lg:px-12 py-12 md:py-16`}>
      <div className="max-w-7xl mx-auto">
        <div
          className={`flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${
            reverse ? 'lg:flex-row-reverse' : ''
          }`}>
          {/* Image */}
          <div className="w-full lg:w-1/2 shrink-0">
            <Image
              src={image}
              alt={imageAlt}
              className="w-full h-auto rounded-lg object-cover"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-4">
            {heading && (
              <p className="text-base md:text-lg font-semibold text-gray-700 mb-2">
                {heading}
              </p>
            )}

            {paragraphs.map((para, idx) => (
              <p
                key={idx}
                className="text-base md:text-lg font-semibold text-gray-700">
                {para}
              </p>
            ))}

            <ul className="space-y-3 mt-2 md:space-y-4">
              {points.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-3">
                  <span className="text-black font-bold mt-1">•</span>
                  <span className="text-base md:text-lg text-gray-800">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            {footerText && (
              <span className="text-base md:text-lg text-gray-800 mt-2 block font-semibold">
                {footerText}
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Export
export default function ModernWorkingClass() {
  return (
    <>
      <WorkingSection
        bgColor={SECTION_TYPE_1.bgColor}
        image={SECTION_TYPE_1.image}
        imageAlt={SECTION_TYPE_1.imageAlt}
        heading={SECTION_TYPE_1.heading}
        paragraphs={SECTION_TYPE_1.paragraphs}
        points={SECTION_TYPE_1.points}
        footerText={SECTION_TYPE_1.footerText}
      />

      {/* Middle Header */}
      <div className="text-center py-8 md:py-10 lg:py-12 bg-gray-50">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Understand Your Financial Strength
        </h2>
      </div>

      <WorkingSection
        bgColor={SECTION_TYPE_2.bgColor}
        image={SECTION_TYPE_2.image}
        imageAlt={SECTION_TYPE_2.imageAlt}
        heading={SECTION_TYPE_2.heading}
        paragraphs={SECTION_TYPE_2.paragraphs}
        points={SECTION_TYPE_2.points}
        footerText={SECTION_TYPE_2.footerText}
        reverse={SECTION_TYPE_2.reverse}
      />

      {/* Middle Header */}
      <div className="text-center py-8 md:py-10 lg:py-12 bg-white">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black">
          Credit That Works Differently
        </h2>
      </div>

      <WorkingSection
        bgColor={SECTION_TYPE_3.bgColor}
        image={SECTION_TYPE_3.image}
        imageAlt={SECTION_TYPE_3.imageAlt}
        heading={SECTION_TYPE_3.heading}
        paragraphs={SECTION_TYPE_3.paragraphs}
        points={SECTION_TYPE_3.points}
        footerText={SECTION_TYPE_3.footerText}
        reverse={SECTION_TYPE_3.reverse}
      />
    </>
  );
}
