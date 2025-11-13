"use client";

import { Moon, Sun } from "lucide-react";
import { motion, Variants } from "motion/react";
import { useState } from "react";

export default function ThemeSwitch() {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window === "undefined") return "light";
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
    return isDark ? "dark" : "light";
  });

  const setThemeValue = (nextTheme: "light" | "dark") => {
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    document.cookie = `theme=${nextTheme}; path=/; max-age=31536000`;
    setTheme(nextTheme);
  };

  const toggleTheme = () => {
    setThemeValue(theme === "dark" ? "light" : "dark");
  };

  const thumbVariants: Variants = {
    tap: {
      width: "80px",
      translateX: theme === "light" ? "4px" : "80px",
      transition: { duration: 0.15 },
    },
    checked: {
      translateX: "82px",
      backgroundColor: "black",
      transition: { ease: "easeInOut" },
    },
    unChecked: {
      translateX: "4px",
      backgroundColor: "white",
      transition: { ease: "easeInOut" },
    },
  };
  if (!theme) return null;
  return (
    <motion.div className="flex h-11.5 cursor-pointer items-center rounded-lg bg-gray-200 p-1" onClick={toggleTheme}>
      <motion.div
        initial={{ translateX: "4px" }}
        animate={theme === "light" ? "unChecked" : "checked"}
        whileTap="tap"
        className="flex h-9 w-20 items-center justify-center rounded-lg bg-white text-[10px] font-medium text-gray-600 shadow-sm"
        variants={thumbVariants}
      >
        {theme === "light" ? <Sun /> : <Moon className="text-white" />}
      </motion.div>
    </motion.div>
  );
}
