import { MenuCategory } from "@/lib/menuData";

export default function MenuSection({ category }: { category: MenuCategory }) {
  return (
    <div id={category.id} className="scroll-mt-24">
      <h2 className="font-display text-2xl md:text-3xl text-primary mb-6">
        {category.title}
      </h2>
      <ul className="space-y-3">
        {category.items.map((item) => (
          <li
            key={item.name}
            className="flex items-baseline gap-3 font-body text-sm md:text-base"
          >
            <span className="text-text">{item.name}</span>
            <span className="flex-1 border-b border-dotted border-text/25 translate-y-[-4px]" />
            <span className="text-primary font-semibold whitespace-nowrap">
              {item.price}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}