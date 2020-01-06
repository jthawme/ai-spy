import React, { useState, useEffect } from "react";

interface AnswerResolveProps {
  question: number;
  labels: string[][];
  onTotal: (total: number) => void;
  onAnswer: (answer: string) => void;
  target?: number;
}

const TARGET_TOTAL = 4;

const getRandomAnswer = (answers: string[], used: string[]) => {
  const possible = answers.filter((answer) => !used.includes(answer));
  return possible[Math.floor(Math.random() * possible.length)];
};

const AnswerResolver: React.FC<AnswerResolveProps> = ({
  question,
  labels,
  onAnswer,
  onTotal,
  target = TARGET_TOTAL,
}) => {
  const [usedAnswers, setUsedAnswers] = useState<string[]>([]);
  const [possibleAnswers, setPossibleAnswers] = useState<string[]>([]);

  useEffect(() => {
    const possible = Array.from(new Set(labels.flat()));
    setPossibleAnswers(possible);
    onTotal(possible.length < target ? possible.length : target);
  }, [labels]);

  useEffect(() => {
    if (possibleAnswers.length > 0) {
      const answer = getRandomAnswer(possibleAnswers, usedAnswers);
      setUsedAnswers([...usedAnswers, answer]);
      onAnswer(answer);
    }
  }, [possibleAnswers, question]);

  return null;
};

export default AnswerResolver;
