import * as React from 'react';

import CameraResolving from './CameraResolving';

interface CameraProps {
  children: (hasCamera: boolean) => React.ReactNode;
}

const Camera: React.FC<CameraProps> = ({ children }) => {
  const [cameraResolved, setCameraResolved] = React.useState(false);
  const [hasCamera, setHasCamera] = React.useState(false);

  React.useEffect(() => {
    const t = setTimeout(() => {
      setCameraResolved(true);
      setHasCamera(true);
    }, 2000);

    return () => clearTimeout(t);
  })

  return (
    <>
      { !cameraResolved && <CameraResolving /> }
      { cameraResolved && children(hasCamera) }
    </>
  );
};

export default Camera;
