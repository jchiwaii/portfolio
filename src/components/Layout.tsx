import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

function NavItem({ to, children, className, onClick }: NavItemProps) {
  return (
    <Link
      to={to}
      className={cn("nav-item", className)}
      onClick={onClick}
      role="menuitem"
    >
      {children}
    </Link>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground antialiased">
      <header
        className="w-full max-w-2xl mx-auto px-6 py-6 flex items-center justify-between relative"
        role="banner"
      >
        <div>
          <Link
            to="/"
            className="font-calligraphy text-2xl text-primary hover:text-primary/80 transition-colors duration-200"
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
            <NavItem to="/projects" className="nav-item">
              Projects
            </NavItem>
            <NavItem to="/articles" className="nav-item">
              Articles
            </NavItem>
            <NavItem to="/contact" className="nav-item">
              Contact
            </NavItem>
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

      <main className="flex-1 w-full max-w-2xl mx-auto px-6 pb-8" role="main">
        {children}
      </main>
    </div>
  );
}
