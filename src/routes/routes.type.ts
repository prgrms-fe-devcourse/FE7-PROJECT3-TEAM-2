import type { StaticImageData } from "next/image";

interface NavType {
  label: string;
  icon?: StaticImageData;
  pathname: string;
}

export interface NavDataType extends NavType {
  children?: NavType[];
}
