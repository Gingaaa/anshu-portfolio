"use client";
import { useTheme } from "next-themes";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMoonOutline } from "react-icons/io5";

const ThemeSwitcher = () => {
    const { theme, setTheme } = useTheme();
    const toggleTheme = () => {
        const newTheme = theme === 'dark' || theme === 'system' ? 'light' : 'dark';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    return (
        <>

            <button
                className="relative h-9 w-9 transition ease-linear duration-200 rounded-lg bg-zinc-100 p-1.5 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700"
                onClick={toggleTheme}
                aria-label="Toggle theme"
            >
                <div className="relative flex items-center justify-center h-full w-full ">
                    <IoSunnyOutline className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition ease-linear duration-900 dark:-rotate-90 dark:scale-0" />
                </div>

                <div className="absolute flex items-center justify-center inset-0 p-1.5 ">
                    <IoMoonOutline className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition ease-linear duration-900 dark:rotate-0 dark:scale-100" />
                </div>
            </button>
        </>
    );
};

export default ThemeSwitcher;