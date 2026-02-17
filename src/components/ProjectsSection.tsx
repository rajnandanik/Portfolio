import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with real-time inventory, Stripe payments, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demo: "#",
    github: "#",
    details: "Built with microservices architecture, supporting 10K+ concurrent users with Redis caching and WebSocket notifications.",
  },
  {
    title: "AI Analytics Dashboard",
    description: "Real-time data visualization platform with ML-powered insights and predictive analytics.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    tags: ["React", "Python", "TensorFlow", "D3.js"],
    demo: "#",
    github: "#",
    details: "Processes 1M+ data points per day with custom ML models for anomaly detection and trend forecasting.",
  },
  {
    title: "DevOps Pipeline Tool",
    description: "Automated CI/CD platform with container orchestration and monitoring.",
    image: "https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=600&h=400&fit=crop",
    tags: ["Go", "Docker", "Kubernetes", "Terraform"],
    demo: "#",
    github: "#",
    details: "Reduced deployment time by 80% with automated testing, canary deployments, and rollback capabilities.",
  },
  {
    title: "Social Media API",
    description: "High-performance REST API serving millions of requests with GraphQL support.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop",
    tags: ["Spring Boot", "MySQL", "Redis", "GraphQL"],
    demo: "#",
    github: "#",
    details: "Handles 50K requests/second with horizontal scaling, rate limiting, and comprehensive API documentation.",
  },
];

const allTags = ["All", ...Array.from(new Set(projects.flatMap((p) => p.tags)))];

const ProjectsSection = () => {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const filtered = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionReveal>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Portfolio</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-10">
            Featured <span className="text-gradient">Projects</span>
          </h2>
        </SectionReveal>

        {/* Filter */}
        <SectionReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-10">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilter(tag)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  filter === tag
                    ? "bg-gradient-primary text-primary-foreground"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </SectionReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ y: -6 }}
                onClick={() => setSelectedProject(project)}
                className="glass rounded-2xl overflow-hidden cursor-pointer group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-6"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="glass rounded-2xl max-w-lg w-full overflow-hidden"
              >
                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-56 object-cover" />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-2xl font-bold text-foreground">{selectedProject.title}</h3>
                    <button onClick={() => setSelectedProject(null)} className="text-muted-foreground hover:text-foreground">
                      <X size={20} />
                    </button>
                  </div>
                  <p className="text-muted-foreground mb-4">{selectedProject.details}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href={selectedProject.demo} className="flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-primary text-primary-foreground font-semibold text-sm">
                      <ExternalLink size={16} /> Live Demo
                    </a>
                    <a href={selectedProject.github} className="flex items-center gap-2 px-5 py-2.5 rounded-lg glass text-foreground font-semibold text-sm">
                      <Github size={16} /> Source Code
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ProjectsSection;
