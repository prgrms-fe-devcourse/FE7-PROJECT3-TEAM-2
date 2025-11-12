import { CategoryType } from ".";

type Category =
  | "연애"
  | "기술/IT"
  | "제테크/소비"
  | "음식/요리"
  | "생활"
  | "게임"
  | "일상/고민"
  | "패션"
  | "운동"
  | "공부/자기계발"
  | "여행";

interface TopKeywordType {
  category_name: string;
  keyword: string;
  keyword_count: number;
}

interface MergeCategoryChartType extends CategoryType {
  topKeywords: TopKeywordType[];
}
