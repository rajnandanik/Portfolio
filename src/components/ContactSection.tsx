import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionReveal from "./SectionReveal";
import { Send, CheckCircle, Loader2 } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Simulate API call - connect to backend later
    await new Promise((r) => setTimeout(r, 1500));
    setStatus("success");
    setForm({ name: "", email: "", message: "" });
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto">
        <SectionReveal>
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">Get in Touch</p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Let's <span className="text-gradient">Connect</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Have a project in mind or want to discuss opportunities? I'd love to hear from you.
          </p>
        </SectionReveal>

        <SectionReveal delay={0.2}>
          <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
            {(["name", "email", "message"] as const).map((field) => (
              <div key={field} className="relative group">
                <label className="block text-sm font-medium text-muted-foreground mb-2 capitalize">
                  {field}
                </label>
                {field === "message" ? (
                  <textarea
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required
                    rows={5}
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                    placeholder={`Your ${field}...`}
                  />
                ) : (
                  <input
                    type={field === "email" ? "email" : "text"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    required
                    className="w-full bg-muted/50 border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                    placeholder={`Your ${field}...`}
                  />
                )}
              </div>
            ))}

            <motion.button
              type="submit"
              disabled={status === "loading" || status === "success"}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-4 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-lg flex items-center justify-center gap-2 disabled:opacity-70 transition-opacity"
            >
              <AnimatePresence mode="wait">
                {status === "loading" ? (
                  <motion.span key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <Loader2 size={20} className="animate-spin" /> Sending...
                  </motion.span>
                ) : status === "success" ? (
                  <motion.span key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2 text-accent">
                    <CheckCircle size={20} /> Message Sent!
                  </motion.span>
                ) : (
                  <motion.span key="idle" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-2">
                    <Send size={20} /> Send Message
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>
          </form>
        </SectionReveal>
      </div>
    </section>
  );
};

export default ContactSection;
