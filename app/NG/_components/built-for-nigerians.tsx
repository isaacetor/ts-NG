'use client'

import Image from 'next/image'

export default function BuiltForNigerians() {
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
        BUILT FOR NIGERIANS
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

        {/* Left: Text */}
        <div className="space-y-5 pl-4 md:pl-8">
          <div className="space-y-4">
            <p className="font-bold text-black" style={{ fontSize: '1.15rem' }}>
              Designed for:
            </p>
            <ul className="space-y-2 pl-1">
              {[
                'Salary earners',
                'Freelancers',
                'Entrepreneurs',
                'Students',
                'Everyday Nigerian',
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

            {/* Divider dashes */}
            <p className="text-gray-400 tracking-widest" style={{ fontSize: '1rem', letterSpacing: '0.3em' }}>
              ------
            </p>

            <p className="font-bold text-black" style={{ fontSize: '1.15rem', lineHeight: '1.5' }}>
              Anyone who wants to take control of their money.
            </p>
          </div>
        </div>

        {/* Right: Image asset — two stacked transaction cards */}
        <div className="flex justify-center items-center pr-4 md:pr-8">
          <div
            className="relative w-full"
            style={{ maxWidth: '460px', height: '420px' }}
          >
            <Image
              src="/content_9_image.png"
              alt="Recent Transactions card showing Tesco, Costa Coffee, Netflix, Family Transfer and Salary"
              fill
              className="object-contain drop-shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  )
}