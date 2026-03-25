'use client';

export function AboutFoundersMessage() {
  return (
    <section className="bg-white py-28 px-6 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Card */}
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-[#AA0EBA] via-[#8C0F99] to-[#5F0066] text-white p-12 md:p-16 lg:p-20">
          {/* Subtle background glow */}
          <div className="absolute -top-20 -right-20 w-100 h-100 bg-purple-400/20 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-75 h-75 bg-pink-400/20 blur-[120px] rounded-full" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT */}
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-[11px] font-semibold uppercase tracking-[0.25em] opacity-80">
                  TrybeSave
                </span>

                <h2 className="text-4xl md:text-5xl lg:text-[42px] font-semibold leading-[1.1] tracking-tight">
                  A message from the founders
                </h2>
              </div>

              {/* Illustration */}
              {/* <div className="relative w-56 h-56 md:w-72 md:h-72">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/about_hero-cLxQm7wvgCc39cINV6E30b7TwXplRc.png"
                  alt="Founders illustration"
                  fill
                  className="object-contain drop-shadow-2xl"
                />
              </div> */}
            </div>

            {/* RIGHT */}
            <div className="space-y-6 text-[17px] leading-relaxed font-light opacity-95">
              <p className="text-lg font-medium opacity-100">
                We started TrybeSave because we lived the problem ourselves.
              </p>

              <p>
                We know what it means to balance opportunity, responsibility,
                and ambition.
              </p>

              <p>
                We believe everyone deserves tools that heko them build a
                stringer financial future
              </p>

              <p className="pt-2 font-medium">
                TrybeSave is our contribution to that mission.
              </p>

              {/* Signature */}
              <div className="pt-6 border-t border-white/20">
                <p className="text-sm opacity-80">— The TrybeSave Founders</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
