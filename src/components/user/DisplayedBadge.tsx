"use client";

import { Award, UserRoundPen } from "lucide-react";
import { useState } from "react";
// import BadgeDetail from "./BadgeDetail";
import DisplayedBadgeModalForm from "./DisplayedBadgeModalForm";
import { Button } from "../common/Button";
import ResponsiveContainer from "../common/ResponsiveContainer";

type DisplayedBadgeProps = {
  userId: string | null;
  action: (displayedBadgeUrl: string) => Promise<void>;
};
export default function DisplayedBadge({ userId, action }: DisplayedBadgeProps) {
  const [modalStatus, setModalStatus] = useState(false);
  const onHandleModalStatus = () => {
    setModalStatus(prev => !prev);
  };
  return (
    <>
      <ResponsiveContainer className="flex-1 p-6 max-sm:border-none max-sm:px-0">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-1">
            <Award size={12} />
            <p>대표 뱃지</p>
          </div>
          <div className="flex justify-center">
            <div className="flex flex-wrap justify-center gap-52 max-[800px]:max-w-[337px] max-xl:gap-25 max-lg:gap-16 max-sm:max-w-full max-sm:gap-6">
              {/* <BadgeDetail /> */}
            </div>
          </div>
          <div className="flex justify-end">
            <Button size={"xs"} variant={"secondary"} onClick={onHandleModalStatus}>
              <UserRoundPen size={12} className="mr-1" />
              수정하기
            </Button>
          </div>
        </div>
      </ResponsiveContainer>
      {modalStatus && <DisplayedBadgeModalForm userId={userId} setModal={onHandleModalStatus} action={action} />}
    </>
  );
}
