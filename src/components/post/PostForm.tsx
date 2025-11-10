"use client";

import { ChevronLeft, ImagePlus } from "lucide-react";
import { useRouter } from "next/navigation";
import { CategoryType } from "@/types";
import CategoryDropdown from "./CategoryDropdown";
import { Button } from "../common/Button";
import ResponsiveContainer from "../common/ResponsiveContainer";

export default function PostForm({ categorys }: { categorys: CategoryType[] }) {
  const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };
  return (
    <ResponsiveContainer className="post-form bg-bg-main relative flex h-full w-full flex-col overflow-hidden max-sm:border-none">
      <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-6 px-6 py-5 pt-9">
        <div className="post-form_rows flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-text-title flex items-center text-2xl font-bold">
              {" "}
              <button
                onClick={() => {
                  router.back();
                }}
                className="hover:text-main mr-5 cursor-pointer min-[1100px]:hidden"
              >
                <ChevronLeft />
              </button>
              게시물 작성
            </h1>
            <p className="text-text-light">어떤 글에 훈수를 받고 싶나요?</p>
          </div>
          <div className="post-form_row flex flex-col gap-2.5">
            <h2 className="text-text-title text-base">카테고리</h2>
            <CategoryDropdown categorys={categorys} />
          </div>
          <div className="post-form_row flex flex-col gap-2.5">
            <h2 className="text-text-title text-base">제목</h2>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              className="text-text-sub focus:border-text-sub flex w-full cursor-pointer items-center justify-between rounded-xl border border-gray-200 px-3 py-4 outline-0 placeholder:text-gray-200 hover:cursor-auto"
            />
          </div>
          <div className="post-form_row flex flex-col gap-2.5">
            <h2 className="text-text-title text-base">내용</h2>
            <textarea
              placeholder="내용을 입력하세요"
              wrap="hard"
              className="text-text-sub focus:border-text-sub flex h-60 w-full cursor-pointer resize-none items-center justify-between rounded-xl border border-gray-200 px-3 py-4 outline-0 placeholder:text-gray-200 hover:cursor-auto"
            />
          </div>
          <div className="post-form_row flex flex-col gap-2.5">
            <h2 className="text-text-title text-base">이미지 첨부</h2>
            <button className="flex h-36 w-36 cursor-pointer items-center justify-center rounded-xl bg-gray-200 transition-all hover:bg-gray-300">
              <ImagePlus size={40} className="text-gray-400" />
            </button>
          </div>
        </div>
        <div className="post-form_btns flex justify-end gap-3">
          <Button variant="quaternary" size="sm" className="hover:bg-main-50 max-sm:w-full">
            초기화
          </Button>
          <Button variant="primary" size="sm" className="max-sm:w-full">
            보내기
          </Button>
        </div>
      </form>
    </ResponsiveContainer>
  );
}
