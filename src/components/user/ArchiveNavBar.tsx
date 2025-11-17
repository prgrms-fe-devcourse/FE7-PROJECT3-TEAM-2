"use client";

import Link from "next/link";
import { useState } from "react";

export default function ArchiveNavBar() {
  const [locate, setLocate] = useState("mypost");
  return (
    <>
      <div className="flex items-center gap-4">
        <Link href="mypost?sort=all">
          <p
            className={locate === "mypost" ? "border-main border-b py-1" : "text-text-light"}
            onClick={() => {
              setLocate("mypost");
            }}
          >
            내 게시물
          </p>
        </Link>
        <Link href="bookmark?sort=all">
          <p
            className={locate === "bookmark" ? "border-main border-b py-1" : "text-text-light"}
            onClick={() => {
              setLocate("bookmark");
            }}
          >
            북마크
          </p>
        </Link>
      </div>
    </>
  );
}
