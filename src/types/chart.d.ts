type AllStatsType = {
  id: string;
  name: string;
  count: number;
  image: string | null;
};

type TopUserType = {
  user_id: string;
  user_name: string;
  avatar_image: string | null;
  total_point: number;
  rank: number;
};

type BagdeCountType = {
  badge_id: string;
  badge_name: string;
  achieved_count: number;
};

type weekCommentDataType = {
  avatar_image: string;
  category_type: string;
  comment_id: string;
  content: string;
  dislike_count: number;
  like_count: number;
  name: string;
  post_id: string;
  user_id: string;
};

interface categoryStatsType {
  avg_comments: number;
  category_id: string;
  category_name: string;
  image_url: string | null;
  topkeywords: string[];
  topusers: TopUserType[];
  total_point: number;
  total_posts: number;
  adopted_posts: number;
  total_users: number;
  users_with_badge: number;
  badge_counts: BagdeCountType[];
}

interface AllStatsCardType extends AllStatsType {
  percent: number;
}
