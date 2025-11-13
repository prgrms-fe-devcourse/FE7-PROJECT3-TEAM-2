"use client";

import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function ArchiveNavBar() {
  const location = useSelectedLayoutSegment();
  return (
    <>
      <div className="flex items-center gap-4">
        <Link href="mypost">
          <p className={location === "mypost" ? "border-main border-b py-1" : "text-text-light"}>내 게시물</p>
        </Link>
        <Link href="bookmark">
          <p className={location === "bookmark" ? "border-main border-b py-1" : "text-text-light"}>북마크</p>
        </Link>
      </div>
    </>
  );
}
