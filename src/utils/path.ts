import { NavDataType } from "@/routes/routes.type";

export const getLabelPath = (
  pathname: string,
  data: NavDataType[],
  basePath = ""
): { label: string; pathname: string }[] | null => {
  for (const item of data) {
    const fullPath = basePath + item.pathname;
    if (fullPath === pathname) return [{ label: item.label, pathname: fullPath }];

    if (item.children) {
      const childPath = getLabelPath(pathname, item.children, fullPath + "/");
      if (childPath) return [{ label: item.label, pathname: fullPath }, ...childPath];
    }
  }
  return null;
};
