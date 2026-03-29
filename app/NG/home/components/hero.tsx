'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#FEF3FF] to-white flex items-center justify-center px-4 py-12 md:py-0">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-6 order-2 md:order-1">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6">
              The Smarter Way to Manage Your Money in Nigeria
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-6">
              TrybeSave helps you save consistently, track your spending, earn rewards, and build real financial stability — all in one place.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Button 
              size="lg"
              className="bg-[#9D2766] hover:bg-[#7a1f4a] text-white rounded-lg px-8 py-6 text-base font-semibold w-full sm:w-auto"
            >
              Get Early Access
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-[#9D2766] text-[#9D2766] hover:bg-[#FEF3FF] rounded-lg px-8 py-6 text-base font-semibold w-full sm:w-auto"
            >
              See How It Works
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-center items-center order-1 md:order-2">
          <div className="relative w-full max-w-sm h-96 md:h-full md:max-w-none">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hero_image-b8XZQdGIDry3qaAgv23qtqfZCMuRHk.png"
              alt="TrybeSave Mobile App with Piggy Bank"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
