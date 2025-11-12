"use client";

import { Settings2 } from "lucide-react";
import { usePathname } from "next/navigation";
import LoginButton from "@/components/auth/login/LoginButton";
import { Button } from "@/components/common/Button";
import { NavButton } from "@/components/common/NavButton";
import { navData } from "@/routes/routes.data";

export default function Nav() {
  const pathname = usePathname();

  const isActive = (path: string) => {
    if (path === "/") return path === pathname;
    else return pathname.startsWith(path);
  };

  return (
    <nav className="bg-bg-sub hidden overflow-y-auto rounded-bl-[30px] border border-gray-200 sm:flex sm:h-[calc(100vh-var(--header-height))] sm:w-[223px] sm:flex-col sm:justify-between sm:p-6">
      <ul className="flex items-center gap-3 sm:flex-col sm:items-baseline">
        {navData.map(nav => {
          return (
            <li className="flex flex-col gap-2 sm:w-full" key={nav.pathname}>
              <NavButton href={nav.pathname} icon_img={nav.icon} variant="main" active={isActive(nav.pathname)}>
                {nav.label}
              </NavButton>
              <ul className="hidden flex-col gap-1 pl-6 sm:flex">
                {nav.children &&
                  nav.children.map(subNav => {
                    const path = `${nav.pathname}/${subNav.pathname}`;
                    return (
                      <NavButton variant="sub" key={subNav.pathname} active={isActive(path)} href={{ pathname: path }}>
                        {subNav.label}
                      </NavButton>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
      <ul className="flex flex-row gap-2 sm:flex-col">
        <li>
          <Button variant="secondary" className="w-full" size="md">
            <Settings2 size={16} />
            설정
          </Button>
        </li>
        <LoginButton />
      </ul>
    </nav>
  );
}
