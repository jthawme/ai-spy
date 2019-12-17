import * as React from "react";

import classNames from "classnames";

import * as styles from "./Card.module.scss";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  flat?: boolean;
}

const Card: React.FC<CardProps> = ({ children, className, flat }) => {
  const cls = classNames(
    styles.card,
    {
      [styles.flat]: flat,
    },
    [className]
  );

  return (
    <div className={cls}>
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Card;
