'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import Link from 'next/link';

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  location: string;
  rating: number;
  image: string;
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      quote: 'Seeing my savings goals grow every week keeps me motivated.',
      author: 'Sarah Chen',
      role: 'Professional',
      location: 'London',
      rating: 5,
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/content5-wla5nTKaIvZ6laDZCfmxx9kyzDHmYg.png',
    },
    {
      quote: 'I finally understand where my money goes each month.',
      author: 'Marcus Okafor',
      role: 'Entrepreneur',
      location: 'Lagos',
      rating: 5,
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/content4-vAijlXcA072JprBiwLcvWirwPuYPRg.png',
    },
    {
      quote: 'This app helped me start building savings for the first time.',
      author: 'Emma Williams',
      role: 'Student',
      location: 'Manchester',
      rating: 5,
      image:
        'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/content5-wla5nTKaIvZ6laDZCfmxx9kyzDHmYg.png',
    },
  ];

  return (
    <section className="w-full bg-white py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-black mb-2 md:mb-3">
            Real stories
          </h2>
          <p className="text-gray-700 text-sm md:text-lg">From early users</p>
        </div>

        {/* Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={16}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}>
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="bg-blue-50 border border-purple-400 rounded-lg p-4 md:p-6 flex flex-col h-full">
                {/* Stars */}
                <div className="flex gap-1 mb-2 md:mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <span
                      key={i}
                      className="text-purple-600 text-base md:text-lg">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-900 mb-4 md:mb-6 text-sm md:text-base grow">
                  "{t.quote}"
                </p>

                {/* Author */}
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-10 h-10 relative rounded-full overflow-hidden">
                    <Image
                      src={t.image}
                      alt={t.author}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-sm md:text-base text-black">
                      {t.author}
                    </p>
                    <p className="text-gray-600 text-xs md:text-sm">
                      {t.role}, {t.location}
                    </p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* CTA */}
      <div className="w-full bg-white pt-16 md:pt-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="bg-pink-100 py-16 md:py-24 px-6 md:px-12 text-center rounded-lg">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.2] mb-2 md:mb-4">
              Stop Guessing With Your Money
            </h2>
            <p className="text-sm md:text-lg text-gray-700 mb-4 md:mb-8">
              Start building stability
            </p>
            <Link
              href="https://forms.gle/qu9xqzoRWkfDCLAc9"
              target="_blank"
              className="bg-[#EA00FF] text-white font-semibold px-6 py-2.5 md:px-8 md:py-3 rounded-md hover:opacity-90 transition">
              Get Early Access
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
