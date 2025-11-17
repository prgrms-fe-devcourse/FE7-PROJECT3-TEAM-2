"use client";

import { ChevronLeft, ImagePlus } from "lucide-react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useActionState, useEffect, useState } from "react";
import { CategoryType, FormState } from "@/types";
import CategoryDropdown from "./CategoryDropdown";
import { Button } from "../common/Button";
import ResponsiveContainer from "../common/ResponsiveContainer";

export default function PostForm({
  categorys,
  action,
}: {
  categorys: CategoryType[];
  action: (prevState: FormState, formData: FormData) => Promise<FormState>;
}) {
  const [state, formAction, isPending] = useActionState(action, {
    success: false,
    error: null,
  });

  const router = useRouter();

  const [preview, setPreview] = useState("");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    setPreview(url);
  };

  useEffect(() => {
    if (state.error) {
      alert(state.error);
    } else if (state.success && !state.error) {
      alert("게시글이 성공적으로 등록되었습니다.");
      redirect("/posts");
    }
  }, [state]);

  return (
    <ResponsiveContainer className="post-form bg-bg-main scrollbar-hide relative flex h-full w-full flex-col overflow-auto max-sm:border-none">
      <form action={formAction} className="flex flex-col justify-between gap-6 px-6 py-5">
        <div className="post-form_rows flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-text-title flex items-center text-2xl font-bold">
              <button
                type="button"
                onClick={() => {
                  router.back();
                }}
                className="hover:text-main mr-5 cursor-pointer min-[1100px]:hidden"
              >
                <ChevronLeft />
              </button>
              게시글 작성
            </h1>
            <p className="text-text-light">어떤 글에 훈수를 받고 싶나요?</p>
          </div>
          <div className="post-form_row flex flex-col gap-1.5">
            <h2 className="text-text-title text-base">카테고리</h2>
            <CategoryDropdown categorys={categorys} />
          </div>
          <div className="post-form_row flex flex-col gap-1.5">
            <h2 className="text-text-title text-base">제목</h2>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              name="title"
              className="text-text-sub focus:border-text-sub flex w-full cursor-pointer items-center justify-between rounded-xl border border-gray-200 px-3 py-4 outline-0 placeholder:text-gray-200 hover:cursor-auto"
            />
          </div>
          <div className="post-form_row flex flex-col gap-1.5">
            <h2 className="text-text-title text-base">내용</h2>
            <textarea
              placeholder="내용을 입력하세요"
              wrap="hard"
              name="content"
              className="text-text-sub focus:border-text-sub flex h-60 w-full cursor-pointer resize-none items-center justify-between rounded-xl border border-gray-200 px-3 py-4 outline-0 placeholder:text-gray-200 hover:cursor-auto"
            />
          </div>
          <div className="post-form_row flex flex-col gap-1.5">
            <h2 className="text-text-title text-base">이미지 첨부</h2>
            <label
              htmlFor="imageUpload"
              className="relative flex h-36 w-36 cursor-pointer items-center justify-center overflow-hidden rounded-xl bg-gray-200 transition-all hover:bg-gray-300"
            >
              {preview ? (
                <Image src={preview} alt="preview" fill className="object-cover" />
              ) : (
                <ImagePlus size={40} className="text-gray-400" />
              )}
            </label>
            <input
              type="file"
              accept="image/*"
              name="upload_image"
              id="imageUpload"
              className="hidden"
              onChange={handleFileChange}
            />
          </div>
        </div>
        <div className="post-form_btns flex justify-end gap-3">
          <Button
            variant="quaternary"
            size="sm"
            className="hover:bg-main-50 max-sm:w-full"
            type="reset"
            onClick={() => {
              setPreview("");
            }}
          >
            초기화
          </Button>
          <Button variant="primary" size="sm" className="max-sm:w-full" type="submit" disabled={isPending}>
            {isPending ? "등록중..." : "등록"}
          </Button>
        </div>
      </form>
    </ResponsiveContainer>
  );
}
