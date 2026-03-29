'use client'

import Image from 'next/image'

export default function BuildSavings() {
  return (
    <section className="bg-white py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Image asset — content_4_image.png (the dark savings goals card) */}
        <div className="flex justify-center items-center pl-4 md:pl-8">
          <div
            className="relative w-full"
            style={{ maxWidth: '440px', height: '320px' }}
          >
            <Image
              src="/content_3_image.png"
              alt="Savings Goals card showing Emergency Fund, Holiday and New Laptop goals on dark background"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6 pr-4 md:pr-8">
          <h3 className="font-bold text-black" style={{ fontSize: '1.7rem', lineHeight: '1.3' }}>
            Build Savings Without Stress
          </h3>
          <div className="space-y-4">
            <p className="font-bold text-black" style={{ fontSize: '1.05rem' }}>
              Set simple saving rules:
            </p>
            <ul className="space-y-3 pl-1">
              {['Weekly saving', 'Monthly saving', 'Goal-based saving'].map((item) => (
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
            <p className="font-bold text-black" style={{ fontSize: '1.05rem' }}>
              Your savings grow before you spend.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}