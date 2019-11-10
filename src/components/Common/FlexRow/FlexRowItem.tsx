import * as React from 'react';

import classNames from 'classnames';

import { TagString } from './FlexRow';

import * as styles from './FlexRow.module.scss';

interface FlexRowItemProps {
  children: React.ReactNode;
  className?: string;

  /** Alignment */
  align?: 'left' | 'center' | 'right';

  /** Flex grow number */
  size?: Number;

  el?: TagString;
}

export const FlexRowItem: React.FC<FlexRowItemProps> = ({ children, className, el: El = 'div', align = 'left', size = 1 }) => {
  const cls = classNames(
    [styles[align]],
    className
  );

  return <El className={cls} style={{ flexGrow: size }}>{ children }</El>
};

export default React.memo(FlexRowItem);
