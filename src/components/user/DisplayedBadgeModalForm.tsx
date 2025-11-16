"use client";

import { Award, UserRoundPen } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "../common/Button";

type DisplayedBadgeModalFormProps = {
  userId: string | null;
  setModal: () => void;
  action: (displayedBadgeUrl: string) => Promise<void>;
};
export default function DisplayedBadgeModalForm({ userId, setModal, action }: DisplayedBadgeModalFormProps) {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const [displayedBadgeList] = useState("");
  const [isPending, setIsPending] = useState(false);

  //모달 내부는 클릭해도 사라지지 않게
  const preventOffModal = (event: React.MouseEvent) => {
    event.stopPropagation();
  };

  return (
    <>
      <div className="fixed inset-0 z-11 flex h-full w-full justify-center bg-gray-500/50 py-20" onMouseDown={setModal}>
        <div onMouseDown={preventOffModal} className="bg-bg-main z-12 h-fit w-[80%] rounded-3xl p-12 max-sm:p-9">
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-1">
              <Award size={12} />
              <p>대표 뱃지 {userId}</p>
            </div>
            <div className="flex justify-end">
              <Button
                size={"xs"}
                variant={"secondary"}
                type="submit"
                onClick={() => {
                  setIsPending(true);
                  action(displayedBadgeList);
                }}
                disabled={isPending}
              >
                <UserRoundPen size={12} className="mr-1" />
                {isPending ? "저장중" : "저장하기"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
