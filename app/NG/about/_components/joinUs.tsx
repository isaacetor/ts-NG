import React from 'react';

const JoinUs = () => {
  const challengePoints = [
    'How much should we send home?',
    'How do we save consistently?',
    'How do we plan for the future while helping our families?',
  ];

  return (
    <div className="relative bg-[#FDF5FD] overflow-hidden">
      {/* Shared ambient glows */}
      <div className="absolute -top-32 right-0 w-105 h-105 bg-purple-300/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-95] h-95] bg-pink-300/20 blur-[120px] rounded-full" />

      {/* FRIENDS WITH THE SAME CHALLENGE */}
      <section className="relative py-28 px-6 md:px-16 lg:px-24 border-b border-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Sticky Left Header */}
          <div className="md:sticky md:top-28 self-start">
            <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight text-black">
              Join us
            </h2>
            <div className="mt-6 w-16 h-0.75 bg-linear-to-r from-purple-600 to-pink-500 rounded-full" />
          </div>

          {/* Right Content */}
          <div className="space-y-10 text-[18px] md:text-[18px] leading-relaxed text-gray-800">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-semibold text-black">
                TrybeSave is just getting started
              </h3>
              <p>
                We are building a platform that helps Nigerians take control of
                their finances, build stability, and create opportunities for
                the future.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                Because when people are financially stable, they can build
                stronger families, businesses, and communities.
              </p>

              <p className="font-semibold text-black">
                And that is the future we want to help create.
              </p>
            </div>
          </div>
        </div>

        {/* Fade at bottom to blend into next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#FDF5FD] via-transparent to-transparent pointer-events-none" />
      </section>
    </div>
  );
};

export default JoinUs;
