import Layout from "@/components/Layout";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Kanga",
      description:
        "A modern tailoring website showcasing bespoke Swahili fashion for weddings and everyday wear. Built an elegant, responsive user interface to highlight services, gallery, and booking features.",
      technologies: ["HTML", "SCSS", "Javascript"],
      link: "https://kanga.netlify.app/",
    },
  ];

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

        <section className="grid grid-cols-1 gap-6 mt-0">
          {projects.map((project) => (
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
              <div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline underline-offset-2 hover:text-primary transition-colors duration-200"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Projects;
