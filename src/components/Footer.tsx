import { Github, Linkedin,Instagram, Mail, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: "https://github.com/rajnandanik", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/rajnandanik/", label: "LinkedIn" },
  { icon: Instagram, href: "https://www.instagram.com/rajjnandanii/", label: "Instagram" },
  { icon: Mail, href: "mailto:rajnandani1040@gmail.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          <Heart size={14} className="text-destructive" /> by Rajnandani kumari © {new Date().getFullYear()}
        </p>

        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              aria-label={s.label}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/30 transition-all"
            >
              <s.icon size={18} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
