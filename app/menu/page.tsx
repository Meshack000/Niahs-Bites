import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import MenuSection from "@/components/MenuSection";
import { menuCategories } from "@/Lib/menuData";

export default function MenuPage() {
  return (
    <main>
      <Navbar />

      <section className="py-16 md:py-20 bg-white text-center">
        <span className="font-body text-xs font-bold uppercase tracking-widest text-accent">
          Full Price List
        </span>
        <h1 className="mt-3 font-display text-4xl md:text-5xl text-primary">
          Our Menu
        </h1>
        <p className="mt-4 font-body text-text/70 max-w-md mx-auto px-6">
          Everything is made to order. For bulk or custom requests, message us on WhatsApp.
        </p>
      </section>

      <section className="py-16 md:py-20 bg-bg">
        <div className="max-w-3xl mx-auto px-6 space-y-16">
          {menuCategories.map((category) => (
            <MenuSection key={category.id} category={category} />
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}