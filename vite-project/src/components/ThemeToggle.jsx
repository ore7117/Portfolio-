import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils"; 

// This determines the initial theme based on user's system preference
const isSystemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

export const ThemeToggle = () => {
  // The state now correctly reflects the theme
  const [isDarkMode, setIsDarkMode] = useState(isSystemDark);

  // This effect runs when the component loads and whenever isDarkMode changes
  useEffect(() => {
    /* if the button is set to darkmode, add dark coloring */
    const htmlElement = document.documentElement;
    if (isDarkMode) {
      htmlElement.classList.add("dark");
      
    } else {
      htmlElement.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <button onClick={toggleTheme}
    className={cn("fixed max-sm:hidden top5 right-5 z-50 p-2 rounded full transition-colors duration-300",
                  "focus:outlin-hidden"
    )}
    >
      {isDarkMode 
        ? <Sun style={{ color: "orange", width: "24px", height: "24px" }} />
        : <Moon style={{ color: "blue", width: "24px", height: "24px" }} />
      }
    </button>
  );
};