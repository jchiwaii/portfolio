import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { LucideIcon } from "lucide-react";

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

  const socialLinks: Array<{
    icon: LucideIcon | string;
    href: string;
    label: string;
    type: "lucide" | "image";
  }> = [
    {
      icon: Github,
      href: "https://github.com/jchiwaii",
      label: "GitHub",
      type: "lucide",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/john-chiwai/",
      label: "LinkedIn",
      type: "lucide",
    },
    {
      icon: Mail,
      href: "mailto:chiwai.kiriba@gmail.com",
      label: "Email",
      type: "lucide",
    },
    {
      icon: "/images/medium-icon.png",
      href: "https://medium.com/@chiwai.kiriba",
      label: "Medium",
      type: "image",
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
            <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img
                src="/images/profile.jpg"
                alt="John Chiwai"
                className="w-full h-full object-cover object-center scale-110"
              />
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.div className="space-y-2" variants={itemVariants}>
            <h1 className="font-calligraphy text-4xl text-primary">
              John Chiwai
            </h1>
            <p className="text-sm font-medium text-muted-foreground tracking-wide">
              Developer | Learner
            </p>
          </motion.div>

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
                {social.type === "lucide" ? (
                  (() => {
                    const IconComponent = social.icon as LucideIcon;
                    return <IconComponent className="social-icon" />;
                  })()
                ) : (
                  <img
                    src={social.icon as string}
                    alt={social.label}
                    className="w-5 h-5 filter brightness-75 hover:brightness-100 transition-all duration-200"
                  />
                )}
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
        </div>
      </motion.nav>
    </div>
  );
};

export default Index;
