import * as React from 'react';

import classNames from 'classnames';

import * as styles from './Icon.module.scss';

const iconReq = require.context('!!svg-inline-loader?removeSVGTagAttrs=false!./icons', false, /\.svg$/);

function getIcon(iconName: string) {
  const keys = iconReq.keys();
  const target = `./${ iconName }.svg`;

  if (keys.includes(target)) {
    return iconReq(target);
  }

  return iconReq('./box.svg');
}

export type IconSize = "small" | "medium" | "large";

interface IconProps {
  /** The name of the icon */
  icon: string;

  /** A classname to pass to the wrapper */
  className?: string;

  /** Predefined size key for the icons */
  size?: IconSize;
}

const Icon: React.FC<IconProps> = ({ className, icon, size }) => {
  const iconSvg = getIcon(icon);

  const _sizeCls = !!(size) ? styles[size] : null;

  const cls = classNames(
    styles.wrap,
    _sizeCls,
    className
  );

  return <span className={ cls } dangerouslySetInnerHTML={{ __html: iconSvg }}/>
};

export default React.memo(Icon);
