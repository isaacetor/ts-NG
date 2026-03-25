'use client';

import Image from 'next/image';

// =======================
// Configuration for sections
// =======================
const SECTIONS_DATA = [
  {
    title: 'Build Savings Without Thinking',
    subtitle: 'Set rules once.',
    extraText: 'We handle the rest.',
    points: ['Weekly saving', 'Payday saving', 'Round-ups'],
    footerText: 'Your money is structured before you spend it.',
    image: {
      src: '/8.png',
      alt: 'Woman in green sweater smiling with laptop',
      width: 500,
      height: 500,
      rounded: 'rounded-2xl',
    },
    reverse: false,
  },
  {
    title: 'Know Where Your Money Goes',
    subtitle: '',
    extraText: 'We break down your spending clearly.',
    points: ['Food', 'Rent', 'Transport', 'Subscriptions', 'Transfers'],
    footerText: 'So you can make better decisions.',
    image: {
      src: '/10-1.png',
      alt: 'Person checking finances on tablet',
      width: 500,
      height: 500,
      rounded: 'rounded-2xl',
    },
    reverse: true,
  },
];

// =======================
// Reusable Content Section
// =======================
interface ContentSectionProps {
  title: string;
  subtitle: string;
  extraText: string;
  points: string[];
  footerText?: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
    rounded: string;
  };
  reverse?: boolean;
}

function ContentSection({
  title,
  subtitle,
  extraText,
  points,
  footerText,
  image,
  reverse = false,
}: ContentSectionProps) {
  return (
    <section className="bg-white first:pt-20 first:pb-20 pt-12 pb-2 md:first:pt-24 md:first:pb-24 md:pt-16 md:pb-16 lg:first:pt-28 lg:first:pb-28 lg:pt-20 lg:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className={`${reverse ? 'md:order-2' : ''} flex flex-col gap-6`}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-tight">
              {title}
            </h2>

            <p className="text-base md:text-lg text-gray-700 font-bold">
              {subtitle}
            </p>
            <p className="text-base md:text-lg text-gray-700">{extraText}</p>

            <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
              {points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>

            {footerText && (
              <p className="mt-4 text-base md:text-lg text-gray-800 font-medium">
                {footerText}
              </p>
            )}
          </div>

          {/* Image */}
          <div className={`${reverse ? 'md:order-1' : ''}`}>
            <Image
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className={`w-full h-auto object-cover ${image.rounded}`}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// =======================
// Main Export
// =======================
export default function Feature2() {
  return (
    <>
      {SECTIONS_DATA.map((section, idx) => (
        <ContentSection
          key={idx}
          title={section.title}
          subtitle={section.subtitle}
          extraText={section.extraText}
          points={section.points}
          footerText={section.footerText}
          image={section.image}
          reverse={section.reverse}
        />
      ))}
    </>
  );
}
