"use client";

import { z } from "zod";
import { signInWithPassword } from "@/services/auth/login";

const schema = z.object({
  email: z.email({ message: "이메일 형식이 올바르지 않습니다" }),
  password: z.string({ error: "비밀번호를 입력해주세요." }).min(8, "비밀번호는 8자 이상이어야 합니다."),
});

export type LoginUserState = {
  message?: string;
  errors?: Partial<Record<keyof z.infer<typeof schema>, string[]>>;
};

export async function loginUser(_prevState: LoginUserState, formData: FormData): Promise<LoginUserState> {
  const values = {
    email: formData.get("email")?.toString() ?? "",
    password: formData.get("password")?.toString() ?? "",
  };

  const parsed = schema.safeParse(values);
  if (!parsed.success) {
    return {
      message: "입력값을 확인해주세요.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }
  const { email, password } = parsed.data;
  const data = await signInWithPassword(email, password);
  if (data.ok) return { message: data.message };
  return { message: data.message };
}
