import { Button } from "@/components/common/Button";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="login_id" className="text-base font-medium text-gray-400">
          이메일 주소
        </label>
        <input type="email" className="h-14 rounded-lg border border-gray-200" />
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="login_paassword" className="text-base font-medium text-gray-400">
          비밀번호
        </label>
        <input type="email" className="h-14 rounded-lg border border-gray-200" />
      </div>
      <Button variant="primary" size="lg" className="font-bold" disabled>
        로그인
      </Button>
    </form>
  );
}
