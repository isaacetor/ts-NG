'use client';
import React from 'react';
import Image from 'next/image';
import img1 from '../../public/5.png';
import img2 from '../../public/2(1).png';
import img3 from '../../public/1.png';

const SECTIONS = [
  {
    title: 'Built for Individuals and Couples',
    image: img1,
    imageAlt: 'Financial Freedom Visual',
    content: (
      <div className="flex flex-col gap-6 sm:gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-3 sm:mb-4">Individual</h3>
          <ul className="space-y-1 sm:space-y-2 text-slate-600">
            <li>Take control of your finances</li>
            <li>Build independence</li>
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-3 sm:mb-4">Couples</h3>
          <ul className="space-y-1 sm:space-y-2 text-slate-600">
            <li>Plan together</li>
            <li>Save together</li>
            <li>Avoid conflict</li>
          </ul>
        </div>
      </div>
    ),
    bgColor: 'bg-white',
  },
  {
    title: 'Built for Complex Financial Lives',
    image: img2,
    imageAlt: 'Complex Lives Visual',
    content: (
      <>
        <p className="text-xl font-semibold mb-2">If you:</p>
        <ul className="space-y-3 sm:space-y-4 text-slate-600">
          <li>Support family</li>
          <li>Manage multiple priorities</li>
          <li>Try to save while spending</li>
        </ul>
        <p className="text-2xl font-bold mt-2">
          TrybeSave gives you structure.
        </p>
      </>
    ),
    bgColor: 'bg-slate-50/40',
  },
  {
    title: 'Transparent Business Model',
    image: img3,
    imageAlt: 'Trust Visual',
    content: (
      <div className="space-y-4 sm:space-y-6">
        <p className="text-xl font-bold">TrybeSave is free to use.</p>
        <p className="text-slate-500 uppercase tracking-widest text-xs font-bold">
          We make money by:
        </p>
        <ul className="space-y-3 sm:space-y-4 text-slate-600">
          <li>Recommending relevant financial products</li>
          <li>Partnering with financial providers</li>
          <li>Offering optional premium features</li>
        </ul>

        <div className="pt-4 sm:pt-6 border-t border-slate-100 space-y-2 sm:space-y-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-green-50 rounded-lg">
              <svg
                className="w-5 h-5 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 13l4 4L19 7"></path>
              </svg>
            </div>
            <p className="font-bold text-slate-800">We never sell your data.</p>
          </div>
          <p className="text-slate-500 pl-10 sm:pl-11">
            We only recommend what benefits you.
          </p>
        </div>
      </div>
    ),
    bgColor: 'bg-white',
  },
];

const SectionWithImage = ({
  imageSrc,
  imageAlt,
  children,
  reverse = false,
  bgColor = 'bg-white',
}: {
  imageSrc: any;
  imageAlt: string;
  children: React.ReactNode;
  reverse?: boolean;
  bgColor?: string;
}) => (
  <section className={`${bgColor} py-16 sm:py-20 md:py-24`}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
      <div
        className={`flex justify-center ${reverse ? 'order-2 lg:order-1' : ''}`}>
        <Image
          src={imageSrc}
          alt={imageAlt}
          className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-xl object-cover"
        />
      </div>
      <div
        className={`space-y-6 sm:space-y-8 ${reverse ? 'order-1 lg:order-2' : ''}`}>
        {children}
      </div>
    </div>
  </section>
);

export default function AccrossBorders() {
  return (
    <div className="bg-white text-slate-900 font-sans antialiased overflow-hidden">
      {SECTIONS.map((section, idx) => (
        <div key={idx}>
          <div className="text-center mt-12 sm:mt-16 md:mt-20 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black">
              {section.title}
            </h2>
          </div>
          <SectionWithImage
            imageSrc={section.image}
            imageAlt={section.imageAlt}
            reverse={idx % 2 === 1} // alternate image/text
            bgColor={section.bgColor}>
            {section.content}
          </SectionWithImage>
        </div>
      ))}
    </div>
  );
}
