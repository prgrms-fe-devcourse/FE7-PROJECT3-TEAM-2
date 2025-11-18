import { BookMarked } from "lucide-react";

export default function PostCardBookMark() {
  return (
    <>
      <button className="text-text-light border-border-main flex items-center justify-center rounded-sm border px-[7px] py-[5px]">
        <span className="mr-1 text-[8px]">북마크</span>
        <BookMarked size={8} />
      </button>
    </>
  );
}
