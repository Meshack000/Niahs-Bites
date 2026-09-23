import type { MenuCategory } from "@/Lib/menuData";

type MenuSectionProps = {
  category: MenuCategory;
};

export default function MenuSection({ category }: MenuSectionProps) {
  return (
    <section id={category.id} className="scroll-mt-24">
      <div className="mb-5 flex items-end justify-between gap-4 border-b border-primary/15 pb-3">
        <h2 className="font-display text-2xl text-primary md:text-3xl">
          {category.title}
        </h2>
        {category.note && <p className="font-body text-xs text-text/60">{category.note}</p>}
      </div>

      <div className="divide-y divide-primary/10">
        {category.items.map((item) => (
          <div key={item.name} className="flex items-center justify-between gap-6 py-3 font-body text-sm">
            <span className="text-text">{item.name}</span>
            <span className="shrink-0 font-semibold text-primary">{item.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
