import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";
import github from "@/assets/icons/github.svg";
import google from "@/assets/icons/google.svg";
import kakao from "@/assets/icons/kakao.svg";
import naver from "@/assets/icons/naver.svg";
import BaseImage from "@/components/common/image/BaseImage";

type SocialLoginType = "naver" | "kakao" | "github" | "google";

const socialLoginMap = {
  naver: {
    label: "네이버는 지금 준비중!",
    img: naver,
  },
  kakao: {
    label: "카카오로 시작하기",
    img: kakao,
  },
  github: {
    label: "깃허브로 시작하기",
    img: github,
  },
  google: {
    label: "구글로 시작하기",
    img: google,
  },
};

const socialLoginButtonVariants = cva(
  "flex items-center justify-center rounded-full disabled:bg-[#f3f3f3] disabled-text-[#bbbbbb] font-bold cursor-pointer border disabled:cursor-default",
  {
    variants: {
      size: {
        sm: "w-10 h-10 gap-2 sm:px-4 sm:w-full",
        md: "w-12.5 h-12.5 gap-4 sm:px-8 sm:w-full",
        lg: "w-14 h-14 gap-6 sm:px-12 sm:w-full",
      },
      social: {
        naver: "bg-[#03C75A] text-white",
        github: "text-[#020408] bg-white border-gray-200",
        kakao: "bg-[#FEE500] text-[#191919] border-[#FEE500]",
        google: "bg-white text-[#191919] border-gray-200",
      },
    },
  }
);

interface SocialLoginButtonProps
  extends VariantProps<typeof socialLoginButtonVariants>,
    React.ComponentPropsWithoutRef<"button"> {
  social: SocialLoginType;
}

export default function SocialLoginButton({ size = "md", social, ...props }: SocialLoginButtonProps) {
  return (
    <button className={twMerge(socialLoginButtonVariants({ size, social }))} {...props}>
      <div>
        <BaseImage src={socialLoginMap[social].img} alt="social_login_icon" className="h-7 w-7" />
      </div>
      <span className="hidden sm:inline">{socialLoginMap[social].label}</span>
    </button>
  );
}
