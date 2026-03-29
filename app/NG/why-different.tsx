'use client'

import Image from 'next/image'

export default function WhyDifferent() {
  const features = [
    { bold: 'Save consistently', rest: ' — even on an irregular income' },
    { bold: 'Access credit early', rest: ' — based on your savings, not your connections' },
    { bold: 'Get paid early', rest: " — when life can't wait for payday" },
    { bold: 'Earn cashback', rest: ' — every time you spend with TrybeSave and our partners' },
  ]

  return (
    <section className="bg-white py-20 px-8 md:px-16">
      {/* Section Title */}
      <h2
        className="text-center font-extrabold uppercase mb-16"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#111111', letterSpacing: '0.05em' }}
      >
        WHY TRYBESAVE IS DIFFERENT
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Image asset */}
        <div className="flex justify-center items-center pl-4 md:pl-8">
          <div className="relative w-full" style={{ maxWidth: '460px', height: '360px' }}>
            <Image
              src="/content_8_image.png"
              alt="Opportunities card showing Switch Energy Provider and Better Savings Rate options"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6 pr-4 md:pr-8">
          <div className="space-y-3">
            <p className="font-bold text-black" style={{ fontSize: '1.05rem' }}>
              Nigeria already has apps for:
            </p>
            <ul className="space-y-2 pl-2">
              {['Saving', 'Loans', 'Payments'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-black" style={{ fontSize: '1.05rem' }}>
                  <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="text-black" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
              But none are built for how everyday Nigerians actually live and earn.
            </p>
          </div>

          <div className="space-y-3">
            <p className="font-bold text-black" style={{ fontSize: '1.05rem' }}>
              TrybeSave is different.<br />We help you:
            </p>
            <div className="space-y-2">
              {features.map(({ bold, rest }) => (
                <p key={bold} className="text-black" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
                  <strong>{bold}</strong>{rest}
                </p>
              ))}
            </div>
          </div>

          <p className="text-black" style={{ fontSize: '1.05rem', lineHeight: '1.7' }}>
            Because managing money shouldn&apos;t be stressful —<br />
            it should work with your reality, not against it.
          </p>
        </div>

      </div>
    </section>
  )
}