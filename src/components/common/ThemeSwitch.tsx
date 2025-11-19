"use client";

import { Moon, Sun } from "lucide-react";
import { motion, Variants } from "motion/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
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

  return (
    <motion.div
      className="flex h-8 cursor-pointer items-center rounded-lg bg-gray-200 p-1 dark:bg-neutral-700"
      onClick={toggleTheme}
    >
      <motion.div
        initial={{ translateX: "4px" }}
        animate={theme === "light" ? "unChecked" : "checked"}
        whileTap="tap"
        className="flex h-6 w-20 items-center justify-center rounded-lg bg-white text-[10px] font-medium text-gray-600 shadow-sm"
        variants={thumbVariants}
      >
        {theme === "light" ? <Sun size={12} /> : <Moon className="text-white" size={12} />}
      </motion.div>
    </motion.div>
  );
}
