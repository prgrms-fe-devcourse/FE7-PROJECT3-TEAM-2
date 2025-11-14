"use client";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./toast.css";

export type ToastType = "SUCCESS" | "ERROR" | "INFO";

// const notify = (message: string, type: ToastType) => Toast({ message, type });
// notify("프로필이 수정되었습니다!", "SUCCESS");

export default function Toast({ message, type }: { message: string; type: ToastType }) {
  switch (type) {
    case "SUCCESS":
      return toast.success(message, {
        className: "toast-success",
      });
    case "ERROR":
      return toast.error(message, {
        className: "toast-error",
      });
    case "INFO":
      return toast.info(message, {
        className: "toast-success",
      });
    default:
      return null;
  }
}
