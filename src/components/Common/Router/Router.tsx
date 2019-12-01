import Route from "./Route";
import Switch from "./Switch";

export const matchesPath = (
  path: string,
  currentPath: string,
  exact: boolean
) => {
  if (path === "*") {
    return true;
  }

  if (exact) {
    return path === currentPath;
  } else {
    return currentPath.startsWith(path);
  }
};

export { Route, Switch };
