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
      <header
        className="w-full max-w-xl mx-auto px-6 py-3 flex items-center justify-between relative"
        role="banner"
      >
        <div>
          <Link
            to="/"
            className="font-calligraphy hover-subtle"
            aria-label="Home"
          >
            Chiwai
          </Link>
        </div>
        <div className="flex items-center space-x-6">
          <nav
            className="hidden sm:flex items-center space-x-6"
            role="navigation"
            aria-label="Main navigation"
          >
            <NavItem to="/projects">Projects</NavItem>
            <NavItem to="/articles">Articles</NavItem>
            <NavItem to="/contact">Contact</NavItem>
          </nav>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="sm:hidden p-1 hover:bg-accent/50 rounded-md transition-colors"
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? (
                <X size={16} className="text-foreground" aria-hidden="true" />
              ) : (
                <Menu
                  size={16}
                  className="text-foreground"
                  aria-hidden="true"
                />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          id="mobile-menu"
          className={cn(
            "sm:hidden fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation menu"
        >
          <div
            className="absolute inset-0 bg-background/90 backdrop-blur-sm"
            onClick={closeMenu}
            role="presentation"
          />
          <nav
            className="absolute right-0 top-0 bottom-0 w-3/4 max-w-sm bg-background border-l border-border p-6"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={closeMenu}
                className="p-1 hover:bg-accent/50 rounded-md transition-colors"
                aria-label="Close navigation menu"
              >
                <X size={16} className="text-foreground" aria-hidden="true" />
              </button>
            </div>
            <div className="flex flex-col space-y-6">
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

      <main className="flex-1 w-full max-w-xl mx-auto px-6 py-6" role="main">
        {children}
      </main>

      <footer
        className="w-full max-w-xl mx-auto px-6 py-3"
        role="contentinfo"
        aria-label="Site footer"
      >
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-border pt-3">
          <nav
            className="flex space-x-6 mb-3 sm:mb-0"
            aria-label="Social media links"
          >
            <a
              href="https://github.com/jchiwaii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover-subtle"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/john-chiwai/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover-subtle"
              aria-label="LinkedIn profile"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@chiwai.kiriba"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover-subtle"
              aria-label="Medium blog"
            >
              Medium
            </a>
            <a
              href="https://www.instagram.com/artify.ck/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-muted-foreground hover-subtle"
              aria-label="Instagram profile"
            >
              Instagram
            </a>
          </nav>
          <div className="text-xs text-muted-foreground" aria-label="Copyright">
            © Chiwai❤️
          </div>
        </div>
      </footer>
    </div>
  );
}
