'use client'

import Image from 'next/image'

export default function SavingsGoals() {
  const savingsGoals = [
    {
      name: 'Emergency Fund',
      range: '#1,200,000 / #3,000,000',
      progress: 40,
      icon: '🛡️',
    },
    {
      name: 'Holiday',
      range: '#650,000 / #2,000,00',
      progress: 32.5,
      icon: '✈️',
    },
    {
      name: 'New Laptop',
      range: '#400,00 / #800,000',
      progress: 50,
      icon: '💻',
    },
  ]

  return (
    <section className="bg-white py-12 md:py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                Build Savings Without Stress
              </h2>
              <p className="text-lg text-gray-800 font-semibold mb-6">
                Set simple saving rules:
              </p>
            </div>

            <ul className="space-y-4">
              <li className="text-lg text-gray-800">
                <span className="font-bold">•</span> Weekly saving
              </li>
              <li className="text-lg text-gray-800">
                <span className="font-bold">•</span> Monthly saving
              </li>
              <li className="text-lg text-gray-800">
                <span className="font-bold">•</span> Goal-based saving
              </li>
            </ul>

            <p className="text-xl text-gray-800 font-semibold">
              Your savings grow before you spend.
            </p>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-sm">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/content%203%20image-ffaSiHgG6J7BmGPUNf4DKKgbODym7m.png"
                alt="Savings Goals Dashboard"
                width={400}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
