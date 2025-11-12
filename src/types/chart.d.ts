type TopUserType = {
  user_id: string;
  user_name: string;
  avatar_image: string | null;
  total_point: number;
  rank: number;
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
}
