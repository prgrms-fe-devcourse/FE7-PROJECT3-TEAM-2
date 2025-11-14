import { redirect } from "next/navigation";

export default function page() {
  return redirect("archive/mypost?sort=all");
}
