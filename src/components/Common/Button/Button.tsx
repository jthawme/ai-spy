import * as React from 'react';

import * as styles from './Button.module.scss';

interface BtnProps {
  children: React.ReactNode;

  /** Attaching an onclick to the button */
  onClick?: (evt: React.MouseEvent) => void;
};

const Button: React.FC<BtnProps> = ({ children, onClick = () => {} }) => {
  return (
    <button className={styles.btn} onClick={onClick}>{ children }</button>
  )
};

export default Button;
