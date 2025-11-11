"use client";

import { ChevronLeft, ImagePlus } from "lucide-react";
import Image from "next/image";
import { redirect, useRouter } from "next/navigation";
import { useState } from "react";
import { CategoryType } from "@/types";
import { createClient } from "@/utils/supabase/client";
import { User } from "@supabase/supabase-js";
import CategoryDropdown from "./CategoryDropdown";
import { Button } from "../common/Button";
import ResponsiveContainer from "../common/ResponsiveContainer";

export default function PostForm({ categorys, userId }: { categorys: CategoryType[]; userId: string }) {
  const router = useRouter();
  const supabase = createClient();

  const [categoryId, setCategoryId] = useState("");
  const [categoryValue, setCategoryValue] = useState("");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [preview, setPreview] = useState("");
  const [imgFile, setImgFile] = useState<File | null>(null);

  const resetData = () => {
    setCategoryId("");
    setCategoryValue("");
    setTitle("");
    setContent("");
    setPreview("");
    setImgFile(null);
  };

  const handleCategory = (id: string) => {
    setCategoryId(id);
  };

  const handleCategoryValue = (value: string) => {
    setCategoryValue(value);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    setPreview(url);
    setImgFile(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!categoryId || !title.trim() || !content.trim()) {
      alert("모든 내용을 입력해주세요.");
      return;
    }

    let imgUrl: string | null = null;

    if (imgFile) {
      const fileExt = imgFile.name.split(".").pop();
      const fileName = `${userId}${Date.now()}.${fileExt}`;

      const { error } = await supabase.storage.from("user_upload_image").upload(fileName, imgFile);

      if (error) {
        alert("이미지 업로드 실패: " + error.message);
        return;
      } else {
        const { data } = supabase.storage.from("user_upload_image").getPublicUrl(fileName);

        imgUrl = data.publicUrl;
      }
    }

    const { error } = await supabase
      .from("posts")
      .insert([{ user_id: userId, category_id: categoryId, title: title, content: content, post_image: imgUrl }]);

    if (error) {
      alert("게시글  업로드 실패: " + error.message);
    } else {
      alert("게시글 업로드 성공");
      redirect("/posts");
    }
  };

  return (
    <ResponsiveContainer className="post-form bg-bg-main relative flex h-full w-full flex-col overflow-y-scroll max-sm:border-none">
      <form onSubmit={handleSubmit} className="flex flex-col justify-between gap-6 px-6 py-5">
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
            <CategoryDropdown
              categorys={categorys}
              handleCategory={handleCategory}
              categoryValue={categoryValue}
              handleCategoryValue={handleCategoryValue}
            />
          </div>
          <div className="post-form_row flex flex-col gap-1.5">
            <h2 className="text-text-title text-base">제목</h2>
            <input
              type="text"
              placeholder="제목을 입력하세요"
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
              className="text-text-sub focus:border-text-sub flex w-full cursor-pointer items-center justify-between rounded-xl border border-gray-200 px-3 py-4 outline-0 placeholder:text-gray-200 hover:cursor-auto"
            />
          </div>
          <div className="post-form_row flex flex-col gap-1.5">
            <h2 className="text-text-title text-base">내용</h2>
            <textarea
              placeholder="내용을 입력하세요"
              wrap="hard"
              value={content}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                setContent(e.target.value);
              }}
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
            <input type="file" accept="image/*" id="imageUpload" className="hidden" onChange={handleFileChange}></input>
          </div>
        </div>
        <div className="post-form_btns flex justify-end gap-3">
          <Button
            variant="quaternary"
            size="sm"
            className="hover:bg-main-50 max-sm:w-full"
            type="button"
            onClick={resetData}
          >
            초기화
          </Button>
          <Button variant="primary" size="sm" className="max-sm:w-full" type="submit">
            보내기
          </Button>
        </div>
      </form>
    </ResponsiveContainer>
  );
}
