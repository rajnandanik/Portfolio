import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Briefcase, GraduationCap } from "lucide-react";

const timeline = [
  {
    type: "work",
    title: "Senior Full Stack Developer",
    org: "TechCorp Inc.",
    period: "2022 – Present",
    desc: "Leading development of microservices architecture serving 2M+ users. Mentoring junior devs and driving CI/CD best practices.",
  },
  {
    type: "work",
    title: "Full Stack Developer",
    org: "StartupXYZ",
    period: "2020 – 2022",
    desc: "Built core product from 0 to 1. Implemented real-time features, payment integration, and scalable API design.",
  },
  {
    type: "education",
    title: "B.S. Computer Science",
    org: "State University",
    period: "2016 – 2020",
    desc: "Graduated with honors. Focus on distributed systems, algorithms, and software engineering.",
  },
  {
    type: "work",
    title: "Software Engineering Intern",
    org: "BigTech Co.",
    period: "Summer 2019",
    desc: "Developed internal tools that improved team productivity by 40%. First exposure to large-scale systems.",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Journey</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12">
            Experience & <span className="text-gradient">Education</span>
          </h2>
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border" />

          {timeline.map((item, i) => (
            <SectionReveal key={i} delay={i * 0.15}>
              <div className={`relative flex flex-col md:flex-row gap-6 mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-primary glow-primary z-10 mt-6" />

                {/* Content */}
                <div className={`ml-14 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass rounded-2xl p-6 hover:border-primary/30 transition-colors"
                  >
                    <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      {item.type === "work" ? (
                        <Briefcase size={16} className="text-primary" />
                      ) : (
                        <GraduationCap size={16} className="text-accent" />
                      )}
                      <span className="text-xs font-mono text-muted-foreground">{item.period}</span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground">{item.title}</h3>
                    <p className="text-primary text-sm font-medium mb-2">{item.org}</p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </motion.div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
