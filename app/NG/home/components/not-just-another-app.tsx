'use client'

import Image from 'next/image'

export default function NotJustAnotherApp() {
  return (
    <section className="bg-white py-20 px-8 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div className="space-y-6 pl-4 md:pl-8">
          <h3
            className="font-extrabold text-black"
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', lineHeight: '1.2' }}
          >
            Not Just Another<br />Finance App
          </h3>

          <div className="space-y-3">
            <p className="text-black" style={{ fontSize: '1.05rem' }}>
              Nigeria has apps for:
            </p>
            <ul className="space-y-2 pl-2">
              {['Saving', 'Loans', 'Payments'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-black" style={{ fontSize: '1.05rem' }}>
                  <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-bold text-black" style={{ fontSize: '1.05rem' }}>
              But none help you build complete financial stability.
            </p>
            <p className="font-bold text-black" style={{ fontSize: '1.05rem' }}>
              TrybeSave changes that.
            </p>
          </div>
        </div>

        {/* Right: Actual image asset */}
        <div className="flex justify-center items-center pr-4 md:pr-8">
          <div className="relative w-full" style={{ maxWidth: '460px', height: '520px' }}>
            <Image
              src="/content_1_image.png"
              alt="Finance breakdown card showing spending categories with colorful donut chart"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  )
}