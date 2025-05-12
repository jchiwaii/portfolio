import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const NavItem = ({
  to,
  children,
  className,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <Link
    to={to}
    className={cn(
      "text-xs font-medium text-muted-foreground hover:text-foreground transition-colors",
      className
    )}
  >
    {children}
  </Link>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <header className="w-full max-w-xl mx-auto px-3 py-3 flex items-center justify-between">
        <div>
          <Link
            to="/"
            className="font-calligraphy hover:text-primary transition-colors"
          >
            Chiwai
          </Link>
        </div>
        <div className="flex items-center space-x-4">
          <nav className="hidden sm:flex items-center space-x-4">
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/articles">Articles</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="flex-1 w-full max-w-xl mx-auto px-3 py-0">
        {children}
      </main>

      <footer className="w-full max-w-xl mx-auto px-3 py-2">
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-border pt-2">
          <div className="flex space-x-3 mb-2 sm:mb-0">
            <a
              href="https://github.com/jchiwaii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/john-chiwai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@chiwai.kiriba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Medium
            </a>
            <a
              href="https://www.instagram.com/artify.ck/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Instagram
            </a>
          </div>
          <div className="text-xs text-muted-foreground">© Chiwai❤️</div>
        </div>
      </footer>
    </div>
  );
}
