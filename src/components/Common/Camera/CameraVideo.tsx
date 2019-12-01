import React, { useCallback, useReducer, useState, useEffect } from 'react';

import { CameraVideoInternalState, CameraVideoProps, MediaEvent } from './CameraVideo.d';

const CameraVideo: React.FC<CameraVideoProps> = ({ className, stream, photoRequest, onPhoto }) => {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [canvasRef, setCanvasRef] = useState<HTMLCanvasElement | null>(null);
  const [videoRef, setVideoRef] = useState<HTMLCanvasElement | null>(null);

  const setCanvas = useCallback(node => {
    setCanvasRef(node);
  }, []);

  const setVideo = useCallback(node => {
    setVideoRef(node);

    if (node) {
      node.srcObject = stream;
    }
  }, [stream]);

  const onCanPlayThrough = (e: React.SyntheticEvent<HTMLVideoElement, MediaEvent>) => {
    //@ts-ignore Doesnt thing videoWidth/videoHeight are a property
    const { videoWidth, videoHeight } = e.target;
    setDimensions({
      width: videoWidth,
      height: videoHeight
    })
  };

  useEffect(() => {
    if (photoRequest && canvasRef && videoRef) {
      canvasRef.width = dimensions.width;
      canvasRef.height = dimensions.height;
      const ctx = canvasRef.getContext('2d')!;
      ctx.drawImage(videoRef, 0, 0, dimensions.width, dimensions.height);

      onPhoto(canvasRef.toDataURL('image/jpeg'));
    }
  }, [photoRequest, canvasRef])

  return (
    <>
      <canvas ref={setCanvas} style={{display:'none'}}/>
      <video className={ className } ref={ setVideo } onCanPlayThrough={ onCanPlayThrough } playsInline autoPlay muted/>
    </>
  );
};

export default CameraVideo;
