import { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Github, Linkedin, Mail, BookOpen } from "lucide-react";
import ProjectsPanel from "@/components/ProjectsPanel";
import ArticlesPanel from "@/components/ArticlesPanel";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";

// Register GSAP plugins
gsap.registerPlugin(CustomEase);

// Configure GSAP for maximum performance
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

// Custom easing curves for luxury feel
CustomEase.create("luxuryOut", "0.25, 1, 0.5, 1");
CustomEase.create("subtleIn", "0.4, 0, 0.2, 1");

interface IndexProps {
  openRightPanel?: (content: React.ReactNode, title: string) => void;
}

const Index: React.FC<IndexProps> = ({ openRightPanel }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const profileImageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const navigationRef = useRef<HTMLDivElement>(null);
  const masterTl = useRef<gsap.core.Timeline>();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/jchiwaii",
      label: "GitHub",
    },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/john-chiwai/",
      label: "LinkedIn",
    },
    {
      icon: Mail,
      href: "mailto:chiwai.kiriba@gmail.com",
      label: "Email",
    },
    {
      icon: BookOpen,
      href: "https://medium.com/@chiwai.kiriba",
      label: "Medium",
    },
  ];

  const handleProjectsClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (openRightPanel) {
      openRightPanel(<ProjectsPanel />, "Projects");
    }
  };

  const handleArticlesClick = (e: React.MouseEvent) => {
    e.preventDefault();

    if (openRightPanel) {
      openRightPanel(<ArticlesPanel />, "Articles");
    }
  };

  // Smooth entrance animation
  useLayoutEffect(() => {
    if (masterTl.current) {
      masterTl.current.kill();
    }

    // Set initial states
    gsap.set(
      [
        profileImageRef.current,
        nameRef.current,
        socialLinksRef.current,
        navigationRef.current,
      ],
      {
        opacity: 0,
        y: 20,
      }
    );

    // Create smooth entrance timeline
    const tl = gsap.timeline();

    tl.to(profileImageRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "luxuryOut",
    })
      .to(
        nameRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "luxuryOut",
        },
        "-=0.5"
      )
      .to(
        socialLinksRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "luxuryOut",
        },
        "-=0.4"
      )
      .to(
        navigationRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "luxuryOut",
        },
        "-=0.3"
      );

    masterTl.current = tl;
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (masterTl.current) {
        masterTl.current.kill();
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-background flex flex-col"
    >
      {/* Content wrapper to prevent reflow */}
      <div
        ref={contentWrapperRef}
        className="flex-1 flex flex-col"
        style={{
          minWidth: 0, // Prevent overflow
          contain: "layout",
        }}
      >
        {/* Main Content */}
        <main className="flex-1 flex items-center justify-center px-6">
          <div className="text-center space-y-10 max-w-md w-full">
            {/* Profile Image */}
            <div
              ref={profileImageRef}
              className="flex justify-center"
              style={{ opacity: 0 }}
            >
              <div className="w-36 h-36 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                <img
                  src="/images/profile.jpg"
                  alt="John Chiwai"
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>
            </div>

            {/* Name and Title */}
            <div ref={nameRef} className="space-y-2" style={{ opacity: 0 }}>
              <h1 className="text-3xl font-semibold text-primary tracking-tight">
                John Chiwai
              </h1>
              <p className="text-sm font-medium text-muted-foreground tracking-wide">
                || Developer ||
              </p>
            </div>

            {/* Social Links */}
            <div
              ref={socialLinksRef}
              className="flex justify-center space-x-6"
              style={{ opacity: 0 }}
            >
              <TooltipProvider>
                {socialLinks.map((social) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <a
                        href={social.href}
                        target={
                          social.href.startsWith("http") ? "_blank" : undefined
                        }
                        rel={
                          social.href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="group p-2 rounded-md hover:bg-secondary/10 transition-colors duration-300"
                        aria-label={social.label}
                      >
                        <social.icon className="social-icon w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                      </a>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.label}</p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </TooltipProvider>
            </div>
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav ref={navigationRef} className="pb-8 px-6" style={{ opacity: 0 }}>
          <div className="flex justify-center space-x-8">
            <button
              onClick={handleProjectsClick}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Projects
            </button>

            <button
              onClick={handleArticlesClick}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors duration-300 cursor-pointer"
            >
              Articles
            </button>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Index;
