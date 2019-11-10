import * as React from 'react';

import classNames from 'classnames';

import * as styles from './Card.module.scss';

interface CardProps {
  children: React.ReactNode;
};

const Card: React.FC<CardProps> = ({ children }) => {
  const cls = classNames(
    styles.card
  );

  return (
    <div className={cls}>
      <div className={styles.content}>
        { children }
      </div>
    </div>
  );
};

export default Card;
