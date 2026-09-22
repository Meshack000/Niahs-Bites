import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-32">
        <div>
          <p className="mb-4 font-body text-sm uppercase tracking-widest text-accent">
            Sunyani, Notre Dame
          </p>
          <h1 className="mb-6 font-display text-4xl leading-tight text-primary md:text-6xl">
            Freshly Baked,
            <br />
            Always Loved
          </h1>
          <p className="mb-8 max-w-md font-body text-base text-text/80 md:text-lg">
            Cakes, pastries, and treats made with care — every order, made to order.
          </p>
          <div className="flex gap-4">
            <a
              href="#menu"
              className="rounded-full bg-primary px-6 py-3 text-sm font-body text-bg transition-colors hover:bg-primary-dark"
            >
              View Menu
            </a>

            <a
              href="#contact"
              className="rounded-full border border-primary px-6 py-3 text-sm font-body text-primary transition-colors hover:bg-primary/5"
            >
              Order Now
            </a>
          </div>
        </div>

        <div className="relative aspect-4/5 overflow-hidden rounded-2xl">
          <Image
            src="/hero-cake.jpg"
            alt="Freshly baked cake from Niah's Bites"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </section>
  );
}