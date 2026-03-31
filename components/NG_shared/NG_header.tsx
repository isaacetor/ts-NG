'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../../public/logo/trybesave_logo.png';
import WaitlistModal from '@/components/utils/WaitlistModal';

/* =========================
   Animation Config
========================= */
const menuVariants: Variants = {
  closed: { opacity: 0, y: -10, transition: { duration: 0.2 } },
  open: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
  },
};

/* =========================
   Navigation Config
========================= */
const NAV_LINKS = [
  { label: 'Credit', href: '/ng/credit' },
  { label: 'Saving', href: '/ng/saving' },
  { label: 'Budgeting', href: '/ng/budgeting' },
  { label: 'About us', href: '/ng/about' },
];

/* =========================
   Mobile Menu Component
========================= */
function MobileMenu({ isOpen }: { isOpen: boolean }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={menuVariants}
          initial="closed"
          animate="open"
          exit="closed"
          className="absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-2xl md:hidden overflow-hidden">
          <nav className="flex flex-col p-6 space-y-2">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="py-2 text-lg font-semibold text-[#2D2A4A] hover:text-[#5D57A0]">
                {link.label}
              </Link>
            ))}

            <hr className="border-gray-100 my-2" />
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* =========================
   Header Component
========================= */
export default function NG_Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#FEF3FF] backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-10">
            <Link
              href="/ng"
              className="shrink-0">
              <Image
                src={logo}
                alt="TrybeSave Logo"
                width={128}
                height={36}
                className="object-contain w-32 h-auto"
                priority
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-[#2D2A4A] hover:text-[#5D57A0] font-medium text-[15px] transition-colors">
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-6">
            <button
              onClick={() => setModalOpen(true)}
              className="group relative flex items-center gap-2 
              bg-[#FF00FF] text-white 
              px-4 py-2 text-[13px]
              md:px-6 md:py-2.5 md:text-[15px]
              rounded-xl md:rounded-[10px] 
              font-semibold md:font-bold
              whitespace-nowrap
              hover:bg-[#c400c4] 
              transition-all shadow-sm active:scale-95">
              Get Early Access
            </button>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="md:hidden p-2 text-[#2D2A4A]"
              aria-label="Toggle menu">
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      <WaitlistModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />

      {/* Mobile Menu */}
      <MobileMenu isOpen={mobileMenuOpen} />
    </header>
  );
}
