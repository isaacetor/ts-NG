import Image from 'next/image';

const SecurityAndTrust = () => {
  return (
    <section className="w-full bg-[#FDEDFF] py-16 md:py-32 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:flex-row-reverse items-center gap-12">
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
          <h2 className="text-3xl capitalize md:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Security and trust you can count on
          </h2>

          <p className="pt-4 text-lg md:text-xl  text-slate-900 tracking-tight">
            Your financial data stays protected with bank-level encryption and
            transparent practices. TrybeSave is built to help you borrow safely.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecurityAndTrust;
