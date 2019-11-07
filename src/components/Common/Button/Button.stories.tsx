import * as React from 'react';
import { action } from '@storybook/addon-actions';

import Button from './Button';

export default {
  title: 'Button',
};

export const text = () => <Button>Hello</Button>;

export const withClick = () => <Button onClick={action('Clicked')}>With Click</Button>;
