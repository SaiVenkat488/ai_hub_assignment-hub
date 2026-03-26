import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GraduationCap, BookOpen, Wrench, Lightbulb, Server, ArrowRight } from "lucide-react";

const products = [
  {
    id: "cypher",
    name: "Cypher",
    tagline: "AI Learning Companion",
    audience: "For Students",
    icon: GraduationCap,
    color: "bg-coral/10 text-coral",
    description: "Guides thinking, not answers. Cypher adapts to how each student learns and builds independent thinkers — not AI-dependent learners.",
    features: ["Understands learning styles", "Guides thinking, not answers", "Personalized support", "Builds independent thinkers"],
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/698aea6fdf07b4ad70f1a20b_0ebfdfbb8c7f18328f10d6668e365681_newhomecypher.png",
  },
  {
    id: "morpheus",
    name: "Morpheus",
    tagline: "AI Teaching Agent",
    audience: "For Teachers",
    icon: BookOpen,
    color: "bg-teal-light text-teal",
    description: "Reduces educator workload while deepening every student's learning experience. From lesson plans to assessments — automated intelligently.",
    features: ["Lesson plan & content creation", "AI-powered assessments", "Integrated tool suite", "Real-time student progress"],
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/698aec2dbe07e5d9c82f23f1_8107daab403fd03c44f2961411a40c2d_new%20home%20morph.png",
  },
  {
    id: "zion",
    name: "Zion",
    tagline: "AI Tool Suite",
    audience: "For Everyone",
    icon: Wrench,
    color: "bg-primary/10 text-primary",
    description: "30+ AI tools for learning, creative, research and project work — all in one safe, structured platform designed for schools.",
    features: ["30+ AI tools in one place", "Supports everyday schoolwork", "Safe & structured AI use", "Fully integrated"],
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/698b005afc4ac853a29b236a_131e29985dff56d505a5dd88d9ddbadd_newhome%20zion.png",
  },
  {
    id: "neo",
    name: "NEO",
    tagline: "AI Innovation Lab",
    audience: "For Schools",
    icon: Lightbulb,
    color: "bg-accent/10 text-accent",
    description: "Turn your school into a hands-on AI innovation centre. Students don't just learn about AI — they build with it using robotics, XR, and emerging tools.",
    features: ["Hands-on AI learning lab", "Project-based learning", "AI, robotics & XR tools", "Skills beyond textbooks"],
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/698b005bdadd2b06246d9a70_ad312f396b29a851ba356c32b594df78_newhome%20neo.png",
  },
  {
    id: "matrix",
    name: "Matrix",
    tagline: "AI Infrastructure",
    audience: "For IT Teams",
    icon: Server,
    color: "bg-secondary text-secondary-foreground",
    description: "Local AI infrastructure for schools — servers, models, campus intelligence, and classroom monitoring. All on-premise, fully secure.",
    features: ["Local AI servers", "Local AI models", "Campus intelligence", "Classroom monitoring"],
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/69be7e44de81dc74956f8506_home-matrix-5.png",
  },
];

export default function ProductsSection() {
  const [active, setActive] = useState(0);
  const product = products[active];

  return (
    <section id="products" className="py-20 md:py-28 bg-card">
      <div className="container">
        
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-widest text-coral">The Platform</span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Five products. One ecosystem.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Each product solves a different challenge. Together, they give your school a complete AI layer.
          </p>
        </div>

        
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {products.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                active === i
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-muted"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        
        <AnimatePresence mode="wait">
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-8 md:gap-12 items-center"
          >
            
            <div className="order-2 md:order-1">
              <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs font-semibold ${product.color}`}>
                <product.icon className="w-3.5 h-3.5" />
                {product.audience}
              </div>
              <h3 className="mt-4 text-2xl md:text-3xl font-bold text-foreground">
                {product.name} — {product.tagline}
              </h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              <ul className="mt-6 space-y-3">
                {product.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-sm text-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-coral flex-shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href={`https://www.aireadyschool.com/${product.id}`}
                className="inline-flex items-center gap-2 mt-6 text-sm font-semibold text-coral hover:text-coral-light transition-colors"
              >
                Learn more about {product.name}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            
            <div className="order-1 md:order-2 flex justify-center">
              <div className="relative w-full max-w-md">
                <div className="absolute -inset-4 rounded-3xl bg-muted/50" />
                <img
                  src={product.image}
                  alt={`${product.name} preview`}
                  className="relative rounded-2xl w-full object-cover shadow-lg"
                />
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
