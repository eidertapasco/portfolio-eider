import { Moon, Sun } from "lucide-react"; //2k (gzipped: 1.1k)
import { useEffect, useState } from "react"; //4.2k (gzipped: 1.8k)

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            setIsDarkMode(true);
            document.documentElement.classList.add("dark");
        } else {
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        }

    }, []);

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light")
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button onClick={toggleTheme}>
            {" "}
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300" />

            ) : (
                <Moon className="h6 w6 text-blue-900" />

            )}
        </button>
    );
}