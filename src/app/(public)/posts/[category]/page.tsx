import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function PostsCategoryPage() {
  return (
    <ResponsiveContainer className="bg-bg-main text-text-light flex w-full items-center justify-center max-sm:hidden">
      <span>선택된 게시글이 없습니다.</span>
    </ResponsiveContainer>
  );
}
