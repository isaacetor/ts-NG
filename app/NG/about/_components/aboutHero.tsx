import Image from 'next/image';

const AboutHero = () => {
  return (
    <section className="relative bg-[#AA0EBA] min-h-150  w-full flex items-center px-6 pt-12 pb-2 md:px-16 lg:px-24 overflow-hidden">
      {/* Ambient Glows */}
      <div className="absolute -top-32 right-0 w-100 h-100 bg-purple-300/20 blur-[140px] rounded-full" />
      <div className="absolute -bottom-20 left-0 w-95 h-95 bg-pink-300/20 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="text-white space-y-6 z-10">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            Hi, We&apos;re Trybesave.
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl font-light leading-relaxed max-w-xl opacity-90">
            Trybesave Started with reality, we are young Profession form Nigeria
          </p>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end z-10">
          <div className="relative w-full max-w-125 aspect-square rounded-2xl overflow-hidden ">
            <Image
              src="/about/aboutIMG.png"
              alt="Trybesave App and Card"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
