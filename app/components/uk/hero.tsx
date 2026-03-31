'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import pic from '../../../public/aug__25.png';
import WaitlistModal from '@/app/components/utils/WaitlistModal';

const HERO_CONTENT = {
  title: 'Money Under Control',
  description:
    'trybeSave helps you save automatically, track your spending, and build financial stability - not just monitor your money.',
  primaryBtn: {
    text: 'Get Early Access',
  },
  secondaryBtn: { text: 'See How it Works', href: '/about' },
};

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);

  const brandColor = '#FF00FF';
  const btnColor = '#9C2A9B';

  const Button = ({
    text,
    href,
    onClick,
    external,
  }: {
    text: string;
    href?: string;
    onClick?: () => void;
    external?: boolean;
  }) => {
    // If onClick exists → act as button
    if (onClick) {
      return (
        <button
          onClick={onClick}
          className="flex items-center justify-between gap-2 px-5 py-2.5 md:px-8 md:py-4 rounded-lg text-white font-semibold md:font-bold text-[14px] md:text-lg transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-pink-200"
          style={{ backgroundColor: btnColor }}>
          {text}
          <ArrowRight
            size={18}
            strokeWidth={3}
          />
        </button>
      );
    }

    // Otherwise → link
    return (
      <Link
        href={href!}
        target={external ? '_blank' : '_self'}
        className="flex items-center justify-between gap-2 px-5 py-2.5 md:px-8 md:py-4 rounded-lg text-white font-semibold md:font-bold text-[14px] md:text-lg transition-transform hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-pink-200"
        style={{ backgroundColor: btnColor }}>
        {text}
        <ArrowRight
          size={18}
          strokeWidth={3}
        />
      </Link>
    );
  };

  return (
    <>
      <section className="relative overflow-hidden bg-[#F9FAFB] py-12 lg:py-24">
        {/* Gradient accent */}
        <div
          className="absolute top-0 right-0 w-1/3 h-full pointer-events-none opacity-5"
          style={{
            background: `linear-gradient(135deg, ${brandColor} 0%, transparent 100%)`,
            clipPath: 'polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)',
          }}
        />

        <div className="max-w-7xl mx-auto px-5 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="z-10">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-extrabold text-[#2D2A4A] leading-tight mb-4 md:mb-6">
              {HERO_CONTENT.title}
            </h1>

            <p className="text-[15px] md:text-lg text-gray-600 mb-6 md:mb-10 max-w-xl leading-relaxed">
              {HERO_CONTENT.description}
            </p>

            {/* Desktop Buttons */}
            <div className="flex flex-col gap-3 mt-4 max-md:hidden">
              {/* PRIMARY → OPENS MODAL */}
              <Button
                text={HERO_CONTENT.primaryBtn.text}
                onClick={() => setIsOpen(true)}
              />

              <Button
                text={HERO_CONTENT.secondaryBtn.text}
                href={HERO_CONTENT.secondaryBtn.href}
              />
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-end mt-6 lg:mt-0">
            <div className="w-full max-w-70 md:max-w-md lg:max-w-lg">
              <Image
                src={pic}
                alt="Hero Illustration"
                className="w-full h-auto object-contain"
                priority
              />
            </div>

            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-5 blur-3xl rounded-full"
              style={{ backgroundColor: brandColor }}
            />
          </motion.div>

          {/* Mobile Buttons */}
          <div className="flex flex-col gap-3 mt-4 md:hidden">
            {/* PRIMARY → OPENS MODAL */}
            <Button
              text={HERO_CONTENT.primaryBtn.text}
              onClick={() => setIsOpen(true)}
            />

            <Button
              text={HERO_CONTENT.secondaryBtn.text}
              href={HERO_CONTENT.secondaryBtn.href}
            />
          </div>
        </div>
      </section>

      {/* MODAL */}
      <WaitlistModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
}
