import { motion } from "framer-motion";
import { ArrowRight, Calendar, Mail } from "lucide-react";

interface CTASectionProps {
  onScheduleCall: () => void;
  onContactUs: () => void;
}

export default function CTASection({ onScheduleCall, onContactUs }: CTASectionProps) {
  return (
    <section id="cta" className="py-20 md:py-28 bg-navy relative overflow-hidden">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-coral/10 rounded-full blur-[120px]" />

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-primary-foreground">
            Make your school
            <br />
            <span className="text-coral">truly AI-ready.</span>
          </h2>
          <p className="mt-5 text-lg text-primary-foreground/70 max-w-lg mx-auto">
            Join 10,000+ students and educators already using AI Ready School. Book a free demo to see how it works for your school.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onScheduleCall}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-lg shadow-accent/20"
            >
              <Calendar className="w-4 h-4" />
              Book a FREE Demo
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={onContactUs}
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold rounded-xl bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all"
            >
              <Mail className="w-4 h-4" />
              Contact Us
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
