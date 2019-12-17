import React from "react";

import Button from "../Common/Button/Button";

import * as styles from "./Hints.module.scss";

interface HintsProps {}

const Hints: React.FC<HintsProps> = ({}) => {
  return (
    <ul className={styles.list}>
      <li>
        <Button size="small" icon="type" bare inline>
          Characters
        </Button>
      </li>
      <li>
        <Button size="small" icon="layers" bare inline>
          Words
        </Button>
      </li>
      <li>
        <Button size="small" icon="image" bare inline>
          Image
        </Button>
      </li>
    </ul>
  );
};

export default Hints;
