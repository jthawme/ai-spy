import React, { useState, useEffect, useCallback } from "react";
// import { action } from '@storybook/addon-actions';

// import Icon from './Icon';
import ScoreToast from "./ScoreToast";
import Button from "../Button/Button";

export default {
  title: "Score Toast",
};

export const standard = () => {
  const [score, setScore] = useState("100");
  const [scoreTick, setScoreTick] = useState(0);

  const increase = useCallback(
    (num: string) => {
      setScore(num);
      setScoreTick(scoreTick + 1);
    },
    [setScore, score, scoreTick, setScoreTick]
  );

  return (
    <div style={{ padding: "40px" }}>
      <ScoreToast score={score} scoreTick={scoreTick} delay={1000}>
        <Button onClick={() => increase("100")} inline size="small">
          100
        </Button>

        <Button onClick={() => increase("500")} inline size="small">
          500
        </Button>
      </ScoreToast>
    </div>
  );
};
