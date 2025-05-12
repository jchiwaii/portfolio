import { ThemeToggle } from "@/components/ThemeToggle";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NavItem = ({
  to,
  children,
  className,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className={cn(
      "text-xs font-medium text-muted-foreground hover:text-foreground transition-colors",
      className
    )}
  >
    {children}
  </Link>
);

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <header className="w-full max-w-xl mx-auto px-3 py-3 flex items-center justify-between relative">
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
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-1 hover:bg-accent rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X size={16} className="text-foreground" />
              ) : (
                <Menu size={16} className="text-foreground" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={cn(
            "sm:hidden fixed inset-0 z-50 transform transition-transform duration-200 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            onClick={closeMenu}
          />
          <nav className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-background border-l border-border p-6">
            <div className="flex justify-end mb-8">
              <button
                onClick={closeMenu}
                className="p-1 hover:bg-accent rounded-md transition-colors"
                aria-label="Close menu"
              >
                <X size={16} className="text-foreground" />
              </button>
            </div>
            <div className="flex flex-col space-y-4">
              <NavItem to="/projects" onClick={closeMenu}>
                Projects
              </NavItem>
              <NavItem to="/articles" onClick={closeMenu}>
                Articles
              </NavItem>
              <NavItem to="/contact" onClick={closeMenu}>
                Contact
              </NavItem>
            </div>
          </nav>
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
