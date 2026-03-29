'use client'

import Image from 'next/image'

export default function TrackSpending() {
  return (
    <section className="bg-white py-20 px-8 md:px-16">
      {/* Section Title */}
      <h2
        className="text-center font-extrabold uppercase mb-16"
        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', color: '#111111', letterSpacing: '0.08em' }}
      >
        TRACK SPENDING
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Text */}
        <div className="space-y-5 pl-4 md:pl-8">
          <h3 className="font-bold text-black" style={{ fontSize: '1.6rem', lineHeight: '1.3' }}>
            Know Where Your Money Goes
          </h3>
          <div className="space-y-3">
            <p className="font-semibold text-black" style={{ fontSize: '1.1rem' }}>
              See exactly how you spend:
            </p>
            <ul className="space-y-2 pl-2">
              {['Food', 'Transport', 'Airtime', 'Rent', 'Subscriptions'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-black" style={{ fontSize: '1.05rem' }}>
                  <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-bold text-black mt-4" style={{ fontSize: '1.05rem' }}>
              Clarity leads to better decisions.
            </p>
          </div>
        </div>

        {/* Right: Actual image asset */}
        <div className="flex justify-center items-center pr-4 md:pr-8">
          <div className="relative w-full" style={{ maxWidth: '460px', height: '360px' }}>
            <Image
              src="/content_4_image.png"
              alt="Spending tracker showing food, rent, transport and subscriptions breakdown"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}