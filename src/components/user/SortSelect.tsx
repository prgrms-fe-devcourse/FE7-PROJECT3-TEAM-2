"use client";

import { useRouter } from "next/navigation";

export default function SortSelect({ sort }: { sort: string }) {
  const router = useRouter();
  const handleSortChange = (sort: string) => {
    router.push(`?sort=${sort}`);
  };
  return (
    <>
      <select
        className="outline-none"
        value={sort}
        onChange={e => {
          handleSortChange(e.target.value);
        }}
      >
        <option value="category">카테고리</option>
        <option value="createdAt">작성일</option>
      </select>
    </>
  );
}
