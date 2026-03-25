import React from 'react';
import Image, { StaticImageData } from 'next/image';

interface FeatureData {
  title: string;
  description: string[];
  image: StaticImageData | string;
  imageOnLeft?: boolean;
  label?: string;
  listItems?: { icon: React.ReactNode; text: string }[];
}

interface FeatureSectionProps {
  data: FeatureData;
}

const FeatureSection: React.FC<FeatureSectionProps> = ({ data }) => {
  return (
    <section className="bg-inherit py-24 px-6 md:px-16 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        {/* Content Column */}
        <div
          className={`space-y-8 max-w-xl ${data.imageOnLeft ? 'lg:order-2' : 'lg:order-1'}`}>
          <div className="space-y-4">
            {data.label && (
              <span className="text-sm font-bold text-black uppercase tracking-widest">
                {data.label}
              </span>
            )}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-[1.1] tracking-tight">
              {data.title}
            </h2>
          </div>

          <div className="space-y-6">
            {data.description.map((paragraph, index) => (
              <p
                key={index}
                className="text-gray-700 text-lg md:text-xl font-light leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Icon List Section */}
          {data.listItems && (
            <div className="space-y-5 pt-4">
              {data.listItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-4 text-gray-800 font-medium">
                  <div className="text-black">{item.icon}</div>
                  <span className="text-lg">{item.text}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Image Column */}
        <div
          className={`relative flex justify-center ${data.imageOnLeft ? 'lg:order-1' : 'lg:order-2'}`}>
          <div className="relative w-full aspect-square max-w-[550px] overflow-hidden rounded-[10px]">
            <Image
              src={data.image}
              alt={data.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 550px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
