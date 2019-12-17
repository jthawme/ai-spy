import React from "react";

import * as styles from "./AnswerInput.module.scss";

interface AnswerInputProps {
  placeholder?: string;
  disabled?: boolean;
}

const AnswerInput: React.FC<AnswerInputProps> = ({
  placeholder = "Type here",
  disabled,
}) => {
  return (
    <input
      name="answer"
      className={styles.input}
      type="input"
      placeholder={placeholder}
      disabled={disabled}
    />
  );
};

export default AnswerInput;
