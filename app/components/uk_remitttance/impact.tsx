'use client';

import React, { useEffect, useRef, useState } from 'react';

const useCountUp = (end: number, duration = 1500, start = 0) => {
  const [count, setCount] = useState(start);
  const ref = useRef<number | null>(null);

  useEffect(() => {
    let startTime: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;

      const progressRatio = Math.min(progress / duration, 1);
      const value = Math.floor(progressRatio * (end - start) + start);

      setCount(value);

      if (progress < duration) {
        ref.current = requestAnimationFrame(animate);
      }
    };

    ref.current = requestAnimationFrame(animate);

    return () => {
      if (ref.current) cancelAnimationFrame(ref.current);
    };
  }, [end, duration, start]);

  return count;
};

const Remit_Impact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  // Trigger animation when in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const percent = useCountUp(visible ? 75 : 0);
  const billions = useCountUp(visible ? 800 : 0);

  return (
    <section
      ref={sectionRef}
      className="bg-[#FDF5FD] py-24 px-6 md:px-16 lg:px-24 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center lg:flex-row gap-12 lg:gap-24">
        {/* Left */}
        <div className="flex flex-col justify-center h-full space-y-4 text-center lg:text-left">
          <span className="text-sm font-bold text-black uppercase tracking-widest">
            Impact
          </span>

          <h2 className="text-4xl lg:text-5xl font-medium text-black tracking-tight leading-[1.1]">
            The numbers behind the struggle
          </h2>
        </div>

        {/* Right */}
        <div className="space-y-12">
          <p
            className={`text-gray-700 text-lg md:text-xl font-medium leading-relaxed max-w-xl transition-all duration-700 delay-100 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
            Millions of people send money home while building their own futures.
            The challenge is real, and it&apos;s widespread.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="group space-y-4 transition-all duration-500 hover:scale-105">
              <span className="text-6xl md:text-7xl font-bold text-black block">
                {percent}%
              </span>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                of diaspora workers report financial strain from competing
                priorities
              </p>
            </div>

            <div className="group space-y-4 transition-all duration-500 hover:scale-105">
              <span className="text-6xl md:text-7xl font-bold text-black block">
                £{billions}B
              </span>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                sent annually in remittances with no financial planning tools
              </p>
            </div>
          </div>

          {/* Buttons */}
          {/* <div className="flex flex-wrap items-center gap-6 pt-4">
            <button className="bg-white border border-gray-200 text-black px-8 py-3 rounded-xl font-bold text-sm hover:bg-gray-50 hover:scale-105 active:scale-95 transition-all shadow-sm">
              Start building
            </button>

            <button className="group flex items-center gap-2 text-black font-bold text-sm hover:opacity-70 transition-all">
              Explore
              <svg
                className="transition-transform duration-300 group-hover:translate-x-1"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Remit_Impact;
