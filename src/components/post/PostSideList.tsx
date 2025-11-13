import { twMerge } from "tailwind-merge";
import { PostCardType } from "@/types";
import PostCardButton from "./PostCardButton";
import ResponsiveContainer from "../common/ResponsiveContainer";

export default function PostSideList({ postData }: { postData: PostCardType[] }) {
  return (
    <ResponsiveContainer
      className={twMerge("w-full px-3 py-4.5", postData.length === 0 && "flex h-full items-center justify-center")}
    >
      {postData.length !== 0 ? (
        postData.map(post => <PostCardButton key={post.id} postData={post} className="max-sm:w-full" />)
      ) : (
        <span className="text-text-light text-sm">작성된 게시글이 없습니다.</span>
      )}
    </ResponsiveContainer>
  );
}
