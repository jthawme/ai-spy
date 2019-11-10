import * as React from 'react';
// import { action } from '@storybook/addon-actions';

// import Icon from './Icon';
import Button from '../Button/Button';
import FlexRow from '../FlexRow/FlexRow';
import FlexRowItem from '../FlexRow/FlexRowItem';

export default {
  title: 'Icon',
};

const icons = require.context("./icons", false, /\.svg$/);

export const list = () => {
  const iconsKeys = icons.keys();
  const rows = Math.ceil(iconsKeys.length / 3);
  const list = [];

  for (let i = 0; i < rows; i++ ) {
    list.push(iconsKeys.slice(i * 3, (i + 1) * 3).map(v => v.substring(2, v.length).split('.')[0]));
  }

  return list.map((icons, idx) => {
    return (
      <FlexRow key={idx}>
        {
          icons.map(i => (
            <FlexRowItem align="center">
              <Button size="medium" icon={i} bare inline>{ i }</Button>
            </FlexRowItem>
          ))
        }
      </FlexRow>
    )
  })
};
