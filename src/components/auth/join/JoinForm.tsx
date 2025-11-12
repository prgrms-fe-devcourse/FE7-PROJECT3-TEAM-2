"use client";

import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { createUser, CreateUserState } from "@/app/(auth)/join/actions";
import { Button } from "@/components/common/Button";

const initialState = {
  message: "",
};

export default function JoinForm() {
  const [state, formAction, pending] = useActionState<CreateUserState, FormData>(createUser, initialState);
  const router = useRouter();

  useEffect(() => {
    if (state.message === "계정이 확인되었습니다") {
      router.replace("/join/welcome");
    }
  }, [state.message, router]);

  return (
    <form className="flex flex-col gap-4" action={formAction}>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-base font-medium text-gray-400">
          이름
        </label>
        <input
          type="text"
          className="h-14 rounded-lg border border-gray-200 px-3 outline-none"
          name="name"
          id="name"
          placeholder="홍길동"
          autoComplete="name"
        />
        <p className="text-xs text-red-500">{state.errors?.name}</p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-base font-medium text-gray-400">
          이메일 주소
        </label>
        <input
          type="email"
          className="h-14 rounded-lg border border-gray-200 px-3 outline-none"
          name="email"
          id="email"
          placeholder="example@email.com"
          autoComplete="email"
        />
        <p className="text-xs text-red-500">{state.errors?.email}</p>
      </div>
      <div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-base font-medium text-gray-400">
            비밀번호
          </label>
          <input
            type="password"
            className="h-14 rounded-lg border border-gray-200 px-3 outline-none"
            name="password"
            id="password"
          />
          <p className="text-xs text-red-500">{state.errors?.password}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword" className="text-base font-medium text-gray-400">
            비밀번호 확인
          </label>
          <input
            type="password"
            className="h-14 rounded-lg border border-gray-200 px-3 outline-none"
            name="confirmPassword"
            id="confirmPassword"
          />
          <p className="text-xs text-red-500">{state.errors?.confirmPassword}</p>
        </div>
      </div>
      <div>
        <p className="text-xs text-red-500">{state.message !== "계정이 확인되었습니다" && state.message}</p>
        <Button variant="primary" size="lg" className="w-full font-bold" disabled={pending}>
          회원가입
        </Button>
      </div>
    </form>
  );
}
