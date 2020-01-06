import React, { useState, useEffect, useRef } from "react";

import * as styles from "./AnswerInput.module.scss";

interface AnswerInputProps {
  placeholder?: string;
  disabled?: boolean;
  label?: string;
  shouldFocus?: boolean;
}

const AnswerInput: React.FC<AnswerInputProps> = ({
  placeholder = "Type here",
  label,
  disabled,
  shouldFocus,
}) => {
  const [value, setValue] = useState("");

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(
      e.target.value.length < 1 && label ? label.charAt(0) : e.target.value
    );
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (label) {
      setValue(label.charAt(0));
    }
  }, [label]);

  useEffect(() => {
    if (shouldFocus && inputRef && inputRef.current) {
      inputRef.current.focus();
    }
  }, [shouldFocus, inputRef]);

  return (
    <input
      name="answer"
      className={styles.input}
      type="input"
      placeholder={placeholder}
      disabled={disabled}
      value={value}
      onChange={onChange}
      autoComplete="off"
      ref={inputRef}
    />
  );
};

export default AnswerInput;
