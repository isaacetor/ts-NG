'use client'

import Image from 'next/image'

export default function MoneyStructured() {
  const features = [
    { bold: 'Save automatically', rest: ' — even on unpredictable income' },
    { bold: 'Track spending clearly', rest: ' — know where your money goes' },
    { bold: 'Get paid early', rest: ' — access part of your salary through our partner companies' },
    { bold: 'Earn cashback', rest: ' — when you spend with TrybeSave and our partners' },
    { bold: 'Unlock responsible credit', rest: ' — based on your savings' },
    { bold: 'Build financial discipline', rest: ' — stay in control of your money' },
  ]

  return (
    <section
      className="py-20 px-8 md:px-16"
      style={{ backgroundColor: '#f5e6fa' }}
    >
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Image asset — the two stacked cards (budget donut + shopping) */}
        <div className="flex justify-center items-center pl-4 md:pl-8">
          <div
            className="relative w-full"
            style={{ maxWidth: '480px', height: '520px' }}
          >
            <Image
              src="/content_2_image.png"
              alt="February spend budget card and Shopping tracker card"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-6 pr-4 md:pr-8">
          <h3 className="font-bold text-black" style={{ fontSize: '1.8rem', lineHeight: '1.3' }}>
            Your Money. Structured.
          </h3>

          <div className="space-y-4">
            <p className="font-bold text-black" style={{ fontSize: '1.05rem' }}>
              TrybeSave helps you:
            </p>

            <div className="space-y-3">
              {features.map(({ bold, rest }) => (
                <p
                  key={bold}
                  className="text-black"
                  style={{ fontSize: '1rem', lineHeight: '1.6' }}
                >
                  <strong>{bold}</strong>{rest}
                </p>
              ))}
            </div>

            <p className="font-bold text-black mt-4" style={{ fontSize: '1.05rem' }}>
              All in one system.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}