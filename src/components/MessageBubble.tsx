import { cva, VariantProps } from "class-variance-authority";
import Badge from "./Badge";

interface MessageBubbleProps extends VariantProps<typeof BubbleVariants> {
  name?: string;
  time: string;
  text: string;
}

const isMine = true; // true 내 댓글, false 남 댓글

const BubbleVariants = cva("flex items-end gap-2 w-full", {
  variants: {
    isMine: {
      true: "justify-end",
      false: "justify-start",
    },
  },
  defaultVariants: {
    isMine: false,
  },
});

const TextVariants = cva("max-w-[60%] px-5 py-3 rounded-2xl", {
  variants: {
    isMine: {
      true: "bg-main text-white",
      false: "bg-white text-gray-900 border-2 border-gray-100",
    },
  },
  defaultVariants: {
    isMine: false,
  },
});

export default function MessageBubble({ isMine = false, name, time, text }: MessageBubbleProps) {
  return (
    <div className={BubbleVariants({ isMine })}>
      {isMine ? (
        <>
          <div className="flex flex-col">
            <button className="text-text-sub text-[8px]">수정 삭제</button>
            <span className="text-text-sub text-[8px]">{time}</span>
          </div>
          <div className={TextVariants({ isMine })}>
            <p>{text}</p>
          </div>
        </>
      ) : (
        <div>
          <div className="flex items-center justify-start gap-2">
            {/* <Profile /> */}
            <span className="text-[12px]">{name}</span>
            <div className="flex flex-col">
              {/* <Badge />
              <Badge /> */}
            </div>
          </div>

          <div className="flex items-end">
            <div className={TextVariants({ isMine })}>
              <p>{text}</p>
            </div>
            <span className="text-text-sub text-[8px]">{time}</span>
          </div>

          <div></div>
        </div>
      )}
    </div>
  );
}
