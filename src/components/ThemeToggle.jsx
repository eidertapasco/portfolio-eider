import { Moon, Sun } from "lucide-react"; //2k (gzipped: 1.1k)
import { useEffect, useState } from "react"; //4.2k (gzipped: 1.8k)
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(
        () => localStorage.getItem("theme") !== "light"
    );

    useEffect(() => {
        document.documentElement.classList.toggle("dark", isDarkMode);
        localStorage.setItem("theme", isDarkMode ? "dark" : "light");
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((currentMode) => !currentMode);
    };

    return (
        <button onClick={toggleTheme}
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            className={cn(
                "fixed top-5 right-20 md:top-4 md:right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-hidden"
            )}
        >
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />

            ) : (
                <Moon className="h-6 w-6 text-blue-900" />

            )}
        </button>
    );
}