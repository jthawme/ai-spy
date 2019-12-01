import { ReactNode } from 'react';

export interface CameraVideoProps {
  className?: string;

  stream: MediaStream;

  photoRequest: boolean;
  onPhoto: function;
}

export type MediaEvent = Event & {
  target: EventTarget & {
    videoWidth: number;
    videoHeight: number;
  }
}

export interface CameraVideoInternalState {
  canvas: HTMLCanvasElement;
  video: HTMLVideoElement;
  dimensions: {
    width: number;
    height: number;
  }
}

export interface CameraVideoReducerObject {
  type: string;
  canvas?: HTMLCanvasElement;
  video?: HTMLVideoElement;
  dimensions?: {
    width: number;
    height: number;
  }
}
