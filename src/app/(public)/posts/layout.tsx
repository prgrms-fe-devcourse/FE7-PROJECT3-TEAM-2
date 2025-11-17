import Category from "@/components/post/Category";
import { createClient } from "@/utils/supabase/server";

export default async function PostsLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data } = await supabase.from("category").select("*");

  if (data) {
    return (
      <div className="flex w-full flex-col">
        <Category categorys={data} />
        {children}
      </div>
    );
  } else return null;
}
