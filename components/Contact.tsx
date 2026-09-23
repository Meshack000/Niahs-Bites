export default function Contact() {
  const whatsappNumber = "233558795810"; // 0558795810 in international format
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hi Niah's Bites, I'd like to place an order"
  )}`;

  return (
    <section id="contact" className="py-16 md:py-24 bg-primary">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <span className="font-body text-xs font-bold uppercase tracking-widest text-accent">
          Get In Touch
        </span>
        <h2 className="mt-3 font-display text-3xl md:text-4xl text-bg leading-tight">
          Ready to Order?
        </h2>
        <p className="mt-4 font-body text-bg/80 max-w-md mx-auto">
          Message us on WhatsApp for orders, custom cakes, or any questions —
          we reply fast.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-bg text-primary px-8 py-4 font-body text-sm font-semibold hover:bg-accent hover:text-bg transition-colors"
        >
          Chat on WhatsApp
        </a>

        <p className="mt-6 font-body text-sm text-bg/60">
          Sunyani, Notre Dame · 055 879 5810
        </p>
      </div>
    </section>
  );
}