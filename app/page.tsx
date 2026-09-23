import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CategoryPreview from "@/components/CategoryPreview";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CategoryPreview />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}