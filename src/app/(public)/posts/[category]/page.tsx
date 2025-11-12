import ResponsiveContainer from "@/components/common/ResponsiveContainer";

export default function PostsCategoryPage() {
  return (
    <ResponsiveContainer className="bg-bg-main flex w-full items-center justify-center max-sm:hidden">
      <span className="text-text-light text-sm">선택된 게시글이 없습니다.</span>
    </ResponsiveContainer>
  );
}
