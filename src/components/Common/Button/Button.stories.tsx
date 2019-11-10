import * as React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Button',
};

export const text = () => <Button>Hello</Button>;

export const inline = () => {
  return (
    <>
      <Button inline size="small">Inline</Button>
    </>
  );
};

export const disabled = () => <Button disabled inline>Disabled</Button>;

export const withClick = () => <Button inline onClick={action('Clicked')}>With Click</Button>;

export const withIcon = () => {
  return (
    <>
      <Button inline onClick={action('Clicked')} icon="box">Icon</Button><br/>
      <Button inline onClick={action('Clicked')} icon="box" size="medium">Icon</Button><br/>
      <Button inline onClick={action('Clicked')} icon="box" size="small">Icon</Button>
    </>
  )
};

export const bare = () => {
  return (
    <>
      <Button inline size="small" icon="share" bare>Inline</Button>
    </>
  );
}
