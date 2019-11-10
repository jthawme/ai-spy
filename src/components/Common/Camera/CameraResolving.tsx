import * as React from 'react';

import Card from '../Card/Card';

import * as styles from './Camera.module.scss';

const CameraResolving: React.FC = () => {
  return (
    <Card>
      <p className={styles.text}>Requesting access to webcam</p>
    </Card>
  )
};

export default CameraResolving;
