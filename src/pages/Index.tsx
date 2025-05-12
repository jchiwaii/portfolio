import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      <div className="space-y-10">
        <section className="space-y-3">
          <p className="text-sm text-foreground max-w-xl">John Chiwai</p>
          <p className="text-xs text-muted-foreground max-w-xl">
            Software developer focused on building minimal, functional, and
            beautiful digital experiences.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-xs font-medium tracking-tight">About</h2>
          <p className="text-xs text-muted-foreground max-w-xl leading-relaxed">
            Software engineering bandwidth and genius ideas are the bottlenecks
            to rapid progress. My work focuses on solving complex problems with
            simple, elegant solutions.
          </p>

          <div className="flex flex-wrap gap-2 pt-2">
            <Button
              variant="outline"
              size="sm"
              className="gap-1 text-xs h-6"
              asChild
            >
              <a href="/cv.pdf" download>
                <FileText size={12} />
                Download CV
              </a>
            </Button>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Index;
