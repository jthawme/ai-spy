import { GameState, GameActionTypes, ADD_IMAGES, ADD_LABELS } from "./types";
import {
  TEST_IMAGES,
  TEST_LABELS,
} from "../../components/Common/Vision/Vision";

// const initialState: GameState = {
//   images: [],
//   labels: [],
// };
const initialState: GameState = {
  images: TEST_IMAGES,
  labels: TEST_LABELS,
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
