import LoginForm from "@/components/auth/login/LoginForm";
import LoginHeader from "@/components/auth/login/LoginHeader";
import LoginOptions from "@/components/auth/login/LoginOptions";
import SocialLogins from "@/components/auth/login/SocialLogins";
import { Divider } from "@/components/common/Divider";

export default function page() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex flex-col gap-10 md:w-[494px]">
        <LoginHeader />
        <SocialLogins />
        <Divider />
        <LoginForm />
        <LoginOptions />
      </div>
    </div>
  );
}
