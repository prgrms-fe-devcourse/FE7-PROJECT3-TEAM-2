"use client";

import { UserRoundPen } from "lucide-react";
import { useRouter } from "next/navigation";
import { useActionState, useEffect } from "react";
import { FormState, ProfileType } from "@/types";
import { Button } from "../common/Button";
import CircleProfileImage from "../common/image/CircleProfileImage";

type UserInfoModalFormProps = {
  profile: ProfileType | null;
  setModal: () => void;
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
};
export default function UserInfoModalForm({ profile, setModal, action }: UserInfoModalFormProps) {
  const [state, formAction, isPending] = useActionState(action, { success: false, error: null });
  const router = useRouter();
  useEffect(() => {
    document.body.style.overflow = "hidden";
    if (state.error) {
      alert(state.error);
    } else if (state.success && !state.error) {
      alert("프로필이 성공적으로 업데이트 되었습니다.");
      setModal();
      router.push("/user/profile");
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [setModal, router, state.error, state.success]);

  //모달 내부는 클릭해도 사라지지 않게
  const preventOffModal = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className="fixed inset-0 flex h-full w-full justify-center bg-gray-500/50 py-20" onMouseDown={setModal}>
        <form action={formAction} className="bg-bg-main h-fit w-[70%] rounded-3xl p-12" onMouseDown={preventOffModal}>
          <div className="mb-3 flex items-center gap-3">
            <CircleProfileImage src={profile?.avatar_image ?? ""} size="lg" />
            <div className="flex flex-col gap-2">
              <label className="text-text-sub">
                닉네임<span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={profile?.name}
                placeholder="닉네임을 입력하세요."
                className="border-bg-sub w-45.5 rounded-lg border px-2 py-1.5 outline-none"
              />
            </div>
          </div>
          <div className="flex flex-col gap-6 text-xs">
            <p className="text-text-light">개인정보</p>
            <div className="flex flex-col flex-wrap gap-16 max-sm:gap-12">
              <div className="flex flex-col gap-2">
                <label className="text-text-sub">
                  이메일<span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  name="email"
                  defaultValue={profile?.email}
                  placeholder="이메일을 입력하세요."
                  readOnly
                  className="border-bg-sub bg-bg-sub max-w-[60%] rounded-lg border px-2 py-1.5 outline-none max-sm:max-w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-text-sub">전화번호</label>
                <input
                  type="text"
                  name="phoneNumber"
                  defaultValue={profile?.phone_number ? String(profile?.phone_number) : ""}
                  placeholder="전화번호를 입력하세요."
                  className="border-bg-sub max-w-[60%] rounded-lg border px-2 py-1.5 outline-none max-sm:max-w-full"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-text-sub">한줄 소개</label>
                <input
                  type="text"
                  name="bio"
                  defaultValue={profile?.bio ?? ""}
                  placeholder="한줄 소개를 입력하세요."
                  className="border-bg-sub max-w-[60%] rounded-lg border px-2 py-1.5 outline-none max-sm:max-w-full"
                />
              </div>
            </div>
            <div className="flex justify-end">
              <Button size={"xs"} variant={"secondary"} type="submit" disabled={isPending}>
                <UserRoundPen size={12} className="mr-1" />
                {isPending ? "저장중" : "저장하기"}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
