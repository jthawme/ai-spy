import * as React from 'react';

import useDimensions from 'react-use-dimensions';
import classNames from 'classnames';

import * as styles from './Logo.module.scss';

interface LogoProps {
  className?: String;
};

const Logo: React.FC<LogoProps> = ({ className }) => {
  const [ref, { x, y, width }] = useDimensions();

  const cls = classNames(
    styles.logo,
    className
  );

  return (
    <h1 ref={ ref } className={cls}>
      {
        'AI SPY'.split('').map((t, idx) => {
          return <span key={idx} style={{ fontSize: `${ width * 0.3 }px` }}>{ t }</span>;
        })
      }
    </h1>
  );
};

export default Logo;
