import { PostCardType } from "@/types";
import PostCardButton from "./PostCardButton";
import ResponsiveContainer from "../common/ResponsiveContainer";

export default function PostSideList({ postData }: { postData: PostCardType[] }) {
  return (
    <ResponsiveContainer className="w-full px-3 py-4.5">
      {postData.length !== 0 ? (
        postData.map(post => <PostCardButton key={post.id} postData={post} className="max-sm:w-full" />)
      ) : (
        <p className="text-text-light text-center align-middle text-sm">게시글이 없습니다.</p>
      )}
    </ResponsiveContainer>
  );
}
