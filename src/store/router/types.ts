export const SET_ROUTE = "SET_ROUTE";

export interface RouterState {
  pathname: string;
}

export interface SetRouteAction {
  type: typeof SET_ROUTE;
  payload: string;
}

export type RouterActionTypes = SetRouteAction;
