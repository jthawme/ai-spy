import * as React from 'react';

import classNames from 'classnames';

import * as styles from './FlexRow.module.scss';

export type TagString = string | React.FunctionComponent<any> | (new (props: any) => React.Component);

interface FlexRowProps {
  children: React.ReactNode;

  className?: string;

  /** The tag to stamp the row with */
  el?: TagString;
};

const FlexRow: React.FC<FlexRowProps> = ({ children, className, el: El = 'div' }) => {
  const cls = classNames(
    styles.row,
    className
  );

  return (
    <El className={cls}>
      { children }
    </El>
  )
};

export default FlexRow;
