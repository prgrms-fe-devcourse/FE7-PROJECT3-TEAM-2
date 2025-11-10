"use client";

import Link from "next/link";
import { useActionState } from "react";
import { createUser, CreateUserState } from "@/app/(auth)/join/actions";
import { Button } from "@/components/common/Button";

const initialState = {
  message: "",
};

export default function JoinForm() {
  const [state, formAction, pending] = useActionState<CreateUserState, FormData>(createUser, initialState);
  return (
    <form className="flex flex-col gap-4" action={formAction}>
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-base font-medium text-gray-400">
          이름
        </label>
        <input type="text" className="h-14 rounded-lg border border-gray-200" name="name" />
        <p>{state.errors?.name}</p>
      </div>
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-base font-medium text-gray-400">
          이메일 주소
        </label>
        <input type="email" className="h-14 rounded-lg border border-gray-200" name="email" />
        <p>{state.errors?.email}</p>
      </div>
      <div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-base font-medium text-gray-400">
            비밀번호
          </label>
          <input type="password" className="h-14 rounded-lg border border-gray-200" name="password" />
          <p>{state.errors?.password}</p>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirmPassword" className="text-base font-medium text-gray-400">
            비밀번호 확인
          </label>
          <input type="password" className="h-14 rounded-lg border border-gray-200" name="confirmPassword" />
          <p>{state.errors?.confirmPassword}</p>
        </div>
      </div>
      <Button variant="primary" size="lg" className="font-bold" disabled={pending}>
        <Link href="/join/welcome">회원가입</Link>
      </Button>
    </form>
  );
}
