import { motion } from "framer-motion";

const stats = [
  { value: "10,000+", label: "Students & Teachers" },
  { value: "30+", label: "AI Tools" },
  { value: "5", label: "Core Products" },
  { value: "100%", label: "On-Premise Option" },
];

const testimonials = [
  {
    quote: "The AI-Ready School App is a game-changer. It simplifies routine tasks like generating worksheets, lesson plans, and assignments, while also helping us create engaging content.",
    name: "Mansi Sharma",
    role: "TGT English Teacher",
    school: "NH Goel World School, Raipur",
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/691452d9ff657da1197e7698_t1.png",
  },
  {
    quote: "This AI-driven platform lets me create personalized lesson plans with subtopics, worksheets, anchor charts, and video links — all tailored to the number of days I need.",
    name: "Shraddha Tripathy",
    role: "Primary Math Teacher",
    school: "NH Goel World School, Raipur",
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/691452d9e2a4935924ac904b_t2.png",
  },
  {
    quote: "AI Ready School is a one-stop solution that integrates multiple AI-powered tools for educators. It streamlines tasks like creating test papers and building activity-based lesson plans.",
    name: "Jayesh Agrawal",
    role: "PGT Physics Teacher",
    school: "Brighton International School, Raipur",
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/691452d9884ae8d5c108db17_t6.png",
  },
];

const schoolLogos = [
  "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/68c7173ca337a52aec3a60a0_Group%20704.png",
  "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/68c7173cab3f53d704f2499f_Group%20702.png",
  "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/6914d381d9bd9505b53c1249_school%20logo%204.png",
  "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/68c718191ff5ea915d5e5f5e_Group%20714.png",
];

export default function SocialProofSection() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-warm">
      <div className="container">
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
              <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16 opacity-60">
          {schoolLogos.map((logo, i) => (
            <img key={i} src={logo} alt="School partner" className="h-10 md:h-12 object-contain grayscale hover:grayscale-0 transition-all" />
          ))}
        </div>

        
        <div className="max-w-2xl mx-auto text-center mb-10">
          <span className="text-xs font-semibold uppercase tracking-widest text-coral">Testimonials</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight text-foreground">
            Trusted by educators across India
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-card rounded-2xl p-6 border border-border shadow-sm"
            >
              <p className="text-sm text-muted-foreground leading-relaxed italic">
                "{t.quote}"
              </p>
              <div className="mt-5 flex items-center gap-3">
                <img src={t.image} alt={t.name} className="w-10 h-10 rounded-full object-cover" />
                <div>
                  <div className="text-sm font-semibold text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role} · {t.school}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
