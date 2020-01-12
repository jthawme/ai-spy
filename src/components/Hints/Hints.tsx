import React, { useState, useCallback } from "react";

import Button from "../Common/Button/Button";

import * as styles from "./Hints.module.scss";
import ScoreToast from "../Common/ScoreToast/ScoreToast";

interface HintsProps {}

interface HintsObject {
  characters: boolean;
  words: boolean;
  image: boolean;
}

const initialHints = {
  characters: false,
  words: false,
  image: false,
};

const Hints: React.FC<HintsProps> = ({}) => {
  const [hintsUsed, setHintsUsed] = useState<HintsObject>(initialHints);

  const useHint = useCallback(
    (hint: string) => {
      setHintsUsed({
        ...hintsUsed,
        [hint]: true,
      });
    },
    [hintsUsed]
  );

  return (
    <ul className={styles.list}>
      <li>
        <ScoreToast score={hintsUsed.characters ? "-400" : undefined}>
          <Button
            className={styles.btn}
            size="small"
            icon="type"
            bare
            inline
            onClick={() => useHint("characters")}
            disabled={hintsUsed.characters}
          >
            Characters
          </Button>
        </ScoreToast>
      </li>
      <li>
        <ScoreToast score={hintsUsed.words ? "-200" : undefined}>
          <Button
            className={styles.btn}
            size="small"
            icon="layers"
            bare
            inline
            onClick={() => useHint("words")}
            disabled={hintsUsed.words}
          >
            Words
          </Button>
        </ScoreToast>
      </li>
      <li>
        <ScoreToast score={hintsUsed.image ? "-500" : undefined}>
          <Button
            className={styles.btn}
            size="small"
            icon="image"
            bare
            inline
            onClick={() => useHint("image")}
            disabled={hintsUsed.image}
          >
            Image
          </Button>
        </ScoreToast>
      </li>
    </ul>
  );
};

export default Hints;
