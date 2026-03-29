'use client'

export default function RealStories() {
  const testimonials = [
    {
      quote: "This helped me finally start saving.",
      name: 'Sarah Chen',
      role: 'Professional, London',
      avatar: 'https://i.pravatar.cc/48?img=47',
    },
    {
      quote: "I didn't realise how much I was wasting.",
      name: 'Marcus Okafor',
      role: 'Entrepreneur, Lagos',
      avatar: 'https://i.pravatar.cc/48?img=25',
    },
    {
      quote: 'This is different from other app',
      name: 'Emma Williams',
      role: 'Student, Manchester',
      avatar: 'https://i.pravatar.cc/48?img=45',
    },
  ]

  return (
    <section
      className="py-20 px-8 md:px-16"
      style={{ backgroundColor: '#f5e6fa' }}
    >
      {/* Header */}
      <div className="text-center mb-14">
        <h2
          className="font-extrabold text-black mb-3"
          style={{ fontSize: 'clamp(2rem, 5vw, 3rem)' }}
        >
          Real stories
        </h2>
        <p className="text-gray-500" style={{ fontSize: '1rem' }}>
          From early users
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {testimonials.map(({ quote, name, role, avatar }) => (
          <div
            key={name}
            className="rounded-2xl p-6 flex flex-col justify-between gap-6"
            style={{
              backgroundColor: '#e8f4fd',
              border: '1.5px solid #c8e8f8',
            }}
          >
            {/* Stars */}
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} style={{ color: '#7c3aed', fontSize: '1.2rem' }}>★</span>
              ))}
            </div>

            {/* Quote */}
            <p className="text-black flex-1" style={{ fontSize: '1rem', lineHeight: '1.6' }}>
              {quote}
            </p>

            {/* Author */}
            <div className="flex items-center gap-3 mt-2">
              <img
                src={avatar}
                alt={name}
                className="rounded-full object-cover flex-shrink-0"
                style={{ width: '44px', height: '44px' }}
              />
              <div>
                <p className="font-bold text-black" style={{ fontSize: '0.95rem' }}>
                  {name}
                </p>
                <p className="text-gray-500" style={{ fontSize: '0.85rem' }}>
                  {role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}