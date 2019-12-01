import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import { matchesPath } from "./Router";
import { RouteProps } from "./Route";

interface SwitchProps {
  children: React.ReactElement[];
}

const Switch: React.FC<SwitchProps> = ({ children }) => {
  const currentPath = useSelector((state: RootState) => state.router.pathname);

  function lastChild(_children: React.ReactElement[]) {
    return _children[_children.length - 1];
  }

  return (
    <>
      {React.Children.toArray(children).find((child) => {
        if (!React.isValidElement<RouteProps>(child)) {
          return false;
        }

        if (
          matchesPath(child.props.path, currentPath, child.props.exact || false)
        ) {
          return child;
        }
        return false;
      }) || lastChild(children)}
    </>
  );
};

export default Switch;
