import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import { RootState } from "../../../store/store";
import { matchesPath } from "./Router";

export interface RouteProps {
  path: string;
  children: React.ReactElement;
  exact?: boolean;
}

const Route: React.FC<RouteProps> = ({ path, exact = false, children }) => {
  const currentPath = useSelector((state: RootState) => state.router.pathname);

  const matches = useMemo(() => matchesPath(path, currentPath, exact), [
    path,
    currentPath,
  ]);

  if (matches) {
    return children;
  }

  return null;
};

export default Route;
