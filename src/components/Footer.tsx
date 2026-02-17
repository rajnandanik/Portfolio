import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";

const socials = [
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:hello@example.com", label: "Email" },
];

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-muted-foreground text-sm flex items-center gap-1">
          Built with <Heart size={14} className="text-destructive" /> by John Doe © {new Date().getFullYear()}
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
