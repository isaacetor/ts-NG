'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import ama from '../../../public/ama.jpg';
import james from '../../../public/james.jpg';
import zainab from '../../../public/zainab.jpg';

const Remit_Stories: React.FC = () => {
  const stories = [
    {
      quote:
        "I finally know what I'm spending each month and my family gets more of what I send.",
      name: 'Amara Okafor',
      role: 'Remittance sender, London',
      image: ama,
    },
    {
      quote:
        'The tracking feature made me realize I could save money and still support my parents.',
      name: 'James Mensah',
      role: 'Financial planner, Toronto',
      image: james,
    },
    {
      quote:
        "No more guessing about rates or losing money to hidden fees. It's all clear now.",
      name: 'Zainab Hassan',
      role: 'Business owner, Sydney',
      image: zainab,
    },
    {
      quote:
        "I finally know what I'm spending each month and my family gets more of what I send.",
      name: 'Amara Okafor',
      role: 'Remittance sender, London',
      image: ama,
    },
    {
      quote:
        'The tracking feature made me realize I could save money and still support my parents.',
      name: 'James Mensah',
      role: 'Financial planner, Toronto',
      image: james,
    },
  ];

  return (
    <section className="bg-white py-24 px-6 md:px-16 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-black tracking-tight">
            Real stories
          </h2>
          <p className="text-gray-700 text-base md:text-lg">
            How TrybeSave changed the way people send money
          </p>
        </div>

        {/* Swiper Carousel */}
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          grabCursor={true}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="h-auto">
          {stories.map((story, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white border border-gray-200 rounded-2xl p-8 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
                <div className="space-y-8">
                  <p className="text-lg text-gray-800 leading-relaxed font-light">
                    &quot;{story.quote}&quot;
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div>
                      <h4 className="font-bold text-[#3D003E]">{story.name}</h4>
                      <p className="text-sm text-gray-500">{story.role}</p>
                    </div>
                  </div>
                </div>

                <button className="mt-8 flex items-center gap-2 text-sm font-bold text-black hover:opacity-70 transition-opacity ">
                  Read case study
                  <svg
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Remit_Stories;
