import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";

const skills = [
  { name: "React", level: 75 },
  { name: "JavaScript", level: 90 },
  { name: "Node.js / Express", level: 80 },
  { name: "Java / Spring Boot", level: 85 },
  { name: "Python", level: 70 },
  { name: "MongoDB", level: 70 },
  { name: "Docker", level: 50 },
  ];

const SkillsSection = () => {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionReveal>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Expertise</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-12">
            Technical <span className="text-gradient">Skills</span>
          </h2>
        </SectionReveal>

        <div className="space-y-6">
          {skills.map((skill, i) => (
            <SectionReveal key={skill.name} delay={i * 0.08}>
              <div className="glass rounded-xl p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-foreground font-semibold">{skill.name}</span>
                  <span className="text-primary font-mono text-sm">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-primary"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  />
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
