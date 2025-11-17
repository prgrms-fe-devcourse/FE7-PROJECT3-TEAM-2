import { redirect } from "next/navigation";
import MyRankComponent from "@/components/chart/myRank/MyRankComponent";
import { getUser } from "@/services/profile/user";

export default async function Page() {
  const user = await getUser();
  if (!user) redirect("/login");
  return <MyRankComponent user={user} />;
}
