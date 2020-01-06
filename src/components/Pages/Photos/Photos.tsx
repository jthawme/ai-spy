import React, { useState } from "react";

import Camera from "../../Common/Camera/Camera";
import CameraVideo from "../../Common/Camera/CameraVideo";

import Card from "../../Common/Card/Card";
import Button from "../../Common/Button/Button";
import FlexRow from "../../Common/FlexRow/FlexRow";
import FlexRowItem from "../../Common/FlexRow/FlexRowItem";

import * as pageStyles from "../Pages.module.scss";
import * as styles from "./Photos.module.scss";
import { useDispatch } from "react-redux";
import { setRoute } from "../../../store/router/actions";
import { MAX_IMAGES } from "../../../constants";
import { addImages } from "../../../store/game/actions";

const Photos: React.FC = () => {
  const dispatch = useDispatch();

  const [photoRequest, setPhotoRequest] = useState(false);
  const [photos, setPhotos] = useState<Array<string>>([]);

  const onPhoto = (photo: string) => {
    setPhotoRequest(false);
    setPhotos([...photos, photo]);
  };

  const getTile = (index: number) => {
    return index < photos.length
      ? { backgroundImage: `url(${photos[index]})` }
      : {};
  };

  if (photos.length === MAX_IMAGES) {
    dispatch(addImages(photos));
    dispatch(setRoute("processing"));
  }

  return (
    <Camera>
      {(hasCamera, switchCamera, stream) => (
        <>
          <div className={styles.mainImage}>
            <div className={styles.tile}>
              <div className={styles.tileInner}>
                {!!stream && (
                  <CameraVideo
                    className={styles.video}
                    stream={stream}
                    photoRequest={photoRequest}
                    onPhoto={onPhoto}
                  />
                )}
              </div>
            </div>
          </div>
          <FlexRow className={styles.photoRow}>
            <FlexRowItem className={styles.tile}>
              <div className={styles.tileInner} style={getTile(0)} />
            </FlexRowItem>
            <FlexRowItem className={styles.tile}>
              <div className={styles.tileInner} style={getTile(1)} />
            </FlexRowItem>
            <FlexRowItem className={styles.tile}>
              <div className={styles.tileInner} style={getTile(2)} />
            </FlexRowItem>
            <FlexRowItem className={styles.tile}>
              <div className={styles.tileInner} style={getTile(3)} />
            </FlexRowItem>
          </FlexRow>
          <Card>
            <FlexRow className={pageStyles.inner}>
              <FlexRowItem>
                {hasCamera ? (
                  <Button
                    icon="camera"
                    bare
                    inline
                    size="small"
                    onClick={() => switchCamera()}
                  >
                    Switch Camera
                  </Button>
                ) : (
                  <Button icon="camera-off" bare inline size="small">
                    Camera Disabled
                  </Button>
                )}
              </FlexRowItem>
              <FlexRowItem align="right">
                {photos.length} / {MAX_IMAGES}
              </FlexRowItem>
            </FlexRow>
            {hasCamera ? (
              <Button onClick={() => setPhotoRequest(true)}>Take Photo</Button>
            ) : (
              <span>Choose photos</span>
            )}
          </Card>
        </>
      )}
    </Camera>
  );
};

export default Photos;
