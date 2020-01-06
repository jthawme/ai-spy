import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import Card from "../../Common/Card/Card";
import Vision from "../../Common/Vision/Vision";

import { addLabels } from "../../../store/game/actions";
import { setRoute } from "../../../store/router/actions";
import { RootState } from "../../../store/store";

// import * as styles from '../Pages.module.scss';

const Processing: React.FC = () => {
  const dispatch = useDispatch();
  const images: string[] = useSelector((state: RootState) => state.game.images);

  useEffect(() => {
    const api = new Vision();

    api.getLabels(images).then((labels) => {
      dispatch(addLabels(labels));
      dispatch(setRoute("game"));
    });
  }, [images]);

  return (
    <>
      <Card>Processing images</Card>
    </>
  );
};

export default Processing;
