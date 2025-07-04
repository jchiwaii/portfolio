import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

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

  const openRightPanel = (content: React.ReactNode, title: string) => {
    setRightPanel({
      isOpen: true,
      content,
      title,
    });
  };

  const closeRightPanel = () => {
    setRightPanel({
      isOpen: false,
      content: null,
      title: "",
    });
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left Panel - Home */}
      <motion.div
        className="relative bg-background"
        animate={{
          width: rightPanel.isOpen ? "50%" : "100%",
        }}
        transition={{
          duration: 0.6,
          ease: [0.25, 0.46, 0.45, 0.94],
        }}
      >
        {/* Pass openRightPanel function to children */}
        {React.cloneElement(children as React.ReactElement, {
          openRightPanel,
        })}
      </motion.div>

      {/* Right Panel */}
      <AnimatePresence>
        {rightPanel.isOpen && (
          <motion.div
            className="w-1/2 bg-background border-l border-border relative overflow-hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              duration: 0.6,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          >
            {/* Close Button */}
            <button
              onClick={closeRightPanel}
              className="absolute top-6 right-6 z-10 p-2 rounded-md hover:bg-secondary/20 transition-colors duration-200"
              aria-label="Close panel"
            >
              <X
                size={20}
                className="text-muted-foreground hover:text-foreground"
              />
            </button>

            {/* Panel Content */}
            <div className="h-full overflow-y-auto">{rightPanel.content}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SplitScreenLayout;
