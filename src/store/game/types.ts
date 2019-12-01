export const ADD_LABELS = "ADD_LABELS";
export const ADD_IMAGES = "ADD_IMAGES";

export interface AddImagesAction {
  type: typeof ADD_IMAGES;
  payload: string[];
}

export interface AddLabelsAction {
  type: typeof ADD_LABELS;
  payload: Array<string[]>;
}

export type GameActionTypes = AddImagesAction | AddLabelsAction;

export interface GameState {
  images: string[];
  labels: Array<string[]>;
}
