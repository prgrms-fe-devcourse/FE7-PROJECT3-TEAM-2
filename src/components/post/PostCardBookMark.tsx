import { Bookmark } from "lucide-react";

export default function PostCardBookMark() {
  return (
    <>
      <button className="cursor-pointer">
        <Bookmark size={18} className="text-main hover:fill-main/30" />
      </button>
    </>
  );
}
