import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/gritor-logo.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 backdrop-blur-md bg-background/80">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember to-transparent opacity-60" />
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Gritor">
          <span className="logo-mark">
            <img
              src={logo}
              alt="Gritor"
              className="relative z-10 h-7 md:h-8 w-auto transition-transform duration-500 group-hover:scale-[1.04]"
              style={{ filter: "invert(1) brightness(1.15)" }}
            />
          </span>
          <span className="hidden sm:inline text-[10px] font-display tracking-[0.4em] text-muted-foreground border-l border-border pl-3">
            Industrial Components
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="nav-link" data-active={pathname === l.to}>
              {l.label}
            </Link>
          ))}
        </nav>

        <Link to="/contact" className="hidden md:inline-flex btn-forge !py-3 !px-6">
          Get Quote
        </Link>

        <button
          className="md:hidden text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="nav-link py-2"
                data-active={pathname === l.to}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-forge mt-2 self-start">
              Get Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
