import { cva } from "class-variance-authority";
import SearchBar from "./SearchBar";
import SearchIntro from "./SearchIntro";
import SearchRecommend from "./SearchRecommend";
import SearchResult from "./SearchResult";

const searchFormVariants = cva("flex flex-col gap-4 w-full max-w-[697px]", {
  variants: {
    searched: {
      true: "w-screen max-w-none mx-6 mt-5",
      false:
        "mx-auto items-center justify-center min-h-[calc(100vh-64px)] sm:px-6 md:px-0 sm:-translate-y-10 md:translate-y-0",
    },
  },
  defaultVariants: {
    searched: false,
  },
});

export default function SearchForm({ searchType, queryParam }: { searchType: string; queryParam: string | null }) {
  const isSearched = !!queryParam;

  return (
    <div className={searchFormVariants({ searched: isSearched })}>
      {!isSearched && <SearchIntro />}

      <SearchBar searchType={searchType} />

      {isSearched && <SearchResult searchType={searchType} queryParam={queryParam} />}

      {!isSearched && searchType === "post" && <SearchRecommend />}
    </div>
  );
}
