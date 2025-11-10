import { cva, VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(`flex items-center justify-center rounded-xs bg-gray-300 p-0.5 text-gray-500`, {
  variants: {
    buttonType: {
      like: "bg-main text-white",
      disLike: "bg-rose-600 text-white",
      adopt: "bg-emerald-600 text-white",
    },
  },
});

const textVariants = cva(`text-text-main`, {
  variants: {
    buttonType: {
      like: "text-main",
      disLike: "text-rose-600",
      adopt: "text-emerald-600",
    },
  },
});

interface CommentReactionBtnProps
  extends React.ComponentPropsWithoutRef<"button">,
    VariantProps<typeof buttonVariants> {
  text?: string;
  className?: string;
}

export default function CommentReactionBtn({
  children,
  buttonType,
  text,
  className,
  ...props
}: CommentReactionBtnProps) {
  const isActive = !!text;
  return (
    <div className="flex">
      {" "}
      <button className={twMerge(buttonVariants(), isActive && buttonVariants({ buttonType }), className)} {...props}>
        {children}
      </button>
      {text && (
        <span className={twMerge("ml-1 text-[8px]", textVariants(), isActive && textVariants({ buttonType }))}>
          {buttonType === "adopt" ? "채택" : text}
        </span>
      )}
    </div>
  );
}
