import { ADD_IMAGES, GameActionTypes, ADD_LABELS } from "./types";

export function addImages(images: string[]): GameActionTypes {
  return {
    type: ADD_IMAGES,
    payload: images,
  };
}

export function addLabels(labels: Array<string[]>): GameActionTypes {
  return {
    type: ADD_LABELS,
    payload: labels,
  };
}
