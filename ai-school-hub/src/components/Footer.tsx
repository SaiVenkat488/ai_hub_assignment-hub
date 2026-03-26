const links = {
  "Platform": [
    { label: "Cypher", href: "https://www.aireadyschool.com/cypher" },
    { label: "Morpheus", href: "https://www.aireadyschool.com/morpheus" },
    { label: "Zion", href: "https://www.aireadyschool.com/zion" },
    { label: "NEO", href: "https://www.aireadyschool.com/neo" },
    { label: "Matrix", href: "https://www.aireadyschool.com/matrix" },
  ],
  "Company": [
    { label: "About Us", href: "https://www.aireadyschool.com/about-us" },
    { label: "Blog", href: "https://www.aireadyschool.com/blog" },
    { label: "Pricing", href: "https://www.aireadyschool.com/pricing" },
    { label: "Contact", href: "https://www.aireadyschool.com/contact-us" },
  ],
  "Resources": [
    { label: "Use Cases", href: "https://www.aireadyschool.com/ai-for-schools" },
    { label: "Testimonials", href: "https://www.aireadyschool.com/testimonials" },
    { label: "FAQs", href: "https://www.aireadyschool.com/faqs" },
    { label: "Privacy Policy", href: "https://www.aireadyschool.com/privacy-policy" },
  ],
};

interface FooterProps {
  onContactUs: () => void;
}

export default function Footer({ onContactUs }: FooterProps) {
  return (
    <footer className="border-t border-border bg-card py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          <div className="col-span-2 md:col-span-1">
            <img
              src="https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/698c31a6b5cb37dc80e2cfbc_logo-tm.png"
              alt="AI Ready School"
              className="h-8"
            />
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              India's first complete AI ecosystem for K-12 schools.
            </p>
            <div className="mt-4 flex items-center gap-1 text-xs text-muted-foreground">
              Powered by
              <a href="https://learnia.ai/" className="font-semibold hover:text-foreground transition-colors">
                Learnia.AI
              </a>
            </div>
          </div>

          
          {Object.entries(links).map(([title, items]) => (
            <div key={title}>
              <h4 className="text-sm font-semibold text-foreground mb-3">{title}</h4>
              <ul className="space-y-2">
                {items.map((link) => (
                  <li key={link.label}>
                    {link.label === "Contact" ? (
                      <button 
                        onClick={onContactUs}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Learnia.AI. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
