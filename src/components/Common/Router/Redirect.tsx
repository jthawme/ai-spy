import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { setRoute } from "../../../store/router/actions";

export interface RedirectProps {
  path: string;
}

const Redirect: React.FC<RedirectProps> = ({ path }) => {
  const dispatch = useDispatch();

  const advance = () => dispatch(setRoute(path));

  useEffect(() => {
    advance();
  }, []);

  return null;
};

export default Redirect;
