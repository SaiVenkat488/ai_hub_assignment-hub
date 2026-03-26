import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const posts = [
  {
    title: "Personalisation Beyond Content: The 4 Dimensions Every School Should Track",
    date: "March 25, 2026",
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/69c9ff3b27b9e6eb2b38b2ab_Personalisation%20Beyond%20Content-%20The%204%20Dimensions%20Every%20School%20Should%20Track.png",
    href: "https://www.aireadyschool.com/blog/personalisation-beyond-content",
  },
  {
    title: "Teacher First: How AI Should Empower Educators, Not Replace Them",
    date: "March 24, 2026",
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/69c88ba1d05dd8e6e32b07b6_Teacher%20First-%20How%20AI%20Should%20Empower%20Educators%2C%20Not%20Replace%20Them.png",
    href: "https://www.aireadyschool.com/blog/teacher-first",
  },
  {
    title: "Why AI Should Make Children Think, Not Give Them Answers",
    date: "March 24, 2026",
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/69c88ba1c6b68f0df2e9e3b4_Why%20AI%20Should%20Make%20Children%20Think%2C%20Not%20Give%20Them%20Answers.png",
    href: "https://www.aireadyschool.com/blog/why-ai-should-make-children-think",
  },
  {
    title: "Human First, AI Next: Why Our Philosophy Matters More Than Our Technology",
    date: "March 20, 2026",
    image: "https://cdn.prod.website-files.com/68c2a3af705b8af2b80faa97/69be854b5ca37e08e7bfb35b_Human%20First%2C%20AI%20Next.png",
    href: "https://www.aireadyschool.com/blog/human-first-ai-next",
  },
];

export default function BlogSection() {
  return (
    <section id="blog" className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-widest text-accent">
            Insights
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-bold tracking-tight text-foreground">
            Latest from Blog
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Thoughts on AI in education, teaching philosophy, and building better schools.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, i) => (
            <motion.a
              key={post.title}
              href={post.href}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="group flex flex-col rounded-2xl overflow-hidden border border-border bg-background shadow-sm hover:shadow-md transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-sm font-bold text-foreground leading-snug group-hover:text-accent transition-colors line-clamp-3">
                  {post.title}
                </h3>
                <span className="mt-auto pt-3 text-xs text-muted-foreground">
                  {post.date}
                </span>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://www.aireadyschool.com/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
          >
            View all articles
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
