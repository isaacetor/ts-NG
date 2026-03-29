'use client'

import Image from 'next/image'

export default function HowWeMakeMoney() {
  return (
    <section className="bg-white py-20 px-8 md:px-16">

      {/* Section Title */}
      <h2
        className="text-center font-extrabold uppercase mb-16"
        style={{
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          color: '#111111',
          letterSpacing: '0.06em',
        }}
      >
        HOW WE MAKE MONEY
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div className="space-y-5 pl-4 md:pl-8">
          <div className="space-y-4">
            <p className="text-black" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              Transparent Business Model
            </p>
            <p className="text-black" style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
              TrybeSave is free to start.<br />
              <strong>We earn through:</strong>
            </p>
            <ul className="space-y-2 pl-1">
              {[
                'Cashback partnerships',
                'Financial product recommendations',
                'Optional premium features',
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-black"
                  style={{ fontSize: '1.05rem' }}
                >
                  <span
                    className="inline-block flex-shrink-0"
                    style={{
                      width: '7px',
                      height: '7px',
                      borderRadius: '50%',
                      backgroundColor: '#111',
                    }}
                  />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-bold text-black" style={{ fontSize: '1.1rem', lineHeight: '1.5' }}>
              We never exploit users with hidden fees.
            </p>
          </div>
        </div>

        {/* Right: Image asset — Opportunities card */}
        <div className="flex justify-center items-center pr-4 md:pr-8">
          <div
            className="relative w-full"
            style={{ maxWidth: '480px', height: '360px' }}
          >
            <Image
              src="/content_10_image.png"
              alt="Opportunities card showing Switch Energy Provider and Better Savings Rate options"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  )
}