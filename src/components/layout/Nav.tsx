"use client";

import { NavButton } from "@/components/common/NavButton";
import { navData } from "@/routes/routes.data";

export default function Nav() {
  return (
    <nav className="bg-bg-sub flex flex-row justify-between border border-gray-200 sm:w-[223px] sm:flex-col">
      <ul className="flex items-center gap-3 sm:flex-col sm:items-baseline">
        {navData.map(nav => {
          return (
            <li className="flex flex-col sm:w-full" key={nav.pathname}>
              <NavButton href={nav.pathname} icon_img={nav.icon} variant="main">
                {nav.label}
              </NavButton>
              <ul className="hidden sm:block">
                {nav.children &&
                  nav.children.map(subNav => {
                    return (
                      <NavButton
                        variant="sub"
                        key={subNav.pathname}
                        href={{ pathname: nav.pathname, query: { type: subNav.pathname } }}
                      >
                        {subNav.label}
                      </NavButton>
                    );
                  })}
              </ul>
            </li>
          );
        })}
      </ul>
      <ul>
        <li>설정</li>
        <li>로그인</li>
      </ul>
    </nav>
  );
}
