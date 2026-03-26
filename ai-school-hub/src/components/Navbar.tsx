import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "AI Products", href: "#products" },
  { label: "Our Philosophy", href: "#philosophy" },
  { label: "Use Cases", href: "#testimonials" },
  { label: "Blog", href: "#blog" },
];

interface NavbarProps {
  onScheduleCall: () => void;
  onContactUs: () => void;
}

export default function Navbar({ onScheduleCall, onContactUs }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border">
      <div className="container flex items-center justify-between h-16 md:h-18">
        <a href="/" className="flex items-center gap-2">
          <img
            src="https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/698c31a6b5cb37dc80e2cfbc_logo-tm.png"
            alt="AI Ready School"
            className="h-9"
          />
        </a>

        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors rounded-lg"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onScheduleCall}
            className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-lg bg-accent text-accent-foreground hover:bg-accent/90 transition-colors shadow-sm"
          >
            Schedule a Call
          </button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-card border-b border-border"
          >
            <div className="container py-4 space-y-2">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a href={item.href} className="block px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground" onClick={() => setMobileOpen(false)}>
                    {item.label}
                  </a>
                </div>
              ))}
              <div className="pt-3 border-t border-border space-y-2">
                <button onClick={() => { onScheduleCall(); setMobileOpen(false); }} className="block w-full px-3 py-2.5 text-sm font-semibold text-center rounded-lg bg-accent text-accent-foreground">Schedule a Call</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
