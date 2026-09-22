import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-[#FAF7F2] py-12 md:py-20 text-slate-800">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          
          {/* Content Left */}
          <div className="lg:col-span-6">
            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
              The Best Quality <br />
              <span className="relative inline-block text-[#7a3e2e]">
                Bites
                <svg className="absolute -bottom-1 left-0 h-2 w-full text-[#c4885f]" viewBox="0 0 100 20" fill="currentColor">
                  <path d="M0 10 Q 50 20, 100 10" stroke="currentColor" strokeWidth="4" fill="none" />
                </svg>
              </span> Of Your Choice.
            </h1>

            <p className="mt-6 max-w-md font-body text-base text-slate-600 leading-relaxed">
              Freshly baked cakes, handcrafted pastries, and savory treats prepared daily with love and delivered right to your doorstep.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <a
                href="#menu"
                className="rounded-full bg-[#7a3e2e] px-7 py-3.5 font-body text-sm font-semibold text-white shadow-md transition-all hover:bg-[#683827] hover:shadow-lg"
              >
                Get Started
              </a>

              <a
                href="#about"
                className="flex items-center gap-3 font-body text-sm font-semibold text-slate-700 transition-colors hover:text-[#7a3e2e]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f5e2d5] text-[#7a3e2e]">
                  ▶
                </span>
                Our Story
              </a>
            </div>
          </div>

          {/* Graphic Right */}
          <div className="relative lg:col-span-6">
            {/* Main Solid Background Frame */}
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl bg-[#c4885f]">
              <Image
                src="/hero-cake.jpg"
                alt="Freshly baked treats by Niah's Bites"
                fill
                className="object-cover"
                priority
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}