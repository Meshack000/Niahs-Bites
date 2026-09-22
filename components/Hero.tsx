import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="bg-bg py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Content Left */}
          <div className="lg:col-span-6">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-accent">
              Sunyani, Notre Dame
            </span>

            <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-primary sm:text-5xl md:text-6xl">
              The Best Quality <br />
              Bites Of Your Choice.
            </h1>

            <p className="mt-6 max-w-md font-body text-base text-text/70 leading-relaxed">
              Freshly baked cakes, handcrafted pastries, and savory treats prepared daily with love and delivered right to your doorstep.
            </p>

            <div className="mt-8 flex items-center gap-4">
              
                href="#menu"
                className="rounded-full bg-primary px-7 py-3.5 font-body text-sm font-semibold text-bg transition-colors hover:bg-primary-dark"
              >
                Get Started
              </a>

              
                href="#about"
                className="flex items-center gap-3 font-body text-sm font-semibold text-text transition-colors hover:text-primary"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-accent">
                  ▶
                </span>
                Our Story
              </a>
            </div>
          </div>

          {/* Graphic Right */}
          <div className="relative lg:col-span-6">
            <div className="relative mx-auto aspect-square max-w-md overflow-hidden rounded-3xl bg-accent/20">
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