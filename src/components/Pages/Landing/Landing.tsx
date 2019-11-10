import * as React from 'react';

import Card from '../../Common/Card/Card';
import Button from '../../Common/Button/Button';
import FlexRow from '../../Common/FlexRow/FlexRow';
import FlexRowItem from '../../Common/FlexRow/FlexRowItem';

import * as styles from '../Pages.module.scss';

const Landing: React.FC = () => {
  return (
    <>
      <Card>
        <FlexRow className={styles.inner}>
          <FlexRowItem>
            High score: 0
          </FlexRowItem>
          <FlexRowItem align="right">
            Welcome!
          </FlexRowItem>
        </FlexRow>
        <Button>Play!</Button>
      </Card>
      <Button inline bare>Play what?</Button>
    </>
  )
}

export default Landing;
