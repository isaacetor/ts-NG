'use client';

import Image from 'next/image';
import pic from '../../public/10-1.png';

const CONTENT1_DATA = {
  title: 'See Your Money Clearly.',
  titleColor: '#6E1177',
  description: [
    'Connect your accounts and understand everything instantly.',
    '- All accounts in one place.',
    '- Real-time transactions.',
    '- Clear financial overview',
  ],
  highlight: 'No spreadsheets. No confusion.',
  image: {
    src: pic,
    alt: 'Financial overview illustration',
    width: 500,
    height: 500,
  },
  gradientGlow: {
    color: '#F9A8FF', // Tailwind pink-300 equivalent
    opacity: 0.2,
    size: 400,
    blur: 140,
  },
};

export default function Feature1() {
  return (
    <section className="relative bg-gray-50 py-12 md:py-20 lg:py-28 overflow-hidden">
      {/* Ambient Glow */}
      {/* <div
        style={{
          width: CONTENT1_DATA.gradientGlow.size,
          height: CONTENT1_DATA.gradientGlow.size,
          backgroundColor: CONTENT1_DATA.gradientGlow.color,
          opacity: CONTENT1_DATA.gradientGlow.opacity,
          filter: `blur(${CONTENT1_DATA.gradientGlow.blur}px)`,
        }}
        className="absolute -top-20 left-1/2 -translate-x-1/2 rounded-full pointer-events-none"
      /> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Image */}
          <div className="order-2 md:order-1">
            <div className="relative w-full rounded-xl overflow-hidden">
              <Image
                src={CONTENT1_DATA.image.src}
                alt={CONTENT1_DATA.image.alt}
                width={CONTENT1_DATA.image.width}
                height={CONTENT1_DATA.image.height}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2 flex flex-col gap-6">
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight"
              style={{ color: CONTENT1_DATA.titleColor }}>
              {CONTENT1_DATA.title}
            </h2>

            <div className="flex flex-col gap-3 md:gap-4">
              {CONTENT1_DATA.description.map((paragraph, idx) => (
                <p
                  key={idx}
                  className="text-sm md:text-base text-gray-700 leading-relaxed">
                  {paragraph}
                </p>
              ))}

              <p className="text-lg md:text-xl font-bold text-black pt-2">
                {CONTENT1_DATA.highlight}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
