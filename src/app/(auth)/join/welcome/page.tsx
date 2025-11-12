import Link from "next/link";
import WelcomeHeader from "@/components/auth/join/WelcomeHeader";
import { Button } from "@/components/common/Button";
import { Divider } from "@/components/common/Divider";

export default function page() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-10 md:w-[494px]">
        <WelcomeHeader />
        <Divider />

        <div className="flex flex-col gap-2">
          <Link href="/login">
            <Button className="w-full">로그인하러 가기</Button>
          </Link>
          <Link href="/">
            <Button className="w-full" variant="secondary">
              홈으로
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
