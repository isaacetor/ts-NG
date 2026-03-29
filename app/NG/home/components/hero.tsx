'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section
      style={{ backgroundColor: '#F0EEEE' }}
      className="min-h-screen flex items-center justify-center px-8 py-16 md:py-20"
    >
      <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* Left Content */}
        <div className="flex flex-col justify-center space-y-8 order-2 md:order-1 pl-4 md:pl-8">
          <div className="space-y-5">
            <h1
              className="font-extrabold leading-tight tracking-tight"
              style={{
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                color: '#111111',
                lineHeight: '1.2',
              }}
            >
              The Smarter Way to Manage<br />
              Your Money in Nigeria
            </h1>

            <p
              className="leading-relaxed"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                color: '#444444',
                maxWidth: '480px',
                lineHeight: '1.7',
              }}
            >
              TrybeSave helps you save consistently, track your
              spending, earn rewards, and build real financial stability
              — all in one place.
            </p>
          </div>

          {/* Buttons — both dark purple, stacked, full-width on mobile */}
          <div className="flex flex-col gap-4" style={{ maxWidth: '380px' }}>
            <button
              style={{
                backgroundColor: '#3D1040',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '16px 32px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2a0a2d')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3D1040')}
            >
              Get Early Access
            </button>

            <button
              style={{
                backgroundColor: '#4A1A50',
                color: '#FFFFFF',
                border: 'none',
                borderRadius: '8px',
                padding: '16px 32px',
                fontSize: '1rem',
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%',
                letterSpacing: '0.01em',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#330e38')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#4A1A50')}
            >
              See How It Works
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div
          className="relative flex justify-center items-center order-1 md:order-2 pr-4 md:pr-8"
        >
          <div
            className="relative w-full"
            style={{ height: '520px', maxWidth: '520px' }}
          >
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