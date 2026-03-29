'use client'

import Image from 'next/image'

export default function FinancialStrength() {
  return (
    <section className="bg-white py-20 px-8 md:px-16">
      {/* Section Title */}
      <h2
        className="text-center font-extrabold uppercase mb-16"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#111111', letterSpacing: '0.05em' }}
      >
        UNDERSTAND YOUR FINANCIAL STRENGTH
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div className="space-y-5 pl-4 md:pl-8">
          <p className="text-black" style={{ fontSize: '1.1rem', lineHeight: '1.7' }}>
            Your Stability Score shows how financially secure you are.
          </p>
          <div className="space-y-3">
            <p className="font-bold text-black" style={{ fontSize: '1.05rem' }}>
              Based on:
            </p>
            <ul className="space-y-2 pl-2">
              {[
                'Savings consistency',
                'Spending behavior',
                'Financial discipline',
                'Progress toward goals',
              ].map((item) => (
                <li key={item} className="flex items-center gap-3 text-black" style={{ fontSize: '1.05rem' }}>
                  <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right: Image asset */}
        <div className="flex justify-center items-center pr-4 md:pr-8">
          <div className="relative w-full" style={{ maxWidth: '500px', height: '320px' }}>
            <Image
              src="/content_6_image.png"
              alt="Stability Score dashboard showing savings, spending and habits metrics"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  )
}