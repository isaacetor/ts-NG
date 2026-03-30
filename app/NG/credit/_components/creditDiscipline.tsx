import Image from 'next/image';

const CreditDiscipline = () => {
  return (
    <section className="w-full bg-white px-6 py-20 md:py-32 lg:py-40">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        {/* Visual: Appears first on mobile to set the positive tone */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="relative w-full max-w-[600px]">
            {/* Subtle radial glow to highlight the central character */}
            <div className="absolute inset-0 bg-[#F3E8FF] rounded-full blur-[120px] -z-10 scale-75 opacity-60" />

            <Image
              src="/credit/discipline.png" // Update to your actual image path
              alt="Illustration of financial discipline with TrybeSave: consistent savings and responsible management leading to credit access."
              width={600}
              height={600}
              className="w-full h-auto drop-shadow-xl"
              priority
            />
          </div>
        </div>

        {/* Text Content: Right side on desktop */}
        <div className="w-full lg:w-1/2 order-1 lg:order-2 space-y-8 lg:space-y-10">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#0A0A0A] leading-tight tracking-tight">
              Credit built on <br /> financial discipline
            </h2>

            <p className="text-lg md:text-xl lg:text-2xl font-normal text-[#4A4A4A] leading-relaxed">
              TrybeSave offers credit based on how responsibly you manage your
              money. Your credit access grows as you demonstrate consistent
              savings, responsible spending, and stable financial behaviour.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreditDiscipline;
