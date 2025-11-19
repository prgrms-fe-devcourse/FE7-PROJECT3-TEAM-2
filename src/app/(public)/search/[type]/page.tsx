import { use } from "react";
import SearchForm from "@/components/search/SearchForm";

export default function Page({
  params,
  searchParams,
}: {
  params: Promise<{ type: string }>;
  searchParams: Promise<{ query?: string }>;
}) {
  const { type } = use(params);
  const { query } = use(searchParams);

  return <SearchForm searchType={type} queryParam={query ?? null} />;
}
