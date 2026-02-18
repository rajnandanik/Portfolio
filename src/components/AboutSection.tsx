import { motion } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Code2, Server, Cloud, Database, Cpu, Globe } from "lucide-react";

const skills = [
  { icon: Code2, label: "Frontend", desc: "React, JavaScript, Tailwind," },
  { icon: Server, label: "Backend", desc: "Node.js, Java, Spring Boot" },
  { icon: Database, label: "Database", desc: "MongoDB, MySQL" },
  { icon: Cloud, label: "Cloud", desc: "Docker" },
  { icon: Cpu, label: "DevOps", desc: "GitHub Actions" },
  { icon: Globe, label: "API Design", desc: "REST" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">About Me</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Passionate about building <span className="text-gradient">digital experiences</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg leading-relaxed mb-16">
            I am a Full Stack Developer passionate about building high-performance and scalable web applications. 
            I enjoy working across the stack — from designing responsive, user-friendly frontends to developing 
            robust and efficient backend systems.
            Currently, I am focused on strengthening my skills in modern web technologies, cloud fundamentals, 
            and writing clean, maintainable code.
          </p>
        </SectionReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, i) => (
            <SectionReveal key={skill.label} delay={i * 0.1}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="glass rounded-2xl p-6 group hover:border-primary/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 group-hover:glow-primary transition-shadow">
                  <skill.icon size={24} className="text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-1">{skill.label}</h3>
                <p className="text-muted-foreground text-sm">{skill.desc}</p>
              </motion.div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
