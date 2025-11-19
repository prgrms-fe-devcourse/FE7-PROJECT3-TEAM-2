import JoinForm from "@/components/auth/join/JoinForm";
import JoinHeader from "@/components/auth/join/JoinHeader";
import { Divider } from "@/components/common/Divider";

export default function page() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-10 md:w-[494px]">
        <JoinHeader />
        <Divider />
        <JoinForm />
      </div>
    </div>
  );
}
