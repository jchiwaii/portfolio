import React, { useState, useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { X } from "lucide-react";

// Register GSAP plugins
gsap.registerPlugin(CustomEase);

// Configure GSAP for maximum performance
gsap.config({
  force3D: true,
  nullTargetWarn: false,
});

// Custom easing curves for ultra-smooth animations
CustomEase.create("luxuryOut", "0.25, 1, 0.5, 1");
CustomEase.create("luxuryInOut", "0.4, 0, 0.2, 1");

interface SplitScreenLayoutProps {
  children: React.ReactNode;
}

export const SplitScreenLayout: React.FC<SplitScreenLayoutProps> = ({
  children,
}) => {
  const [rightPanel, setRightPanel] = useState<{
    isOpen: boolean;
    content: React.ReactNode;
    title: string;
  }>({
    isOpen: false,
    content: null,
    title: "",
  });

  const containerRef = useRef<HTMLDivElement>(null);
  const leftPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelRef = useRef<HTMLDivElement>(null);
  const rightPanelContentRef = useRef<HTMLDivElement>(null);
  const masterTl = useRef<gsap.core.Timeline>();

  const openRightPanel = (content: React.ReactNode, title: string) => {
    setRightPanel({
      isOpen: true,
      content,
      title,
    });
  };

  const closeRightPanel = () => {
    if (masterTl.current) {
      masterTl.current.kill();
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Hide the panel completely after animation
        if (rightPanelRef.current) {
          gsap.set(rightPanelRef.current, { visibility: "hidden" });
        }
        setRightPanel({
          isOpen: false,
          content: null,
          title: "",
        });
      },
    });

    // Smooth closing animation - content fades first
    tl.to(rightPanelContentRef.current, {
      opacity: 0,
      duration: 0.2,
      ease: "power2.out",
    })
      // Then both panels animate simultaneously
      .to(
        rightPanelRef.current,
        {
          x: "100%",
          duration: 0.8,
          ease: "luxuryInOut",
        },
        "-=0.1"
      )
      .to(
        leftPanelRef.current,
        {
          width: "100%",
          duration: 0.8,
          ease: "luxuryInOut",
        },
        "-=0.8" // Start at exactly the same time
      );

    masterTl.current = tl;
  };

  useLayoutEffect(() => {
    if (
      rightPanel.isOpen &&
      rightPanelRef.current &&
      leftPanelRef.current &&
      rightPanelContentRef.current
    ) {
      if (masterTl.current) {
        masterTl.current.kill();
      }

      // Set initial states with GSAP (override any CSS)
      gsap.set(rightPanelRef.current, {
        x: "100%",
        visibility: "visible", // Use visibility instead of display
      });
      gsap.set(rightPanelContentRef.current, {
        opacity: 0,
      });
      gsap.set(leftPanelRef.current, {
        width: "100%",
      });

      // Create smooth timeline with precise timing
      const tl = gsap.timeline();

      // Simultaneously animate both panels for smooth transition
      tl.to(leftPanelRef.current, {
        width: "50%",
        duration: 0.8,
        ease: "luxuryInOut",
      })
        .to(
          rightPanelRef.current,
          {
            x: "0%",
            duration: 0.8,
            ease: "luxuryInOut",
          },
          0 // Start at exactly the same time
        )
        // Content fades in after panels are positioned
        .to(
          rightPanelContentRef.current,
          {
            opacity: 1,
            duration: 0.4,
            ease: "luxuryOut",
          },
          "-=0.2"
        );

      masterTl.current = tl;
    }
  }, [rightPanel.isOpen]);

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
      className="split-screen-container min-h-screen bg-background flex overflow-hidden"
      style={{
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* Left Panel - Home */}
      <div
        ref={leftPanelRef}
        className="split-panel relative bg-background"
        style={{
          width: "100%",
          height: "100%",
          minWidth: 0,
          flexShrink: 0,
          transform: "translateZ(0)", // Force hardware acceleration
          willChange: "width",
          transition: "none !important", // Force override any CSS transitions
        }}
      >
        {/* Pass panel functions and state to children */}
        {React.cloneElement(children as React.ReactElement, {
          openRightPanel,
          closeRightPanel,
          rightPanelState: rightPanel,
        })}
      </div>

      {/* Right Panel */}
      {rightPanel.isOpen && (
        <div
          ref={rightPanelRef}
          className="split-panel bg-background relative overflow-hidden border-l border-border/50"
          style={{
            width: "50%",
            height: "100%",
            position: "absolute",
            right: 0,
            top: 0,
            transform: "translateX(100%) translateZ(0)",
            minWidth: 0,
            flexShrink: 0,
            willChange: "transform",
            transition: "none !important", // Force override any CSS transitions
            visibility: "hidden", // Hidden initially, GSAP will show it
          }}
        >
          {/* Close Button */}
          <button
            onClick={closeRightPanel}
            className="absolute top-6 right-6 z-20 p-2 rounded-md hover:bg-secondary/20 transition-colors duration-300"
            aria-label="Close panel"
          >
            <X
              size={18}
              className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            />
          </button>

          {/* Panel Content */}
          <div
            ref={rightPanelContentRef}
            className="h-full overflow-y-auto scrollbar-thin"
            style={{
              opacity: 0,
              transform: "translateZ(0)", // Force hardware acceleration
            }}
          >
            {rightPanel.content}
          </div>
        </div>
      )}
    </div>
  );
};

export default SplitScreenLayout;
