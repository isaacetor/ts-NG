'use client';

export function AboutCommunity() {
  const communityPoints = [
    'Moved abroad to build better opportunities',
    'Support families back home',
    'Send money across borders',
    'Balance responsibilities across countries',
  ];

  return (
    <section className="relative bg-[#FDF5FD] overflow-hidden py-28 px-6 md:px-16 lg:px-24 text-black">
      {/* Ambient gradient glow */}
      <div className="absolute -top-32 right-0 w-[380px] h-[380px] bg-purple-300/20 blur-[140px] rounded-full" />
      <div className="absolute bottom-0 left-0 w-[360px] h-[360px] bg-pink-300/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 items-start">
        {/* Left Side: Sticky Header */}
        <div className="md:sticky md:top-28 self-start space-y-4">
          <span className="text-[13px] font-bold uppercase tracking-tight">
            Built For the Global community
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-bold leading-[1.1] tracking-tight max-w-md">
            TrybeSave is designed for people who live between worlds
          </h2>
          {/* subtle gradient underline */}
          <div className="mt-6 w-16 h-[3px] bg-gradient-to-r from-purple-600 to-pink-500 rounded-full" />
        </div>

        {/* Right Side: Description & List */}
        <div className="mt-2 md:mt-12 space-y-10">
          <div>
            <p className="font-bold text-[16px] mb-6">People who:</p>
            <ul className="space-y-4">
              {communityPoints.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-4 text-[17px] md:text-[18px]">
                  <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4 text-[17px] md:text-[18px] leading-relaxed opacity-90">
            <p>These experiences are not rare.</p>
            <p>
              They are shared by millions of people across the world. We built
              TrybeSave to support this global community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
