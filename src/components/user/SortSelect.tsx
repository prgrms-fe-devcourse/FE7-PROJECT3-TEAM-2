"use client";

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";

export default function SortSelect({ sort }: { sort: string }) {
  const router = useRouter();
  const handleSortChange = (sort: string) => {
    router.push(`?sort=${sort}`);
  };
  const supabase = createClient();
  const [category, setCategory] = useState<{ id: string; name: string; type: string | null }[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const { data, error } = await supabase.from("category").select("id, name, type");
      if (error) console.error(error);
      if (data) {
        setCategory(data);
      }
    };
    fetchPosts();
  }, [supabase]);

  return (
    <>
      <select
        className="outline-none"
        value={sort}
        onChange={e => {
          handleSortChange(e.target.value);
        }}
      >
        <option value="all">카테고리</option>
        {category?.map(c => (
          <option key={c.id} value={c.type ?? ""}>
            {c.name}
          </option>
        ))}
      </select>
    </>
  );
}
