import React, { useEffect, useState, CSSProperties } from "react";

import classNames from "classnames";
import { useTrail, animated, SpringConfig } from "react-spring";

import * as styles from "./VisualSpeech.module.scss";

interface VisualSpeechProps {
  text: string;
  voice: false | SpeechSynthesisVoice;
  muted: boolean;
}

function shouldAddHighlight(
  word: string,
  idx: number,
  totalWords: number
): string | undefined {
  return word.length === 1 && idx === totalWords - 1
    ? styles.highlight
    : undefined;
}

function getUtterance(text: string, voice: SpeechSynthesisVoice) {
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.voice = voice;

  return utterance;
}

interface WordProps {
  className?: string;
  text: string;
  animateProps: CSSProperties;
}

const VisualSpeechWord = ({ className, text, animateProps }: WordProps) => {
  return (
    <animated.span style={animateProps} className={className}>
      {text}
    </animated.span>
  );
};

const config: SpringConfig = {
  tension: 300,
  friction: 20,
};

const VisualSpeech: React.FC<VisualSpeechProps> = ({ text, muted, voice }) => {
  const [words, setWords] = useState<string[]>([]);

  useEffect(() => {
    setWords(text.split(" "));

    if (!muted && voice) {
      speechSynthesis.cancel();
      speechSynthesis.speak(getUtterance(text, voice));
    }
  }, [text, muted]);

  const trail = useTrail(words.length, {
    config,
    opacity: 1,
    transform: `translate3d(0,0,0)`,
    from: { opacity: 0, transform: `translate3d(0,10px,0)` },
  });

  const cls = classNames(styles.speech);

  return (
    <>
      <div className={cls}>
        {words.map((word, idx) => (
          <VisualSpeechWord
            key={word + idx}
            className={shouldAddHighlight(word, idx, words.length)}
            text={word + " "}
            animateProps={trail[idx]}
          />
        ))}
      </div>
    </>
  );
};

export default VisualSpeech;
