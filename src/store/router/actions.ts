import { RouterActionTypes, SET_ROUTE } from "./types";

export function setRoute(route: string): RouterActionTypes {
  return {
    type: SET_ROUTE,
    payload: route,
  };
}
