export default function Footer() {
  return (
    <footer className="bg-primary-dark py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display text-xl text-bg">Niah&apos;s Bites</span>
        <p className="font-body text-xs text-bg/60 text-center">
          © {new Date().getFullYear()} Niah&apos;s Bites. All rights reserved.
        </p>
        
          href="https://wa.me/233558795810"
          target="_blank"
          rel="noopener noreferrer"
          className="font-body text-xs text-bg/60 hover:text-accent transition-colors"
        >
          055 879 5810
        </a>
      </div>
    </footer>
  );
}