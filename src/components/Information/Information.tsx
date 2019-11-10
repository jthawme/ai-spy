import * as React from 'react';

import classNames from 'classnames';

import Logo from '../Logo/Logo';

import myLogo from '../../images/mylogo.png';
import * as styles from './Information.module.scss';
import Button from '../Common/Button/Button';

interface InformationProps {
  className?: string;

  onClose: Function;
}

const Information: React.FC<InformationProps> = ({ className, onClose }) => {
  const cls = classNames(
    styles.information,
    className
  );

  return (
    <aside className={cls}>
      <header className={styles.header}>
        <Button className={styles.close} icon="x-circle" bare inline onClick={() => onClose()}/>
        <Logo className={styles.logo}/>
      </header>
      <section className={styles.content}>
        <p>
          AI Spy is a computer vision based game using the Google Cloud Vision API
        </p>
        <p>
          Analysing the images, it formulates a game of <a href="https://www.youtube.com/watch?v=5ybJXkE0VaY" target="_blank" rel="noopener noreferrer">I Spy</a> for you to play
        </p>
      </section>
      <section className={styles.privacy}>
        <h2>Privacy</h2>
        <p>
          All images and data are processed client side. Any info regarding how Google process images, please refer to the documentation <a href="https://cloud.google.com/vision/docs/data-usage" target="_blank" rel="noopener noreferrer">here</a>
        </p>
      </section>
      <footer className={styles.footer}>
        <img src={ myLogo }/>
        <p>
          Made by<br/>
          <a href="https://jthaw.me" target="_blank" rel="noopener noreferrer">jthaw.me</a>
        </p>
      </footer>
    </aside>
  );
};

export default Information;
