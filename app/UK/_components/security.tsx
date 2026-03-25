'use client';
import Image from 'next/image';
import { ShieldCheck } from 'lucide-react';

const Security = () => {
  const securityFeatures = [
    'Open Banking',
    'Encrypted data',
    'Secure authentication',
  ];

  return (
    <section className="w-full bg-[#FDEDFF] py-16 md:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="relative w-full lg:w-1/2 flex justify-center">
          <div className="relative w-full aspect-square max-w-125">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Placeholder%20Image-WxifpNz4YXmgeX62QxRZneryEcbumL.png"
              alt="A 3D rendered purple metallic security shield with a large white checkmark in the center representing bank-grade infrastructure"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Built on Secure <br /> Infrastructure
          </h2>

          <ul className="space-y-4 md:space-y-5">
            {securityFeatures.map((feature) => (
              <li
                key={feature}
                className="flex items-center justify-center lg:justify-start gap-3 text-slate-700 font-medium text-lg md:text-xl">
                <ShieldCheck className="w-6 h-6 text-purple-600 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>

          <p className="pt-4 text-lg md:text-xl font-bold text-slate-900 tracking-tight">
            Your money stays in your bank.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Security;
