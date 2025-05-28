import Layout from "@/components/Layout";
import { useState } from "react";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

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

  const filteredProjects = activeCategory
    ? projects.filter((project) => project.category === activeCategory)
    : [];

  return (
    <Layout>
      <div className="space-y-6">
        <section className="mt-0">
          <h1 className="text-sm font-semibold tracking-tight mt-0">
            Projects
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            A collection of projects I've worked on.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`p-4 rounded-md text-left transition-colors duration-200 ${
                activeCategory === category.id
                  ? "bg-secondary/30"
                  : "hover:bg-secondary/20"
              }`}
            >
              <h3 className="text-xs font-semibold tracking-tight mt-0">
                {category.title}
              </h3>
              <p className="text-xs text-muted-foreground mt-0.5">
                {category.description}
              </p>
            </button>
          ))}
        </section>

        {activeCategory && (
          <section className="grid grid-cols-1 gap-6 mt-0">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-md py-4 space-y-3 hover:bg-secondary/20 transition-colors duration-200"
              >
                <h2 className="text-xs font-semibold tracking-tight mt-0">
                  {project.title}
                </h2>
                <p className="text-xs text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="tag">
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
                      className="text-xs underline underline-offset-2 hover:text-primary transition-colors duration-200"
                    >
                      View Code →
                    </a>
                  )}
                  {project.liveLink && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs underline underline-offset-2 hover:text-primary transition-colors duration-200"
                    >
                      View Live →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </section>
        )}
      </div>
    </Layout>
  );
};

export default Projects;
