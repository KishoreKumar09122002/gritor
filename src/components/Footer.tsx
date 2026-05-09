import { Link } from "@tanstack/react-router";
export function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-card/50">
      <div className="absolute inset-x-0 top-0 h-1 industrial-stripes opacity-70" />
      <div className="mx-auto max-w-7xl px-6 py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-3xl tracking-[0.15em] mb-4">GRITOR</div>
          <p className="text-muted-foreground max-w-md leading-relaxed">
            Forged for the most demanding industries. Gritor manufactures heavy-duty
            anvil covers, urethane components and impact protection built to outlast
            the work.
          </p>
        </div>
        <div>
          <h4 className="text-sm tracking-widest mb-4 text-ember">Navigate</h4>
          <ul className="space-y-2 text-muted-foreground">
            <li><Link to="/" className="hover:text-ember transition-colors">Home</Link></li>
            <li><Link to="/products" className="hover:text-ember transition-colors">Products</Link></li>
            <li><Link to="/about" className="hover:text-ember transition-colors">About</Link></li>
            <li><Link to="/contact" className="hover:text-ember transition-colors">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm tracking-widest mb-4 text-ember">Contact</h4>
          <ul className="space-y-2 text-muted-foreground text-sm">
            <li>info@gritor.com</li>
            <li>+1 (555) 010-2024</li>
            <li>Industrial Park, Sector 9</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs tracking-[0.3em] uppercase text-muted-foreground">
        © {new Date().getFullYear()} Gritor — Forged To Endure
      </div>
    </footer>
  );
}
