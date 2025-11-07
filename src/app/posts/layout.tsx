import Link from "next/link";
import BaseImage from "@/components/common/image/BaseImage";

export default function PostsLayout({ children }: { children: React.ReactNode }) {
  // 테스트용 변수
  const categorys = new Array(11).fill(null);
  let key = 0;

  return (
    <div className="flex w-full flex-col p-6">
      <div className="category mb-6 flex gap-6">
        <Link href={"/posts/all"}>
          {" "}
          <div className="bg-bg-main border-main text-main flex h-15 w-15 items-center justify-center rounded-full border">
            전체
          </div>
        </Link>
        {categorys.map(() => (
          <Link key={key++} href={"/posts/"}>
            <BaseImage rounded="full" src="/" alt="category image" className="h-15 w-15" />
          </Link>
        ))}
      </div>
      <div>{children}</div>
    </div>
  );
}
