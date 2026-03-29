'use client'

export default function CallToAction() {
  return (
    <section
      className="relative py-20 px-8 md:px-16 overflow-hidden"
      style={{ backgroundColor: '#3b0764' }}
    >
      {/* Topographic SVG background lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <svg
          className="w-full h-full"
          viewBox="0 0 1440 500"
          preserveAspectRatio="xMidYMid slice"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
        >
          {/* Layered topographic contour lines */}
          {[
            "M-100,80 C200,20 400,160 700,80 C1000,0 1200,140 1540,60",
            "M-100,140 C150,80 380,220 700,130 C1020,40 1250,180 1540,110",
            "M-100,200 C180,130 420,280 700,190 C980,100 1230,240 1540,170",
            "M-100,260 C200,190 450,340 700,250 C950,160 1220,300 1540,230",
            "M-100,320 C170,250 400,400 700,310 C1000,220 1240,360 1540,290",
            "M-100,380 C190,310 430,460 700,370 C970,280 1220,420 1540,350",
            "M-100,440 C160,370 410,500 700,420 C990,340 1230,470 1540,410",
            "M-100,20  C220,-40 460,120 700,20  C940,-80 1200,80 1540,0",
            "M-100,480 C200,420 450,520 700,470 C950,420 1200,500 1540,460",
          ].map((d, i) => (
            <path
              key={i}
              d={d}
              stroke="#d8b4fe"
              strokeWidth="1.2"
              strokeOpacity="0.35"
            />
          ))}
        </svg>
      </div>

      {/* White frosted card */}
      <div
        className="relative z-10 max-w-4xl mx-auto text-center rounded-2xl py-16 px-8 md:px-16"
        style={{ backgroundColor: 'rgba(240, 235, 245, 0.92)' }}
      >
        <h2
          className="font-extrabold text-black mb-4"
          style={{ fontSize: 'clamp(1.6rem, 4vw, 2.4rem)', lineHeight: '1.3' }}
        >
          Take Control of Your Money Today<br />
          Stop guessing.
        </h2>

        <p className="text-gray-600 mb-8" style={{ fontSize: '1rem' }}>
          Start building financial stability.
        </p>

        <button
          style={{
            backgroundColor: '#5b1a8a',
            color: '#ffffff',
            border: 'none',
            borderRadius: '8px',
            padding: '14px 36px',
            fontSize: '1rem',
            fontWeight: '600',
            cursor: 'pointer',
            letterSpacing: '0.01em',
          }}
          onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#3b0764')}
          onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#5b1a8a')}
        >
          Join TrybeSave
        </button>
      </div>
    </section>
  )
}