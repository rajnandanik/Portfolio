import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
     title: "Instagram Clone (Full Stack Application)",
    description: "Feature-rich social media platform with authentication, posts, likes, comments, and follow system.",
    image: "YOUR_IMAGE_URL",
    tags: ["React", "Redux", "Spring Boot", "MySQL"],
    demo: "#",
    github: "#",
    details:
      "Built a full-stack Instagram clone using React, Redux, Spring Boot, and MySQL. Implemented JWT-based authentication, RESTful APIs, post management, and follow functionality. Designed responsive UI using Chakra UI and Tailwind CSS. Applied layered architecture and exception handling on backend."
  },
  {
    title: "AI Support Chatbot",
  description: "Full-stack AI-powered customer support chatbot with LLM fallback and real-time admin controls.",
  image: "https://github.com/rajnandanik/CHATBOT/blob/main/assets/preview.png.png?raw=true",
  tags: ["React", "Node.js", "MongoDB", "JWT", "TailwindCSS"],
  demo: "https://chatassistance.netlify.app",
  github: "https://github.com/rajnandanik/CHATBOT",
  details:
    "Developed an AI-powered support chatbot using React, Node.js, and MongoDB with JWT-based authentication. Integrated OpenRouter (Claude) as a fallback LLM to handle complex queries, reducing manual support handling time by 30%. Implemented FAQ-based semantic search, file upload capability, and a real-time admin dashboard for managing chatbot content."
  },
  {
     title: "Overflow – Stack Overflow Clone",
    description: "Developer Q&A platform built with Next.js and Appwrite featuring authentication, SSR, and optimized performance.",
    image: "https://github.com/rajnandanik/overflow/blob/main/assets/preview.png.png?raw=true",
    tags: ["Next.js", "Appwrite", "TailwindCSS", "Zustand"],
    demo: "https://overflow-sa9t-git-main-bikram-singhs-projects-45376413.vercel.app/",
    github: "https://github.com/rajnandanik/overflow",
    details:
      "Built a full-stack Q&A platform using Next.js with Server-Side Rendering (SSR), reducing page load time by 33% and improving SEO. Integrated Appwrite for authentication and database management, accelerating backend development. Implemented responsive UI using TailwindCSS and MagicUI, with Zustand for efficient state management."
  },
  {
    title: "Fetal Health Prediction System",
    description: "Machine learning-based healthcare prediction system with real-time visualization.",
    image: "https://github.com/rajnandanik/fetal-health-prediction/blob/main/assets/preview.png.png?raw=true",
    tags: ["Python", "Machine Learning", "Streamlit", "Docker"],
    demo: "https://fetal-health-prediction-oebsywmnbgtsoc6opipfml.streamlit.app/",
    github: "https://github.com/rajnandanik/fetal-health-prediction",
    details:
      "Built a machine learning model to classify fetal health conditions (Normal, Suspicious, Pathological) with 84% accuracy. Compared multiple algorithms and optimized model performance. Deployed as a Dockerized Streamlit web application with real-time visualization."
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
