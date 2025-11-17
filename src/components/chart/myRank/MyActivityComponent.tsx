import { categoryColor } from "@/utils/category";
import ProgressBar from "../ProgressBar";

interface MyActivityProps {
  category_name: string;
  comments_count: number;
  posts_count: number;
}

export default function MyActivityComponent({ stats }: { stats: MyActivityProps[] }) {
  const maxPosts = Math.max(...stats.map(item => item.posts_count));
  const maxComments = Math.max(...stats.map(item => item.comments_count));

  return (
    <div className="mt-4 flex max-h-[400px] flex-col gap-5 overflow-y-auto">
      {stats.map(category => {
        const postsPercent = maxPosts ? (category.posts_count / maxPosts) * 100 : 0;
        const commentsPercent = maxComments ? (category.comments_count / maxComments) * 100 : 0;
        const color = categoryColor[category.category_name];
        return (
          <div key={category.category_name} className="pl-0.5">
            <div className="mb-2.5 flex items-center justify-between">
              <h3 className="text-sm font-semibold">{category.category_name}</h3>
            </div>
            <ProgressBar percent={postsPercent} count={category.posts_count} color={color} />
            <ProgressBar percent={commentsPercent} count={category.comments_count} color={color} className="mt-1" />
          </div>
        );
      })}
    </div>
  );
}
