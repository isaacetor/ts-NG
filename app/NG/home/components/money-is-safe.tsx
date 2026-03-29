'use client'

import Image from 'next/image'

export default function MoneyIsSafe() {
  return (
    <section
      className="py-20 px-8 md:px-16"
      style={{ backgroundColor: '#f5e6fa' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div className="space-y-6 pl-4 md:pl-8">
          <h3 className="font-bold text-black" style={{ fontSize: '1.8rem', lineHeight: '1.3' }}>
            Your Money Is Safe
          </h3>

          <ul className="space-y-4 pl-1">
            {[
              'Bank-level security',
              'Secure infrastructure',
              'Transparent systems',
            ].map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-black"
                style={{ fontSize: '1.1rem' }}
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

          <p className="font-bold text-black" style={{ fontSize: '1.1rem' }}>
            Your money stays protected.
          </p>
        </div>

        {/* Right: Image asset — purple shield */}
        <div className="flex justify-center items-center pr-4 md:pr-8">
          <div
            className="relative w-full"
            style={{ maxWidth: '420px', height: '420px' }}
          >
            <Image
              src="/content_11_image.png"
              alt="Purple security shield with checkmark representing bank-level protection"
              fill
              className="object-contain"
            />
          </div>
        </div>

      </div>
    </section>
  )
}