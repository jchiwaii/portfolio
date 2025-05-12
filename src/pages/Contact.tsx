import Layout from "@/components/Layout";
import { Mail, Github, Linkedin, MessageSquare, Instagram } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <div className="space-y-8">
        <section>
          <h1 className="text-sm font-medium">Contact</h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Feel free to reach out for collaborations or just a friendly hello.
          </p>
        </section>

        <section className="space-y-4">
          <div className="grid gap-y-4">
            <a
              href="mailto:chiwai.kiriba@gmail.com"
              className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"
            >
              <Mail size={12} />
              Mail
            </a>
            <a
              href="https://github.com/jchiwaii"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"
            >
              <Github size={12} />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/john-chiwai/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"
            >
              <Linkedin size={12} />
              LinkedIn
            </a>
            <a
              href="https://medium.com/@chiwai.kiriba"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"
            >
              <MessageSquare size={12} />
              Medium
            </a>
            <a
              href="https://www.instagram.com/artify.ck/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-xs hover:text-primary transition-colors"
            >
              <Instagram size={12} />
              Instagram
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Contact;
