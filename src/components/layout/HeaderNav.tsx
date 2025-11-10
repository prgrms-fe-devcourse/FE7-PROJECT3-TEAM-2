import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { navData } from "@/routes/routes.data";

export default function HeaderNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return path === pathname;
    else return pathname.startsWith(path);
  };

  return (
    <div>
      <div className="hidden sm:block">{pathname}</div>
      <div className="block sm:hidden">
        <button onClick={() => setOpen(!open)} className="p-2">
          {open ? <X /> : <Menu />}
        </button>

        {open && (
          <ul className="fixed top-(--header-height) left-0 flex w-full flex-col gap-2 bg-white p-(--global-padding)">
            {navData.map(nav => {
              return (
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
                    {nav.children &&
                      nav.children.map(subNav => {
                        const path = `${nav.pathname}/${subNav.pathname}`;
                        return (
                          <li
                            key={subNav.pathname}
                            className={twMerge(
                              "text-text-sub px-3 py-2 font-medium",
                              isActive(path) && "text-blue-500"
                            )}
                          >
                            <Link href={path} onClick={() => setOpen(false)}>
                              {subNav.label}
                            </Link>
                          </li>
                        );
                      })}
                  </ul>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </div>
  );
}
