const categories = [
  { name: "Cakes & Pastries", blurb: "Cakes, parfaits, loaves & doughnuts", icon: "🎂" },
  { name: "Cupcakes", blurb: "With or without frosting", icon: "🧁" },
  { name: "Yoghurt", blurb: "Fresh & Greek, any size", icon: "🥛" },
  { name: "Frozen Spring Rolls", blurb: "Veg, beef & bean fillings", icon: "🥢" },
  { name: "Frozen Samosa", blurb: "Chicken, beef & veg fillings", icon: "🥟" },
];

export default function CategoryPreview() {
  return (
    <section id="menu" className="py-16 md:py-24 bg-bg">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="font-body text-xs font-bold uppercase tracking-widest text-accent">
            What We Offer
          </span>
          <h2 className="mt-2 font-display text-3xl md:text-4xl text-primary">
            Browse Our Menu
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
          {categories.map((cat) => (
            <a
              key={cat.name}
              href="#contact"
              className="group flex flex-col justify-between rounded-2xl border border-primary/10 bg-white p-6 text-center transition-all duration-200 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
            >
              <div>
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-2xl transition-transform duration-200 group-hover:scale-110">
                  {cat.icon}
                </div>
                <h3 className="font-body text-base font-semibold text-text group-hover:text-primary transition-colors">
                  {cat.name}
                </h3>
                <p className="mt-1.5 font-body text-xs text-text/60 leading-relaxed">
                  {cat.blurb}
                </p>
              </div>

              <span className="mt-4 inline-block font-body text-xs font-medium text-accent group-hover:underline">
                Order now &rarr;
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}