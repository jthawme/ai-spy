import React from "react";
import { useSelector } from "react-redux";

import Card from "../../Common/Card/Card";

import { RootState } from "../../../store/store";

// import * as styles from '../Pages.module.scss';

const Game: React.FC = () => {
  const game = useSelector((state: RootState) => state.game);

  return (
    <>
      <Card>
        {game.images.map((img) => (
          <img src={img} />
        ))}
      </Card>
    </>
  );
};

export default Game;
