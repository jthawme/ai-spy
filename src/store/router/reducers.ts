import { RouterState, RouterActionTypes, SET_ROUTE } from "./types";

const initialState: RouterState = {
  pathname: "home",
};

export function routerReducer(
  state = initialState,
  action: RouterActionTypes
): RouterState {
  switch (action.type) {
    case SET_ROUTE:
      return {
        ...state,
        pathname: action.payload,
      };
  }
  return state;
}
