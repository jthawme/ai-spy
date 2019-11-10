import * as React from 'react';

import Camera from '../../Common/Camera/Camera';
import Card from '../../Common/Card/Card';
import Button from '../../Common/Button/Button';
import FlexRow from '../../Common/FlexRow/FlexRow';
import FlexRowItem from '../../Common/FlexRow/FlexRowItem';

import * as pageStyles from '../Pages.module.scss';
import * as styles from './Photos.module.scss';

const Photos: React.FC = () => {
  return (
    <Camera>
      {
        (hasCamera) => (
          <>
            <div className={styles.mainImage}>
              <div className={styles.tile}>
                <div className={styles.tileInner}/>
              </div>
            </div>
            <FlexRow className={styles.photoRow}>
              <FlexRowItem className={styles.tile}>
                <div className={styles.tileInner}/>
              </FlexRowItem>
              <FlexRowItem className={styles.tile}>
                <div className={styles.tileInner}/>
              </FlexRowItem>
              <FlexRowItem className={styles.tile}>
                <div className={styles.tileInner}/>
              </FlexRowItem>
              <FlexRowItem className={styles.tile}>
                <div className={styles.tileInner}/>
              </FlexRowItem>
            </FlexRow>
            <Card>
              <FlexRow className={pageStyles.inner}>
                <FlexRowItem>
                  {
                    hasCamera ? (
                      <Button icon='camera' bare inline size="small">
                        Switch Camera
                      </Button>
                    ) : (
                      <Button icon='camera-off' bare inline size="small">
                        Camera Disabled
                      </Button>
                    )
                  }
                </FlexRowItem>
                <FlexRowItem align="right">
                  0 / 4
                </FlexRowItem>
              </FlexRow>
              <Button>Take Photo</Button>
            </Card>
          </>
        )
      }
    </Camera>
  );
};

export default Photos;
