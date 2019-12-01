import { GameState, GameActionTypes, ADD_IMAGES, ADD_LABELS } from "./types";

const initialState: GameState = {
  images: [],
  labels: [],
};

export function gameReducer(
  state = initialState,
  action: GameActionTypes
): GameState {
  switch (action.type) {
    case ADD_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case ADD_LABELS:
      return {
        ...state,
        labels: action.payload,
      };
  }

  return state;
}
