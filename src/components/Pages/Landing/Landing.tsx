import * as React from "react";

import { useDispatch } from "react-redux";

import Card from "../../Common/Card/Card";
import Button from "../../Common/Button/Button";
import FlexRow from "../../Common/FlexRow/FlexRow";
import FlexRowItem from "../../Common/FlexRow/FlexRowItem";

import { setRoute } from "../../../store/router/actions";

import * as styles from "../Pages.module.scss";

const Landing: React.FC = () => {
  const dispatch = useDispatch();

  const advance = () => dispatch(setRoute("photos"));

  return (
    <>
      <Card>
        <FlexRow className={styles.inner}>
          <FlexRowItem>High score: 0</FlexRowItem>
          <FlexRowItem align="right">Welcome!</FlexRowItem>
        </FlexRow>
        <Button onClick={advance}>Play!</Button>
      </Card>
      <Button inline bare>
        Play what?
      </Button>
    </>
  );
};

export default Landing;
