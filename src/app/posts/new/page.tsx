import ResponsiveContainer from "@/components/common/ResponsiveContainer";
import CategoryDropdown from "@/components/post/CategoryDropdown";
import { CategoryType } from "@/types";
import { createClient } from "@/utils/supabase/client";

export default async function NewPostPage() {
  const supabase = createClient();
  const { data } = await supabase.from("category").select("*");
  return (
    <ResponsiveContainer className="post-form bg-bg-main relative flex w-full flex-col overflow-hidden max-sm:border-none">
      <form className="flex h-full flex-col justify-between px-6 py-5 pt-9">
        <div className="post-form_rows flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-text-title text-2xl font-bold">게시물 작성</h1>
            <p className="text-text-light">어떤 글에 훈수를 받고 싶나요?</p>
          </div>
          <div className="post-form_row flex flex-col gap-2.5">
            <h2 className="text-text-title text-base">카테고리</h2>
            <CategoryDropdown categorys={data as CategoryType[]} />
          </div>
        </div>
        <div className="post-form_btns">
          <button className="bg-main cursor-pointer rounded-sm px-3 py-1.5 text-xs text-white">보내기</button>
          <button className="bg-main cursor-pointer rounded-sm px-3 py-1.5 text-xs text-white">보내기</button>
        </div>
      </form>
    </ResponsiveContainer>
  );
}
