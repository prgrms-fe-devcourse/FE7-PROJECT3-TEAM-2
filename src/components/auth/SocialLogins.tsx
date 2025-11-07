import SocialLoginButton from "@/components/auth/SocialLoginButton";

export default function SocialLogins() {
  return (
    <div className="flex flex-row justify-center gap-3 sm:flex-col">
      <SocialLoginButton social="naver" disabled />
      <SocialLoginButton social="kakao" />
      <SocialLoginButton social="github" />
      <SocialLoginButton social="google" />
    </div>
  );
}
