import Layout from "@/components/Layout";
import { motion } from "framer-motion";

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

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.25, 0, 1],
      },
    },
  };

  return (
    <Layout>
      {/* Animated flowing background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -inset-[10px] opacity-30 dark:opacity-20"
          animate={{
            background: [
              "radial-gradient(600px circle at 0% 0%, rgba(120, 119, 198, 0.3), transparent 50%)",
              "radial-gradient(600px circle at 100% 100%, rgba(120, 119, 198, 0.3), transparent 50%)",
              "radial-gradient(600px circle at 50% 50%, rgba(120, 119, 198, 0.3), transparent 50%)",
              "radial-gradient(600px circle at 0% 100%, rgba(120, 119, 198, 0.3), transparent 50%)",
              "radial-gradient(600px circle at 100% 0%, rgba(120, 119, 198, 0.3), transparent 50%)",
              "radial-gradient(600px circle at 0% 0%, rgba(120, 119, 198, 0.3), transparent 50%)",
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -inset-[10px] opacity-20 dark:opacity-10"
          animate={{
            background: [
              "radial-gradient(800px circle at 100% 50%, rgba(255, 182, 193, 0.3), transparent 50%)",
              "radial-gradient(800px circle at 0% 50%, rgba(255, 182, 193, 0.3), transparent 50%)",
              "radial-gradient(800px circle at 50% 0%, rgba(255, 182, 193, 0.3), transparent 50%)",
              "radial-gradient(800px circle at 50% 100%, rgba(255, 182, 193, 0.3), transparent 50%)",
              "radial-gradient(800px circle at 100% 50%, rgba(255, 182, 193, 0.3), transparent 50%)",
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: 2,
          }}
        />
      </div>

      <motion.div
        className="section-spacing relative"
        role="main"
        aria-label="Personal introduction and about section"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.section
          className="space-y-1"
          aria-labelledby="intro-heading"
          variants={itemVariants}
        >
          <motion.p
            className="text-muted-foreground"
            id="tagline"
            variants={textVariants}
          >
            Where logic meets aesthetics. I create things that make sense and
            look right.
          </motion.p>
        </motion.section>

        <motion.section
          className="content-spacing"
          aria-labelledby="about-heading"
          variants={itemVariants}
        >
          <motion.h2 id="about-heading" className="h2" variants={textVariants}>
            About
          </motion.h2>
          <motion.div className="item-spacing" variants={textVariants}>
            <motion.p className="text-muted-foreground" variants={textVariants}>
              In this so-called AI age — there's too much noise, too much hype.
              It floods our screens, our thoughts, our feeds. But deep down, I
              feel it: artificial will never be real. Only humans can breathe
              life into new things. Only we can imagine what hasn't yet existed.
              AI? It reshuffles. It mimics. It predicts, but it does not dream.
            </motion.p>
            <motion.p className="text-muted-foreground" variants={textVariants}>
              I'm pulled by data — numbers that speak truth. I find joy in clean
              code, in tidy logic. I light up at visualizations that reveal
              meaning at a glance. I love design that respects the pixel — a
              pixel at a time. Sharp. Clean. Aligned.
            </motion.p>
            <motion.p className="text-muted-foreground" variants={textVariants}>
              And in the end, I know this: the best work is born not from
              pressure, not from hype, but from love. Love for the process. Love
              for the craft. Love for the quiet clarity in data, code, and
              design.
            </motion.p>
          </motion.div>
        </motion.section>
      </motion.div>
    </Layout>
  );
};

export default Index;
