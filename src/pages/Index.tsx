import { useRef, useEffect, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { Github, Linkedin, Mail, BookOpen, ExternalLink } from "lucide-react";
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
  closeRightPanel?: () => void;
  rightPanelState?: {
    isOpen: boolean;
    content: React.ReactNode;
    title: string;
  };
}

const Index: React.FC<IndexProps> = ({
  openRightPanel,
  closeRightPanel,
  rightPanelState,
}) => {
  const [showAboutMe, setShowAboutMe] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const contentWrapperRef = useRef<HTMLDivElement>(null);
  const profileImageRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLDivElement>(null);
  const socialLinksRef = useRef<HTMLDivElement>(null);
  const aboutMeRef = useRef<HTMLDivElement>(null);
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

    // Toggle functionality: if Projects panel is already open, close it
    if (rightPanelState?.isOpen && rightPanelState?.title === "Projects") {
      closeRightPanel?.();
    } else if (openRightPanel) {
      openRightPanel(<ProjectsPanel />, "Projects");
    }
  };

  const handleArticlesClick = (e: React.MouseEvent) => {
    e.preventDefault();

    // Toggle functionality: if Articles panel is already open, close it
    if (rightPanelState?.isOpen && rightPanelState?.title === "Articles") {
      closeRightPanel?.();
    } else if (openRightPanel) {
      openRightPanel(<ArticlesPanel />, "Articles");
    }
  };

  const handleAboutMeClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setShowAboutMe(!showAboutMe);
  };

  // Animate About Me section when toggled
  useEffect(() => {
    if (aboutMeRef.current) {
      if (showAboutMe) {
        // First, temporarily show element to measure its natural height
        gsap.set(aboutMeRef.current, {
          visibility: "hidden",
          height: "auto",
          opacity: 1,
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          marginTop: "2.5rem",
        });

        // Get the natural height
        const targetHeight = aboutMeRef.current.scrollHeight;

        // Now set initial state for smooth animation
        gsap.set(aboutMeRef.current, {
          visibility: "visible",
          opacity: 0,
          y: -15,
          height: 0,
          overflow: "hidden",
          marginTop: 0,
          paddingTop: 0,
          paddingBottom: 0,
        });

        // Create smooth entrance timeline
        const tl = gsap.timeline();

        tl.to(aboutMeRef.current, {
          height: targetHeight,
          marginTop: "2.5rem",
          paddingTop: "1.5rem",
          paddingBottom: "1.5rem",
          duration: 0.7,
          ease: "luxuryOut",
        }).to(
          aboutMeRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "luxuryOut",
          },
          "-=0.4"
        );
      } else {
        // Create smooth exit timeline - fade content first, then collapse
        const tl = gsap.timeline();

        tl.to(aboutMeRef.current, {
          opacity: 0,
          y: -15,
          duration: 0.4,
          ease: "luxuryOut",
        }).to(
          aboutMeRef.current,
          {
            height: 0,
            marginTop: 0,
            paddingTop: 0,
            paddingBottom: 0,
            duration: 0.6,
            ease: "luxuryOut",
          },
          "-=0.2"
        );
      }
    }
  }, [showAboutMe]);

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

            {/* About Me Section */}
            {showAboutMe && (
              <div
                ref={aboutMeRef}
                className="max-w-lg mx-auto text-left rounded-lg bg-secondary/5 border border-border/30"
                style={{
                  opacity: 0,
                  overflow: "hidden",
                  paddingLeft: "1.5rem",
                  paddingRight: "1.5rem",
                }}
              >
                <div className="space-y-4 text-sm leading-relaxed text-muted-foreground">
                  <p>
                    I am currently suffering from chronic curiosity. I tell
                    stories using pictures and data. Currently aiming to become
                    a Fullstack developer, so that I can deploy ML models in
                    websites. Fullstack web + Data Science.
                  </p>

                  <p>
                    I am also a certified data professional by Explore AI - and
                    ALX Africa. SQL'ing my way into projects and open for
                    collaboration. I am currently building{" "}
                    <a
                      href="https://sql-ace.netlify.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-primary font-medium underline underline-offset-2 hover:underline-offset-4 hover:text-primary/80 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:ring-offset-2 rounded-sm"
                      aria-label="SQLAce - Opens in new tab"
                    >
                      SQLAce
                      <ExternalLink
                        size={12}
                        className="inline-block ml-0.5"
                        aria-hidden="true"
                      />
                    </a>
                    . I also design sleek dashboards, and out-of-the box
                    solutions. Whether it is powerpoints and designs, anything
                    on a Canvas, or Pixels, you better call John.
                  </p>

                  <p>
                    !important: I am also open to collaborations and long term
                    engagement for projects that involve Gen AI solutions, and
                    making useful AI.
                  </p>

                  <p>Avid reader. Also learning Rust on the side.</p>

                  <p>
                    Trust me it's hard writing a bio. Anyway, we can talk,
                    anything from UI/UX to Calculus.
                  </p>

                  <p>
                    Ooh, and I am an Actuarial Graduate, so nothing is too hard
                    to crack.
                  </p>
                </div>
              </div>
            )}
          </div>
        </main>

        {/* Bottom Navigation */}
        <nav ref={navigationRef} className="pb-8 px-6" style={{ opacity: 0 }}>
          <div className="flex justify-center space-x-8">
            <button
              onClick={handleProjectsClick}
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                rightPanelState?.isOpen && rightPanelState?.title === "Projects"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              aria-label={
                rightPanelState?.isOpen && rightPanelState?.title === "Projects"
                  ? "Close Projects panel"
                  : "Open Projects panel"
              }
            >
              Projects
            </button>

            <button
              onClick={handleAboutMeClick}
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                showAboutMe
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              aria-label={showAboutMe ? "Hide About Me" : "Show About Me"}
            >
              About Me
            </button>

            <button
              onClick={handleArticlesClick}
              className={`text-sm font-medium transition-colors duration-300 cursor-pointer ${
                rightPanelState?.isOpen && rightPanelState?.title === "Articles"
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
              aria-label={
                rightPanelState?.isOpen && rightPanelState?.title === "Articles"
                  ? "Close Articles panel"
                  : "Open Articles panel"
              }
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
