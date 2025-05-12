
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/ThemeProvider";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      aria-label="Toggle theme"
      className="rounded-full h-8 w-8 border border-border"
    >
      <Sun 
        className={`h-3.5 w-3.5 rotate-0 scale-100 transition-all ${
          theme === "dark" ? "block" : "hidden"
        }`}
      />
      <Moon 
        className={`h-3.5 w-3.5 rotate-0 scale-100 transition-all ${
          theme === "dark" ? "hidden" : "block"
        }`} 
      /> 
    </Button>
  );
}
