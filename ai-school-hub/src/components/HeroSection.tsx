import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, GraduationCap } from "lucide-react";

const trustBadges = [
  { icon: Users, text: "10,000+ students & teachers" },
  { icon: Shield, text: "On-premise deployment" },
  { icon: GraduationCap, text: "K-12 focused" },
];

interface HeroSectionProps {
  onScheduleCall: () => void;
}

export default function HeroSection({ onScheduleCall }: HeroSectionProps) {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-warm">
      
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--navy)) 1px, transparent 0)`,
        backgroundSize: '32px 32px'
      }} />

      <div className="container relative">
        <div className="max-w-3xl mx-auto text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-light text-teal text-xs font-semibold tracking-wide uppercase mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal" />
            India's first complete AI ecosystem for schools
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-[1.08]"
          >
            Your school's AI
            <br />
            <span className="text-coral">isn't a tool.</span>
            <br />
            It's an ecosystem.
          </motion.h1>

          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto leading-relaxed"
          >
            Five products that cover every layer — from personalized student learning to on-premise AI infrastructure. Built for K-12. Deployed on your terms.
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row gap-3 justify-center"
          >
            <button
              onClick={onScheduleCall}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
            >
              Schedule a Free Demo
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-card text-foreground border border-border hover:border-foreground/20 transition-all"
            >
              Explore Products
            </a>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8"
          >
            {trustBadges.map((badge) => (
              <div key={badge.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                <badge.icon className="w-4 h-4 text-navy-light" />
                <span>{badge.text}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
