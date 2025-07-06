import { useState, useRef, useEffect, useLayoutEffect } from "react";
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

const ProjectsPanel = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const headerRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const masterTl = useRef<gsap.core.Timeline>();
  const projectRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const categories = [
    {
      id: "web",
      title: "Web",
      description: "Web applications and interfaces",
    },
    {
      id: "data-analysis",
      title: "Data Analysis",
      description: "Business intelligence and data visualization",
    },
    {
      id: "data-science",
      title: "Data Science",
      description: "Machine learning and statistical modeling",
    },
  ];

  const projects = [
    {
      id: 1,
      title: "Weather Time Series",
      description:
        "I conducted a simple time-series analysis of Nairobi weather data using ARIMA.",
      technologies: ["Python", "ARIMA", "Time Series"],
      codeLink: "https://github.com/jchiwaii/ARIMA-Weather-Forecast",
      category: "data-science",
    },
    {
      id: 2,
      title: "Insurance Dashboard",
      description:
        "This is a simple one page insurance dashboard made in Power BI and Figma. No DAX measures, just simple and to the point",
      technologies: ["SQL", "Power BI", "Figma"],
      liveLink:
        "https://app.powerbi.com/view?r=eyJrIjoiMDMzOTg3ZmItZmVmZC00NTQyLWI3OTctMzMyMTkxYWY3ZGY3IiwidCI6ImExZDBiNWJmLTYyYTItNDhhMS1iYWM4LTdjNGY0YjJjNTBkNSJ9",
      category: "data-analysis",
    },
    {
      id: 3,
      title: "Kanga",
      description:
        "A modern tailoring website showcasing bespoke Swahili fashion for weddings and everyday wear. Built an elegant, responsive user interface to highlight services, gallery, and booking features.",
      technologies: ["HTML", "SCSS", "Javascript"],
      liveLink: "https://kanga.netlify.app/",
      codeLink: "https://github.com/jchiwaii/kanga",
      category: "web",
    },
  ];

  const handleCategoryClick = (categoryId: string) => {
    // Toggle: if same category is clicked, close it; otherwise, open the new one
    setActiveCategory(activeCategory === categoryId ? null : categoryId);
  };

  const getProjectsForCategory = (categoryId: string) => {
    return projects.filter((project) => project.category === categoryId);
  };

  // Simple entrance animation - exactly like home page pattern
  useLayoutEffect(() => {
    if (masterTl.current) {
      masterTl.current.kill();
    }

    // Set initial states - exactly like home page
    gsap.set([headerRef.current, categoriesRef.current], {
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
      categoriesRef.current,
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

  // Animate projects when category changes - simple and clean
  useEffect(() => {
    if (activeCategory && projectRefs.current[activeCategory]) {
      // Set initial state
      gsap.set(projectRefs.current[activeCategory], {
        opacity: 0,
        y: 20,
        height: "auto",
      });

      // Animate in
      gsap.to(projectRefs.current[activeCategory], {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "luxuryOut",
        delay: 0.1,
      });
    }
  }, [activeCategory]);

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
            Projects
          </h1>
          <p className="text-sm text-muted-foreground mt-1">
            A collection of projects I've worked on.
          </p>
        </section>

        {/* Categories with inline projects */}
        <section
          ref={categoriesRef}
          className="flex flex-col gap-3"
          style={{ opacity: 0 }}
        >
          {categories.map((category) => (
            <div key={category.id} className="space-y-3">
              {/* Category Button */}
              <button
                onClick={() => handleCategoryClick(category.id)}
                className={`group relative px-5 py-4 rounded-lg text-left transition-all duration-300 outline-none hover:shadow-sm w-full
                  ${
                    activeCategory === category.id
                      ? "bg-secondary/25 border border-primary/30 shadow-sm"
                      : "hover:bg-secondary/15 border border-transparent hover:border-border/30"
                  }
                `}
              >
                <div className="relative">
                  <h3
                    className={`text-sm font-semibold tracking-tight transition-colors duration-300 ${
                      activeCategory === category.id
                        ? "text-primary"
                        : "group-hover:text-foreground"
                    }`}
                  >
                    {category.title}
                  </h3>
                  <p
                    className={`text-xs mt-1 transition-colors duration-300 ${
                      activeCategory === category.id
                        ? "text-primary/70"
                        : "text-muted-foreground group-hover:text-foreground/70"
                    }`}
                  >
                    {category.description}
                  </p>
                </div>

                {activeCategory === category.id && (
                  <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-primary rounded-r-sm" />
                )}
              </button>

              {/* Projects for this category */}
              {activeCategory === category.id && (
                <div
                  ref={(el) => (projectRefs.current[category.id] = el)}
                  className="grid grid-cols-1 gap-4 ml-4"
                  style={{ opacity: 0 }}
                >
                  {getProjectsForCategory(category.id).map((project) => (
                    <div
                      key={project.id}
                      className="project-card group rounded-lg p-5 space-y-4 border border-border/40 hover:border-primary/30 hover:bg-secondary/5 transition-all duration-300 cursor-pointer hover:shadow-sm"
                    >
                      <h2 className="text-sm font-semibold tracking-tight group-hover:text-primary transition-colors duration-300">
                        {project.title}
                      </h2>
                      <p className="text-xs text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block px-2 py-1 text-xs rounded-md bg-secondary/30 text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="flex gap-4">
                        {project.codeLink && (
                          <a
                            href={project.codeLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs underline underline-offset-2 hover:text-primary transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Code →
                          </a>
                        )}
                        {project.liveLink && (
                          <a
                            href={project.liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs underline underline-offset-2 hover:text-primary transition-colors duration-300"
                            onClick={(e) => e.stopPropagation()}
                          >
                            View Live →
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default ProjectsPanel;
