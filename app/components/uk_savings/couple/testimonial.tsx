'use client';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import pic from '../../../../public/70.jpg';

const testimonials = [
  {
    quote:
      'This product gives you a chance to save better and smarter without stress. We finally feel aligned on our financial future.',
    author: 'Emma & John Doe',
    location: 'London, UK',
    rating: 5,
  },
  {
    quote:
      'TrybeSave has completely transformed our savings strategy. We can now plan with confidence for the future.',
    author: 'Sarah & Mark Smith',
    location: 'New York, USA',
    rating: 4,
  },
  {
    quote:
      'We are now on track to hit our financial goals thanks to TrybeSave. It’s so simple to use, and the results are real.',
    author: 'Chris & Jordan Lee',
    location: 'Sydney, Australia',
    rating: 5,
  },
];

export default function SavingsCouplesTestimonial() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Auto-play function to change testimonials every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000); // Change every 5 seconds

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  // Function to handle dot navigation
  const handleDotClick = (index: number) => {
    setCurrentTestimonial(index);
  };

  return (
    <section className="bg-linear-to-r from-purple-700 to-purple-600 text-white py-20 md:py-28 px-6 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Image Section */}
        <div className="relative h-87.5 md:h-125 rounded-lg overflow-hidden ">
          <Image
            src={pic}
            alt="Happy Couple"
            fill
            className="object-cover"
          />
        </div>

        {/* Right Content Section */}
        <div className="space-y-6 lg:space-y-8">
          {/* Quote Mark */}
          <div className="text-6xl md:text-7xl font-extrabold leading-tight opacity-80">
            "
          </div>

          {/* Testimonial Quote */}
          <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed max-w-xl">
            {testimonials[currentTestimonial].quote}
          </p>

          {/* Dots Navigation*/}
          {/* Dots Navigation */}
          <div className="flex gap-2 pt-8">
            {testimonials.map((_, index) => (
              <div
                key={index}
                onClick={() => handleDotClick(index)}
                className={`w-3 h-3 rounded-full bg-white opacity-80 transform hover:scale-110 cursor-pointer transition-all ${
                  currentTestimonial === index
                    ? 'bg-white scale-110'
                    : 'bg-white opacity-50 hover:opacity-100'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
