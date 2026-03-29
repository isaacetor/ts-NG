'use client'

import Image from 'next/image'

export default function CashbackRewards() {
  return (
    <section className="py-20 px-8 md:px-16" style={{ backgroundColor: '#e8f0fe' }}>
      {/* Section Title */}
      <h2
        className="text-center font-extrabold uppercase mb-16"
        style={{ fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#111111', letterSpacing: '0.05em' }}
      >
        CASHBACK &amp; REWARDS
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Image asset */}
        <div className="flex justify-center items-center pl-4 md:pl-8">
          <div className="relative w-full" style={{ maxWidth: '400px', height: '420px' }}>
            <Image
              src="/content_5_image.png"
              alt="Get free N250 referral card with copy link and share button"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

        {/* Right: Text */}
        <div className="space-y-5 pr-4 md:pr-8">
          <h3 className="font-bold text-black" style={{ fontSize: '1.6rem', lineHeight: '1.3' }}>
            Get Money Back When You Spend
          </h3>
          <div className="space-y-3">
            <p className="font-bold text-black" style={{ fontSize: '1.05rem' }}>
              Earn cashback on:
            </p>
            <ul className="space-y-2 pl-2">
              {['Fuel', 'Airtime', 'Groceries', 'Transport'].map((item) => (
                <li key={item} className="flex items-center gap-3 text-black" style={{ fontSize: '1.05rem' }}>
                  <span className="w-2 h-2 rounded-full bg-black inline-block flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <p className="font-bold text-black mt-4" style={{ fontSize: '1.1rem' }}>
              Your spending becomes savings.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}