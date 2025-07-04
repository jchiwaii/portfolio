import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";

// Register GSAP plugins
gsap.registerPlugin(CustomEase);

// Configure GSAP for maximum performance
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

// Custom easing curves - exactly like home page
CustomEase.create("luxuryOut", "0.25, 1, 0.5, 1");

const ArticlesPanel = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);
  const masterTl = useRef<gsap.core.Timeline>();

  const articles = [
    {
      id: 1,
      title: "AI Made Me a Beautiful Dashboard… and Zero Sales",
      excerpt:
        "I built the perfect dashboard, but the silence from my customers told me everything I had missed.",
      date: "May 2, 2025",
      readTime: "5 min read",
      tags: ["Data Analysis", "Business Development"],
      link: "https://medium.com/@chiwai.kiriba/ai-made-me-a-beautiful-dashboard-and-zero-sales-75a48cd40bbd",
    },
  ];

  // Simple entrance animation - exactly like home page pattern
  useLayoutEffect(() => {
    if (masterTl.current) {
      masterTl.current.kill();
    }

    // Set initial states - exactly like home page
    gsap.set([headerRef.current, articlesRef.current], {
      opacity: 0,
      y: 20,
    });

    // Create timeline exactly like home page
    const tl = gsap.timeline();

    tl.to(headerRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "luxuryOut",
    }).to(
      articlesRef.current,
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "luxuryOut",
      },
      "-=0.5"
    );

    masterTl.current = tl;
  }, []);

  // Cleanup
  useEffect(() => {
    return () => {
      if (masterTl.current) {
        masterTl.current.kill();
      }
    };
  }, []);

  return (
    <div className="p-6 h-full">
      <div className="space-y-6 relative">
        {/* Header */}
        <section ref={headerRef} style={{ opacity: 0 }}>
          <h1 className="text-lg font-semibold tracking-tight text-primary">
            Articles
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            Thoughts, ideas, random sparks...
          </p>
        </section>

        {/* Articles */}
        <section ref={articlesRef} className="space-y-4" style={{ opacity: 0 }}>
          {articles.map((article) => (
            <article
              key={article.id}
              className="group rounded-lg p-5 space-y-4 border border-border/40 hover:border-primary/30 hover:bg-secondary/5 transition-all duration-300 cursor-pointer hover:shadow-sm"
            >
              <h2 className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                {article.title}
              </h2>

              <div className="flex items-center space-x-2 text-xs text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block px-2 py-1 text-xs rounded-md bg-secondary/30 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline underline-offset-2 hover:text-primary transition-colors duration-300"
                  onClick={(e) => e.stopPropagation()}
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ArticlesPanel;
