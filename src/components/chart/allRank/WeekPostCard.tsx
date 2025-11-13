import Badge from "@/components/common/Badge";
import BaseImage from "@/components/common/image/BaseImage";
import { categoryColor } from "@/utils/category";

export default function WeekPostCard({ post }: { post: WeekPostDataType }) {
  const image = post.post_image
    ? post.post_image
    : "https://lfkxloulmqeonuzaudtt.supabase.co/storage/v1/object/public/user_upload_image/default_image.png";

  return (
    <div className="col-span-1 w-full rounded-lg border border-gray-200 p-1">
      <BaseImage src={image} alt="post_img" className="h-[250px] max-h-[200px] w-full" />
      <div className="flex flex-col gap-1.5 p-2">
        <span className="text-text-title text-sm font-semibold">{post.title}</span>
        <span className="text-text-light text-xs font-semibold">{post.author_name}</span>
        <div className="flex justify-end">
          <Badge
            text={post.category_name}
            size={"sm"}
            className="text-white"
            style={{ backgroundColor: categoryColor[post.category_name] }}
          />
        </div>
      </div>
    </div>
  );
}
