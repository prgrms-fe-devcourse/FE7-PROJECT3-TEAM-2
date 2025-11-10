"use client";

import HeaderNav from "@/components/layout/HeaderNav";

export default function Header() {
  return (
    <header className="flex h-(--header-height) items-center justify-between rounded-none border-b border-gray-300 bg-white p-(--global-padding) px-5 pr-3 sm:rounded-t-[30px] sm:px-10">
      <div>logo</div>
      <div>
        <div className="hidden sm:block"></div>
        <HeaderNav />
      </div>
    </header>
  );
}
