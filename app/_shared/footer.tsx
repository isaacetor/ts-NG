'use client';

import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/logo/trybesave-logo-2.png';
import { Instagram } from 'lucide-react';
import tiktok from '../../public/svg/tiktok.svg';

const footerSections = [
  {
    title: 'Platform',
    links: [
      { label: 'Savings', href: '/savings/individual' },
      { label: 'Remittance Tracking', href: '/remittance' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about' },
      // { label: 'Contact', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Service', href: '#' },
    ],
  },
];

const socialLinks = [
  {
    type: 'icon',
    icon: Instagram,
    href: 'https://www.instagram.com/trybesavehq/',
    label: 'Instagram',
  },
  {
    type: 'image',
    icon: tiktok,
    href: 'https://www.tiktok.com/@trybesave',
    label: 'TikTok',
  },
];

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="mx-auto max-w-7xl px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="flex items-center gap-3 mb-6">
              <Image
                src={logo}
                alt="TrybeSave Logo"
                height={60}
                className="object-contain"
                priority
              />
            </Link>

            <p className="text-sm text-gray-700 leading-relaxed">
              We built TrybeSave because financial stress isn't caused by lack
              of knowledge.
            </p>
          </div>

          {/* Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-bold text-black mb-4">{section.title}</h4>

              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-gray-700 hover:text-black text-sm">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Socials */}
          <div>
            <h4 className="font-bold text-black mb-4">Connect</h4>

            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  aria-label={social.label}
                  className="text-gray-700 hover:text-black transition">
                  {social.type === 'icon' ? (
                    <social.icon size={20} />
                  ) : (
                    <Image
                      src={social.icon}
                      alt={social.label}
                      width={20}
                      height={20}
                    />
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-200 py-8">
          <p className="text-center text-sm text-gray-600 mb-4">
            It's caused by lack of structure. We believe discipline should be
            automated.
          </p>

          <p className="text-center text-sm text-gray-600">
            © 2026 TrybeSave. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
