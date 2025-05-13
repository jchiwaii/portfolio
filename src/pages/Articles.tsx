import Layout from "@/components/Layout";

const Articles = () => {
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
    {
      id: 2,
      title: "I used Figma and Power BI to design this weather dashboard",
      excerpt:
        "After a long hunt for the perfect dataset, I made my own, and what started as a weekend experiment became one of my favorite builds.",
      date: "Apr 7, 2025",
      readTime: "3 min read",
      tags: ["Power BI", "Figma"],
      link: "https://medium.com/@chiwai.kiriba/i-used-figma-and-power-bi-to-design-this-weather-dashboard-cea46c83dd12",
    },
  ];

  return (
    <Layout>
      <div className="space-y-6">
        <section>
          <h1 className="text-sm font-semibold tracking-tight mt-0">
            Articles
          </h1>
          <p className="text-xs text-muted-foreground mt-0.5">
            Thoughts, ideas, random sparks...
          </p>
        </section>

        <section className="grid grid-cols-1 gap-6 mt-0">
          {articles.map((article) => (
            <article
              key={article.id}
              className="py-4 space-y-3 rounded-md hover:bg-secondary/20 transition-colors duration-200"
            >
              <h2 className="text-xs font-semibold tracking-tight mt-0">
                {article.title}
              </h2>
              <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                <span>{article.date}</span>
                <span>•</span>
                <span>{article.readTime}</span>
              </div>
              <p className="text-xs text-muted-foreground">{article.excerpt}</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span key={tag} className="tag">
                    {tag}
                  </span>
                ))}
              </div>
              <div>
                <a
                  href={article.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs underline underline-offset-2 hover:text-primary transition-colors duration-200"
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
