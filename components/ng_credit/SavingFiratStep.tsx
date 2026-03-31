import Image from 'next/image';

const SavingsFirstStep = () => {
  return (
    <section className="w-full bg-[#26022A] px-4 py-20 md:py-32 flex items-center justify-center">
      {/* Main Feature Card */}
      <div className="w-full max-w-7xl bg-[#1a011d] border border-[#301233] rounded-lg overflow-hidden shadow-2xl flex flex-col md:flex-row">
        {/* Left Side: Photography/Visual */}
        <div className="w-full md:w-1/2 relative min-h-100 md:min-h-150">
          <Image
            src="/credit/saveIMG.png" // Exact path requested
            alt="A smiling user holding a phone showing their first credit limit achieved through savings."
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full md:w-1/2  p-8 md:p-16 lg:p-24 flex flex-col justify-center space-y-6 md:space-y-8">
          <h2 className="text34xl md:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            Savings start with the right first step
          </h2>

          <p className="text-lg md:text-xl lg:text-2xl text-white/80 font-normal leading-relaxed">
            Access credit that works for you—not against you. Small limits,
            smarter habits, and a clear path to financial growth.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SavingsFirstStep;
