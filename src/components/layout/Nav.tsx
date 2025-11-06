"use client";

import { Settings2, ShieldAlert } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
    <nav className="bg-bg-sub hidden flex-row justify-between overflow-y-scroll border border-gray-200 sm:block sm:h-[calc(100vh-var(--header-height))] sm:w-[223px] sm:flex-col sm:p-6">
      <ul className="flex items-center gap-3 sm:flex-col sm:items-baseline">
        {navData.map(nav => {
          return (
            <li className="flex flex-col sm:w-full" key={nav.pathname}>
              <NavButton href={nav.pathname} icon_img={nav.icon} variant="main" active={isActive(nav.pathname)}>
                {nav.label}
              </NavButton>
              <ul className="hidden pl-6 sm:block">
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
      <ul className="flex flex-row sm:flex-col">
        <li>
          <Button variant="secondary">
            <Settings2 size={16} />
            설정
          </Button>
        </li>
        <Link href="/login">
          <Button variant="tertiary">
            <ShieldAlert size={16} />
            로그인
          </Button>
        </Link>
      </ul>
    </nav>
  );
}
