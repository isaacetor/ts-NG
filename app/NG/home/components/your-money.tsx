'use client'

import Image from 'next/image'

export default function YourMoney() {
  const features = [
    { text: 'Save automatically', description: 'even on unpredictable income', icon: '💾' },
    { text: 'Track spending clearly', description: 'know where your money goes', icon: '📊' },
    { text: 'Get paid early', description: 'access part of your salary through our partner companies', icon: '⚡' },
    { text: 'Earn cashback', description: 'when you spend with TrybeSave and our partners', icon: '💰' },
    { text: 'Unlock responsible credit', description: 'based on your savings', icon: '💳' },
    { text: 'Build financial discipline', description: 'stay in control of your money', icon: '🎯' },
  ]

  return (
    <section className="bg-gradient-to-b from-[#FDE8FF] to-[#F2F7FF] py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
          {/* Left Image */}
          <div className="order-2 md:order-1 flex justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/content%202%20image-MosXvHcNOZDZmbXZSNmp7A4ZCtI9iE.png"
                alt="Your Money Structured Dashboard"
                width={400}
                height={600}
                className="w-full h-auto"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="order-1 md:order-2 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black text-balance mb-6">
                Your Money. Structured.
              </h2>
              <p className="text-xl text-gray-800 font-semibold mb-8">
                TrybeSave helps you:
              </p>
            </div>

            <div className="space-y-4">
              {features.map((feature, index) => (
                <div key={index} className="flex gap-3">
                  <span className="text-2xl flex-shrink-0">{feature.icon}</span>
                  <div>
                    <p className="text-lg font-bold text-black">
                      {feature.text} <span className="font-normal text-gray-700">— {feature.description}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <p className="text-xl font-bold text-black">
                All in one system.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
