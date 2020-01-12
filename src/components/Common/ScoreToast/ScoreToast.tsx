import React, { useEffect, useState, useCallback } from "react";

import * as styles from "./ScoreToast.module.scss";
import { motion, AnimatePresence } from "framer-motion";

interface ScoreToastProps {
  score?: string;
  scoreTick?: number;
  children?: React.ReactNode;
  className?: string;
  delay?: number;
}

interface ScoreEl {
  score: string;
  id: number;
}

let internalId = 0;

const ScoreToast: React.FC<ScoreToastProps> = ({
  score,
  scoreTick = 0,
  className,
  children,
  delay = 2000,
}) => {
  const [scores, setScores] = useState<ScoreEl[]>([]);
  const [timer, setTimer] = useState<any>(-1);

  useEffect(() => {
    if (score) {
      clearTimeout(timer);
      setTimer(
        setTimeout(() => {
          setScores([]);
        }, delay)
      );
      setScores([
        ...scores,
        {
          score,
          id: internalId,
        },
      ]);
      internalId++;
    }
  }, [score, scoreTick]);

  return (
    <span className={`${className} ${styles.wrapper}`}>
      <AnimatePresence>
        {scores.length ? (
          <motion.div
            key={scores[scores.length - 1].id}
            initial={{ y: 20, x: "-50%", opacity: 0 }}
            animate={{ y: 0, x: "-50%", opacity: 1 }}
            exit={{ y: -10, x: "-50%", opacity: 0 }}
            className={styles.toast}
          >
            {scores[scores.length - 1].score}
          </motion.div>
        ) : null}
      </AnimatePresence>
      {children}
    </span>
  );
};

export default ScoreToast;
