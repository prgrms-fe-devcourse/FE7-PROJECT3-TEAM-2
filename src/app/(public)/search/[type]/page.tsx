import { Suspense } from "react";
import SearchForm from "@/components/search/SearchForm";

export default function Page() {
  return (
    <>
      <Suspense fallback={<div>로딩 중...</div>}>
        <SearchForm />
      </Suspense>
    </>
  );
}
