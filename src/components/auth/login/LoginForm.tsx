"use client";

import { useActionState } from "react";
import { loginUser, LoginUserState } from "@/app/(auth)/login/actions";
import { Button } from "@/components/common/Button";

const initialState = {
  message: "",
};

export default function LoginForm() {
  const [state, formAction, pending] = useActionState<LoginUserState, FormData>(loginUser, initialState);
  return (
    <form className="flex flex-col gap-4" action={formAction}>
      <div className="flex flex-col gap-1">
        <label htmlFor="login_id" className="text-base font-medium text-gray-400">
          이메일 주소
        </label>
        <input type="email" className="h-14 rounded-lg border border-gray-200" name="email" />
        <p>{state.errors?.email}</p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="login_paassword" className="text-base font-medium text-gray-400">
          비밀번호
        </label>
        <input type="password" className="h-14 rounded-lg border border-gray-200" name="password" />
        <p>{state.errors?.password}</p>
      </div>
      <div>
        <p>{state.message}</p>
        <Button variant="primary" size="lg" className="font-bold" disabled={pending}>
          로그인
        </Button>
      </div>
    </form>
  );
}
