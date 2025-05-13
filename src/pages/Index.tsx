import Layout from "@/components/Layout";

const Index = () => {
  return (
    <Layout>
      <div
        className="section-spacing"
        role="main"
        aria-label="Personal introduction and about section"
      >
        <section className="space-y-1" aria-labelledby="intro-heading">
          <h1 className="h1">John Chiwai</h1>
          <p className="text-muted-foreground" id="tagline">
            Where logic meets aesthetics. I create things that make sense and
            look right.
          </p>
        </section>

        <section className="content-spacing" aria-labelledby="about-heading">
          <h2 id="about-heading" className="h2">
            About
          </h2>
          <div className="item-spacing">
            <p className="text-muted-foreground">
              There's too much noise—cluttered interfaces, messy data, scattered
              solutions, with the new dawn of AI. I'm drawn to the opposite:
              clarity, structure, and elegance. I'm building the kind of thinker
              and maker who bridges logic and creativity—someone who sees the
              whole system and still obsesses over a single pixel.
            </p>
            <p className="text-muted-foreground">
              I've always been drawn to patterns. Whether in numbers, visuals,
              or systems. What started with a love for precision and structure
              naturally evolved into exploring how data tells stories, how
              interfaces speak, and how technology connects it all. I design
              dashboards that feel intuitive, build APIs that bridge ideas, and
              craft interfaces that look as good as they work.
            </p>
            <p className="text-muted-foreground">
              I'm still learning, always refining. Simplicity is my compass;
              creativity is the spark.
            </p>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
