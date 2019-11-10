import * as React from 'react';

import FlexRow from './FlexRow';
import FlexRowItem from './FlexRowItem';

export default {
  title: 'FlexRow',
};

export const standard = () => (
  <FlexRow>
    <FlexRowItem>
      Item 1
    </FlexRowItem>
    <FlexRowItem>
      Item 2
    </FlexRowItem>
    <FlexRowItem>
      Item 3
    </FlexRowItem>
  </FlexRow>
);

export const double = () => (
  <FlexRow>
    <FlexRowItem>
      Item 1
    </FlexRowItem>
    <FlexRowItem size={2}>
      Item 2 larger
    </FlexRowItem>
    <FlexRowItem>
      Item 3
    </FlexRowItem>
  </FlexRow>
);

export const alignment = () => (
  <FlexRow>
    <FlexRowItem align="left">
      Left
    </FlexRowItem>
    <FlexRowItem align="center">
      Center
    </FlexRowItem>
    <FlexRowItem align="right">
      Right
    </FlexRowItem>
  </FlexRow>
);
