import UserNavBar from "@/components/user/UserNavBar";

export default function UserLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="w-full px-6 pt-5">
        <UserNavBar />
        {children}
      </div>
    </>
  );
}
