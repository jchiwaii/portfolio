
import Layout from "@/components/Layout";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description:
        "A detailed description of your first project. What problem does it solve? What technologies did you use? What was your role?",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      link: "https://github.com/yourusername/project-one",
    },
    {
      id: 2,
      title: "Project Two",
      description:
        "A detailed description of your second project. What problem does it solve? What technologies did you use? What was your role?",
      technologies: ["Next.js", "GraphQL", "Styled Components"],
      link: "https://github.com/yourusername/project-two",
    },
    {
      id: 3,
      title: "Project Three",
      description:
        "A detailed description of your third project. What problem does it solve? What technologies did you use? What was your role?",
      technologies: ["Vue.js", "Firebase", "SCSS"],
      link: "https://github.com/yourusername/project-three",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <section className="mt-0">
          <h1 className="text-sm font-medium mt-0 pl-0">Projects</h1>
          <p className="text-xs text-muted-foreground mt-0.5 pl-0">
            A collection of projects I've worked on.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 mt-0">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-md space-y-2 hover:bg-secondary/20 transition-colors"
            >
              <h2 className="text-xs font-medium mt-0 pl-0">{project.title}</h2>
              <p className="text-xs text-muted-foreground pl-0">{project.description}</p>
              <div className="flex flex-wrap gap-1 pl-0">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-secondary text-secondary-foreground px-2 py-0.5 text-xs rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="pl-0">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline underline-offset-2 hover:text-primary"
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
