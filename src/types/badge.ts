export const BADGE_MAP = {
  tech: {
    bgColor: "bg-indigo-300",
    textColor: "text-white",
  },
  finance: {
    bgColor: "bg-yellow-400",
    textColor: "text-white",
  },
  cooking: {
    bgColor: "bg-[#ED7371]",
    textColor: "text-white",
  },
  life: {
    bgColor: "bg-orange-300",
    textColor: "text-white",
  },
  love: {
    bgColor: "bg-pink-400",
    textColor: "text-white",
  },
  game: {
    bgColor: "bg-sky-300",
    textColor: "text-white",
  },
  daily: {
    bgColor: "bg-blue-300",
    textColor: "text-white",
  },
  fashion: {
    bgColor: "bg-purple-300",
    textColor: "text-white",
  },
  health: {
    bgColor: "bg-slate-400",
    textColor: "text-white",
  },
  study: {
    bgColor: "bg-cyan-400",
    textColor: "text-white",
  },
  travel: {
    bgColor: "bg-emerald-300",
    textColor: "text-white",
  },
} as const;

export type BadgeType = keyof typeof BADGE_MAP;
