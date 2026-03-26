import { motion } from "framer-motion";
import { Heart, Brain, Lightbulb } from "lucide-react";

const pillars = [
  {
    icon: Heart,
    title: "It's Time to Reset Education",
    description:
      "AI isn't just another tool — it's a paradigm shift. Schools must move beyond rote learning and embrace AI as a partner in developing critical thinking, creativity, and empathy.",
    href: "https://www.aireadyschool.com/philosophy-its-time-to-reset-education",
  },
  {
    icon: Brain,
    title: "Holistic Education with AI",
    description:
      "We believe AI should support the whole learner — academics, emotional growth, creativity, and life skills. Technology amplifies great teaching; it never replaces it.",
    href: "https://www.aireadyschool.com/philosophy-holistic-education-with-ai",
  },
  {
    icon: Lightbulb,
    title: "What is an Ideal School?",
    description:
      "An ideal school puts students at the centre, empowers teachers with intelligent tools, and builds an environment where curiosity thrives and every child can succeed.",
    href: "https://www.aireadyschool.com/philosophy-what-is-an-ideal-school",
  },
];

export default function PhilosophySection() {
  return (
    <section id="philosophy" className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Our Philosophy
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Human first. AI next.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Our approach to AI in education is grounded in purpose, empathy, and
            a deep respect for how children learn best.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((pillar, i) => (
            <motion.a
              key={pillar.title}
              href={pillar.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 shadow-sm hover:shadow-md hover:border-accent/30 transition-all"
            >
              <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-xl bg-accent/10 text-accent">
                <pillar.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-foreground group-hover:text-accent transition-colors">
                {pillar.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {pillar.description}
              </p>
              <span className="mt-5 text-sm font-semibold text-accent">
                Read more →
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
