
import Layout from "@/components/Layout";

const Articles = () => {
  const articles = [
    {
      id: 1,
      title: "Article Title One",
      excerpt:
        "This is a brief excerpt or summary of what this article is about. It should give readers a taste of the content.",
      date: "May 10, 2025",
      readTime: "5 min read",
      tags: ["Development", "Design"],
    },
    {
      id: 2,
      title: "Article Title Two",
      excerpt:
        "This is a brief excerpt or summary of what this article is about. It should give readers a taste of the content.",
      date: "April 24, 2025",
      readTime: "8 min read",
      tags: ["Technology", "Career"],
    },
    {
      id: 3,
      title: "Article Title Three",
      excerpt:
        "This is a brief excerpt or summary of what this article is about. It should give readers a taste of the content.",
      date: "April 02, 2025",
      readTime: "3 min read",
      tags: ["Productivity", "Development"],
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <section>
          <h1 className="text-sm font-medium mt-0 pl-0">Articles</h1>
          <p className="text-xs text-muted-foreground mt-0.5 pl-0">
            Thoughts, ideas, and insights on technology and development.
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 mt-0">
          {articles.map((article) => (
            <article key={article.id} className="space-y-2 rounded-md hover:bg-secondary/20 transition-colors">
              <h2 className="text-xs font-medium mt-0 pl-0">{article.title}</h2>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground pl-0">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <p className="text-xs text-muted-foreground pl-0">{article.excerpt}</p>
              <div className="flex flex-wrap gap-1 pl-0">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-secondary text-secondary-foreground px-2 py-0.5 text-xs rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="pl-0">
                <a
                  href="#"
                  className="text-xs underline underline-offset-2 hover:text-primary"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </section>
      </div>
    </Layout>
  );
};

export default Articles;
