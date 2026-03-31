'use client';

export function AboutFriendsChallenge() {
  const challengePoints = [
    'How much should we send home?',
    'How do we save consistently?',
    'How do we plan for the future while helping our families?',
  ];

  const visionPoints = [
    'Save for their future',
    'Support their families',
    'Plan their goals',
    'And build stronger financial habits',
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
              Friends With The Same Challenge
            </h2>
            <div className="mt-6 w-16 h-0.75 bg-linear-to-r from-purple-600 to-pink-500 rounded-full" />
          </div>

          {/* Right Content */}
          <div className="space-y-10 text-[18px] md:text-[18px] leading-relaxed text-gray-800">
            <div className="space-y-4">
              <h3 className="text-xl md:text-2xl font-bold text-black">
                We were friends long before TrybeSave existed.
              </h3>
              <p>
                Like many immigrants, our conversations often came back to
                money.
              </p>
            </div>

            <ul className="space-y-4">
              {challengePoints.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-4 text-[17px]">
                  <span className="mt-2 w-2 h-2 rounded-full bg-linear-to-r from-purple-600 to-pink-500 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="space-y-6">
              <p>
                Many people in our communities call this &quot;black tax&quot; —
                the responsibility of supporting family members while trying to
                build your own financial stability.
              </p>
              <p>It&apos;s not something we complain about.</p>
              <p>Supporting family is part of who we are.</p>
              <p>But it can also make financial planning complicated.</p>
              <p>Over time, we realized something important.</p>
              <p>
                Millions of people in the diaspora were facing the same
                challenge.
              </p>
              <p>
                Yet there was no financial platform built specifically to help
                people manage these responsibilities.
              </p>
              <p className="font-semibold text-black">
                So we decided to build one.
              </p>
            </div>
          </div>
        </div>

        {/* Fade at bottom to blend into next section */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-linear-to-t from-[#FDF5FD] via-transparent to-transparent pointer-events-none" />
      </section>

      {/* OUR VISION */}
      <section className="relative py-28 px-6 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-28 items-start">
          {/* Sticky Left Header */}
          <div className="md:sticky md:top-28 self-start">
            <h2 className="text-3xl md:text-4xl lg:text-[52px] font-bold tracking-tight leading-[1.05] text-black">
              OUR VISION
            </h2>
            <div className="mt-6 w-16 h-0.75 bg-linear-to-r from-purple-600 to-pink-500 rounded-full" />
          </div>

          {/* Right Content */}
          <div className="space-y-10 text-[18px] leading-relaxed text-black">
            <p>
              We want TrybeSave to become the platform that helps millions of
              people build financial stability.
            </p>

            <div className="space-y-6">
              <p className="font-semibold">A place where people can:</p>
              <ul className="space-y-4">
                {visionPoints.map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-[17px]">
                    <span className="mt-2 w-2 h-2 rounded-full bg-linear-to-r from-purple-600 to-pink-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <p className="font-medium">No matter where they live.</p>
          </div>
        </div>
      </section>
    </div>
  );
}
