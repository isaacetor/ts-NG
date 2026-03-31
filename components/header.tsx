'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Menu, X, ChevronDown } from 'lucide-react';
import logo from '../public/logo/trybesave_logo.png';
import WaitlistModal from './utils/WaitlistModal';

/* =========================
   Animation ConfigB
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
  {
    label: 'Savings',
    subLinks: [
      { label: 'Individual Savings', href: '/uk/savings/individual' },
      { label: 'Savings for Couples', href: '/uk/savings/for-couples' },
    ],
  },
  { label: 'Remittance', href: '/uk/remittance' },
  { label: 'About', href: '/uk/about' },
];

/* =========================
   Mobile Menu Component
========================= */
function MobileMenu({ isOpen }: { isOpen: boolean }) {
  const [savingsOpen, setSavingsOpen] = useState(false);

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
              <div key={link.label}>
                {link.subLinks ? (
                  <div className="flex flex-col">
                    <button
                      onClick={() => setSavingsOpen((prev) => !prev)}
                      className="flex justify-between items-center w-full text-left text-lg font-semibold text-[#2D2A4A] py-2">
                      {link.label}
                      <ChevronDown
                        size={16}
                        className={`transition-transform duration-300 ${
                          savingsOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    <AnimatePresence>
                      {savingsOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          className="pl-4 flex flex-col">
                          {link.subLinks.map((sub) => (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              className="py-2 text-[#2D2A4A] font-medium hover:text-[#5D57A0]">
                              {sub.label}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    href={link.href!}
                    className="py-2 text-lg font-semibold text-[#2D2A4A] hover:text-[#c400c4#5D57A0]">
                    {link.label}
                  </Link>
                )}
              </div>
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
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState(false);

  const toggleMenu = () => setMobileMenuOpen((prev) => !prev);

  return (
    <header className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-10">
            <Link
              href="/"
              className="flex-shrink-0">
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
              {NAV_LINKS.map((link) =>
                link.subLinks ? (
                  <div
                    key={link.label}
                    className="relative group cursor-pointer flex items-center gap-1 text-[#2D2A4A] hover:text-[#ca00ca] font-medium text-[15px] transition-colors">
                    <span>{link.label}</span>
                    <ChevronDown
                      size={14}
                      className="mt-0.5 group-hover:rotate-180 transition-transform duration-300"
                    />
                    <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="bg-white border border-gray-100 shadow-xl rounded-2xl py-2 w-56">
                        {link.subLinks.map((sub) => (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            className="block px-5 py-3 hover:bg-gray-50 text-[#2D2A4A]">
                            {sub.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.label}
                    href={link.href!}
                    className="text-[#2D2A4A] hover:text-[#5D57A0] font-medium text-[15px] transition-colors">
                    {link.label}
                  </Link>
                ),
              )}
            </nav>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-2 md:gap-6">
            {/* <Link
              href="#"
              className="hidden md:block text-[#2D2A4A] font-medium text-[15px] hover:opacity-70 transition">
              Sign in
            </Link> */}

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
              onClick={toggleMenu}
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
