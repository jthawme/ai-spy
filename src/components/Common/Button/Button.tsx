import * as React from 'react';
import classNames from 'classnames';

import * as styles from './Button.module.scss';
import Icon, { IconSize } from '../Icon/Icon';

export type ButtonSize = "small" | "medium" | "large";

interface BtnProps {
  children?: React.ReactNode;
  className?: string;

  /** Whether width should be auto and inline */
  inline?: Boolean;

  /** Passing through native disabled state */
  disabled?: Boolean;

  /** Whether to remove all styles */
  bare?: Boolean;

  /** The size of the button */
  size?: ButtonSize;

  /** Whether to add an icon to the button */
  icon?: string;

  /** Whether to add an icon to the button */
  iconSize?: IconSize;

  /** Attaching an onclick to the button */
  onClick?: (evt: React.MouseEvent) => void;
};

const Button: React.FC<BtnProps> = ({ children, className, inline, onClick = () => {}, disabled, bare, icon, iconSize, size = "large" }) => {
  const _sizeCls = bare ? '' : styles[size];

  const cls = classNames(
    styles.btn,
    {
      [styles.inline]: inline
    },
    {
      [styles.bare]: bare
    },
    _sizeCls,
    className
  );

  return (
    <button className={ cls } onClick={ onClick } disabled={ !!(disabled) }>
      { icon && <Icon className={ styles.icon } size={ iconSize || size } icon={ icon }/> }
      { children && children }
    </button>
  )
};

export default Button;
