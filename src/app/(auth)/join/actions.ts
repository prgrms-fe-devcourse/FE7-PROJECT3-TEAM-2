"use server";

import { z } from "zod";
import { signUpWithEmail } from "@/services/auth/join";

const schema = z
  .object({
    email: z.email({ message: "이메일 형식이 올바르지 않습니다" }),
    name: z.string().min(2, "이름은 2자 이상이어야 합니다.").optional(),
    password: z.string({ error: "비밀번호를 입력해주세요." }).min(8, "비밀번호는 8자 이상이어야 합니다."),
    confirmPassword: z.string({ error: "비밀번호 확인이 일치하지 않습니다." }),
  })
  .refine(data => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    error: "비밀번호가 일치하지 않습니다.",
  });

export type CreateUserState = {
  message?: string;
  errors?: Partial<Record<keyof z.infer<typeof schema>, string[]>>;
};

export async function createUser(_prevState: CreateUserState, formData: FormData): Promise<CreateUserState> {
  const values = {
    email: formData.get("email")?.toString() ?? "",
    name: formData.get("name")?.toString() ?? undefined,
    password: formData.get("password")?.toString() ?? "",
    confirmPassword: formData.get("confirmPassword")?.toString() ?? "",
  };

  const parsed = schema.safeParse(values);
  if (!parsed.success) {
    return {
      message: "입력값을 확인해주세요.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }
  const { email, name, password } = parsed.data;
  await signUpWithEmail(email, password, name as string);

  return { message: "게정이 생성되었습니다" };
}
