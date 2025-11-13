"use client";

import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { navData } from "@/routes/routes.data";
import { getLabelPath } from "@/utils/path";

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const labelPathArray = getLabelPath(pathname, navData);

  const isActive = (path: string) => {
    if (path === "/") return path === pathname;
    else return pathname.startsWith(path);
  };

  return (
    <div>
      {/* Desktop breadcrumb */}
      <div className="hidden sm:block">
        <nav className="text-text-light flex text-sm">
          {labelPathArray?.map((item, idx) => (
            <span key={item.pathname} className="flex items-center">
              {idx > 0 && <span className="mx-5 text-gray-400">›</span>}

              <Link href={item.pathname}>
                <span
                  className={twMerge(
                    "hover:text-text-content cursor-pointer transition",
                    idx === labelPathArray.length - 1 && "text-text-content font-semibold"
                  )}
                >
                  {item.label}
                </span>
              </Link>
            </span>
          ))}
        </nav>
      </div>

      {/* Mobile menu */}
      <div className="block sm:hidden">
        <button onClick={() => setOpen(!open)} className="p-2">
          {open ? <X /> : <Menu />}
        </button>

        <AnimatePresence>
          {open && (
            <motion.ul
              key="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{
                type: "spring",
                stiffness: 240,
                damping: 20,
              }}
              className="fixed top-(--header-height) left-0 z-10 flex w-full flex-col gap-2 bg-white p-(--global-padding) shadow-md"
            >
              {navData.map(nav => (
                <li
                  key={nav.pathname}
                  className={twMerge(
                    "text-text-title px-3 py-2 font-medium",
                    isActive(nav.pathname) && "text-blue-500"
                  )}
                >
                  <Link href={nav.pathname} onClick={() => setOpen(false)}>
                    {nav.label}
                  </Link>

                  <ul>
                    {nav.children?.map(subNav => {
                      const path = `${nav.pathname}/${subNav.pathname}`;
                      return (
                        <li
                          key={subNav.pathname}
                          className={twMerge("text-text-sub px-3 py-2 font-medium", isActive(path) && "text-blue-500")}
                        >
                          <Link href={path} onClick={() => setOpen(false)}>
                            {subNav.label}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
