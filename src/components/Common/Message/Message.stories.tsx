import * as React from "react";
// import { action } from '@storybook/addon-actions';

// import Icon from './Icon';
import Message from "../Message/Message";

export default {
  title: "Message",
};

export const standard = () => {
  return (
    <>
      <Message text="This is a message" icon="aperture" />
      <Message text="This is a message" icon="aperture" animated />
    </>
  );
};
