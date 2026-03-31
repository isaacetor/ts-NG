'use client';

import { useState, useEffect } from 'react';
import Image, { StaticImageData } from 'next/image';
import pic from '../../public/70.jpg';

interface Testimonial {
  id: number;
  quote: string;
  image: StaticImageData;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      'This Product gives you a chance to save Better and smarter without stress',
    image: pic,
  },
  {
    id: 2,
    quote:
      'Finally, a way to manage my savings and support family without losing track.',
    image: pic,
  },
  {
    id: 3,
    quote:
      'The structure TrybeSave provides has completely changed my financial habits.',
    image: pic,
  },
  {
    id: 4,
    quote:
      'Simple, effective, and built for people like me. I highly recommend it.',
    image: pic,
  },
];

export function AboutFinancialStability() {
  const [activeTab, setActiveTab] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Autoplay slider
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative bg-[#AA0EBA] py-28 px-6 md:px-16 lg:px-24 text-white overflow-hidden">
      {/* Ambient gradients */}
      <div className="absolute -top-32 right-0 w-100 h-100 bg-purple-300/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-20 left-0 w-95 h-95 bg-pink-300/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative items-start">
          {/* Left Column: Sticky Header */}
          <div className="md:sticky md:top-28 self-start">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-80">
              Why we built TrybeSave
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight">
              Financial Stability Should Be Possible For Everyone
            </h2>

            {/* subtle accent line */}
            <div className="mt-6 w-16 h-[0.75 bg-linear-to-r from-purple-600 to-pink-500 rounded-full" />
          </div>

          {/* Right Column: Text */}
          <div className="space-y-8 text-[15px] md:text-[16px] leading-relaxed font-light opacity-95">
            <p className="font-medium text-[17px] opacity-100">
              We believe that supporting family should not come at the cost of
              your own financial future.
            </p>

            <div className="space-y-1">
              <p className="font-medium mb-2 opacity-100">
                You should be able to:
              </p>
              <p>Save consistently</p>
              <p>Support your loved ones</p>
              <p>Plan for your goals</p>
              <p>And build long-term financial stability</p>
              <p>At the same time.</p>
            </div>

            <p>
              TrybeSave was built to make that possible. Instead of complicated
              financial tools, we focused on creating a simple system that helps
              people:
            </p>

            <div className="space-y-1">
              <p>Save automatically</p>
              <p>Track their spending</p>
              <p>Organize financial goals</p>
              <p>Understand their financial</p>

              <p className="mt-4">
                Our goal is to give people the structure they need to build
                <br className="hidden md:block" />
                better financial habits.
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Slider */}
        <div
          className="mt-24 bg-[#3D003E] rounded-2xl overflow-hidden p-8 md:p-12 lg:p-16 min-h-130 flex flex-col md:flex-row items-center gap-12 shadow-2xl relative z-10"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div
              key={`img-${activeTab}`}
              className="relative aspect-4/5 w-full max-w-85 rounded-xl overflow-hidden shadow-2xl transition-opacity duration-500">
              <Image
                src={testimonials[activeTab].image}
                alt={`Testimonial slide ${activeTab + 1}`}
                fill
                sizes="(max-width: 768px) 100vw, 340px"
                className="object-cover"
              />
            </div>
          </div>

          {/* Quote */}
          <div className="w-full md:w-1/2 flex flex-col justify-between min-h-75">
            <div className="space-y-6">
              <div className="text-6xl font-serif text-[#D1A37E] leading-none select-none">
                “
              </div>

              <p
                key={`txt-${activeTab}`}
                className="text-2xl md:text-3xl lg:text-4xl font-light leading-snug animate-in fade-in slide-in-from-bottom-2 duration-700">
                {testimonials[activeTab].quote}
              </p>
            </div>

            {/* Indicators */}
            <div className="flex items-end gap-3 pt-12">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className="group relative h-8 flex items-end pb-2"
                  aria-label={`Go to slide ${index + 1}`}>
                  <div
                    className={`h-0.5 transition-all duration-500 rounded-full ${
                      activeTab === index
                        ? 'w-24 bg-[#22C55E]'
                        : 'w-12 bg-white/20 group-hover:bg-white/40'
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
