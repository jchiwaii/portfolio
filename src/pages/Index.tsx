import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Index = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/jchiwaii",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/john-chiwai/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:chiwai.kiriba@gmail.com",
      label: "Email",
    },
    {
      icon: FileText,
      href: "https://medium.com/@chiwai.kiriba",
      label: "Medium",
    },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main Content */}
      <motion.main
        className="flex-1 flex items-center justify-center px-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="text-center space-y-8 max-w-md">
          {/* Profile Image */}
          <motion.div className="flex justify-center" variants={itemVariants}>
            <div className="profile-image bg-gradient-to-br from-primary/20 to-secondary/30 flex items-center justify-center">
              <span className="text-4xl font-semibold text-primary">C</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1
            className="font-calligraphy text-4xl text-primary"
            variants={itemVariants}
          >
            Chiwai
          </motion.h1>

          {/* Tagline */}
          <motion.p
            className="text-sm text-muted-foreground leading-relaxed px-4"
            variants={itemVariants}
          >
            Where logic meets aesthetics. I create things that make sense and
            look right.
          </motion.p>

          {/* Social Links */}
          <motion.div
            className="flex justify-center space-x-6"
            variants={itemVariants}
          >
            {socialLinks.map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  social.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="group"
                aria-label={social.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon className="social-icon" />
              </motion.a>
            ))}
          </motion.div>
        </div>
      </motion.main>

      {/* Bottom Navigation */}
      <motion.nav
        className="pb-8 px-6"
        variants={itemVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.6 }}
      >
        <div className="flex justify-center space-x-8">
          <motion.a
            href="/projects"
            className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            whileHover={{ y: -2 }}
          >
            Projects
          </motion.a>
          <motion.a
            href="/articles"
            className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            whileHover={{ y: -2 }}
          >
            Articles
          </motion.a>
          <motion.a
            href="/contact"
            className="text-xs font-medium text-muted-foreground hover:text-primary transition-colors duration-200"
            whileHover={{ y: -2 }}
          >
            Contact
          </motion.a>
        </div>
      </motion.nav>
    </div>
  );
};

export default Index;
