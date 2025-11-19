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
        <input
          type="email"
          className="dark:bg-bg-sub h-14 rounded-lg border border-gray-200 px-3 outline-none dark:border-none"
          name="email"
          id="login_id"
          placeholder="example@mail.com"
          autoComplete="email"
        />
        <p className="text-xs text-red-500">{state.errors?.email}</p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="login_password" className="text-base font-medium text-gray-400">
          비밀번호
        </label>
        <input
          type="password"
          className="dark:bg-bg-sub h-14 rounded-lg border border-gray-200 px-3 outline-none dark:border-none"
          name="password"
          id="login_password"
        />
        <p className="text-xs text-red-500">{state.errors?.password}</p>
      </div>
      <div>
        <p className="text-xs text-red-500">{state.message}</p>
        <Button variant="primary" size="lg" className="w-full font-bold" disabled={pending}>
          로그인
        </Button>
      </div>
    </form>
  );
}
