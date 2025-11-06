"use client";

import HeaderNav from "@/components/layout/HeaderNav";

export default function Header() {
  return (
    <header className="flex h-(--header-height) items-center justify-between border-b border-gray-300 bg-white p-(--global-padding)">
      <div>logo</div>
      <div>
        <div className="hidden sm:block"></div>
        <HeaderNav />
      </div>
    </header>
  );
}
