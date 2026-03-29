'use client'

import Image from 'next/image'

export default function CreditThatWorks() {
  return (
    <section className="bg-white py-20 px-8 md:px-16">
      {/* Section Title */}
      <h2
        className="text-center font-extrabold uppercase mb-16"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#111111', letterSpacing: '0.05em' }}
      >
        CREDIT THAT WORKS FOR YOU
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div className="space-y-6 pl-4 md:pl-8">
          <div className="space-y-3">
            <p className="font-bold text-black" style={{ fontSize: '1.05rem' }}>
              Most loan apps:
            </p>
            <ul className="space-y-2 pl-2">
              {['Charge high interest', 'Trap users in debt', 'Harass users'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-black" style={{ fontSize: '1.05rem' }}>
                  <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-black" style={{ fontSize: '1.05rem' }}>
              TrybeSave is different.<br />You unlock credit by:
            </p>
            <ul className="space-y-2 pl-2">
              {['Saving consistently', 'Managing money responsibly', 'Building your Stability Score'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-black" style={{ fontSize: '1.05rem' }}>
                  <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-bold text-black mt-2" style={{ fontSize: '1.05rem' }}>
              Credit is earned — not forced.
            </p>
          </div>
        </div>

        {/* Right: Image asset */}
        <div className="flex justify-center items-center pr-4 md:pr-8">
          <div className="relative w-full" style={{ maxWidth: '460px', height: '420px' }}>
            <Image
              src="/content_7_image.png"
              alt="Credit score cards showing Very Good score of 1,000 and stability chart of 808"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  )
}