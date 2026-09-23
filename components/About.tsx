import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* Image left */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-3xl bg-accent/20">
              <Image
                src="/about-photo.jpg"
                alt="Niah baking"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Content right */}
          <div className="lg:col-span-7">
            <span className="font-body text-xs font-bold uppercase tracking-widest text-accent">
              Our Story
            </span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl text-primary leading-tight">
              Baked With Care, {/* TODO: replace with real about copy */}
              <br />
              Made For You
            </h2>
            <p className="mt-6 font-body text-base text-text/70 leading-relaxed max-w-lg">
              {/* TODO: replace with real bio from Niah — how long she's been baking, what makes her different */}
              Every cake, pastry, and treat from Niah&apos;s Bites is made fresh, by
              hand, with quality ingredients — because good food should feel personal.
            </p>

            <div className="mt-8 grid grid-cols-3 gap-6 max-w-md">
              <div>
                <p className="font-display text-2xl text-primary">100%</p>
                <p className="mt-1 font-body text-xs text-text/60">Made Fresh</p>
              </div>
              <div>
                <p className="font-display text-2xl text-primary">Custom</p>
                <p className="mt-1 font-body text-xs text-text/60">Orders Welcome</p>
              </div>
              <div>
                <p className="font-display text-2xl text-primary">Local</p>
                <p className="mt-1 font-body text-xs text-text/60">Sunyani Made</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}