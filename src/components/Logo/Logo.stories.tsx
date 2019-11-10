import * as React from 'react';
// import { action } from '@storybook/addon-actions';

import Logo from './Logo';

export default {
  title: 'Logo',
};

export const text = () => {
  return (
    <>
      <div style={{ width: `500px` }}><Logo/></div>
      <div style={{ width: `280px` }}><Logo/></div>
      <div style={{ width: `160px` }}><Logo/></div>
    </>
  );
};
