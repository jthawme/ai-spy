import * as React from "react";

import Card from "../Card/Card";
import Message from "../Message/Message";

import * as styles from "./Camera.module.scss";

const CameraResolving: React.FC = () => {
  return (
    <Card>
      <Message
        className={styles.message}
        icon="camera"
        text="Requesting webcam"
      />
    </Card>
  );
};

export default CameraResolving;
