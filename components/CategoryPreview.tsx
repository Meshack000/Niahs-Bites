const categories = [
  { name: "Cakes & Pastries", blurb: "Cakes, parfaits, loaves & doughnuts", icon: "🎂" },
  { name: "Cupcakes", blurb: "With or without frosting", icon: "🧁" },
  { name: "Yoghurt", blurb: "Fresh & Greek, any size", icon: "🥛" },
  { name: "Frozen Spring Rolls", blurb: "Veg, beef & bean fillings", icon: "🥢" },
  { name: "Frozen Samosa", blurb: "Chicken, beef & veg fillings", icon: "🥟" },
];

export default function CategoryPreview() {
  return (
    <section id="menu" className="bg-bg py-12 md:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-8 text-center md:mb-12">
          <span className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-accent md:text-xs">
            What We Offer
          </span>
          <h2 className="mt-2 font-display text-2xl text-primary md:text-4xl">
            Browse Our Menu
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#contact"
              className="group flex flex-col justify-between rounded-2xl border border-primary/10 bg-white p-3 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg md:p-6"
            >
              <div>
                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-accent/15 text-lg transition-transform duration-200 group-hover:scale-110 md:mb-4 md:h-14 md:w-14 md:text-2xl">
                  {cat.icon}
                </div>
                <h3 className="font-body text-xs font-semibold text-text transition-colors group-hover:text-primary md:text-base">
                  {cat.name}
                </h3>
                <p className="mt-1 font-body text-[10px] leading-relaxed text-text/60 md:text-xs">
                  {cat.blurb}
                </p>
              </div>

              <span className="mt-3 inline-block font-body text-[10px] font-medium text-accent group-hover:underline md:mt-4 md:text-xs">
                Order now &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}